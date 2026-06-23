import { z } from "zod";
import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";
import type { ToolDef, ToolContext, ToolResult } from "../types/index.js";
import { json } from "../types/index.js";

// ─── Constants ───

const RANSOMWARE_LIVE_BASE = "https://api.ransomware.live/v2";
const RANSOMLOOK_BASE = "https://www.ransomlook.io/api";

const FIFTEEN_MIN = 15 * 60 * 1000;

// ─── Rate Limiters ───

const ransomwareLiveRL = new RateLimiter(500);
const ransomlookRL = new RateLimiter(500);

// ─── Cache ───

const cache = new TTLCache<unknown>(FIFTEEN_MIN);

// ─── Types ───

interface RansomwareVictim {
  name: string;
  group: string;
  url: string;
  country: string;
  sector: string;
  published: string;
  discovered: string;
  description: string;
  website: string;
  [key: string]: unknown;
}

interface RansomwareGroupProfile {
  name: string;
  url: string;
  description: string;
  locations: string[];
  profile: string[];
  [key: string]: unknown;
}

interface RansomlookGroup {
  name: string;
  urls: { fqdn: string; title: string }[];
  [key: string]: unknown;
}

interface RansomlookPost {
  group_name: string;
  post_title: string;
  post_url: string;
  discovered: string;
  [key: string]: unknown;
}

// ─── HTTP Helpers ───

async function fetchRansomwareLive<T>(path: string): Promise<T> {
  const cacheKey = `rwlive:${path}`;
  const cached = cache.get(cacheKey);
  if (cached !== undefined) return cached as T;

  await ransomwareLiveRL.acquire();

  const url = `${RANSOMWARE_LIVE_BASE}${path}`;
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": "darknet-mcp/0.1.0" },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`ransomware.live ${res.status} ${res.statusText}: ${body}`);
  }

  const data = (await res.json()) as T;
  cache.set(cacheKey, data);
  return data;
}

async function fetchRansomlook<T>(path: string): Promise<T> {
  const cacheKey = `ransomlook:${path}`;
  const cached = cache.get(cacheKey);
  if (cached !== undefined) return cached as T;

  await ransomlookRL.acquire();

  const url = `${RANSOMLOOK_BASE}${path}`;
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": "darknet-mcp/0.1.0" },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`ransomlook.io ${res.status} ${res.statusText}: ${body}`);
  }

  const data = (await res.json()) as T;
  cache.set(cacheKey, data);
  return data;
}

// ─── Tool Implementations ───

/**
 * 1. ransomwareRecent - Recent ransomware victims
 */
export const ransomwareRecent: ToolDef = {
  name: "ransomwareRecent",
  description:
    "Fetch the most recent ransomware victims from ransomware.live. Returns victim name, group, country, sector, publication date, and associated URLs.",
  schema: {},
  async execute(_args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const victims = await fetchRansomwareLive<RansomwareVictim[]>("/recentvictims");
    return json({
      total: victims.length,
      victims: victims.map((v) => ({
        name: v.name,
        group: v.group,
        country: v.country,
        sector: v.sector,
        published: v.published,
        discovered: v.discovered,
        description: v.description,
        website: v.website,
        url: v.url,
      })),
    });
  },
};

/**
 * 2. ransomwareGroups - List all ransomware groups
 */
export const ransomwareGroups: ToolDef = {
  name: "ransomwareGroups",
  description:
    "List all known ransomware groups tracked by ransomware.live. Returns group names, descriptions, onion URLs, and profile information.",
  schema: {},
  async execute(_args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const groups = await fetchRansomwareLive<RansomwareGroupProfile[]>("/groups");
    return json({
      total: groups.length,
      groups: groups.map((g) => ({
        name: g.name,
        url: g.url,
        description: g.description,
        locations: g.locations,
        profile: g.profile,
      })),
    });
  },
};

/**
 * 3. ransomwareGroup - Get specific group profile
 */
export const ransomwareGroup: ToolDef = {
  name: "ransomwareGroup",
  description:
    "Get a detailed profile for a specific ransomware group by name. Includes description, known URLs, locations, and profile metadata.",
  schema: {
    name: z.string().describe("Ransomware group name (e.g. 'lockbit3', 'clop', 'blackcat')"),
  },
  async execute(args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const name = args.name as string;
    const group = await fetchRansomwareLive<RansomwareGroupProfile>(`/group/${encodeURIComponent(name)}`);
    return json({
      name: group.name,
      url: group.url,
      description: group.description,
      locations: group.locations,
      profile: group.profile,
    });
  },
};

/**
 * 4. ransomwareGroupVictims - Victims of a specific group
 */
export const ransomwareGroupVictims: ToolDef = {
  name: "ransomwareGroupVictims",
  description:
    "Get all victims claimed by a specific ransomware group. Returns victim names, countries, sectors, and publication dates.",
  schema: {
    name: z.string().describe("Ransomware group name (e.g. 'lockbit3', 'clop', 'blackcat')"),
  },
  async execute(args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const name = args.name as string;
    const victims = await fetchRansomwareLive<RansomwareVictim[]>(`/groupvictims/${encodeURIComponent(name)}`);
    return json({
      group: name,
      total: victims.length,
      victims: victims.map((v) => ({
        name: v.name,
        country: v.country,
        sector: v.sector,
        published: v.published,
        discovered: v.discovered,
        description: v.description,
        website: v.website,
        url: v.url,
      })),
    });
  },
};

/**
 * 5. ransomwareSearch - Search victims by keyword
 */
export const ransomwareSearch: ToolDef = {
  name: "ransomwareSearch",
  description:
    "Search ransomware victims by keyword. Matches against victim names, descriptions, and other fields. Useful for checking if a specific company has been listed as a victim.",
  schema: {
    keyword: z.string().describe("Search keyword (company name, domain, or other identifier)"),
  },
  async execute(args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const keyword = args.keyword as string;
    const results = await fetchRansomwareLive<RansomwareVictim[]>(
      `/searchvictims/${encodeURIComponent(keyword)}`,
    );
    return json({
      keyword,
      total: results.length,
      victims: results.map((v) => ({
        name: v.name,
        group: v.group,
        country: v.country,
        sector: v.sector,
        published: v.published,
        discovered: v.discovered,
        description: v.description,
        website: v.website,
        url: v.url,
      })),
    });
  },
};

/**
 * 6. ransomwareByCountry - Victims by country ISO code
 */
export const ransomwareByCountry: ToolDef = {
  name: "ransomwareByCountry",
  description:
    "Get ransomware victims filtered by country using ISO 3166-1 alpha-2 country code. Example codes: US, GB, DE, TR, FR, JP.",
  schema: {
    countryCode: z
      .string()
      .length(2)
      .describe("ISO 3166-1 alpha-2 country code (e.g. 'US', 'GB', 'DE', 'TR')"),
  },
  async execute(args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const code = (args.countryCode as string).toUpperCase();
    const victims = await fetchRansomwareLive<RansomwareVictim[]>(
      `/countryvictims/${encodeURIComponent(code)}`,
    );
    return json({
      country: code,
      total: victims.length,
      victims: victims.map((v) => ({
        name: v.name,
        group: v.group,
        sector: v.sector,
        published: v.published,
        discovered: v.discovered,
        description: v.description,
        website: v.website,
        url: v.url,
      })),
    });
  },
};

/**
 * 7. ransomwareBySector - Victims by sector/industry
 */
export const ransomwareBySector: ToolDef = {
  name: "ransomwareBySector",
  description:
    "Get ransomware victims filtered by sector or industry. Examples: 'healthcare', 'finance', 'education', 'government', 'technology'.",
  schema: {
    sector: z.string().describe("Sector or industry name (e.g. 'healthcare', 'finance', 'education')"),
  },
  async execute(args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const sector = args.sector as string;
    const victims = await fetchRansomwareLive<RansomwareVictim[]>(
      `/sectorvictims/${encodeURIComponent(sector)}`,
    );
    return json({
      sector,
      total: victims.length,
      victims: victims.map((v) => ({
        name: v.name,
        group: v.group,
        country: v.country,
        published: v.published,
        discovered: v.discovered,
        description: v.description,
        website: v.website,
        url: v.url,
      })),
    });
  },
};

/**
 * 8. ransomlookGroups - Groups from RansomLook API
 */
export const ransomlookGroups: ToolDef = {
  name: "ransomlookGroups",
  description:
    "List all ransomware groups tracked by RansomLook. Returns 582+ groups with names and associated onion/clear-web URLs. Complementary source to ransomware.live.",
  schema: {},
  async execute(_args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const groups = await fetchRansomlook<RansomlookGroup[]>("/groups");
    return json({
      total: groups.length,
      groups: groups.map((g) => ({
        name: g.name,
        urls: g.urls,
      })),
    });
  },
};

/**
 * 9. ransomlookRecent - Recent posts from RansomLook
 */
export const ransomlookRecent: ToolDef = {
  name: "ransomlookRecent",
  description:
    "Fetch the most recent ransomware posts and victim claims from RansomLook. Returns group name, post title, URL, and discovery timestamp.",
  schema: {},
  async execute(_args: Record<string, unknown>, _ctx: ToolContext): Promise<ToolResult> {
    const posts = await fetchRansomlook<RansomlookPost[]>("/recent");
    return json({
      total: posts.length,
      posts: posts.map((p) => ({
        group_name: p.group_name,
        post_title: p.post_title,
        post_url: p.post_url,
        discovered: p.discovered,
      })),
    });
  },
};

// ─── Export All Tools ───

export const allTools: ToolDef[] = [
  ransomwareRecent,
  ransomwareGroups,
  ransomwareGroup,
  ransomwareGroupVictims,
  ransomwareSearch,
  ransomwareByCountry,
  ransomwareBySector,
  ransomlookGroups,
  ransomlookRecent,
];
