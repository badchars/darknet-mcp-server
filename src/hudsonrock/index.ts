// Hudson Rock Cavalier — Stealer log intelligence provider
// Tools: stealerDomain, stealerEmail, stealerIp

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import { requireApiKey } from "../utils/require-key.js";

// ─── Types ───

export interface StealerEntry {
  date_compromised: string;
  url: string;
  computer_name: string;
  operating_system: string;
  malware_path: string;
  antiviruses: string;
  ip: string;
  top_logins: { url: string; login: string }[];
  top_passwords: string[];
  [key: string]: unknown;
}

export interface StealerDomainResponse {
  stealers: StealerEntry[];
  total: number;
  [key: string]: unknown;
}

export interface StealerEmailResponse {
  stealers: StealerEntry[];
  total: number;
  [key: string]: unknown;
}

export interface StealerIpResponse {
  stealers: StealerEntry[];
  total: number;
  [key: string]: unknown;
}

// ─── Constants ───

const BASE_URL = "https://cavalier.hudsonrock.com/api/json/v2";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(2000);
const cache = new TTLCache<unknown>(10 * 60 * 1000); // 10 min

// ─── Helpers ───

async function hudsonrockFetch<T>(path: string, apiKey: string): Promise<T> {
  const cacheKey = `hudsonrock:${path}`;
  const cached = cache.get(cacheKey) as T | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const url = `${BASE_URL}${path}`;
  const separator = path.includes("?") ? "&" : "?";
  const fullUrl = `${url}${separator}api-key=${encodeURIComponent(apiKey)}`;

  const response = await fetch(fullUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Hudson Rock API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as T;
  cache.set(cacheKey, data);
  return data;
}

// ─── 1. stealerDomain — Search stealer logs by domain ───

export async function stealerDomain(
  domain: string,
  apiKey: string,
): Promise<StealerDomainResponse> {
  requireApiKey(apiKey, "Hudson Rock", "HUDSONROCK_API_KEY");

  const params = new URLSearchParams({ domain });
  return hudsonrockFetch<StealerDomainResponse>(
    `/osint-tools/search-by-domain?${params.toString()}`,
    apiKey,
  );
}

// ─── 2. stealerEmail — Search stealer logs by email ───

export async function stealerEmail(
  email: string,
  apiKey: string,
): Promise<StealerEmailResponse> {
  requireApiKey(apiKey, "Hudson Rock", "HUDSONROCK_API_KEY");

  const params = new URLSearchParams({ email });
  return hudsonrockFetch<StealerEmailResponse>(
    `/osint-tools/search-by-email?${params.toString()}`,
    apiKey,
  );
}

// ─── 3. stealerIp — Search stealer logs by IP address ───

export async function stealerIp(
  ip: string,
  apiKey: string,
): Promise<StealerIpResponse> {
  requireApiKey(apiKey, "Hudson Rock", "HUDSONROCK_API_KEY");

  const params = new URLSearchParams({ ip });
  return hudsonrockFetch<StealerIpResponse>(
    `/osint-tools/search-by-ip?${params.toString()}`,
    apiKey,
  );
}
