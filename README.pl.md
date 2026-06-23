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
  <strong>Polski</strong> |
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

<h3 align="center">Wywiad dark webu i zagrozen dla agentow AI.</h3>

<p align="center">
  HIBP, ThreatFox, sledzenie ransomware, dostep do Tor .onion, wywiad blockchain, wyszukiwanie exploitow, logi stealerow, analiza malware &mdash; zjednoczone w jednym serwerze MCP.<br>
  Twoj agent AI otrzymuje <b>pelne spektrum wywiadu dark webu na zadanie</b>, a nie 16 kart przegladarki i reczna korelacje.
</p>

<br>

<p align="center">
  <a href="#problem">Problem</a> &bull;
  <a href="#czym-sie-rozni">Czym Sie Rozni</a> &bull;
  <a href="#szybki-start">Szybki Start</a> &bull;
  <a href="#co-moze-ai">Co Moze AI</a> &bull;
  <a href="#referencja-narzedzi-66-narzedzi">Narzedzia (66)</a> &bull;
  <a href="#zrodla-danych-16">Zrodla Danych</a> &bull;
  <a href="#architektura">Architektura</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Wspolpraca</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licencja"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Narzedzi">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Zrodel">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server demo" width="800">
</p>

---

## Problem

Wywiad dark webu to brakujaca warstwa w kazdym dochodzeniu bezpieczenstwa. Bazy danych naruszen, trackery ransomware, ukryte uslugi Tor, piaskownice malware, logi stealerow, kryminalistyka blockchain, bazy danych exploitow &mdash; potrzebne dane sa rozproszone na dziesiatki platform, kazda z wlasnym API, wlasnym uwierzytelnianiem, wlasnymi limitami zapytan, wlasnym formatem wyjsciowym. Dzis sprawdzasz HIBP w jednej karcie, ThreatFox w drugiej, przegladasz strony wyciekow ransomware przez Tor, szukasz hasha w MalwareBazaar, sprawdzasz transakcje blockchain w eksploratorze blokow, a potem spedzasz godzine reczne laczac to wszystko.

```
Tradycyjny obieg pracy wywiadu dark webu:
  sprawdz ekspozycje na naruszenia     ->  interfejs webowy HIBP (platne API)
  szukaj wycieknietych danych          ->  interfejs webowy IntelligenceX
  sledz grupy ransomware               ->  ransomware.live + ransomlook.io (2 osobne interfejsy)
  dostep do ukrytych uslug .onion      ->  Tor Browser recznie
  analizuj probki malware              ->  Hybrid Analysis + MalwareBazaar (2 kolejne interfejsy)
  sprawdz historie naduzyc IP          ->  AbuseIPDB + GreyNoise (2 kolejne interfejsy)
  sledz kryptowaluty                   ->  blockchain.info + ChainAbuse
  szukaj exploitow                     ->  interfejs webowy Vulners
  sprawdz adresy URL phishingu         ->  interfejs webowy PhishTank
  skoreluj wszystko                    ->  kopiuj-wklej do raportu
  ────────────────────────────────
  Razem: 60+ minut na dochodzenie, wiekszosc spedzona na przelaczaniu kontekstu
```

**darknet-mcp-server** daje twojemu agentowi AI 66 narzedzi z 16 zrodel danych poprzez [Model Context Protocol](https://modelcontextprotocol.io). Agent odpytuje wszystkie zrodla rownolegle, koreluje dane z surface webu i dark webu, identyfikuje zagrozenia i przedstawia jednolity obraz wywiadowczy &mdash; w pojedynczej rozmowie.

```
Z darknet-mcp-server:
  Ty: "Zbadaj ekspozycje na naruszenia i krajobraz zagrozen dla target.com"

  Agent: -> HIBP: 3 znane naruszenia (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOC powiazane z domena (callback C2, phishing)
         -> URLhaus: 1 zlosliwy URL hostowany na subdomenie
         -> Ransomware: Nie znaleziono ofiar (dobrze)
         -> Logi stealerow: znaleziono 47 skompromitowanych danych uwierzytelniajacych pracownikow
         -> OTX: 5 pulsow zagrozen odnoszacych sie do domeny
         -> AbuseIPDB: Glowny IP ma 12 zgloszen naduzyc (brute force)
         -> "target.com byl w 3 naruszeniach danych ujawniajacych 2,1M rekordow.
            47 danych uwierzytelniajacych pracownikow znalezionych w logach stealerow
            — zalecany natychmiastowy reset hasel. 2 aktywne IOC ThreatFox
            sugeruja trwajace atakowanie. Brak listy ransomware, ale
            zgloszenia naduzyc na glownym IP wymagaja zbadania."
```

---

## Czym Sie Rozni

Istniejace narzedzia daja surowe dane z jednego zrodla na raz. darknet-mcp-server daje twojemu agentowi AI zdolnosc **rozumowania jednoczesnie na podstawie wywiadu surface webu i dark webu**.

<table>
<thead>
<tr>
<th></th>
<th>Tradycyjne Podejscie</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interfejs</b></td>
<td>16 roznych interfejsow webowych, CLI i API</td>
<td>MCP &mdash; Agent AI wywoluje narzedzia konwersacyjnie</td>
</tr>
<tr>
<td><b>Zrodla danych</b></td>
<td>Jedna platforma na raz</td>
<td>16 zrodel odpytywanych rownolegle</td>
</tr>
<tr>
<td><b>Wywiad naruszen</b></td>
<td>Interfejs webowy HIBP dla naruszen, IntelligenceX dla wyciekow</td>
<td>Agent laczy naruszenia HIBP + pastes + IntelligenceX + logi stealerow</td>
</tr>
<tr>
<td><b>Dostep do dark webu</b></td>
<td>Reczny Tor Browser, kopiuj-wklej ze stron .onion</td>
<td>Agent pobiera, scrapuje i przeszukuje strony .onion przez proxy SOCKS5</td>
</tr>
<tr>
<td><b>Analiza malware</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox osobno</td>
<td>Agent krosreferencjonuje: "Ten hash z ThreatFox zostal takze zdetonowany w Hybrid Analysis z sieciowymi IOC"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Eksplorator blokow + ChainAbuse osobno</td>
<td>Agent sledzi transakcje BTC i sprawdza zgloszenia naduzyc w jednym kroku</td>
</tr>
<tr>
<td><b>Klucze API</b></td>
<td>Wymagane dla prawie wszystkiego</td>
<td>Wiele narzedzi dziala za darmo; klucze API odblokowuja zrodla premium</td>
</tr>
<tr>
<td><b>Konfiguracja</b></td>
<td>Zainstaluj kazde narzedzie, zarzadzaj kazda konfiguracja, uruchom Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; jedna komenda, zero konfiguracji</td>
</tr>
</tbody>
</table>

---

## Szybki Start

### Opcja 1: npx (bez instalacji)

```bash
npx darknet-mcp-server
```

Darmowe narzedzia dzialaja natychmiast. Klucze API nie sa wymagane do sledzenia ransomware, list naruszen, GreyNoise, blockchain, OTX i wiecej.

### Opcja 2: Klonowanie

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Zmienne srodowiskowe (opcjonalne)

```bash
# Wywiad naruszen i danych uwierzytelniajacych
export HIBP_API_KEY=your-key           # Wlacza wyszukiwanie kont naruszen i wyszukiwanie paste
export INTELX_API_KEY=your-key         # Wlacza 4 narzedzia IntelligenceX

# Wywiad zagrozen
export OTX_API_KEY=your-key            # Zwieksza limity zapytan AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Wlacza 4 narzedzia AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Wyzsze limity zapytan dla pakietu abuse.ch
export PULSEDIVE_API_KEY=your-key      # Wyzsze limity zapytan dla Pulsedive

# Logi stealerow i dane uwierzytelniajace
export HUDSONROCK_API_KEY=your-key     # Wlacza 3 narzedzia logow stealerow Hudson Rock

# Exploity i analiza malware
export VULNERS_API_KEY=your-key        # Wlacza narzedzia wyszukiwania i exploitow Vulners
export HYBRID_API_KEY=your-key         # Wlacza 3 narzedzia malware Hybrid Analysis

# Phishing
export PHISHTANK_API_KEY=your-key      # Wyzsze limity zapytan dla PhishTank

# Proxy Tor SOCKS5 (dla dostepu .onion)
export TOR_SOCKS_HOST=127.0.0.1       # Domyslnie: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Domyslnie: 9050
```

Wszystkie klucze API sa opcjonalne. Bez nich nadal masz sledzenie ransomware, listy naruszen, GreyNoise, wywiad blockchain, OTX, sprawdzanie wezlow wyjsciowych Tor, wyszukiwanie onion, wyszukiwanie CIRCL onion i wiecej.

### Polacz ze swoim agentem AI

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Z npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Z lokalnym klonem
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Dodaj do `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / inni klienci MCP</b></summary>

Ten sam format konfiguracji JSON. Ustaw komende na `npx darknet-mcp-server` lub sciezke lokalnej instalacji.

</details>

### Konfiguracja Tor (opcjonalna, dla dostepu .onion)

7 narzedzi Tor (`tor_fetch_onion`, `tor_scrape_onion` itd.) wymaga dzialajacego proxy Tor SOCKS5.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Zweryfikuj polaczenie
npx darknet-mcp-server --check-tor
```

### Zacznij odpytywac

```
Ty: "Sprawdz czy example.com byl w jakichkolwiek naruszeniach danych i poszukaj logow stealerow"
```

To wszystko. Agent automatycznie obsluguje wyszukiwanie naruszen, wyszukiwanie danych uwierzytelniajacych, korelacje zagrozen i wiecej.

---

## Co Moze AI

### Dochodzenie w sprawie Naruszen

```
Ty: "Sprawdz czy example.com byl w jakichkolwiek naruszeniach danych"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com pojawia sie w 5 znanych naruszeniach:
          - ExampleDB 2023: 4,2M rekordow (e-maile, hasla, IP)
          - Collection #1: lista credential stuffing
          - Combolist 2024: 890K par e-mail:haslo
          Logi stealerow: 23 skompromitowane maszyny z zapisanymi danymi
          uwierzytelniajacymi dla example.com znalezione w bazie Hudson Rock.
          IntelligenceX: 47 wynikow na stronach paste i dark webie."
```

### Sledzenie Ransomware

```
Ty: "Ktore grupy ransomware atakuja sektor ochrony zdrowia?"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Aktywnosc ransomware w sektorze ochrony zdrowia:
          142 ofiary w 12 grupach w ostatnich 12 miesiacach.
          Czolowe grupy: LockBit3 (38 ofiar), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Najnowsze: MedCorp Inc. wymieniona przez LockBit3 (2 dni temu).
          3 nowe ofiary z sektora ochrony zdrowia w ostatnim tygodniu
          w feedach ransomware.live i RansomLook."
```

### Rozpoznanie Dark Webu

```
Ty: "Wyszukaj wzmianki o naszej firmie na stronach .onion"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Wyniki wyszukiwania dark webu dla AcmeCorp:
          Ahmia.fi: 3 strony .onion wspomnaja AcmeCorp
          - Post na forum dyskutujacy o liscie pracownikow AcmeCorp (forum wyciekow)
          - Oferta na rynku dla bazy danych AcmeCorp (niezweryfikowana)
          - Post na blogu odnoszacy sie do naruszenia AcmeCorp
          IntelligenceX: 12 wynikow na stronach paste
          Zalecenie: zbadaj post na forum i oferte na rynku
          pod katem potencjalnej aktywnej sprzedazy danych."
```

### Analiza Malware

```
Ty: "Przeanalizuj ten hash pliku pod katem wskaznikow malware: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Analiza malware dla abc123def456:
          Hybrid Analysis: ZLOSLIWY (wynik zagrożenia 95/100)
          - Rodzina: AgentTesla (stealer informacji)
          - MITRE ATT&CK: T1555 (Dostep do danych uwierzytelniajacych), T1071 (C2)
          - Sieciowe IOC: 3 domeny C2, 2 IP
          MalwareBazaar: Pierwszy raz widziany 15-03-2024, otagowany 'AgentTesla'
          ThreatFox: 2 wpisy IOC polaczone z ta sama kampania
          OTX: Wymieniony w 4 pulsach zagrozen"
```

---

## Referencja Narzedzi (66 narzedzi)

<details open>
<summary><b>Siec Tor (7) &mdash; Brak klucza API (demon Tor wymagany dla narzedzi .onion)</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `tor_status` | Sprawdz czy lokalny demon proxy Tor SOCKS5 dziala i jest dostepny |
| `tor_fetch_onion` | Pobierz surowy HTML z URL .onion przez proxy Tor SOCKS5 (zapobieganie wyciekom DNS przez socks5h) |
| `tor_scrape_onion` | Pobierz i przeanalizuj strone .onion &mdash; zwraca dane strukturalne: tytul, linki, tekst |
| `tor_search_onion` | Wyszukuj strony .onion uzywajac wyszukiwarki Ahmia.fi |
| `tor_exit_nodes` | Pobierz aktualne adresy IP wezlow wyjsciowych Tor z oficjalnej listy Tor Project |
| `tor_exit_check` | Sprawdz czy okreslony adres IP jest znanym wezlem wyjsciowym Tor |
| `tor_exit_details` | Pobierz szczegolowe informacje o wezle wyjsciowym Tor, w tym odciski palcow i znaczniki czasu publikacji |

</details>

<details>
<summary><b>Wywiad Ransomware (9) &mdash; Brak klucza API</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `ransomwareRecent` | Pobierz najnowsze ofiary ransomware z ransomware.live |
| `ransomwareGroups` | Wymien wszystkie znane grupy ransomware sledzone przez ransomware.live |
| `ransomwareGroup` | Pobierz szczegolowy profil konkretnej grupy ransomware po nazwie |
| `ransomwareGroupVictims` | Pobierz wszystkie ofiary deklarowane przez konkretna grupe ransomware |
| `ransomwareSearch` | Wyszukaj ofiary ransomware po slowie kluczowym (nazwa firmy, domena itp.) |
| `ransomwareByCountry` | Pobierz ofiary ransomware filtrowane po kodzie kraju ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Pobierz ofiary ransomware filtrowane po sektorze/branzy (ochrona zdrowia, finanse itp.) |
| `ransomlookGroups` | Wymien wszystkie 582+ grup ransomware sledzonych przez RansomLook |
| `ransomlookRecent` | Pobierz najnowsze posty ransomware i deklaracje ofiar z RansomLook |

</details>

<details>
<summary><b>Wywiad Naruszen &mdash; HIBP (7) &mdash; Czesciowo: niektore narzedzia bezplatne, wyszukiwanie kont wymaga HIBP_API_KEY</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `breachList` | Wymien wszystkie znane naruszenia danych z HaveIBeenPwned, opcjonalnie filtruj po domenie &mdash; bezplatne |
| `breachGet` | Pobierz szczegoly konkretnego naruszenia danych po nazwie &mdash; bezplatne |
| `breachLatest` | Pobierz najnowsze dodane naruszenie danych &mdash; bezplatne |
| `breachDataClasses` | Wymien wszystkie klasy danych (typy skompromitowanych danych) znane HIBP &mdash; bezplatne |
| `breachPassword` | Sprawdz czy haslo pojawilo sie w znanych naruszeniach (k-anonimowsc, wysylany tylko 5-znakowy prefiks SHA-1) &mdash; bezplatne |
| `breachSearch` | Wyszukaj wszystkie naruszenia dla konkretnego konta (e-mail/nazwa uzytkownika) &mdash; wymaga `HIBP_API_KEY` |
| `breachPastes` | Wyszukaj adres e-mail w publicznie opublikowanych paste &mdash; wymaga `HIBP_API_KEY` |

</details>

<details>
<summary><b>Pakiet abuse.ch (9) &mdash; Brak klucza API (ABUSECH_AUTH_KEY opcjonalny dla wyzszych limitow)</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `threatfoxGetIocs` | Pobierz najnowsze IOC z ThreatFox zgloszonych w ostatnich N dniach |
| `threatfoxSearch` | Wyszukaj IOC ThreatFox po IP, domenie, hashu lub URL |
| `threatfoxTag` | Wyszukaj IOC ThreatFox po tagu (np. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Wyszukaj IOC ThreatFox po rodzinie malware uzywajac nazewnictwa Malpedia |
| `urlhausLookup` | Wyszukaj URL lub host w URLhaus pod katem dystrybucji malware |
| `urlhausTag` | Wyszukaj wpisy URLhaus po tagu |
| `bazaarHash` | Wyszukaj probke malware w MalwareBazaar po hashu MD5, SHA1 lub SHA256 |
| `bazaarRecent` | Pobierz najnowsze przeslane probki malware z MalwareBazaar |
| `bazaarTag` | Wyszukaj MalwareBazaar po tagu lub nazwie sygnatury YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Brak klucza API (OTX_API_KEY opcjonalny dla wyzszych limitow)</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `otx_ip` | Wyszukaj wywiad zagrozen dla adresu IP &mdash; info pulsow, reputacja, kraj, ASN |
| `otx_domain` | Wyszukaj wywiad zagrozen dla domeny &mdash; info pulsow, whois, reputacja |
| `otx_hash` | Wyszukaj wywiad zagrozen dla hasha pliku (MD5, SHA1, SHA256) |
| `otx_cve` | Wyszukaj wywiad zagrozen dla CVE &mdash; powiazane pulsy i wskazniki |
| `otx_search_pulses` | Wyszukaj pulsy zagrozen OTX po slowie kluczowym |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Wymaga ABUSEIPDB_API_KEY</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `abuseipdb_check` | Sprawdz adres IP pod katem zgloszen naduzyc &mdash; wskaznik zaufania, ISP, kraj, liczba zgloszen |
| `abuseipdb_reports` | Pobierz indywidualne zgloszenia naduzyc dla IP ze szczegolowymi komentarzami i kategoriami |
| `abuseipdb_blacklist` | Pobierz czarna liste AbuseIPDB najczesciej zglaszanych zlosliwych adresow IP |
| `abuseipdb_check_block` | Sprawdz caly blok sieci CIDR pod katem zgloszen naduzyc |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Brak klucza API</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `greynoise_ip` | Wyszukaj IP w GreyNoise &mdash; klasyfikacja (lagodny/zlosliwy/nieznany), status skanera |
| `greynoise_check` | Szybkie sprawdzenie: czy ten IP to znany skaner lub znana lagodna usluga? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Brak klucza API (PULSEDIVE_API_KEY opcjonalny dla wyzszych limitow)</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `pulsedive_indicator` | Wyszukaj wskaznik (IP, domene, URL lub hash) &mdash; poziom ryzyka, zagrozenia, feedy |
| `pulsedive_search` | Wyszukaj wskazniki Pulsedive po wartosci |
| `pulsedive_explore` | Eksploruj powiazane wskazniki uzywajac zaawansowanych zapytan (powiazane IOC z poziomami ryzyka) |

</details>

<details>
<summary><b>Logi Stealerow Hudson Rock (3) &mdash; Wymaga HUDSONROCK_API_KEY</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `stealer_domain` | Wyszukaj wpisy logow stealerow po domenie &mdash; skompromitowane maszyny, dane uwierzytelniajace, szczegoly malware |
| `stealer_email` | Wyszukaj logi stealerow po adresie e-mail &mdash; skompromitowane maszyny z tym e-mailem w danych uwierzytelniajacych przegladarki |
| `stealer_ip` | Wyszukaj logi stealerow po adresie IP &mdash; skompromitowane maszyny pochodzace z tego IP |

</details>

<details>
<summary><b>Exploity Vulners (3) &mdash; Brak klucza API (VULNERS_API_KEY opcjonalny dla wyszukiwania)</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `vulners_search` | Wyszukaj w bazie podatnosci Vulners uzywajac zapytan Lucene |
| `vulners_id` | Wyszukaj konkretna podatnosc lub exploit po ID (CVE, EDB, GHSA) &mdash; bezplatne |
| `vulners_exploit` | Wyszukaj specyficznie exploity (wpisy ExploitDB) |

</details>

<details>
<summary><b>Wywiad Blockchain (4) &mdash; Brak klucza API</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `btc_address` | Wyszukaj adres Bitcoin &mdash; saldo, liczba transakcji, ostatnie transakcje |
| `btc_balance` | Pobierz saldo adresu Bitcoin w satoshi (szybkie sprawdzenie bez pelnej historii) |
| `btc_tx` | Pobierz szczegolowe informacje o transakcji Bitcoin po hashu &mdash; wejscia, wyjscia, oplaty, info bloku |
| `btc_abuse_check` | Sprawdz adres Bitcoin pod katem zgloszen naduzyc na ChainAbuse &mdash; zgloszenia oszustw z kategoriami |

</details>

<details>
<summary><b>Hybrid Analysis Malware (3) &mdash; Wymaga HYBRID_API_KEY</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `malware_search` | Wyszukaj w piaskownicy Hybrid Analysis po hashu pliku &mdash; werdykt, wskaznik wykrycia AV, szczegoly analizy |
| `malware_overview` | Pelny przeglad analizy malware &mdash; techniki MITRE ATT&CK, wskazniki sieciowe, procesy |
| `malware_feed` | Pobierz najnowszy feed detonacji malware &mdash; ostatnio analizowane probki z werdyktami |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; Brak klucza API</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `onion_lookup` | Wyszukaj metadane dla adresu .onion przez projekt CIRCL AIL &mdash; pierwsza/ostatnia obserwacja, status, tagi, certyfikaty, porty, adresy BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Wymaga INTELX_API_KEY</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `intelx_search` | Zainicjuj wyszukiwanie w IntelligenceX pod katem wycieknietych danych, tresci dark webu i wiecej |
| `intelx_search_results` | Pobierz wyniki wyszukiwania IntelligenceX po ID |
| `intelx_phonebook` | Wyszukiwanie w ksiazce telefonicznej &mdash; znajdz e-maile, domeny, URL powiazane z terminem |
| `intelx_phonebook_results` | Pobierz wyniki wyszukiwania w ksiazce telefonicznej po ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Brak klucza API (PHISHTANK_API_KEY opcjonalny dla wyzszych limitow)</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `phishing_check` | Sprawdz czy URL jest znana strona phishingowa przez PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Brak klucza API</b></summary>

| Narzedzie | Opis |
|-----------|------|
| `darknet_list_sources` | Wymien wszystkie dostepne zrodla danych ze statusem konfiguracji, statusem klucza API i liczba narzedzi |

</details>

---

### Uzycie CLI

```bash
# Wymien wszystkie dostepne narzedzia
npx darknet-mcp-server --list

# Sprawdz polaczenie proxy Tor SOCKS5
npx darknet-mcp-server --check-tor

# Uruchom dowolne narzedzie bezposrednio
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Narzedzia wymagajace kluczy API
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Zrodla Danych (16)

| Zrodlo | Uwierzytelnianie | Limit Zapytan | Co zapewnia |
|--------|-------------------|---------------|-------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | Wyszukiwanie naruszen, wyszukiwanie paste, sprawdzanie hasel, listy naruszen |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Tresci dark webu, wyszukiwanie wycieknietych danych, ksiazka telefoniczna (e-maile/domeny/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | Opcjonalne | 1 req/s | Wywiad zagrozen dla IP, domen, hashy, CVE; wyszukiwanie pulsow zagrozen |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | Zgloszenia naduzyc IP, ocena zaufania, czarna lista, sprawdzanie bloku CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Opcjonalne | 2 req/s | Wyszukiwanie IOC, sledzenie rodzin malware, wyszukiwanie po tagach |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Opcjonalne | 2 req/s | Sledzenie URL dystrybucji malware, wyszukiwanie host/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Opcjonalne | 2 req/s | Repozytorium probek malware, wyszukiwanie hashy, wyszukiwanie sygnatur YARA |
| [GreyNoise](https://www.greynoise.io) | Brak | 1 req/s | Klasyfikacja IP (lagodny/zlosliwy), wykrywanie skanera internetowego |
| [Pulsedive](https://pulsedive.com) | Opcjonalne | 1 req/s | Wzbogacanie wskaznikow, ocena ryzyka, eksploracja powiazanych IOC |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Wyszukiwanie logow stealerow po domenie, e-mailu lub IP |
| [Vulners](https://vulners.com) | Opcjonalne | 1 req/s | Baza podatnosci/exploitow, wyszukiwanie CVE, wyszukiwanie ExploitDB |
| [Blockchain.info](https://blockchain.info) | Brak | 1 req/s | Wyszukiwanie adresow Bitcoin, saldo, szczegoly transakcji |
| [ChainAbuse](https://www.chainabuse.com) | Brak | 1 req/s | Zgloszenia naduzyc/oszustw adresow Bitcoin |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Detonacja malware w piaskownicy, mapowanie MITRE ATT&CK, feed probek |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Brak | 0.5 req/s | Metadane adresow .onion, pierwsza/ostatnia obserwacja, powiazane adresy BTC |
| [Tor Network](https://www.torproject.org) | Brak | N/A | Lista wezlow wyjsciowych, pobieranie/scraping .onion, wyszukiwanie Ahmia.fi |

---

## Architektura

```
src/
  index.ts                # Punkt wejscia CLI (--help, --list, --check-tor, serwer stdio)
  protocol/
    mcp-server.ts         # Konfiguracja serwera MCP (transport stdio)
    tools.ts              # Rejestr narzedzi — wszystkie 66 narzedzi zmontowanych tutaj
  types/
    index.ts              # Wspoldzielone typy (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Ogranicznik zapytan per dostawca
    cache.ts              # Cache TTL dla odpowiedzi API
    tor-fetch.ts          # Klient HTTP proxy Tor SOCKS5
    require-key.ts        # Helper walidacji klucza API
  tor/                    # Narzedzia Sieci Tor (7)
  ransomware/             # Narzedzia Wywiadu Ransomware (9)
  breach/                 # Narzedzia Naruszen HIBP (7)
  abusech/                # Narzedzia ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Narzedzia AlienVault OTX (5)
  abuseipdb/              # Narzedzia AbuseIPDB (4)
  greynoise/              # Narzedzia GreyNoise Community (2)
  pulsedive/              # Narzedzia Pulsedive (3)
  hudsonrock/             # Narzedzia logow stealerow Hudson Rock (3)
  vulners/                # Narzedzia exploitow Vulners (3)
  blockchain/             # Narzedzia Wywiadu Blockchain (4)
  hybrid/                 # Narzedzia malware Hybrid Analysis (3)
  onionlookup/            # Narzedzie CIRCL Onion Lookup (1)
  intelx/                 # Narzedzia IntelligenceX (4)
  phishing/               # Narzedzie PhishTank (1)
  meta/                   # Narzedzia Meta (1)
```

**Decyzje projektowe:**

- **16 dostawcow, 1 serwer** &mdash; Kazde zrodlo danych to niezalezny modul. Agent wybiera ktore narzedzia uzyc na podstawie zapytania.
- **Ograniczniki zapytan per dostawca** &mdash; Kazde zrodlo danych ma wlasna instancje `RateLimiter` skalibrowana do limitow danego API. Brak wspoldzielonego waskiego gardla.
- **Cachowanie TTL** &mdash; Dane ransomware (15 min), listy naruszen (10 min), wyniki abuse.ch (5 min) sa cachowane aby uniknac nadmiarowych wywolan API podczas obiegow pracy z wieloma narzedziami.
- **Lagodna degradacja** &mdash; Brakujace klucze API nie powoduja awarii serwera. Narzedzia zwracaja opisowe komunikaty o bledach: "Ustaw HIBP_API_KEY aby wlaczyc wyszukiwanie kont naruszen."
- **Zapobieganie wyciekom DNS** &mdash; Narzedzia Tor .onion uzywaja protokolu `socks5h://` do rozwiazywania DNS przez Tor, zapobiegajac wyciekom DNS do lokalnego resolvera.
- **4 zaleznosci** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` i `cheerio`. Caly clearnet HTTP przez natywny `fetch`. Caly ruch Tor przez SOCKS5.

---

## Ograniczenia

- Wyszukiwanie kont/paste HIBP wymaga platnego klucza API ($3.50/miesiac)
- IntelligenceX, AbuseIPDB, Hudson Rock i Hybrid Analysis wymagaja kluczy API do swoich narzedzi
- Narzedzia Tor .onion wymagaja dzialajacego proxy Tor SOCKS5 (nie dolaczony)
- Darmowy poziom abuse.ch ma nizsze limity zapytan bez `ABUSECH_AUTH_KEY`
- Dane Ransomware.live i RansomLook zaleza od czestotliwosci scrapingu upstream
- Narzedzia blockchain obsluguja tylko Bitcoin (bez Ethereum/Monero)
- Baza danych PhishTank moze nie nadazac za kampaniami phishingowymi w czasie rzeczywistym
- Testowane na macOS / Linux (Windows nie testowany)

---

## Czesc Pakietu Bezpieczenstwa MCP

| Projekt | Domena | Narzedzia |
|---------|--------|-----------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Testy bezpieczenstwa oparte na przegladarce | 39 narzedzi, Firefox, testy injection |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Bezpieczenstwo chmury (AWS/Azure/GCP) | 38 narzedzi, 60+ kontroli |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Pozycja bezpieczenstwa GitHub | 39 narzedzi, 45 kontroli |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Wywiad podatnosci | 23 narzedzia, 5 zrodel |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT i rozpoznanie | 37 narzedzi, 12 zrodel |
| **darknet-mcp-server** | **Dark web i wywiad zagrozen** | **66 narzedzi, 16 zrodel** |

---

<p align="center">
<b>Tylko do autoryzowanych testow bezpieczenstwa i ocen.</b><br>
Zawsze upewnij sie ze masz odpowiednia autoryzacje przed przeprowadzeniem zbierania informacji na jakimkolwiek celu.
</p>

<p align="center">
  <a href="LICENSE">Licencja MIT</a> &bull; Zbudowane z Bun + TypeScript
</p>
