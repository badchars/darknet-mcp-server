<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <strong>Italiano</strong> |
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

<h3 align="center">Intelligence del dark web e delle minacce per agenti AI.</h3>

<p align="center">
  HIBP, ThreatFox, tracciamento ransomware, accesso a siti .onion su Tor, intelligence blockchain, ricerca exploit, log stealer, analisi malware &mdash; unificati in un unico server MCP.<br>
  Il tuo agente AI ottiene <b>intelligence completa del dark web su richiesta</b>, non 16 schede del browser e correlazione manuale.
</p>

<br>

<p align="center">
  <a href="#il-problema">Il Problema</a> &bull;
  <a href="#cosa-lo-rende-diverso">Cosa Lo Rende Diverso</a> &bull;
  <a href="#avvio-rapido">Avvio Rapido</a> &bull;
  <a href="#cosa-può-fare-lai">Cosa Può Fare l'AI</a> &bull;
  <a href="#riferimento-strumenti-66-strumenti">Strumenti (66)</a> &bull;
  <a href="#fonti-dati-16">Fonti Dati</a> &bull;
  <a href="#architettura">Architettura</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Contribuire</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licenza"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Strumenti">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Fonti">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server demo" width="800">
</p>

---

## Il Problema

L'intelligence del dark web è il livello mancante in ogni indagine di sicurezza. Database di violazioni, tracker di ransomware, servizi nascosti su Tor, sandbox per malware, log stealer, forensica blockchain, database di exploit &mdash; i dati di cui hai bisogno sono sparsi su decine di piattaforme, ognuna con la propria API, la propria autenticazione, i propri limiti di richieste, il proprio formato di output. Oggi controlli HIBP in una scheda, ThreatFox in un'altra, navighi i siti di leak ransomware tramite Tor, cerchi un hash su MalwareBazaar, verifichi transazioni blockchain su un block explorer, e poi passi un'ora a mettere insieme tutto manualmente.

```
Flusso di lavoro tradizionale di intelligence del dark web:
  verifica esposizione a violazioni      ->  interfaccia web HIBP (API a pagamento)
  cerca credenziali trapelate            ->  interfaccia web IntelligenceX
  traccia gruppi ransomware              ->  ransomware.live + ransomlook.io (2 UI separate)
  accedi a servizi nascosti .onion       ->  Tor Browser manualmente
  analizza campioni di malware           ->  Hybrid Analysis + MalwareBazaar (2 altre UI)
  verifica storico abusi IP              ->  AbuseIPDB + GreyNoise (2 altre UI)
  traccia criptovalute                   ->  blockchain.info + ChainAbuse
  cerca exploit                          ->  interfaccia web Vulners
  verifica URL di phishing               ->  interfaccia web PhishTank
  correla tutto                          ->  copia-incolla in un report
  ────────────────────────────────
  Totale: 60+ minuti per indagine, la maggior parte spesi a cambiare contesto
```

**darknet-mcp-server** fornisce al tuo agente AI 66 strumenti su 16 fonti dati tramite il [Model Context Protocol](https://modelcontextprotocol.io). L'agente interroga tutte le fonti in parallelo, correla i dati tra surface web e dark web, identifica le minacce e presenta un quadro di intelligence unificato &mdash; in una singola conversazione.

```
Con darknet-mcp-server:
  Tu: "Indaga sull'esposizione a violazioni e il panorama delle minacce per target.com"

  Agente: -> HIBP: 3 violazioni note (Adobe 2013, LinkedIn 2021, Collection #1)
          -> ThreatFox: 2 IOC associati al dominio (callback C2, phishing)
          -> URLhaus: 1 URL malevolo ospitato su sottodominio
          -> Ransomware: Nessuna vittima trovata (buono)
          -> Log stealer: 47 credenziali di dipendenti compromesse trovate
          -> OTX: 5 threat pulse che fanno riferimento al dominio
          -> AbuseIPDB: L'IP primario ha 12 segnalazioni di abuso (brute force)
          -> "target.com è stato coinvolto in 3 violazioni di dati che hanno esposto 2.1M
             di record. 47 credenziali di dipendenti trovate nei log stealer — si raccomanda
             il reset immediato delle password. 2 IOC attivi su ThreatFox suggeriscono
             un targeting in corso. Nessuna lista ransomware, ma le segnalazioni
             di abuso sull'IP primario meritano un'indagine."
```

---

## Cosa Lo Rende Diverso

Gli strumenti esistenti ti forniscono dati grezzi da una fonte alla volta. darknet-mcp-server dà al tuo agente AI la capacità di **ragionare simultaneamente su intelligence del surface web e del dark web**.

<table>
<thead>
<tr>
<th></th>
<th>Approccio Tradizionale</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interfaccia</b></td>
<td>16 diverse UI web, CLI e API</td>
<td>MCP &mdash; L'agente AI chiama gli strumenti conversazionalmente</td>
</tr>
<tr>
<td><b>Fonti dati</b></td>
<td>Una piattaforma alla volta</td>
<td>16 fonti interrogate in parallelo</td>
</tr>
<tr>
<td><b>Intelligence violazioni</b></td>
<td>UI web HIBP per violazioni, IntelligenceX per leak</td>
<td>L'agente combina violazioni HIBP + paste + IntelligenceX + log stealer</td>
</tr>
<tr>
<td><b>Accesso al dark web</b></td>
<td>Tor Browser manuale, copia-incolla da siti .onion</td>
<td>L'agente recupera, analizza e cerca siti .onion tramite proxy SOCKS5</td>
</tr>
<tr>
<td><b>Analisi malware</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox separatamente</td>
<td>L'agente incrocia i dati: "Questo hash da ThreatFox è stato anche detonato in Hybrid Analysis con IOC di rete"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Block explorer + ChainAbuse separatamente</td>
<td>L'agente traccia transazioni BTC e verifica segnalazioni di abuso in un unico passaggio</td>
</tr>
<tr>
<td><b>Chiavi API</b></td>
<td>Richieste per quasi tutto</td>
<td>Molti strumenti funzionano gratuitamente; le chiavi API sbloccano fonti premium</td>
</tr>
<tr>
<td><b>Configurazione</b></td>
<td>Installa ogni strumento, gestisci ogni configurazione, avvia Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; un comando, zero configurazione</td>
</tr>
</tbody>
</table>

---

## Avvio Rapido

### Opzione 1: npx (nessuna installazione)

```bash
npx darknet-mcp-server
```

Gli strumenti gratuiti funzionano immediatamente. Nessuna chiave API necessaria per il tracciamento ransomware, elenchi di violazioni, GreyNoise, blockchain, OTX e altro.

### Opzione 2: Clone

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Variabili d'ambiente (opzionali)

```bash
# Intelligence violazioni e credenziali
export HIBP_API_KEY=your-key           # Abilita ricerca account violazioni e ricerca paste
export INTELX_API_KEY=your-key         # Abilita 4 strumenti IntelligenceX

# Intelligence sulle minacce
export OTX_API_KEY=your-key            # Aumenta i limiti di richieste per AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Abilita 4 strumenti AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Limiti di richieste più elevati per la suite abuse.ch
export PULSEDIVE_API_KEY=your-key      # Limiti di richieste più elevati per Pulsedive

# Log stealer e credenziali
export HUDSONROCK_API_KEY=your-key     # Abilita 3 strumenti di log stealer Hudson Rock

# Analisi exploit e malware
export VULNERS_API_KEY=your-key        # Abilita strumenti di ricerca e exploit Vulners
export HYBRID_API_KEY=your-key         # Abilita 3 strumenti malware Hybrid Analysis

# Phishing
export PHISHTANK_API_KEY=your-key      # Limiti di richieste più elevati per PhishTank

# Proxy Tor SOCKS5 (per accesso .onion)
export TOR_SOCKS_HOST=127.0.0.1       # Default: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Default: 9050
```

Tutte le chiavi API sono opzionali. Senza di esse, hai comunque tracciamento ransomware, elenchi di violazioni, GreyNoise, intelligence blockchain, OTX, controllo nodi di uscita Tor, ricerca onion, ricerca CIRCL onion e altro.

### Connetti al tuo agente AI

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Con npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Con clone locale
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Aggiungi a `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / altri client MCP</b></summary>

Stesso formato di configurazione JSON. Punta il comando a `npx darknet-mcp-server` o al percorso di installazione locale.

</details>

### Configurazione Tor (opzionale, per accesso .onion)

I 7 strumenti Tor (`tor_fetch_onion`, `tor_scrape_onion`, ecc.) richiedono un proxy Tor SOCKS5 in esecuzione.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Verifica connettività
npx darknet-mcp-server --check-tor
```

### Inizia a interrogare

```
Tu: "Verifica se example.com è stato coinvolto in violazioni di dati e cerca log stealer"
```

Questo è tutto. L'agente gestisce ricerche di violazioni, ricerche di credenziali, correlazione delle minacce e altro automaticamente.

---

## Cosa Può Fare l'AI

### Indagine su Violazioni

```
Tu: "Verifica se example.com è stato coinvolto in violazioni di dati"

Agente: -> breachList {domain: "example.com"}
        -> breachSearch {account: "admin@example.com"}
        -> stealer_domain {domain: "example.com"}
        -> intelx_search {term: "example.com"}
        -> "example.com appare in 5 violazioni note:
           - ExampleDB 2023: 4.2M record (email, password, IP)
           - Collection #1: lista di credential stuffing
           - Combolist 2024: 890K coppie email:password
           Log stealer: 23 macchine compromesse con credenziali salvate
           per example.com trovate nel database Hudson Rock.
           IntelligenceX: 47 risultati su paste site e dark web."
```

### Tracciamento Ransomware

```
Tu: "Quali gruppi ransomware stanno prendendo di mira il settore sanitario?"

Agente: -> ransomwareBySector {sector: "healthcare"}
        -> ransomwareRecent {}
        -> ransomlookRecent {}
        -> "Attività ransomware nel settore sanitario:
           142 vittime in 12 gruppi negli ultimi 12 mesi.
           Principali gruppi: LockBit3 (38 vittime), BlackCat/ALPHV (24),
           Cl0p (19), Royal (15).
           Più recente: MedCorp Inc. elencata da LockBit3 (2 giorni fa).
           3 nuove vittime nel settore sanitario nell'ultima settimana
           dai feed ransomware.live e RansomLook."
```

### Ricognizione nel Dark Web

```
Tu: "Cerca menzioni della nostra azienda sui siti .onion"

Agente: -> tor_search_onion {query: "AcmeCorp"}
        -> intelx_search {term: "acmecorp.com"}
        -> onion_lookup {address: "relevant-onion-address.onion"}
        -> "Risultati ricerca dark web per AcmeCorp:
           Ahmia.fi: 3 pagine .onion menzionano AcmeCorp
           - Post su forum che discute lista dipendenti AcmeCorp (forum di leak)
           - Inserzione su marketplace per database AcmeCorp (non verificato)
           - Post su blog che fa riferimento alla violazione di AcmeCorp
           IntelligenceX: 12 risultati su paste site
           Raccomandazione: indagare sul post del forum e l'inserzione
           del marketplace per potenziali vendite attive di dati."
```

### Analisi Malware

```
Tu: "Analizza questo hash di file per indicatori di malware: abc123def456..."

Agente: -> malware_search {hash: "abc123def456..."}
        -> malware_overview {sha256: "abc123def456..."}
        -> bazaarHash {hash: "abc123def456..."}
        -> threatfoxSearch {searchTerm: "abc123def456..."}
        -> otx_hash {hash: "abc123def456..."}
        -> "Analisi malware per abc123def456:
           Hybrid Analysis: MALEVOLO (punteggio minaccia 95/100)
           - Famiglia: AgentTesla (info stealer)
           - MITRE ATT&CK: T1555 (Accesso Credenziali), T1071 (C2)
           - IOC di rete: 3 domini C2, 2 IP
           MalwareBazaar: Visto per la prima volta il 15-03-2024, taggato 'AgentTesla'
           ThreatFox: 2 voci IOC collegate alla stessa campagna
           OTX: Riferito in 4 threat pulse"
```

---

## Riferimento Strumenti (66 strumenti)

<details open>
<summary><b>Rete Tor (7) &mdash; Nessuna chiave API (daemon Tor richiesto per gli strumenti .onion)</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `tor_status` | Verifica se il daemon proxy Tor SOCKS5 locale è in esecuzione e accessibile |
| `tor_fetch_onion` | Recupera HTML grezzo da un URL .onion tramite proxy Tor SOCKS5 (prevenzione DNS leak tramite socks5h) |
| `tor_scrape_onion` | Recupera e analizza un sito .onion &mdash; restituisce dati strutturati: titolo, link, testo del corpo |
| `tor_search_onion` | Cerca siti .onion utilizzando il motore di ricerca Ahmia.fi |
| `tor_exit_nodes` | Ottieni gli indirizzi IP attuali dei nodi di uscita Tor dalla lista ufficiale del Tor Project |
| `tor_exit_check` | Verifica se un indirizzo IP specifico è un nodo di uscita Tor noto |
| `tor_exit_details` | Ottieni informazioni dettagliate sui nodi di uscita Tor inclusi fingerprint e timestamp di pubblicazione |

</details>

<details>
<summary><b>Intelligence Ransomware (9) &mdash; Nessuna chiave API</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `ransomwareRecent` | Recupera le vittime ransomware più recenti da ransomware.live |
| `ransomwareGroups` | Elenca tutti i gruppi ransomware noti tracciati da ransomware.live |
| `ransomwareGroup` | Ottieni un profilo dettagliato per un gruppo ransomware specifico per nome |
| `ransomwareGroupVictims` | Ottieni tutte le vittime rivendicate da un gruppo ransomware specifico |
| `ransomwareSearch` | Cerca vittime ransomware per parola chiave (nome azienda, dominio, ecc.) |
| `ransomwareByCountry` | Ottieni vittime ransomware filtrate per codice paese ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Ottieni vittime ransomware filtrate per settore/industria (sanità, finanza, ecc.) |
| `ransomlookGroups` | Elenca tutti i 582+ gruppi ransomware tracciati da RansomLook |
| `ransomlookRecent` | Recupera i post ransomware e le rivendicazioni di vittime più recenti da RansomLook |

</details>

<details>
<summary><b>Intelligence Violazioni &mdash; HIBP (7) &mdash; Parziale: alcuni strumenti gratuiti, la ricerca account richiede HIBP_API_KEY</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `breachList` | Elenca tutte le violazioni di dati note da HaveIBeenPwned, opzionalmente filtra per dominio &mdash; gratuito |
| `breachGet` | Ottieni dettagli di una violazione di dati specifica per nome &mdash; gratuito |
| `breachLatest` | Ottieni la violazione di dati aggiunta più di recente &mdash; gratuito |
| `breachDataClasses` | Elenca tutte le classi di dati (tipi di dati compromessi) note a HIBP &mdash; gratuito |
| `breachPassword` | Verifica se una password è apparsa in violazioni note (k-anonymity, solo prefisso SHA-1 di 5 caratteri inviato) &mdash; gratuito |
| `breachSearch` | Cerca tutte le violazioni per un account specifico (email/username) &mdash; richiede `HIBP_API_KEY` |
| `breachPastes` | Cerca un indirizzo email nelle paste pubblicate pubblicamente &mdash; richiede `HIBP_API_KEY` |

</details>

<details>
<summary><b>Suite abuse.ch (9) &mdash; Nessuna chiave API (ABUSECH_AUTH_KEY opzionale per limiti più elevati)</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `threatfoxGetIocs` | Ottieni IOC recenti da ThreatFox segnalati negli ultimi N giorni |
| `threatfoxSearch` | Cerca IOC ThreatFox per IP, dominio, hash o URL |
| `threatfoxTag` | Cerca IOC ThreatFox per tag (es. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Cerca IOC ThreatFox per famiglia di malware usando la nomenclatura Malpedia |
| `urlhausLookup` | Cerca un URL o host in URLhaus per distribuzione malware |
| `urlhausTag` | Cerca voci URLhaus per tag |
| `bazaarHash` | Cerca un campione di malware in MalwareBazaar tramite hash MD5, SHA1 o SHA256 |
| `bazaarRecent` | Ottieni i campioni di malware più recentemente inviati da MalwareBazaar |
| `bazaarTag` | Cerca MalwareBazaar per tag o nome firma YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Nessuna chiave API (OTX_API_KEY opzionale per limiti più elevati)</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `otx_ip` | Cerca threat intelligence per un indirizzo IP &mdash; info pulse, reputazione, paese, ASN |
| `otx_domain` | Cerca threat intelligence per un dominio &mdash; info pulse, whois, reputazione |
| `otx_hash` | Cerca threat intelligence per un hash di file (MD5, SHA1, SHA256) |
| `otx_cve` | Cerca threat intelligence per un CVE &mdash; pulse e indicatori correlati |
| `otx_search_pulses` | Cerca threat pulse OTX per parola chiave |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Richiede ABUSEIPDB_API_KEY</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `abuseipdb_check` | Verifica un indirizzo IP per segnalazioni di abuso &mdash; punteggio di confidenza, ISP, paese, conteggio segnalazioni |
| `abuseipdb_reports` | Ottieni segnalazioni di abuso individuali per un IP con commenti dettagliati e categorie |
| `abuseipdb_blacklist` | Ottieni la blacklist di AbuseIPDB degli indirizzi IP malevoli più segnalati |
| `abuseipdb_check_block` | Verifica un intero blocco di rete CIDR per segnalazioni di abuso |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Nessuna chiave API</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `greynoise_ip` | Cerca un IP su GreyNoise &mdash; classificazione (benigno/malevolo/sconosciuto), stato scanner |
| `greynoise_check` | Controllo rapido: questo IP è uno scanner noto o un servizio benigno noto? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Nessuna chiave API (PULSEDIVE_API_KEY opzionale per limiti più elevati)</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `pulsedive_indicator` | Cerca un indicatore (IP, dominio, URL o hash) &mdash; livello di rischio, minacce, feed |
| `pulsedive_search` | Cerca indicatori Pulsedive per valore |
| `pulsedive_explore` | Esplora indicatori collegati usando query avanzate (IOC correlati con livelli di rischio) |

</details>

<details>
<summary><b>Log Stealer Hudson Rock (3) &mdash; Richiede HUDSONROCK_API_KEY</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `stealer_domain` | Cerca voci log stealer per dominio &mdash; macchine compromesse, credenziali, dettagli malware |
| `stealer_email` | Cerca log stealer per indirizzo email &mdash; macchine compromesse con quell'email nelle credenziali del browser |
| `stealer_ip` | Cerca log stealer per indirizzo IP &mdash; macchine compromesse originate da quell'IP |

</details>

<details>
<summary><b>Exploit Vulners (3) &mdash; Nessuna chiave API (VULNERS_API_KEY opzionale per la ricerca)</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `vulners_search` | Cerca nel database vulnerabilità Vulners usando query Lucene |
| `vulners_id` | Cerca una vulnerabilità o exploit specifico per ID (CVE, EDB, GHSA) &mdash; gratuito |
| `vulners_exploit` | Cerca specificamente exploit (voci ExploitDB) |

</details>

<details>
<summary><b>Intelligence Blockchain (4) &mdash; Nessuna chiave API</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `btc_address` | Cerca un indirizzo Bitcoin &mdash; saldo, conteggio transazioni, transazioni recenti |
| `btc_balance` | Ottieni il saldo di un indirizzo Bitcoin in satoshi (controllo rapido senza storico completo) |
| `btc_tx` | Ottieni informazioni dettagliate su una transazione Bitcoin per hash &mdash; input, output, commissioni, info blocco |
| `btc_abuse_check` | Verifica un indirizzo Bitcoin per segnalazioni di abuso su ChainAbuse &mdash; segnalazioni di truffa con categorie |

</details>

<details>
<summary><b>Malware Hybrid Analysis (3) &mdash; Richiede HYBRID_API_KEY</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `malware_search` | Cerca nella sandbox Hybrid Analysis per hash di file &mdash; verdetto, tasso di rilevamento AV, dettagli analisi |
| `malware_overview` | Panoramica completa dell'analisi malware &mdash; tecniche MITRE ATT&CK, indicatori di rete, processi |
| `malware_feed` | Ottieni l'ultimo feed di detonazione malware &mdash; campioni recentemente analizzati con verdetti |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; Nessuna chiave API</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `onion_lookup` | Cerca metadati per un indirizzo .onion tramite il progetto CIRCL AIL &mdash; primo/ultimo avvistamento, stato, tag, certificati, porte, indirizzi BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Richiede INTELX_API_KEY</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `intelx_search` | Avvia una ricerca su IntelligenceX per dati trapelati, contenuti del dark web e altro |
| `intelx_search_results` | Recupera risultati per una ricerca IntelligenceX per ID |
| `intelx_phonebook` | Ricerca phonebook &mdash; trova email, domini, URL associati a un termine |
| `intelx_phonebook_results` | Recupera risultati della ricerca phonebook per ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Nessuna chiave API (PHISHTANK_API_KEY opzionale per limiti più elevati)</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `phishing_check` | Verifica se un URL è un sito di phishing noto tramite PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Nessuna chiave API</b></summary>

| Strumento | Descrizione |
|-----------|-------------|
| `darknet_list_sources` | Elenca tutte le fonti dati disponibili con stato configurazione, stato chiave API e conteggio strumenti |

</details>

---

### Utilizzo CLI

```bash
# Elenca tutti gli strumenti disponibili
npx darknet-mcp-server --list

# Verifica connettività proxy Tor SOCKS5
npx darknet-mcp-server --check-tor

# Esegui qualsiasi strumento direttamente
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Strumenti che richiedono chiavi API
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Fonti Dati (16)

| Fonte | Autenticazione | Limite Richieste | Cosa fornisce |
|-------|----------------|-----------------|---------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | Ricerca violazioni, ricerca paste, controllo password, elenchi violazioni |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Contenuti dark web, ricerca dati trapelati, phonebook (email/domini/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | Opzionale | 1 req/s | Threat intel per IP, domini, hash, CVE; ricerca threat pulse |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | Segnalazioni abuso IP, punteggio di confidenza, blacklist, controllo blocco CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Opzionale | 2 req/s | Ricerca IOC, tracciamento famiglie malware, ricerca per tag |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Opzionale | 2 req/s | Tracciamento URL distribuzione malware, ricerca host/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Opzionale | 2 req/s | Repository campioni malware, ricerca hash, ricerca firme YARA |
| [GreyNoise](https://www.greynoise.io) | Nessuna | 1 req/s | Classificazione IP (benigno/malevolo), rilevamento scanner internet |
| [Pulsedive](https://pulsedive.com) | Opzionale | 1 req/s | Arricchimento indicatori, punteggio di rischio, esplorazione IOC collegati |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Ricerca log stealer per dominio, email o IP |
| [Vulners](https://vulners.com) | Opzionale | 1 req/s | Database vulnerabilità/exploit, ricerca CVE, ricerca ExploitDB |
| [Blockchain.info](https://blockchain.info) | Nessuna | 1 req/s | Ricerca indirizzo Bitcoin, saldo, dettagli transazioni |
| [ChainAbuse](https://www.chainabuse.com) | Nessuna | 1 req/s | Segnalazioni abuso/truffa indirizzo Bitcoin |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Detonazione malware in sandbox, mappatura MITRE ATT&CK, feed campioni |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Nessuna | 0.5 req/s | Metadati indirizzi .onion, primo/ultimo avvistamento, indirizzi BTC associati |
| [Tor Network](https://www.torproject.org) | Nessuna | N/A | Lista nodi di uscita, recupero/scraping .onion, ricerca Ahmia.fi |

---

## Architettura

```
src/
  index.ts                # Punto di ingresso CLI (--help, --list, --check-tor, server stdio)
  protocol/
    mcp-server.ts         # Configurazione server MCP (trasporto stdio)
    tools.ts              # Registro strumenti — tutti i 66 strumenti assemblati qui
  types/
    index.ts              # Tipi condivisi (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Limitatore di richieste per provider
    cache.ts              # Cache TTL per risposte API
    tor-fetch.ts          # Client HTTP proxy Tor SOCKS5
    require-key.ts        # Helper validazione chiave API
  tor/                    # Strumenti Rete Tor (7)
  ransomware/             # Strumenti Intelligence Ransomware (9)
  breach/                 # Strumenti Violazioni HIBP (7)
  abusech/                # Strumenti ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Strumenti AlienVault OTX (5)
  abuseipdb/              # Strumenti AbuseIPDB (4)
  greynoise/              # Strumenti GreyNoise Community (2)
  pulsedive/              # Strumenti Pulsedive (3)
  hudsonrock/             # Strumenti log stealer Hudson Rock (3)
  vulners/                # Strumenti exploit Vulners (3)
  blockchain/             # Strumenti Intelligence Blockchain (4)
  hybrid/                 # Strumenti malware Hybrid Analysis (3)
  onionlookup/            # Strumento CIRCL Onion Lookup (1)
  intelx/                 # Strumenti IntelligenceX (4)
  phishing/               # Strumento PhishTank (1)
  meta/                   # Strumenti Meta (1)
```

**Decisioni di progettazione:**

- **16 provider, 1 server** &mdash; Ogni fonte dati è un modulo indipendente. L'agente sceglie quali strumenti usare in base alla query.
- **Limitatori di richieste per provider** &mdash; Ogni fonte dati ha la propria istanza di `RateLimiter` calibrata sui limiti di quella API. Nessun collo di bottiglia condiviso.
- **Cache TTL** &mdash; I dati ransomware (15min), le liste violazioni (10min), i risultati abuse.ch (5min) sono memorizzati in cache per evitare chiamate API ridondanti durante flussi di lavoro multi-strumento.
- **Degradazione graduale** &mdash; Le chiavi API mancanti non mandano in crash il server. Gli strumenti restituiscono messaggi di errore descrittivi: "Imposta HIBP_API_KEY per abilitare la ricerca account violazioni."
- **Prevenzione DNS leak** &mdash; Gli strumenti Tor .onion usano il protocollo `socks5h://` per risolvere il DNS tramite Tor, prevenendo leak DNS verso il resolver locale.
- **4 dipendenze** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` e `cheerio`. Tutto l'HTTP clearnet tramite `fetch` nativo. Tutto il traffico Tor tramite SOCKS5.

---

## Limitazioni

- La ricerca account/paste HIBP richiede una chiave API a pagamento ($3.50/mese)
- IntelligenceX, AbuseIPDB, Hudson Rock e Hybrid Analysis richiedono chiavi API per i loro strumenti
- Gli strumenti Tor .onion richiedono un proxy Tor SOCKS5 in esecuzione (non incluso)
- Il livello gratuito di abuse.ch ha limiti di richieste più bassi senza `ABUSECH_AUTH_KEY`
- I dati di Ransomware.live e RansomLook dipendono dalla frequenza di scraping upstream
- Gli strumenti blockchain supportano solo Bitcoin (nessun Ethereum/Monero)
- Il database PhishTank può essere in ritardo rispetto alle campagne di phishing in tempo reale
- Testato su macOS / Linux (Windows non testato)

---

## Parte della Suite di Sicurezza MCP

| Progetto | Dominio | Strumenti |
|----------|---------|-----------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Test di sicurezza basato su browser | 39 strumenti, Firefox, test di injection |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Sicurezza cloud (AWS/Azure/GCP) | 38 strumenti, 60+ controlli |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Postura di sicurezza GitHub | 39 strumenti, 45 controlli |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Intelligence vulnerabilità | 23 strumenti, 5 fonti |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT e ricognizione | 37 strumenti, 12 fonti |
| **darknet-mcp-server** | **Dark web e intelligence sulle minacce** | **66 strumenti, 16 fonti** |

---

<p align="center">
<b>Solo per test di sicurezza e valutazioni autorizzate.</b><br>
Assicurati sempre di avere la corretta autorizzazione prima di eseguire raccolta di intelligence su qualsiasi obiettivo.
</p>

<p align="center">
  <a href="LICENSE">Licenza MIT</a> &bull; Costruito con Bun + TypeScript
</p>
