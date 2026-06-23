// Hybrid Analysis — Malware sandbox analysis provider
// Tools: malwareSearch, malwareOverview, malwareFeed

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import { requireApiKey } from "../utils/require-key.js";

// ─── Types ───

export interface HybridSearchResult {
  sha256: string;
  sha1: string;
  md5: string;
  verdict: string;
  av_detect: number;
  threat_score: number | null;
  vx_family: string;
  type: string;
  type_short: string[];
  environment_description: string;
  environment_id: number;
  submit_name: string;
  analysis_start_time: string;
  size: number;
  tags: string[];
  [key: string]: unknown;
}

export interface HybridSearchResponse extends Array<HybridSearchResult> {}

export interface HybridOverviewResponse {
  sha256: string;
  sha1: string;
  md5: string;
  size: number;
  type: string;
  type_short: string;
  verdict: string;
  av_detect: number;
  threat_score: number | null;
  vx_family: string;
  submit_name: string;
  analysis_start_time: string;
  last_multi_scan: string;
  tags: string[];
  classification_tags: string[];
  domains: string[];
  hosts: string[];
  compromised_hosts: string[];
  total_network_connections: number;
  total_processes: number;
  total_signatures: number;
  extracted_files: {
    name: string;
    sha256: string;
    type_tags: string[];
    description: string;
    runtime_process: string;
    threat_level: number;
  }[];
  processes: {
    uid: string;
    name: string;
    command_line: string;
    sha256: string;
  }[];
  mitre_attcks: {
    tactic: string;
    technique: string;
    attck_id: string;
    attck_id_wiki: string;
    malicious_identifiers_count: number;
    suspicious_identifiers_count: number;
    informative_identifiers_count: number;
  }[];
  [key: string]: unknown;
}

export interface HybridFeedEntry {
  sha256: string;
  md5: string;
  sha1: string;
  verdict: string;
  av_detect: number;
  vx_family: string;
  submit_name: string;
  analysis_start_time: string;
  environment_description: string;
  type: string;
  size: number;
  tags: string[];
  threat_score: number | null;
  [key: string]: unknown;
}

export type HybridFeedResponse = HybridFeedEntry[];

// ─── Constants ───

const BASE_URL = "https://hybrid-analysis.com/api/v2";
const USER_AGENT = "Falcon Sandbox";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(1000);
const cache = new TTLCache<unknown>(15 * 60 * 1000); // 15 min

// ─── Helpers ───

function hybridHeaders(apiKey: string): Record<string, string> {
  return {
    "api-key": apiKey,
    "User-Agent": USER_AGENT,
    Accept: "application/json",
  };
}

// ─── 1. malwareSearch — Search by file hash ───

export async function malwareSearch(
  hash: string,
  apiKey: string,
): Promise<HybridSearchResponse> {
  requireApiKey(apiKey, "Hybrid Analysis", "HYBRID_API_KEY");

  const cacheKey = `hybrid:search:${hash}`;
  const cached = cache.get(cacheKey) as HybridSearchResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const formData = new URLSearchParams({ hash });

  const response = await fetch(`${BASE_URL}/search/hash`, {
    method: "POST",
    headers: {
      ...hybridHeaders(apiKey),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Hybrid Analysis API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as HybridSearchResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 2. malwareOverview — Get full analysis overview for a SHA256 ───

export async function malwareOverview(
  sha256: string,
  apiKey: string,
): Promise<HybridOverviewResponse> {
  requireApiKey(apiKey, "Hybrid Analysis", "HYBRID_API_KEY");

  const cacheKey = `hybrid:overview:${sha256}`;
  const cached = cache.get(cacheKey) as HybridOverviewResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(`${BASE_URL}/overview/${encodeURIComponent(sha256)}`, {
    headers: hybridHeaders(apiKey),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Hybrid Analysis API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as HybridOverviewResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 3. malwareFeed — Get latest 250 malware detonations ───

export async function malwareFeed(apiKey: string): Promise<HybridFeedResponse> {
  requireApiKey(apiKey, "Hybrid Analysis", "HYBRID_API_KEY");

  const cacheKey = "hybrid:feed:latest";
  const cached = cache.get(cacheKey) as HybridFeedResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(`${BASE_URL}/feed/latest`, {
    headers: hybridHeaders(apiKey),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Hybrid Analysis API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as HybridFeedResponse;
  cache.set(cacheKey, data);
  return data;
}
