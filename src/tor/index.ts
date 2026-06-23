// Tor network intelligence provider
// Tools: torStatus, torFetchOnion, torScrapeOnion, torSearchOnion, torExitNodes, torExitCheck, torExitDetails

import * as cheerio from "cheerio";
import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import {
  checkTorStatus,
  fetchOnion,
  scrapeOnion,
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
const AHMIA_SEARCH_URL = "https://ahmia.fi/search/";

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

// ─── 4. torSearchOnion — Search .onion sites via Ahmia.fi ───

export async function torSearchOnion(
  query: string,
  limit: number = 20,
): Promise<AhmiaResult[]> {
  const cacheKey = `ahmia:${query}`;
  const cached = ahmiaSearchCache.get(cacheKey);
  if (cached) return cached.slice(0, limit);

  await ahmiaLimiter.acquire();

  const searchUrl = `${AHMIA_SEARCH_URL}?q=${encodeURIComponent(query)}`;
  const response = await fetch(searchUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
      Accept: "text/html,application/xhtml+xml,*/*",
      "Accept-Language": "en-US,en;q=0.5",
    },
  });

  if (!response.ok) {
    throw new Error(`Ahmia search failed: HTTP ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);
  const results: AhmiaResult[] = [];

  // Ahmia search results are in <li class="result"> elements
  $("li.result").each((_, el) => {
    const $el = $(el);
    const titleEl = $el.find("h4 a, .title a, a").first();
    const title = titleEl.text().trim();
    const href = titleEl.attr("href") ?? "";
    const description = $el.find("p, .description, .snippet").first().text().trim();

    // Ahmia uses redirect URLs like /search/redirect?search_term=...&redirect_url=<actual_url>
    let url = href;
    if (href.includes("redirect_url=")) {
      try {
        const parsed = new URL(href, "https://ahmia.fi");
        url = parsed.searchParams.get("redirect_url") ?? href;
      } catch {
        url = href;
      }
    }

    if (title && url) {
      results.push({ title, url, description });
    }
  });

  // Fallback: try parsing search results with alternative selectors
  if (results.length === 0) {
    $(".search-result, .result-item, [class*='result']").each((_, el) => {
      const $el = $(el);
      const titleEl = $el.find("a").first();
      const title = titleEl.text().trim();
      const href = titleEl.attr("href") ?? "";
      const description = $el.find("p").first().text().trim();

      let url = href;
      if (href.includes("redirect_url=")) {
        try {
          const parsed = new URL(href, "https://ahmia.fi");
          url = parsed.searchParams.get("redirect_url") ?? href;
        } catch {
          url = href;
        }
      }

      if (title && url) {
        results.push({ title, url, description });
      }
    });
  }

  ahmiaSearchCache.set(cacheKey, results);
  return results.slice(0, limit);
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
