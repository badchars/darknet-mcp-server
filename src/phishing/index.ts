// PhishTank — Phishing URL verification provider
// Tools: phishingCheck

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";

// ─── Types ───

export interface PhishTankCheckResponse {
  results: {
    url: string;
    in_database: boolean;
    phish_id?: string;
    phish_detail_page?: string;
    verified: boolean;
    verified_at?: string;
    valid: boolean;
  };
  meta: {
    timestamp: string;
    serverid: string;
    status: string;
    requestid: string;
  };
}

// ─── Constants ───

const CHECK_URL = "https://checkurl.phishtank.com/checkurl/";

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(2000);
const cache = new TTLCache<PhishTankCheckResponse>(15 * 60 * 1000); // 15 min

// ─── 1. phishingCheck — Check if a URL is a known phishing site ───

export async function phishingCheck(
  url: string,
  apiKey?: string,
): Promise<PhishTankCheckResponse> {
  const cacheKey = `phishtank:${url}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  await limiter.acquire();

  const formData = new URLSearchParams({
    url,
    format: "json",
  });
  if (apiKey) {
    formData.set("app_key", apiKey);
  }

  const response = await fetch(CHECK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`PhishTank API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as PhishTankCheckResponse;
  cache.set(cacheKey, data);
  return data;
}
