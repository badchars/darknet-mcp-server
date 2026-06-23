import { z } from "zod";
import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import type { ToolDef, ToolContext, ToolResult } from "../types/index.js";
import { json, text } from "../types/index.js";

// ─── Shared Infrastructure ───

const limiter = new RateLimiter(500);
const cache = new TTLCache<ToolResult>(5 * 60 * 1000); // 5 min

// ─── API Base URLs ───

const THREATFOX_API = "https://threatfox-api.abuse.ch/api/v1/";
const URLHAUS_API = "https://urlhaus-api.abuse.ch/v1";
const BAZAAR_API = "https://mb-api.abuse.ch/api/v1/";

// ─── Helpers ───

function authHeaders(ctx: ToolContext): Record<string, string> {
  const headers: Record<string, string> = {};
  if (ctx.config.abusechAuthKey) {
    headers["Auth-Key"] = ctx.config.abusechAuthKey;
  }
  return headers;
}

async function threatfoxPost(
  body: Record<string, unknown>,
  ctx: ToolContext,
): Promise<unknown> {
  await limiter.acquire();
  const res = await fetch(THREATFOX_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(ctx),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`ThreatFox API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function urlhausPost(
  path: string,
  params: Record<string, string>,
  ctx: ToolContext,
): Promise<unknown> {
  await limiter.acquire();
  const body = new URLSearchParams(params);
  const res = await fetch(`${URLHAUS_API}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...authHeaders(ctx),
    },
    body: body.toString(),
  });
  if (!res.ok) {
    throw new Error(`URLhaus API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

async function bazaarPost(
  params: Record<string, string>,
  ctx: ToolContext,
): Promise<unknown> {
  await limiter.acquire();
  const body = new URLSearchParams(params);
  const res = await fetch(BAZAAR_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...authHeaders(ctx),
    },
    body: body.toString(),
  });
  if (!res.ok) {
    throw new Error(`MalwareBazaar API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

// ─── ThreatFox Tools ───

const threatfoxGetIocs: ToolDef = {
  name: "threatfoxGetIocs",
  description:
    "Get recent IOCs from ThreatFox (abuse.ch). Returns indicators of compromise reported in the last N days.",
  schema: {
    days: z.number().min(1).max(30).default(3).describe("Number of days to look back (1-30, default 3)"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const days = (args.days as number) ?? 3;
    const cacheKey = `threatfox:iocs:${days}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await threatfoxPost({ query: "get_iocs", days }, ctx);
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

const threatfoxSearch: ToolDef = {
  name: "threatfoxSearch",
  description:
    "Search ThreatFox IOCs by term. Accepts IP addresses, domain names, hashes (MD5/SHA256), or URLs.",
  schema: {
    searchTerm: z.string().describe("Search term: IP, domain, hash (MD5/SHA256), or URL"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const searchTerm = args.searchTerm as string;
    const cacheKey = `threatfox:search:${searchTerm}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await threatfoxPost(
      { query: "search_ioc", search_term: searchTerm },
      ctx,
    );
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

const threatfoxTag: ToolDef = {
  name: "threatfoxTag",
  description:
    'Search ThreatFox IOCs by tag (e.g., "Cobalt Strike", "Emotet", "AgentTesla").',
  schema: {
    tag: z.string().describe("Tag to search for (e.g., Cobalt Strike, Emotet)"),
    limit: z.number().min(1).max(1000).default(100).describe("Max results to return (1-1000, default 100)"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const tag = args.tag as string;
    const limit = (args.limit as number) ?? 100;
    const cacheKey = `threatfox:tag:${tag}:${limit}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await threatfoxPost(
      { query: "taginfo", tag, limit },
      ctx,
    );
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

const threatfoxMalware: ToolDef = {
  name: "threatfoxMalware",
  description:
    "Search ThreatFox IOCs by malware family using Malpedia naming convention (e.g., \"win.cobalt_strike\", \"win.emotet\").",
  schema: {
    malware: z.string().describe("Malware family name in Malpedia format (e.g., win.cobalt_strike)"),
    limit: z.number().min(1).max(1000).default(100).describe("Max results to return (1-1000, default 100)"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const malware = args.malware as string;
    const limit = (args.limit as number) ?? 100;
    const cacheKey = `threatfox:malware:${malware}:${limit}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await threatfoxPost(
      { query: "malwareinfo", malware, limit },
      ctx,
    );
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

// ─── URLhaus Tools ───

const urlhausLookup: ToolDef = {
  name: "urlhausLookup",
  description:
    "Look up a URL or host in URLhaus (abuse.ch). Provide either a full URL for URL lookup or a hostname/IP for host lookup.",
  schema: {
    url: z.string().optional().describe("Full URL to look up (e.g., http://evil.com/malware.exe)"),
    host: z.string().optional().describe("Hostname or IP to look up (e.g., evil.com or 1.2.3.4)"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const url = args.url as string | undefined;
    const host = args.host as string | undefined;

    if (!url && !host) {
      return text("Error: provide either 'url' or 'host' parameter.");
    }

    if (url) {
      const cacheKey = `urlhaus:url:${url}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;

      const data = await urlhausPost("/url/", { url }, ctx);
      const result = json(data);
      cache.set(cacheKey, result);
      return result;
    }

    const cacheKey = `urlhaus:host:${host}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await urlhausPost("/host/", { host: host! }, ctx);
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

const urlhausTag: ToolDef = {
  name: "urlhausTag",
  description:
    "Search URLhaus (abuse.ch) entries by tag (e.g., \"Emotet\", \"Dridex\", \"elf\").",
  schema: {
    tag: z.string().describe("Tag to search for in URLhaus"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const tag = args.tag as string;
    const cacheKey = `urlhaus:tag:${tag}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await urlhausPost("/tag/", { tag }, ctx);
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

// ─── MalwareBazaar Tools ───

const bazaarHash: ToolDef = {
  name: "bazaarHash",
  description:
    "Look up a malware sample in MalwareBazaar (abuse.ch) by hash. Accepts MD5, SHA1, or SHA256.",
  schema: {
    hash: z.string().describe("MD5, SHA1, or SHA256 hash of the malware sample"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const hash = args.hash as string;
    const cacheKey = `bazaar:hash:${hash}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await bazaarPost(
      { query: "get_info", hash },
      ctx,
    );
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

const bazaarRecent: ToolDef = {
  name: "bazaarRecent",
  description:
    "Get recent malware samples from MalwareBazaar (abuse.ch). Returns the most recently submitted samples.",
  schema: {
    selector: z.string().default("time").describe("Selector for recent samples (default: time)"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const selector = (args.selector as string) ?? "time";
    const cacheKey = `bazaar:recent:${selector}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await bazaarPost(
      { query: "get_recent", selector },
      ctx,
    );
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

const bazaarTag: ToolDef = {
  name: "bazaarTag",
  description:
    "Search MalwareBazaar (abuse.ch) by tag or YARA signature name. Use 'tag' for tag-based search or 'signature' for signature-based search.",
  schema: {
    tag: z.string().optional().describe("Tag to search for (e.g., Emotet, AgentTesla)"),
    signature: z.string().optional().describe("YARA signature name to search for"),
  },
  async execute(args, ctx): Promise<ToolResult> {
    const tag = args.tag as string | undefined;
    const signature = args.signature as string | undefined;

    if (!tag && !signature) {
      return text("Error: provide either 'tag' or 'signature' parameter.");
    }

    if (tag) {
      const cacheKey = `bazaar:tag:${tag}`;
      const cached = cache.get(cacheKey);
      if (cached) return cached;

      const data = await bazaarPost(
        { query: "get_taginfo", tag },
        ctx,
      );
      const result = json(data);
      cache.set(cacheKey, result);
      return result;
    }

    const cacheKey = `bazaar:sig:${signature}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const data = await bazaarPost(
      { query: "get_siginfo", signature: signature! },
      ctx,
    );
    const result = json(data);
    cache.set(cacheKey, result);
    return result;
  },
};

// ─── Export ───

export const abusechTools: ToolDef[] = [
  // ThreatFox
  threatfoxGetIocs,
  threatfoxSearch,
  threatfoxTag,
  threatfoxMalware,
  // URLhaus
  urlhausLookup,
  urlhausTag,
  // MalwareBazaar
  bazaarHash,
  bazaarRecent,
  bazaarTag,
];
