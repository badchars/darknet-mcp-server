<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <strong>Dansk</strong> |
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

<h3 align="center">Dark web- og trusselsintelligens for AI-agenter.</h3>

<p align="center">
  HIBP, ThreatFox, ransomware-sporing, Tor .onion-adgang, blockchain-intelligens, exploit-soegning, stealer-logs, malware-analyse &mdash; samlet i en enkelt MCP-server.<br>
  Din AI-agent faar <b>fuld-spektrum dark web-intelligens paa foresporgsel</b>, ikke 16 browserfaner og manuel korrelation.
</p>

<br>

<p align="center">
  <a href="#problemet">Problemet</a> &bull;
  <a href="#hvad-goer-den-anderledes">Hvad Goer Den Anderledes</a> &bull;
  <a href="#hurtig-start">Hurtig Start</a> &bull;
  <a href="#hvad-ai-agenten-kan-goere">Hvad AI-Agenten Kan Goere</a> &bull;
  <a href="#vaerktoejsreference-66-vaerktojer">Vaerktojer (66)</a> &bull;
  <a href="#datakilder-16">Datakilder</a> &bull;
  <a href="#arkitektur">Arkitektur</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Bidrag</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licens"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Vaerktojer">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Kilder">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server demo" width="800">
</p>

---

## Problemet

Dark web-intelligens er det manglende lag i enhver sikkerhedsundersoegelse. Brudsdatabaser, ransomware-trackere, Tor-skjulte tjenester, malware-sandboxe, stealer-logs, blockchain-forensik, exploit-databaser &mdash; de data du har brug for er spredt paa tvaers af snesevis af platforme, hver med sin egen API, sin egen autentificering, sine egne hastighedsbegraensninger, sit eget outputformat. I dag tjekker du HIBP i en fane, ThreatFox i en anden, browser ransomware-laeksider gennem Tor, soeger en hash paa MalwareBazaar, tjekker blockchain-transaktioner paa en block explorer, og bruger derefter en time paa manuelt at samle det hele.

```
Traditionel dark web-intelligens arbejdsgang:
  tjek brudseksponering               ->  HIBP webinterface (betalt API)
  soeg laekede legitimationsoplysninger ->  IntelligenceX webinterface
  spor ransomware-grupper              ->  ransomware.live + ransomlook.io (2 separate brugerflader)
  tilgaa .onion skjulte tjenester      ->  Tor Browser manuelt
  analyser malware-proever             ->  Hybrid Analysis + MalwareBazaar (2 flere brugerflader)
  tjek IP-misbrugshistorik             ->  AbuseIPDB + GreyNoise (2 flere brugerflader)
  spor kryptovaluta                    ->  blockchain.info + ChainAbuse
  soeg efter exploits                  ->  Vulners webinterface
  tjek phishing-URL'er                 ->  PhishTank webinterface
  korreler alt                         ->  kopier-indsaet i en rapport
  ────────────────────────────────
  Total: 60+ minutter pr. undersoegelse, det meste brugt paa at skifte kontekst
```

**darknet-mcp-server** giver din AI-agent 66 vaerktojer paa tvaers af 16 datakilder via [Model Context Protocol](https://modelcontextprotocol.io). Agenten foresoger alle kilder parallelt, korrelerer data paa tvaers af surface web og dark web, identificerer trusler og praesenterer et samlet efterretningsbillede &mdash; i en enkelt samtale.

```
Med darknet-mcp-server:
  Dig: "Undersog brudseksponeringen og trussellandskabet for target.com"

  Agent: -> HIBP: 3 kendte brud (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOC'er associeret med domaenet (C2-callback, phishing)
         -> URLhaus: 1 ondsindet URL hostet paa subdomaene
         -> Ransomware: Ingen offerregistreringer fundet (godt)
         -> Stealer-logs: 47 kompromitterede medarbejderlegitimationsoplysninger fundet
         -> OTX: 5 trusselpulser der refererer til domaenet
         -> AbuseIPDB: Primaer IP har 12 misbrugsrapporter (brute force)
         -> "target.com har vaeret i 3 databrud der eksponerede 2,1M poster.
            47 medarbejderlegitimationsoplysninger fundet i stealer-logs —
            ojeblikkelig adgangskodenaelstilling anbefales. 2 aktive ThreatFox
            IOC'er tyder paa igangvaerende maalretning. Ingen ransomware-
            registreringer, men misbrugsrapporterne paa den primaere IP
            berettiger undersoegelse."
```

---

## Hvad Goer Den Anderledes

Eksisterende vaerktojer giver dig raadata en kilde ad gangen. darknet-mcp-server giver din AI-agent evnen til at **raesonnere paa tvaers af surface web- og dark web-intelligens samtidigt**.

<table>
<thead>
<tr>
<th></th>
<th>Traditionel Tilgang</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interface</b></td>
<td>16 forskellige webbrugerflader, CLI'er og API'er</td>
<td>MCP &mdash; AI-agenten kalder vaerktojer samtalemaessigt</td>
</tr>
<tr>
<td><b>Datakilder</b></td>
<td>En platform ad gangen</td>
<td>16 kilder foresogt parallelt</td>
</tr>
<tr>
<td><b>Brudsintelligens</b></td>
<td>HIBP webbrugerflade for brud, IntelligenceX for laek</td>
<td>Agenten kombinerer HIBP-brud + pastes + IntelligenceX + stealer-logs</td>
</tr>
<tr>
<td><b>Dark web-adgang</b></td>
<td>Manuel Tor Browser, kopier-indsaet fra .onion-sider</td>
<td>Agenten henter, scraper og soeger .onion-sider via SOCKS5-proxy</td>
</tr>
<tr>
<td><b>Malware-analyse</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox separat</td>
<td>Agenten krydsrefererer: "Denne hash fra ThreatFox blev ogsaa detoneret i Hybrid Analysis med netvaerks-IOC'er"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Block explorer + ChainAbuse separat</td>
<td>Agenten sporer BTC-transaktioner og tjekker misbrugsrapporter i et skridt</td>
</tr>
<tr>
<td><b>API-noegler</b></td>
<td>Kraevet for naesten alt</td>
<td>Mange vaerktojer virker gratis; API-noegler laaser premium-kilder op</td>
</tr>
<tr>
<td><b>Opsaetning</b></td>
<td>Installer hvert vaerktoej, administrer hver konfiguration, koer Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; en kommando, nul konfiguration</td>
</tr>
</tbody>
</table>

---

## Hurtig Start

### Mulighed 1: npx (ingen installation)

```bash
npx darknet-mcp-server
```

Gratis vaerktojer virker med det samme. Ingen API-noegler kraevet for ransomware-sporing, brudslister, GreyNoise, blockchain, OTX og mere.

### Mulighed 2: Klon

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Miljovariabler (valgfri)

```bash
# Bruds- og legitimationsoplysningsintelligens
export HIBP_API_KEY=your-key           # Aktiverer soegning i brudskonti og paste-soegning
export INTELX_API_KEY=your-key         # Aktiverer 4 IntelligenceX-vaerktojer

# Trusselsintelligens
export OTX_API_KEY=your-key            # Oeget hastighedsgraenser for AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Aktiverer 4 AbuseIPDB-vaerktojer
export ABUSECH_AUTH_KEY=your-key       # Hoejere hastighedsgraenser for abuse.ch-suiten
export PULSEDIVE_API_KEY=your-key      # Hoejere hastighedsgraenser for Pulsedive

# Stealer-logs og legitimationsoplysninger
export HUDSONROCK_API_KEY=your-key     # Aktiverer 3 Hudson Rock stealer-log-vaerktojer

# Exploit- og malware-analyse
export VULNERS_API_KEY=your-key        # Aktiverer Vulners soege- og exploit-vaerktojer
export HYBRID_API_KEY=your-key         # Aktiverer 3 Hybrid Analysis malware-vaerktojer

# Phishing
export PHISHTANK_API_KEY=your-key      # Hoejere hastighedsgraenser for PhishTank

# Tor SOCKS5-proxy (for .onion-adgang)
export TOR_SOCKS_HOST=127.0.0.1       # Standard: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Standard: 9050
```

Alle API-noegler er valgfrie. Uden dem faar du stadig ransomware-sporing, brudslister, GreyNoise, blockchain-intelligens, OTX, Tor exit-node-tjek, onion-soegning, CIRCL onion-opslag og mere.

### Forbind til din AI-agent

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Med npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Med lokal klon
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Tilfoej til `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / andre MCP-klienter</b></summary>

Samme JSON-konfigurationsformat. Peg kommandoen til `npx darknet-mcp-server` eller din lokale installationssti.

</details>

### Tor-opsaetning (valgfri, for .onion-adgang)

De 7 Tor-vaerktojer (`tor_fetch_onion`, `tor_scrape_onion` osv.) kraever en koerende Tor SOCKS5-proxy.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Verificer forbindelse
npx darknet-mcp-server --check-tor
```

### Begynd at foresoege

```
Dig: "Tjek om example.com har vaeret i nogen databrud og soeg efter stealer-logs"
```

Det er det hele. Agenten haandterer brudsopslag, legitimationsoplysningssoegninger, trusselkorrelation og mere automatisk.

---

## Hvad AI-Agenten Kan Goere

### Brudsundersoegelse

```
Dig: "Tjek om example.com har vaeret i nogen databrud"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com optraeder i 5 kendte brud:
          - ExampleDB 2023: 4,2M poster (e-mails, adgangskoder, IP'er)
          - Collection #1: credential stuffing-liste
          - Combolist 2024: 890K e-mail:adgangskode-par
          Stealer-logs: 23 kompromitterede maskiner med gemte legitimationsoplysninger
          for example.com fundet i Hudson Rock-databasen.
          IntelligenceX: 47 resultater paa tvaers af paste-sider og dark web."
```

### Ransomware-sporing

```
Dig: "Hvilke ransomware-grupper maalretter sundhedssektoren?"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Ransomware-aktivitet i sundhedssektoren:
          142 ofre paa tvaers af 12 grupper i de seneste 12 maaneder.
          Topgrupper: LockBit3 (38 ofre), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Seneste: MedCorp Inc. opfoert af LockBit3 (2 dage siden).
          3 nye sundhedssektorofre i den seneste uge paa tvaers
          af ransomware.live og RansomLook-feeds."
```

### Dark Web-rekognoscering

```
Dig: "Soeg efter omtaler af vores virksomhed paa .onion-sider"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Dark web-soegeresultater for AcmeCorp:
          Ahmia.fi: 3 .onion-sider naevner AcmeCorp
          - Forumindlaeg der diskuterer AcmeCorp-medarbejderliste (laekforum)
          - Markedspladsopslag for AcmeCorp-database (ubekraeftet)
          - Blogindlaeg der refererer til AcmeCorp-brud
          IntelligenceX: 12 resultater paa paste-sider
          Anbefaling: undersog forumindlaegget og markedspladsopslaget
          for potentielle aktive datasalg."
```

### Malware-analyse

```
Dig: "Analyser denne filhash for malware-indikatorer: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Malware-analyse for abc123def456:
          Hybrid Analysis: ONDSINDET (trusselsscore 95/100)
          - Familie: AgentTesla (info stealer)
          - MITRE ATT&CK: T1555 (Credential Access), T1071 (C2)
          - Netvaerks-IOC'er: 3 C2-domaener, 2 IP'er
          MalwareBazaar: Foerst set 15-03-2024, tagget 'AgentTesla'
          ThreatFox: 2 IOC-poster linket til samme kampagne
          OTX: Refereret i 4 trusselpulser"
```

---

## Vaerktoejsreference (66 vaerktojer)

<details open>
<summary><b>Tor-netvaerk (7) &mdash; Ingen API-noegle (Tor-daemon kraevet for .onion-vaerktojer)</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `tor_status` | Tjek om den lokale Tor SOCKS5-proxy-daemon koerer og er tilgaengelig |
| `tor_fetch_onion` | Hent raa HTML fra en .onion-URL via Tor SOCKS5-proxy (DNS-laekforebyggelse via socks5h) |
| `tor_scrape_onion` | Hent og parse et .onion-site &mdash; returnerer strukturerede data: titel, links, broodtekst |
| `tor_search_onion` | Soeg efter .onion-sider ved hjaelp af Ahmia.fi-soegemaskinen |
| `tor_exit_nodes` | Hent aktuelle Tor exit-node IP-adresser fra den officielle Tor Project bulk exit-liste |
| `tor_exit_check` | Tjek om en specifik IP-adresse er en kendt Tor exit-node |
| `tor_exit_details` | Hent detaljerede Tor exit-node-oplysninger inklusive fingeraftryk og publikationstidsstempler |

</details>

<details>
<summary><b>Ransomware-intelligens (9) &mdash; Ingen API-noegle</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `ransomwareRecent` | Hent de seneste ransomware-ofre fra ransomware.live |
| `ransomwareGroups` | List alle kendte ransomware-grupper sporet af ransomware.live |
| `ransomwareGroup` | Hent en detaljeret profil for en specifik ransomware-gruppe efter navn |
| `ransomwareGroupVictims` | Hent alle ofre haevedt af en specifik ransomware-gruppe |
| `ransomwareSearch` | Soeg ransomware-ofre efter noegleord (firmanavn, domaene osv.) |
| `ransomwareByCountry` | Hent ransomware-ofre filtreret efter ISO 3166-1 alpha-2 landekode |
| `ransomwareBySector` | Hent ransomware-ofre filtreret efter sektor/branche (sundhed, finans osv.) |
| `ransomlookGroups` | List alle 582+ ransomware-grupper sporet af RansomLook |
| `ransomlookRecent` | Hent de seneste ransomware-opslag og offerkrav fra RansomLook |

</details>

<details>
<summary><b>Brudsintelligens &mdash; HIBP (7) &mdash; Delvis: nogle vaerktojer gratis, kontosoegning kraever HIBP_API_KEY</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `breachList` | List alle kendte databrud fra HaveIBeenPwned, valgfrit filtrer efter domaene &mdash; gratis |
| `breachGet` | Hent detaljer om et specifikt databrud efter navn &mdash; gratis |
| `breachLatest` | Hent det senest tilfoejede databrud &mdash; gratis |
| `breachDataClasses` | List alle dataklasser (typer af kompromitterede data) kendt af HIBP &mdash; gratis |
| `breachPassword` | Tjek om en adgangskode har vaeret i kendte brud (k-anonymitet, kun 5-tegns SHA-1-praefiks sendt) &mdash; gratis |
| `breachSearch` | Soeg alle brud for en specifik konto (e-mail/brugernavn) &mdash; kraever `HIBP_API_KEY` |
| `breachPastes` | Soeg efter en e-mailadresse i offentligt postede pastes &mdash; kraever `HIBP_API_KEY` |

</details>

<details>
<summary><b>abuse.ch-suite (9) &mdash; Ingen API-noegle (ABUSECH_AUTH_KEY valgfri for hoejere hastighed)</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `threatfoxGetIocs` | Hent nylige IOC'er fra ThreatFox rapporteret i de seneste N dage |
| `threatfoxSearch` | Soeg ThreatFox IOC'er efter IP, domaene, hash eller URL |
| `threatfoxTag` | Soeg ThreatFox IOC'er efter tag (f.eks. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Soeg ThreatFox IOC'er efter malware-familie ved hjaelp af Malpedia-navngivning |
| `urlhausLookup` | Slaa en URL eller host op i URLhaus for malware-distribution |
| `urlhausTag` | Soeg URLhaus-poster efter tag |
| `bazaarHash` | Slaa en malware-proeve op i MalwareBazaar efter MD5-, SHA1- eller SHA256-hash |
| `bazaarRecent` | Hent de senest indsendte malware-proever fra MalwareBazaar |
| `bazaarTag` | Soeg MalwareBazaar efter tag eller YARA-signaturnavn |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Ingen API-noegle (OTX_API_KEY valgfri for hoejere hastighed)</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `otx_ip` | Slaa trusselsintelligens op for en IP-adresse &mdash; pulsinfo, omdoemme, land, ASN |
| `otx_domain` | Slaa trusselsintelligens op for et domaene &mdash; pulsinfo, whois, omdoemme |
| `otx_hash` | Slaa trusselsintelligens op for en filhash (MD5, SHA1, SHA256) |
| `otx_cve` | Slaa trusselsintelligens op for en CVE &mdash; relaterede pulser og indikatorer |
| `otx_search_pulses` | Soeg OTX-trusselpulser efter noegleord |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Kraever ABUSEIPDB_API_KEY</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `abuseipdb_check` | Tjek en IP-adresse for misbrugsrapporter &mdash; tillidsscore, ISP, land, rapportantal |
| `abuseipdb_reports` | Hent individuelle misbrugsrapporter for en IP med detaljerede kommentarer og kategorier |
| `abuseipdb_blacklist` | Hent AbuseIPDB's sortliste over de mest rapporterede ondsindede IP-adresser |
| `abuseipdb_check_block` | Tjek en hel CIDR-netvaerksblok for misbrugsrapporter |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Ingen API-noegle</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `greynoise_ip` | Slaa en IP op paa GreyNoise &mdash; klassifikation (godartet/ondsindet/ukendt), scannerstatus |
| `greynoise_check` | Hurtig tjek: er denne IP en kendt scanner eller en kendt godartet tjeneste? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Ingen API-noegle (PULSEDIVE_API_KEY valgfri for hoejere hastighed)</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `pulsedive_indicator` | Slaa en indikator op (IP, domaene, URL eller hash) &mdash; risikoniveau, trusler, feeds |
| `pulsedive_search` | Soeg Pulsedive-indikatorer efter vaerdi |
| `pulsedive_explore` | Udforsk linkede indikatorer ved hjaelp af avancerede forespoergsler (relaterede IOC'er med risikoniveauer) |

</details>

<details>
<summary><b>Hudson Rock Stealer-logs (3) &mdash; Kraever HUDSONROCK_API_KEY</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `stealer_domain` | Soeg stealer-log-poster efter domaene &mdash; kompromitterede maskiner, legitimationsoplysninger, malware-detaljer |
| `stealer_email` | Soeg stealer-logs efter e-mailadresse &mdash; kompromitterede maskiner med den e-mail i browserlegitimationsoplysninger |
| `stealer_ip` | Soeg stealer-logs efter IP-adresse &mdash; kompromitterede maskiner stammende fra den IP |

</details>

<details>
<summary><b>Vulners Exploits (3) &mdash; Ingen API-noegle (VULNERS_API_KEY valgfri for soegning)</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `vulners_search` | Soeg i Vulners saarbarhedsdatabasen ved hjaelp af Lucene-forespoergsler |
| `vulners_id` | Slaa en specifik saarbarhed eller exploit op efter ID (CVE, EDB, GHSA) &mdash; gratis |
| `vulners_exploit` | Soeg specifikt efter exploits (ExploitDB-poster) |

</details>

<details>
<summary><b>Blockchain-intelligens (4) &mdash; Ingen API-noegle</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `btc_address` | Slaa en Bitcoin-adresse op &mdash; saldo, transaktionsantal, nylige transaktioner |
| `btc_balance` | Hent Bitcoin-adressesaldo i satoshi (hurtig tjek uden fuld historik) |
| `btc_tx` | Hent detaljerede Bitcoin-transaktionsoplysninger efter hash &mdash; input, output, gebyrer, blokinfo |
| `btc_abuse_check` | Tjek en Bitcoin-adresse for misbrugsrapporter paa ChainAbuse &mdash; svindelrapporter med kategorier |

</details>

<details>
<summary><b>Hybrid Analysis Malware (3) &mdash; Kraever HYBRID_API_KEY</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `malware_search` | Soeg i Hybrid Analysis sandbox efter filhash &mdash; dom, AV-detektionsrate, analysedetaljer |
| `malware_overview` | Fuld malware-analyseoversigt &mdash; MITRE ATT&CK-teknikker, netvaerksindikatorer, processer |
| `malware_feed` | Hent det seneste malware-detonationsfeed &mdash; nyligt analyserede proever med domme |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; Ingen API-noegle</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `onion_lookup` | Slaa metadata op for en .onion-adresse via CIRCL AIL-projektet &mdash; foerst/sidst set, status, tags, certifikater, porte, BTC-adresser |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Kraever INTELX_API_KEY</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `intelx_search` | Start en soegning paa IntelligenceX efter laekede data, dark web-indhold og mere |
| `intelx_search_results` | Hent resultater for en IntelligenceX-soegning efter ID |
| `intelx_phonebook` | Telefonbogssoegning &mdash; find e-mails, domaener, URL'er associeret med et udtryk |
| `intelx_phonebook_results` | Hent telefonbogssoegeresultater efter ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Ingen API-noegle (PHISHTANK_API_KEY valgfri for hoejere hastighed)</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `phishing_check` | Tjek om en URL er et kendt phishing-site via PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Ingen API-noegle</b></summary>

| Vaerktoej | Beskrivelse |
|-----------|-------------|
| `darknet_list_sources` | List alle tilgaengelige datakilder med konfigurationsstatus, API-noeglestatus og vaerktoejsantal |

</details>

---

### CLI-brug

```bash
# List alle tilgaengelige vaerktojer
npx darknet-mcp-server --list

# Tjek Tor SOCKS5-proxy-forbindelse
npx darknet-mcp-server --check-tor

# Koer et vilkaarligt vaerktoej direkte
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Vaerktojer der kraever API-noegler
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Datakilder (16)

| Kilde | Autentificering | Hastighedsgraense | Hvad den giver |
|-------|-----------------|-------------------|----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | Brudssoegning, paste-soegning, adgangskodekontrol, brudslister |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Dark web-indhold, laekede datasoegning, telefonbog (e-mails/domaener/URL'er) |
| [AlienVault OTX](https://otx.alienvault.com) | Valgfri | 1 req/s | Trusselsintelligens for IP'er, domaener, hashes, CVE'er; trusselpulssoegning |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | IP-misbrugsrapporter, tillidsscore, sortliste, CIDR-bloktjek |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Valgfri | 2 req/s | IOC-soegning, malware-familiesporing, tagbaseret soegning |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Valgfri | 2 req/s | Sporing af malware-distributions-URL'er, host/URL-opslag |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Valgfri | 2 req/s | Malware-proevelager, hash-opslag, YARA-signatursoegning |
| [GreyNoise](https://www.greynoise.io) | Ingen | 1 req/s | IP-klassifikation (godartet/ondsindet), internetscanner-detektion |
| [Pulsedive](https://pulsedive.com) | Valgfri | 1 req/s | Indikatorberigelse, risikoscoring, udforskning af linkede IOC'er |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Stealer-log-soegning efter domaene, e-mail eller IP |
| [Vulners](https://vulners.com) | Valgfri | 1 req/s | Saarbarheds-/exploit-database, CVE-opslag, ExploitDB-soegning |
| [Blockchain.info](https://blockchain.info) | Ingen | 1 req/s | Bitcoin-adresseopslag, saldo, transaktionsdetaljer |
| [ChainAbuse](https://www.chainabuse.com) | Ingen | 1 req/s | Bitcoin-adresse misbrug/svindelrapporter |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Malware-sandbox-detonation, MITRE ATT&CK-kortlaegning, proevefeed |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Ingen | 0.5 req/s | .onion-adressemetadata, foerst/sidst set, associerede BTC-adresser |
| [Tor Network](https://www.torproject.org) | Ingen | N/A | Exit-node-liste, .onion-hentning/scraping, Ahmia.fi-soegning |

---

## Arkitektur

```
src/
  index.ts                # CLI-indgangspunkt (--help, --list, --check-tor, stdio-server)
  protocol/
    mcp-server.ts         # MCP-serveropsaetning (stdio-transport)
    tools.ts              # Vaerktoejsregister — alle 66 vaerktojer samlet her
  types/
    index.ts              # Delte typer (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Hastighedsbegraenser pr. udbyder
    cache.ts              # TTL-cache for API-svar
    tor-fetch.ts          # Tor SOCKS5-proxy HTTP-klient
    require-key.ts        # API-noeglevalideringshjaepler
  tor/                    # Tor-netvaerksvaerktojer (7)
  ransomware/             # Ransomware-intelligensvaerktojer (9)
  breach/                 # HIBP-brudsvaerktojer (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar-vaerktojer (9)
  otx/                    # AlienVault OTX-vaerktojer (5)
  abuseipdb/              # AbuseIPDB-vaerktojer (4)
  greynoise/              # GreyNoise Community-vaerktojer (2)
  pulsedive/              # Pulsedive-vaerktojer (3)
  hudsonrock/             # Hudson Rock stealer-log-vaerktojer (3)
  vulners/                # Vulners exploit-vaerktojer (3)
  blockchain/             # Blockchain-intelligensvaerktojer (4)
  hybrid/                 # Hybrid Analysis malware-vaerktojer (3)
  onionlookup/            # CIRCL Onion Lookup-vaerktoej (1)
  intelx/                 # IntelligenceX-vaerktojer (4)
  phishing/               # PhishTank-vaerktoej (1)
  meta/                   # Meta-vaerktojer (1)
```

**Designbeslutninger:**

- **16 udbydere, 1 server** &mdash; Hver datakilde er et uafhaengigt modul. Agenten vaelger hvilke vaerktojer der skal bruges baseret paa forespoergslen.
- **Hastighedsbegraensere pr. udbyder** &mdash; Hver datakilde har sin egen `RateLimiter`-instans kalibreret til den API's graenser. Ingen delt flaskehals.
- **TTL-caching** &mdash; Ransomware-data (15 min), brudslister (10 min), abuse.ch-resultater (5 min) caches for at undgaa overflodige API-kald under multi-vaerktoejs-arbejdsgange.
- **Graceful degradering** &mdash; Manglende API-noegler crasher ikke serveren. Vaerktojer returnerer beskrivende fejlmeddelelser: "Indstil HIBP_API_KEY for at aktivere soegning i brudskonti."
- **DNS-laekforebyggelse** &mdash; Tor .onion-vaerktojer bruger `socks5h://`-protokollen til at oplose DNS gennem Tor, hvilket forebygger DNS-laek til den lokale resolver.
- **4 afhaengigheder** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` og `cheerio`. Al clearnet HTTP via native `fetch`. Al Tor-trafik via SOCKS5.

---

## Begraensninger

- HIBP konto-/paste-soegning kraever en betalt API-noegle ($3,50/maaned)
- IntelligenceX, AbuseIPDB, Hudson Rock og Hybrid Analysis kraever API-noegler til deres vaerktojer
- Tor .onion-vaerktojer kraever en koerende Tor SOCKS5-proxy (ikke inkluderet)
- abuse.ch gratis niveau har lavere hastighedsgraenser uden `ABUSECH_AUTH_KEY`
- Ransomware.live og RansomLook data afhaenger af upstream-scraping-frekvens
- Blockchain-vaerktojer understoetter kun Bitcoin (ingen Ethereum/Monero)
- PhishTank-databasen kan halte bagefter realtids phishing-kampagner
- macOS / Linux testet (Windows ikke testet)

---

## Del af MCP-sikkerhedssuiten

| Projekt | Domaene | Vaerktojer |
|---------|---------|------------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Browserbaseret sikkerhedstest | 39 vaerktojer, Firefox, injection-test |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Cloud-sikkerhed (AWS/Azure/GCP) | 38 vaerktojer, 60+ tjek |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub-sikkerhedsposition | 39 vaerktojer, 45 tjek |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Saarbarhedsintelligens | 23 vaerktojer, 5 kilder |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT og rekognoscering | 37 vaerktojer, 12 kilder |
| **darknet-mcp-server** | **Dark web og trusselsintelligens** | **66 vaerktojer, 16 kilder** |

---

<p align="center">
<b>Kun til autoriseret sikkerhedstest og vurdering.</b><br>
Soerg altid for at have korrekt autorisation foer du udforer efterretningsindsamling paa et maal.
</p>

<p align="center">
  <a href="LICENSE">MIT-licens</a> &bull; Bygget med Bun + TypeScript
</p>
