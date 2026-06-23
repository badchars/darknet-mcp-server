<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <strong>Français</strong> |
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

<h3 align="center">Renseignement du dark web et des menaces pour les agents IA.</h3>

<p align="center">
  HIBP, ThreatFox, suivi de ransomware, acces Tor .onion, renseignement blockchain, recherche d'exploits, logs de stealers, analyse de malware &mdash; unifie dans un seul serveur MCP.<br>
  Votre agent IA obtient un <b>renseignement dark web a spectre complet a la demande</b>, pas 16 onglets de navigateur et une correlation manuelle.
</p>

<br>

<p align="center">
  <a href="#le-probleme">Le Probleme</a> &bull;
  <a href="#ce-qui-le-differencie">Ce qui le differencie</a> &bull;
  <a href="#demarrage-rapide">Demarrage Rapide</a> &bull;
  <a href="#ce-que-lia-peut-faire">Ce que l'IA peut faire</a> &bull;
  <a href="#reference-des-outils-66-outils">Outils (66)</a> &bull;
  <a href="#sources-de-donnees-16">Sources de Donnees</a> &bull;
  <a href="#architecture">Architecture</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Contribuer</a>
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
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="Demo de darknet-mcp-server" width="800">
</p>

---

## Le Probleme

Le renseignement du dark web est la couche manquante dans chaque investigation de securite. Bases de donnees de fuites, traqueurs de ransomware, services caches Tor, sandboxes de malware, logs de stealers, forensique blockchain, bases de donnees d'exploits &mdash; les donnees dont vous avez besoin sont dispersees sur des dizaines de plateformes, chacune avec sa propre API, sa propre authentification, ses propres limites de debit, son propre format de sortie. Aujourd'hui vous consultez HIBP dans un onglet, ThreatFox dans un autre, parcourez les sites de fuites de ransomware via Tor, recherchez un hash sur MalwareBazaar, verifiez les transactions blockchain sur un explorateur de blocs, puis passez une heure a assembler le tout manuellement.

```
Flux de travail traditionnel de renseignement dark web :
  verifier l'exposition aux fuites      ->  Interface web HIBP (API payante)
  rechercher des identifiants fuites     ->  Interface web IntelligenceX
  suivre les groupes de ransomware       ->  ransomware.live + ransomlook.io (2 interfaces separees)
  acceder aux services caches .onion     ->  Navigateur Tor manuellement
  analyser des echantillons de malware   ->  Hybrid Analysis + MalwareBazaar (2 interfaces de plus)
  verifier l'historique d'abus d'IP      ->  AbuseIPDB + GreyNoise (2 interfaces de plus)
  tracer la cryptomonnaie                ->  blockchain.info + ChainAbuse
  rechercher des exploits                ->  Interface web Vulners
  verifier les URLs de phishing          ->  Interface web PhishTank
  correler le tout                       ->  copier-coller dans un rapport
  ────────────────────────────────
  Total : 60+ minutes par investigation, la majorite en changements de contexte
```

**darknet-mcp-server** donne a votre agent IA 66 outils provenant de 16 sources de donnees via le [Model Context Protocol](https://modelcontextprotocol.io). L'agent interroge toutes les sources en parallele, correle les donnees du web de surface et du dark web, identifie les menaces et presente une image de renseignement unifiee &mdash; dans une seule conversation.

```
Avec darknet-mcp-server :
  Vous : "Investiguez l'exposition aux fuites et le paysage des menaces pour target.com"

  Agent : -> HIBP : 3 fuites connues (Adobe 2013, LinkedIn 2021, Collection #1)
          -> ThreatFox : 2 IOCs associes au domaine (callback C2, phishing)
          -> URLhaus : 1 URL malveillante hebergee sur un sous-domaine
          -> Ransomware : Aucune liste de victimes trouvee (bon signe)
          -> Logs de stealers : 47 identifiants d'employes compromis trouves
          -> OTX : 5 pulses de menaces referencant le domaine
          -> AbuseIPDB : L'IP principale a 12 signalements d'abus (force brute)
          -> "target.com a ete implique dans 3 fuites de donnees exposant
             2,1M d'enregistrements. 47 identifiants d'employes trouves dans
             les logs de stealers — reinitialisation immediate des mots de
             passe recommandee. 2 IOCs ThreatFox actifs suggerent un ciblage
             en cours. Pas de listings ransomware, mais les signalements
             d'abus sur l'IP principale justifient une investigation."
```

---

## Ce qui le differencie

Les outils existants vous donnent des donnees brutes d'une source a la fois. darknet-mcp-server donne a votre agent IA la capacite de **raisonner simultanement sur le renseignement du web de surface et du dark web**.

<table>
<thead>
<tr>
<th></th>
<th>Approche Traditionnelle</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interface</b></td>
<td>16 interfaces web, CLIs et APIs differentes</td>
<td>MCP &mdash; L'agent IA appelle les outils conversationnellement</td>
</tr>
<tr>
<td><b>Sources de donnees</b></td>
<td>Une plateforme a la fois</td>
<td>16 sources interrogees en parallele</td>
</tr>
<tr>
<td><b>Renseignement sur les fuites</b></td>
<td>Interface web HIBP pour les breaches, IntelligenceX pour les leaks</td>
<td>L'agent combine fuites HIBP + pastes + IntelligenceX + logs de stealers</td>
</tr>
<tr>
<td><b>Acces dark web</b></td>
<td>Navigateur Tor manuel, copier-coller depuis les sites .onion</td>
<td>L'agent recupere, scrappe et recherche les sites .onion via proxy SOCKS5</td>
</tr>
<tr>
<td><b>Analyse de malware</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox separement</td>
<td>L'agent croise les references : "Ce hash de ThreatFox a aussi ete detonne dans Hybrid Analysis avec des IOCs reseau"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Explorateur de blocs + ChainAbuse separement</td>
<td>L'agent trace les transactions BTC et verifie les signalements d'abus en une seule etape</td>
</tr>
<tr>
<td><b>Cles API</b></td>
<td>Requises pour presque tout</td>
<td>De nombreux outils fonctionnent gratuitement ; les cles API deverrouillent les sources premium</td>
</tr>
<tr>
<td><b>Installation</b></td>
<td>Installer chaque outil, gerer chaque configuration, lancer le Navigateur Tor</td>
<td><code>npx darknet-mcp-server</code> &mdash; une commande, zero configuration</td>
</tr>
</tbody>
</table>

---

## Demarrage Rapide

### Option 1 : npx (sans installation)

```bash
npx darknet-mcp-server
```

Les outils gratuits fonctionnent immediatement. Aucune cle API requise pour le suivi de ransomware, les listes de fuites, GreyNoise, blockchain, OTX et plus.

### Option 2 : Cloner

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Variables d'environnement (optionnel)

```bash
# Renseignement sur les fuites et identifiants
export HIBP_API_KEY=your-key           # Active la recherche de comptes fuites et la recherche de pastes
export INTELX_API_KEY=your-key         # Active 4 outils IntelligenceX

# Renseignement sur les menaces
export OTX_API_KEY=your-key            # Augmente les limites de debit AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Active 4 outils AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Limites de debit plus elevees pour la suite abuse.ch
export PULSEDIVE_API_KEY=your-key      # Limites de debit plus elevees pour Pulsedive

# Logs de stealers et identifiants
export HUDSONROCK_API_KEY=your-key     # Active 3 outils de logs de stealers Hudson Rock

# Exploits et analyse de malware
export VULNERS_API_KEY=your-key        # Active les outils de recherche et d'exploits Vulners
export HYBRID_API_KEY=your-key         # Active 3 outils de malware Hybrid Analysis

# Phishing
export PHISHTANK_API_KEY=your-key      # Limites de debit plus elevees pour PhishTank

# Proxy Tor SOCKS5 (pour l'acces .onion)
export TOR_SOCKS_HOST=127.0.0.1       # Par defaut : 127.0.0.1
export TOR_SOCKS_PORT=9050            # Par defaut : 9050
```

Toutes les cles API sont optionnelles. Sans elles, vous obtenez toujours le suivi de ransomware, les listes de fuites, GreyNoise, le renseignement blockchain, OTX, les verifications des noeuds de sortie Tor, la recherche onion, la consultation onion CIRCL et plus.

### Connecter a votre agent IA

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Avec npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Avec un clone local
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Ajouter a `~/Library/Application Support/Claude/claude_desktop_config.json` :

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
<summary><b>Cursor / Windsurf / autres clients MCP</b></summary>

Meme format de configuration JSON. Pointez la commande vers `npx darknet-mcp-server` ou votre chemin d'installation local.

</details>

### Configuration de Tor (optionnel, pour l'acces .onion)

Les 7 outils Tor (`tor_fetch_onion`, `tor_scrape_onion`, etc.) necessitent un proxy Tor SOCKS5 en fonctionnement.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Verifier la connectivite
npx darknet-mcp-server --check-tor
```

### Commencer les requetes

```
Vous : "Verifie si example.com a ete implique dans des fuites de donnees et cherche des logs de stealers"
```

C'est tout. L'agent gere les recherches de fuites, les recherches d'identifiants, la correlation des menaces et plus automatiquement.

---

## Ce que l'IA peut faire

### Investigation de Fuites

```
Vous : "Verifie si example.com a ete implique dans des fuites de donnees"

Agent : -> breachList {domain: "example.com"}
        -> breachSearch {account: "admin@example.com"}
        -> stealer_domain {domain: "example.com"}
        -> intelx_search {term: "example.com"}
        -> "example.com apparait dans 5 fuites connues :
           - ExampleDB 2023 : 4,2M d'enregistrements (emails, mots de passe, IPs)
           - Collection #1 : liste de credential stuffing
           - Combolist 2024 : 890K paires email:mot de passe
           Logs de stealers : 23 machines compromises avec des identifiants
           enregistres pour example.com trouvees dans la base de donnees
           Hudson Rock.
           IntelligenceX : 47 resultats sur les sites de paste et le dark web."
```

### Suivi de Ransomware

```
Vous : "Quels groupes de ransomware ciblent le secteur de la sante ?"

Agent : -> ransomwareBySector {sector: "healthcare"}
        -> ransomwareRecent {}
        -> ransomlookRecent {}
        -> "Activite ransomware dans le secteur de la sante :
           142 victimes reparties sur 12 groupes au cours des 12 derniers mois.
           Groupes principaux : LockBit3 (38 victimes), BlackCat/ALPHV (24),
           Cl0p (19), Royal (15).
           Plus recent : MedCorp Inc. listee par LockBit3 (il y a 2 jours).
           3 nouvelles victimes du secteur sante au cours de la derniere
           semaine dans les flux ransomware.live et RansomLook."
```

### Reconnaissance Dark Web

```
Vous : "Recherche les mentions de notre entreprise sur les sites .onion"

Agent : -> tor_search_onion {query: "AcmeCorp"}
        -> intelx_search {term: "acmecorp.com"}
        -> onion_lookup {address: "relevant-onion-address.onion"}
        -> "Resultats de recherche dark web pour AcmeCorp :
           Ahmia.fi : 3 pages .onion mentionnent AcmeCorp
           - Post de forum discutant de la liste d'employes AcmeCorp (forum de fuites)
           - Annonce sur un marketplace pour la base de donnees AcmeCorp (non verifie)
           - Article de blog referencant la fuite AcmeCorp
           IntelligenceX : 12 resultats sur les sites de paste
           Recommandation : investiguer le post du forum et l'annonce
           du marketplace pour une potentielle vente active de donnees."
```

### Analyse de Malware

```
Vous : "Analyse ce hash de fichier pour des indicateurs de malware : abc123def456..."

Agent : -> malware_search {hash: "abc123def456..."}
        -> malware_overview {sha256: "abc123def456..."}
        -> bazaarHash {hash: "abc123def456..."}
        -> threatfoxSearch {searchTerm: "abc123def456..."}
        -> otx_hash {hash: "abc123def456..."}
        -> "Analyse de malware pour abc123def456 :
           Hybrid Analysis : MALVEILLANT (score de menace 95/100)
           - Famille : AgentTesla (voleur d'informations)
           - MITRE ATT&CK : T1555 (Acces aux Identifiants), T1071 (C2)
           - IOCs reseau : 3 domaines C2, 2 IPs
           MalwareBazaar : Vu pour la premiere fois le 2024-03-15, tague 'AgentTesla'
           ThreatFox : 2 entrees IOC liees a la meme campagne
           OTX : Reference dans 4 pulses de menaces"
```

---

## Reference des Outils (66 outils)

<details open>
<summary><b>Reseau Tor (7) &mdash; Pas de cle API (daemon Tor requis pour les outils .onion)</b></summary>

| Outil | Description |
|-------|-------------|
| `tor_status` | Verifier si le daemon proxy Tor SOCKS5 local est en fonctionnement et accessible |
| `tor_fetch_onion` | Recuperer le HTML brut d'une URL .onion via proxy Tor SOCKS5 (prevention des fuites DNS via socks5h) |
| `tor_scrape_onion` | Recuperer et parser un site .onion &mdash; retourne des donnees structurees : titre, liens, texte du corps |
| `tor_search_onion` | Rechercher des sites .onion en utilisant le moteur de recherche Ahmia.fi |
| `tor_exit_nodes` | Obtenir les adresses IP actuelles des noeuds de sortie Tor depuis la liste officielle de sortie en masse du Projet Tor |
| `tor_exit_check` | Verifier si une adresse IP specifique est un noeud de sortie Tor connu |
| `tor_exit_details` | Obtenir des informations detaillees sur les noeuds de sortie Tor, y compris les empreintes et horodatages de publication |

</details>

<details>
<summary><b>Renseignement Ransomware (9) &mdash; Pas de cle API</b></summary>

| Outil | Description |
|-------|-------------|
| `ransomwareRecent` | Recuperer les victimes de ransomware les plus recentes de ransomware.live |
| `ransomwareGroups` | Lister tous les groupes de ransomware connus suivis par ransomware.live |
| `ransomwareGroup` | Obtenir un profil detaille d'un groupe de ransomware specifique par nom |
| `ransomwareGroupVictims` | Obtenir toutes les victimes revendiquees par un groupe de ransomware specifique |
| `ransomwareSearch` | Rechercher des victimes de ransomware par mot-cle (nom d'entreprise, domaine, etc.) |
| `ransomwareByCountry` | Obtenir les victimes de ransomware filtrees par code pays ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Obtenir les victimes de ransomware filtrees par secteur/industrie (sante, finance, etc.) |
| `ransomlookGroups` | Lister tous les 582+ groupes de ransomware suivis par RansomLook |
| `ransomlookRecent` | Recuperer les publications de ransomware et revendications de victimes les plus recentes de RansomLook |

</details>

<details>
<summary><b>Renseignement sur les Fuites &mdash; HIBP (7) &mdash; Partiel : certains outils gratuits, la recherche de comptes requiert HIBP_API_KEY</b></summary>

| Outil | Description |
|-------|-------------|
| `breachList` | Lister toutes les fuites de donnees connues de HaveIBeenPwned, filtrage optionnel par domaine &mdash; gratuit |
| `breachGet` | Obtenir les details d'une fuite de donnees specifique par nom &mdash; gratuit |
| `breachLatest` | Obtenir la fuite de donnees la plus recemment ajoutee &mdash; gratuit |
| `breachDataClasses` | Lister toutes les classes de donnees (types de donnees compromises) connues de HIBP &mdash; gratuit |
| `breachPassword` | Verifier si un mot de passe est apparu dans des fuites connues (k-anonymat, seul le prefixe SHA-1 de 5 caracteres est envoye) &mdash; gratuit |
| `breachSearch` | Rechercher toutes les fuites pour un compte specifique (email/nom d'utilisateur) &mdash; requiert `HIBP_API_KEY` |
| `breachPastes` | Rechercher une adresse email dans les pastes publies publiquement &mdash; requiert `HIBP_API_KEY` |

</details>

<details>
<summary><b>Suite abuse.ch (9) &mdash; Pas de cle API (ABUSECH_AUTH_KEY optionnel pour un debit plus eleve)</b></summary>

| Outil | Description |
|-------|-------------|
| `threatfoxGetIocs` | Obtenir les IOCs recents de ThreatFox signales au cours des N derniers jours |
| `threatfoxSearch` | Rechercher des IOCs ThreatFox par IP, domaine, hash ou URL |
| `threatfoxTag` | Rechercher des IOCs ThreatFox par tag (ex. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Rechercher des IOCs ThreatFox par famille de malware en utilisant la nomenclature Malpedia |
| `urlhausLookup` | Rechercher une URL ou un hote dans URLhaus pour la distribution de malware |
| `urlhausTag` | Rechercher des entrees URLhaus par tag |
| `bazaarHash` | Rechercher un echantillon de malware dans MalwareBazaar par hash MD5, SHA1 ou SHA256 |
| `bazaarRecent` | Obtenir les echantillons de malware les plus recemment soumis de MalwareBazaar |
| `bazaarTag` | Rechercher dans MalwareBazaar par tag ou nom de signature YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Pas de cle API (OTX_API_KEY optionnel pour un debit plus eleve)</b></summary>

| Outil | Description |
|-------|-------------|
| `otx_ip` | Rechercher le renseignement sur les menaces pour une adresse IP &mdash; info pulse, reputation, pays, ASN |
| `otx_domain` | Rechercher le renseignement sur les menaces pour un domaine &mdash; info pulse, whois, reputation |
| `otx_hash` | Rechercher le renseignement sur les menaces pour un hash de fichier (MD5, SHA1, SHA256) |
| `otx_cve` | Rechercher le renseignement sur les menaces pour une CVE &mdash; pulses et indicateurs lies |
| `otx_search_pulses` | Rechercher des pulses de menaces OTX par mot-cle |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Requiert ABUSEIPDB_API_KEY</b></summary>

| Outil | Description |
|-------|-------------|
| `abuseipdb_check` | Verifier une adresse IP pour les signalements d'abus &mdash; score de confiance, ISP, pays, nombre de signalements |
| `abuseipdb_reports` | Obtenir les signalements d'abus individuels pour une IP avec commentaires detailles et categories |
| `abuseipdb_blacklist` | Obtenir la liste noire AbuseIPDB des adresses IP malveillantes les plus signalees |
| `abuseipdb_check_block` | Verifier un bloc reseau CIDR entier pour les signalements d'abus |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Pas de cle API</b></summary>

| Outil | Description |
|-------|-------------|
| `greynoise_ip` | Rechercher une IP sur GreyNoise &mdash; classification (benin/malveillant/inconnu), statut de scanner |
| `greynoise_check` | Verification rapide : cette IP est-elle un scanner connu ou un service benin connu ? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Pas de cle API (PULSEDIVE_API_KEY optionnel pour un debit plus eleve)</b></summary>

| Outil | Description |
|-------|-------------|
| `pulsedive_indicator` | Rechercher un indicateur (IP, domaine, URL ou hash) &mdash; niveau de risque, menaces, flux |
| `pulsedive_search` | Rechercher des indicateurs Pulsedive par valeur |
| `pulsedive_explore` | Explorer les indicateurs lies en utilisant des requetes avancees (IOCs lies avec niveaux de risque) |

</details>

<details>
<summary><b>Hudson Rock Logs de Stealers (3) &mdash; Requiert HUDSONROCK_API_KEY</b></summary>

| Outil | Description |
|-------|-------------|
| `stealer_domain` | Rechercher des entrees de logs de stealers par domaine &mdash; machines compromises, identifiants, details du malware |
| `stealer_email` | Rechercher des logs de stealers par adresse email &mdash; machines compromises avec cet email dans les identifiants du navigateur |
| `stealer_ip` | Rechercher des logs de stealers par adresse IP &mdash; machines compromises provenant de cette IP |

</details>

<details>
<summary><b>Vulners Exploits (3) &mdash; Pas de cle API (VULNERS_API_KEY optionnel pour la recherche)</b></summary>

| Outil | Description |
|-------|-------------|
| `vulners_search` | Rechercher dans la base de donnees de vulnerabilites Vulners en utilisant des requetes Lucene |
| `vulners_id` | Rechercher une vulnerabilite ou un exploit specifique par ID (CVE, EDB, GHSA) &mdash; gratuit |
| `vulners_exploit` | Rechercher specifiquement des exploits (entrees ExploitDB) |

</details>

<details>
<summary><b>Renseignement Blockchain (4) &mdash; Pas de cle API</b></summary>

| Outil | Description |
|-------|-------------|
| `btc_address` | Rechercher une adresse Bitcoin &mdash; solde, nombre de transactions, transactions recentes |
| `btc_balance` | Obtenir le solde d'une adresse Bitcoin en satoshi (verification rapide sans historique complet) |
| `btc_tx` | Obtenir des informations detaillees sur une transaction Bitcoin par hash &mdash; entrees, sorties, frais, info du bloc |
| `btc_abuse_check` | Verifier une adresse Bitcoin pour les signalements d'abus sur ChainAbuse &mdash; signalements d'escroquerie avec categories |

</details>

<details>
<summary><b>Hybrid Analysis Malware (3) &mdash; Requiert HYBRID_API_KEY</b></summary>

| Outil | Description |
|-------|-------------|
| `malware_search` | Rechercher dans la sandbox Hybrid Analysis par hash de fichier &mdash; verdict, taux de detection AV, details d'analyse |
| `malware_overview` | Vue d'ensemble complete de l'analyse de malware &mdash; techniques MITRE ATT&CK, indicateurs reseau, processus |
| `malware_feed` | Obtenir le dernier flux de detonation de malware &mdash; echantillons recemment analyses avec verdicts |

</details>

<details>
<summary><b>CIRCL Consultation Onion (1) &mdash; Pas de cle API</b></summary>

| Outil | Description |
|-------|-------------|
| `onion_lookup` | Rechercher les metadonnees d'une adresse .onion via le projet CIRCL AIL &mdash; premiere/derniere observation, statut, tags, certificats, ports, adresses BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Requiert INTELX_API_KEY</b></summary>

| Outil | Description |
|-------|-------------|
| `intelx_search` | Lancer une recherche sur IntelligenceX pour des donnees fuitees, du contenu dark web et plus |
| `intelx_search_results` | Recuperer les resultats d'une recherche IntelligenceX par ID |
| `intelx_phonebook` | Recherche dans l'annuaire &mdash; trouver des emails, domaines, URLs associes a un terme |
| `intelx_phonebook_results` | Recuperer les resultats de recherche d'annuaire par ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Pas de cle API (PHISHTANK_API_KEY optionnel pour un debit plus eleve)</b></summary>

| Outil | Description |
|-------|-------------|
| `phishing_check` | Verifier si une URL est un site de phishing connu via PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Pas de cle API</b></summary>

| Outil | Description |
|-------|-------------|
| `darknet_list_sources` | Lister toutes les sources de donnees disponibles avec statut de configuration, statut de cle API et nombre d'outils |

</details>

---

### Utilisation en CLI

```bash
# Lister tous les outils disponibles
npx darknet-mcp-server --list

# Verifier la connectivite du proxy Tor SOCKS5
npx darknet-mcp-server --check-tor

# Executer n'importe quel outil directement
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Outils necessitant des cles API
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Sources de Donnees (16)

| Source | Auth | Limite de Debit | Ce qu'elle fournit |
|--------|------|----------------|-------------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1,5s | Recherche de fuites, recherche de pastes, verification de mots de passe, listes de fuites |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Contenu dark web, recherche de donnees fuitees, annuaire (emails/domaines/URLs) |
| [AlienVault OTX](https://otx.alienvault.com) | Optionnel | 1 req/s | Renseignement sur les menaces pour IPs, domaines, hashes, CVEs ; recherche de pulses |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | Signalements d'abus IP, scoring de confiance, liste noire, verification de bloc CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Optionnel | 2 req/s | Recherche d'IOC, suivi de familles de malware, recherche par tag |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Optionnel | 2 req/s | Suivi d'URLs de distribution de malware, recherche hote/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Optionnel | 2 req/s | Depot d'echantillons de malware, recherche par hash, recherche de signatures YARA |
| [GreyNoise](https://www.greynoise.io) | Aucun | 1 req/s | Classification d'IP (benin/malveillant), detection de scanners internet |
| [Pulsedive](https://pulsedive.com) | Optionnel | 1 req/s | Enrichissement d'indicateurs, scoring de risque, exploration d'IOCs lies |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Recherche de logs de stealers par domaine, email ou IP |
| [Vulners](https://vulners.com) | Optionnel | 1 req/s | Base de donnees de vulnerabilites/exploits, recherche CVE, recherche ExploitDB |
| [Blockchain.info](https://blockchain.info) | Aucun | 1 req/s | Recherche d'adresse Bitcoin, solde, details de transaction |
| [ChainAbuse](https://www.chainabuse.com) | Aucun | 1 req/s | Signalements d'abus/escroquerie d'adresses Bitcoin |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Detonation de malware en sandbox, cartographie MITRE ATT&CK, flux d'echantillons |
| [CIRCL AIL (Consultation Onion)](https://onion.ail-project.org) | Aucun | 0,5 req/s | Metadonnees d'adresses .onion, premiere/derniere observation, adresses BTC associees |
| [Reseau Tor](https://www.torproject.org) | Aucun | N/A | Liste des noeuds de sortie, recuperation/scraping .onion, recherche Ahmia.fi |

---

## Architecture

```
src/
  index.ts                # Point d'entree CLI (--help, --list, --check-tor, serveur stdio)
  protocol/
    mcp-server.ts         # Configuration du serveur MCP (transport stdio)
    tools.ts              # Registre des outils — les 66 outils assembles ici
  types/
    index.ts              # Types partages (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Limiteur de debit par fournisseur
    cache.ts              # Cache TTL pour les reponses API
    tor-fetch.ts          # Client HTTP proxy Tor SOCKS5
    require-key.ts        # Aide a la validation de cle API
  tor/                    # Outils du Reseau Tor (7)
  ransomware/             # Outils de Renseignement Ransomware (9)
  breach/                 # Outils de Fuites HIBP (7)
  abusech/                # Outils ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Outils AlienVault OTX (5)
  abuseipdb/              # Outils AbuseIPDB (4)
  greynoise/              # Outils GreyNoise Community (2)
  pulsedive/              # Outils Pulsedive (3)
  hudsonrock/             # Outils de logs de stealers Hudson Rock (3)
  vulners/                # Outils d'exploits Vulners (3)
  blockchain/             # Outils de Renseignement Blockchain (4)
  hybrid/                 # Outils de malware Hybrid Analysis (3)
  onionlookup/            # Outil de consultation onion CIRCL (1)
  intelx/                 # Outils IntelligenceX (4)
  phishing/               # Outil PhishTank (1)
  meta/                   # Outils Meta (1)
```

**Decisions de conception :**

- **16 fournisseurs, 1 serveur** &mdash; Chaque source de donnees est un module independant. L'agent choisit quels outils utiliser en fonction de la requete.
- **Limiteurs de debit par fournisseur** &mdash; Chaque source de donnees a sa propre instance `RateLimiter` calibree aux limites de cette API. Pas de goulot d'etranglement partage.
- **Cache TTL** &mdash; Les donnees ransomware (15min), les listes de fuites (10min), les resultats abuse.ch (5min) sont mis en cache pour eviter les appels API redondants lors de flux de travail multi-outils.
- **Degradation gracieuse** &mdash; Les cles API manquantes ne font pas planter le serveur. Les outils retournent des messages d'erreur descriptifs : "Definissez HIBP_API_KEY pour activer la recherche de comptes fuites."
- **Prevention des fuites DNS** &mdash; Les outils Tor .onion utilisent le protocole `socks5h://` pour resoudre le DNS via Tor, empechant les fuites DNS vers le resolveur local.
- **4 dependances** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` et `cheerio`. Tout HTTP clearnet via `fetch` natif. Tout trafic Tor via SOCKS5.

---

## Limitations

- La recherche de comptes/pastes HIBP necessite une cle API payante (3,50$/mois)
- IntelligenceX, AbuseIPDB, Hudson Rock et Hybrid Analysis necessitent des cles API pour leurs outils
- Les outils Tor .onion necessitent un proxy Tor SOCKS5 en fonctionnement (non inclus)
- Le niveau gratuit abuse.ch a des limites de debit plus basses sans `ABUSECH_AUTH_KEY`
- Les donnees de Ransomware.live et RansomLook dependent de la frequence de scraping en amont
- Les outils blockchain ne supportent que Bitcoin (pas d'Ethereum/Monero)
- La base de donnees PhishTank peut accuser un retard par rapport aux campagnes de phishing en temps reel
- Teste sur macOS / Linux (Windows non teste)

---

## Partie de la Suite de Securite MCP

| Projet | Domaine | Outils |
|--------|---------|--------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Tests de securite bases sur le navigateur | 39 outils, Firefox, tests d'injection |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Securite cloud (AWS/Azure/GCP) | 38 outils, 60+ verifications |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Posture de securite GitHub | 39 outils, 45 verifications |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Renseignement sur les vulnerabilites | 23 outils, 5 sources |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT et reconnaissance | 37 outils, 12 sources |
| **darknet-mcp-server** | **Renseignement dark web et menaces** | **66 outils, 16 sources** |

---

<p align="center">
<b>Uniquement pour les tests et evaluations de securite autorises.</b><br>
Assurez-vous toujours d'avoir l'autorisation appropriee avant de collecter des renseignements sur une cible.
</p>

<p align="center">
  <a href="LICENSE">Licence MIT</a> &bull; Construit avec Bun + TypeScript
</p>
