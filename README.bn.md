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
  <strong>বাংলা</strong> |
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

<h3 align="center">AI এজেন্টদের জন্য ডার্ক ওয়েব এবং হুমকি গোয়েন্দা তথ্য।</h3>

<p align="center">
  HIBP, ThreatFox, র‍্যানসমওয়্যার ট্র্যাকিং, Tor .onion অ্যাক্সেস, ব্লকচেইন গোয়েন্দা তথ্য, এক্সপ্লয়েট অনুসন্ধান, স্টিলার লগ, ম্যালওয়্যার বিশ্লেষণ &mdash; একটি একক MCP সার্ভারে একীভূত।<br>
  আপনার AI এজেন্ট পায় <b>চাহিদা অনুযায়ী সম্পূর্ণ-বর্ণালী ডার্ক ওয়েব গোয়েন্দা তথ্য</b>, ১৬টি ব্রাউজার ট্যাব এবং ম্যানুয়াল কোরিলেশন নয়।
</p>

<br>

<p align="center">
  <a href="#সমস্যা">সমস্যা</a> &bull;
  <a href="#এটি-কীভাবে-আলাদা">এটি কীভাবে আলাদা</a> &bull;
  <a href="#দ্রুত-শুরু">দ্রুত শুরু</a> &bull;
  <a href="#ai-কী-করতে-পারে">AI কী করতে পারে</a> &bull;
  <a href="#টুল-রেফারেন্স-৬৬টি-টুল">টুল (৬৬)</a> &bull;
  <a href="#ডেটা-সোর্স-১৬">ডেটা সোর্স</a> &bull;
  <a href="#আর্কিটেকচার">আর্কিটেকচার</a> &bull;
  <a href="CHANGELOG.md">পরিবর্তন লগ</a> &bull;
  <a href="CONTRIBUTING.md">অবদান</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="লাইসেন্স"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="৬৬টি টুল">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="১৬টি সোর্স">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server ডেমো" width="800">
</p>

---

## সমস্যা

ডার্ক ওয়েব গোয়েন্দা তথ্য প্রতিটি নিরাপত্তা তদন্তের অনুপস্থিত স্তর। ব্রিচ ডেটাবেস, র‍্যানসমওয়্যার ট্র্যাকার, Tor হিডেন সার্ভিস, ম্যালওয়্যার স্যান্ডবক্স, স্টিলার লগ, ব্লকচেইন ফরেনসিক, এক্সপ্লয়েট ডেটাবেস &mdash; আপনার প্রয়োজনীয় ডেটা ডজনখানেক প্ল্যাটফর্মে ছড়িয়ে আছে, প্রতিটির নিজস্ব API, নিজস্ব অথেন্টিকেশন, নিজস্ব রেট লিমিট, নিজস্ব আউটপুট ফরম্যাট। আজ আপনি এক ট্যাবে HIBP চেক করেন, অন্য ট্যাবে ThreatFox, Tor দিয়ে র‍্যানসমওয়্যার লিক সাইট ব্রাউজ করেন, MalwareBazaar-এ একটি হ্যাশ খোঁজেন, ব্লক এক্সপ্লোরারে ব্লকচেইন ট্রানজেকশন চেক করেন, এবং তারপর এক ঘণ্টা ধরে সব কিছু ম্যানুয়ালি একত্রিত করেন।

```
প্রচলিত ডার্ক ওয়েব গোয়েন্দা তথ্য কর্মপ্রবাহ:
  ব্রিচ এক্সপোজার চেক              ->  HIBP ওয়েব ইন্টারফেস (পেইড API)
  লিক হওয়া ক্রেডেনশিয়াল অনুসন্ধান ->  IntelligenceX ওয়েব ইন্টারফেস
  র‍্যানসমওয়্যার গ্রুপ ট্র্যাকিং    ->  ransomware.live + ransomlook.io (২টি আলাদা UI)
  .onion হিডেন সার্ভিস অ্যাক্সেস   ->  ম্যানুয়ালি Tor Browser
  ম্যালওয়্যার নমুনা বিশ্লেষণ        ->  Hybrid Analysis + MalwareBazaar (আরও ২টি UI)
  IP অপব্যবহারের ইতিহাস চেক        ->  AbuseIPDB + GreyNoise (আরও ২টি UI)
  ক্রিপ্টোকারেন্সি ট্রেসিং          ->  blockchain.info + ChainAbuse
  এক্সপ্লয়েট অনুসন্ধান              ->  Vulners ওয়েব ইন্টারফেস
  ফিশিং URL চেক                    ->  PhishTank ওয়েব ইন্টারফেস
  সব কিছু কোরিলেট করা              ->  একটি রিপোর্টে কপি-পেস্ট
  ────────────────────────────────
  মোট: প্রতি তদন্তে ৬০+ মিনিট, বেশিরভাগ সময় কনটেক্সট সুইচিংয়ে
```

**darknet-mcp-server** আপনার AI এজেন্টকে [Model Context Protocol](https://modelcontextprotocol.io)-এর মাধ্যমে ১৬টি ডেটা সোর্স জুড়ে ৬৬টি টুল প্রদান করে। এজেন্ট সমান্তরালভাবে সমস্ত সোর্স কোয়েরি করে, সারফেস এবং ডার্ক ওয়েব জুড়ে ডেটা কোরিলেট করে, হুমকি শনাক্ত করে, এবং একটি একীভূত গোয়েন্দা চিত্র উপস্থাপন করে &mdash; একটি একক কথোপকথনে।

```
darknet-mcp-server দিয়ে:
  আপনি: "target.com-এর ব্রিচ এক্সপোজার এবং হুমকি ল্যান্ডস্কেপ তদন্ত করুন"

  এজেন্ট: -> HIBP: ৩টি পরিচিত ব্রিচ (Adobe 2013, LinkedIn 2021, Collection #1)
           -> ThreatFox: ডোমেনের সাথে সম্পর্কিত ২টি IOC (C2 কলব্যাক, ফিশিং)
           -> URLhaus: সাবডোমেনে হোস্ট করা ১টি ক্ষতিকর URL
           -> র‍্যানসমওয়্যার: কোনো ভিক্টিম তালিকা পাওয়া যায়নি (ভালো)
           -> স্টিলার লগ: ৪৭টি আপোসকৃত কর্মচারী ক্রেডেনশিয়াল পাওয়া গেছে
           -> OTX: ডোমেন উল্লেখকারী ৫টি থ্রেট পালস
           -> AbuseIPDB: প্রাইমারি IP-তে ১২টি অপব্যবহার রিপোর্ট (ব্রুট ফোর্স)
           -> "target.com ৩টি ডেটা ব্রিচে ছিল যেখানে ২.১M রেকর্ড উন্মুক্ত হয়েছে।
              স্টিলার লগে ৪৭টি কর্মচারী ক্রেডেনশিয়াল পাওয়া গেছে — অবিলম্বে
              পাসওয়ার্ড রিসেট সুপারিশ করা হচ্ছে। ২টি সক্রিয় ThreatFox IOC
              চলমান টার্গেটিং নির্দেশ করে। কোনো র‍্যানসমওয়্যার তালিকা নেই,
              তবে প্রাইমারি IP-তে অপব্যবহার রিপোর্ট তদন্তের দাবি রাখে।"
```

---

## এটি কীভাবে আলাদা

বিদ্যমান টুলগুলো আপনাকে একবারে একটি সোর্স থেকে কাঁচা ডেটা দেয়। darknet-mcp-server আপনার AI এজেন্টকে **একসাথে সারফেস ওয়েব এবং ডার্ক ওয়েব গোয়েন্দা তথ্য জুড়ে যুক্তি করার** ক্ষমতা দেয়।

<table>
<thead>
<tr>
<th></th>
<th>প্রচলিত পদ্ধতি</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>ইন্টারফেস</b></td>
<td>১৬টি ভিন্ন ওয়েব UI, CLI, এবং API</td>
<td>MCP &mdash; AI এজেন্ট কথোপকথনে টুল কল করে</td>
</tr>
<tr>
<td><b>ডেটা সোর্স</b></td>
<td>একবারে একটি প্ল্যাটফর্ম</td>
<td>১৬টি সোর্স সমান্তরালভাবে কোয়েরি করা হয়</td>
</tr>
<tr>
<td><b>ব্রিচ গোয়েন্দা তথ্য</b></td>
<td>ব্রিচের জন্য HIBP ওয়েব UI, লিকের জন্য IntelligenceX</td>
<td>এজেন্ট HIBP ব্রিচ + পেস্ট + IntelligenceX + স্টিলার লগ একত্রিত করে</td>
</tr>
<tr>
<td><b>ডার্ক ওয়েব অ্যাক্সেস</b></td>
<td>ম্যানুয়াল Tor Browser, .onion সাইট থেকে কপি-পেস্ট</td>
<td>এজেন্ট SOCKS5 প্রক্সির মাধ্যমে .onion সাইট ফেচ, স্ক্র্যাপ, এবং সার্চ করে</td>
</tr>
<tr>
<td><b>ম্যালওয়্যার বিশ্লেষণ</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox আলাদাভাবে</td>
<td>এজেন্ট ক্রস-রেফারেন্স করে: "ThreatFox থেকে এই হ্যাশটি Hybrid Analysis-এও নেটওয়ার্ক IOC সহ বিশ্লেষিত হয়েছে"</td>
</tr>
<tr>
<td><b>ব্লকচেইন</b></td>
<td>ব্লক এক্সপ্লোরার + ChainAbuse আলাদাভাবে</td>
<td>এজেন্ট এক ধাপে BTC ট্রানজেকশন ট্রেস এবং অপব্যবহার রিপোর্ট চেক করে</td>
</tr>
<tr>
<td><b>API কী</b></td>
<td>প্রায় সবকিছুর জন্য প্রয়োজন</td>
<td>অনেক টুল বিনামূল্যে কাজ করে; API কী প্রিমিয়াম সোর্স আনলক করে</td>
</tr>
<tr>
<td><b>সেটআপ</b></td>
<td>প্রতিটি টুল ইনস্টল, প্রতিটি কনফিগ পরিচালনা, Tor Browser চালানো</td>
<td><code>npx darknet-mcp-server</code> &mdash; একটি কমান্ড, শূন্য কনফিগ</td>
</tr>
</tbody>
</table>

---

## দ্রুত শুরু

### বিকল্প ১: npx (ইনস্টল ছাড়া)

```bash
npx darknet-mcp-server
```

বিনামূল্যে টুলগুলো তৎক্ষণাৎ কাজ করে। র‍্যানসমওয়্যার ট্র্যাকিং, ব্রিচ তালিকা, GreyNoise, ব্লকচেইন, OTX এবং আরও অনেকের জন্য API কী প্রয়োজন নেই।

### বিকল্প ২: ক্লোন

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### এনভায়রনমেন্ট ভেরিয়েবল (ঐচ্ছিক)

```bash
# ব্রিচ এবং ক্রেডেনশিয়াল গোয়েন্দা তথ্য
export HIBP_API_KEY=your-key           # ব্রিচ অ্যাকাউন্ট সার্চ এবং পেস্ট সার্চ সক্রিয় করে
export INTELX_API_KEY=your-key         # ৪টি IntelligenceX টুল সক্রিয় করে

# হুমকি গোয়েন্দা তথ্য
export OTX_API_KEY=your-key            # AlienVault OTX রেট লিমিট বাড়ায়
export ABUSEIPDB_API_KEY=your-key      # ৪টি AbuseIPDB টুল সক্রিয় করে
export ABUSECH_AUTH_KEY=your-key       # abuse.ch স্যুটের জন্য উচ্চতর রেট লিমিট
export PULSEDIVE_API_KEY=your-key      # Pulsedive-এর জন্য উচ্চতর রেট লিমিট

# স্টিলার লগ এবং ক্রেডেনশিয়াল
export HUDSONROCK_API_KEY=your-key     # ৩টি Hudson Rock স্টিলার লগ টুল সক্রিয় করে

# এক্সপ্লয়েট এবং ম্যালওয়্যার বিশ্লেষণ
export VULNERS_API_KEY=your-key        # Vulners সার্চ এবং এক্সপ্লয়েট টুল সক্রিয় করে
export HYBRID_API_KEY=your-key         # ৩টি Hybrid Analysis ম্যালওয়্যার টুল সক্রিয় করে

# ফিশিং
export PHISHTANK_API_KEY=your-key      # PhishTank-এর জন্য উচ্চতর রেট লিমিট

# Tor SOCKS5 প্রক্সি (.onion অ্যাক্সেসের জন্য)
export TOR_SOCKS_HOST=127.0.0.1       # ডিফল্ট: 127.0.0.1
export TOR_SOCKS_PORT=9050            # ডিফল্ট: 9050
```

সমস্ত API কী ঐচ্ছিক। এগুলো ছাড়াও আপনি র‍্যানসমওয়্যার ট্র্যাকিং, ব্রিচ তালিকা, GreyNoise, ব্লকচেইন গোয়েন্দা তথ্য, OTX, Tor এক্সিট নোড চেক, অনিয়ন সার্চ, CIRCL অনিয়ন লুকআপ এবং আরও অনেক কিছু পাবেন।

### আপনার AI এজেন্টে সংযোগ করুন

<details open>
<summary><b>Claude Code</b></summary>

```bash
# npx দিয়ে
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# লোকাল ক্লোন দিয়ে
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

`~/Library/Application Support/Claude/claude_desktop_config.json`-এ যোগ করুন:

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
<summary><b>Cursor / Windsurf / অন্যান্য MCP ক্লায়েন্ট</b></summary>

একই JSON কনফিগ ফরম্যাট। কমান্ডটি `npx darknet-mcp-server` বা আপনার লোকাল ইনস্টলেশন পাথে পয়েন্ট করুন।

</details>

### Tor সেটআপ (ঐচ্ছিক, .onion অ্যাক্সেসের জন্য)

৭টি Tor টুল (`tor_fetch_onion`, `tor_scrape_onion` ইত্যাদি) একটি চলমান Tor SOCKS5 প্রক্সি প্রয়োজন।

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# সংযোগ যাচাই
npx darknet-mcp-server --check-tor
```

### কোয়েরি শুরু করুন

```
আপনি: "example.com কোনো ডেটা ব্রিচে ছিল কিনা চেক করুন এবং স্টিলার লগ খুঁজুন"
```

ব্যস এটাই। এজেন্ট স্বয়ংক্রিয়ভাবে ব্রিচ লুকআপ, ক্রেডেনশিয়াল সার্চ, হুমকি কোরিলেশন এবং আরও অনেক কিছু পরিচালনা করে।

---

## AI কী করতে পারে

### ব্রিচ তদন্ত

```
আপনি: "example.com কোনো ডেটা ব্রিচে ছিল কিনা চেক করুন"

এজেন্ট: -> breachList {domain: "example.com"}
         -> breachSearch {account: "admin@example.com"}
         -> stealer_domain {domain: "example.com"}
         -> intelx_search {term: "example.com"}
         -> "example.com ৫টি পরিচিত ব্রিচে দেখা যায়:
            - ExampleDB 2023: ৪.২M রেকর্ড (ইমেইল, পাসওয়ার্ড, IP)
            - Collection #1: ক্রেডেনশিয়াল স্টাফিং তালিকা
            - Combolist 2024: ৮৯০K ইমেইল:পাসওয়ার্ড জোড়া
            স্টিলার লগ: Hudson Rock ডেটাবেসে example.com-এর জন্য
            সংরক্ষিত ক্রেডেনশিয়াল সহ ২৩টি আপোসকৃত মেশিন পাওয়া গেছে।
            IntelligenceX: পেস্ট সাইট এবং ডার্ক ওয়েব জুড়ে ৪৭টি ফলাফল।"
```

### র‍্যানসমওয়্যার ট্র্যাকিং

```
আপনি: "কোন র‍্যানসমওয়্যার গ্রুপ স্বাস্থ্যসেবা খাতকে লক্ষ্য করছে?"

এজেন্ট: -> ransomwareBySector {sector: "healthcare"}
         -> ransomwareRecent {}
         -> ransomlookRecent {}
         -> "স্বাস্থ্যসেবা খাতে র‍্যানসমওয়্যার কার্যকলাপ:
            গত ১২ মাসে ১২টি গ্রুপ জুড়ে ১৪২ জন ভিক্টিম।
            শীর্ষ গ্রুপ: LockBit3 (৩৮ ভিক্টিম), BlackCat/ALPHV (২৪),
            Cl0p (১৯), Royal (১৫)।
            সর্বশেষ: MedCorp Inc. LockBit3 দ্বারা তালিকাভুক্ত (২ দিন আগে)।
            ransomware.live এবং RansomLook ফিড জুড়ে গত সপ্তাহে
            ৩ জন নতুন স্বাস্থ্যসেবা ভিক্টিম।"
```

### ডার্ক ওয়েব রিকন

```
আপনি: ".onion সাইটে আমাদের কোম্পানির উল্লেখ খুঁজুন"

এজেন্ট: -> tor_search_onion {query: "AcmeCorp"}
         -> intelx_search {term: "acmecorp.com"}
         -> onion_lookup {address: "relevant-onion-address.onion"}
         -> "AcmeCorp-এর জন্য ডার্ক ওয়েব সার্চ ফলাফল:
            Ahmia.fi: ৩টি .onion পেজ AcmeCorp উল্লেখ করে
            - AcmeCorp কর্মচারী তালিকা নিয়ে ফোরাম পোস্ট (লিক ফোরাম)
            - AcmeCorp ডেটাবেসের মার্কেটপ্লেস তালিকা (অযাচাইকৃত)
            - AcmeCorp ব্রিচ উল্লেখকারী ব্লগ পোস্ট
            IntelligenceX: পেস্ট সাইটে ১২টি ফলাফল
            সুপারিশ: সম্ভাব্য সক্রিয় ডেটা বিক্রির জন্য ফোরাম পোস্ট
            এবং মার্কেটপ্লেস তালিকা তদন্ত করুন।"
```

### ম্যালওয়্যার বিশ্লেষণ

```
আপনি: "ম্যালওয়্যার ইন্ডিকেটরের জন্য এই ফাইল হ্যাশ বিশ্লেষণ করুন: abc123def456..."

এজেন্ট: -> malware_search {hash: "abc123def456..."}
         -> malware_overview {sha256: "abc123def456..."}
         -> bazaarHash {hash: "abc123def456..."}
         -> threatfoxSearch {searchTerm: "abc123def456..."}
         -> otx_hash {hash: "abc123def456..."}
         -> "abc123def456-এর ম্যালওয়্যার বিশ্লেষণ:
            Hybrid Analysis: ক্ষতিকর (হুমকি স্কোর ৯৫/১০০)
            - পরিবার: AgentTesla (তথ্য চুরিকারী)
            - MITRE ATT&CK: T1555 (ক্রেডেনশিয়াল অ্যাক্সেস), T1071 (C2)
            - নেটওয়ার্ক IOC: ৩টি C2 ডোমেইন, ২টি IP
            MalwareBazaar: প্রথম দেখা ২০২৪-০৩-১৫, ট্যাগ 'AgentTesla'
            ThreatFox: একই ক্যাম্পেইনের সাথে সংযুক্ত ২টি IOC এন্ট্রি
            OTX: ৪টি থ্রেট পালসে উল্লেখিত"
```

---

## টুল রেফারেন্স (৬৬টি টুল)

<details open>
<summary><b>Tor নেটওয়ার্ক (৭) &mdash; API কী নেই (.onion টুলের জন্য Tor ডেমন প্রয়োজন)</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `tor_status` | লোকাল Tor SOCKS5 প্রক্সি ডেমন চলছে এবং অ্যাক্সেসযোগ্য কিনা চেক করুন |
| `tor_fetch_onion` | Tor SOCKS5 প্রক্সির মাধ্যমে একটি .onion URL থেকে কাঁচা HTML ফেচ করুন (socks5h-এর মাধ্যমে DNS লিক প্রতিরোধ) |
| `tor_scrape_onion` | একটি .onion সাইট ফেচ এবং পার্স করুন &mdash; স্ট্রাকচার্ড ডেটা রিটার্ন করে: শিরোনাম, লিঙ্ক, বডি টেক্সট |
| `tor_search_onion` | Ahmia.fi সার্চ ইঞ্জিন ব্যবহার করে .onion সাইট খুঁজুন |
| `tor_exit_nodes` | অফিসিয়াল Tor Project বাল্ক এক্সিট তালিকা থেকে বর্তমান Tor এক্সিট নোড IP ঠিকানা পান |
| `tor_exit_check` | একটি নির্দিষ্ট IP ঠিকানা পরিচিত Tor এক্সিট নোড কিনা চেক করুন |
| `tor_exit_details` | ফিঙ্গারপ্রিন্ট এবং পাবলিশ টাইমস্ট্যাম্প সহ বিস্তারিত Tor এক্সিট নোড তথ্য পান |

</details>

<details>
<summary><b>র‍্যানসমওয়্যার গোয়েন্দা তথ্য (৯) &mdash; API কী নেই</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `ransomwareRecent` | ransomware.live থেকে সাম্প্রতিক র‍্যানসমওয়্যার ভিক্টিম ফেচ করুন |
| `ransomwareGroups` | ransomware.live দ্বারা ট্র্যাক করা সমস্ত পরিচিত র‍্যানসমওয়্যার গ্রুপ তালিকা করুন |
| `ransomwareGroup` | নাম দিয়ে একটি নির্দিষ্ট র‍্যানসমওয়্যার গ্রুপের বিস্তারিত প্রোফাইল পান |
| `ransomwareGroupVictims` | একটি নির্দিষ্ট র‍্যানসমওয়্যার গ্রুপ দ্বারা দাবি করা সমস্ত ভিক্টিম পান |
| `ransomwareSearch` | কীওয়ার্ড দিয়ে র‍্যানসমওয়্যার ভিক্টিম খুঁজুন (কোম্পানির নাম, ডোমেইন ইত্যাদি) |
| `ransomwareByCountry` | ISO 3166-1 alpha-2 দেশের কোড দিয়ে ফিল্টার করা র‍্যানসমওয়্যার ভিক্টিম পান |
| `ransomwareBySector` | সেক্টর/শিল্প দিয়ে ফিল্টার করা র‍্যানসমওয়্যার ভিক্টিম পান (স্বাস্থ্যসেবা, অর্থ ইত্যাদি) |
| `ransomlookGroups` | RansomLook দ্বারা ট্র্যাক করা সমস্ত ৫৮২+ র‍্যানসমওয়্যার গ্রুপ তালিকা করুন |
| `ransomlookRecent` | RansomLook থেকে সাম্প্রতিক র‍্যানসমওয়্যার পোস্ট এবং ভিক্টিম দাবি ফেচ করুন |

</details>

<details>
<summary><b>ব্রিচ গোয়েন্দা তথ্য &mdash; HIBP (৭) &mdash; আংশিক: কিছু টুল বিনামূল্যে, অ্যাকাউন্ট সার্চে HIBP_API_KEY প্রয়োজন</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `breachList` | HaveIBeenPwned থেকে সমস্ত পরিচিত ডেটা ব্রিচ তালিকা করুন, ঐচ্ছিকভাবে ডোমেইন দিয়ে ফিল্টার &mdash; বিনামূল্যে |
| `breachGet` | নাম দিয়ে একটি নির্দিষ্ট ডেটা ব্রিচের বিবরণ পান &mdash; বিনামূল্যে |
| `breachLatest` | সর্বশেষ যোগ করা ডেটা ব্রিচ পান &mdash; বিনামূল্যে |
| `breachDataClasses` | HIBP-তে পরিচিত সমস্ত ডেটা ক্লাস (আপোসকৃত ডেটার ধরন) তালিকা করুন &mdash; বিনামূল্যে |
| `breachPassword` | একটি পাসওয়ার্ড পরিচিত ব্রিচে দেখা গেছে কিনা চেক করুন (k-অ্যানোনিমিটি, শুধু ৫-অক্ষরের SHA-1 প্রিফিক্স পাঠানো হয়) &mdash; বিনামূল্যে |
| `breachSearch` | একটি নির্দিষ্ট অ্যাকাউন্টের (ইমেইল/ইউজারনেম) জন্য সমস্ত ব্রিচ খুঁজুন &mdash; `HIBP_API_KEY` প্রয়োজন |
| `breachPastes` | পাবলিকলি পোস্ট করা পেস্টে একটি ইমেইল ঠিকানা খুঁজুন &mdash; `HIBP_API_KEY` প্রয়োজন |

</details>

<details>
<summary><b>abuse.ch স্যুট (৯) &mdash; API কী নেই (উচ্চতর রেটের জন্য ABUSECH_AUTH_KEY ঐচ্ছিক)</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `threatfoxGetIocs` | গত N দিনে রিপোর্ট করা ThreatFox থেকে সাম্প্রতিক IOC পান |
| `threatfoxSearch` | IP, ডোমেইন, হ্যাশ, বা URL দিয়ে ThreatFox IOC খুঁজুন |
| `threatfoxTag` | ট্যাগ দিয়ে ThreatFox IOC খুঁজুন (যেমন Cobalt Strike, Emotet) |
| `threatfoxMalware` | Malpedia নামকরণ ব্যবহার করে ম্যালওয়্যার পরিবার দিয়ে ThreatFox IOC খুঁজুন |
| `urlhausLookup` | ম্যালওয়্যার বিতরণের জন্য URLhaus-এ একটি URL বা হোস্ট খুঁজুন |
| `urlhausTag` | ট্যাগ দিয়ে URLhaus এন্ট্রি খুঁজুন |
| `bazaarHash` | MD5, SHA1, বা SHA256 হ্যাশ দিয়ে MalwareBazaar-এ একটি ম্যালওয়্যার নমুনা খুঁজুন |
| `bazaarRecent` | MalwareBazaar থেকে সর্বশেষ জমা দেওয়া ম্যালওয়্যার নমুনা পান |
| `bazaarTag` | ট্যাগ বা YARA সিগনেচার নাম দিয়ে MalwareBazaar খুঁজুন |

</details>

<details>
<summary><b>AlienVault OTX (৫) &mdash; API কী নেই (উচ্চতর রেটের জন্য OTX_API_KEY ঐচ্ছিক)</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `otx_ip` | একটি IP ঠিকানার জন্য হুমকি গোয়েন্দা তথ্য দেখুন &mdash; পালস তথ্য, সুনাম, দেশ, ASN |
| `otx_domain` | একটি ডোমেইনের জন্য হুমকি গোয়েন্দা তথ্য দেখুন &mdash; পালস তথ্য, whois, সুনাম |
| `otx_hash` | একটি ফাইল হ্যাশের (MD5, SHA1, SHA256) জন্য হুমকি গোয়েন্দা তথ্য দেখুন |
| `otx_cve` | একটি CVE-এর জন্য হুমকি গোয়েন্দা তথ্য দেখুন &mdash; সম্পর্কিত পালস এবং ইন্ডিকেটর |
| `otx_search_pulses` | কীওয়ার্ড দিয়ে OTX থ্রেট পালস খুঁজুন |

</details>

<details>
<summary><b>AbuseIPDB (৪) &mdash; ABUSEIPDB_API_KEY প্রয়োজন</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `abuseipdb_check` | একটি IP ঠিকানায় অপব্যবহার রিপোর্ট চেক করুন &mdash; কনফিডেন্স স্কোর, ISP, দেশ, রিপোর্ট সংখ্যা |
| `abuseipdb_reports` | বিস্তারিত মন্তব্য এবং ক্যাটাগরি সহ একটি IP-এর জন্য পৃথক অপব্যবহার রিপোর্ট পান |
| `abuseipdb_blacklist` | AbuseIPDB-র সবচেয়ে বেশি রিপোর্ট করা ক্ষতিকর IP ঠিকানার ব্ল্যাকলিস্ট পান |
| `abuseipdb_check_block` | অপব্যবহার রিপোর্টের জন্য একটি সম্পূর্ণ CIDR নেটওয়ার্ক ব্লক চেক করুন |

</details>

<details>
<summary><b>GreyNoise Community (২) &mdash; API কী নেই</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `greynoise_ip` | GreyNoise-এ একটি IP দেখুন &mdash; শ্রেণিবিভাগ (সৌম্য/ক্ষতিকর/অজানা), স্ক্যানার স্ট্যাটাস |
| `greynoise_check` | দ্রুত চেক: এই IP কি একটি পরিচিত স্ক্যানার বা পরিচিত সৌম্য সেবা? |

</details>

<details>
<summary><b>Pulsedive (৩) &mdash; API কী নেই (উচ্চতর রেটের জন্য PULSEDIVE_API_KEY ঐচ্ছিক)</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `pulsedive_indicator` | একটি ইন্ডিকেটর (IP, ডোমেইন, URL, বা হ্যাশ) দেখুন &mdash; ঝুঁকির মাত্রা, হুমকি, ফিড |
| `pulsedive_search` | মান দিয়ে Pulsedive ইন্ডিকেটর খুঁজুন |
| `pulsedive_explore` | উন্নত কোয়েরি ব্যবহার করে সংযুক্ত ইন্ডিকেটর অন্বেষণ করুন (ঝুঁকির মাত্রা সহ সম্পর্কিত IOC) |

</details>

<details>
<summary><b>Hudson Rock স্টিলার লগ (৩) &mdash; HUDSONROCK_API_KEY প্রয়োজন</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `stealer_domain` | ডোমেইন দিয়ে স্টিলার লগ এন্ট্রি খুঁজুন &mdash; আপোসকৃত মেশিন, ক্রেডেনশিয়াল, ম্যালওয়্যার বিবরণ |
| `stealer_email` | ইমেইল ঠিকানা দিয়ে স্টিলার লগ খুঁজুন &mdash; ব্রাউজার ক্রেডেনশিয়ালে সেই ইমেইল সহ আপোসকৃত মেশিন |
| `stealer_ip` | IP ঠিকানা দিয়ে স্টিলার লগ খুঁজুন &mdash; সেই IP থেকে উদ্ভূত আপোসকৃত মেশিন |

</details>

<details>
<summary><b>Vulners এক্সপ্লয়েট (৩) &mdash; API কী নেই (সার্চের জন্য VULNERS_API_KEY ঐচ্ছিক)</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `vulners_search` | Lucene কোয়েরি ব্যবহার করে Vulners ভালনারেবিলিটি ডেটাবেস খুঁজুন |
| `vulners_id` | ID দিয়ে একটি নির্দিষ্ট ভালনারেবিলিটি বা এক্সপ্লয়েট দেখুন (CVE, EDB, GHSA) &mdash; বিনামূল্যে |
| `vulners_exploit` | বিশেষভাবে এক্সপ্লয়েট খুঁজুন (ExploitDB এন্ট্রি) |

</details>

<details>
<summary><b>ব্লকচেইন গোয়েন্দা তথ্য (৪) &mdash; API কী নেই</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `btc_address` | একটি Bitcoin ঠিকানা দেখুন &mdash; ব্যালেন্স, ট্রানজেকশন সংখ্যা, সাম্প্রতিক ট্রানজেকশন |
| `btc_balance` | সাতোশিতে Bitcoin ঠিকানার ব্যালেন্স পান (সম্পূর্ণ ইতিহাস ছাড়া দ্রুত চেক) |
| `btc_tx` | হ্যাশ দিয়ে বিস্তারিত Bitcoin ট্রানজেকশন তথ্য পান &mdash; ইনপুট, আউটপুট, ফি, ব্লক তথ্য |
| `btc_abuse_check` | ChainAbuse-এ একটি Bitcoin ঠিকানায় অপব্যবহার রিপোর্ট চেক করুন &mdash; ক্যাটাগরি সহ স্ক্যাম রিপোর্ট |

</details>

<details>
<summary><b>Hybrid Analysis ম্যালওয়্যার (৩) &mdash; HYBRID_API_KEY প্রয়োজন</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `malware_search` | ফাইল হ্যাশ দিয়ে Hybrid Analysis স্যান্ডবক্স খুঁজুন &mdash; রায়, AV সনাক্তকরণ হার, বিশ্লেষণ বিবরণ |
| `malware_overview` | সম্পূর্ণ ম্যালওয়্যার বিশ্লেষণ ওভারভিউ &mdash; MITRE ATT&CK কৌশল, নেটওয়ার্ক ইন্ডিকেটর, প্রসেস |
| `malware_feed` | সর্বশেষ ম্যালওয়্যার ডেটোনেশন ফিড পান &mdash; রায় সহ সাম্প্রতিক বিশ্লেষিত নমুনা |

</details>

<details>
<summary><b>CIRCL Onion Lookup (১) &mdash; API কী নেই</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `onion_lookup` | CIRCL AIL প্রকল্পের মাধ্যমে একটি .onion ঠিকানার মেটাডেটা দেখুন &mdash; প্রথম/শেষ দেখা, স্ট্যাটাস, ট্যাগ, সার্টিফিকেট, পোর্ট, BTC ঠিকানা |

</details>

<details>
<summary><b>IntelligenceX (৪) &mdash; INTELX_API_KEY প্রয়োজন</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `intelx_search` | লিক হওয়া ডেটা, ডার্ক ওয়েব কন্টেন্ট এবং আরও অনেক কিছুর জন্য IntelligenceX-এ সার্চ শুরু করুন |
| `intelx_search_results` | ID দিয়ে IntelligenceX সার্চের ফলাফল পান |
| `intelx_phonebook` | ফোনবুক সার্চ &mdash; একটি পদের সাথে সম্পর্কিত ইমেইল, ডোমেইন, URL খুঁজুন |
| `intelx_phonebook_results` | ID দিয়ে ফোনবুক সার্চের ফলাফল পান |

</details>

<details>
<summary><b>PhishTank (১) &mdash; API কী নেই (উচ্চতর রেটের জন্য PHISHTANK_API_KEY ঐচ্ছিক)</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `phishing_check` | PhishTank-এর মাধ্যমে একটি URL পরিচিত ফিশিং সাইট কিনা চেক করুন |

</details>

<details>
<summary><b>Meta (১) &mdash; API কী নেই</b></summary>

| টুল | বিবরণ |
|------|-------------|
| `darknet_list_sources` | কনফিগারেশন স্ট্যাটাস, API কী স্ট্যাটাস এবং টুল সংখ্যা সহ সমস্ত উপলব্ধ ডেটা সোর্স তালিকা করুন |

</details>

---

### CLI ব্যবহার

```bash
# সমস্ত উপলব্ধ টুল তালিকা করুন
npx darknet-mcp-server --list

# Tor SOCKS5 প্রক্সি সংযোগ চেক করুন
npx darknet-mcp-server --check-tor

# যেকোনো টুল সরাসরি চালান
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# API কী প্রয়োজনীয় টুল
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## ডেটা সোর্স (১৬)

| সোর্স | অথেন্টিকেশন | রেট লিমিট | কী প্রদান করে |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | ১ রিকোয়েস্ট/১.৫সে | ব্রিচ সার্চ, পেস্ট সার্চ, পাসওয়ার্ড চেক, ব্রিচ তালিকা |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | ১ রিকোয়েস্ট/সে | ডার্ক ওয়েব কন্টেন্ট, লিক ডেটা সার্চ, ফোনবুক (ইমেইল/ডোমেইন/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | ঐচ্ছিক | ১ রিকোয়েস্ট/সে | IP, ডোমেইন, হ্যাশ, CVE-এর জন্য হুমকি গোয়েন্দা তথ্য; থ্রেট পালস সার্চ |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | ১ রিকোয়েস্ট/সে | IP অপব্যবহার রিপোর্ট, কনফিডেন্স স্কোরিং, ব্ল্যাকলিস্ট, CIDR ব্লক চেক |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | ঐচ্ছিক | ২ রিকোয়েস্ট/সে | IOC সার্চ, ম্যালওয়্যার পরিবার ট্র্যাকিং, ট্যাগ-ভিত্তিক সার্চ |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | ঐচ্ছিক | ২ রিকোয়েস্ট/সে | ম্যালওয়্যার বিতরণ URL ট্র্যাকিং, হোস্ট/URL লুকআপ |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | ঐচ্ছিক | ২ রিকোয়েস্ট/সে | ম্যালওয়্যার নমুনা রিপোজিটরি, হ্যাশ লুকআপ, YARA সিগনেচার সার্চ |
| [GreyNoise](https://www.greynoise.io) | নেই | ১ রিকোয়েস্ট/সে | IP শ্রেণিবিভাগ (সৌম্য/ক্ষতিকর), ইন্টারনেট স্ক্যানার সনাক্তকরণ |
| [Pulsedive](https://pulsedive.com) | ঐচ্ছিক | ১ রিকোয়েস্ট/সে | ইন্ডিকেটর সমৃদ্ধকরণ, ঝুঁকি স্কোরিং, সংযুক্ত IOC অন্বেষণ |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | ১ রিকোয়েস্ট/সে | ডোমেইন, ইমেইল, বা IP দিয়ে স্টিলার লগ সার্চ |
| [Vulners](https://vulners.com) | ঐচ্ছিক | ১ রিকোয়েস্ট/সে | ভালনারেবিলিটি/এক্সপ্লয়েট ডেটাবেস, CVE লুকআপ, ExploitDB সার্চ |
| [Blockchain.info](https://blockchain.info) | নেই | ১ রিকোয়েস্ট/সে | Bitcoin ঠিকানা লুকআপ, ব্যালেন্স, ট্রানজেকশন বিবরণ |
| [ChainAbuse](https://www.chainabuse.com) | নেই | ১ রিকোয়েস্ট/সে | Bitcoin ঠিকানা অপব্যবহার/স্ক্যাম রিপোর্ট |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | ১ রিকোয়েস্ট/সে | ম্যালওয়্যার স্যান্ডবক্স ডেটোনেশন, MITRE ATT&CK ম্যাপিং, নমুনা ফিড |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | নেই | ০.৫ রিকোয়েস্ট/সে | .onion ঠিকানা মেটাডেটা, প্রথম/শেষ দেখা, সম্পর্কিত BTC ঠিকানা |
| [Tor Network](https://www.torproject.org) | নেই | প্রযোজ্য নয় | এক্সিট নোড তালিকা, .onion ফেচিং/স্ক্র্যাপিং, Ahmia.fi সার্চ |

---

## আর্কিটেকচার

```
src/
  index.ts                # CLI এন্ট্রিপয়েন্ট (--help, --list, --check-tor, stdio সার্ভার)
  protocol/
    mcp-server.ts         # MCP সার্ভার সেটআপ (stdio ট্রান্সপোর্ট)
    tools.ts              # টুল রেজিস্ট্রি — সমস্ত ৬৬টি টুল এখানে একত্রিত
  types/
    index.ts              # শেয়ার্ড টাইপ (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # প্রতি-প্রোভাইডার রেট লিমিটার
    cache.ts              # API রেসপন্সের জন্য TTL ক্যাশ
    tor-fetch.ts          # Tor SOCKS5 প্রক্সি HTTP ক্লায়েন্ট
    require-key.ts        # API কী ভ্যালিডেশন হেল্পার
  tor/                    # Tor নেটওয়ার্ক টুল (৭)
  ransomware/             # র‍্যানসমওয়্যার গোয়েন্দা তথ্য টুল (৯)
  breach/                 # HIBP ব্রিচ টুল (৭)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar টুল (৯)
  otx/                    # AlienVault OTX টুল (৫)
  abuseipdb/              # AbuseIPDB টুল (৪)
  greynoise/              # GreyNoise Community টুল (২)
  pulsedive/              # Pulsedive টুল (৩)
  hudsonrock/             # Hudson Rock স্টিলার লগ টুল (৩)
  vulners/                # Vulners এক্সপ্লয়েট টুল (৩)
  blockchain/             # ব্লকচেইন গোয়েন্দা তথ্য টুল (৪)
  hybrid/                 # Hybrid Analysis ম্যালওয়্যার টুল (৩)
  onionlookup/            # CIRCL Onion Lookup টুল (১)
  intelx/                 # IntelligenceX টুল (৪)
  phishing/               # PhishTank টুল (১)
  meta/                   # Meta টুল (১)
```

**ডিজাইন সিদ্ধান্ত:**

- **১৬ প্রোভাইডার, ১ সার্ভার** &mdash; প্রতিটি ডেটা সোর্স একটি স্বাধীন মডিউল। এজেন্ট কোয়েরির উপর ভিত্তি করে কোন টুল ব্যবহার করবে তা বেছে নেয়।
- **প্রতি-প্রোভাইডার রেট লিমিটার** &mdash; প্রতিটি ডেটা সোর্সের নিজস্ব `RateLimiter` ইনস্ট্যান্স আছে যা সেই API-র সীমার সাথে ক্যালিব্রেটেড। কোনো শেয়ার্ড বটলনেক নেই।
- **TTL ক্যাশিং** &mdash; র‍্যানসমওয়্যার ডেটা (১৫ মিনিট), ব্রিচ তালিকা (১০ মিনিট), abuse.ch (৫ মিনিট) ফলাফল ক্যাশ করা হয় মাল্টি-টুল ওয়ার্কফ্লোর সময় অপ্রয়োজনীয় API কল এড়াতে।
- **গ্রেসফুল ডিগ্রেডেশন** &mdash; অনুপস্থিত API কী সার্ভার ক্র্যাশ করে না। টুলগুলো বর্ণনামূলক ত্রুটি বার্তা রিটার্ন করে: "Set HIBP_API_KEY to enable breach account search."
- **DNS লিক প্রতিরোধ** &mdash; Tor .onion টুলগুলো Tor-এর মাধ্যমে DNS রিজলভ করতে `socks5h://` প্রোটোকল ব্যবহার করে, লোকাল রিজলভারে DNS লিক প্রতিরোধ করে।
- **৪টি ডিপেন্ডেন্সি** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent`, এবং `cheerio`। সমস্ত ক্লিয়ারনেট HTTP নেটিভ `fetch`-এর মাধ্যমে। সমস্ত Tor ট্রাফিক SOCKS5-এর মাধ্যমে।

---

## সীমাবদ্ধতা

- HIBP অ্যাকাউন্ট/পেস্ট সার্চে একটি পেইড API কী প্রয়োজন ($৩.৫০/মাস)
- IntelligenceX, AbuseIPDB, Hudson Rock, এবং Hybrid Analysis তাদের টুলের জন্য API কী প্রয়োজন
- Tor .onion টুলের জন্য একটি চলমান Tor SOCKS5 প্রক্সি প্রয়োজন (অন্তর্ভুক্ত নয়)
- abuse.ch ফ্রি টিয়ারে `ABUSECH_AUTH_KEY` ছাড়া কম রেট লিমিট
- Ransomware.live এবং RansomLook ডেটা আপস্ট্রিম স্ক্র্যাপিং ফ্রিকোয়েন্সির উপর নির্ভর করে
- ব্লকচেইন টুলগুলো শুধু Bitcoin সমর্থন করে (Ethereum/Monero নয়)
- PhishTank ডেটাবেস রিয়েল-টাইম ফিশিং ক্যাম্পেইনের পিছনে পড়তে পারে
- macOS / Linux পরীক্ষিত (Windows পরীক্ষিত নয়)

---

## MCP নিরাপত্তা স্যুটের অংশ

| প্রকল্প | ডোমেইন | টুল |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | ব্রাউজার-ভিত্তিক নিরাপত্তা পরীক্ষা | ৩৯টি টুল, Firefox, ইনজেকশন পরীক্ষা |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | ক্লাউড নিরাপত্তা (AWS/Azure/GCP) | ৩৮টি টুল, ৬০+ চেক |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub নিরাপত্তা অবস্থান | ৩৯টি টুল, ৪৫ চেক |
| [cve-mcp](https://github.com/badchars/cve-mcp) | ভালনারেবিলিটি গোয়েন্দা তথ্য | ২৩টি টুল, ৫টি সোর্স |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT এবং রিকনেসান্স | ৩৭টি টুল, ১২টি সোর্স |
| **darknet-mcp-server** | **ডার্ক ওয়েব এবং হুমকি গোয়েন্দা তথ্য** | **৬৬টি টুল, ১৬টি সোর্স** |

---

<p align="center">
<b>শুধুমাত্র অনুমোদিত নিরাপত্তা পরীক্ষা এবং মূল্যায়নের জন্য।</b><br>
যেকোনো লক্ষ্যবস্তুতে গোয়েন্দা তথ্য সংগ্রহের আগে সর্বদা নিশ্চিত করুন যে আপনার যথাযথ অনুমোদন আছে।
</p>

<p align="center">
  <a href="LICENSE">MIT লাইসেন্স</a> &bull; Bun + TypeScript দিয়ে নির্মিত
</p>
