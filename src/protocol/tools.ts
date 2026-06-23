import { z } from "zod";
import type { ToolDef, ToolContext } from "../types/index.js";
import { json, text } from "../types/index.js";

// ─── Providers that already export ToolDef[] ───
import { allTools as ransomwareTools } from "../ransomware/index.js";
import { breachTools } from "../breach/index.js";
import { abusechTools } from "../abusech/index.js";

// ─── Providers that export individual functions ───
import {
  torStatus,
  torFetchOnionHtml,
  torScrapeOnionPage,
  torSearchOnion,
  torExitNodes,
  torExitCheck,
  torExitDetails,
} from "../tor/index.js";

import {
  otxIp,
  otxDomain,
  otxHash,
  otxCve,
  otxSearchPulses,
} from "../otx/index.js";

import {
  abuseipdbCheck,
  abuseipdbReports,
  abuseipdbBlacklist,
  abuseipdbCheckBlock,
} from "../abuseipdb/index.js";

import { greynoiseIp, greynoiseCheck } from "../greynoise/index.js";

import {
  pulsediveIndicator,
  pulsediveSearch,
  pulsediveExplore,
} from "../pulsedive/index.js";

import {
  stealerDomain,
  stealerEmail,
  stealerIp,
} from "../hudsonrock/index.js";

import {
  vulnersSearch,
  vulnersId,
  vulnersExploit,
} from "../vulners/index.js";

import {
  btcAddress,
  btcBalance,
  btcTx,
  btcAbuseCheck,
} from "../blockchain/index.js";

import {
  malwareSearch,
  malwareOverview,
  malwareFeed,
} from "../hybrid/index.js";

import { onionLookup } from "../onionlookup/index.js";

import {
  intelxSearch,
  intelxSearchResults,
  intelxPhonebook,
  intelxPhonebookResults,
} from "../intelx/index.js";

import { phishingCheck } from "../phishing/index.js";

import { listSources } from "../meta/sources.js";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Tor Network — 7 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const torTools: ToolDef[] = [
  {
    name: "tor_status",
    description:
      "Check if the local Tor SOCKS5 proxy daemon is running and accessible. Returns connectivity status for .onion fetching.",
    schema: {},
    execute: async (_args, ctx) => {
      const result = await torStatus(ctx.config.torSocksHost, ctx.config.torSocksPort);
      return json(result);
    },
  },
  {
    name: "tor_fetch_onion",
    description:
      "Fetch raw HTML from a .onion URL via Tor SOCKS5 proxy. Requires a running Tor daemon. Only .onion URLs are allowed (DNS leak prevention via socks5h).",
    schema: {
      url: z.string().describe("The .onion URL to fetch (http:// or https://)"),
    },
    execute: async (args, ctx) => {
      const result = await torFetchOnionHtml(
        args.url as string,
        ctx.config.torSocksHost,
        ctx.config.torSocksPort,
      );
      return text(
        `Status: ${result.statusCode}\n\n` +
        `HTML (first 50000 chars):\n${result.html.substring(0, 50000)}`,
      );
    },
  },
  {
    name: "tor_scrape_onion",
    description:
      "Fetch and parse a .onion site via Tor. Returns structured data: page title, all links, and visible body text. Requires running Tor daemon.",
    schema: {
      url: z.string().describe("The .onion URL to scrape"),
    },
    execute: async (args, ctx) => {
      const result = await torScrapeOnionPage(
        args.url as string,
        ctx.config.torSocksHost,
        ctx.config.torSocksPort,
      );
      return json(result);
    },
  },
  {
    name: "tor_search_onion",
    description:
      "Search for .onion sites using Ahmia.fi search engine. Returns titles, URLs, and descriptions of matching hidden services.",
    schema: {
      query: z.string().describe("Search query"),
      limit: z.number().optional().default(20).describe("Max results (default 20)"),
    },
    execute: async (args) => {
      const results = await torSearchOnion(args.query as string, args.limit as number);
      return json(results);
    },
  },
  {
    name: "tor_exit_nodes",
    description:
      "Get a list of current Tor exit node IP addresses from the official Tor Project bulk exit list.",
    schema: {
      limit: z.number().optional().describe("Max IPs to return (default: all)"),
    },
    execute: async (args) => {
      const ips = await torExitNodes(args.limit as number | undefined);
      return json({ count: ips.length, ips });
    },
  },
  {
    name: "tor_exit_check",
    description:
      "Check if a specific IP address is a known Tor exit node. Uses cached exit node list.",
    schema: {
      ip: z.string().describe("IP address to check"),
    },
    execute: async (args) => {
      const result = await torExitCheck(args.ip as string);
      return json(result);
    },
  },
  {
    name: "tor_exit_details",
    description:
      "Get detailed Tor exit node information including fingerprints, publish timestamps, and exit addresses.",
    schema: {
      limit: z.number().optional().describe("Max entries to return (default: all)"),
    },
    execute: async (args) => {
      const nodes = await torExitDetails(args.limit as number | undefined);
      return json({ count: nodes.length, nodes });
    },
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// AlienVault OTX — 5 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const otxTools: ToolDef[] = [
  {
    name: "otx_ip",
    description:
      "Look up threat intelligence for an IP address via AlienVault OTX. Returns pulse info, reputation, country, ASN.",
    schema: {
      ip: z.string().describe("IPv4 address to look up"),
    },
    execute: async (args, ctx) => json(await otxIp(args.ip as string, ctx.config.otxApiKey)),
  },
  {
    name: "otx_domain",
    description:
      "Look up threat intelligence for a domain via AlienVault OTX. Returns pulse info, whois, reputation.",
    schema: {
      domain: z.string().describe("Domain to look up (e.g. example.com)"),
    },
    execute: async (args, ctx) => json(await otxDomain(args.domain as string, ctx.config.otxApiKey)),
  },
  {
    name: "otx_hash",
    description:
      "Look up threat intelligence for a file hash via AlienVault OTX. Supports MD5, SHA1, SHA256.",
    schema: {
      hash: z.string().describe("File hash (MD5, SHA1, or SHA256)"),
    },
    execute: async (args, ctx) => json(await otxHash(args.hash as string, ctx.config.otxApiKey)),
  },
  {
    name: "otx_cve",
    description:
      "Look up threat intelligence for a CVE via AlienVault OTX. Returns related pulses and indicators.",
    schema: {
      cve: z.string().describe("CVE ID (e.g. CVE-2024-1234)"),
    },
    execute: async (args, ctx) => json(await otxCve(args.cve as string, ctx.config.otxApiKey)),
  },
  {
    name: "otx_search_pulses",
    description:
      "Search AlienVault OTX threat pulses by keyword. Returns matching pulses with tags, malware families, and IOC counts.",
    schema: {
      query: z.string().describe("Search query"),
      limit: z.number().optional().default(10).describe("Max results (default 10)"),
    },
    execute: async (args, ctx) =>
      json(await otxSearchPulses(args.query as string, args.limit as number, ctx.config.otxApiKey)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// AbuseIPDB — 4 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const abuseipdbTools: ToolDef[] = [
  {
    name: "abuseipdb_check",
    description:
      "Check an IP address against AbuseIPDB for abuse reports. Returns confidence score, ISP, country, and report count. Requires ABUSEIPDB_API_KEY.",
    schema: {
      ip: z.string().describe("IP address to check"),
      max_age: z.number().optional().default(90).describe("Max age of reports in days (default 90)"),
      verbose: z.boolean().optional().default(false).describe("Include recent reports in response"),
    },
    execute: async (args, ctx) =>
      json(
        await abuseipdbCheck(
          args.ip as string,
          args.max_age as number,
          args.verbose as boolean,
          ctx.config.abuseipdbApiKey!,
        ),
      ),
  },
  {
    name: "abuseipdb_reports",
    description:
      "Get individual abuse reports for an IP from AbuseIPDB. Returns detailed report comments and categories. Requires ABUSEIPDB_API_KEY.",
    schema: {
      ip: z.string().describe("IP address"),
      max_age: z.number().optional().default(90).describe("Max age in days (default 90)"),
      limit: z.number().optional().default(25).describe("Max reports to return (default 25)"),
    },
    execute: async (args, ctx) =>
      json(
        await abuseipdbReports(
          args.ip as string,
          args.max_age as number,
          args.limit as number,
          ctx.config.abuseipdbApiKey!,
        ),
      ),
  },
  {
    name: "abuseipdb_blacklist",
    description:
      "Get AbuseIPDB's blacklist of the most reported malicious IP addresses. Requires ABUSEIPDB_API_KEY.",
    schema: {
      confidence: z.number().optional().default(90).describe("Min confidence score (default 90)"),
      limit: z.number().optional().default(100).describe("Max entries (default 100)"),
    },
    execute: async (args, ctx) =>
      json(
        await abuseipdbBlacklist(
          args.confidence as number,
          args.limit as number,
          ctx.config.abuseipdbApiKey!,
        ),
      ),
  },
  {
    name: "abuseipdb_check_block",
    description:
      "Check an entire CIDR network block for abuse reports on AbuseIPDB. Requires ABUSEIPDB_API_KEY.",
    schema: {
      network: z.string().describe("CIDR block (e.g. 192.168.1.0/24)"),
      max_age: z.number().optional().default(30).describe("Max age in days (default 30)"),
    },
    execute: async (args, ctx) =>
      json(
        await abuseipdbCheckBlock(
          args.network as string,
          args.max_age as number,
          ctx.config.abuseipdbApiKey!,
        ),
      ),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GreyNoise Community — 2 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const greynoiseTools: ToolDef[] = [
  {
    name: "greynoise_ip",
    description:
      "Look up an IP address on GreyNoise Community API. Returns classification (benign/malicious/unknown), scanner status, and last seen timestamp. Free, no API key required.",
    schema: {
      ip: z.string().describe("IP address to look up"),
    },
    execute: async (args) => json(await greynoiseIp(args.ip as string)),
  },
  {
    name: "greynoise_check",
    description:
      "Quick GreyNoise check: is this IP a known scanner or known benign service? Returns simplified classification.",
    schema: {
      ip: z.string().describe("IP address to check"),
    },
    execute: async (args) => json(await greynoiseCheck(args.ip as string)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Pulsedive — 3 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const pulsediveTools: ToolDef[] = [
  {
    name: "pulsedive_indicator",
    description:
      "Look up an indicator (IP, domain, URL, or hash) on Pulsedive. Returns risk level, threats, feeds, and properties.",
    schema: {
      indicator: z.string().describe("Indicator value (IP, domain, URL, or hash)"),
    },
    execute: async (args, ctx) =>
      json(await pulsediveIndicator(args.indicator as string, ctx.config.pulsediveApiKey)),
  },
  {
    name: "pulsedive_search",
    description:
      "Search Pulsedive indicators by value. Returns matching indicator IDs.",
    schema: {
      query: z.string().describe("Search query"),
    },
    execute: async (args, ctx) =>
      json(await pulsediveSearch(args.query as string, ctx.config.pulsediveApiKey)),
  },
  {
    name: "pulsedive_explore",
    description:
      "Explore linked indicators on Pulsedive using advanced queries. Returns related IOCs with risk levels.",
    schema: {
      query: z.string().describe("Explore query (e.g. 'ioc=pulsedive.com' or 'threat=Zeus')"),
    },
    execute: async (args, ctx) =>
      json(await pulsediveExplore(args.query as string, ctx.config.pulsediveApiKey)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Hudson Rock Cavalier — 3 tools (Stealer Logs)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const hudsonrockTools: ToolDef[] = [
  {
    name: "stealer_domain",
    description:
      "Search Hudson Rock Cavalier for stealer log entries by domain. Returns compromised machines, credentials, and malware details. Requires HUDSONROCK_API_KEY.",
    schema: {
      domain: z.string().describe("Domain to search (e.g. example.com)"),
    },
    execute: async (args, ctx) =>
      json(await stealerDomain(args.domain as string, ctx.config.hudsonrockApiKey!)),
  },
  {
    name: "stealer_email",
    description:
      "Search Hudson Rock Cavalier stealer logs by email address. Returns compromised machines with that email in browser credentials. Requires HUDSONROCK_API_KEY.",
    schema: {
      email: z.string().describe("Email address to search"),
    },
    execute: async (args, ctx) =>
      json(await stealerEmail(args.email as string, ctx.config.hudsonrockApiKey!)),
  },
  {
    name: "stealer_ip",
    description:
      "Search Hudson Rock Cavalier stealer logs by IP address. Returns compromised machines originating from that IP. Requires HUDSONROCK_API_KEY.",
    schema: {
      ip: z.string().describe("IP address to search"),
    },
    execute: async (args, ctx) =>
      json(await stealerIp(args.ip as string, ctx.config.hudsonrockApiKey!)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Vulners — 3 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const vulnersTools: ToolDef[] = [
  {
    name: "vulners_search",
    description:
      "Search the Vulners vulnerability database using Lucene queries. Returns CVEs, advisories, and exploits.",
    schema: {
      query: z.string().describe("Lucene search query"),
      limit: z.number().optional().default(20).describe("Max results (default 20)"),
    },
    execute: async (args, ctx) =>
      json(await vulnersSearch(args.query as string, args.limit as number, ctx.config.vulnersApiKey)),
  },
  {
    name: "vulners_id",
    description:
      "Look up a specific vulnerability or exploit by ID on Vulners. Free, no API key required. Supports CVE, EDB, GHSA IDs.",
    schema: {
      id: z.string().describe("Vulnerability ID (e.g. CVE-2024-1234, EDB-ID:12345)"),
    },
    execute: async (args) => json(await vulnersId(args.id as string)),
  },
  {
    name: "vulners_exploit",
    description:
      "Search specifically for exploits on Vulners (ExploitDB entries). Filters results to exploit type only.",
    schema: {
      query: z.string().describe("Exploit search query"),
      limit: z.number().optional().default(20).describe("Max results (default 20)"),
    },
    execute: async (args, ctx) =>
      json(await vulnersExploit(args.query as string, args.limit as number, ctx.config.vulnersApiKey)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Blockchain Intelligence — 4 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const blockchainTools: ToolDef[] = [
  {
    name: "btc_address",
    description:
      "Look up a Bitcoin address on blockchain.info. Returns balance, transaction count, and recent transactions.",
    schema: {
      address: z.string().describe("Bitcoin address"),
    },
    execute: async (args) => json(await btcAddress(args.address as string)),
  },
  {
    name: "btc_balance",
    description:
      "Get Bitcoin address balance in satoshi from blockchain.info. Quick balance check without full transaction history.",
    schema: {
      address: z.string().describe("Bitcoin address"),
    },
    execute: async (args) => json(await btcBalance(args.address as string)),
  },
  {
    name: "btc_tx",
    description:
      "Get detailed Bitcoin transaction information by hash. Returns inputs, outputs, fees, and block info.",
    schema: {
      txhash: z.string().describe("Bitcoin transaction hash"),
    },
    execute: async (args) => json(await btcTx(args.txhash as string)),
  },
  {
    name: "btc_abuse_check",
    description:
      "Check a Bitcoin address for abuse reports on ChainAbuse. Returns scam reports with categories and descriptions.",
    schema: {
      address: z.string().describe("Bitcoin address to check"),
    },
    execute: async (args) => json(await btcAbuseCheck(args.address as string)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Hybrid Analysis — 3 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const hybridTools: ToolDef[] = [
  {
    name: "malware_search",
    description:
      "Search Hybrid Analysis sandbox by file hash (MD5, SHA1, SHA256). Returns verdict, AV detection rate, and analysis details. Requires HYBRID_API_KEY.",
    schema: {
      hash: z.string().describe("File hash (MD5, SHA1, or SHA256)"),
    },
    execute: async (args, ctx) =>
      json(await malwareSearch(args.hash as string, ctx.config.hybridApiKey!)),
  },
  {
    name: "malware_overview",
    description:
      "Get full malware analysis overview from Hybrid Analysis for a SHA256 hash. Returns MITRE ATT&CK techniques, network indicators, processes, and extracted files. Requires HYBRID_API_KEY.",
    schema: {
      sha256: z.string().describe("SHA256 hash of the file"),
    },
    execute: async (args, ctx) =>
      json(await malwareOverview(args.sha256 as string, ctx.config.hybridApiKey!)),
  },
  {
    name: "malware_feed",
    description:
      "Get the latest malware detonation feed from Hybrid Analysis. Returns recently analyzed samples with verdicts. Requires HYBRID_API_KEY.",
    schema: {},
    execute: async (_args, ctx) => json(await malwareFeed(ctx.config.hybridApiKey!)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CIRCL Onion Lookup — 1 tool
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const onionlookupTools: ToolDef[] = [
  {
    name: "onion_lookup",
    description:
      "Look up metadata for a .onion address via CIRCL AIL project. Returns first/last seen dates, status, tags, certificates, ports, and associated Bitcoin addresses.",
    schema: {
      address: z.string().describe(".onion address or full URL"),
    },
    execute: async (args) => json(await onionLookup(args.address as string)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// IntelligenceX — 4 tools
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const intelxTools: ToolDef[] = [
  {
    name: "intelx_search",
    description:
      "Initiate a search on IntelligenceX for leaked data, dark web content, and more. Returns a search ID to retrieve results. Requires INTELX_API_KEY.",
    schema: {
      term: z.string().describe("Search term (email, domain, IP, Bitcoin address, etc.)"),
      max_results: z.number().optional().default(100).describe("Max results (default 100)"),
    },
    execute: async (args, ctx) =>
      json(
        await intelxSearch(
          args.term as string,
          args.max_results as number,
          ctx.config.intelxApiKey!,
        ),
      ),
  },
  {
    name: "intelx_search_results",
    description:
      "Retrieve results for an IntelligenceX search by ID. Use after intelx_search to get actual data. Requires INTELX_API_KEY.",
    schema: {
      id: z.string().describe("Search ID from intelx_search"),
      offset: z.number().optional().default(0).describe("Result offset (default 0)"),
      limit: z.number().optional().default(100).describe("Max results per page (default 100)"),
    },
    execute: async (args, ctx) =>
      json(
        await intelxSearchResults(
          args.id as string,
          args.offset as number,
          args.limit as number,
          ctx.config.intelxApiKey!,
        ),
      ),
  },
  {
    name: "intelx_phonebook",
    description:
      "Initiate a phonebook search on IntelligenceX — finds emails, domains, URLs associated with a term. Returns search ID. Requires INTELX_API_KEY.",
    schema: {
      term: z.string().describe("Search term"),
      target: z
        .number()
        .optional()
        .default(0)
        .describe("Target type: 0=all, 1=emails, 2=domains, 3=URLs"),
      max_results: z.number().optional().default(100).describe("Max results (default 100)"),
    },
    execute: async (args, ctx) =>
      json(
        await intelxPhonebook(
          args.term as string,
          args.target as number,
          args.max_results as number,
          ctx.config.intelxApiKey!,
        ),
      ),
  },
  {
    name: "intelx_phonebook_results",
    description:
      "Retrieve phonebook search results from IntelligenceX by ID. Use after intelx_phonebook. Requires INTELX_API_KEY.",
    schema: {
      id: z.string().describe("Phonebook search ID from intelx_phonebook"),
      offset: z.number().optional().default(0).describe("Result offset (default 0)"),
      limit: z.number().optional().default(100).describe("Max results per page (default 100)"),
    },
    execute: async (args, ctx) =>
      json(
        await intelxPhonebookResults(
          args.id as string,
          args.offset as number,
          args.limit as number,
          ctx.config.intelxApiKey!,
        ),
      ),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PhishTank — 1 tool
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const phishingTools: ToolDef[] = [
  {
    name: "phishing_check",
    description:
      "Check if a URL is a known phishing site via PhishTank. Returns whether the URL is in their database and if it has been verified.",
    schema: {
      url: z.string().describe("URL to check for phishing"),
    },
    execute: async (args, ctx) =>
      json(await phishingCheck(args.url as string, ctx.config.phishtankApiKey)),
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Meta — 1 tool
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const metaTools: ToolDef[] = [
  {
    name: "darknet_list_sources",
    description:
      "List all available darknet-mcp data sources with their configuration status, required API keys, and available tools.",
    schema: {},
    execute: async (_args, ctx) => {
      const sources = listSources(ctx.config);
      const configured = sources.filter((s) => s.configured).length;
      const totalTools = sources.reduce((sum, s) => sum + s.tools.length, 0);

      return text(
        `darknet-mcp: ${sources.length} sources, ${configured} configured, ${totalTools} tools\n\n` +
        sources
          .map(
            (s) =>
              `${s.configured ? "[OK]" : "[--]"} ${s.name}\n` +
              `    URL: ${s.url}\n` +
              `    Auth: ${s.authRequired ? `Required (${s.envVar})` : s.envVar ? `Optional (${s.envVar})` : "None"}\n` +
              `    Tools: ${s.tools.join(", ")}`,
          )
          .join("\n\n"),
      );
    },
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ALL TOOLS — Final Assembly
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const allTools: ToolDef[] = [
  // Tor Network (7)
  ...torTools,
  // Ransomware Intelligence (9)
  ...ransomwareTools,
  // Breach Intelligence (7)
  ...breachTools,
  // abuse.ch Suite (9)
  ...abusechTools,
  // AlienVault OTX (5)
  ...otxTools,
  // AbuseIPDB (4)
  ...abuseipdbTools,
  // GreyNoise Community (2)
  ...greynoiseTools,
  // Pulsedive (3)
  ...pulsediveTools,
  // Hudson Rock Cavalier (3)
  ...hudsonrockTools,
  // Vulners (3)
  ...vulnersTools,
  // Blockchain Intelligence (4)
  ...blockchainTools,
  // Hybrid Analysis (3)
  ...hybridTools,
  // CIRCL Onion Lookup (1)
  ...onionlookupTools,
  // IntelligenceX (4)
  ...intelxTools,
  // PhishTank (1)
  ...phishingTools,
  // Meta (1)
  ...metaTools,
];
