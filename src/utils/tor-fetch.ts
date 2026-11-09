import net from "node:net";
import http from "node:http";
import https from "node:https";
import { SocksProxyAgent } from "socks-proxy-agent";
import * as cheerio from "cheerio";
import { RateLimiter } from "./rate-limiter.js";

// ─── Tor SOCKS5 Proxy Client ───

const MAX_BODY_SIZE = 10 * 1024 * 1024; // 10 MB
const TOR_TIMEOUT_MS = 60_000; // 60 seconds
const TOR_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0";

// Rate limiter: 3s between Tor requests (circuits are slow + shared)
const torLimiter = new RateLimiter(3000);

export interface TorStatus {
  socksAvailable: boolean;
  socksHost: string;
  socksPort: number;
}

export interface ScrapedPage {
  url: string;
  statusCode: number;
  title: string;
  links: { href: string; text: string }[];
  bodyText: string;
  fetchTimeMs: number;
}

export interface TorHttpResponse {
  url: string;
  statusCode: number;
  headers: http.IncomingHttpHeaders;
  body: string;
}

// ─── Check Tor Status ───

export async function checkTorStatus(
  host = "127.0.0.1",
  port = 9050,
): Promise<TorStatus> {
  const available = await new Promise<boolean>((resolve) => {
    const socket = new net.Socket();
    const timer = setTimeout(() => {
      socket.destroy();
      resolve(false);
    }, 5_000);

    socket.on("connect", () => {
      // SOCKS5 handshake: version 5, 1 auth method (no auth)
      socket.write(Buffer.from([0x05, 0x01, 0x00]));
    });

    socket.on("data", (data: Buffer) => {
      clearTimeout(timer);
      socket.destroy();
      // Valid SOCKS5 response: 0x05 0x00 (no auth required)
      resolve(data[0] === 0x05 && data[1] === 0x00);
    });

    socket.on("error", () => {
      clearTimeout(timer);
      resolve(false);
    });

    socket.connect(port, host);
  });

  return { socksAvailable: available, socksHost: host, socksPort: port };
}

// ─── Create SOCKS5h Agent ───

function createAgent(host: string, port: number): SocksProxyAgent {
  // socks5h:// = DNS resolution on Tor side (prevents DNS leaks)
  return new SocksProxyAgent(`socks5h://${host}:${port}`, {
    timeout: TOR_TIMEOUT_MS,
  });
}

// ─── Validate .onion URL ───

function validateOnionUrl(url: string): void {
  const parsed = new URL(url);
  if (!parsed.hostname.endsWith(".onion")) {
    throw new Error("Only .onion URLs are allowed for Tor fetch. Use regular fetch for clearnet.");
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Only http:// and https:// protocols are supported.");
  }
}

// ─── Fetch any http(s) URL through the Tor SOCKS5 proxy ───
// Generic transport: onion mirrors of clearnet sites are plain http://, and callers that
// need the raw status/headers (e.g. token rejection is a 302) must not get redirects followed.

export async function torHttpGet(
  url: string,
  options: { host?: string; port?: number; headers?: Record<string, string> } = {},
): Promise<TorHttpResponse> {
  const host = options.host ?? "127.0.0.1";
  const port = options.port ?? 9050;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`Invalid URL: ${url}`);
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Only http:// and https:// protocols are supported over Tor.");
  }

  await torLimiter.acquire();

  const agent = createAgent(host, port);
  const client = parsed.protocol === "https:" ? https : http;

  return new Promise((resolve, reject) => {
    const req = client.get(
      url,
      {
        agent,
        timeout: TOR_TIMEOUT_MS,
        headers: {
          "User-Agent": TOR_USER_AGENT,
          Accept: "text/html,application/xhtml+xml,*/*",
          "Accept-Language": "en-US,en;q=0.5",
          Referer: "",
          ...options.headers,
        },
      },
      (res) => {
        const chunks: Buffer[] = [];
        let totalSize = 0;

        res.on("data", (chunk: Buffer) => {
          totalSize += chunk.length;
          if (totalSize > MAX_BODY_SIZE) {
            req.destroy(new Error(`Response exceeded ${MAX_BODY_SIZE} bytes limit`));
            return;
          }
          chunks.push(chunk);
        });

        res.on("end", () => {
          resolve({
            url,
            statusCode: res.statusCode ?? 0,
            headers: res.headers,
            body: Buffer.concat(chunks).toString("utf-8"),
          });
        });

        res.on("error", reject);
      },
    );

    req.on("error", (err) => {
      if (err.message.includes("ECONNREFUSED")) {
        reject(new Error(
          `Tor SOCKS5 proxy not available at ${host}:${port}. ` +
          "Start Tor daemon first: brew services start tor (macOS) or sudo systemctl start tor (Linux)",
        ));
      } else {
        reject(err);
      }
    });

    req.on("timeout", () => {
      req.destroy(new Error(`Tor request timed out after ${TOR_TIMEOUT_MS}ms`));
    });
  });
}

// ─── Fetch Raw HTML from .onion ───

export async function fetchOnion(
  url: string,
  host = "127.0.0.1",
  port = 9050,
): Promise<{ html: string; statusCode: number }> {
  validateOnionUrl(url);
  const response = await torHttpGet(url, { host, port });
  return { html: response.body, statusCode: response.statusCode };
}

// ─── Scrape .onion Page (parsed) ───

export async function scrapeOnion(
  url: string,
  host = "127.0.0.1",
  port = 9050,
): Promise<ScrapedPage> {
  const start = Date.now();
  const { html, statusCode } = await fetchOnion(url, host, port);
  const $ = cheerio.load(html);

  const title = $("title").first().text().trim();

  const links: { href: string; text: string }[] = [];
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    const linkText = $(el).text().trim();
    if (href && linkText) {
      links.push({ href, text: linkText });
    }
  });

  // Extract visible body text
  $("script, style, noscript, iframe").remove();
  const bodyText = $("body").text().replace(/\s+/g, " ").trim();

  return {
    url,
    statusCode,
    title,
    links,
    bodyText: bodyText.substring(0, 50_000),
    fetchTimeMs: Date.now() - start,
  };
}
