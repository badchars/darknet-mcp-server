# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-06-23

### Added

- Initial release with 66 tools across 16 data sources
- MCP server with stdio transport for AI agent integration
- **Tor Network** (7 tools) -- Tor status, .onion HTML fetch, page scraping, onion search, exit node listing, exit check, exit details
- **Ransomware Intelligence** (9 tools) -- recent attacks, group profiles, group listing, victim search, sector statistics, country statistics, crypto wallets, negotiation leaks, data leak monitoring
- **Breach Intelligence** (7 tools) -- breached account lookup, breach details, paste search, domain breaches, breach catalog, latest breaches, credential leak search
- **abuse.ch Suite** (9 tools) -- ThreatFox IOC search, ThreatFox IOC by ID, URLhaus URL lookup, URLhaus host lookup, URLhaus payload lookup, MalwareBazaar hash lookup, MalwareBazaar tag search, MalwareBazaar signature search, YARAB rule download
- **AlienVault OTX** (5 tools) -- IP reputation, domain analysis, file hash lookup, CVE pulse search, pulse text search
- **AbuseIPDB** (4 tools) -- IP check, IP report history, blacklist export, CIDR block check
- **GreyNoise** (2 tools) -- IP context lookup, quick IP check
- **Pulsedive** (3 tools) -- indicator enrichment, indicator search, threat exploration
- **Hudson Rock** (3 tools) -- domain stealer logs, email stealer logs, IP stealer logs
- **Vulners** (3 tools) -- vulnerability search, vulnerability by ID, exploit search
- **Blockchain** (4 tools) -- Bitcoin address info, balance lookup, transaction details, abuse check
- **Hybrid Analysis** (3 tools) -- hash report, search submissions, quick scan
- **CIRCL Onion Lookup** (1 tool) -- .onion domain intelligence
- **IntelligenceX** (4 tools) -- search, result retrieval, phonebook lookup, statistics
- **PhishTank** (1 tool) -- URL phishing check
- **Meta** (1 tool) -- server info and tool listing
- CLI with `--list`, `--help`, `--check-tor` flags
- Tor SOCKS5 proxy integration for .onion access via `socks-proxy-agent`
- Per-provider rate limiting and TTL caching
- README translations in 23 languages
- Dark/light mode SVG banners
- Social preview image
