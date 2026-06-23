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
  <strong>Bosanski</strong> |
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

<h3 align="center">Obavještajni podaci o dark webu i prijetnjama za AI agente.</h3>

<p align="center">
  HIBP, ThreatFox, praćenje ransomwarea, pristup Tor .onion servisima, blockchain obavještajni podaci, pretraga eksploita, stealer logovi, analiza malwarea &mdash; ujedinjeno u jednom MCP serveru.<br>
  Vaš AI agent dobija <b>potpuni spektar obavještajnih podataka dark weba na zahtjev</b>, a ne 16 tabova preglednika i ručnu korelaciju.
</p>

<br>

<p align="center">
  <a href="#problem">Problem</a> &bull;
  <a href="#po-čemu-se-razlikuje">Po čemu se razlikuje</a> &bull;
  <a href="#brzi-početak">Brzi početak</a> &bull;
  <a href="#šta-ai-može-uraditi">Šta AI može uraditi</a> &bull;
  <a href="#referenca-alata-66-alata">Alati (66)</a> &bull;
  <a href="#izvori-podataka-16">Izvori podataka</a> &bull;
  <a href="#arhitektura">Arhitektura</a> &bull;
  <a href="CHANGELOG.md">Dnevnik promjena</a> &bull;
  <a href="CONTRIBUTING.md">Doprinos</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licenca"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 alata">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 izvora">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server demo" width="800">
</p>

---

## Problem

Obavještajni podaci s dark weba su sloj koji nedostaje u svakoj sigurnosnoj istrazi. Baze podataka o provalama, praćenje ransomwarea, Tor skriveni servisi, sandboxovi za malware, stealer logovi, blockchain forenzika, baze eksploita &mdash; podaci koji su vam potrebni razbacani su po desetinama platformi, svaka sa svojim API-jem, svojom autentifikacijom, svojim ograničenjima brzine, svojim izlaznim formatom. Danas provjeravate HIBP u jednom tabu, ThreatFox u drugom, pregledavate ransomware leak stranice kroz Tor, otvarate MalwareBazaar za hash, provjeravate blockchain transakcije na block exploreru, a onda provedete sat vremena ručno spajajući sve to zajedno.

```
Tradicionalni tok rada za obavještajne podatke s dark weba:
  provjera izloženosti provalama     ->  HIBP web interfejs (plaćeni API)
  pretraga procurjelih kredencijala  ->  IntelligenceX web interfejs
  praćenje ransomware grupa          ->  ransomware.live + ransomlook.io (2 odvojena interfejsa)
  pristup .onion skrivenim servisima ->  Tor Browser ručno
  analiza uzoraka malwarea           ->  Hybrid Analysis + MalwareBazaar (još 2 interfejsa)
  provjera historije zloupotrebe IP-a ->  AbuseIPDB + GreyNoise (još 2 interfejsa)
  praćenje kriptovaluta              ->  blockchain.info + ChainAbuse
  pretraga eksploita                 ->  Vulners web interfejs
  provjera phishing URL-ova          ->  PhishTank web interfejs
  korelacija svega                   ->  kopiraj-zalijepi u izvještaj
  ────────────────────────────────
  Ukupno: 60+ minuta po istrazi, većina potrošena na prebacivanje konteksta
```

**darknet-mcp-server** daje vašem AI agentu 66 alata iz 16 izvora podataka putem [Model Context Protocol](https://modelcontextprotocol.io). Agent upituje sve izvore paralelno, korelira podatke s površinskog i dark weba, identificira prijetnje i prezentuje objedinjenu obavještajnu sliku &mdash; u jednom razgovoru.

```
Sa darknet-mcp-server:
  Vi: "Istraži izloženost provalama i pejzaž prijetnji za target.com"

  Agent: -> HIBP: 3 poznate provale (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOC-a povezana s domenom (C2 callback, phishing)
         -> URLhaus: 1 maliciozni URL hostovan na poddomeni
         -> Ransomware: Nisu pronađeni spiskovi žrtava (dobro)
         -> Stealer logovi: pronađeno 47 kompromitovanih kredencijala zaposlenika
         -> OTX: 5 pulseva prijetnji koji referenciraju domen
         -> AbuseIPDB: Primarna IP adresa ima 12 prijava zloupotrebe (brute force)
         -> "target.com je bio u 3 provale podataka koje su izložile 2,1M zapisa.
            47 kredencijala zaposlenika pronađeno u stealer logovima — preporučuje
            se hitno resetiranje lozinki. 2 aktivna ThreatFox IOC-a sugerišu
            kontinuirano targetiranje. Nema ransomware spiskova, ali prijave
            zloupotrebe na primarnoj IP adresi zahtijevaju istragu."
```

---

## Po čemu se razlikuje

Postojeći alati vam daju sirove podatke iz jednog izvora istovremeno. darknet-mcp-server daje vašem AI agentu sposobnost da **istovremeno rezonuje koristeći obavještajne podatke s površinskog i dark weba**.

<table>
<thead>
<tr>
<th></th>
<th>Tradicionalni pristup</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interfejs</b></td>
<td>16 različitih web interfejsa, CLI-jeva i API-jeva</td>
<td>MCP &mdash; AI agent poziva alate kroz razgovor</td>
</tr>
<tr>
<td><b>Izvori podataka</b></td>
<td>Jedna platforma istovremeno</td>
<td>16 izvora upitanih paralelno</td>
</tr>
<tr>
<td><b>Obavještajni podaci o provalama</b></td>
<td>HIBP web interfejs za provale, IntelligenceX za leakove</td>
<td>Agent kombinuje HIBP provale + paste + IntelligenceX + stealer logove</td>
</tr>
<tr>
<td><b>Pristup dark webu</b></td>
<td>Ručno korištenje Tor Browsera, kopiraj-zalijepi sa .onion stranica</td>
<td>Agent dohvaća, scrapeuje i pretražuje .onion stranice putem SOCKS5 proxyja</td>
</tr>
<tr>
<td><b>Analiza malwarea</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox odvojeno</td>
<td>Agent unakrsno referencira: "Ovaj hash iz ThreatFoxa je također detoniran u Hybrid Analysis s mrežnim IOC-ovima"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Block explorer + ChainAbuse odvojeno</td>
<td>Agent prati BTC transakcije i provjerava prijave zloupotrebe u jednom koraku</td>
</tr>
<tr>
<td><b>API ključevi</b></td>
<td>Potrebni za gotovo sve</td>
<td>Mnogi alati rade besplatno; API ključevi otključavaju premium izvore</td>
</tr>
<tr>
<td><b>Postavljanje</b></td>
<td>Instaliraj svaki alat, upravljaj svakom konfiguracijom, pokreni Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; jedna komanda, nula konfiguracije</td>
</tr>
</tbody>
</table>

---

## Brzi početak

### Opcija 1: npx (bez instalacije)

```bash
npx darknet-mcp-server
```

Besplatni alati rade odmah. API ključevi nisu potrebni za praćenje ransomwarea, spiskove provala, GreyNoise, blockchain, OTX i više.

### Opcija 2: Kloniranje

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Varijable okruženja (opcionalno)

```bash
# Obavještajni podaci o provalama i kredencijalima
export HIBP_API_KEY=your-key           # Omogućava pretragu naloga u provalama i pretragu pasteova
export INTELX_API_KEY=your-key         # Omogućava 4 IntelligenceX alata

# Obavještajni podaci o prijetnjama
export OTX_API_KEY=your-key            # Povećava ograničenja brzine za AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Omogućava 4 AbuseIPDB alata
export ABUSECH_AUTH_KEY=your-key       # Viša ograničenja brzine za abuse.ch paket
export PULSEDIVE_API_KEY=your-key      # Viša ograničenja brzine za Pulsedive

# Stealer logovi i kredencijali
export HUDSONROCK_API_KEY=your-key     # Omogućava 3 Hudson Rock alata za stealer logove

# Eksploiti i analiza malwarea
export VULNERS_API_KEY=your-key        # Omogućava Vulners pretragu i alate za eksploite
export HYBRID_API_KEY=your-key         # Omogućava 3 Hybrid Analysis alata za malware

# Phishing
export PHISHTANK_API_KEY=your-key      # Viša ograničenja brzine za PhishTank

# Tor SOCKS5 proxy (za pristup .onion servisima)
export TOR_SOCKS_HOST=127.0.0.1       # Podrazumijevano: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Podrazumijevano: 9050
```

Svi API ključevi su opcionalni. Bez njih i dalje dobijate praćenje ransomwarea, spiskove provala, GreyNoise, blockchain obavještajne podatke, OTX, provjere Tor izlaznih čvorova, pretragu onion servisa, CIRCL onion pretragu i više.

### Povežite se sa svojim AI agentom

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Sa npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Sa lokalnim klonom
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Dodajte u `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / drugi MCP klijenti</b></summary>

Isti JSON format konfiguracije. Usmjerite komandu na `npx darknet-mcp-server` ili putanju vaše lokalne instalacije.

</details>

### Postavljanje Tora (opcionalno, za pristup .onion servisima)

7 Tor alata (`tor_fetch_onion`, `tor_scrape_onion`, itd.) zahtijeva pokrenut Tor SOCKS5 proxy.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Provjera povezivosti
npx darknet-mcp-server --check-tor
```

### Počnite s upitima

```
Vi: "Provjeri da li je example.com bio u nekim provalama podataka i potraži stealer logove"
```

To je to. Agent automatski obavlja pretrage provala, pretragu kredencijala, korelaciju prijetnji i više.

---

## Šta AI može uraditi

### Istraga provala

```
Vi: "Provjeri da li je example.com bio u nekim provalama podataka"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com se pojavljuje u 5 poznatih provala:
          - ExampleDB 2023: 4,2M zapisa (emailovi, lozinke, IP adrese)
          - Collection #1: lista za credential stuffing
          - Combolist 2024: 890K parova email:lozinka
          Stealer logovi: 23 kompromitovana računara sa sačuvanim kredencijalima
          za example.com pronađeno u bazi Hudson Rock.
          IntelligenceX: 47 rezultata na paste stranicama i dark webu."
```

### Praćenje ransomwarea

```
Vi: "Koje ransomware grupe ciljaju zdravstveni sektor?"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Aktivnost ransomwarea u zdravstvenom sektoru:
          142 žrtve u 12 grupa u posljednjih 12 mjeseci.
          Vodeće grupe: LockBit3 (38 žrtava), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Najnovije: MedCorp Inc. navedena od strane LockBit3 (prije 2 dana).
          3 nove žrtve iz zdravstva u posljednjoj sedmici prema
          feedovima ransomware.live i RansomLook."
```

### Izviđanje dark weba

```
Vi: "Potraži pominjanja naše kompanije na .onion stranicama"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Rezultati pretrage dark weba za AcmeCorp:
          Ahmia.fi: 3 .onion stranice pominju AcmeCorp
          - Post na forumu koji diskutuje o listi zaposlenika AcmeCorpa (leak forum)
          - Listing na tržnici za bazu podataka AcmeCorpa (nepotvrđeno)
          - Blog post koji referencira provalu AcmeCorpa
          IntelligenceX: 12 rezultata na paste stranicama
          Preporuka: istražiti post na forumu i listing na tržnici
          radi potencijalnih aktivnih prodaja podataka."
```

### Analiza malwarea

```
Vi: "Analiziraj ovaj hash fajla za indikatore malwarea: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Analiza malwarea za abc123def456:
          Hybrid Analysis: MALICIOZAN (ocjena prijetnje 95/100)
          - Porodica: AgentTesla (kradljivac informacija)
          - MITRE ATT&CK: T1555 (Pristup kredencijalima), T1071 (C2)
          - Mrežni IOC-ovi: 3 C2 domene, 2 IP adrese
          MalwareBazaar: Prvo viđen 15.03.2024., označen kao 'AgentTesla'
          ThreatFox: 2 IOC unosa koji se povezuju s istom kampanjom
          OTX: Referenciran u 4 pulsa prijetnji"
```

---

## Referenca alata (66 alata)

<details open>
<summary><b>Tor mreža (7) &mdash; Bez API ključa (Tor daemon potreban za .onion alate)</b></summary>

| Alat | Opis |
|------|------|
| `tor_status` | Provjeri da li je lokalni Tor SOCKS5 proxy daemon pokrenut i dostupan |
| `tor_fetch_onion` | Dohvati sirovi HTML s .onion URL-a putem Tor SOCKS5 proxyja (prevencija DNS curenja putem socks5h) |
| `tor_scrape_onion` | Dohvati i parsiraj .onion stranicu &mdash; vraća strukturirane podatke: naslov, linkove, tekst tijela |
| `tor_search_onion` | Pretraži .onion stranice koristeći Ahmia.fi pretraživač |
| `tor_exit_nodes` | Dobij trenutne IP adrese Tor izlaznih čvorova sa oficijelne Tor Project bulk liste izlaznih čvorova |
| `tor_exit_check` | Provjeri da li je određena IP adresa poznati Tor izlazni čvor |
| `tor_exit_details` | Dobij detaljne informacije o Tor izlaznom čvoru uključujući otiske i vremena objave |

</details>

<details>
<summary><b>Obavještajni podaci o ransomwareu (9) &mdash; Bez API ključa</b></summary>

| Alat | Opis |
|------|------|
| `ransomwareRecent` | Dohvati najnovije žrtve ransomwarea sa ransomware.live |
| `ransomwareGroups` | Izlistaj sve poznate ransomware grupe koje prati ransomware.live |
| `ransomwareGroup` | Dobij detaljan profil za određenu ransomware grupu po imenu |
| `ransomwareGroupVictims` | Dobij sve žrtve koje je proglasila određena ransomware grupa |
| `ransomwareSearch` | Pretraži žrtve ransomwarea po ključnoj riječi (ime kompanije, domen, itd.) |
| `ransomwareByCountry` | Dobij žrtve ransomwarea filtrirane po ISO 3166-1 alpha-2 kodu države |
| `ransomwareBySector` | Dobij žrtve ransomwarea filtrirane po sektoru/industriji (zdravstvo, finansije, itd.) |
| `ransomlookGroups` | Izlistaj svih 582+ ransomware grupa koje prati RansomLook |
| `ransomlookRecent` | Dohvati najnovije ransomware postove i proglašenja žrtava sa RansomLooka |

</details>

<details>
<summary><b>Obavještajni podaci o provalama &mdash; HIBP (7) &mdash; Djelomično: neki alati besplatni, pretraga naloga zahtijeva HIBP_API_KEY</b></summary>

| Alat | Opis |
|------|------|
| `breachList` | Izlistaj sve poznate provale podataka iz HaveIBeenPwned, opcionalno filtriraj po domenu &mdash; besplatno |
| `breachGet` | Dobij detalje o određenoj provali podataka po imenu &mdash; besplatno |
| `breachLatest` | Dobij najnovije dodanu provalu podataka &mdash; besplatno |
| `breachDataClasses` | Izlistaj sve klase podataka (tipove kompromitovanih podataka) poznate HIBP-u &mdash; besplatno |
| `breachPassword` | Provjeri da li se lozinka pojavila u poznatim provalama (k-anonimnost, šalje se samo 5-znakovni SHA-1 prefiks) &mdash; besplatno |
| `breachSearch` | Pretraži sve provale za određeni nalog (email/korisničko ime) &mdash; zahtijeva `HIBP_API_KEY` |
| `breachPastes` | Pretraži email adresu u javno objavljenim pasteovima &mdash; zahtijeva `HIBP_API_KEY` |

</details>

<details>
<summary><b>abuse.ch paket (9) &mdash; Bez API ključa (ABUSECH_AUTH_KEY opcionalan za veću brzinu)</b></summary>

| Alat | Opis |
|------|------|
| `threatfoxGetIocs` | Dobij najnovije IOC-ove iz ThreatFoxa prijavljene u posljednjih N dana |
| `threatfoxSearch` | Pretraži ThreatFox IOC-ove po IP-u, domenu, hashu ili URL-u |
| `threatfoxTag` | Pretraži ThreatFox IOC-ove po tagu (npr. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Pretraži ThreatFox IOC-ove po porodici malwarea koristeći Malpedia nomenklaturu |
| `urlhausLookup` | Potraži URL ili host u URLhausu za distribuciju malwarea |
| `urlhausTag` | Pretraži URLhaus unose po tagu |
| `bazaarHash` | Potraži uzorak malwarea u MalwareBazaaru po MD5, SHA1 ili SHA256 hashu |
| `bazaarRecent` | Dobij najnovije poslane uzorke malwarea iz MalwareBazaara |
| `bazaarTag` | Pretraži MalwareBazaar po tagu ili imenu YARA potpisa |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Bez API ključa (OTX_API_KEY opcionalan za veću brzinu)</b></summary>

| Alat | Opis |
|------|------|
| `otx_ip` | Potraži obavještajne podatke o prijetnjama za IP adresu &mdash; informacije o pulsevima, reputacija, država, ASN |
| `otx_domain` | Potraži obavještajne podatke o prijetnjama za domen &mdash; informacije o pulsevima, whois, reputacija |
| `otx_hash` | Potraži obavještajne podatke o prijetnjama za hash fajla (MD5, SHA1, SHA256) |
| `otx_cve` | Potraži obavještajne podatke o prijetnjama za CVE &mdash; povezani pulsevi i indikatori |
| `otx_search_pulses` | Pretraži OTX pulseve prijetnji po ključnoj riječi |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Zahtijeva ABUSEIPDB_API_KEY</b></summary>

| Alat | Opis |
|------|------|
| `abuseipdb_check` | Provjeri IP adresu za prijave zloupotrebe &mdash; ocjena povjerenja, ISP, država, broj prijava |
| `abuseipdb_reports` | Dobij pojedinačne prijave zloupotrebe za IP s detaljnim komentarima i kategorijama |
| `abuseipdb_blacklist` | Dobij AbuseIPDB crnu listu najprijavljivanijih malicioznih IP adresa |
| `abuseipdb_check_block` | Provjeri čitav CIDR mrežni blok za prijave zloupotrebe |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Bez API ključa</b></summary>

| Alat | Opis |
|------|------|
| `greynoise_ip` | Potraži IP na GreyNoiseu &mdash; klasifikacija (benigni/maliciozni/nepoznati), status skenera |
| `greynoise_check` | Brza provjera: da li je ova IP adresa poznati skener ili poznati benigni servis? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Bez API ključa (PULSEDIVE_API_KEY opcionalan za veću brzinu)</b></summary>

| Alat | Opis |
|------|------|
| `pulsedive_indicator` | Potraži indikator (IP, domen, URL ili hash) &mdash; nivo rizika, prijetnje, feedovi |
| `pulsedive_search` | Pretraži Pulsedive indikatore po vrijednosti |
| `pulsedive_explore` | Istraži povezane indikatore koristeći napredne upite (povezani IOC-ovi s nivoima rizika) |

</details>

<details>
<summary><b>Hudson Rock stealer logovi (3) &mdash; Zahtijeva HUDSONROCK_API_KEY</b></summary>

| Alat | Opis |
|------|------|
| `stealer_domain` | Pretraži stealer log unose po domenu &mdash; kompromitovani računari, kredencijali, detalji malwarea |
| `stealer_email` | Pretraži stealer logove po email adresi &mdash; kompromitovani računari s tom email adresom u kredencijalima preglednika |
| `stealer_ip` | Pretraži stealer logove po IP adresi &mdash; kompromitovani računari koji potiču s te IP adrese |

</details>

<details>
<summary><b>Vulners eksploiti (3) &mdash; Bez API ključa (VULNERS_API_KEY opcionalan za pretragu)</b></summary>

| Alat | Opis |
|------|------|
| `vulners_search` | Pretraži Vulners bazu ranjivosti koristeći Lucene upite |
| `vulners_id` | Potraži određenu ranjivost ili eksploit po ID-u (CVE, EDB, GHSA) &mdash; besplatno |
| `vulners_exploit` | Pretraži specifično eksploite (ExploitDB unose) |

</details>

<details>
<summary><b>Blockchain obavještajni podaci (4) &mdash; Bez API ključa</b></summary>

| Alat | Opis |
|------|------|
| `btc_address` | Potraži Bitcoin adresu &mdash; stanje, broj transakcija, nedavne transakcije |
| `btc_balance` | Dobij stanje Bitcoin adrese u satošijima (brza provjera bez pune historije) |
| `btc_tx` | Dobij detaljne informacije o Bitcoin transakciji po hashu &mdash; ulazi, izlazi, naknade, informacije o bloku |
| `btc_abuse_check` | Provjeri Bitcoin adresu za prijave zloupotrebe na ChainAbuseu &mdash; prijave prevara s kategorijama |

</details>

<details>
<summary><b>Hybrid Analysis malware (3) &mdash; Zahtijeva HYBRID_API_KEY</b></summary>

| Alat | Opis |
|------|------|
| `malware_search` | Pretraži Hybrid Analysis sandbox po hashu fajla &mdash; presuda, stopa AV detekcije, detalji analize |
| `malware_overview` | Potpuni pregled analize malwarea &mdash; MITRE ATT&CK tehnike, mrežni indikatori, procesi |
| `malware_feed` | Dobij najnoviji feed detonacije malwarea &mdash; nedavno analizirani uzorci s presudama |

</details>

<details>
<summary><b>CIRCL Onion pretraga (1) &mdash; Bez API ključa</b></summary>

| Alat | Opis |
|------|------|
| `onion_lookup` | Potraži metapodatke za .onion adresu putem CIRCL AIL projekta &mdash; prvi/posljednji put viđen, status, tagovi, certifikati, portovi, BTC adrese |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Zahtijeva INTELX_API_KEY</b></summary>

| Alat | Opis |
|------|------|
| `intelx_search` | Pokreni pretragu na IntelligenceX za procurjele podatke, sadržaj s dark weba i više |
| `intelx_search_results` | Preuzmi rezultate za IntelligenceX pretragu po ID-u |
| `intelx_phonebook` | Pretraga telefonskog imenika &mdash; pronađi emailove, domene, URL-ove povezane s pojmom |
| `intelx_phonebook_results` | Preuzmi rezultate pretrage telefonskog imenika po ID-u |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Bez API ključa (PHISHTANK_API_KEY opcionalan za veću brzinu)</b></summary>

| Alat | Opis |
|------|------|
| `phishing_check` | Provjeri da li je URL poznata phishing stranica putem PhishTanka |

</details>

<details>
<summary><b>Meta (1) &mdash; Bez API ključa</b></summary>

| Alat | Opis |
|------|------|
| `darknet_list_sources` | Izlistaj sve dostupne izvore podataka sa statusom konfiguracije, statusom API ključa i brojem alata |

</details>

---

### Korištenje CLI-ja

```bash
# Izlistaj sve dostupne alate
npx darknet-mcp-server --list

# Provjeri Tor SOCKS5 proxy povezivost
npx darknet-mcp-server --check-tor

# Pokreni bilo koji alat direktno
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Alati koji zahtijevaju API ključeve
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Izvori podataka (16)

| Izvor | Autentifikacija | Ograničenje brzine | Šta pruža |
|-------|-----------------|---------------------|-----------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 zahtjev/1.5s | Pretraga provala, pretraga pasteova, provjera lozinki, spiskovi provala |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 zahtjev/s | Sadržaj s dark weba, pretraga procurjelih podataka, telefonski imenik (emailovi/domeni/URL-ovi) |
| [AlienVault OTX](https://otx.alienvault.com) | Opcionalno | 1 zahtjev/s | Obavještajni podaci o prijetnjama za IP-ove, domene, hasheve, CVE-ove; pretraga pulseva prijetnji |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 zahtjev/s | Prijave zloupotrebe IP adresa, ocjena povjerenja, crna lista, provjera CIDR bloka |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Opcionalno | 2 zahtjeva/s | Pretraga IOC-ova, praćenje porodica malwarea, pretraga po tagovima |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Opcionalno | 2 zahtjeva/s | Praćenje URL-ova za distribuciju malwarea, pretraga hosta/URL-a |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Opcionalno | 2 zahtjeva/s | Repozitorij uzoraka malwarea, pretraga po hashu, pretraga YARA potpisa |
| [GreyNoise](https://www.greynoise.io) | Nema | 1 zahtjev/s | Klasifikacija IP adresa (benigni/maliciozni), detekcija internet skenera |
| [Pulsedive](https://pulsedive.com) | Opcionalno | 1 zahtjev/s | Obogaćivanje indikatora, ocjena rizika, istraživanje povezanih IOC-ova |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 zahtjev/s | Pretraga stealer logova po domenu, emailu ili IP-u |
| [Vulners](https://vulners.com) | Opcionalno | 1 zahtjev/s | Baza ranjivosti/eksploita, pretraga CVE-ova, pretraga ExploitDB-a |
| [Blockchain.info](https://blockchain.info) | Nema | 1 zahtjev/s | Pretraga Bitcoin adresa, stanje, detalji transakcija |
| [ChainAbuse](https://www.chainabuse.com) | Nema | 1 zahtjev/s | Prijave zloupotrebe/prevara za Bitcoin adrese |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 zahtjev/s | Detonacija malwarea u sandboxu, MITRE ATT&CK mapiranje, feed uzoraka |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Nema | 0.5 zahtjeva/s | Metapodaci za .onion adrese, prvi/posljednji put viđen, povezane BTC adrese |
| [Tor Network](https://www.torproject.org) | Nema | N/A | Lista izlaznih čvorova, dohvaćanje/scrapeovanje .onion servisa, Ahmia.fi pretraga |

---

## Arhitektura

```
src/
  index.ts                # CLI ulazna tačka (--help, --list, --check-tor, stdio server)
  protocol/
    mcp-server.ts         # Postavljanje MCP servera (stdio transport)
    tools.ts              # Registar alata — svih 66 alata sastavljeno ovdje
  types/
    index.ts              # Dijeljeni tipovi (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Ograničavač brzine po provajderu
    cache.ts              # TTL keš za API odgovore
    tor-fetch.ts          # Tor SOCKS5 proxy HTTP klijent
    require-key.ts        # Pomoćnik za validaciju API ključa
  tor/                    # Alati za Tor mrežu (7)
  ransomware/             # Alati za obavještajne podatke o ransomwareu (9)
  breach/                 # HIBP alati za provale (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar alati (9)
  otx/                    # AlienVault OTX alati (5)
  abuseipdb/              # AbuseIPDB alati (4)
  greynoise/              # GreyNoise Community alati (2)
  pulsedive/              # Pulsedive alati (3)
  hudsonrock/             # Hudson Rock alati za stealer logove (3)
  vulners/                # Vulners alati za eksploite (3)
  blockchain/             # Alati za blockchain obavještajne podatke (4)
  hybrid/                 # Hybrid Analysis alati za malware (3)
  onionlookup/            # CIRCL Onion Lookup alat (1)
  intelx/                 # IntelligenceX alati (4)
  phishing/               # PhishTank alat (1)
  meta/                   # Meta alati (1)
```

**Odluke o dizajnu:**

- **16 provajdera, 1 server** &mdash; Svaki izvor podataka je nezavisan modul. Agent bira koje alate koristiti na osnovu upita.
- **Ograničavači brzine po provajderu** &mdash; Svaki izvor podataka ima svoju `RateLimiter` instancu kalibriranu prema ograničenjima tog API-ja. Nema dijeljenog uskog grla.
- **TTL keširanje** &mdash; Podaci o ransomwareu (15min), spiskovi provala (10min), abuse.ch (5min) rezultati se keširaju kako bi se izbjegli suvišni API pozivi tokom tokova rada s više alata.
- **Graciozna degradacija** &mdash; Nedostajući API ključevi ne ruše server. Alati vraćaju opisne poruke greške: "Postavite HIBP_API_KEY da omogućite pretragu naloga u provalama."
- **Prevencija DNS curenja** &mdash; Tor .onion alati koriste `socks5h://` protokol za razrješavanje DNS-a kroz Tor, sprečavajući DNS curenje prema lokalnom rezolveru.
- **4 zavisnosti** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` i `cheerio`. Sav clearnet HTTP putem nativnog `fetch`. Sav Tor saobraćaj putem SOCKS5.

---

## Ograničenja

- HIBP pretraga naloga/pasteova zahtijeva plaćeni API ključ ($3,50/mjesečno)
- IntelligenceX, AbuseIPDB, Hudson Rock i Hybrid Analysis zahtijevaju API ključeve za svoje alate
- Tor .onion alati zahtijevaju pokrenut Tor SOCKS5 proxy (nije uključen u paket)
- abuse.ch besplatni nivo ima niža ograničenja brzine bez `ABUSECH_AUTH_KEY`
- Podaci sa Ransomware.live i RansomLook zavise od učestalosti upstream scrapinga
- Blockchain alati podržavaju samo Bitcoin (bez Ethereuma/Monera)
- PhishTank baza može zaostajati za phishing kampanjama u realnom vremenu
- Testirano na macOS / Linux (Windows nije testiran)

---

## Dio MCP sigurnosnog paketa

| Projekat | Domen | Alati |
|----------|-------|-------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Sigurnosno testiranje zasnovano na pregledniku | 39 alata, Firefox, testiranje injekcija |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Sigurnost oblaka (AWS/Azure/GCP) | 38 alata, 60+ provjera |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub sigurnosni položaj | 39 alata, 45 provjera |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Obavještajni podaci o ranjivostima | 23 alata, 5 izvora |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT i izviđanje | 37 alata, 12 izvora |
| **darknet-mcp-server** | **Dark web i obavještajni podaci o prijetnjama** | **66 alata, 16 izvora** |

---

<p align="center">
<b>Samo za autorizovano sigurnosno testiranje i procjenu.</b><br>
Uvijek se uvjerite da imate odgovarajuću autorizaciju prije prikupljanja obavještajnih podataka o bilo kojem cilju.
</p>

<p align="center">
  <a href="LICENSE">MIT licenca</a> &bull; Izgrađeno sa Bun + TypeScript
</p>
