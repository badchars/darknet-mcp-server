// AbuseIPDB — IP abuse reporting and checking provider
// Tools: abuseipdbCheck, abuseipdbReports, abuseipdbBlacklist, abuseipdbCheckBlock

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import { requireApiKey } from "../utils/require-key.js";

// ─── Types ───

export interface AbuseipdbCheckResponse {
  data: {
    ipAddress: string;
    isPublic: boolean;
    ipVersion: number;
    isWhitelisted: boolean | null;
    abuseConfidenceScore: number;
    countryCode: string;
    countryName: string;
    usageType: string;
    isp: string;
    domain: string;
    hostnames: string[];
    isTor: boolean;
    totalReports: number;
    numDistinctUsers: number;
    lastReportedAt: string | null;
    reports?: AbuseipdbReport[];
  };
}

export interface AbuseipdbReport {
  reportedAt: string;
  comment: string;
  categories: number[];
  reporterId: number;
  reporterCountryCode: string;
  reporterCountryName: string;
}

export interface AbuseipdbReportsResponse {
  data: {
    total: number;
    page: number;
    count: number;
    perPage: number;
    lastPage: number;
    nextPageUrl: string | null;
    previousPageUrl: string | null;
    results: AbuseipdbReport[];
  };
}

export interface AbuseipdbBlacklistEntry {
  ipAddress: string;
  abuseConfidenceScore: number;
  lastReportedAt: string;
}

export interface AbuseipdbBlacklistResponse {
  meta: {
    generatedAt: string;
  };
  data: AbuseipdbBlacklistEntry[];
}

export interface AbuseipdbCheckBlockResponse {
  data: {
    networkAddress: string;
    netmask: string;
    minAddress: string;
    maxAddress: string;
    numPossibleHosts: number;
    addressSpaceDesc: string;
    reportedAddress: {
      ipAddress: string;
      numReports: number;
      mostRecentReport: string;
      abuseConfidenceScore: number;
      countryCode: string;
    }[];
  };
}

// ─── Constants ───

const BASE_URL = "https://api.abuseipdb.com/api/v2";

// ─── Rate Limiter & Caches ───

const limiter = new RateLimiter(1000);
const cache = new TTLCache<unknown>(10 * 60 * 1000); // 10 min
const blacklistCache = new TTLCache<unknown>(30 * 60 * 1000); // 30 min

// ─── Helpers ───

async function abuseipdbFetch<T>(
  path: string,
  apiKey: string,
  useBlacklistCache = false,
): Promise<T> {
  const cacheKey = `abuseipdb:${path}`;
  const targetCache = useBlacklistCache ? blacklistCache : cache;
  const cached = targetCache.get(cacheKey) as T | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Key: apiKey,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`AbuseIPDB API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as T;
  targetCache.set(cacheKey, data);
  return data;
}

// ─── 1. abuseipdbCheck — Check an IP address for abuse reports ───

export async function abuseipdbCheck(
  ip: string,
  maxAge: number = 90,
  verbose: boolean = false,
  apiKey: string,
): Promise<AbuseipdbCheckResponse> {
  requireApiKey(apiKey, "AbuseIPDB", "ABUSEIPDB_API_KEY");

  const params = new URLSearchParams({
    ipAddress: ip,
    maxAgeInDays: String(maxAge),
  });
  if (verbose) {
    params.set("verbose", "");
  }

  return abuseipdbFetch<AbuseipdbCheckResponse>(`/check?${params.toString()}`, apiKey);
}

// ─── 2. abuseipdbReports — Get individual abuse reports for an IP ───

export async function abuseipdbReports(
  ip: string,
  maxAge: number = 90,
  limit: number = 25,
  apiKey: string,
): Promise<AbuseipdbReportsResponse> {
  requireApiKey(apiKey, "AbuseIPDB", "ABUSEIPDB_API_KEY");

  const params = new URLSearchParams({
    ipAddress: ip,
    maxAgeInDays: String(maxAge),
    perPage: String(limit),
  });

  return abuseipdbFetch<AbuseipdbReportsResponse>(`/reports?${params.toString()}`, apiKey);
}

// ─── 3. abuseipdbBlacklist — Get AbuseIPDB blacklist of most reported IPs ───

export async function abuseipdbBlacklist(
  confidence: number = 90,
  limit: number = 100,
  apiKey: string,
): Promise<AbuseipdbBlacklistResponse> {
  requireApiKey(apiKey, "AbuseIPDB", "ABUSEIPDB_API_KEY");

  const params = new URLSearchParams({
    confidenceMinimum: String(confidence),
    limit: String(limit),
  });

  return abuseipdbFetch<AbuseipdbBlacklistResponse>(
    `/blacklist?${params.toString()}`,
    apiKey,
    true,
  );
}

// ─── 4. abuseipdbCheckBlock — Check an entire CIDR network block ───

export async function abuseipdbCheckBlock(
  network: string,
  maxAge: number = 30,
  apiKey: string,
): Promise<AbuseipdbCheckBlockResponse> {
  requireApiKey(apiKey, "AbuseIPDB", "ABUSEIPDB_API_KEY");

  const params = new URLSearchParams({
    network,
    maxAgeInDays: String(maxAge),
  });

  return abuseipdbFetch<AbuseipdbCheckBlockResponse>(`/check-block?${params.toString()}`, apiKey);
}
