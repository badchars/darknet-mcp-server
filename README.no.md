<p align="center">
  <a href="README.md">English</a> |
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
  <strong>Norsk</strong> |
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

<h3 align="center">Morkenettet og trusselintelligens for AI-agenter.</h3>

<p align="center">
  HIBP, ThreatFox, ransomware-sporing, Tor .onion-tilgang, blokkjede-etterretning, utnyttelsess&oslash;k, stealer-logger, skadevareanalyse &mdash; samlet i en enkelt MCP-server.<br>
  AI-agenten din f&aring;r <b>fullspektrum morkenettetterretning p&aring; foresp&oslash;rsel</b>, ikke 16 nettleserfaner og manuell korrelasjon.
</p>

<br>

<p align="center">
  <a href="#problemet">Problemet</a> &bull;
  <a href="#hvordan-det-er-annerledes">Hvordan det er annerledes</a> &bull;
  <a href="#hurtigstart">Hurtigstart</a> &bull;
  <a href="#hva-ai-en-kan-gj%C3%B8re">Hva AI-en kan gj&oslash;re</a> &bull;
  <a href="#verkt%C3%B8yreferanse-66-verkt%C3%B8y">Verkt&oslash;y (66)</a> &bull;
  <a href="#datakilder-16">Datakilder</a> &bull;
  <a href="#arkitektur">Arkitektur</a> &bull;
  <a href="CHANGELOG.md">Endringslogg</a> &bull;
  <a href="CONTRIBUTING.md">Bidra</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Lisens"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 verkt&oslash;y">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 kilder">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server demo" width="800">
</p>

---

## Problemet

Morkenettetterretning er det manglende laget i enhver sikkerhetsetterforskning. Innbruddsdatabaser, ransomware-sporere, Tor-skjulte tjenester, skadevare-sandkasser, stealer-logger, blokkjede-etterforskning, utnyttelsesdatabaser &mdash; dataene du trenger er spredt over dusinvis av plattformer, hver med sitt eget API, sin egen autentisering, sine egne rategrenser, sitt eget utdataformat. I dag sjekker du HIBP i en fane, ThreatFox i en annen, blar gjennom ransomware-lekkasjesider via Tor, henter opp MalwareBazaar for en hash, sjekker blokkjedetransaksjoner p&aring; en blokkutforsker, og bruker deretter en time p&aring; &aring; sette alt sammen manuelt.

```
Tradisjonell morkenettetterretning arbeidsflyt:
  sjekk innbruddseksponering        ->  HIBP nettgrensesnitt (betalt API)
  s&oslash;k etter lekkede legitimasjon    ->  IntelligenceX nettgrensesnitt
  spor ransomware-grupper           ->  ransomware.live + ransomlook.io (2 separate grensesnitt)
  tilgang til .onion skjulte tjenester ->  Tor-nettleser manuelt
  analyser skadevarepr&oslash;ver          ->  Hybrid Analysis + MalwareBazaar (2 grensesnitt til)
  sjekk IP-misbrukshistorikk        ->  AbuseIPDB + GreyNoise (2 grensesnitt til)
  spor kryptovaluta                 ->  blockchain.info + ChainAbuse
  s&oslash;k etter utnyttelser             ->  Vulners nettgrensesnitt
  sjekk phishing-URL-er             ->  PhishTank nettgrensesnitt
  korreler alt                      ->  kopier og lim inn i en rapport
  ────────────────────────────────
  Totalt: 60+ minutter per etterforskning, det meste brukt p&aring; kontekstbytte
```

**darknet-mcp-server** gir AI-agenten din 66 verkt&oslash;y p&aring; tvers av 16 datakilder via [Model Context Protocol](https://modelcontextprotocol.io). Agenten foresp&oslash;r alle kilder parallelt, korrelerer data p&aring; tvers av det &aring;pne nettet og morketnettet, identifiserer trusler, og presenterer et samlet etterretningsbilde &mdash; i en enkelt samtale.

```
Med darknet-mcp-server:
  Du: "Unders&oslash;k innbruddseksponeringen og trussellandskapet for target.com"

  Agent: -> HIBP: 3 kjente innbrudd (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOC-er knyttet til domenet (C2-tilbakekall, phishing)
         -> URLhaus: 1 ondsinnet URL hostet p&aring; underdomene
         -> Ransomware: Ingen offerlister funnet (bra)
         -> Stealer-logger: 47 kompromitterte ansattlegitimasjoner funnet
         -> OTX: 5 trusselpulser som refererer til domenet
         -> AbuseIPDB: Prim&aelig;r-IP har 12 misbruksrapporter (brute force)
         -> "target.com har v&aelig;rt i 3 datainnbrudd som eksponerte 2,1M poster.
            47 ansattlegitimasjoner funnet i stealer-logger — umiddelbar
            tilbakestilling av passord anbefales. 2 aktive ThreatFox IOC-er tyder p&aring;
            p&aring;g&aring;ende m&aring;lretting. Ingen ransomware-oppf&oslash;ringer, men misbruksrapportene
            p&aring; prim&aelig;r-IP-en b&oslash;r unders&oslash;kes."
```

---

## Hvordan det er annerledes

Eksisterende verkt&oslash;y gir deg r&aring;data fra en kilde om gangen. darknet-mcp-server gir AI-agenten din evnen til &aring; **resonnere p&aring; tvers av &aring;pent nett og morkenettetterretning samtidig**.

<table>
<thead>
<tr>
<th></th>
<th>Tradisjonell tiln&aelig;rming</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Grensesnitt</b></td>
<td>16 forskjellige nettgrensesnitt, CLI-er og API-er</td>
<td>MCP &mdash; AI-agent kaller verkt&oslash;y i samtale</td>
</tr>
<tr>
<td><b>Datakilder</b></td>
<td>En plattform om gangen</td>
<td>16 kilder foresp&oslash;rt parallelt</td>
</tr>
<tr>
<td><b>Innbruddsetterretning</b></td>
<td>HIBP nettgrensesnitt for innbrudd, IntelligenceX for lekkasjer</td>
<td>Agenten kombinerer HIBP-innbrudd + lim + IntelligenceX + stealer-logger</td>
</tr>
<tr>
<td><b>Morkenettilgang</b></td>
<td>Manuell Tor-nettleser, kopier-lim fra .onion-sider</td>
<td>Agenten henter, skraper og s&oslash;ker p&aring; .onion-sider via SOCKS5-proxy</td>
</tr>
<tr>
<td><b>Skadevareanalyse</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox separat</td>
<td>Agenten kryssrefererer: &quot;Denne hashen fra ThreatFox ble ogs&aring; detonert i Hybrid Analysis med nettverks-IOC-er&quot;</td>
</tr>
<tr>
<td><b>Blokkjede</b></td>
<td>Blokkutforsker + ChainAbuse separat</td>
<td>Agenten sporer BTC-transaksjoner og sjekker misbruksrapporter i ett steg</td>
</tr>
<tr>
<td><b>API-n&oslash;kler</b></td>
<td>Kreves for nesten alt</td>
<td>Mange verkt&oslash;y fungerer gratis; API-n&oslash;kler l&aring;ser opp premiumkilder</td>
</tr>
<tr>
<td><b>Oppsett</b></td>
<td>Installer hvert verkt&oslash;y, administrer hver konfigurasjon, kj&oslash;r Tor-nettleser</td>
<td><code>npx darknet-mcp-server</code> &mdash; en kommando, null konfigurasjon</td>
</tr>
</tbody>
</table>

---

## Hurtigstart

### Alternativ 1: npx (ingen installasjon)

```bash
npx darknet-mcp-server
```

Gratis verkt&oslash;y fungerer umiddelbart. Ingen API-n&oslash;kler kreves for ransomware-sporing, innbruddslister, GreyNoise, blokkjede, OTX og mer.

### Alternativ 2: Klon

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Milj&oslash;variabler (valgfritt)

```bash
# Innbrudd- og legitimasjonsetterretning
export HIBP_API_KEY=your-key           # Aktiverer innbruddskontosøk og limsøk
export INTELX_API_KEY=your-key         # Aktiverer 4 IntelligenceX-verktøy

# Trusselintelligens
export OTX_API_KEY=your-key            # Øker AlienVault OTX rategrenser
export ABUSEIPDB_API_KEY=your-key      # Aktiverer 4 AbuseIPDB-verktøy
export ABUSECH_AUTH_KEY=your-key       # Høyere rategrenser for abuse.ch-pakken
export PULSEDIVE_API_KEY=your-key      # Høyere rategrenser for Pulsedive

# Stealer-logger og legitimasjon
export HUDSONROCK_API_KEY=your-key     # Aktiverer 3 Hudson Rock stealer-loggverktøy

# Utnyttelses- og skadevareanalyse
export VULNERS_API_KEY=your-key        # Aktiverer Vulners søk og utnyttelsesverktøy
export HYBRID_API_KEY=your-key         # Aktiverer 3 Hybrid Analysis skadevareverkøy

# Phishing
export PHISHTANK_API_KEY=your-key      # Høyere rategrenser for PhishTank

# Tor SOCKS5-proxy (for .onion-tilgang)
export TOR_SOCKS_HOST=127.0.0.1       # Standard: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Standard: 9050
```

Alle API-n&oslash;kler er valgfrie. Uten dem f&aring;r du fortsatt ransomware-sporing, innbruddslister, GreyNoise, blokkjede-etterretning, OTX, Tor-utgangsnode-sjekker, onion-s&oslash;k, CIRCL onion-oppslag og mer.

### Koble til AI-agenten din

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

Legg til i `~/Library/Application Support/Claude/claude_desktop_config.json`:

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

Samme JSON-konfigurasjonsformat. Pek kommandoen til `npx darknet-mcp-server` eller din lokale installasjonssti.

</details>

### Tor-oppsett (valgfritt, for .onion-tilgang)

De 7 Tor-verkt&oslash;yene (`tor_fetch_onion`, `tor_scrape_onion`, osv.) krever en kj&oslash;rende Tor SOCKS5-proxy.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Verifiser tilkobling
npx darknet-mcp-server --check-tor
```

### Begynn &aring; sp&oslash;rre

```
Du: "Sjekk om example.com har vært i noen datainnbrudd og se etter stealer-logger"
```

Det er alt. Agenten h&aring;ndterer innbruddsoppslag, legitimasjonss&oslash;k, trusselkorrelasjon og mer automatisk.

---

## Hva AI-en kan gj&oslash;re

### Innbruddsetterforskning

```
Du: "Sjekk om example.com har vært i noen datainnbrudd"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com dukker opp i 5 kjente innbrudd:
          - ExampleDB 2023: 4,2M poster (e-poster, passord, IP-er)
          - Collection #1: credential stuffing-liste
          - Combolist 2024: 890K e-post:passord-par
          Stealer-logger: 23 kompromitterte maskiner med lagrede legitimasjoner
          for example.com funnet i Hudson Rock-databasen.
          IntelligenceX: 47 resultater på tvers av limsider og morkenettet."
```

### Ransomware-sporing

```
Du: "Hvilke ransomware-grupper retter seg mot helsesektoren?"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Ransomware-aktivitet i helsesektoren:
          142 ofre på tvers av 12 grupper de siste 12 månedene.
          Toppgrupper: LockBit3 (38 ofre), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Siste: MedCorp Inc. listet av LockBit3 (2 dager siden).
          3 nye helseofre den siste uken på tvers av
          ransomware.live og RansomLook-strømmene."
```

### Morkenettrekognosering

```
Du: "Søk etter omtaler av selskapet vårt på .onion-sider"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Morkenettsøkeresultater for AcmeCorp:
          Ahmia.fi: 3 .onion-sider nevner AcmeCorp
          - Foruminnlegg som diskuterer AcmeCorp ansattliste (lekkeforum)
          - Markedsplass-oppføring for AcmeCorp-database (uverifisert)
          - Blogginnlegg som refererer til AcmeCorp-innbrudd
          IntelligenceX: 12 resultater på limsider
          Anbefaling: undersøk foruminnlegget og markedsplass-oppføringen
          for potensielle aktive datasalg."
```

### Skadevareanalyse

```
Du: "Analyser denne filhashen for skadevareindikatorer: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Skadevareanalyse for abc123def456:
          Hybrid Analysis: ONDSINNET (trusselscore 95/100)
          - Familie: AgentTesla (informasjonstyver)
          - MITRE ATT&CK: T1555 (Legitimasjonstilgang), T1071 (C2)
          - Nettverks-IOC-er: 3 C2-domener, 2 IP-er
          MalwareBazaar: Først sett 2024-03-15, tagget 'AgentTesla'
          ThreatFox: 2 IOC-oppføringer knyttet til samme kampanje
          OTX: Referert i 4 trusselpulser"
```

---

## Verkt&oslash;yreferanse (66 verkt&oslash;y)

<details open>
<summary><b>Tor-nettverk (7) &mdash; Ingen API-n&oslash;kkel (Tor-daemon kreves for .onion-verkt&oslash;y)</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `tor_status` | Sjekk om den lokale Tor SOCKS5-proxy-daemonen kj&oslash;rer og er tilgjengelig |
| `tor_fetch_onion` | Hent r&aring; HTML fra en .onion-URL via Tor SOCKS5-proxy (DNS-lekkasjeforebygging via socks5h) |
| `tor_scrape_onion` | Hent og analyser et .onion-nettsted &mdash; returnerer strukturerte data: tittel, lenker, br&oslash;dtekst |
| `tor_search_onion` | S&oslash;k etter .onion-nettsteder ved hjelp av Ahmia.fi-s&oslash;kemotoren |
| `tor_exit_nodes` | Hent n&aring;v&aelig;rende Tor-utgangsnodeadresser fra den offisielle Tor Project-masseutgangslisten |
| `tor_exit_check` | Sjekk om en spesifikk IP-adresse er en kjent Tor-utgangsnode |
| `tor_exit_details` | F&aring; detaljert informasjon om Tor-utgangsnoder inkludert fingeravtrykk og publiseringstidsstempler |

</details>

<details>
<summary><b>Ransomware-etterretning (9) &mdash; Ingen API-n&oslash;kkel</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `ransomwareRecent` | Hent de nyeste ransomware-ofrene fra ransomware.live |
| `ransomwareGroups` | List alle kjente ransomware-grupper sporet av ransomware.live |
| `ransomwareGroup` | F&aring; en detaljert profil for en spesifikk ransomware-gruppe etter navn |
| `ransomwareGroupVictims` | Hent alle ofre hevdet av en spesifikk ransomware-gruppe |
| `ransomwareSearch` | S&oslash;k etter ransomware-ofre med n&oslash;kkelord (firmanavn, domene, osv.) |
| `ransomwareByCountry` | Hent ransomware-ofre filtrert etter ISO 3166-1 alpha-2 landkode |
| `ransomwareBySector` | Hent ransomware-ofre filtrert etter sektor/bransje (helse, finans, osv.) |
| `ransomlookGroups` | List alle 582+ ransomware-grupper sporet av RansomLook |
| `ransomlookRecent` | Hent de nyeste ransomware-innleggene og offerkravene fra RansomLook |

</details>

<details>
<summary><b>Innbruddsetterretning &mdash; HIBP (7) &mdash; Delvis: noen verkt&oslash;y gratis, kontos&oslash;k krever HIBP_API_KEY</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `breachList` | List alle kjente datainnbrudd fra HaveIBeenPwned, valgfritt filtrert etter domene &mdash; gratis |
| `breachGet` | F&aring; detaljer om et spesifikt datainnbrudd etter navn &mdash; gratis |
| `breachLatest` | Hent det sist lagt til datainnbruddet &mdash; gratis |
| `breachDataClasses` | List alle dataklasser (typer kompromitterte data) kjent for HIBP &mdash; gratis |
| `breachPassword` | Sjekk om et passord har dukket opp i kjente innbrudd (k-anonymity, bare 5-tegns SHA-1-prefiks sendes) &mdash; gratis |
| `breachSearch` | S&oslash;k i alle innbrudd etter en spesifikk konto (e-post/brukernavn) &mdash; krever `HIBP_API_KEY` |
| `breachPastes` | S&oslash;k etter en e-postadresse i offentlig publiserte lim &mdash; krever `HIBP_API_KEY` |

</details>

<details>
<summary><b>abuse.ch-pakken (9) &mdash; Ingen API-n&oslash;kkel (ABUSECH_AUTH_KEY valgfritt for h&oslash;yere rate)</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `threatfoxGetIocs` | Hent nylige IOC-er fra ThreatFox rapportert de siste N dagene |
| `threatfoxSearch` | S&oslash;k i ThreatFox IOC-er etter IP, domene, hash eller URL |
| `threatfoxTag` | S&oslash;k i ThreatFox IOC-er etter tag (f.eks. Cobalt Strike, Emotet) |
| `threatfoxMalware` | S&oslash;k i ThreatFox IOC-er etter skadevare-familie med Malpedia-navngiving |
| `urlhausLookup` | Sl&aring; opp en URL eller vert i URLhaus for skadevaredistrubusjon |
| `urlhausTag` | S&oslash;k URLhaus-oppf&oslash;ringer etter tag |
| `bazaarHash` | Sl&aring; opp en skadevareprogr&oslash;ve i MalwareBazaar etter MD5, SHA1 eller SHA256 hash |
| `bazaarRecent` | Hent de sist innsendte skadevarepr&oslash;vene fra MalwareBazaar |
| `bazaarTag` | S&oslash;k i MalwareBazaar etter tag eller YARA-signaturnavn |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Ingen API-n&oslash;kkel (OTX_API_KEY valgfritt for h&oslash;yere rate)</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `otx_ip` | Sl&aring; opp trusselintelligens for en IP-adresse &mdash; pulsinformasjon, omd&oslash;mme, land, ASN |
| `otx_domain` | Sl&aring; opp trusselintelligens for et domene &mdash; pulsinformasjon, whois, omd&oslash;mme |
| `otx_hash` | Sl&aring; opp trusselintelligens for en filhash (MD5, SHA1, SHA256) |
| `otx_cve` | Sl&aring; opp trusselintelligens for en CVE &mdash; relaterte pulser og indikatorer |
| `otx_search_pulses` | S&oslash;k i OTX-trusselpulser etter n&oslash;kkelord |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Krever ABUSEIPDB_API_KEY</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `abuseipdb_check` | Sjekk en IP-adresse for misbruksrapporter &mdash; tillitspoeng, ISP, land, rapportantall |
| `abuseipdb_reports` | Hent individuelle misbruksrapporter for en IP med detaljerte kommentarer og kategorier |
| `abuseipdb_blacklist` | Hent AbuseIPDBs svarteliste over de mest rapporterte ondsinnede IP-adressene |
| `abuseipdb_check_block` | Sjekk en hel CIDR-nettverksblokk for misbruksrapporter |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Ingen API-n&oslash;kkel</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `greynoise_ip` | Sl&aring; opp en IP p&aring; GreyNoise &mdash; klassifisering (godartet/ondsinnet/ukjent), skannerstatus |
| `greynoise_check` | Hurtigsjekk: er denne IP-en en kjent skanner eller kjent godartet tjeneste? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Ingen API-n&oslash;kkel (PULSEDIVE_API_KEY valgfritt for h&oslash;yere rate)</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `pulsedive_indicator` | Sl&aring; opp en indikator (IP, domene, URL eller hash) &mdash; risikoniv&aring;, trusler, str&oslash;mmer |
| `pulsedive_search` | S&oslash;k i Pulsedive-indikatorer etter verdi |
| `pulsedive_explore` | Utforsk tilknyttede indikatorer ved hjelp av avanserte sp&oslash;rringer (relaterte IOC-er med risikoniv&aring;er) |

</details>

<details>
<summary><b>Hudson Rock Stealer-logger (3) &mdash; Krever HUDSONROCK_API_KEY</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `stealer_domain` | S&oslash;k i stealer-loggoppf&oslash;ringer etter domene &mdash; kompromitterte maskiner, legitimasjoner, skadevardetaljer |
| `stealer_email` | S&oslash;k i stealer-logger etter e-postadresse &mdash; kompromitterte maskiner med den e-posten i nettleserlegitimasjoner |
| `stealer_ip` | S&oslash;k i stealer-logger etter IP-adresse &mdash; kompromitterte maskiner med opprinnelse fra den IP-en |

</details>

<details>
<summary><b>Vulners-utnyttelser (3) &mdash; Ingen API-n&oslash;kkel (VULNERS_API_KEY valgfritt for s&oslash;k)</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `vulners_search` | S&oslash;k i Vulners s&aring;rbarhetsdatabase med Lucene-sp&oslash;rringer |
| `vulners_id` | Sl&aring; opp en spesifikk s&aring;rbarhet eller utnyttelse etter ID (CVE, EDB, GHSA) &mdash; gratis |
| `vulners_exploit` | S&oslash;k spesifikt etter utnyttelser (ExploitDB-oppf&oslash;ringer) |

</details>

<details>
<summary><b>Blokkjede-etterretning (4) &mdash; Ingen API-n&oslash;kkel</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `btc_address` | Sl&aring; opp en Bitcoin-adresse &mdash; saldo, transaksjonstall, nylige transaksjoner |
| `btc_balance` | Hent Bitcoin-adressesaldo i satoshi (hurtigsjekk uten full historikk) |
| `btc_tx` | F&aring; detaljert Bitcoin-transaksjonsinformasjon etter hash &mdash; inndata, utdata, gebyrer, blokkinformasjon |
| `btc_abuse_check` | Sjekk en Bitcoin-adresse for misbruksrapporter p&aring; ChainAbuse &mdash; svindelrapporter med kategorier |

</details>

<details>
<summary><b>Hybrid Analysis Skadevare (3) &mdash; Krever HYBRID_API_KEY</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `malware_search` | S&oslash;k i Hybrid Analysis-sandkassen etter filhash &mdash; dom, AV-deteksjonsrate, analysedetaljer |
| `malware_overview` | Full skadevareanalyseoversikt &mdash; MITRE ATT&CK-teknikker, nettverksindikatorer, prosesser |
| `malware_feed` | Hent den nyeste skadevareutviklingsstr&oslash;mmen &mdash; nylig analyserte pr&oslash;ver med dommer |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; Ingen API-n&oslash;kkel</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `onion_lookup` | Sl&aring; opp metadata for en .onion-adresse via CIRCL AIL-prosjektet &mdash; f&oslash;rst/sist sett, status, tagger, sertifikater, porter, BTC-adresser |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Krever INTELX_API_KEY</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `intelx_search` | Start et s&oslash;k p&aring; IntelligenceX etter lekkede data, morkenettinnhold og mer |
| `intelx_search_results` | Hent resultater for et IntelligenceX-s&oslash;k etter ID |
| `intelx_phonebook` | Telefonboks&oslash;k &mdash; finn e-poster, domener, URL-er knyttet til et begrep |
| `intelx_phonebook_results` | Hent telefonboks&oslash;keresultater etter ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Ingen API-n&oslash;kkel (PHISHTANK_API_KEY valgfritt for h&oslash;yere rate)</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `phishing_check` | Sjekk om en URL er et kjent phishing-nettsted via PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Ingen API-n&oslash;kkel</b></summary>

| Verkt&oslash;y | Beskrivelse |
|------|-------------|
| `darknet_list_sources` | List alle tilgjengelige datakilder med konfigurasjonsstatus, API-n&oslash;kkelstatus og verkt&oslash;ytelling |

</details>

---

### CLI-bruk

```bash
# List alle tilgjengelige verktøy
npx darknet-mcp-server --list

# Sjekk Tor SOCKS5-proxy-tilkobling
npx darknet-mcp-server --check-tor

# Kjør et hvilket som helst verktøy direkte
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Verktøy som krever API-nøkler
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Datakilder (16)

| Kilde | Autentisering | Rategrense | Hva den gir |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 forespørsel/1,5s | Innbruddssøk, limsøk, passordsjekk, innbruddslister |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 forespørsel/s | Morkenettinnhold, lekkede datasøk, telefonbok (e-poster/domener/URL-er) |
| [AlienVault OTX](https://otx.alienvault.com) | Valgfritt | 1 forespørsel/s | Trusselintelligens for IP-er, domener, hasher, CVE-er; trusselpulssøk |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 forespørsel/s | IP-misbruksrapporter, tillitspoeng, svarteliste, CIDR-blokksjekk |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Valgfritt | 2 forespørsler/s | IOC-søk, skadevare-familiesporing, tag-basert søk |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Valgfritt | 2 forespørsler/s | Skadevaredistriusjons-URL-sporing, vert/URL-oppslag |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Valgfritt | 2 forespørsler/s | Skadevareprøve-arkiv, hash-oppslag, YARA-signatursøk |
| [GreyNoise](https://www.greynoise.io) | Ingen | 1 forespørsel/s | IP-klassifisering (godartet/ondsinnet), internettskanner-deteksjon |
| [Pulsedive](https://pulsedive.com) | Valgfritt | 1 forespørsel/s | Indikator-berikelse, risikovurdering, tilknyttet IOC-utforskning |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 forespørsel/s | Stealer-loggsøk etter domene, e-post eller IP |
| [Vulners](https://vulners.com) | Valgfritt | 1 forespørsel/s | Sårbarhet/utnyttelsesdatabase, CVE-oppslag, ExploitDB-søk |
| [Blockchain.info](https://blockchain.info) | Ingen | 1 forespørsel/s | Bitcoin-adresseoppslag, saldo, transaksjonsdetaljer |
| [ChainAbuse](https://www.chainabuse.com) | Ingen | 1 forespørsel/s | Bitcoin-adresse misbruk/svindelrapporter |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 forespørsel/s | Skadevare-sandkassedetonering, MITRE ATT&CK-kartlegging, prøvestrøm |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Ingen | 0,5 forespørsel/s | .onion-adressemetadata, først/sist sett, tilknyttede BTC-adresser |
| [Tor Network](https://www.torproject.org) | Ingen | N/A | Utgangsnnodeliste, .onion-henting/skraping, Ahmia.fi-søk |

---

## Arkitektur

```
src/
  index.ts                # CLI-inngangspunkt (--help, --list, --check-tor, stdio-server)
  protocol/
    mcp-server.ts         # MCP-serveroppsett (stdio-transport)
    tools.ts              # Verktøyregister — alle 66 verktøy samlet her
  types/
    index.ts              # Delte typer (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Ratebegrenser per leverandør
    cache.ts              # TTL-hurtigbuffer for API-svar
    tor-fetch.ts          # Tor SOCKS5 proxy HTTP-klient
    require-key.ts        # API-nøkkelvalideringshjelper
  tor/                    # Tor-nettverksverktøy (7)
  ransomware/             # Ransomware-etterretningsverktøy (9)
  breach/                 # HIBP-innbruddsverktøy (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar-verktøy (9)
  otx/                    # AlienVault OTX-verktøy (5)
  abuseipdb/              # AbuseIPDB-verktøy (4)
  greynoise/              # GreyNoise Community-verktøy (2)
  pulsedive/              # Pulsedive-verktøy (3)
  hudsonrock/             # Hudson Rock stealer-loggverktøy (3)
  vulners/                # Vulners utnyttelsesverktøy (3)
  blockchain/             # Blokkjede-etterretningsverktøy (4)
  hybrid/                 # Hybrid Analysis skadevareverkøy (3)
  onionlookup/            # CIRCL Onion Lookup-verktøy (1)
  intelx/                 # IntelligenceX-verktøy (4)
  phishing/               # PhishTank-verktøy (1)
  meta/                   # Meta-verktøy (1)
```

**Designbeslutninger:**

- **16 leverand&oslash;rer, 1 server** &mdash; Hver datakilde er en uavhengig modul. Agenten velger hvilke verkt&oslash;y som skal brukes basert p&aring; sp&oslash;rringen.
- **Ratebegrensere per leverand&oslash;r** &mdash; Hver datakilde har sin egen `RateLimiter`-instans kalibrert til det API-ets grenser. Ingen delt flaskehals.
- **TTL-hurtigbuffer** &mdash; Ransomware-data (15 min), innbruddslister (10 min), abuse.ch-resultater (5 min) caches for &aring; unng&aring; overfl&oslash;dige API-kall under flerverkt&oslash;y-arbeidsflyter.
- **Grasiøs degradering** &mdash; Manglende API-n&oslash;kler krasjer ikke serveren. Verkt&oslash;y returnerer beskrivende feilmeldinger: &quot;Sett HIBP_API_KEY for &aring; aktivere innbruddskontosøk.&quot;
- **DNS-lekkasjeforebygging** &mdash; Tor .onion-verkt&oslash;y bruker `socks5h://`-protokollen for &aring; l&oslash;se DNS gjennom Tor, som forhindrer DNS-lekkasjer til den lokale l&oslash;seren.
- **4 avhengigheter** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` og `cheerio`. All clearnet HTTP via native `fetch`. All Tor-trafikk via SOCKS5.

---

## Begrensninger

- HIBP konto/limsøk krever en betalt API-n&oslash;kkel ($3,50/m&aring;ned)
- IntelligenceX, AbuseIPDB, Hudson Rock og Hybrid Analysis krever API-n&oslash;kler for verkt&oslash;yene sine
- Tor .onion-verkt&oslash;y krever en kj&oslash;rende Tor SOCKS5-proxy (ikke inkludert)
- abuse.ch gratis nivå har lavere rategrenser uten `ABUSECH_AUTH_KEY`
- Ransomware.live og RansomLook-data avhenger av oppstr&oslash;ms skrapingsfrekvens
- Blokkjedeverkt&oslash;y st&oslash;tter kun Bitcoin (ingen Ethereum/Monero)
- PhishTank-databasen kan ligge etter sanntids phishing-kampanjer
- macOS / Linux testet (Windows ikke testet)

---

## Del av MCP-sikkerhetspakken

| Prosjekt | Domene | Verkt&oslash;y |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Nettleserbasert sikkerhetstesting | 39 verkt&oslash;y, Firefox, injeksjonstesting |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Skysikkerhet (AWS/Azure/GCP) | 38 verkt&oslash;y, 60+ sjekker |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub-sikkerhetsstilling | 39 verkt&oslash;y, 45 sjekker |
| [cve-mcp](https://github.com/badchars/cve-mcp) | S&aring;rbarhetsetterretning | 23 verkt&oslash;y, 5 kilder |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT og rekognosering | 37 verkt&oslash;y, 12 kilder |
| **darknet-mcp-server** | **Morkenett og trusselintelligens** | **66 verkt&oslash;y, 16 kilder** |

---

<p align="center">
<b>Kun for autorisert sikkerhetstesting og vurdering.</b><br>
S&oslash;rg alltid for at du har riktig autorisasjon f&oslash;r du utf&oslash;rer etterretningsinnsamling p&aring; noe m&aring;l.
</p>

<p align="center">
  <a href="LICENSE">MIT-lisens</a> &bull; Bygget med Bun + TypeScript
</p>
