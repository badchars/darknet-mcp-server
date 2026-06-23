// Meta — Data source listing tool
// Tools: listSources

import type { ToolContext } from "../types/index.js";

// ─── Types ───

export interface DataSource {
  name: string;
  url: string;
  authRequired: boolean;
  envVar: string | null;
  tools: string[];
  configured: boolean;
}

// ─── Source Definitions ───

const SOURCE_DEFINITIONS: {
  name: string;
  url: string;
  authRequired: boolean;
  envVar: string | null;
  configKey: keyof ToolContext["config"] | null;
  tools: string[];
}[] = [
  {
    name: "Have I Been Pwned (HIBP)",
    url: "https://haveibeenpwned.com",
    authRequired: true,
    envVar: "HIBP_API_KEY",
    configKey: "hibpApiKey",
    tools: ["hibpBreaches", "hibpPastes", "hibpPassword"],
  },
  {
    name: "IntelligenceX",
    url: "https://intelx.io",
    authRequired: true,
    envVar: "INTELX_API_KEY",
    configKey: "intelxApiKey",
    tools: ["intelxSearch", "intelxSearchResults", "intelxPhonebook", "intelxPhonebookResults"],
  },
  {
    name: "AlienVault OTX",
    url: "https://otx.alienvault.com",
    authRequired: false,
    envVar: "OTX_API_KEY",
    configKey: "otxApiKey",
    tools: ["otxIp", "otxDomain", "otxHash", "otxCve", "otxSearchPulses"],
  },
  {
    name: "AbuseIPDB",
    url: "https://www.abuseipdb.com",
    authRequired: true,
    envVar: "ABUSEIPDB_API_KEY",
    configKey: "abuseipdbApiKey",
    tools: ["abuseipdbCheck", "abuseipdbReports", "abuseipdbBlacklist", "abuseipdbCheckBlock"],
  },
  {
    name: "abuse.ch (ThreatFox, URLhaus, MalwareBazaar)",
    url: "https://abuse.ch",
    authRequired: false,
    envVar: "ABUSECH_AUTH_KEY",
    configKey: "abusechAuthKey",
    tools: ["threatfoxIoc", "threatfoxSearch", "urlhausUrl", "urlhausHost", "urlhausPayload", "malwareBazaarHash", "malwareBazaarTag"],
  },
  {
    name: "GreyNoise Community",
    url: "https://www.greynoise.io",
    authRequired: false,
    envVar: null,
    configKey: null,
    tools: ["greynoiseIp", "greynoiseCheck"],
  },
  {
    name: "Pulsedive",
    url: "https://pulsedive.com",
    authRequired: false,
    envVar: "PULSEDIVE_API_KEY",
    configKey: "pulsediveApiKey",
    tools: ["pulsediveIndicator", "pulsediveSearch", "pulsediveExplore"],
  },
  {
    name: "Hudson Rock Cavalier",
    url: "https://cavalier.hudsonrock.com",
    authRequired: true,
    envVar: "HUDSONROCK_API_KEY",
    configKey: "hudsonrockApiKey",
    tools: ["stealerDomain", "stealerEmail", "stealerIp"],
  },
  {
    name: "Vulners",
    url: "https://vulners.com",
    authRequired: false,
    envVar: "VULNERS_API_KEY",
    configKey: "vulnersApiKey",
    tools: ["vulnersSearch", "vulnersId", "vulnersExploit"],
  },
  {
    name: "Blockchain.info",
    url: "https://blockchain.info",
    authRequired: false,
    envVar: null,
    configKey: null,
    tools: ["btcAddress", "btcBalance", "btcTx"],
  },
  {
    name: "ChainAbuse",
    url: "https://www.chainabuse.com",
    authRequired: false,
    envVar: null,
    configKey: null,
    tools: ["btcAbuseCheck"],
  },
  {
    name: "Hybrid Analysis",
    url: "https://hybrid-analysis.com",
    authRequired: true,
    envVar: "HYBRID_API_KEY",
    configKey: "hybridApiKey",
    tools: ["malwareSearch", "malwareOverview", "malwareFeed"],
  },
  {
    name: "CIRCL Onion Lookup (AIL)",
    url: "https://onion.ail-project.org",
    authRequired: false,
    envVar: null,
    configKey: null,
    tools: ["onionLookup"],
  },
  {
    name: "PhishTank",
    url: "https://phishtank.org",
    authRequired: false,
    envVar: "PHISHTANK_API_KEY",
    configKey: "phishtankApiKey",
    tools: ["phishingCheck"],
  },
  {
    name: "Tor Network (Exit Nodes, Ahmia, SOCKS)",
    url: "https://www.torproject.org",
    authRequired: false,
    envVar: null,
    configKey: null,
    tools: ["torStatus", "torFetchOnion", "torScrapeOnion", "torSearchOnion", "torExitNodes", "torExitCheck", "torExitDetails"],
  },
];

// ─── 1. listSources — List all available data sources and their status ───

export function listSources(config: ToolContext["config"]): DataSource[] {
  return SOURCE_DEFINITIONS.map((source) => {
    let configured = false;

    if (source.configKey === null) {
      // No API key needed — always available
      configured = true;
    } else {
      const value = config[source.configKey];
      configured = value !== undefined && value !== "" && value !== null;
    }

    return {
      name: source.name,
      url: source.url,
      authRequired: source.authRequired,
      envVar: source.envVar,
      tools: source.tools,
      configured,
    };
  });
}
