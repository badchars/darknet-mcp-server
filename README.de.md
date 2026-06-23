<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <strong>Deutsch</strong> |
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

<h3 align="center">Dark-Web- und Bedrohungsintelligenz fuer KI-Agenten.</h3>

<p align="center">
  HIBP, ThreatFox, Ransomware-Tracking, Tor-.onion-Zugriff, Blockchain-Intelligenz, Exploit-Suche, Stealer-Logs, Malware-Analyse &mdash; vereint in einem einzigen MCP-Server.<br>
  Ihr KI-Agent erhaelt <b>vollumfaengliche Dark-Web-Intelligenz auf Abruf</b>, nicht 16 Browser-Tabs und manuelle Korrelation.
</p>

<br>

<p align="center">
  <a href="#das-problem">Das Problem</a> &bull;
  <a href="#was-anders-ist">Was anders ist</a> &bull;
  <a href="#schnellstart">Schnellstart</a> &bull;
  <a href="#was-die-ki-kann">Was die KI kann</a> &bull;
  <a href="#werkzeug-referenz-66-werkzeuge">Werkzeuge (66)</a> &bull;
  <a href="#datenquellen-16">Datenquellen</a> &bull;
  <a href="#architektur">Architektur</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Mitwirken</a>
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
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server Demo" width="800">
</p>

---

## Das Problem

Dark-Web-Intelligenz ist die fehlende Schicht in jeder Sicherheitsuntersuchung. Breach-Datenbanken, Ransomware-Tracker, versteckte Tor-Dienste, Malware-Sandboxen, Stealer-Logs, Blockchain-Forensik, Exploit-Datenbanken &mdash; die benoetigten Daten sind ueber Dutzende von Plattformen verstreut, jede mit ihrer eigenen API, eigener Authentifizierung, eigenen Ratenbegrenzungen und eigenem Ausgabeformat. Heute pruefen Sie HIBP in einem Tab, ThreatFox in einem anderen, durchsuchen Ransomware-Leak-Seiten ueber Tor, rufen MalwareBazaar fuer einen Hash auf, pruefen Blockchain-Transaktionen in einem Block-Explorer und verbringen dann eine Stunde damit, alles manuell zusammenzufuegen.

```
Traditioneller Dark-Web-Intel-Workflow:
  Breach-Exposition pruefen        ->  HIBP-Weboberflaeche (kostenpflichtige API)
  Geleakte Zugangsdaten suchen     ->  IntelligenceX-Weboberflaeche
  Ransomware-Gruppen verfolgen     ->  ransomware.live + ransomlook.io (2 separate UIs)
  .onion-Hidden-Services aufrufen  ->  Tor-Browser manuell
  Malware-Proben analysieren       ->  Hybrid Analysis + MalwareBazaar (2 weitere UIs)
  IP-Missbrauchshistorie pruefen   ->  AbuseIPDB + GreyNoise (2 weitere UIs)
  Kryptowaehrung verfolgen         ->  blockchain.info + ChainAbuse
  Exploits suchen                  ->  Vulners-Weboberflaeche
  Phishing-URLs pruefen            ->  PhishTank-Weboberflaeche
  Alles korrelieren                ->  Kopieren und Einfuegen in einen Bericht
  ────────────────────────────────
  Gesamt: 60+ Minuten pro Untersuchung, der Grossteil davon Kontextwechsel
```

**darknet-mcp-server** gibt Ihrem KI-Agenten 66 Werkzeuge aus 16 Datenquellen ueber das [Model Context Protocol](https://modelcontextprotocol.io). Der Agent fragt alle Quellen parallel ab, korreliert Daten aus dem Surface- und Dark-Web, identifiziert Bedrohungen und praesentiert ein einheitliches Nachrichtenbild &mdash; in einem einzigen Gespraech.

```
Mit darknet-mcp-server:
  Sie: "Untersuche die Breach-Exposition und die Bedrohungslandschaft fuer target.com"

  Agent: -> HIBP: 3 bekannte Breaches (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOCs mit der Domain verknuepft (C2-Callback, Phishing)
         -> URLhaus: 1 boesartige URL auf einer Subdomain gehostet
         -> Ransomware: Keine Opfereintraege gefunden (gut)
         -> Stealer-Logs: 47 kompromittierte Mitarbeiterzugangsdaten gefunden
         -> OTX: 5 Bedrohungs-Pulses referenzieren die Domain
         -> AbuseIPDB: Primaere IP hat 12 Missbrauchsmeldungen (Brute-Force)
         -> "target.com war an 3 Datenlecks beteiligt, die 2,1 Mio. Datensaetze
            exponiert haben. 47 Mitarbeiterzugangsdaten in Stealer-Logs
            gefunden — sofortige Passwortzuruecksetzung empfohlen. 2 aktive
            ThreatFox-IOCs deuten auf andauerndes Targeting hin. Keine
            Ransomware-Eintraege, aber die Missbrauchsmeldungen zur
            primaeren IP erfordern eine Untersuchung."
```

---

## Was anders ist

Bestehende Werkzeuge liefern Ihnen Rohdaten jeweils aus einer Quelle. darknet-mcp-server gibt Ihrem KI-Agenten die Faehigkeit, **Surface-Web- und Dark-Web-Intelligenz gleichzeitig zu analysieren**.

<table>
<thead>
<tr>
<th></th>
<th>Traditioneller Ansatz</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Schnittstelle</b></td>
<td>16 verschiedene Web-UIs, CLIs und APIs</td>
<td>MCP &mdash; KI-Agent ruft Werkzeuge konversationell auf</td>
</tr>
<tr>
<td><b>Datenquellen</b></td>
<td>Eine Plattform auf einmal</td>
<td>16 Quellen werden parallel abgefragt</td>
</tr>
<tr>
<td><b>Breach-Intelligenz</b></td>
<td>HIBP-Web-UI fuer Breaches, IntelligenceX fuer Leaks</td>
<td>Agent kombiniert HIBP-Breaches + Pastes + IntelligenceX + Stealer-Logs</td>
</tr>
<tr>
<td><b>Dark-Web-Zugriff</b></td>
<td>Manueller Tor-Browser, Kopieren von .onion-Seiten</td>
<td>Agent holt, scrapt und durchsucht .onion-Seiten ueber SOCKS5-Proxy</td>
</tr>
<tr>
<td><b>Malware-Analyse</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox jeweils separat</td>
<td>Agent vergleicht: "Dieser Hash aus ThreatFox wurde auch in Hybrid Analysis mit Netzwerk-IOCs detoniert"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Block-Explorer + ChainAbuse separat</td>
<td>Agent verfolgt BTC-Transaktionen und prueft Missbrauchsmeldungen in einem Schritt</td>
</tr>
<tr>
<td><b>API-Schluessel</b></td>
<td>Fuer fast alles erforderlich</td>
<td>Viele Werkzeuge funktionieren kostenlos; API-Schluessel schalten Premium-Quellen frei</td>
</tr>
<tr>
<td><b>Einrichtung</b></td>
<td>Jedes Tool installieren, jede Konfiguration verwalten, Tor-Browser ausfuehren</td>
<td><code>npx darknet-mcp-server</code> &mdash; ein Befehl, keine Konfiguration</td>
</tr>
</tbody>
</table>

---

## Schnellstart

### Option 1: npx (keine Installation)

```bash
npx darknet-mcp-server
```

Kostenlose Werkzeuge funktionieren sofort. Kein API-Schluessel erforderlich fuer Ransomware-Tracking, Breach-Listen, GreyNoise, Blockchain, OTX und mehr.

### Option 2: Klonen

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Umgebungsvariablen (optional)

```bash
# Breach- und Zugangsdaten-Intelligenz
export HIBP_API_KEY=your-key           # Aktiviert Breach-Kontosuche und Paste-Suche
export INTELX_API_KEY=your-key         # Aktiviert 4 IntelligenceX-Werkzeuge

# Bedrohungsintelligenz
export OTX_API_KEY=your-key            # Erhoeht AlienVault-OTX-Ratenlimits
export ABUSEIPDB_API_KEY=your-key      # Aktiviert 4 AbuseIPDB-Werkzeuge
export ABUSECH_AUTH_KEY=your-key       # Hoehere Ratenlimits fuer die abuse.ch-Suite
export PULSEDIVE_API_KEY=your-key      # Hoehere Ratenlimits fuer Pulsedive

# Stealer-Logs und Zugangsdaten
export HUDSONROCK_API_KEY=your-key     # Aktiviert 3 Hudson-Rock-Stealer-Log-Werkzeuge

# Exploit- und Malware-Analyse
export VULNERS_API_KEY=your-key        # Aktiviert Vulners-Such- und Exploit-Werkzeuge
export HYBRID_API_KEY=your-key         # Aktiviert 3 Hybrid-Analysis-Malware-Werkzeuge

# Phishing
export PHISHTANK_API_KEY=your-key      # Hoehere Ratenlimits fuer PhishTank

# Tor-SOCKS5-Proxy (fuer .onion-Zugriff)
export TOR_SOCKS_HOST=127.0.0.1       # Standard: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Standard: 9050
```

Alle API-Schluessel sind optional. Ohne sie erhalten Sie weiterhin Ransomware-Tracking, Breach-Listen, GreyNoise, Blockchain-Intelligenz, OTX, Tor-Exit-Node-Pruefungen, Onion-Suche, CIRCL-Onion-Lookup und mehr.

### Mit Ihrem KI-Agenten verbinden

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Mit npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Mit lokalem Klon
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Zu `~/Library/Application Support/Claude/claude_desktop_config.json` hinzufuegen:

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
<summary><b>Cursor / Windsurf / andere MCP-Clients</b></summary>

Gleiches JSON-Konfigurationsformat. Richten Sie den Befehl auf `npx darknet-mcp-server` oder Ihren lokalen Installationspfad.

</details>

### Tor-Einrichtung (optional, fuer .onion-Zugriff)

Die 7 Tor-Werkzeuge (`tor_fetch_onion`, `tor_scrape_onion` usw.) erfordern einen laufenden Tor-SOCKS5-Proxy.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Konnektivitaet pruefen
npx darknet-mcp-server --check-tor
```

### Abfragen starten

```
Sie: "Pruefe ob example.com von Datenbreaches betroffen ist und suche nach Stealer-Logs"
```

Das war's. Der Agent uebernimmt Breach-Abfragen, Zugangsdaten-Suche, Bedrohungskorrelation und mehr automatisch.

---

## Was die KI kann

### Breach-Untersuchung

```
Sie: "Pruefe ob example.com von Datenbreaches betroffen ist"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com erscheint in 5 bekannten Breaches:
          - ExampleDB 2023: 4,2 Mio. Datensaetze (E-Mails, Passwoerter, IPs)
          - Collection #1: Credential-Stuffing-Liste
          - Combolist 2024: 890.000 E-Mail:Passwort-Paare
          Stealer-Logs: 23 kompromittierte Rechner mit gespeicherten
          Zugangsdaten fuer example.com in der Hudson-Rock-Datenbank gefunden.
          IntelligenceX: 47 Ergebnisse auf Paste-Seiten und im Dark Web."
```

### Ransomware-Tracking

```
Sie: "Welche Ransomware-Gruppen zielen auf das Gesundheitswesen ab?"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Ransomware-Aktivitaet im Gesundheitswesen:
          142 Opfer ueber 12 Gruppen in den letzten 12 Monaten.
          Fuehrende Gruppen: LockBit3 (38 Opfer), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Neueste: MedCorp Inc. von LockBit3 gelistet (vor 2 Tagen).
          3 neue Gesundheitswesen-Opfer in der letzten Woche in den
          ransomware.live- und RansomLook-Feeds."
```

### Dark-Web-Aufklaerung

```
Sie: "Suche nach Erwaehnung unserer Firma auf .onion-Seiten"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Dark-Web-Suchergebnisse fuer AcmeCorp:
          Ahmia.fi: 3 .onion-Seiten erwaehnen AcmeCorp
          - Forumsbeitrag diskutiert AcmeCorp-Mitarbeiterliste (Leak-Forum)
          - Marktplatz-Eintrag fuer AcmeCorp-Datenbank (unbestaetigt)
          - Blogbeitrag referenziert AcmeCorp-Breach
          IntelligenceX: 12 Ergebnisse auf Paste-Seiten
          Empfehlung: Forumsbeitrag und Marktplatz-Eintrag
          auf moeglichen aktiven Datenverkauf untersuchen."
```

### Malware-Analyse

```
Sie: "Analysiere diesen Datei-Hash auf Malware-Indikatoren: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Malware-Analyse fuer abc123def456:
          Hybrid Analysis: BOESARTIG (Bedrohungswert 95/100)
          - Familie: AgentTesla (Info-Stealer)
          - MITRE ATT&CK: T1555 (Zugangsdaten-Zugriff), T1071 (C2)
          - Netzwerk-IOCs: 3 C2-Domains, 2 IPs
          MalwareBazaar: Erstmals gesehen 2024-03-15, getaggt 'AgentTesla'
          ThreatFox: 2 IOC-Eintraege verknuepft mit derselben Kampagne
          OTX: In 4 Bedrohungs-Pulses referenziert"
```

---

## Werkzeug-Referenz (66 Werkzeuge)

<details open>
<summary><b>Tor-Netzwerk (7) &mdash; Kein API-Schluessel (Tor-Daemon fuer .onion-Werkzeuge erforderlich)</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `tor_status` | Pruefen, ob der lokale Tor-SOCKS5-Proxy-Daemon laeuft und erreichbar ist |
| `tor_fetch_onion` | Rohes HTML von einer .onion-URL ueber Tor-SOCKS5-Proxy abrufen (DNS-Leak-Praevention via socks5h) |
| `tor_scrape_onion` | .onion-Seite abrufen und parsen &mdash; gibt strukturierte Daten zurueck: Titel, Links, Textinhalt |
| `tor_search_onion` | .onion-Seiten mit der Ahmia.fi-Suchmaschine suchen |
| `tor_exit_nodes` | Aktuelle Tor-Exit-Node-IP-Adressen von der offiziellen Tor-Projekt-Bulk-Exit-Liste abrufen |
| `tor_exit_check` | Pruefen, ob eine bestimmte IP-Adresse ein bekannter Tor-Exit-Node ist |
| `tor_exit_details` | Detaillierte Tor-Exit-Node-Informationen einschliesslich Fingerprints und Veroeffentlichungszeitstempel abrufen |

</details>

<details>
<summary><b>Ransomware-Intelligenz (9) &mdash; Kein API-Schluessel</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `ransomwareRecent` | Die neuesten Ransomware-Opfer von ransomware.live abrufen |
| `ransomwareGroups` | Alle bekannten Ransomware-Gruppen auflisten, die von ransomware.live verfolgt werden |
| `ransomwareGroup` | Detailliertes Profil einer bestimmten Ransomware-Gruppe nach Name abrufen |
| `ransomwareGroupVictims` | Alle von einer bestimmten Ransomware-Gruppe beanspruchten Opfer abrufen |
| `ransomwareSearch` | Ransomware-Opfer nach Stichwort suchen (Firmenname, Domain usw.) |
| `ransomwareByCountry` | Ransomware-Opfer nach ISO-3166-1-Alpha-2-Laendercode filtern |
| `ransomwareBySector` | Ransomware-Opfer nach Sektor/Branche filtern (Gesundheitswesen, Finanzen usw.) |
| `ransomlookGroups` | Alle 582+ Ransomware-Gruppen auflisten, die von RansomLook verfolgt werden |
| `ransomlookRecent` | Die neuesten Ransomware-Posts und Opferbehauptungen von RansomLook abrufen |

</details>

<details>
<summary><b>Breach-Intelligenz &mdash; HIBP (7) &mdash; Teilweise: einige Werkzeuge kostenlos, Kontosuche erfordert HIBP_API_KEY</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `breachList` | Alle bekannten Datenbreaches von HaveIBeenPwned auflisten, optional nach Domain filtern &mdash; kostenlos |
| `breachGet` | Details eines bestimmten Datenbreach nach Name abrufen &mdash; kostenlos |
| `breachLatest` | Den zuletzt hinzugefuegten Datenbreach abrufen &mdash; kostenlos |
| `breachDataClasses` | Alle Datenklassen (Typen kompromittierter Daten) auflisten, die HIBP bekannt sind &mdash; kostenlos |
| `breachPassword` | Pruefen, ob ein Passwort in bekannten Breaches aufgetaucht ist (k-Anonymitaet, nur 5-Zeichen-SHA-1-Praefix gesendet) &mdash; kostenlos |
| `breachSearch` | Alle Breaches fuer ein bestimmtes Konto (E-Mail/Benutzername) suchen &mdash; erfordert `HIBP_API_KEY` |
| `breachPastes` | Eine E-Mail-Adresse in oeffentlich geposteten Pastes suchen &mdash; erfordert `HIBP_API_KEY` |

</details>

<details>
<summary><b>abuse.ch-Suite (9) &mdash; Kein API-Schluessel (ABUSECH_AUTH_KEY optional fuer hoehere Rate)</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `threatfoxGetIocs` | Aktuelle IOCs von ThreatFox abrufen, die in den letzten N Tagen gemeldet wurden |
| `threatfoxSearch` | ThreatFox-IOCs nach IP, Domain, Hash oder URL durchsuchen |
| `threatfoxTag` | ThreatFox-IOCs nach Tag durchsuchen (z.B. Cobalt Strike, Emotet) |
| `threatfoxMalware` | ThreatFox-IOCs nach Malware-Familie unter Verwendung der Malpedia-Namensgebung durchsuchen |
| `urlhausLookup` | URL oder Host in URLhaus auf Malware-Verteilung nachschlagen |
| `urlhausTag` | URLhaus-Eintraege nach Tag durchsuchen |
| `bazaarHash` | Malware-Probe in MalwareBazaar nach MD5-, SHA1- oder SHA256-Hash nachschlagen |
| `bazaarRecent` | Die neuesten eingereichten Malware-Proben von MalwareBazaar abrufen |
| `bazaarTag` | MalwareBazaar nach Tag oder YARA-Signaturname durchsuchen |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Kein API-Schluessel (OTX_API_KEY optional fuer hoehere Rate)</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `otx_ip` | Bedrohungsintelligenz fuer eine IP-Adresse nachschlagen &mdash; Pulse-Info, Reputation, Land, ASN |
| `otx_domain` | Bedrohungsintelligenz fuer eine Domain nachschlagen &mdash; Pulse-Info, Whois, Reputation |
| `otx_hash` | Bedrohungsintelligenz fuer einen Datei-Hash (MD5, SHA1, SHA256) nachschlagen |
| `otx_cve` | Bedrohungsintelligenz fuer eine CVE nachschlagen &mdash; verwandte Pulses und Indikatoren |
| `otx_search_pulses` | OTX-Bedrohungs-Pulses nach Stichwort durchsuchen |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Erfordert ABUSEIPDB_API_KEY</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `abuseipdb_check` | IP-Adresse auf Missbrauchsmeldungen pruefen &mdash; Vertrauenswert, ISP, Land, Meldeanzahl |
| `abuseipdb_reports` | Einzelne Missbrauchsmeldungen fuer eine IP mit detaillierten Kommentaren und Kategorien abrufen |
| `abuseipdb_blacklist` | AbuseIPDBs Blacklist der am meisten gemeldeten boesartigen IP-Adressen abrufen |
| `abuseipdb_check_block` | Einen gesamten CIDR-Netzwerkblock auf Missbrauchsmeldungen pruefen |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Kein API-Schluessel</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `greynoise_ip` | IP auf GreyNoise nachschlagen &mdash; Klassifikation (gutartig/boesartig/unbekannt), Scanner-Status |
| `greynoise_check` | Schnellpruefung: Ist diese IP ein bekannter Scanner oder ein bekannter gutartiger Dienst? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Kein API-Schluessel (PULSEDIVE_API_KEY optional fuer hoehere Rate)</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `pulsedive_indicator` | Indikator (IP, Domain, URL oder Hash) nachschlagen &mdash; Risikostufe, Bedrohungen, Feeds |
| `pulsedive_search` | Pulsedive-Indikatoren nach Wert durchsuchen |
| `pulsedive_explore` | Verknuepfte Indikatoren mit erweiterten Abfragen erkunden (verwandte IOCs mit Risikostufen) |

</details>

<details>
<summary><b>Hudson Rock Stealer-Logs (3) &mdash; Erfordert HUDSONROCK_API_KEY</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `stealer_domain` | Stealer-Log-Eintraege nach Domain suchen &mdash; kompromittierte Rechner, Zugangsdaten, Malware-Details |
| `stealer_email` | Stealer-Logs nach E-Mail-Adresse suchen &mdash; kompromittierte Rechner mit dieser E-Mail in Browser-Zugangsdaten |
| `stealer_ip` | Stealer-Logs nach IP-Adresse suchen &mdash; kompromittierte Rechner von dieser IP |

</details>

<details>
<summary><b>Vulners-Exploits (3) &mdash; Kein API-Schluessel (VULNERS_API_KEY optional fuer Suche)</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `vulners_search` | Die Vulners-Schwachstellendatenbank mit Lucene-Abfragen durchsuchen |
| `vulners_id` | Eine bestimmte Schwachstelle oder einen Exploit nach ID nachschlagen (CVE, EDB, GHSA) &mdash; kostenlos |
| `vulners_exploit` | Speziell nach Exploits suchen (ExploitDB-Eintraege) |

</details>

<details>
<summary><b>Blockchain-Intelligenz (4) &mdash; Kein API-Schluessel</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `btc_address` | Bitcoin-Adresse nachschlagen &mdash; Guthaben, Transaktionsanzahl, letzte Transaktionen |
| `btc_balance` | Bitcoin-Adressguthaben in Satoshi abrufen (Schnellpruefung ohne vollstaendigen Verlauf) |
| `btc_tx` | Detaillierte Bitcoin-Transaktionsinformationen nach Hash abrufen &mdash; Eingaenge, Ausgaenge, Gebuehren, Block-Info |
| `btc_abuse_check` | Bitcoin-Adresse auf Missbrauchsmeldungen bei ChainAbuse pruefen &mdash; Betrugsmeldungen mit Kategorien |

</details>

<details>
<summary><b>Hybrid Analysis Malware (3) &mdash; Erfordert HYBRID_API_KEY</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `malware_search` | Hybrid-Analysis-Sandbox nach Datei-Hash durchsuchen &mdash; Urteil, AV-Erkennungsrate, Analysedetails |
| `malware_overview` | Vollstaendige Malware-Analyse-Uebersicht &mdash; MITRE-ATT&CK-Techniken, Netzwerkindikatoren, Prozesse |
| `malware_feed` | Den neuesten Malware-Detonations-Feed abrufen &mdash; kuerzlich analysierte Proben mit Urteilen |

</details>

<details>
<summary><b>CIRCL Onion-Lookup (1) &mdash; Kein API-Schluessel</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `onion_lookup` | Metadaten fuer eine .onion-Adresse ueber das CIRCL-AIL-Projekt nachschlagen &mdash; erstmals/zuletzt gesehen, Status, Tags, Zertifikate, Ports, BTC-Adressen |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Erfordert INTELX_API_KEY</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `intelx_search` | Suche auf IntelligenceX nach geleakten Daten, Dark-Web-Inhalten und mehr starten |
| `intelx_search_results` | Ergebnisse einer IntelligenceX-Suche nach ID abrufen |
| `intelx_phonebook` | Telefonbuchsuche &mdash; E-Mails, Domains, URLs zu einem Begriff finden |
| `intelx_phonebook_results` | Telefonbuch-Suchergebnisse nach ID abrufen |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Kein API-Schluessel (PHISHTANK_API_KEY optional fuer hoehere Rate)</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `phishing_check` | Pruefen, ob eine URL eine bekannte Phishing-Seite ueber PhishTank ist |

</details>

<details>
<summary><b>Meta (1) &mdash; Kein API-Schluessel</b></summary>

| Werkzeug | Beschreibung |
|----------|-------------|
| `darknet_list_sources` | Alle verfuegbaren Datenquellen mit Konfigurationsstatus, API-Schluessel-Status und Werkzeuganzahl auflisten |

</details>

---

### CLI-Verwendung

```bash
# Alle verfuegbaren Werkzeuge auflisten
npx darknet-mcp-server --list

# Tor-SOCKS5-Proxy-Konnektivitaet pruefen
npx darknet-mcp-server --check-tor

# Jedes Werkzeug direkt ausfuehren
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Werkzeuge, die API-Schluessel erfordern
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Datenquellen (16)

| Quelle | Auth | Ratenlimit | Bereitgestellte Daten |
|--------|------|-----------|----------------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 Anf./1,5s | Breach-Suche, Paste-Suche, Passwortpruefung, Breach-Listen |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 Anf./s | Dark-Web-Inhalte, geleakte Datensuche, Telefonbuch (E-Mails/Domains/URLs) |
| [AlienVault OTX](https://otx.alienvault.com) | Optional | 1 Anf./s | Bedrohungsintel fuer IPs, Domains, Hashes, CVEs; Bedrohungs-Pulse-Suche |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 Anf./s | IP-Missbrauchsmeldungen, Vertrauensbewertung, Blacklist, CIDR-Blockpruefung |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Optional | 2 Anf./s | IOC-Suche, Malware-Familienverfolgung, Tag-basierte Suche |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Optional | 2 Anf./s | Malware-Verteilungs-URL-Tracking, Host/URL-Lookup |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Optional | 2 Anf./s | Malware-Proben-Repository, Hash-Lookup, YARA-Signatursuche |
| [GreyNoise](https://www.greynoise.io) | Keiner | 1 Anf./s | IP-Klassifikation (gutartig/boesartig), Internet-Scanner-Erkennung |
| [Pulsedive](https://pulsedive.com) | Optional | 1 Anf./s | Indikator-Anreicherung, Risikobewertung, verknuepfte IOC-Erkundung |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 Anf./s | Stealer-Log-Suche nach Domain, E-Mail oder IP |
| [Vulners](https://vulners.com) | Optional | 1 Anf./s | Schwachstellen-/Exploit-Datenbank, CVE-Lookup, ExploitDB-Suche |
| [Blockchain.info](https://blockchain.info) | Keiner | 1 Anf./s | Bitcoin-Adress-Lookup, Guthaben, Transaktionsdetails |
| [ChainAbuse](https://www.chainabuse.com) | Keiner | 1 Anf./s | Bitcoin-Adress-Missbrauchs-/Betrugsmeldungen |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 Anf./s | Malware-Sandbox-Detonation, MITRE-ATT&CK-Mapping, Proben-Feed |
| [CIRCL AIL (Onion-Lookup)](https://onion.ail-project.org) | Keiner | 0,5 Anf./s | .onion-Adress-Metadaten, erstmals/zuletzt gesehen, zugehoerige BTC-Adressen |
| [Tor-Netzwerk](https://www.torproject.org) | Keiner | N/A | Exit-Node-Liste, .onion-Abruf/Scraping, Ahmia.fi-Suche |

---

## Architektur

```
src/
  index.ts                # CLI-Einstiegspunkt (--help, --list, --check-tor, stdio-Server)
  protocol/
    mcp-server.ts         # MCP-Server-Setup (stdio-Transport)
    tools.ts              # Werkzeug-Registry — alle 66 Werkzeuge hier zusammengestellt
  types/
    index.ts              # Gemeinsame Typen (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Pro-Provider-Ratenbegrenzer
    cache.ts              # TTL-Cache fuer API-Antworten
    tor-fetch.ts          # Tor-SOCKS5-Proxy-HTTP-Client
    require-key.ts        # API-Schluessel-Validierungshelfer
  tor/                    # Tor-Netzwerk-Werkzeuge (7)
  ransomware/             # Ransomware-Intelligenz-Werkzeuge (9)
  breach/                 # HIBP-Breach-Werkzeuge (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar-Werkzeuge (9)
  otx/                    # AlienVault-OTX-Werkzeuge (5)
  abuseipdb/              # AbuseIPDB-Werkzeuge (4)
  greynoise/              # GreyNoise-Community-Werkzeuge (2)
  pulsedive/              # Pulsedive-Werkzeuge (3)
  hudsonrock/             # Hudson-Rock-Stealer-Log-Werkzeuge (3)
  vulners/                # Vulners-Exploit-Werkzeuge (3)
  blockchain/             # Blockchain-Intelligenz-Werkzeuge (4)
  hybrid/                 # Hybrid-Analysis-Malware-Werkzeuge (3)
  onionlookup/            # CIRCL-Onion-Lookup-Werkzeug (1)
  intelx/                 # IntelligenceX-Werkzeuge (4)
  phishing/               # PhishTank-Werkzeug (1)
  meta/                   # Meta-Werkzeuge (1)
```

**Design-Entscheidungen:**

- **16 Provider, 1 Server** &mdash; Jede Datenquelle ist ein unabhaengiges Modul. Der Agent waehlt basierend auf der Abfrage, welche Werkzeuge verwendet werden.
- **Pro-Provider-Ratenbegrenzer** &mdash; Jede Datenquelle hat ihre eigene `RateLimiter`-Instanz, kalibriert auf die Limits dieser API. Kein gemeinsamer Engpass.
- **TTL-Caching** &mdash; Ransomware-Daten (15 Min.), Breach-Listen (10 Min.), abuse.ch-Ergebnisse (5 Min.) werden gecacht, um redundante API-Aufrufe in Multi-Tool-Workflows zu vermeiden.
- **Graceful Degradation** &mdash; Fehlende API-Schluessel bringen den Server nicht zum Absturz. Werkzeuge geben beschreibende Fehlermeldungen zurueck: "Setzen Sie HIBP_API_KEY, um die Breach-Kontosuche zu aktivieren."
- **DNS-Leak-Praevention** &mdash; Tor-.onion-Werkzeuge verwenden das `socks5h://`-Protokoll, um DNS ueber Tor aufzuloesen und DNS-Leaks zum lokalen Resolver zu verhindern.
- **4 Abhaengigkeiten** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` und `cheerio`. Alle Clearnet-HTTP-Anfragen ueber natives `fetch`. Aller Tor-Verkehr ueber SOCKS5.

---

## Einschraenkungen

- HIBP-Konto-/Paste-Suche erfordert einen kostenpflichtigen API-Schluessel ($3,50/Monat)
- IntelligenceX-, AbuseIPDB-, Hudson-Rock- und Hybrid-Analysis-Werkzeuge erfordern API-Schluessel
- Tor-.onion-Werkzeuge erfordern einen laufenden Tor-SOCKS5-Proxy (nicht enthalten)
- abuse.ch-Free-Tier hat niedrigere Ratenlimits ohne `ABUSECH_AUTH_KEY`
- Ransomware.live- und RansomLook-Daten haengen von der Upstream-Scraping-Frequenz ab
- Blockchain-Werkzeuge unterstuetzen nur Bitcoin (kein Ethereum/Monero)
- PhishTank-Datenbank kann hinter Echtzeit-Phishing-Kampagnen zurueckliegen
- macOS / Linux getestet (Windows nicht getestet)

---

## Teil der MCP-Sicherheits-Suite

| Projekt | Bereich | Werkzeuge |
|---------|---------|-----------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Browserbasierte Sicherheitstests | 39 Werkzeuge, Firefox, Injection-Tests |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Cloud-Sicherheit (AWS/Azure/GCP) | 38 Werkzeuge, 60+ Pruefungen |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub-Sicherheitslage | 39 Werkzeuge, 45 Pruefungen |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Schwachstellen-Intelligenz | 23 Werkzeuge, 5 Quellen |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT und Aufklaerung | 37 Werkzeuge, 12 Quellen |
| **darknet-mcp-server** | **Dark-Web- und Bedrohungsintelligenz** | **66 Werkzeuge, 16 Quellen** |

---

<p align="center">
<b>Nur fuer autorisierte Sicherheitstests und -bewertungen.</b><br>
Stellen Sie immer sicher, dass Sie die entsprechende Genehmigung haben, bevor Sie Informationsgewinnung zu einem Ziel durchfuehren.
</p>

<p align="center">
  <a href="LICENSE">MIT-Lizenz</a> &bull; Erstellt mit Bun + TypeScript
</p>
