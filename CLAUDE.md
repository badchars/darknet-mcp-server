# darknet-mcp — Dark Web Intelligence MCP Server

## Overview
66-tool MCP server for dark web intelligence: breach data, ransomware tracking, Tor .onion access, malware analysis, blockchain intel, exploit search, stealer logs.

## Architecture
- **Runtime:** Bun 1.3.9+ (dev), Node.js (publish)
- **Dependencies:** @modelcontextprotocol/sdk, zod, socks, socks-proxy-agent, cheerio
- **Transport:** stdio only
- **Pattern:** Each provider in own directory under src/, tools registered in src/protocol/tools.ts

## Key Rules
- TypeScript strict mode, English code/comments
- Native `fetch()` for HTTP APIs; `socks-proxy-agent` + `node:http` for Tor .onion
- Every tool schema field must have `.describe()`
- API keys always optional — graceful error when missing
- Rate limiter + TTL cache per provider
- Import paths use `.js` extension (ESM)

## Providers (16)
breach, intelx, ransomware, tor, abusech, otx, abuseipdb, greynoise, pulsedive, hudsonrock, vulners, blockchain, hybrid, onionlookup, phishing, meta

## Commands
```bash
bun install          # Install deps
bun run dev          # Dev mode (watch)
bun run build        # Build for npm
bun run src/index.ts --help   # CLI help
bun run src/index.ts --list   # List all tools
bun run src/index.ts --tool <name> '<json>'  # Run single tool
```
