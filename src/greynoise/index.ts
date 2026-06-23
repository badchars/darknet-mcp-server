// GreyNoise Community — Internet scanner classification provider
// Tools: greynoiseIp, greynoiseCheck

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";

// ─── Types ───

export interface GreynoiseIpResponse {
  ip: string;
  noise: boolean;
  riot: boolean;
  classification: string;
  name: string;
  link: string;
  last_seen: string;
  message: string;
}

export interface GreynoiseCheckResult {
  ip: string;
  classification: string;
  isScanner: boolean;
  isKnownBenign: boolean;
}

// ─── Constants ───

const BASE_URL = "https://api.greynoise.io/v3/community";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(1000);
const cache = new TTLCache<GreynoiseIpResponse>(15 * 60 * 1000); // 15 min

// ─── Helpers ───

async function greynoiseFetch(ip: string): Promise<GreynoiseIpResponse> {
  const cacheKey = `greynoise:${ip}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(`${BASE_URL}/${encodeURIComponent(ip)}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    // GreyNoise returns 404 for unknown IPs — that's a valid "not seen" response
    if (response.status === 404) {
      const notSeen: GreynoiseIpResponse = {
        ip,
        noise: false,
        riot: false,
        classification: "unknown",
        name: "unknown",
        link: "",
        last_seen: "",
        message: "IP not observed scanning the internet or contained in RIOT data set.",
      };
      cache.set(cacheKey, notSeen);
      return notSeen;
    }
    throw new Error(`GreyNoise API error: HTTP ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as GreynoiseIpResponse;
  cache.set(cacheKey, data);
  return data;
}

// ─── 1. greynoiseIp — Full community IP lookup ───

export async function greynoiseIp(ip: string): Promise<GreynoiseIpResponse> {
  return greynoiseFetch(ip);
}

// ─── 2. greynoiseCheck — Simplified scanner/benign check ───

export async function greynoiseCheck(ip: string): Promise<GreynoiseCheckResult> {
  const data = await greynoiseFetch(ip);

  return {
    ip: data.ip,
    classification: data.classification,
    isScanner: data.noise === true,
    isKnownBenign: data.riot === true,
  };
}
