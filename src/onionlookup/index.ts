// CIRCL Onion Lookup — .onion address intelligence from AIL project
// Tools: onionLookup

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";

// ─── Types ───

export interface OnionLookupResponse {
  address: string;
  first_seen: string;
  last_seen: string;
  last_check: string;
  status: string;
  tags: string[];
  pgp: string[];
  certificates: string[];
  ports: number[];
  base_url: string;
  title: string;
  bitcoin_addresses: string[];
  [key: string]: unknown;
}

// ─── Constants ───

const BASE_URL = "https://onion.ail-project.org";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(1000);
const cache = new TTLCache<OnionLookupResponse>(30 * 60 * 1000); // 30 min

// ─── 1. onionLookup — Look up metadata for a .onion address ───

export async function onionLookup(address: string): Promise<OnionLookupResponse> {
  // Normalize: strip protocol and trailing slashes, keep just the .onion hostname
  let cleanAddress = address.trim();
  if (cleanAddress.startsWith("http://") || cleanAddress.startsWith("https://")) {
    try {
      const parsed = new URL(cleanAddress);
      cleanAddress = parsed.hostname;
    } catch {
      // If URL parsing fails, just strip protocol manually
      cleanAddress = cleanAddress
        .replace(/^https?:\/\//, "")
        .replace(/\/.*$/, "");
    }
  }
  cleanAddress = cleanAddress.replace(/\/+$/, "");

  const cacheKey = `onionlookup:${cleanAddress}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(
    `${BASE_URL}/api/v1/onion/${encodeURIComponent(cleanAddress)}`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Onion address not found in CIRCL database: ${cleanAddress}`);
    }
    throw new Error(`CIRCL Onion Lookup error: HTTP ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as OnionLookupResponse;
  cache.set(cacheKey, data);
  return data;
}
