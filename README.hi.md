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
  <a href="README.el.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a> |
  <strong>हिन्दी</strong>
</p>

<p align="center">
  <br>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/banner-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/banner-light.svg">
    <img alt="darknet-mcp-server" src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/banner-dark.svg" width="700">
  </picture>
</p>

<h3 align="center">AI एजेंट्स के लिए डार्क वेब और खतरा खुफिया जानकारी।</h3>

<p align="center">
  HIBP, ThreatFox, रैंसमवेयर ट्रैकिंग, Tor .onion एक्सेस, ब्लॉकचेन खुफिया, एक्सप्लॉइट खोज, स्टीलर लॉग, मैलवेयर विश्लेषण &mdash; एक ही MCP सर्वर में एकीकृत।<br>
  आपके AI एजेंट को मिलता है <b>मांग पर पूर्ण-स्पेक्ट्रम डार्क वेब खुफिया जानकारी</b>, 16 ब्राउज़र टैब और मैनुअल सहसंबंध नहीं।
</p>

<br>

<p align="center">
  <a href="#समस्या">समस्या</a> &bull;
  <a href="#यह-कैसे-अलग-है">यह कैसे अलग है</a> &bull;
  <a href="#त्वरित-शुरुआत">त्वरित शुरुआत</a> &bull;
  <a href="#ai-क्या-कर-सकता-है">AI क्या कर सकता है</a> &bull;
  <a href="#टूल-संदर्भ-66-टूल">टूल (66)</a> &bull;
  <a href="#डेटा-स्रोत-16">डेटा स्रोत</a> &bull;
  <a href="#आर्किटेक्चर">आर्किटेक्चर</a> &bull;
  <a href="CHANGELOG.md">परिवर्तन लॉग</a> &bull;
  <a href="CONTRIBUTING.md">योगदान</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="लाइसेंस"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 टूल">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 स्रोत">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server डेमो" width="800">
</p>

---

## समस्या

डार्क वेब खुफिया जानकारी हर सुरक्षा जांच में गायब परत है। ब्रीच डेटाबेस, रैंसमवेयर ट्रैकर, Tor छिपी सेवाएं, मैलवेयर सैंडबॉक्स, स्टीलर लॉग, ब्लॉकचेन फोरेंसिक, एक्सप्लॉइट डेटाबेस &mdash; आपको जो डेटा चाहिए वह दर्जनों प्लेटफॉर्म पर बिखरा हुआ है, प्रत्येक का अपना API, अपनी प्रमाणीकरण, अपनी दर सीमा, अपना आउटपुट फॉर्मेट। आज आप एक टैब में HIBP चेक करते हैं, दूसरे में ThreatFox, Tor के माध्यम से रैंसमवेयर लीक साइट ब्राउज़ करते हैं, MalwareBazaar में हैश खोजते हैं, ब्लॉक एक्सप्लोरर पर ब्लॉकचेन ट्रांजेक्शन चेक करते हैं, और फिर एक घंटा सब कुछ मैनुअली जोड़ने में लगाते हैं।

```
पारंपरिक डार्क वेब खुफिया कार्यप्रवाह:
  ब्रीच एक्सपोज़र चेक                  ->  HIBP वेब इंटरफेस (पेड API)
  लीक हुई क्रेडेंशियल खोज               ->  IntelligenceX वेब इंटरफेस
  रैंसमवेयर ग्रुप ट्रैकिंग              ->  ransomware.live + ransomlook.io (2 अलग UI)
  .onion छिपी सेवाओं तक पहुंच           ->  मैनुअली Tor Browser
  मैलवेयर नमूने का विश्लेषण              ->  Hybrid Analysis + MalwareBazaar (2 और UI)
  IP दुरुपयोग इतिहास चेक                ->  AbuseIPDB + GreyNoise (2 और UI)
  क्रिप्टोकरेंसी ट्रेसिंग                ->  blockchain.info + ChainAbuse
  एक्सप्लॉइट खोज                        ->  Vulners वेब इंटरफेस
  फिशिंग URL चेक                        ->  PhishTank वेब इंटरफेस
  सब कुछ सहसंबंधित करना                  ->  रिपोर्ट में कॉपी-पेस्ट
  ────────────────────────────────
  कुल: प्रति जांच 60+ मिनट, अधिकांश समय संदर्भ बदलने में
```

**darknet-mcp-server** आपके AI एजेंट को [Model Context Protocol](https://modelcontextprotocol.io) के माध्यम से 16 डेटा स्रोतों से 66 टूल प्रदान करता है। एजेंट सभी स्रोतों को समानांतर में क्वेरी करता है, सरफेस और डार्क वेब पर डेटा सहसंबंधित करता है, खतरों की पहचान करता है, और एक एकीकृत खुफिया तस्वीर प्रस्तुत करता है &mdash; एक ही बातचीत में।

```
darknet-mcp-server के साथ:
  आप: "target.com के लिए ब्रीच एक्सपोज़र और खतरे के परिदृश्य की जांच करें"

  एजेंट: -> HIBP: 3 ज्ञात ब्रीच (Adobe 2013, LinkedIn 2021, Collection #1)
          -> ThreatFox: डोमेन से जुड़े 2 IOC (C2 कॉलबैक, फिशिंग)
          -> URLhaus: सबडोमेन पर होस्ट किया गया 1 दुर्भावनापूर्ण URL
          -> रैंसमवेयर: कोई पीड़ित सूची नहीं मिली (अच्छा)
          -> स्टीलर लॉग: 47 समझौता किए गए कर्मचारी क्रेडेंशियल मिले
          -> OTX: डोमेन का उल्लेख करने वाले 5 थ्रेट पल्स
          -> AbuseIPDB: प्राइमरी IP पर 12 दुरुपयोग रिपोर्ट (ब्रूट फोर्स)
          -> "target.com 3 डेटा ब्रीच में था जिसमें 2.1M रिकॉर्ड उजागर हुए।
             स्टीलर लॉग में 47 कर्मचारी क्रेडेंशियल मिले — तत्काल
             पासवर्ड रीसेट की सिफारिश। 2 सक्रिय ThreatFox IOC
             चल रहे टार्गेटिंग का संकेत देते हैं। कोई रैंसमवेयर
             सूची नहीं, लेकिन प्राइमरी IP पर दुरुपयोग रिपोर्ट
             जांच की आवश्यकता है।"
```

---

## यह कैसे अलग है

मौजूदा टूल आपको एक बार में एक स्रोत से कच्चा डेटा देते हैं। darknet-mcp-server आपके AI एजेंट को **एक साथ सरफेस वेब और डार्क वेब खुफिया जानकारी पर तर्क करने** की क्षमता देता है।

<table>
<thead>
<tr>
<th></th>
<th>पारंपरिक दृष्टिकोण</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>इंटरफेस</b></td>
<td>16 अलग-अलग वेब UI, CLI, और API</td>
<td>MCP &mdash; AI एजेंट बातचीत में टूल कॉल करता है</td>
</tr>
<tr>
<td><b>डेटा स्रोत</b></td>
<td>एक बार में एक प्लेटफॉर्म</td>
<td>16 स्रोत समानांतर में क्वेरी किए जाते हैं</td>
</tr>
<tr>
<td><b>ब्रीच खुफिया</b></td>
<td>ब्रीच के लिए HIBP वेब UI, लीक के लिए IntelligenceX</td>
<td>एजेंट HIBP ब्रीच + पेस्ट + IntelligenceX + स्टीलर लॉग संयोजित करता है</td>
</tr>
<tr>
<td><b>डार्क वेब एक्सेस</b></td>
<td>मैनुअल Tor Browser, .onion साइट से कॉपी-पेस्ट</td>
<td>एजेंट SOCKS5 प्रॉक्सी के माध्यम से .onion साइट फेच, स्क्रैप और सर्च करता है</td>
</tr>
<tr>
<td><b>मैलवेयर विश्लेषण</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox अलग-अलग</td>
<td>एजेंट क्रॉस-रेफरेंस करता है: "ThreatFox से यह हैश Hybrid Analysis में भी नेटवर्क IOC के साथ विश्लेषित हुआ"</td>
</tr>
<tr>
<td><b>ब्लॉकचेन</b></td>
<td>ब्लॉक एक्सप्लोरर + ChainAbuse अलग-अलग</td>
<td>एजेंट एक ही चरण में BTC ट्रांजेक्शन ट्रेस और दुरुपयोग रिपोर्ट चेक करता है</td>
</tr>
<tr>
<td><b>API कुंजी</b></td>
<td>लगभग हर चीज़ के लिए आवश्यक</td>
<td>कई टूल मुफ्त काम करते हैं; API कुंजी प्रीमियम स्रोत अनलॉक करती हैं</td>
</tr>
<tr>
<td><b>सेटअप</b></td>
<td>हर टूल इंस्टॉल करें, हर कॉन्फिग मैनेज करें, Tor Browser चलाएं</td>
<td><code>npx darknet-mcp-server</code> &mdash; एक कमांड, शून्य कॉन्फिग</td>
</tr>
</tbody>
</table>

---

## त्वरित शुरुआत

### विकल्प 1: npx (बिना इंस्टॉल)

```bash
npx darknet-mcp-server
```

मुफ्त टूल तुरंत काम करते हैं। रैंसमवेयर ट्रैकिंग, ब्रीच सूचियां, GreyNoise, ब्लॉकचेन, OTX और अधिक के लिए API कुंजी की आवश्यकता नहीं।

### विकल्प 2: क्लोन

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### एनवायरनमेंट वेरिएबल (वैकल्पिक)

```bash
# ब्रीच और क्रेडेंशियल खुफिया
export HIBP_API_KEY=your-key           # ब्रीच अकाउंट सर्च और पेस्ट सर्च सक्षम करता है
export INTELX_API_KEY=your-key         # 4 IntelligenceX टूल सक्षम करता है

# खतरा खुफिया
export OTX_API_KEY=your-key            # AlienVault OTX दर सीमा बढ़ाता है
export ABUSEIPDB_API_KEY=your-key      # 4 AbuseIPDB टूल सक्षम करता है
export ABUSECH_AUTH_KEY=your-key       # abuse.ch सुइट के लिए उच्च दर सीमा
export PULSEDIVE_API_KEY=your-key      # Pulsedive के लिए उच्च दर सीमा

# स्टीलर लॉग और क्रेडेंशियल
export HUDSONROCK_API_KEY=your-key     # 3 Hudson Rock स्टीलर लॉग टूल सक्षम करता है

# एक्सप्लॉइट और मैलवेयर विश्लेषण
export VULNERS_API_KEY=your-key        # Vulners सर्च और एक्सप्लॉइट टूल सक्षम करता है
export HYBRID_API_KEY=your-key         # 3 Hybrid Analysis मैलवेयर टूल सक्षम करता है

# फिशिंग
export PHISHTANK_API_KEY=your-key      # PhishTank के लिए उच्च दर सीमा

# Tor SOCKS5 प्रॉक्सी (.onion एक्सेस के लिए)
export TOR_SOCKS_HOST=127.0.0.1       # डिफॉल्ट: 127.0.0.1
export TOR_SOCKS_PORT=9050            # डिफॉल्ट: 9050
```

सभी API कुंजी वैकल्पिक हैं। इनके बिना, आपको अभी भी रैंसमवेयर ट्रैकिंग, ब्रीच सूचियां, GreyNoise, ब्लॉकचेन खुफिया, OTX, Tor एक्सिट नोड चेक, ऑनियन सर्च, CIRCL ऑनियन लुकअप और अधिक मिलता है।

### अपने AI एजेंट से कनेक्ट करें

<details open>
<summary><b>Claude Code</b></summary>

```bash
# npx के साथ
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# लोकल क्लोन के साथ
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

`~/Library/Application Support/Claude/claude_desktop_config.json` में जोड़ें:

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
<summary><b>Cursor / Windsurf / अन्य MCP क्लाइंट</b></summary>

वही JSON कॉन्फिग फॉर्मेट। कमांड को `npx darknet-mcp-server` या अपने लोकल इंस्टॉलेशन पाथ पर पॉइंट करें।

</details>

### Tor सेटअप (वैकल्पिक, .onion एक्सेस के लिए)

7 Tor टूल (`tor_fetch_onion`, `tor_scrape_onion`, आदि) को एक चालू Tor SOCKS5 प्रॉक्सी की आवश्यकता है।

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# कनेक्टिविटी सत्यापित करें
npx darknet-mcp-server --check-tor
```

### क्वेरी शुरू करें

```
आप: "चेक करें कि example.com किसी डेटा ब्रीच में था और स्टीलर लॉग खोजें"
```

बस इतना ही। एजेंट स्वचालित रूप से ब्रीच लुकअप, क्रेडेंशियल सर्च, खतरा सहसंबंध और अधिक संभालता है।

---

## AI क्या कर सकता है

### ब्रीच जांच

```
आप: "चेक करें कि example.com किसी डेटा ब्रीच में था"

एजेंट: -> breachList {domain: "example.com"}
        -> breachSearch {account: "admin@example.com"}
        -> stealer_domain {domain: "example.com"}
        -> intelx_search {term: "example.com"}
        -> "example.com 5 ज्ञात ब्रीच में दिखाई देता है:
           - ExampleDB 2023: 4.2M रिकॉर्ड (ईमेल, पासवर्ड, IP)
           - Collection #1: क्रेडेंशियल स्टफिंग सूची
           - Combolist 2024: 890K ईमेल:पासवर्ड जोड़े
           स्टीलर लॉग: Hudson Rock डेटाबेस में example.com के लिए
           सहेजी गई क्रेडेंशियल वाली 23 समझौता मशीनें मिलीं।
           IntelligenceX: पेस्ट साइट और डार्क वेब पर 47 परिणाम।"
```

### रैंसमवेयर ट्रैकिंग

```
आप: "कौन से रैंसमवेयर ग्रुप स्वास्थ्य सेवा को निशाना बना रहे हैं?"

एजेंट: -> ransomwareBySector {sector: "healthcare"}
        -> ransomwareRecent {}
        -> ransomlookRecent {}
        -> "स्वास्थ्य सेवा क्षेत्र रैंसमवेयर गतिविधि:
           पिछले 12 महीनों में 12 ग्रुप में 142 पीड़ित।
           शीर्ष ग्रुप: LockBit3 (38 पीड़ित), BlackCat/ALPHV (24),
           Cl0p (19), Royal (15)।
           सबसे हालिया: MedCorp Inc. LockBit3 द्वारा सूचीबद्ध (2 दिन पहले)।
           ransomware.live और RansomLook फीड में पिछले सप्ताह
           3 नए स्वास्थ्य सेवा पीड़ित।"
```

### डार्क वेब रिकॉन

```
आप: ".onion साइट पर हमारी कंपनी के उल्लेख खोजें"

एजेंट: -> tor_search_onion {query: "AcmeCorp"}
        -> intelx_search {term: "acmecorp.com"}
        -> onion_lookup {address: "relevant-onion-address.onion"}
        -> "AcmeCorp के लिए डार्क वेब सर्च परिणाम:
           Ahmia.fi: 3 .onion पेज AcmeCorp का उल्लेख करते हैं
           - AcmeCorp कर्मचारी सूची पर चर्चा करने वाला फोरम पोस्ट (लीक फोरम)
           - AcmeCorp डेटाबेस के लिए मार्केटप्लेस लिस्टिंग (असत्यापित)
           - AcmeCorp ब्रीच का उल्लेख करने वाला ब्लॉग पोस्ट
           IntelligenceX: पेस्ट साइट पर 12 परिणाम
           सिफारिश: संभावित सक्रिय डेटा बिक्री के लिए फोरम पोस्ट
           और मार्केटप्लेस लिस्टिंग की जांच करें।"
```

### मैलवेयर विश्लेषण

```
आप: "मैलवेयर संकेतकों के लिए इस फाइल हैश का विश्लेषण करें: abc123def456..."

एजेंट: -> malware_search {hash: "abc123def456..."}
        -> malware_overview {sha256: "abc123def456..."}
        -> bazaarHash {hash: "abc123def456..."}
        -> threatfoxSearch {searchTerm: "abc123def456..."}
        -> otx_hash {hash: "abc123def456..."}
        -> "abc123def456 का मैलवेयर विश्लेषण:
           Hybrid Analysis: दुर्भावनापूर्ण (खतरा स्कोर 95/100)
           - परिवार: AgentTesla (सूचना चोर)
           - MITRE ATT&CK: T1555 (क्रेडेंशियल एक्सेस), T1071 (C2)
           - नेटवर्क IOC: 3 C2 डोमेन, 2 IP
           MalwareBazaar: पहली बार देखा गया 2024-03-15, टैग 'AgentTesla'
           ThreatFox: उसी अभियान से जुड़ी 2 IOC प्रविष्टियां
           OTX: 4 थ्रेट पल्स में उल्लेखित"
```

---

## टूल संदर्भ (66 टूल)

<details open>
<summary><b>Tor नेटवर्क (7) &mdash; API कुंजी नहीं (.onion टूल के लिए Tor डेमन आवश्यक)</b></summary>

| टूल | विवरण |
|------|-------------|
| `tor_status` | जांचें कि स्थानीय Tor SOCKS5 प्रॉक्सी डेमन चल रहा है और सुलभ है |
| `tor_fetch_onion` | Tor SOCKS5 प्रॉक्सी के माध्यम से .onion URL से कच्चा HTML प्राप्त करें (socks5h के माध्यम से DNS लीक रोकथाम) |
| `tor_scrape_onion` | .onion साइट प्राप्त करें और पार्स करें &mdash; संरचित डेटा लौटाता है: शीर्षक, लिंक, बॉडी टेक्स्ट |
| `tor_search_onion` | Ahmia.fi सर्च इंजन का उपयोग करके .onion साइट खोजें |
| `tor_exit_nodes` | आधिकारिक Tor Project बल्क एक्सिट सूची से वर्तमान Tor एक्सिट नोड IP पते प्राप्त करें |
| `tor_exit_check` | जांचें कि कोई विशिष्ट IP पता ज्ञात Tor एक्सिट नोड है |
| `tor_exit_details` | फिंगरप्रिंट और प्रकाशन टाइमस्टैम्प सहित विस्तृत Tor एक्सिट नोड जानकारी प्राप्त करें |

</details>

<details>
<summary><b>रैंसमवेयर खुफिया (9) &mdash; API कुंजी नहीं</b></summary>

| टूल | विवरण |
|------|-------------|
| `ransomwareRecent` | ransomware.live से सबसे हालिया रैंसमवेयर पीड़ित प्राप्त करें |
| `ransomwareGroups` | ransomware.live द्वारा ट्रैक किए गए सभी ज्ञात रैंसमवेयर ग्रुप सूचीबद्ध करें |
| `ransomwareGroup` | नाम से किसी विशिष्ट रैंसमवेयर ग्रुप का विस्तृत प्रोफाइल प्राप्त करें |
| `ransomwareGroupVictims` | किसी विशिष्ट रैंसमवेयर ग्रुप द्वारा दावा किए गए सभी पीड़ित प्राप्त करें |
| `ransomwareSearch` | कीवर्ड से रैंसमवेयर पीड़ित खोजें (कंपनी का नाम, डोमेन, आदि) |
| `ransomwareByCountry` | ISO 3166-1 alpha-2 देश कोड से फिल्टर किए गए रैंसमवेयर पीड़ित प्राप्त करें |
| `ransomwareBySector` | सेक्टर/उद्योग से फिल्टर किए गए रैंसमवेयर पीड़ित प्राप्त करें (स्वास्थ्य सेवा, वित्त, आदि) |
| `ransomlookGroups` | RansomLook द्वारा ट्रैक किए गए सभी 582+ रैंसमवेयर ग्रुप सूचीबद्ध करें |
| `ransomlookRecent` | RansomLook से सबसे हालिया रैंसमवेयर पोस्ट और पीड़ित दावे प्राप्त करें |

</details>

<details>
<summary><b>ब्रीच खुफिया &mdash; HIBP (7) &mdash; आंशिक: कुछ टूल मुफ्त, अकाउंट सर्च के लिए HIBP_API_KEY आवश्यक</b></summary>

| टूल | विवरण |
|------|-------------|
| `breachList` | HaveIBeenPwned से सभी ज्ञात डेटा ब्रीच सूचीबद्ध करें, वैकल्पिक रूप से डोमेन से फिल्टर &mdash; मुफ्त |
| `breachGet` | नाम से किसी विशिष्ट डेटा ब्रीच का विवरण प्राप्त करें &mdash; मुफ्त |
| `breachLatest` | सबसे हाल ही में जोड़ा गया डेटा ब्रीच प्राप्त करें &mdash; मुफ्त |
| `breachDataClasses` | HIBP को ज्ञात सभी डेटा क्लास (समझौता किए गए डेटा के प्रकार) सूचीबद्ध करें &mdash; मुफ्त |
| `breachPassword` | जांचें कि कोई पासवर्ड ज्ञात ब्रीच में दिखाई दिया है (k-अनामिकता, केवल 5-अक्षर SHA-1 प्रीफिक्स भेजा जाता है) &mdash; मुफ्त |
| `breachSearch` | किसी विशिष्ट अकाउंट (ईमेल/यूज़रनेम) के लिए सभी ब्रीच खोजें &mdash; `HIBP_API_KEY` आवश्यक |
| `breachPastes` | सार्वजनिक रूप से पोस्ट किए गए पेस्ट में ईमेल पता खोजें &mdash; `HIBP_API_KEY` आवश्यक |

</details>

<details>
<summary><b>abuse.ch सुइट (9) &mdash; API कुंजी नहीं (उच्च दर के लिए ABUSECH_AUTH_KEY वैकल्पिक)</b></summary>

| टूल | विवरण |
|------|-------------|
| `threatfoxGetIocs` | पिछले N दिनों में रिपोर्ट किए गए ThreatFox से हालिया IOC प्राप्त करें |
| `threatfoxSearch` | IP, डोमेन, हैश, या URL से ThreatFox IOC खोजें |
| `threatfoxTag` | टैग से ThreatFox IOC खोजें (जैसे Cobalt Strike, Emotet) |
| `threatfoxMalware` | Malpedia नामकरण का उपयोग करके मैलवेयर परिवार से ThreatFox IOC खोजें |
| `urlhausLookup` | मैलवेयर वितरण के लिए URLhaus में URL या होस्ट खोजें |
| `urlhausTag` | टैग से URLhaus प्रविष्टियां खोजें |
| `bazaarHash` | MD5, SHA1, या SHA256 हैश से MalwareBazaar में मैलवेयर नमूना खोजें |
| `bazaarRecent` | MalwareBazaar से सबसे हाल ही में सबमिट किए गए मैलवेयर नमूने प्राप्त करें |
| `bazaarTag` | टैग या YARA सिग्नेचर नाम से MalwareBazaar खोजें |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; API कुंजी नहीं (उच्च दर के लिए OTX_API_KEY वैकल्पिक)</b></summary>

| टूल | विवरण |
|------|-------------|
| `otx_ip` | IP पते के लिए खतरा खुफिया देखें &mdash; पल्स जानकारी, प्रतिष्ठा, देश, ASN |
| `otx_domain` | डोमेन के लिए खतरा खुफिया देखें &mdash; पल्स जानकारी, whois, प्रतिष्ठा |
| `otx_hash` | फाइल हैश (MD5, SHA1, SHA256) के लिए खतरा खुफिया देखें |
| `otx_cve` | CVE के लिए खतरा खुफिया देखें &mdash; संबंधित पल्स और संकेतक |
| `otx_search_pulses` | कीवर्ड से OTX थ्रेट पल्स खोजें |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; ABUSEIPDB_API_KEY आवश्यक</b></summary>

| टूल | विवरण |
|------|-------------|
| `abuseipdb_check` | IP पते पर दुरुपयोग रिपोर्ट चेक करें &mdash; विश्वास स्कोर, ISP, देश, रिपोर्ट संख्या |
| `abuseipdb_reports` | विस्तृत टिप्पणियों और श्रेणियों के साथ IP के लिए व्यक्तिगत दुरुपयोग रिपोर्ट प्राप्त करें |
| `abuseipdb_blacklist` | सबसे अधिक रिपोर्ट किए गए दुर्भावनापूर्ण IP पतों की AbuseIPDB ब्लैकलिस्ट प्राप्त करें |
| `abuseipdb_check_block` | दुरुपयोग रिपोर्ट के लिए पूरा CIDR नेटवर्क ब्लॉक चेक करें |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; API कुंजी नहीं</b></summary>

| टूल | विवरण |
|------|-------------|
| `greynoise_ip` | GreyNoise पर IP देखें &mdash; वर्गीकरण (सौम्य/दुर्भावनापूर्ण/अज्ञात), स्कैनर स्थिति |
| `greynoise_check` | त्वरित जांच: क्या यह IP एक ज्ञात स्कैनर या ज्ञात सौम्य सेवा है? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; API कुंजी नहीं (उच्च दर के लिए PULSEDIVE_API_KEY वैकल्पिक)</b></summary>

| टूल | विवरण |
|------|-------------|
| `pulsedive_indicator` | संकेतक (IP, डोमेन, URL, या हैश) देखें &mdash; जोखिम स्तर, खतरे, फीड |
| `pulsedive_search` | मान से Pulsedive संकेतक खोजें |
| `pulsedive_explore` | उन्नत क्वेरी का उपयोग करके लिंक किए गए संकेतक खोजें (जोखिम स्तर के साथ संबंधित IOC) |

</details>

<details>
<summary><b>Hudson Rock स्टीलर लॉग (3) &mdash; HUDSONROCK_API_KEY आवश्यक</b></summary>

| टूल | विवरण |
|------|-------------|
| `stealer_domain` | डोमेन से स्टीलर लॉग प्रविष्टियां खोजें &mdash; समझौता मशीनें, क्रेडेंशियल, मैलवेयर विवरण |
| `stealer_email` | ईमेल पते से स्टीलर लॉग खोजें &mdash; ब्राउज़र क्रेडेंशियल में उस ईमेल वाली समझौता मशीनें |
| `stealer_ip` | IP पते से स्टीलर लॉग खोजें &mdash; उस IP से उत्पन्न समझौता मशीनें |

</details>

<details>
<summary><b>Vulners एक्सप्लॉइट (3) &mdash; API कुंजी नहीं (सर्च के लिए VULNERS_API_KEY वैकल्पिक)</b></summary>

| टूल | विवरण |
|------|-------------|
| `vulners_search` | Lucene क्वेरी का उपयोग करके Vulners कमजोरी डेटाबेस खोजें |
| `vulners_id` | ID से विशिष्ट कमजोरी या एक्सप्लॉइट देखें (CVE, EDB, GHSA) &mdash; मुफ्त |
| `vulners_exploit` | विशेष रूप से एक्सप्लॉइट खोजें (ExploitDB प्रविष्टियां) |

</details>

<details>
<summary><b>ब्लॉकचेन खुफिया (4) &mdash; API कुंजी नहीं</b></summary>

| टूल | विवरण |
|------|-------------|
| `btc_address` | Bitcoin पता देखें &mdash; शेष, लेनदेन संख्या, हालिया लेनदेन |
| `btc_balance` | सातोशी में Bitcoin पता शेष प्राप्त करें (पूर्ण इतिहास के बिना त्वरित जांच) |
| `btc_tx` | हैश से विस्तृत Bitcoin लेनदेन जानकारी प्राप्त करें &mdash; इनपुट, आउटपुट, शुल्क, ब्लॉक जानकारी |
| `btc_abuse_check` | ChainAbuse पर Bitcoin पते पर दुरुपयोग रिपोर्ट चेक करें &mdash; श्रेणियों के साथ घोटाला रिपोर्ट |

</details>

<details>
<summary><b>Hybrid Analysis मैलवेयर (3) &mdash; HYBRID_API_KEY आवश्यक</b></summary>

| टूल | विवरण |
|------|-------------|
| `malware_search` | फाइल हैश से Hybrid Analysis सैंडबॉक्स खोजें &mdash; फैसला, AV पहचान दर, विश्लेषण विवरण |
| `malware_overview` | पूर्ण मैलवेयर विश्लेषण अवलोकन &mdash; MITRE ATT&CK तकनीकें, नेटवर्क संकेतक, प्रक्रियाएं |
| `malware_feed` | नवीनतम मैलवेयर डेटोनेशन फीड प्राप्त करें &mdash; फैसले के साथ हाल ही में विश्लेषित नमूने |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; API कुंजी नहीं</b></summary>

| टूल | विवरण |
|------|-------------|
| `onion_lookup` | CIRCL AIL प्रोजेक्ट के माध्यम से .onion पते का मेटाडेटा देखें &mdash; पहली/अंतिम बार देखा, स्थिति, टैग, प्रमाणपत्र, पोर्ट, BTC पते |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; INTELX_API_KEY आवश्यक</b></summary>

| टूल | विवरण |
|------|-------------|
| `intelx_search` | लीक डेटा, डार्क वेब सामग्री और अधिक के लिए IntelligenceX पर सर्च शुरू करें |
| `intelx_search_results` | ID से IntelligenceX सर्च परिणाम प्राप्त करें |
| `intelx_phonebook` | फोनबुक सर्च &mdash; किसी शब्द से जुड़े ईमेल, डोमेन, URL खोजें |
| `intelx_phonebook_results` | ID से फोनबुक सर्च परिणाम प्राप्त करें |

</details>

<details>
<summary><b>PhishTank (1) &mdash; API कुंजी नहीं (उच्च दर के लिए PHISHTANK_API_KEY वैकल्पिक)</b></summary>

| टूल | विवरण |
|------|-------------|
| `phishing_check` | PhishTank के माध्यम से जांचें कि कोई URL ज्ञात फिशिंग साइट है |

</details>

<details>
<summary><b>Meta (1) &mdash; API कुंजी नहीं</b></summary>

| टूल | विवरण |
|------|-------------|
| `darknet_list_sources` | कॉन्फिगरेशन स्थिति, API कुंजी स्थिति और टूल गणना के साथ सभी उपलब्ध डेटा स्रोत सूचीबद्ध करें |

</details>

---

### CLI उपयोग

```bash
# सभी उपलब्ध टूल सूचीबद्ध करें
npx darknet-mcp-server --list

# Tor SOCKS5 प्रॉक्सी कनेक्टिविटी चेक करें
npx darknet-mcp-server --check-tor

# कोई भी टूल सीधे चलाएं
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# API कुंजी आवश्यक टूल
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## डेटा स्रोत (16)

| स्रोत | प्रमाणीकरण | दर सीमा | क्या प्रदान करता है |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | ब्रीच सर्च, पेस्ट सर्च, पासवर्ड चेक, ब्रीच सूचियां |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | डार्क वेब सामग्री, लीक डेटा सर्च, फोनबुक (ईमेल/डोमेन/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | वैकल्पिक | 1 req/s | IP, डोमेन, हैश, CVE के लिए खतरा खुफिया; थ्रेट पल्स सर्च |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | IP दुरुपयोग रिपोर्ट, विश्वास स्कोरिंग, ब्लैकलिस्ट, CIDR ब्लॉक चेक |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | वैकल्पिक | 2 req/s | IOC सर्च, मैलवेयर परिवार ट्रैकिंग, टैग-आधारित सर्च |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | वैकल्पिक | 2 req/s | मैलवेयर वितरण URL ट्रैकिंग, होस्ट/URL लुकअप |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | वैकल्पिक | 2 req/s | मैलवेयर नमूना रिपॉजिटरी, हैश लुकअप, YARA सिग्नेचर सर्च |
| [GreyNoise](https://www.greynoise.io) | नहीं | 1 req/s | IP वर्गीकरण (सौम्य/दुर्भावनापूर्ण), इंटरनेट स्कैनर पहचान |
| [Pulsedive](https://pulsedive.com) | वैकल्पिक | 1 req/s | संकेतक संवर्धन, जोखिम स्कोरिंग, लिंक IOC अन्वेषण |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | डोमेन, ईमेल, या IP से स्टीलर लॉग सर्च |
| [Vulners](https://vulners.com) | वैकल्पिक | 1 req/s | कमजोरी/एक्सप्लॉइट डेटाबेस, CVE लुकअप, ExploitDB सर्च |
| [Blockchain.info](https://blockchain.info) | नहीं | 1 req/s | Bitcoin पता लुकअप, शेष, लेनदेन विवरण |
| [ChainAbuse](https://www.chainabuse.com) | नहीं | 1 req/s | Bitcoin पता दुरुपयोग/घोटाला रिपोर्ट |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | मैलवेयर सैंडबॉक्स डेटोनेशन, MITRE ATT&CK मैपिंग, नमूना फीड |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | नहीं | 0.5 req/s | .onion पता मेटाडेटा, पहली/अंतिम बार देखा, संबंधित BTC पते |
| [Tor Network](https://www.torproject.org) | नहीं | लागू नहीं | एक्सिट नोड सूची, .onion फेचिंग/स्क्रैपिंग, Ahmia.fi सर्च |

---

## आर्किटेक्चर

```
src/
  index.ts                # CLI एंट्रीपॉइंट (--help, --list, --check-tor, stdio सर्वर)
  protocol/
    mcp-server.ts         # MCP सर्वर सेटअप (stdio ट्रांसपोर्ट)
    tools.ts              # टूल रजिस्ट्री — सभी 66 टूल यहां एसेंबल किए गए
  types/
    index.ts              # साझा टाइप (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # प्रति-प्रदाता दर सीमक
    cache.ts              # API प्रतिक्रियाओं के लिए TTL कैश
    tor-fetch.ts          # Tor SOCKS5 प्रॉक्सी HTTP क्लाइंट
    require-key.ts        # API कुंजी सत्यापन हेल्पर
  tor/                    # Tor नेटवर्क टूल (7)
  ransomware/             # रैंसमवेयर खुफिया टूल (9)
  breach/                 # HIBP ब्रीच टूल (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar टूल (9)
  otx/                    # AlienVault OTX टूल (5)
  abuseipdb/              # AbuseIPDB टूल (4)
  greynoise/              # GreyNoise Community टूल (2)
  pulsedive/              # Pulsedive टूल (3)
  hudsonrock/             # Hudson Rock स्टीलर लॉग टूल (3)
  vulners/                # Vulners एक्सप्लॉइट टूल (3)
  blockchain/             # ब्लॉकचेन खुफिया टूल (4)
  hybrid/                 # Hybrid Analysis मैलवेयर टूल (3)
  onionlookup/            # CIRCL Onion Lookup टूल (1)
  intelx/                 # IntelligenceX टूल (4)
  phishing/               # PhishTank टूल (1)
  meta/                   # Meta टूल (1)
```

**डिज़ाइन निर्णय:**

- **16 प्रदाता, 1 सर्वर** &mdash; प्रत्येक डेटा स्रोत एक स्वतंत्र मॉड्यूल है। एजेंट क्वेरी के आधार पर चुनता है कि कौन से टूल उपयोग करने हैं।
- **प्रति-प्रदाता दर सीमक** &mdash; प्रत्येक डेटा स्रोत का अपना `RateLimiter` इंस्टेंस है जो उस API की सीमाओं के अनुसार कैलिब्रेट किया गया है। कोई साझा बॉटलनेक नहीं।
- **TTL कैशिंग** &mdash; रैंसमवेयर डेटा (15 मिनट), ब्रीच सूचियां (10 मिनट), abuse.ch (5 मिनट) परिणाम कैश किए जाते हैं ताकि मल्टी-टूल वर्कफ्लो के दौरान अनावश्यक API कॉल से बचा जा सके।
- **ग्रेसफुल डिग्रेडेशन** &mdash; गायब API कुंजियां सर्वर को क्रैश नहीं करतीं। टूल वर्णनात्मक त्रुटि संदेश लौटाते हैं: "Set HIBP_API_KEY to enable breach account search."
- **DNS लीक रोकथाम** &mdash; Tor .onion टूल DNS को Tor के माध्यम से रिज़ॉल्व करने के लिए `socks5h://` प्रोटोकॉल का उपयोग करते हैं, स्थानीय रिज़ॉल्वर में DNS लीक को रोकते हैं।
- **4 डिपेंडेंसी** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent`, और `cheerio`। सभी क्लीयरनेट HTTP नेटिव `fetch` के माध्यम से। सभी Tor ट्रैफिक SOCKS5 के माध्यम से।

---

## सीमाएं

- HIBP अकाउंट/पेस्ट सर्च के लिए पेड API कुंजी आवश्यक ($3.50/माह)
- IntelligenceX, AbuseIPDB, Hudson Rock, और Hybrid Analysis को अपने टूल के लिए API कुंजी आवश्यक
- Tor .onion टूल के लिए चालू Tor SOCKS5 प्रॉक्सी आवश्यक (शामिल नहीं)
- `ABUSECH_AUTH_KEY` के बिना abuse.ch फ्री टियर में कम दर सीमा
- Ransomware.live और RansomLook डेटा अपस्ट्रीम स्क्रैपिंग फ्रीक्वेंसी पर निर्भर करता है
- ब्लॉकचेन टूल केवल Bitcoin सपोर्ट करते हैं (Ethereum/Monero नहीं)
- PhishTank डेटाबेस रीयल-टाइम फिशिंग अभियानों से पीछे रह सकता है
- macOS / Linux पर परीक्षित (Windows पर परीक्षित नहीं)

---

## MCP सुरक्षा सुइट का हिस्सा

| प्रोजेक्ट | डोमेन | टूल |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | ब्राउज़र-आधारित सुरक्षा परीक्षण | 39 टूल, Firefox, इंजेक्शन परीक्षण |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | क्लाउड सुरक्षा (AWS/Azure/GCP) | 38 टूल, 60+ चेक |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub सुरक्षा स्थिति | 39 टूल, 45 चेक |
| [cve-mcp](https://github.com/badchars/cve-mcp) | कमजोरी खुफिया | 23 टूल, 5 स्रोत |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT और रिकॉन | 37 टूल, 12 स्रोत |
| **darknet-mcp-server** | **डार्क वेब और खतरा खुफिया** | **66 टूल, 16 स्रोत** |

---

<p align="center">
<b>केवल अधिकृत सुरक्षा परीक्षण और मूल्यांकन के लिए।</b><br>
किसी भी लक्ष्य पर खुफिया जानकारी एकत्र करने से पहले हमेशा सुनिश्चित करें कि आपके पास उचित प्राधिकरण है।
</p>

<p align="center">
  <a href="LICENSE">MIT लाइसेंस</a> &bull; Bun + TypeScript के साथ निर्मित
</p>
