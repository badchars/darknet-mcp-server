<p align="center">
  <strong>English</strong> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.pt-BR.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.el.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a> |
  <a href="README.hi.md">हिन्दी</a>
</p>

<p align="center">
  <br>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/banner-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/banner-light.svg">
    <img alt="darknet-mcp-server" src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/banner-dark.svg" width="700">
  </picture>
</p>

<h3 align="center">Dark web & threat intelligence for AI agents.</h3>

<p align="center">
  HIBP, ThreatFox, ransomware tracking, Tor .onion access, blockchain intel, exploit search, stealer logs, malware analysis &mdash; unified into a single MCP server.<br>
  Your AI agent gets <b>full-spectrum dark web intelligence on demand</b>, not 16 browser tabs and manual correlation.
</p>

<br>

<p align="center">
  <a href="#the-problem">The Problem</a> &bull;
  <a href="#how-its-different">How It's Different</a> &bull;
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#what-the-ai-can-do">What The AI Can Do</a> &bull;
  <a href="#tools-reference-66-tools">Tools (66)</a> &bull;
  <a href="#data-sources-16">Data Sources</a> &bull;
  <a href="#architecture">Architecture</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Tools">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Sources">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server demo" width="800">
</p>

---

## The Problem

Dark web intelligence is the missing layer in every security investigation. Breach databases, ransomware trackers, Tor hidden services, malware sandboxes, stealer logs, blockchain forensics, exploit databases &mdash; the data you need is scattered across dozens of platforms, each with its own API, its own auth, its own rate limits, its own output format. Today you check HIBP in one tab, ThreatFox in another, browse ransomware leak sites through Tor, pull up MalwareBazaar for a hash, check blockchain transactions on a block explorer, and then spend an hour manually piecing it all together.

```
Traditional dark web intel workflow:
  check breach exposure           ->  HIBP web interface (paid API)
  search leaked credentials       ->  IntelligenceX web interface
  track ransomware groups         ->  ransomware.live + ransomlook.io (2 separate UIs)
  access .onion hidden services   ->  Tor Browser manually
  analyze malware samples         ->  Hybrid Analysis + MalwareBazaar (2 more UIs)
  check IP abuse history          ->  AbuseIPDB + GreyNoise (2 more UIs)
  trace cryptocurrency            ->  blockchain.info + ChainAbuse
  search for exploits             ->  Vulners web interface
  check phishing URLs             ->  PhishTank web interface
  correlate everything            ->  copy-paste into a report
  ────────────────────────────────
  Total: 60+ minutes per investigation, most of it switching contexts
```

**darknet-mcp-server** gives your AI agent 66 tools across 16 data sources via the [Model Context Protocol](https://modelcontextprotocol.io). The agent queries all sources in parallel, correlates data across the surface and dark web, identifies threats, and presents a unified intelligence picture &mdash; in a single conversation.

```
With darknet-mcp-server:
  You: "Investigate the breach exposure and threat landscape for target.com"

  Agent: -> HIBP: 3 known breaches (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOCs associated with domain (C2 callback, phishing)
         -> URLhaus: 1 malicious URL hosted on subdomain
         -> Ransomware: No victim listings found (good)
         -> Stealer logs: 47 compromised employee credentials found
         -> OTX: 5 threat pulses referencing the domain
         -> AbuseIPDB: Primary IP has 12 abuse reports (brute force)
         -> "target.com has been in 3 data breaches exposing 2.1M records.
            47 employee credentials found in stealer logs — immediate
            password reset recommended. 2 active ThreatFox IOCs suggest
            ongoing targeting. No ransomware listings, but the abuse
            reports on the primary IP warrant investigation."
```

---

## How It's Different

Existing tools give you raw data one source at a time. darknet-mcp-server gives your AI agent the ability to **reason across surface web and dark web intelligence simultaneously**.

<table>
<thead>
<tr>
<th></th>
<th>Traditional Approach</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interface</b></td>
<td>16 different web UIs, CLIs, and APIs</td>
<td>MCP &mdash; AI agent calls tools conversationally</td>
</tr>
<tr>
<td><b>Data sources</b></td>
<td>One platform at a time</td>
<td>16 sources queried in parallel</td>
</tr>
<tr>
<td><b>Breach intel</b></td>
<td>HIBP web UI for breaches, IntelligenceX for leaks</td>
<td>Agent combines HIBP breaches + pastes + IntelligenceX + stealer logs</td>
</tr>
<tr>
<td><b>Dark web access</b></td>
<td>Manual Tor Browser, copy-paste from .onion sites</td>
<td>Agent fetches, scrapes, and searches .onion sites via SOCKS5 proxy</td>
</tr>
<tr>
<td><b>Malware analysis</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox separately</td>
<td>Agent cross-references: "This hash from ThreatFox was also detonated in Hybrid Analysis with network IOCs"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Block explorer + ChainAbuse separately</td>
<td>Agent traces BTC transactions and checks abuse reports in one step</td>
</tr>
<tr>
<td><b>API keys</b></td>
<td>Required for almost everything</td>
<td>Many tools work free; API keys unlock premium sources</td>
</tr>
<tr>
<td><b>Setup</b></td>
<td>Install each tool, manage each config, run Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; one command, zero config</td>
</tr>
</tbody>
</table>

---

## Quick Start

### Option 1: npx (no install)

```bash
npx darknet-mcp-server
```

Free tools work immediately. No API keys required for ransomware tracking, breach listings, GreyNoise, blockchain, OTX, and more.

### Option 2: Clone

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Environment variables (optional)

```bash
# Breach & credential intelligence
export HIBP_API_KEY=your-key           # Enables breach account search & paste search
export INTELX_API_KEY=your-key         # Enables 4 IntelligenceX tools

# Threat intelligence
export OTX_API_KEY=your-key            # Increases AlienVault OTX rate limits
export ABUSEIPDB_API_KEY=your-key      # Enables 4 AbuseIPDB tools
export ABUSECH_AUTH_KEY=your-key       # Higher rate limits for abuse.ch suite
export PULSEDIVE_API_KEY=your-key      # Higher rate limits for Pulsedive

# Stealer logs & credentials
export HUDSONROCK_API_KEY=your-key     # Enables 3 Hudson Rock stealer log tools

# Exploit & malware analysis
export VULNERS_API_KEY=your-key        # Enables Vulners search & exploit tools
export HYBRID_API_KEY=your-key         # Enables 3 Hybrid Analysis malware tools

# Phishing
export PHISHTANK_API_KEY=your-key      # Higher rate limits for PhishTank

# Tor SOCKS5 proxy (for .onion access)
export TOR_SOCKS_HOST=127.0.0.1       # Default: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Default: 9050
```

All API keys are optional. Without them, you still get ransomware tracking, breach listings, GreyNoise, blockchain intelligence, OTX, Tor exit node checks, onion search, CIRCL onion lookup, and more.

### Connect to your AI agent

<details open>
<summary><b>Claude Code</b></summary>

```bash
# With npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# With local clone
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "darknet": {
      "command": "npx",
      "args": ["-y", "darknet-mcp-server"],
      "env": {
        "HIBP_API_KEY": "optional",
        "INTELX_API_KEY": "optional",
        "ABUSEIPDB_API_KEY": "optional",
        "HUDSONROCK_API_KEY": "optional",
        "HYBRID_API_KEY": "optional",
        "VULNERS_API_KEY": "optional"
      }
    }
  }
}
```

</details>

<details>
<summary><b>Cursor / Windsurf / other MCP clients</b></summary>

Same JSON config format. Point the command to `npx darknet-mcp-server` or your local installation path.

</details>

### Tor setup (optional, for .onion access)

The 7 Tor tools (`tor_fetch_onion`, `tor_scrape_onion`, etc.) require a running Tor SOCKS5 proxy.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Verify connectivity
npx darknet-mcp-server --check-tor
```

### Start querying

```
You: "Check if example.com has been in any data breaches and look for stealer logs"
```

That's it. The agent handles breach lookups, credential searches, threat correlation, and more automatically.

---

## What The AI Can Do

### Breach Investigation

```
You: "Check if example.com has been in any data breaches"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com appears in 5 known breaches:
          - ExampleDB 2023: 4.2M records (emails, passwords, IPs)
          - Collection #1: credential stuffing list
          - Combolist 2024: 890K email:password pairs
          Stealer logs: 23 compromised machines with saved credentials
          for example.com found in Hudson Rock database.
          IntelligenceX: 47 results across paste sites and dark web."
```

### Ransomware Tracking

```
You: "What ransomware groups are targeting healthcare?"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Healthcare sector ransomware activity:
          142 victims across 12 groups in the last 12 months.
          Top groups: LockBit3 (38 victims), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Most recent: MedCorp Inc. listed by LockBit3 (2 days ago).
          3 new healthcare victims in the last week across
          ransomware.live and RansomLook feeds."
```

### Dark Web Recon

```
You: "Search for mentions of our company on .onion sites"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Dark web search results for AcmeCorp:
          Ahmia.fi: 3 .onion pages mention AcmeCorp
          - Forum post discussing AcmeCorp employee list (leak forum)
          - Marketplace listing for AcmeCorp database (unverified)
          - Blog post referencing AcmeCorp breach
          IntelligenceX: 12 results on paste sites
          Recommendation: investigate the forum post and marketplace
          listing for potential active data sales."
```

### Malware Analysis

```
You: "Analyze this file hash for malware indicators: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Malware analysis for abc123def456:
          Hybrid Analysis: MALICIOUS (threat score 95/100)
          - Family: AgentTesla (info stealer)
          - MITRE ATT&CK: T1555 (Credential Access), T1071 (C2)
          - Network IOCs: 3 C2 domains, 2 IPs
          MalwareBazaar: First seen 2024-03-15, tagged 'AgentTesla'
          ThreatFox: 2 IOC entries linking to same campaign
          OTX: Referenced in 4 threat pulses"
```

---

## Tools Reference (66 tools)

<details open>
<summary><b>Tor Network (7) &mdash; No API key (Tor daemon required for .onion tools)</b></summary>

| Tool | Description |
|------|-------------|
| `tor_status` | Check if the local Tor SOCKS5 proxy daemon is running and accessible |
| `tor_fetch_onion` | Fetch raw HTML from a .onion URL via Tor SOCKS5 proxy (DNS leak prevention via socks5h) |
| `tor_scrape_onion` | Fetch and parse a .onion site &mdash; returns structured data: title, links, body text |
| `tor_search_onion` | Search for .onion sites using Ahmia.fi search engine |
| `tor_exit_nodes` | Get current Tor exit node IP addresses from the official Tor Project bulk exit list |
| `tor_exit_check` | Check if a specific IP address is a known Tor exit node |
| `tor_exit_details` | Get detailed Tor exit node information including fingerprints and publish timestamps |

</details>

<details>
<summary><b>Ransomware Intelligence (9) &mdash; No API key</b></summary>

| Tool | Description |
|------|-------------|
| `ransomwareRecent` | Fetch the most recent ransomware victims from ransomware.live |
| `ransomwareGroups` | List all known ransomware groups tracked by ransomware.live |
| `ransomwareGroup` | Get a detailed profile for a specific ransomware group by name |
| `ransomwareGroupVictims` | Get all victims claimed by a specific ransomware group |
| `ransomwareSearch` | Search ransomware victims by keyword (company name, domain, etc.) |
| `ransomwareByCountry` | Get ransomware victims filtered by ISO 3166-1 alpha-2 country code |
| `ransomwareBySector` | Get ransomware victims filtered by sector/industry (healthcare, finance, etc.) |
| `ransomlookGroups` | List all 582+ ransomware groups tracked by RansomLook |
| `ransomlookRecent` | Fetch the most recent ransomware posts and victim claims from RansomLook |

</details>

<details>
<summary><b>Breach Intelligence &mdash; HIBP (7) &mdash; Partial: some tools free, account search requires HIBP_API_KEY</b></summary>

| Tool | Description |
|------|-------------|
| `breachList` | List all known data breaches from HaveIBeenPwned, optionally filter by domain &mdash; free |
| `breachGet` | Get details of a specific data breach by name &mdash; free |
| `breachLatest` | Get the most recently added data breach &mdash; free |
| `breachDataClasses` | List all data classes (types of compromised data) known to HIBP &mdash; free |
| `breachPassword` | Check if a password has appeared in known breaches (k-anonymity, only 5-char SHA-1 prefix sent) &mdash; free |
| `breachSearch` | Search all breaches for a specific account (email/username) &mdash; requires `HIBP_API_KEY` |
| `breachPastes` | Search for an email address in publicly posted pastes &mdash; requires `HIBP_API_KEY` |

</details>

<details>
<summary><b>abuse.ch Suite (9) &mdash; No API key (ABUSECH_AUTH_KEY optional for higher rate)</b></summary>

| Tool | Description |
|------|-------------|
| `threatfoxGetIocs` | Get recent IOCs from ThreatFox reported in the last N days |
| `threatfoxSearch` | Search ThreatFox IOCs by IP, domain, hash, or URL |
| `threatfoxTag` | Search ThreatFox IOCs by tag (e.g., Cobalt Strike, Emotet) |
| `threatfoxMalware` | Search ThreatFox IOCs by malware family using Malpedia naming |
| `urlhausLookup` | Look up a URL or host in URLhaus for malware distribution |
| `urlhausTag` | Search URLhaus entries by tag |
| `bazaarHash` | Look up a malware sample in MalwareBazaar by MD5, SHA1, or SHA256 hash |
| `bazaarRecent` | Get the most recently submitted malware samples from MalwareBazaar |
| `bazaarTag` | Search MalwareBazaar by tag or YARA signature name |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; No API key (OTX_API_KEY optional for higher rate)</b></summary>

| Tool | Description |
|------|-------------|
| `otx_ip` | Look up threat intelligence for an IP address &mdash; pulse info, reputation, country, ASN |
| `otx_domain` | Look up threat intelligence for a domain &mdash; pulse info, whois, reputation |
| `otx_hash` | Look up threat intelligence for a file hash (MD5, SHA1, SHA256) |
| `otx_cve` | Look up threat intelligence for a CVE &mdash; related pulses and indicators |
| `otx_search_pulses` | Search OTX threat pulses by keyword |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Requires ABUSEIPDB_API_KEY</b></summary>

| Tool | Description |
|------|-------------|
| `abuseipdb_check` | Check an IP address for abuse reports &mdash; confidence score, ISP, country, report count |
| `abuseipdb_reports` | Get individual abuse reports for an IP with detailed comments and categories |
| `abuseipdb_blacklist` | Get AbuseIPDB's blacklist of the most reported malicious IP addresses |
| `abuseipdb_check_block` | Check an entire CIDR network block for abuse reports |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; No API key</b></summary>

| Tool | Description |
|------|-------------|
| `greynoise_ip` | Look up an IP on GreyNoise &mdash; classification (benign/malicious/unknown), scanner status |
| `greynoise_check` | Quick check: is this IP a known scanner or known benign service? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; No API key (PULSEDIVE_API_KEY optional for higher rate)</b></summary>

| Tool | Description |
|------|-------------|
| `pulsedive_indicator` | Look up an indicator (IP, domain, URL, or hash) &mdash; risk level, threats, feeds |
| `pulsedive_search` | Search Pulsedive indicators by value |
| `pulsedive_explore` | Explore linked indicators using advanced queries (related IOCs with risk levels) |

</details>

<details>
<summary><b>Hudson Rock Stealer Logs (3) &mdash; Requires HUDSONROCK_API_KEY</b></summary>

| Tool | Description |
|------|-------------|
| `stealer_domain` | Search stealer log entries by domain &mdash; compromised machines, credentials, malware details |
| `stealer_email` | Search stealer logs by email address &mdash; compromised machines with that email in browser credentials |
| `stealer_ip` | Search stealer logs by IP address &mdash; compromised machines originating from that IP |

</details>

<details>
<summary><b>Vulners Exploits (3) &mdash; No API key (VULNERS_API_KEY optional for search)</b></summary>

| Tool | Description |
|------|-------------|
| `vulners_search` | Search the Vulners vulnerability database using Lucene queries |
| `vulners_id` | Look up a specific vulnerability or exploit by ID (CVE, EDB, GHSA) &mdash; free |
| `vulners_exploit` | Search specifically for exploits (ExploitDB entries) |

</details>

<details>
<summary><b>Blockchain Intelligence (4) &mdash; No API key</b></summary>

| Tool | Description |
|------|-------------|
| `btc_address` | Look up a Bitcoin address &mdash; balance, transaction count, recent transactions |
| `btc_balance` | Get Bitcoin address balance in satoshi (quick check without full history) |
| `btc_tx` | Get detailed Bitcoin transaction information by hash &mdash; inputs, outputs, fees, block info |
| `btc_abuse_check` | Check a Bitcoin address for abuse reports on ChainAbuse &mdash; scam reports with categories |

</details>

<details>
<summary><b>Hybrid Analysis Malware (3) &mdash; Requires HYBRID_API_KEY</b></summary>

| Tool | Description |
|------|-------------|
| `malware_search` | Search Hybrid Analysis sandbox by file hash &mdash; verdict, AV detection rate, analysis details |
| `malware_overview` | Full malware analysis overview &mdash; MITRE ATT&CK techniques, network indicators, processes |
| `malware_feed` | Get the latest malware detonation feed &mdash; recently analyzed samples with verdicts |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; No API key</b></summary>

| Tool | Description |
|------|-------------|
| `onion_lookup` | Look up metadata for a .onion address via CIRCL AIL project &mdash; first/last seen, status, tags, certs, ports, BTC addresses |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Requires INTELX_API_KEY</b></summary>

| Tool | Description |
|------|-------------|
| `intelx_search` | Initiate a search on IntelligenceX for leaked data, dark web content, and more |
| `intelx_search_results` | Retrieve results for an IntelligenceX search by ID |
| `intelx_phonebook` | Phonebook search &mdash; find emails, domains, URLs associated with a term |
| `intelx_phonebook_results` | Retrieve phonebook search results by ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; No API key (PHISHTANK_API_KEY optional for higher rate)</b></summary>

| Tool | Description |
|------|-------------|
| `phishing_check` | Check if a URL is a known phishing site via PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; No API key</b></summary>

| Tool | Description |
|------|-------------|
| `darknet_list_sources` | List all available data sources with configuration status, API key status, and tool counts |

</details>

---

### CLI Usage

```bash
# List all available tools
npx darknet-mcp-server --list

# Check Tor SOCKS5 proxy connectivity
npx darknet-mcp-server --check-tor

# Run any tool directly
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Tools requiring API keys
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Data Sources (16)

| Source | Auth | Rate Limit | What it provides |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | Breach search, paste search, password check, breach listings |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Dark web content, leaked data search, phonebook (emails/domains/URLs) |
| [AlienVault OTX](https://otx.alienvault.com) | Optional | 1 req/s | Threat intel for IPs, domains, hashes, CVEs; threat pulse search |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | IP abuse reports, confidence scoring, blacklist, CIDR block check |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Optional | 2 req/s | IOC search, malware family tracking, tag-based search |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Optional | 2 req/s | Malware distribution URL tracking, host/URL lookup |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Optional | 2 req/s | Malware sample repository, hash lookup, YARA signature search |
| [GreyNoise](https://www.greynoise.io) | None | 1 req/s | IP classification (benign/malicious), internet scanner detection |
| [Pulsedive](https://pulsedive.com) | Optional | 1 req/s | Indicator enrichment, risk scoring, linked IOC exploration |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Stealer log search by domain, email, or IP |
| [Vulners](https://vulners.com) | Optional | 1 req/s | Vulnerability/exploit database, CVE lookup, ExploitDB search |
| [Blockchain.info](https://blockchain.info) | None | 1 req/s | Bitcoin address lookup, balance, transaction details |
| [ChainAbuse](https://www.chainabuse.com) | None | 1 req/s | Bitcoin address abuse/scam reports |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Malware sandbox detonation, MITRE ATT&CK mapping, sample feed |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | None | 0.5 req/s | .onion address metadata, first/last seen, associated BTC addresses |
| [Tor Network](https://www.torproject.org) | None | N/A | Exit node list, .onion fetching/scraping, Ahmia.fi search |

---

## Architecture

```
src/
  index.ts                # CLI entrypoint (--help, --list, --check-tor, stdio server)
  protocol/
    mcp-server.ts         # MCP server setup (stdio transport)
    tools.ts              # Tool registry — all 66 tools assembled here
  types/
    index.ts              # Shared types (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Per-provider rate limiter
    cache.ts              # TTL cache for API responses
    tor-fetch.ts          # Tor SOCKS5 proxy HTTP client
    require-key.ts        # API key validation helper
  tor/                    # Tor Network tools (7)
  ransomware/             # Ransomware Intelligence tools (9)
  breach/                 # HIBP Breach tools (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar tools (9)
  otx/                    # AlienVault OTX tools (5)
  abuseipdb/              # AbuseIPDB tools (4)
  greynoise/              # GreyNoise Community tools (2)
  pulsedive/              # Pulsedive tools (3)
  hudsonrock/             # Hudson Rock stealer log tools (3)
  vulners/                # Vulners exploit tools (3)
  blockchain/             # Blockchain Intelligence tools (4)
  hybrid/                 # Hybrid Analysis malware tools (3)
  onionlookup/            # CIRCL Onion Lookup tool (1)
  intelx/                 # IntelligenceX tools (4)
  phishing/               # PhishTank tool (1)
  meta/                   # Meta tools (1)
```

**Design decisions:**

- **16 providers, 1 server** &mdash; Every data source is an independent module. The agent picks which tools to use based on the query.
- **Per-provider rate limiters** &mdash; Each data source has its own `RateLimiter` instance calibrated to that API's limits. No shared bottleneck.
- **TTL caching** &mdash; Ransomware data (15min), breach lists (10min), abuse.ch (5min) results are cached to avoid redundant API calls during multi-tool workflows.
- **Graceful degradation** &mdash; Missing API keys don't crash the server. Tools return descriptive error messages: "Set HIBP_API_KEY to enable breach account search."
- **DNS leak prevention** &mdash; Tor .onion tools use `socks5h://` protocol to resolve DNS through Tor, preventing DNS leaks to the local resolver.
- **4 dependencies** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent`, and `cheerio`. All clearnet HTTP via native `fetch`. All Tor traffic via SOCKS5.

---

## Limitations

- HIBP account/paste search requires a paid API key ($3.50/month)
- IntelligenceX, AbuseIPDB, Hudson Rock, and Hybrid Analysis require API keys for their tools
- Tor .onion tools require a running Tor SOCKS5 proxy (not bundled)
- abuse.ch free tier has lower rate limits without `ABUSECH_AUTH_KEY`
- Ransomware.live and RansomLook data depends on upstream scraping frequency
- Blockchain tools support Bitcoin only (no Ethereum/Monero)
- PhishTank database can lag behind real-time phishing campaigns
- macOS / Linux tested (Windows not tested)

---

## Part of the MCP Security Suite

| Project | Domain | Tools |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Browser-based security testing | 39 tools, Firefox, injection testing |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Cloud security (AWS/Azure/GCP) | 38 tools, 60+ checks |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub security posture | 39 tools, 45 checks |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Vulnerability intelligence | 23 tools, 5 sources |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT & reconnaissance | 37 tools, 12 sources |
| **darknet-mcp-server** | **Dark web & threat intelligence** | **66 tools, 16 sources** |

---

<p align="center">
<b>For authorized security testing and assessment only.</b><br>
Always ensure you have proper authorization before performing intelligence gathering on any target.
</p>

<p align="center">
  <a href="LICENSE">MIT License</a> &bull; Built with Bun + TypeScript
</p>
