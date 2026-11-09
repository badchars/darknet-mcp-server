// Tor network intelligence provider
// Tools: torStatus, torFetchOnion, torScrapeOnion, torSearchOnion, torExitNodes, torExitCheck, torExitDetails

import * as cheerio from "cheerio";
import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import {
  checkTorStatus,
  fetchOnion,
  scrapeOnion,
  torHttpGet,
  type TorStatus,
  type ScrapedPage,
} from "../utils/tor-fetch.js";

// ─── Types ───

export type { TorStatus, ScrapedPage };

export interface TorExitNode {
  fingerprint: string;
  published: string;
  lastStatus: string;
  exitAddress: string;
  exitAddressTimestamp: string;
}

export interface AhmiaResult {
  title: string;
  url: string;
  description: string;
}

// ─── Rate Limiters ───

const torprojectLimiter = new RateLimiter(1000);
const ahmiaLimiter = new RateLimiter(2000);

// ─── Caches ───

const exitNodeListCache = new TTLCache<string[]>(30 * 60 * 1000); // 30 min
const exitAddressesCache = new TTLCache<TorExitNode[]>(30 * 60 * 1000); // 30 min
const ahmiaSearchCache = new TTLCache<AhmiaResult[]>(5 * 60 * 1000); // 5 min

// ─── Constants ───

const TOR_BULK_EXIT_LIST_URL = "https://check.torproject.org/torbulkexitlist";
const TOR_EXIT_ADDRESSES_URL = "https://check.torproject.org/exit-addresses";
const AHMIA_CLEARNET_ORIGIN = "https://ahmia.fi";
// Onion mirror of the same Ahmia instance: same search form, same rotating hidden token, same
// result markup. Address taken from the Onion-Location header served by ahmia.fi (2026-11-09).
const AHMIA_ONION_ORIGIN =
  "http://juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion";
const AHMIA_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 h (SearXNG uses the same window)
const AHMIA_TIMEOUT_MS = 60_000;
const AHMIA_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
  Accept: "text/html,application/xhtml+xml,*/*",
  "Accept-Language": "en-US,en;q=0.5",
};

// ─── Transport selection ───
// AHMIA_VIA=auto     (default) onion mirror first, clearnet fallback
// AHMIA_VIA=onion    onion only: the query never leaves Tor (fails if Tor is down)
// AHMIA_VIA=clearnet clearnet only (as upstream behaved)

type AhmiaTransport = "onion" | "clearnet";

function ahmiaVia(): AhmiaTransport | "auto" {
  const raw = (process.env.AHMIA_VIA ?? "auto").trim().toLowerCase();
  return raw === "onion" || raw === "clearnet" ? raw : "auto";
}

function torSocksFromEnv(): { host: string; port: number } {
  const host = process.env.TOR_SOCKS_HOST?.trim() || "127.0.0.1";
  const port = Number(process.env.TOR_SOCKS_PORT?.trim() || "9050");
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`TOR_SOCKS_PORT is not a valid port: ${process.env.TOR_SOCKS_PORT}`);
  }
  return { host, port };
}

// ─── Ahmia anti-bot token ───
// Ahmia's search form carries a hidden, rotating input (e.g. a0f4b5=f4d770). Without it the
// search endpoint answers 302 → "/" and a client that follows redirects gets the homepage,
// parses zero results and reports an empty list: a silent false negative. Fetch the token from
// the form and send it with the query (same approach as searx/engines/ahmia.py).
// The token is cached per transport: onion and clearnet are separate sessions.

interface AhmiaToken {
  name: string;
  value: string;
  fetchedAt: number;
}

const ahmiaTokens = new Map<AhmiaTransport, AhmiaToken>();

async function ahmiaGet(
  transport: AhmiaTransport,
  path: string,
): Promise<{ statusCode: number; body: string }> {
  const origin = transport === "onion" ? AHMIA_ONION_ORIGIN : AHMIA_CLEARNET_ORIGIN;
  const url = `${origin}${path}`;

  if (transport === "onion") {
    const { host, port } = torSocksFromEnv();
    // torHttpGet already enforces its own 3s limiter; don't stack ahmiaLimiter on top.
    const response = await torHttpGet(url, { host, port, headers: AHMIA_HEADERS });
    return { statusCode: response.statusCode, body: response.body };
  }

  await ahmiaLimiter.acquire();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AHMIA_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: AHMIA_HEADERS,
      redirect: "manual",
      signal: controller.signal,
    });
    return { statusCode: response.status, body: await response.text() };
  } catch (err) {
    if (controller.signal.aborted) {
      throw new Error(`Ahmia request timed out after ${AHMIA_TIMEOUT_MS}ms`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

async function fetchAhmiaToken(transport: AhmiaTransport): Promise<AhmiaToken> {
  const response = await ahmiaGet(transport, "/");
  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error(
      `Ahmia token fetch failed (${transport}): HTTP ${response.statusCode}`,
    );
  }

  const $ = cheerio.load(response.body);
  const input = $("#searchForm input[type='hidden']").first();
  const name = input.attr("name");
  const value = input.attr("value");
  if (!name || !value) {
    throw new Error(
      `Ahmia token not found in search form (${transport}): the page layout changed, search is not reliable`,
    );
  }

  const token: AhmiaToken = { name, value, fetchedAt: Date.now() };
  ahmiaTokens.set(transport, token);
  return token;
}

async function getAhmiaToken(
  transport: AhmiaTransport,
  forceRefresh = false,
): Promise<AhmiaToken> {
  const cached = ahmiaTokens.get(transport);
  if (!forceRefresh && cached && Date.now() - cached.fetchedAt < AHMIA_TOKEN_TTL_MS) {
    return cached;
  }
  return fetchAhmiaToken(transport);
}

async function requestAhmiaSearch(
  query: string,
  transport: AhmiaTransport,
  token: AhmiaToken,
): Promise<{ html: string; rejected: boolean }> {
  const params = new URLSearchParams({ q: query, [token.name]: token.value });
  const response = await ahmiaGet(transport, `/search/?${params.toString()}`);

  // Expired/invalid token: Ahmia answers 302 → "/". Never follow it (that is what produced
  // the silent empty results).
  if (response.statusCode >= 300 && response.statusCode < 400) {
    return { html: "", rejected: true };
  }
  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error(`Ahmia search failed (${transport}): HTTP ${response.statusCode}`);
  }

  return { html: response.body, rejected: false };
}

// ─── 1. torStatus — Check if Tor SOCKS5 daemon is running ───

export async function torStatus(
  host: string = "127.0.0.1",
  port: number = 9050,
): Promise<TorStatus> {
  return checkTorStatus(host, port);
}

// ─── 2. torFetchOnion — Fetch raw HTML from a .onion URL via Tor ───

export async function torFetchOnionHtml(
  url: string,
  host: string = "127.0.0.1",
  port: number = 9050,
): Promise<{ html: string; statusCode: number }> {
  return fetchOnion(url, host, port);
}

// ─── 3. torScrapeOnion — Fetch + parse a .onion site ───

export async function torScrapeOnionPage(
  url: string,
  host: string = "127.0.0.1",
  port: number = 9050,
): Promise<ScrapedPage> {
  return scrapeOnion(url, host, port);
}

// ─── 4. torSearchOnion — Search .onion sites via Ahmia (onion mirror preferred) ───

function toResultUrl(href: string): string {
  // Ahmia uses redirect URLs like /search/redirect?search_term=...&redirect_url=<actual_url>
  if (!href.includes("redirect_url=")) return href;
  try {
    const parsed = new URL(href, AHMIA_CLEARNET_ORIGIN);
    return parsed.searchParams.get("redirect_url") ?? href;
  } catch {
    return href;
  }
}

function parseAhmiaResults(html: string): AhmiaResult[] {
  const $ = cheerio.load(html);

  // A page without the search form is not a results page: fail loudly instead of returning [].
  if ($("#searchForm").length === 0) {
    throw new Error("Ahmia returned a page without the search form: layout changed, results unreliable");
  }

  const results: AhmiaResult[] = [];

  // Ahmia search results are in <li class="result"> elements
  $("li.result").each((_, el) => {
    const $el = $(el);
    const titleEl = $el.find("h4 a, .title a, a").first();
    const title = titleEl.text().trim();
    const url = toResultUrl(titleEl.attr("href") ?? "");
    const description = $el.find("p, .description, .snippet").first().text().trim();
    if (title && url) results.push({ title, url, description });
  });

  // Fallback: try parsing search results with alternative selectors
  if (results.length === 0) {
    $(".search-result, .result-item, [class*='result']").each((_, el) => {
      const $el = $(el);
      const titleEl = $el.find("a").first();
      const title = titleEl.text().trim();
      const url = toResultUrl(titleEl.attr("href") ?? "");
      const description = $el.find("p").first().text().trim();
      if (title && url) results.push({ title, url, description });
    });
  }

  return results;
}

async function searchViaTransport(
  query: string,
  transport: AhmiaTransport,
): Promise<AhmiaResult[]> {
  let token = await getAhmiaToken(transport);
  let attempt = await requestAhmiaSearch(query, transport, token);

  // The token rotates: refresh once and retry before declaring failure.
  if (attempt.rejected) {
    token = await getAhmiaToken(transport, true);
    attempt = await requestAhmiaSearch(query, transport, token);
    if (attempt.rejected) {
      throw new Error(
        `Ahmia rejected the search token twice (${transport}): search is unavailable`,
      );
    }
  }

  return parseAhmiaResults(attempt.html);
}

export async function torSearchOnion(
  query: string,
  limit: number = 20,
): Promise<AhmiaResult[]> {
  const cacheKey = `ahmia:${query}`;
  const cached = ahmiaSearchCache.get(cacheKey);
  if (cached) return cached.slice(0, limit);

  const via = ahmiaVia();
  const transports: AhmiaTransport[] = via === "auto" ? ["onion", "clearnet"] : [via];
  const failures: string[] = [];

  for (const transport of transports) {
    try {
      const results = await searchViaTransport(query, transport);
      ahmiaSearchCache.set(cacheKey, results);
      return results.slice(0, limit);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      failures.push(`${transport}: ${message}`);
      // Never degrade silently: whoever reads the logs must see the query left Tor.
      if (transports.length > 1) {
        console.error(
          `[tor_search_onion] ${transport} transport failed (${message}); trying next transport`,
        );
      }
    }
  }

  throw new Error(
    `Ahmia search failed on every transport (this is NOT 'no results'): ${failures.join(" | ")}`,
  );
}

// ─── 5. torExitNodes — Get list of Tor exit node IPs ───

export async function torExitNodes(limit?: number): Promise<string[]> {
  const cacheKey = "exit-node-list";
  const cached = exitNodeListCache.get(cacheKey);
  if (cached) return limit ? cached.slice(0, limit) : cached;

  await torprojectLimiter.acquire();

  const response = await fetch(TOR_BULK_EXIT_LIST_URL, {
    headers: {
      "User-Agent": "darknet-mcp/0.1.0",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Tor exit node list: HTTP ${response.status} ${response.statusText}`,
    );
  }

  const text = await response.text();
  const ips = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));

  // Deduplicate
  const uniqueIps = [...new Set(ips)];

  exitNodeListCache.set(cacheKey, uniqueIps);
  return limit ? uniqueIps.slice(0, limit) : uniqueIps;
}

// ─── 6. torExitCheck — Check if an IP is a Tor exit node ───

export async function torExitCheck(
  ip: string,
): Promise<{ isTorExit: boolean; ip: string }> {
  // Validate IP format (basic check for IPv4/IPv6)
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^[0-9a-fA-F:]+$/;
  if (!ipv4Regex.test(ip) && !ipv6Regex.test(ip)) {
    throw new Error(`Invalid IP address format: ${ip}`);
  }

  const exitIps = await torExitNodes();
  const isTorExit = exitIps.includes(ip);

  return { isTorExit, ip };
}

// ─── 7. torExitDetails — Get detailed exit node info with timestamps ───

export async function torExitDetails(limit?: number): Promise<TorExitNode[]> {
  const cacheKey = "exit-addresses-detailed";
  const cached = exitAddressesCache.get(cacheKey);
  if (cached) return limit ? cached.slice(0, limit) : cached;

  await torprojectLimiter.acquire();

  const response = await fetch(TOR_EXIT_ADDRESSES_URL, {
    headers: {
      "User-Agent": "darknet-mcp/0.1.0",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Tor exit addresses: HTTP ${response.status} ${response.statusText}`,
    );
  }

  const text = await response.text();
  const nodes: TorExitNode[] = [];

  // The exit-addresses file is structured as blocks:
  //   ExitNode <fingerprint>
  //   Published <timestamp>
  //   LastStatus <timestamp>
  //   ExitAddress <ip> <timestamp>
  //
  // A single ExitNode may have multiple ExitAddress lines.

  let currentFingerprint = "";
  let currentPublished = "";
  let currentLastStatus = "";

  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("ExitNode ")) {
      currentFingerprint = trimmed.substring("ExitNode ".length).trim();
      currentPublished = "";
      currentLastStatus = "";
    } else if (trimmed.startsWith("Published ")) {
      currentPublished = trimmed.substring("Published ".length).trim();
    } else if (trimmed.startsWith("LastStatus ")) {
      currentLastStatus = trimmed.substring("LastStatus ".length).trim();
    } else if (trimmed.startsWith("ExitAddress ")) {
      // ExitAddress <ip> <timestamp>
      const parts = trimmed.substring("ExitAddress ".length).trim().split(/\s+/);
      const exitIp = parts[0] ?? "";
      // The timestamp is everything after the IP
      const exitTimestamp = parts.slice(1).join(" ");

      if (currentFingerprint && exitIp) {
        nodes.push({
          fingerprint: currentFingerprint,
          published: currentPublished,
          lastStatus: currentLastStatus,
          exitAddress: exitIp,
          exitAddressTimestamp: exitTimestamp,
        });
      }
    }
  }

  exitAddressesCache.set(cacheKey, nodes);
  return limit ? nodes.slice(0, limit) : nodes;
}
