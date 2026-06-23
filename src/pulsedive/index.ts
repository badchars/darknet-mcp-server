// Pulsedive — Community threat intelligence provider
// Tools: pulsediveIndicator, pulsediveSearch, pulsediveExplore

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";

// ─── Types ───

export interface PulsediveIndicatorResponse {
  iid: number;
  type: string;
  indicator: string;
  risk: string;
  risk_recommended: string;
  manualrisk: number;
  retired: string;
  stamp_added: string;
  stamp_updated: string;
  stamp_seen: string;
  stamp_retired: string | null;
  recent: number;
  summary: {
    properties: Record<string, unknown>;
    threats: { tid: number; name: string; category: string }[];
    feeds: { fid: number; name: string; organization: string }[];
  };
  threats: string[];
  feeds: string[];
  comments: unknown[];
  attributes: Record<string, unknown>;
  properties: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PulsediveSearchResponse {
  results: string[];
  [key: string]: unknown;
}

export interface PulsediveExploreResponse {
  results: {
    iid: number;
    indicator: string;
    type: string;
    risk: string;
    stamp_linked: string;
  }[];
  [key: string]: unknown;
}

// ─── Constants ───

const BASE_URL = "https://pulsedive.com/api";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(1000);
const cache = new TTLCache<unknown>(10 * 60 * 1000); // 10 min

// ─── Helpers ───

async function pulsediveFetch<T>(path: string, params: URLSearchParams): Promise<T> {
  const cacheKey = `pulsedive:${path}?${params.toString()}`;
  const cached = cache.get(cacheKey) as T | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const url = `${BASE_URL}${path}?${params.toString()}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Pulsedive API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as T;
  cache.set(cacheKey, data);
  return data;
}

// ─── 1. pulsediveIndicator — Lookup an indicator (IP, domain, URL, hash) ───

export async function pulsediveIndicator(
  indicator: string,
  apiKey?: string,
): Promise<PulsediveIndicatorResponse> {
  const params = new URLSearchParams({ indicator });
  if (apiKey) params.set("key", apiKey);

  return pulsediveFetch<PulsediveIndicatorResponse>("/info.php", params);
}

// ─── 2. pulsediveSearch — Search indicators by value ───

export async function pulsediveSearch(
  query: string,
  apiKey?: string,
): Promise<PulsediveSearchResponse> {
  const params = new URLSearchParams({ q: query });
  if (apiKey) params.set("key", apiKey);

  return pulsediveFetch<PulsediveSearchResponse>("/search.php", params);
}

// ─── 3. pulsediveExplore — Explore linked indicators with queries ───

export async function pulsediveExplore(
  query: string,
  apiKey?: string,
): Promise<PulsediveExploreResponse> {
  const params = new URLSearchParams({ q: query });
  if (apiKey) params.set("key", apiKey);

  return pulsediveFetch<PulsediveExploreResponse>("/explore.php", params);
}
