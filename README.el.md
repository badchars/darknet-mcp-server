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
  <a href="README.no.md">Norsk</a> |
  <a href="README.pt-BR.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <strong>Ελληνικά</strong> |
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

<h3 align="center">Πληροφορίες σκοτεινού ιστού και απειλών για AI agents.</h3>

<p align="center">
  HIBP, ThreatFox, παρακολούθηση ransomware, πρόσβαση σε Tor .onion, πληροφορίες blockchain, αναζήτηση exploits, αρχεία καταγραφής stealers, ανάλυση κακόβουλου λογισμικού &mdash; ενοποιημένα σε έναν μοναδικό MCP server.<br>
  Ο AI agent σας αποκτά <b>πληροφορίες πλήρους φάσματος από τον σκοτεινό ιστό κατ' απαίτηση</b>, όχι 16 καρτέλες browser και χειροκίνητη συσχέτιση.
</p>

<br>

<p align="center">
  <a href="#το-πρόβλημα">Το Πρόβλημα</a> &bull;
  <a href="#πώς-διαφέρει">Πώς Διαφέρει</a> &bull;
  <a href="#γρήγορη-εκκίνηση">Γρήγορη Εκκίνηση</a> &bull;
  <a href="#τι-μπορεί-να-κάνει-το-ai">Τι Μπορεί να Κάνει το AI</a> &bull;
  <a href="#αναφορά-εργαλείων-66-εργαλεία">Εργαλεία (66)</a> &bull;
  <a href="#πηγές-δεδομένων-16">Πηγές Δεδομένων</a> &bull;
  <a href="#αρχιτεκτονική">Αρχιτεκτονική</a> &bull;
  <a href="CHANGELOG.md">Αρχείο Αλλαγών</a> &bull;
  <a href="CONTRIBUTING.md">Συνεισφορά</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Άδεια"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Εργαλεία">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Πηγές">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="Demo darknet-mcp-server" width="800">
</p>

---

## Το Πρόβλημα

Οι πληροφορίες του σκοτεινού ιστού είναι το ελλείπον στρώμα σε κάθε έρευνα ασφάλειας. Βάσεις δεδομένων παραβιάσεων, ιχνηλάτες ransomware, κρυφές υπηρεσίες Tor, sandboxes κακόβουλου λογισμικού, αρχεία καταγραφής stealers, εγκληματολογία blockchain, βάσεις exploits &mdash; τα δεδομένα που χρειάζεστε είναι διασκορπισμένα σε δεκάδες πλατφόρμες, η καθεμία με το δικό της API, την αυθεντικοποίησή της, τα όρια ρυθμού της, τη μορφή εξόδου της. Σήμερα ελέγχετε το HIBP σε μία καρτέλα, το ThreatFox σε μία άλλη, περιηγείστε σε ιστοσελίδες διαρροών ransomware μέσω Tor, αναζητάτε ένα hash στο MalwareBazaar, ελέγχετε συναλλαγές blockchain σε έναν block explorer, και μετά ξοδεύετε μία ώρα συνδέοντας τα χειροκίνητα.

```
Παραδοσιακή ροή εργασίας πληροφοριών σκοτεινού ιστού:
  έλεγχος έκθεσης σε παραβιάσεις       ->  Διεπαφή web HIBP (πληρωμένο API)
  αναζήτηση διαρρευμένων διαπιστευτηρίων ->  Διεπαφή web IntelligenceX
  παρακολούθηση ομάδων ransomware       ->  ransomware.live + ransomlook.io (2 ξεχωριστά UI)
  πρόσβαση σε κρυφές υπηρεσίες .onion  ->  Χειροκίνητα Tor Browser
  ανάλυση δειγμάτων κακόβουλου λογ.     ->  Hybrid Analysis + MalwareBazaar (2 ακόμα UI)
  έλεγχος ιστορικού κακοποίησης IP      ->  AbuseIPDB + GreyNoise (2 ακόμα UI)
  ιχνηλάτηση κρυπτονομισμάτων           ->  blockchain.info + ChainAbuse
  αναζήτηση exploits                    ->  Διεπαφή web Vulners
  έλεγχος URL phishing                  ->  Διεπαφή web PhishTank
  συσχέτιση όλων                        ->  αντιγραφή-επικόλληση σε αναφορά
  ────────────────────────────────
  Σύνολο: 60+ λεπτά ανά έρευνα, το μεγαλύτερο μέρος σε εναλλαγή περιβάλλοντος
```

**darknet-mcp-server** δίνει στον AI agent σας 66 εργαλεία από 16 πηγές δεδομένων μέσω του [Model Context Protocol](https://modelcontextprotocol.io). Ο agent ρωτά όλες τις πηγές παράλληλα, συσχετίζει δεδομένα από τον επιφανειακό και τον σκοτεινό ιστό, εντοπίζει απειλές και παρουσιάζει μια ενοποιημένη εικόνα πληροφοριών &mdash; σε μία μοναδική συνομιλία.

```
Με darknet-mcp-server:
  Εσείς: "Ερευνήστε την έκθεση σε παραβιάσεις και το τοπίο απειλών για το target.com"

  Agent: -> HIBP: 3 γνωστές παραβιάσεις (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOCs που σχετίζονται με το domain (C2 callback, phishing)
         -> URLhaus: 1 κακόβουλο URL σε subdomain
         -> Ransomware: Δεν βρέθηκαν καταχωρήσεις θυμάτων (καλό)
         -> Αρχεία stealers: Βρέθηκαν 47 παραβιασμένα διαπιστευτήρια εργαζομένων
         -> OTX: 5 pulses απειλών που αναφέρουν το domain
         -> AbuseIPDB: Η κύρια IP έχει 12 αναφορές κακοποίησης (brute force)
         -> "Το target.com ήταν σε 3 παραβιάσεις δεδομένων εκθέτοντας 2,1M εγγραφές.
            47 διαπιστευτήρια εργαζομένων βρέθηκαν σε αρχεία stealers —
            συνιστάται άμεση επαναφορά κωδικών. 2 ενεργά ThreatFox IOCs
            υποδεικνύουν τρέχουσα στοχοποίηση. Δεν υπάρχουν καταχωρήσεις
            ransomware, αλλά οι αναφορές κακοποίησης στην κύρια IP
            χρήζουν διερεύνησης."
```

---

## Πώς Διαφέρει

Τα υπάρχοντα εργαλεία σας δίνουν ακατέργαστα δεδομένα από μία πηγή τη φορά. Το darknet-mcp-server δίνει στον AI agent σας τη δυνατότητα να **συλλογίζεται ταυτόχρονα πάνω σε πληροφορίες επιφανειακού και σκοτεινού ιστού**.

<table>
<thead>
<tr>
<th></th>
<th>Παραδοσιακή Προσέγγιση</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Διεπαφή</b></td>
<td>16 διαφορετικά web UIs, CLIs και APIs</td>
<td>MCP &mdash; ο AI agent καλεί εργαλεία συνομιλιακά</td>
</tr>
<tr>
<td><b>Πηγές δεδομένων</b></td>
<td>Μία πλατφόρμα τη φορά</td>
<td>16 πηγές ρωτούνται παράλληλα</td>
</tr>
<tr>
<td><b>Πληροφορίες παραβιάσεων</b></td>
<td>HIBP web UI για παραβιάσεις, IntelligenceX για διαρροές</td>
<td>Ο agent συνδυάζει παραβιάσεις HIBP + pastes + IntelligenceX + αρχεία stealers</td>
</tr>
<tr>
<td><b>Πρόσβαση σκοτεινού ιστού</b></td>
<td>Χειροκίνητο Tor Browser, αντιγραφή-επικόλληση από .onion sites</td>
<td>Ο agent ανακτά, αναλύει και αναζητά .onion sites μέσω SOCKS5 proxy</td>
</tr>
<tr>
<td><b>Ανάλυση κακόβουλου λογ.</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox ξεχωριστά</td>
<td>Ο agent κάνει διασταυρούμενη αναφορά: "Αυτό το hash από το ThreatFox αναλύθηκε επίσης στο Hybrid Analysis με δικτυακά IOCs"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Block explorer + ChainAbuse ξεχωριστά</td>
<td>Ο agent ιχνηλατεί BTC συναλλαγές και ελέγχει αναφορές κακοποίησης σε ένα βήμα</td>
</tr>
<tr>
<td><b>API κλειδιά</b></td>
<td>Απαιτούνται για σχεδόν τα πάντα</td>
<td>Πολλά εργαλεία λειτουργούν δωρεάν· τα API κλειδιά ξεκλειδώνουν premium πηγές</td>
</tr>
<tr>
<td><b>Εγκατάσταση</b></td>
<td>Εγκατάσταση κάθε εργαλείου, διαχείριση κάθε config, εκτέλεση Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; μία εντολή, μηδενική ρύθμιση</td>
</tr>
</tbody>
</table>

---

## Γρήγορη Εκκίνηση

### Επιλογή 1: npx (χωρίς εγκατάσταση)

```bash
npx darknet-mcp-server
```

Τα δωρεάν εργαλεία λειτουργούν αμέσως. Δεν απαιτούνται API κλειδιά για παρακολούθηση ransomware, λίστες παραβιάσεων, GreyNoise, blockchain, OTX και άλλα.

### Επιλογή 2: Κλωνοποίηση

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Μεταβλητές περιβάλλοντος (προαιρετικά)

```bash
# Πληροφορίες παραβιάσεων και διαπιστευτηρίων
export HIBP_API_KEY=your-key           # Ενεργοποιεί αναζήτηση λογαριασμών σε παραβιάσεις και αναζήτηση pastes
export INTELX_API_KEY=your-key         # Ενεργοποιεί 4 εργαλεία IntelligenceX

# Πληροφορίες απειλών
export OTX_API_KEY=your-key            # Αυξάνει τα όρια ρυθμού AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Ενεργοποιεί 4 εργαλεία AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Υψηλότερα όρια ρυθμού για τη σουίτα abuse.ch
export PULSEDIVE_API_KEY=your-key      # Υψηλότερα όρια ρυθμού για Pulsedive

# Αρχεία stealers και διαπιστευτήρια
export HUDSONROCK_API_KEY=your-key     # Ενεργοποιεί 3 εργαλεία αρχείων stealers Hudson Rock

# Ανάλυση exploits και κακόβουλου λογισμικού
export VULNERS_API_KEY=your-key        # Ενεργοποιεί αναζήτηση Vulners και εργαλεία exploits
export HYBRID_API_KEY=your-key         # Ενεργοποιεί 3 εργαλεία ανάλυσης κακόβουλου λογισμικού Hybrid Analysis

# Phishing
export PHISHTANK_API_KEY=your-key      # Υψηλότερα όρια ρυθμού για PhishTank

# Tor SOCKS5 proxy (για πρόσβαση .onion)
export TOR_SOCKS_HOST=127.0.0.1       # Προεπιλογή: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Προεπιλογή: 9050
```

Όλα τα API κλειδιά είναι προαιρετικά. Χωρίς αυτά, εξακολουθείτε να έχετε παρακολούθηση ransomware, λίστες παραβιάσεων, GreyNoise, πληροφορίες blockchain, OTX, ελέγχους κόμβων εξόδου Tor, αναζήτηση onion, CIRCL onion lookup και άλλα.

### Σύνδεση με τον AI agent σας

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Με npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Με τοπικό κλώνο
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Προσθέστε στο `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / άλλοι MCP clients</b></summary>

Ίδια μορφή JSON config. Κατευθύνετε την εντολή στο `npx darknet-mcp-server` ή τη διαδρομή τοπικής εγκατάστασης.

</details>

### Ρύθμιση Tor (προαιρετικά, για πρόσβαση .onion)

Τα 7 εργαλεία Tor (`tor_fetch_onion`, `tor_scrape_onion` κ.λπ.) απαιτούν έναν εκτελούμενο Tor SOCKS5 proxy.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Επαλήθευση συνδεσιμότητας
npx darknet-mcp-server --check-tor
```

### Ξεκινήστε τα ερωτήματα

```
Εσείς: "Ελέγξτε αν το example.com έχει εμφανιστεί σε παραβιάσεις δεδομένων και ψάξτε για αρχεία stealers"
```

Αυτό είναι όλο. Ο agent χειρίζεται αυτόματα αναζητήσεις παραβιάσεων, αναζητήσεις διαπιστευτηρίων, συσχέτιση απειλών και άλλα.

---

## Τι Μπορεί να Κάνει το AI

### Έρευνα Παραβιάσεων

```
Εσείς: "Ελέγξτε αν το example.com έχει εμφανιστεί σε παραβιάσεις δεδομένων"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "Το example.com εμφανίζεται σε 5 γνωστές παραβιάσεις:
          - ExampleDB 2023: 4,2M εγγραφές (emails, κωδικοί, IPs)
          - Collection #1: λίστα credential stuffing
          - Combolist 2024: 890K ζεύγη email:κωδικός
          Αρχεία stealers: 23 παραβιασμένα μηχανήματα με αποθηκευμένα
          διαπιστευτήρια για example.com βρέθηκαν στη βάση Hudson Rock.
          IntelligenceX: 47 αποτελέσματα σε paste sites και σκοτεινό ιστό."
```

### Παρακολούθηση Ransomware

```
Εσείς: "Ποιες ομάδες ransomware στοχεύουν την υγειονομική περίθαλψη;"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Δραστηριότητα ransomware στον τομέα υγειονομικής περίθαλψης:
          142 θύματα σε 12 ομάδες τους τελευταίους 12 μήνες.
          Κορυφαίες ομάδες: LockBit3 (38 θύματα), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Πιο πρόσφατο: MedCorp Inc. καταχωρήθηκε από LockBit3 (πριν 2 μέρες).
          3 νέα θύματα υγειονομικής περίθαλψης την τελευταία εβδομάδα
          στις ροές ransomware.live και RansomLook."
```

### Αναγνώριση Σκοτεινού Ιστού

```
Εσείς: "Αναζητήστε αναφορές της εταιρείας μας σε .onion sites"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Αποτελέσματα αναζήτησης σκοτεινού ιστού για AcmeCorp:
          Ahmia.fi: 3 σελίδες .onion αναφέρουν την AcmeCorp
          - Δημοσίευση σε forum που συζητά λίστα εργαζομένων AcmeCorp (forum διαρροών)
          - Καταχώρηση σε marketplace για βάση δεδομένων AcmeCorp (ανεπαλήθευτο)
          - Δημοσίευση blog που αναφέρεται σε παραβίαση AcmeCorp
          IntelligenceX: 12 αποτελέσματα σε paste sites
          Σύσταση: διερεύνηση της δημοσίευσης στο forum και της καταχώρησης
          στο marketplace για πιθανή ενεργή πώληση δεδομένων."
```

### Ανάλυση Κακόβουλου Λογισμικού

```
Εσείς: "Αναλύστε αυτό το file hash για δείκτες κακόβουλου λογισμικού: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Ανάλυση κακόβουλου λογισμικού για abc123def456:
          Hybrid Analysis: ΚΑΚΟΒΟΥΛΟ (βαθμολογία απειλής 95/100)
          - Οικογένεια: AgentTesla (stealer πληροφοριών)
          - MITRE ATT&CK: T1555 (Πρόσβαση Διαπιστευτηρίων), T1071 (C2)
          - Δικτυακά IOCs: 3 C2 domains, 2 IPs
          MalwareBazaar: Πρώτη εμφάνιση 2024-03-15, ετικέτα 'AgentTesla'
          ThreatFox: 2 καταχωρήσεις IOC που συνδέονται με την ίδια εκστρατεία
          OTX: Αναφέρεται σε 4 pulses απειλών"
```

---

## Αναφορά Εργαλείων (66 εργαλεία)

<details open>
<summary><b>Δίκτυο Tor (7) &mdash; Χωρίς API κλειδί (απαιτείται daemon Tor για εργαλεία .onion)</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `tor_status` | Ελέγξτε αν ο τοπικός Tor SOCKS5 proxy daemon εκτελείται και είναι προσβάσιμος |
| `tor_fetch_onion` | Ανάκτηση ακατέργαστου HTML από .onion URL μέσω Tor SOCKS5 proxy (πρόληψη διαρροής DNS μέσω socks5h) |
| `tor_scrape_onion` | Ανάκτηση και ανάλυση .onion site &mdash; επιστρέφει δομημένα δεδομένα: τίτλο, συνδέσμους, κείμενο |
| `tor_search_onion` | Αναζήτηση .onion sites χρησιμοποιώντας τη μηχανή αναζήτησης Ahmia.fi |
| `tor_exit_nodes` | Λήψη τρεχουσών IP κόμβων εξόδου Tor από την επίσημη μαζική λίστα εξόδου του Tor Project |
| `tor_exit_check` | Ελέγξτε αν μια συγκεκριμένη IP είναι γνωστός κόμβος εξόδου Tor |
| `tor_exit_details` | Λεπτομερείς πληροφορίες κόμβου εξόδου Tor συμπεριλαμβανομένων αποτυπωμάτων και χρονοσημάτων δημοσίευσης |

</details>

<details>
<summary><b>Πληροφορίες Ransomware (9) &mdash; Χωρίς API κλειδί</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `ransomwareRecent` | Ανάκτηση πιο πρόσφατων θυμάτων ransomware από το ransomware.live |
| `ransomwareGroups` | Λίστα όλων των γνωστών ομάδων ransomware που παρακολουθούνται από το ransomware.live |
| `ransomwareGroup` | Λεπτομερές προφίλ μιας συγκεκριμένης ομάδας ransomware κατά όνομα |
| `ransomwareGroupVictims` | Όλα τα θύματα που διεκδικεί μια συγκεκριμένη ομάδα ransomware |
| `ransomwareSearch` | Αναζήτηση θυμάτων ransomware κατά λέξη-κλειδί (όνομα εταιρείας, domain κ.λπ.) |
| `ransomwareByCountry` | Θύματα ransomware φιλτραρισμένα κατά κωδικό χώρας ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Θύματα ransomware φιλτραρισμένα κατά τομέα/κλάδο (υγεία, χρηματοοικονομικά κ.λπ.) |
| `ransomlookGroups` | Λίστα όλων 582+ ομάδων ransomware που παρακολουθούνται από το RansomLook |
| `ransomlookRecent` | Πιο πρόσφατες δημοσιεύσεις ransomware και διεκδικήσεις θυμάτων από το RansomLook |

</details>

<details>
<summary><b>Πληροφορίες Παραβιάσεων &mdash; HIBP (7) &mdash; Μερικώς: ορισμένα εργαλεία δωρεάν, αναζήτηση λογαριασμών απαιτεί HIBP_API_KEY</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `breachList` | Λίστα όλων γνωστών παραβιάσεων δεδομένων από HaveIBeenPwned, προαιρετικό φιλτράρισμα κατά domain &mdash; δωρεάν |
| `breachGet` | Λεπτομέρειες μιας συγκεκριμένης παραβίασης δεδομένων κατά όνομα &mdash; δωρεάν |
| `breachLatest` | Η πιο πρόσφατα προστεθείσα παραβίαση δεδομένων &mdash; δωρεάν |
| `breachDataClasses` | Λίστα όλων κλάσεων δεδομένων (τύποι παραβιασμένων δεδομένων) γνωστών στο HIBP &mdash; δωρεάν |
| `breachPassword` | Ελέγξτε αν ένας κωδικός έχει εμφανιστεί σε γνωστές παραβιάσεις (k-ανωνυμία, αποστέλλεται μόνο 5-χαρακτήρων SHA-1 πρόθεμα) &mdash; δωρεάν |
| `breachSearch` | Αναζήτηση όλων παραβιάσεων για συγκεκριμένο λογαριασμό (email/username) &mdash; απαιτεί `HIBP_API_KEY` |
| `breachPastes` | Αναζήτηση email σε δημόσια pastes &mdash; απαιτεί `HIBP_API_KEY` |

</details>

<details>
<summary><b>Σουίτα abuse.ch (9) &mdash; Χωρίς API κλειδί (ABUSECH_AUTH_KEY προαιρετικό για υψηλότερο ρυθμό)</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `threatfoxGetIocs` | Πρόσφατα IOCs από ThreatFox που αναφέρθηκαν τις τελευταίες N μέρες |
| `threatfoxSearch` | Αναζήτηση ThreatFox IOCs κατά IP, domain, hash ή URL |
| `threatfoxTag` | Αναζήτηση ThreatFox IOCs κατά ετικέτα (π.χ. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Αναζήτηση ThreatFox IOCs κατά οικογένεια κακόβουλου λογισμικού με ονοματολογία Malpedia |
| `urlhausLookup` | Αναζήτηση URL ή host στο URLhaus για διανομή κακόβουλου λογισμικού |
| `urlhausTag` | Αναζήτηση καταχωρήσεων URLhaus κατά ετικέτα |
| `bazaarHash` | Αναζήτηση δείγματος κακόβουλου λογισμικού στο MalwareBazaar κατά hash MD5, SHA1 ή SHA256 |
| `bazaarRecent` | Πιο πρόσφατα υποβληθέντα δείγματα κακόβουλου λογισμικού από MalwareBazaar |
| `bazaarTag` | Αναζήτηση MalwareBazaar κατά ετικέτα ή όνομα υπογραφής YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Χωρίς API κλειδί (OTX_API_KEY προαιρετικό για υψηλότερο ρυθμό)</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `otx_ip` | Αναζήτηση πληροφοριών απειλών για IP &mdash; πληροφορίες pulse, φήμη, χώρα, ASN |
| `otx_domain` | Αναζήτηση πληροφοριών απειλών για domain &mdash; πληροφορίες pulse, whois, φήμη |
| `otx_hash` | Αναζήτηση πληροφοριών απειλών για file hash (MD5, SHA1, SHA256) |
| `otx_cve` | Αναζήτηση πληροφοριών απειλών για CVE &mdash; σχετικά pulses και δείκτες |
| `otx_search_pulses` | Αναζήτηση OTX threat pulses κατά λέξη-κλειδί |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Απαιτεί ABUSEIPDB_API_KEY</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `abuseipdb_check` | Έλεγχος IP για αναφορές κακοποίησης &mdash; βαθμολογία εμπιστοσύνης, ISP, χώρα, αριθμός αναφορών |
| `abuseipdb_reports` | Μεμονωμένες αναφορές κακοποίησης για IP με λεπτομερή σχόλια και κατηγορίες |
| `abuseipdb_blacklist` | Μαύρη λίστα AbuseIPDB με τις πιο αναφερόμενες κακόβουλες IPs |
| `abuseipdb_check_block` | Έλεγχος ολόκληρου δικτυακού μπλοκ CIDR για αναφορές κακοποίησης |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Χωρίς API κλειδί</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `greynoise_ip` | Αναζήτηση IP στο GreyNoise &mdash; ταξινόμηση (καλοπροαίρετο/κακόβουλο/άγνωστο), κατάσταση scanner |
| `greynoise_check` | Γρήγορος έλεγχος: είναι αυτή η IP γνωστός scanner ή γνωστή καλοπροαίρετη υπηρεσία; |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Χωρίς API κλειδί (PULSEDIVE_API_KEY προαιρετικό για υψηλότερο ρυθμό)</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `pulsedive_indicator` | Αναζήτηση δείκτη (IP, domain, URL ή hash) &mdash; επίπεδο κινδύνου, απειλές, feeds |
| `pulsedive_search` | Αναζήτηση δεικτών Pulsedive κατά τιμή |
| `pulsedive_explore` | Εξερεύνηση συνδεδεμένων δεικτών με προχωρημένα ερωτήματα (σχετικά IOCs με επίπεδα κινδύνου) |

</details>

<details>
<summary><b>Αρχεία Stealers Hudson Rock (3) &mdash; Απαιτεί HUDSONROCK_API_KEY</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `stealer_domain` | Αναζήτηση καταχωρήσεων stealers κατά domain &mdash; παραβιασμένα μηχανήματα, διαπιστευτήρια, λεπτομέρειες κακόβουλου λογισμικού |
| `stealer_email` | Αναζήτηση stealers κατά email &mdash; παραβιασμένα μηχανήματα με αυτό το email σε αποθηκευμένα διαπιστευτήρια browser |
| `stealer_ip` | Αναζήτηση stealers κατά IP &mdash; παραβιασμένα μηχανήματα που προέρχονται από αυτή την IP |

</details>

<details>
<summary><b>Exploits Vulners (3) &mdash; Χωρίς API κλειδί (VULNERS_API_KEY προαιρετικό για αναζήτηση)</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `vulners_search` | Αναζήτηση στη βάση ευπαθειών Vulners με ερωτήματα Lucene |
| `vulners_id` | Αναζήτηση συγκεκριμένης ευπάθειας ή exploit κατά ID (CVE, EDB, GHSA) &mdash; δωρεάν |
| `vulners_exploit` | Αναζήτηση ειδικά για exploits (καταχωρήσεις ExploitDB) |

</details>

<details>
<summary><b>Πληροφορίες Blockchain (4) &mdash; Χωρίς API κλειδί</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `btc_address` | Αναζήτηση Bitcoin διεύθυνσης &mdash; υπόλοιπο, αριθμός συναλλαγών, πρόσφατες συναλλαγές |
| `btc_balance` | Υπόλοιπο Bitcoin διεύθυνσης σε satoshi (γρήγορος έλεγχος χωρίς πλήρες ιστορικό) |
| `btc_tx` | Λεπτομερείς πληροφορίες συναλλαγής Bitcoin κατά hash &mdash; εισροές, εκροές, τέλη, πληροφορίες block |
| `btc_abuse_check` | Έλεγχος Bitcoin διεύθυνσης για αναφορές κακοποίησης στο ChainAbuse &mdash; αναφορές απάτης με κατηγορίες |

</details>

<details>
<summary><b>Κακόβουλο Λογισμικό Hybrid Analysis (3) &mdash; Απαιτεί HYBRID_API_KEY</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `malware_search` | Αναζήτηση στο sandbox Hybrid Analysis κατά file hash &mdash; ετυμηγορία, ρυθμός ανίχνευσης AV, λεπτομέρειες ανάλυσης |
| `malware_overview` | Πλήρης επισκόπηση ανάλυσης κακόβουλου λογισμικού &mdash; τεχνικές MITRE ATT&CK, δικτυακοί δείκτες, διεργασίες |
| `malware_feed` | Τελευταία ροή εκρήξεων κακόβουλου λογισμικού &mdash; πρόσφατα αναλυμένα δείγματα με ετυμηγορίες |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; Χωρίς API κλειδί</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `onion_lookup` | Αναζήτηση μεταδεδομένων .onion διεύθυνσης μέσω CIRCL AIL &mdash; πρώτη/τελευταία εμφάνιση, κατάσταση, ετικέτες, πιστοποιητικά, θύρες, BTC διευθύνσεις |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Απαιτεί INTELX_API_KEY</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `intelx_search` | Εκκίνηση αναζήτησης στο IntelligenceX για διαρρευμένα δεδομένα, περιεχόμενο σκοτεινού ιστού και άλλα |
| `intelx_search_results` | Ανάκτηση αποτελεσμάτων αναζήτησης IntelligenceX κατά ID |
| `intelx_phonebook` | Αναζήτηση τηλεφωνικού καταλόγου &mdash; εύρεση emails, domains, URLs σχετικών με έναν όρο |
| `intelx_phonebook_results` | Ανάκτηση αποτελεσμάτων αναζήτησης τηλεφωνικού καταλόγου κατά ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Χωρίς API κλειδί (PHISHTANK_API_KEY προαιρετικό για υψηλότερο ρυθμό)</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `phishing_check` | Ελέγξτε αν ένα URL είναι γνωστό phishing site μέσω PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Χωρίς API κλειδί</b></summary>

| Εργαλείο | Περιγραφή |
|------|-------------|
| `darknet_list_sources` | Λίστα όλων διαθέσιμων πηγών δεδομένων με κατάσταση ρύθμισης, κατάσταση API κλειδιών και αριθμό εργαλείων |

</details>

---

### Χρήση CLI

```bash
# Λίστα όλων διαθέσιμων εργαλείων
npx darknet-mcp-server --list

# Έλεγχος συνδεσιμότητας Tor SOCKS5 proxy
npx darknet-mcp-server --check-tor

# Εκτέλεση οποιουδήποτε εργαλείου απευθείας
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Εργαλεία που απαιτούν API κλειδιά
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Πηγές Δεδομένων (16)

| Πηγή | Αυθεντικοποίηση | Όριο Ρυθμού | Τι παρέχει |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 αίτ/1.5δ | Αναζήτηση παραβιάσεων, αναζήτηση pastes, έλεγχος κωδικών, λίστες παραβιάσεων |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 αίτ/δ | Περιεχόμενο σκοτεινού ιστού, αναζήτηση διαρρευμένων δεδομένων, τηλεφωνικός κατάλογος (emails/domains/URLs) |
| [AlienVault OTX](https://otx.alienvault.com) | Προαιρετικό | 1 αίτ/δ | Πληροφορίες απειλών για IPs, domains, hashes, CVEs· αναζήτηση threat pulses |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 αίτ/δ | Αναφορές κακοποίησης IP, βαθμολόγηση εμπιστοσύνης, μαύρη λίστα, έλεγχος CIDR block |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Προαιρετικό | 2 αίτ/δ | Αναζήτηση IOC, παρακολούθηση οικογενειών κακόβουλου λογισμικού, αναζήτηση κατά ετικέτα |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Προαιρετικό | 2 αίτ/δ | Παρακολούθηση URLs διανομής κακόβουλου λογισμικού, αναζήτηση host/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Προαιρετικό | 2 αίτ/δ | Αποθετήριο δειγμάτων κακόβουλου λογισμικού, αναζήτηση hash, αναζήτηση υπογραφών YARA |
| [GreyNoise](https://www.greynoise.io) | Κανένα | 1 αίτ/δ | Ταξινόμηση IP (καλοπροαίρετο/κακόβουλο), ανίχνευση scanner διαδικτύου |
| [Pulsedive](https://pulsedive.com) | Προαιρετικό | 1 αίτ/δ | Εμπλουτισμός δεικτών, βαθμολόγηση κινδύνου, εξερεύνηση συνδεδεμένων IOCs |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 αίτ/δ | Αναζήτηση αρχείων stealers κατά domain, email ή IP |
| [Vulners](https://vulners.com) | Προαιρετικό | 1 αίτ/δ | Βάση ευπαθειών/exploits, αναζήτηση CVE, αναζήτηση ExploitDB |
| [Blockchain.info](https://blockchain.info) | Κανένο | 1 αίτ/δ | Αναζήτηση Bitcoin διευθύνσεων, υπόλοιπο, λεπτομέρειες συναλλαγών |
| [ChainAbuse](https://www.chainabuse.com) | Κανένο | 1 αίτ/δ | Αναφορές κακοποίησης/απάτης Bitcoin διευθύνσεων |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 αίτ/δ | Sandbox εκτέλεσης κακόβουλου λογισμικού, χαρτογράφηση MITRE ATT&CK, ροή δειγμάτων |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Κανένο | 0.5 αίτ/δ | Μεταδεδομένα .onion διευθύνσεων, πρώτη/τελευταία εμφάνιση, σχετικές BTC διευθύνσεις |
| [Tor Network](https://www.torproject.org) | Κανένο | Δ/Ε | Λίστα κόμβων εξόδου, ανάκτηση/ανάλυση .onion, αναζήτηση Ahmia.fi |

---

## Αρχιτεκτονική

```
src/
  index.ts                # Σημείο εισόδου CLI (--help, --list, --check-tor, stdio server)
  protocol/
    mcp-server.ts         # Ρύθμιση MCP server (stdio transport)
    tools.ts              # Μητρώο εργαλείων — και τα 66 εργαλεία συναρμολογούνται εδώ
  types/
    index.ts              # Κοινοί τύποι (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Περιοριστής ρυθμού ανά πάροχο
    cache.ts              # TTL cache για απαντήσεις API
    tor-fetch.ts          # HTTP client Tor SOCKS5 proxy
    require-key.ts        # Βοηθητικό επικύρωσης API κλειδιών
  tor/                    # Εργαλεία δικτύου Tor (7)
  ransomware/             # Εργαλεία πληροφοριών Ransomware (9)
  breach/                 # Εργαλεία παραβιάσεων HIBP (7)
  abusech/                # Εργαλεία ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Εργαλεία AlienVault OTX (5)
  abuseipdb/              # Εργαλεία AbuseIPDB (4)
  greynoise/              # Εργαλεία GreyNoise Community (2)
  pulsedive/              # Εργαλεία Pulsedive (3)
  hudsonrock/             # Εργαλεία αρχείων stealers Hudson Rock (3)
  vulners/                # Εργαλεία exploits Vulners (3)
  blockchain/             # Εργαλεία πληροφοριών Blockchain (4)
  hybrid/                 # Εργαλεία κακόβουλου λογισμικού Hybrid Analysis (3)
  onionlookup/            # Εργαλείο CIRCL Onion Lookup (1)
  intelx/                 # Εργαλεία IntelligenceX (4)
  phishing/               # Εργαλείο PhishTank (1)
  meta/                   # Εργαλεία Meta (1)
```

**Σχεδιαστικές αποφάσεις:**

- **16 πάροχοι, 1 server** &mdash; Κάθε πηγή δεδομένων είναι ανεξάρτητο module. Ο agent επιλέγει ποια εργαλεία θα χρησιμοποιήσει με βάση το ερώτημα.
- **Περιοριστές ρυθμού ανά πάροχο** &mdash; Κάθε πηγή δεδομένων έχει τη δική της `RateLimiter` instance βαθμονομημένη στα όρια εκείνου του API. Κανένο κοινό bottleneck.
- **TTL caching** &mdash; Δεδομένα ransomware (15 λεπτά), λίστες παραβιάσεων (10 λεπτά), αποτελέσματα abuse.ch (5 λεπτά) αποθηκεύονται για αποφυγή περιττών κλήσεων API κατά τη διάρκεια ροών εργασίας πολλαπλών εργαλείων.
- **Ομαλή υποβάθμιση** &mdash; Ελλείποντα API κλειδιά δεν κρασάρουν τον server. Τα εργαλεία επιστρέφουν περιγραφικά μηνύματα σφάλματος: "Set HIBP_API_KEY to enable breach account search."
- **Πρόληψη διαρροής DNS** &mdash; Τα εργαλεία Tor .onion χρησιμοποιούν πρωτόκολλο `socks5h://` για επίλυση DNS μέσω Tor, αποτρέποντας διαρροές DNS στον τοπικό resolver.
- **4 εξαρτήσεις** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` και `cheerio`. Όλο το clearnet HTTP μέσω native `fetch`. Όλη η κίνηση Tor μέσω SOCKS5.

---

## Περιορισμοί

- Η αναζήτηση λογαριασμών/pastes HIBP απαιτεί πληρωμένο API κλειδί ($3.50/μήνα)
- IntelligenceX, AbuseIPDB, Hudson Rock και Hybrid Analysis απαιτούν API κλειδιά για τα εργαλεία τους
- Τα εργαλεία Tor .onion απαιτούν εκτελούμενο Tor SOCKS5 proxy (δεν περιλαμβάνεται)
- Η δωρεάν βαθμίδα abuse.ch έχει χαμηλότερα όρια ρυθμού χωρίς `ABUSECH_AUTH_KEY`
- Τα δεδομένα Ransomware.live και RansomLook εξαρτώνται από τη συχνότητα συλλογής upstream
- Τα εργαλεία blockchain υποστηρίζουν μόνο Bitcoin (χωρίς Ethereum/Monero)
- Η βάση PhishTank μπορεί να καθυστερεί σε σχέση με εκστρατείες phishing σε πραγματικό χρόνο
- Δοκιμασμένο σε macOS / Linux (δεν δοκιμάστηκε σε Windows)

---

## Μέρος της Σουίτας Ασφάλειας MCP

| Έργο | Τομέας | Εργαλεία |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Δοκιμές ασφάλειας μέσω browser | 39 εργαλεία, Firefox, δοκιμές injection |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Ασφάλεια cloud (AWS/Azure/GCP) | 38 εργαλεία, 60+ έλεγχοι |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Ασφάλεια GitHub | 39 εργαλεία, 45 έλεγχοι |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Πληροφορίες ευπαθειών | 23 εργαλεία, 5 πηγές |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT και αναγνώριση | 37 εργαλεία, 12 πηγές |
| **darknet-mcp-server** | **Σκοτεινός ιστός και πληροφορίες απειλών** | **66 εργαλεία, 16 πηγές** |

---

<p align="center">
<b>Μόνο για εξουσιοδοτημένες δοκιμές και αξιολόγηση ασφάλειας.</b><br>
Πάντα βεβαιωθείτε ότι έχετε κατάλληλη εξουσιοδότηση πριν εκτελέσετε συλλογή πληροφοριών σε οποιονδήποτε στόχο.
</p>

<p align="center">
  <a href="LICENSE">Άδεια MIT</a> &bull; Κατασκευασμένο με Bun + TypeScript
</p>
