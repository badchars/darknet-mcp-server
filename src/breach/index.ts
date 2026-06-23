import { z } from "zod";
import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import { requireApiKey } from "../utils/require-key.js";
import type { ToolDef, ToolContext, ToolResult } from "../types/index.js";
import { json, text } from "../types/index.js";

// ─── Constants ───

const HIBP_BASE = "https://haveibeenpwned.com/api/v3";
const PWNED_PASSWORDS_BASE = "https://api.pwnedpasswords.com/range";
const USER_AGENT = "darknet-mcp-server";

// ─── Rate Limiter & Caches ───

const limiter = new RateLimiter(1500); // HIBP enforces ~1 req/1.5s
const breachListCache = new TTLCache<unknown>(10 * 60 * 1000); // 10 min
const accountCache = new TTLCache<unknown>(5 * 60 * 1000); // 5 min

// ─── Helpers ───

function hibpHeaders(apiKey?: string): Record<string, string> {
  const headers: Record<string, string> = {
    "User-Agent": USER_AGENT,
    Accept: "application/json",
  };
  if (apiKey) {
    headers["hibp-api-key"] = apiKey;
  }
  return headers;
}

async function hibpFetch(path: string, apiKey?: string): Promise<unknown> {
  await limiter.acquire();
  const url = `${HIBP_BASE}${path}`;
  const res = await fetch(url, { headers: hibpHeaders(apiKey) });

  if (res.status === 404) return null;
  if (res.status === 401) throw new Error("HIBP API key is invalid or missing for this endpoint.");
  if (res.status === 403) throw new Error("HIBP access denied. Your API key may lack permissions for this endpoint.");
  if (res.status === 429) throw new Error("HIBP rate limit exceeded. Please wait and try again.");
  if (!res.ok) throw new Error(`HIBP API error: ${res.status} ${res.statusText}`);

  return res.json();
}

async function sha1Hash(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
}

// ─── Tool 1: breachList ───

const breachList: ToolDef = {
  name: "breachList",
  description:
    "List all known data breaches from HaveIBeenPwned. Optionally filter by domain. Free endpoint, no API key required.",
  schema: {
    domain: z
      .string()
      .optional()
      .describe("Optional domain to filter breaches (e.g. 'adobe.com')"),
  },
  async execute(args: Record<string, unknown>): Promise<ToolResult> {
    const domain = args.domain as string | undefined;
    const cacheKey = `breachList:${domain ?? "__all__"}`;

    const cached = breachListCache.get(cacheKey);
    if (cached) return json(cached);

    const query = domain ? `?domain=${encodeURIComponent(domain)}` : "";
    const data = await hibpFetch(`/breaches${query}`);

    if (!data) return text("No breaches found.");
    breachListCache.set(cacheKey, data);
    return json(data);
  },
};

// ─── Tool 2: breachGet ───

const breachGet: ToolDef = {
  name: "breachGet",
  description:
    "Get details of a specific data breach by name from HaveIBeenPwned. Free endpoint, no API key required.",
  schema: {
    name: z
      .string()
      .describe("The breach name (Pascal-cased, e.g. 'Adobe' or 'LinkedIn')"),
  },
  async execute(args: Record<string, unknown>): Promise<ToolResult> {
    const name = args.name as string;
    const cacheKey = `breachGet:${name}`;

    const cached = breachListCache.get(cacheKey);
    if (cached) return json(cached);

    const data = await hibpFetch(`/breach/${encodeURIComponent(name)}`);

    if (!data) return text(`Breach '${name}' not found.`);
    breachListCache.set(cacheKey, data);
    return json(data);
  },
};

// ─── Tool 3: breachLatest ───

const breachLatest: ToolDef = {
  name: "breachLatest",
  description:
    "Get the most recently added data breach from HaveIBeenPwned. Free endpoint, no API key required.",
  schema: {},
  async execute(): Promise<ToolResult> {
    const cacheKey = "breachLatest";

    const cached = breachListCache.get(cacheKey);
    if (cached) return json(cached);

    const data = await hibpFetch("/latestbreach");

    if (!data) return text("No latest breach available.");
    breachListCache.set(cacheKey, data);
    return json(data);
  },
};

// ─── Tool 4: breachDataClasses ───

const breachDataClasses: ToolDef = {
  name: "breachDataClasses",
  description:
    "List all data classes (types of compromised data) known to HaveIBeenPwned. Free endpoint, no API key required.",
  schema: {},
  async execute(): Promise<ToolResult> {
    const cacheKey = "dataClasses";

    const cached = breachListCache.get(cacheKey);
    if (cached) return json(cached);

    const data = await hibpFetch("/dataclasses");

    if (!data) return text("No data classes available.");
    breachListCache.set(cacheKey, data);
    return json(data);
  },
};

// ─── Tool 5: breachPassword ───

const breachPassword: ToolDef = {
  name: "breachPassword",
  description:
    "Check if a password has appeared in known data breaches using the Pwned Passwords k-anonymity API. " +
    "Only the first 5 characters of the SHA-1 hash are sent to the server. Free, no API key required.",
  schema: {
    password: z.string().describe("The password to check"),
  },
  async execute(args: Record<string, unknown>): Promise<ToolResult> {
    const password = args.password as string;
    const hash = await sha1Hash(password);
    const prefix = hash.substring(0, 5);
    const suffix = hash.substring(5);

    await limiter.acquire();
    const res = await fetch(`${PWNED_PASSWORDS_BASE}/${prefix}`, {
      headers: { "User-Agent": USER_AGENT },
    });

    if (!res.ok) {
      throw new Error(`Pwned Passwords API error: ${res.status} ${res.statusText}`);
    }

    const body = await res.text();
    const lines = body.split("\r\n");

    let found = false;
    let count = 0;

    for (const line of lines) {
      const [lineSuffix, lineCount] = line.split(":");
      if (lineSuffix === suffix) {
        found = true;
        count = parseInt(lineCount, 10);
        break;
      }
    }

    if (found) {
      return json({
        compromised: true,
        occurrences: count,
        message: `This password has been seen ${count.toLocaleString()} time(s) in data breaches. It should NOT be used.`,
      });
    }

    return json({
      compromised: false,
      occurrences: 0,
      message: "This password has not been found in any known data breaches.",
    });
  },
};

// ─── Tool 6: breachSearch ───

const breachSearch: ToolDef = {
  name: "breachSearch",
  description:
    "Search all data breaches for a specific account (email or username) via HaveIBeenPwned. " +
    "Requires HIBP_API_KEY (paid endpoint).",
  schema: {
    account: z
      .string()
      .describe("The email address or username to search for"),
    truncateResponse: z
      .boolean()
      .optional()
      .describe("If true, only return breach names (not full details). Default false."),
    includeUnverified: z
      .boolean()
      .optional()
      .describe("If true, include unverified breaches. Default false."),
  },
  async execute(args: Record<string, unknown>, ctx: ToolContext): Promise<ToolResult> {
    const apiKey = requireApiKey(ctx.config.hibpApiKey, "HaveIBeenPwned", "HIBP_API_KEY");
    const account = args.account as string;
    const truncate = (args.truncateResponse as boolean) ?? false;
    const includeUnverified = (args.includeUnverified as boolean) ?? false;

    const cacheKey = `breachSearch:${account}:${truncate}:${includeUnverified}`;
    const cached = accountCache.get(cacheKey);
    if (cached) return json(cached);

    const params = new URLSearchParams();
    if (truncate) params.set("truncateResponse", "true");
    if (includeUnverified) params.set("includeUnverified", "true");
    const query = params.toString() ? `?${params.toString()}` : "";

    const data = await hibpFetch(
      `/breachedaccount/${encodeURIComponent(account)}${query}`,
      apiKey,
    );

    if (!data) {
      return json({
        account,
        breaches: [],
        message: "No breaches found for this account.",
      });
    }

    const result = { account, breaches: data };
    accountCache.set(cacheKey, result);
    return json(result);
  },
};

// ─── Tool 7: breachPastes ───

const breachPastes: ToolDef = {
  name: "breachPastes",
  description:
    "Search for an email address in publicly posted pastes (Pastebin, etc.) via HaveIBeenPwned. " +
    "Requires HIBP_API_KEY (paid endpoint).",
  schema: {
    email: z.string().email().describe("The email address to search for in pastes"),
  },
  async execute(args: Record<string, unknown>, ctx: ToolContext): Promise<ToolResult> {
    const apiKey = requireApiKey(ctx.config.hibpApiKey, "HaveIBeenPwned", "HIBP_API_KEY");
    const email = args.email as string;

    const cacheKey = `breachPastes:${email}`;
    const cached = accountCache.get(cacheKey);
    if (cached) return json(cached);

    const data = await hibpFetch(
      `/pasteaccount/${encodeURIComponent(email)}`,
      apiKey,
    );

    if (!data) {
      return json({
        email,
        pastes: [],
        message: "No pastes found for this email.",
      });
    }

    const result = { email, pastes: data };
    accountCache.set(cacheKey, result);
    return json(result);
  },
};

// ─── Export All Breach Tools ───

export const breachTools: ToolDef[] = [
  breachList,
  breachGet,
  breachLatest,
  breachDataClasses,
  breachPassword,
  breachSearch,
  breachPastes,
];
