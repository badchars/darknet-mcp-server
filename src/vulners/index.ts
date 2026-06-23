// Vulners — Vulnerability and exploit database provider
// Tools: vulnersSearch, vulnersId, vulnersExploit

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";

// ─── Types ───

export interface VulnersDocument {
  id: string;
  title: string;
  description: string;
  type: string;
  bulletinFamily: string;
  cvss: { score: number; vector: string } | null;
  published: string;
  modified: string;
  href: string;
  sourceHref: string;
  reporter: string;
  cvelist: string[];
  [key: string]: unknown;
}

export interface VulnersSearchResponse {
  result: string;
  data: {
    search: VulnersDocument[];
    total: number;
    exactMatch: boolean;
    references: Record<string, unknown>;
  };
}

export interface VulnersIdResponse {
  result: string;
  data: {
    documents: Record<string, VulnersDocument>;
    references: Record<string, unknown>;
  };
}

// ─── Constants ───

const BASE_URL = "https://vulners.com/api/v3";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(1000);
const cache = new TTLCache<unknown>(10 * 60 * 1000); // 10 min

// ─── 1. vulnersSearch — Search vulnerability database ───

export async function vulnersSearch(
  query: string,
  limit: number = 20,
  apiKey?: string,
): Promise<VulnersSearchResponse> {
  const cacheKey = `vulners:search:${query}:${limit}`;
  const cached = cache.get(cacheKey) as VulnersSearchResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const body: Record<string, unknown> = {
    query,
    size: limit,
  };
  if (apiKey) {
    body.apiKey = apiKey;
  }

  const response = await fetch(`${BASE_URL}/search/lucene/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Vulners API error: HTTP ${response.status} ${response.statusText} — ${text}`);
  }

  const data = (await response.json()) as VulnersSearchResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 2. vulnersId — Lookup a specific vulnerability by ID (free, no key) ───

export async function vulnersId(id: string): Promise<VulnersIdResponse> {
  const cacheKey = `vulners:id:${id}`;
  const cached = cache.get(cacheKey) as VulnersIdResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const params = new URLSearchParams({ id });
  const response = await fetch(`${BASE_URL}/search/id/?${params.toString()}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Vulners API error: HTTP ${response.status} ${response.statusText} — ${text}`);
  }

  const data = (await response.json()) as VulnersIdResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 3. vulnersExploit — Search for exploits specifically ───

export async function vulnersExploit(
  query: string,
  limit: number = 20,
  apiKey?: string,
): Promise<VulnersSearchResponse> {
  const exploitQuery = `type:exploitdb AND ${query}`;

  const cacheKey = `vulners:exploit:${query}:${limit}`;
  const cached = cache.get(cacheKey) as VulnersSearchResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const body: Record<string, unknown> = {
    query: exploitQuery,
    size: limit,
  };
  if (apiKey) {
    body.apiKey = apiKey;
  }

  const response = await fetch(`${BASE_URL}/search/lucene/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Vulners API error: HTTP ${response.status} ${response.statusText} — ${text}`);
  }

  const data = (await response.json()) as VulnersSearchResponse;
  cache.set(cacheKey, data);
  return data;
}
