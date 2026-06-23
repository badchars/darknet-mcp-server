// IntelligenceX — Dark web data search and phonebook provider
// Tools: intelxSearch, intelxSearchResults, intelxPhonebook, intelxPhonebookResults

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import { requireApiKey } from "../utils/require-key.js";

// ─── Types ───

export interface IntelxSearchInitResponse {
  id: string;
  status: number;
}

export interface IntelxSearchResultRecord {
  systemid: string;
  owner: string;
  storageid: string;
  intelxid: string;
  bucket: string;
  keyid: string;
  added: string;
  date: string;
  name: string;
  description: string;
  media: number;
  type: number;
  typeh: string;
  simhash: string;
  accesslevel: number;
  accesslevelh: string;
  [key: string]: unknown;
}

export interface IntelxSearchResultsResponse {
  id: string;
  status: number;
  selectors: unknown[];
  records: IntelxSearchResultRecord[];
  statistics: Record<string, unknown>;
  [key: string]: unknown;
}

export interface IntelxPhonebookInitResponse {
  id: string;
  status: number;
}

export interface IntelxPhonebookResultRecord {
  value: string;
  type: number;
  typeh: string;
  media: number;
  mediah: string;
  [key: string]: unknown;
}

export interface IntelxPhonebookResultsResponse {
  id: string;
  selectors: IntelxPhonebookResultRecord[];
  status: number;
  [key: string]: unknown;
}

// ─── Constants ───

const BASE_URL = "https://2.intelx.io";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(2000);
const cache = new TTLCache<unknown>(5 * 60 * 1000); // 5 min

// ─── Helpers ───

function intelxHeaders(apiKey: string): Record<string, string> {
  return {
    "x-key": apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

// ─── 1. intelxSearch — Initiate an IntelligenceX search ───

export async function intelxSearch(
  term: string,
  maxResults: number = 100,
  apiKey: string,
): Promise<IntelxSearchInitResponse> {
  requireApiKey(apiKey, "IntelligenceX", "INTELX_API_KEY");

  const cacheKey = `intelx:search:${term}:${maxResults}`;
  const cached = cache.get(cacheKey) as IntelxSearchInitResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(`${BASE_URL}/intelligent/search`, {
    method: "POST",
    headers: intelxHeaders(apiKey),
    body: JSON.stringify({
      term,
      maxresults: maxResults,
      media: 0,
      timeout: 10,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`IntelligenceX search error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as IntelxSearchInitResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 2. intelxSearchResults — Retrieve results for a search ID ───

export async function intelxSearchResults(
  id: string,
  offset: number = 0,
  limit: number = 100,
  apiKey: string,
): Promise<IntelxSearchResultsResponse> {
  requireApiKey(apiKey, "IntelligenceX", "INTELX_API_KEY");

  const cacheKey = `intelx:results:${id}:${offset}:${limit}`;
  const cached = cache.get(cacheKey) as IntelxSearchResultsResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const params = new URLSearchParams({
    id,
    offset: String(offset),
    limit: String(limit),
  });

  const response = await fetch(`${BASE_URL}/intelligent/search/result?${params.toString()}`, {
    headers: intelxHeaders(apiKey),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`IntelligenceX results error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as IntelxSearchResultsResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 3. intelxPhonebook — Initiate a phonebook search (emails, domains, URLs) ───

export async function intelxPhonebook(
  term: string,
  target: number = 0,
  maxResults: number = 100,
  apiKey: string,
): Promise<IntelxPhonebookInitResponse> {
  requireApiKey(apiKey, "IntelligenceX", "INTELX_API_KEY");

  const cacheKey = `intelx:phonebook:${term}:${target}:${maxResults}`;
  const cached = cache.get(cacheKey) as IntelxPhonebookInitResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(`${BASE_URL}/phonebook/search`, {
    method: "POST",
    headers: intelxHeaders(apiKey),
    body: JSON.stringify({
      term,
      target,
      maxresults: maxResults,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`IntelligenceX phonebook error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as IntelxPhonebookInitResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 4. intelxPhonebookResults — Retrieve phonebook search results ───

export async function intelxPhonebookResults(
  id: string,
  offset: number = 0,
  limit: number = 100,
  apiKey: string,
): Promise<IntelxPhonebookResultsResponse> {
  requireApiKey(apiKey, "IntelligenceX", "INTELX_API_KEY");

  const cacheKey = `intelx:phonebook-results:${id}:${offset}:${limit}`;
  const cached = cache.get(cacheKey) as IntelxPhonebookResultsResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const params = new URLSearchParams({
    id,
    offset: String(offset),
    limit: String(limit),
  });

  const response = await fetch(`${BASE_URL}/phonebook/search/result?${params.toString()}`, {
    headers: intelxHeaders(apiKey),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`IntelligenceX phonebook results error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as IntelxPhonebookResultsResponse;
  cache.set(cacheKey, data);
  return data;
}
