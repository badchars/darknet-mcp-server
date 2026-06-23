#!/usr/bin/env node

import type { ToolContext } from "./types/index.js";
import { startMcpStdio } from "./protocol/mcp-server.js";
import { allTools } from "./protocol/tools.js";
import { checkTorStatus } from "./utils/tor-fetch.js";

// ─── Build ToolContext from Environment ───

function buildToolContext(): ToolContext {
  return {
    config: {
      // Breach & Intel
      hibpApiKey: process.env.HIBP_API_KEY,
      intelxApiKey: process.env.INTELX_API_KEY,
      // Threat Intel
      otxApiKey: process.env.OTX_API_KEY,
      abuseipdbApiKey: process.env.ABUSEIPDB_API_KEY,
      abusechAuthKey: process.env.ABUSECH_AUTH_KEY,
      pulsediveApiKey: process.env.PULSEDIVE_API_KEY,
      // Stealer & Credentials
      hudsonrockApiKey: process.env.HUDSONROCK_API_KEY,
      // Exploit & Malware
      vulnersApiKey: process.env.VULNERS_API_KEY,
      hybridApiKey: process.env.HYBRID_API_KEY,
      // Phishing
      phishtankApiKey: process.env.PHISHTANK_API_KEY,
      // Tor
      torSocksHost: process.env.TOR_SOCKS_HOST ?? "127.0.0.1",
      torSocksPort: parseInt(process.env.TOR_SOCKS_PORT ?? "9050", 10),
    },
  };
}

// ─── Tool Categories for --list display ───

const TOOL_CATEGORIES: { category: string; prefix: string }[] = [
  { category: "Tor Network", prefix: "tor_" },
  // ransomware/index.ts uses camelCase names
  { category: "Ransomware Intelligence", prefix: "ransomware" },
  { category: "Ransomware Intelligence", prefix: "ransomlook" },
  // breach/index.ts uses camelCase names
  { category: "Breach Intelligence (HIBP)", prefix: "breach" },
  // abusech/index.ts uses camelCase names
  { category: "abuse.ch Suite", prefix: "threatfox" },
  { category: "abuse.ch Suite", prefix: "urlhaus" },
  { category: "abuse.ch Suite", prefix: "bazaar" },
  { category: "AlienVault OTX", prefix: "otx_" },
  { category: "AbuseIPDB", prefix: "abuseipdb_" },
  { category: "GreyNoise Community", prefix: "greynoise_" },
  { category: "Pulsedive", prefix: "pulsedive_" },
  { category: "Hudson Rock (Stealer Logs)", prefix: "stealer_" },
  { category: "Vulners (Exploits)", prefix: "vulners_" },
  { category: "Blockchain Intelligence", prefix: "btc_" },
  { category: "Hybrid Analysis (Malware)", prefix: "malware_" },
  { category: "CIRCL Onion Lookup", prefix: "onion_" },
  { category: "IntelligenceX", prefix: "intelx_" },
  { category: "PhishTank", prefix: "phishing_" },
  { category: "Meta", prefix: "darknet_" },
];

function categorize(toolName: string): string {
  for (const { category, prefix } of TOOL_CATEGORIES) {
    if (toolName.startsWith(prefix)) return category;
  }
  return "Other";
}

// ─── CLI: --help ───

function printHelp(): void {
  console.log(`darknet-mcp — Dark Web & Threat Intelligence MCP Server

USAGE:
  darknet-mcp                Start MCP server on stdio
  darknet-mcp --help         Show this help message
  darknet-mcp --list         List all ${allTools.length} tools grouped by category
  darknet-mcp --check-tor    Check Tor SOCKS5 proxy connectivity

ENVIRONMENT VARIABLES:
  HIBP_API_KEY               Have I Been Pwned API key (breach_search, breach_pastes)
  INTELX_API_KEY             IntelligenceX API key (4 intelx tools)
  OTX_API_KEY                AlienVault OTX key (increases rate limit)
  ABUSEIPDB_API_KEY          AbuseIPDB key (4 abuseipdb tools)
  ABUSECH_AUTH_KEY           abuse.ch shared auth key (higher rate)
  PULSEDIVE_API_KEY          Pulsedive key (higher rate)
  HUDSONROCK_API_KEY         Hudson Rock Cavalier key (3 stealer tools)
  VULNERS_API_KEY            Vulners key (search/exploit)
  HYBRID_API_KEY             Hybrid Analysis key (3 malware tools)
  PHISHTANK_API_KEY          PhishTank key (higher rate)
  TOR_SOCKS_HOST             Tor SOCKS5 host (default: 127.0.0.1)
  TOR_SOCKS_PORT             Tor SOCKS5 port (default: 9050)

TOR SETUP:
  macOS:    brew install tor && brew services start tor
  Linux:    sudo apt install tor && sudo systemctl start tor
  Docker:   docker run -d -p 9050:9050 dperson/torproxy
`);
}

// ─── CLI: --list ───

function printToolList(): void {
  const grouped = new Map<string, typeof allTools>();

  for (const tool of allTools) {
    const cat = categorize(tool.name);
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push(tool);
  }

  console.log(`\ndarknet-mcp — ${allTools.length} tools\n`);

  for (const [category, tools] of grouped) {
    console.log(`━━━ ${category} (${tools.length}) ━━━`);
    for (const tool of tools) {
      const schemaKeys = Object.keys(tool.schema);
      const params = schemaKeys.length > 0 ? `(${schemaKeys.join(", ")})` : "()";
      console.log(`  ${tool.name}${params}`);
      console.log(`    ${tool.description.split(".")[0]}.`);
    }
    console.log();
  }
}

// ─── CLI: --check-tor ───

async function checkTor(): Promise<void> {
  const host = process.env.TOR_SOCKS_HOST ?? "127.0.0.1";
  const port = parseInt(process.env.TOR_SOCKS_PORT ?? "9050", 10);

  console.log(`Checking Tor SOCKS5 proxy at ${host}:${port}...`);

  const status = await checkTorStatus(host, port);

  if (status.socksAvailable) {
    console.log(`[OK] Tor SOCKS5 proxy is running at ${host}:${port}`);
    console.log("     .onion fetching tools (tor_fetch_onion, tor_scrape_onion) are available.");
  } else {
    console.log(`[FAIL] Tor SOCKS5 proxy is NOT available at ${host}:${port}`);
    console.log("\nTo start Tor:");
    console.log("  macOS:    brew install tor && brew services start tor");
    console.log("  Linux:    sudo apt install tor && sudo systemctl start tor");
    console.log("  Docker:   docker run -d -p 9050:9050 dperson/torproxy");
    process.exit(1);
  }
}

// ─── Main ───

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    printHelp();
    return;
  }

  if (args.includes("--list") || args.includes("-l")) {
    printToolList();
    return;
  }

  if (args.includes("--check-tor")) {
    await checkTor();
    return;
  }

  // Default: start MCP server on stdio
  const ctx = buildToolContext();
  await startMcpStdio(ctx);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
