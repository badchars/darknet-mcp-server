// AlienVault OTX — Open Threat Exchange intelligence provider
// Tools: otxIp, otxDomain, otxHash, otxCve, otxSearchPulses

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";

// ─── Types ───

export interface OtxGeneralResponse {
  indicator: string;
  pulse_info: {
    count: number;
    pulses: OtxPulse[];
  };
  base_indicator: Record<string, unknown>;
  sections: string[];
  type: string;
  type_title: string;
  whois?: string;
  reputation?: number;
  country_code?: string;
  country_name?: string;
  asn?: string;
  city?: string;
  [key: string]: unknown;
}

export interface OtxPulse {
  id: string;
  name: string;
  description: string;
  author_name: string;
  created: string;
  modified: string;
  tags: string[];
  targeted_countries: string[];
  malware_families: string[];
  attack_ids: { id: string; name: string; display_name: string }[];
  industries: string[];
  TLP: string;
  adversary: string;
  indicator_count: number;
  [key: string]: unknown;
}

export interface OtxPulseSearchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: OtxPulse[];
}

// ─── Constants ───

const BASE_URL = "https://otx.alienvault.com/api/v1";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(1000);
const cache = new TTLCache<unknown>(10 * 60 * 1000); // 10 min

// ─── Helpers ───

async function otxFetch<T>(path: string, apiKey?: string): Promise<T> {
  const cacheKey = `otx:${path}`;
  const cached = cache.get(cacheKey) as T | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  if (apiKey) {
    headers["X-OTX-API-KEY"] = apiKey;
  }

  const response = await fetch(`${BASE_URL}${path}`, { headers });

  if (!response.ok) {
    throw new Error(`OTX API error: HTTP ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as T;
  cache.set(cacheKey, data);
  return data;
}

// ─── 1. otxIp — IP address general intelligence ───

export async function otxIp(ip: string, apiKey?: string): Promise<OtxGeneralResponse> {
  return otxFetch<OtxGeneralResponse>(`/indicators/IPv4/${encodeURIComponent(ip)}/general`, apiKey);
}

// ─── 2. otxDomain — Domain general intelligence ───

export async function otxDomain(domain: string, apiKey?: string): Promise<OtxGeneralResponse> {
  return otxFetch<OtxGeneralResponse>(`/indicators/domain/${encodeURIComponent(domain)}/general`, apiKey);
}

// ─── 3. otxHash — File hash general intelligence ───

export async function otxHash(hash: string, apiKey?: string): Promise<OtxGeneralResponse> {
  return otxFetch<OtxGeneralResponse>(`/indicators/file/${encodeURIComponent(hash)}/general`, apiKey);
}

// ─── 4. otxCve — CVE general intelligence ───

export async function otxCve(cve: string, apiKey?: string): Promise<OtxGeneralResponse> {
  return otxFetch<OtxGeneralResponse>(`/indicators/CVE/${encodeURIComponent(cve)}/general`, apiKey);
}

// ─── 5. otxSearchPulses — Search OTX pulses ───

export async function otxSearchPulses(
  query: string,
  limit: number = 10,
  apiKey?: string,
): Promise<OtxPulseSearchResponse> {
  const params = new URLSearchParams({ q: query, limit: String(limit) });
  return otxFetch<OtxPulseSearchResponse>(`/search/pulses?${params.toString()}`, apiKey);
}
