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
  <strong>العربية</strong> |
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

<h3 align="center">استخبارات الويب المظلم والتهديدات لوكلاء الذكاء الاصطناعي.</h3>

<p align="center">
  HIBP، ThreatFox، تتبع برامج الفدية، الوصول إلى مواقع Tor .onion، استخبارات البلوكتشين، البحث عن الثغرات، سجلات البرمجيات السارقة، تحليل البرمجيات الخبيثة &mdash; كلها موحدة في خادم MCP واحد.<br>
  يحصل وكيل الذكاء الاصطناعي الخاص بك على <b>استخبارات شاملة للويب المظلم عند الطلب</b>، وليس 16 علامة تبويب في المتصفح وربط يدوي للبيانات.
</p>

<br>

<p align="center">
  <a href="#المشكلة">المشكلة</a> &bull;
  <a href="#كيف-يختلف">كيف يختلف</a> &bull;
  <a href="#البداية-السريعة">البداية السريعة</a> &bull;
  <a href="#ما-يمكن-للذكاء-الاصطناعي-فعله">ما يمكن للذكاء الاصطناعي فعله</a> &bull;
  <a href="#مرجع-الأدوات-66-أداة">الأدوات (66)</a> &bull;
  <a href="#مصادر-البيانات-16">مصادر البيانات</a> &bull;
  <a href="#البنية">البنية</a> &bull;
  <a href="CHANGELOG.md">سجل التغييرات</a> &bull;
  <a href="CONTRIBUTING.md">المساهمة</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="الرخصة"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 أداة">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 مصدر">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="عرض darknet-mcp-server" width="800">
</p>

---

## المشكلة

استخبارات الويب المظلم هي الطبقة المفقودة في كل تحقيق أمني. قواعد بيانات الاختراقات، متتبعات برامج الفدية، خدمات Tor المخفية، صناديق تحليل البرمجيات الخبيثة، سجلات البرمجيات السارقة، التحليل الجنائي للبلوكتشين، قواعد بيانات الثغرات &mdash; البيانات التي تحتاجها متناثرة عبر عشرات المنصات، كل منها بواجهة برمجة تطبيقات خاصة، ومصادقة خاصة، وحدود معدل خاصة، وتنسيق إخراج خاص. اليوم تتحقق من HIBP في علامة تبويب، و ThreatFox في أخرى، وتتصفح مواقع تسريبات برامج الفدية عبر Tor، وتبحث في MalwareBazaar عن تجزئة ملف، وتتحقق من معاملات البلوكتشين في مستكشف كتل، ثم تقضي ساعة في تجميع كل ذلك يدويًا.

```
سير العمل التقليدي لاستخبارات الويب المظلم:
  التحقق من التعرض للاختراق      ->  واجهة HIBP (API مدفوع)
  البحث في بيانات الاعتماد المسربة ->  واجهة IntelligenceX
  تتبع مجموعات برامج الفدية      ->  ransomware.live + ransomlook.io (واجهتان منفصلتان)
  الوصول لخدمات .onion المخفية    ->  متصفح Tor يدويًا
  تحليل عينات البرمجيات الخبيثة   ->  Hybrid Analysis + MalwareBazaar (واجهتان إضافيتان)
  التحقق من سجل إساءة استخدام IP  ->  AbuseIPDB + GreyNoise (واجهتان إضافيتان)
  تتبع العملات المشفرة            ->  blockchain.info + ChainAbuse
  البحث عن الثغرات               ->  واجهة Vulners
  التحقق من روابط التصيد          ->  واجهة PhishTank
  ربط كل شيء                     ->  نسخ ولصق في تقرير
  ────────────────────────────────
  المجموع: 60+ دقيقة لكل تحقيق، معظمها في التنقل بين السياقات
```

**darknet-mcp-server** يمنح وكيل الذكاء الاصطناعي الخاص بك 66 أداة عبر 16 مصدر بيانات من خلال [بروتوكول سياق النموذج](https://modelcontextprotocol.io). يستعلم الوكيل من جميع المصادر بالتوازي، ويربط البيانات عبر الويب السطحي والمظلم، ويحدد التهديدات، ويقدم صورة استخباراتية موحدة &mdash; في محادثة واحدة.

```
مع darknet-mcp-server:
  أنت: "تحقق من تعرض target.com للاختراق ومشهد التهديدات"

  الوكيل: -> HIBP: 3 اختراقات معروفة (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: مؤشران اختراق مرتبطان بالنطاق (استدعاء C2، تصيد)
         -> URLhaus: رابط خبيث واحد مستضاف على نطاق فرعي
         -> برامج الفدية: لم يتم العثور على قوائم ضحايا (جيد)
         -> سجلات البرمجيات السارقة: تم العثور على 47 بيانات اعتماد موظف مخترقة
         -> OTX: 5 نبضات تهديد تشير إلى النطاق
         -> AbuseIPDB: عنوان IP الرئيسي لديه 12 بلاغ إساءة (هجوم قوة غاشمة)
         -> "target.com تعرض لـ 3 اختراقات بيانات كشفت 2.1 مليون سجل.
            تم العثور على 47 بيانات اعتماد موظف في سجلات البرمجيات السارقة — يوصى
            بإعادة تعيين كلمات المرور فورًا. مؤشرا اختراق نشطان في ThreatFox
            يشيران إلى استهداف مستمر. لا توجد قوائم في برامج الفدية، لكن
            بلاغات الإساءة على عنوان IP الرئيسي تستدعي التحقيق."
```

---

## كيف يختلف

الأدوات الحالية تعطيك بيانات خام من مصدر واحد في كل مرة. darknet-mcp-server يمنح وكيل الذكاء الاصطناعي القدرة على **التفكير عبر استخبارات الويب السطحي والمظلم في آن واحد**.

<table>
<thead>
<tr>
<th></th>
<th>النهج التقليدي</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>الواجهة</b></td>
<td>16 واجهة ويب مختلفة، أدوات سطر أوامر، وواجهات برمجة تطبيقات</td>
<td>MCP &mdash; وكيل الذكاء الاصطناعي يستدعي الأدوات عبر المحادثة</td>
</tr>
<tr>
<td><b>مصادر البيانات</b></td>
<td>منصة واحدة في كل مرة</td>
<td>16 مصدرًا يتم الاستعلام منها بالتوازي</td>
</tr>
<tr>
<td><b>استخبارات الاختراق</b></td>
<td>واجهة HIBP للاختراقات، IntelligenceX للتسريبات</td>
<td>الوكيل يجمع اختراقات HIBP + اللصقات + IntelligenceX + سجلات البرمجيات السارقة</td>
</tr>
<tr>
<td><b>الوصول للويب المظلم</b></td>
<td>متصفح Tor يدويًا، نسخ ولصق من مواقع .onion</td>
<td>الوكيل يجلب ويحلل ويبحث في مواقع .onion عبر وكيل SOCKS5</td>
</tr>
<tr>
<td><b>تحليل البرمجيات الخبيثة</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox كل على حدة</td>
<td>الوكيل يقارن: "هذه التجزئة من ThreatFox تم تفجيرها أيضًا في Hybrid Analysis مع مؤشرات شبكة"</td>
</tr>
<tr>
<td><b>البلوكتشين</b></td>
<td>مستكشف كتل + ChainAbuse كل على حدة</td>
<td>الوكيل يتتبع معاملات BTC ويتحقق من بلاغات الإساءة في خطوة واحدة</td>
</tr>
<tr>
<td><b>مفاتيح API</b></td>
<td>مطلوبة لكل شيء تقريبًا</td>
<td>العديد من الأدوات تعمل مجانًا؛ مفاتيح API تفتح المصادر المتميزة</td>
</tr>
<tr>
<td><b>الإعداد</b></td>
<td>تثبيت كل أداة، إدارة كل تكوين، تشغيل متصفح Tor</td>
<td><code>npx darknet-mcp-server</code> &mdash; أمر واحد، بدون تكوين</td>
</tr>
</tbody>
</table>

---

## البداية السريعة

### الخيار 1: npx (بدون تثبيت)

```bash
npx darknet-mcp-server
```

الأدوات المجانية تعمل فورًا. لا حاجة لمفاتيح API لتتبع برامج الفدية، وقوائم الاختراقات، و GreyNoise، والبلوكتشين، و OTX، والمزيد.

### الخيار 2: الاستنساخ

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### متغيرات البيئة (اختيارية)

```bash
# استخبارات الاختراق وبيانات الاعتماد
export HIBP_API_KEY=your-key           # يفعّل البحث في حسابات الاختراق والبحث في اللصقات
export INTELX_API_KEY=your-key         # يفعّل 4 أدوات IntelligenceX

# استخبارات التهديدات
export OTX_API_KEY=your-key            # يزيد حدود معدل AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # يفعّل 4 أدوات AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # حدود معدل أعلى لمجموعة abuse.ch
export PULSEDIVE_API_KEY=your-key      # حدود معدل أعلى لـ Pulsedive

# سجلات البرمجيات السارقة وبيانات الاعتماد
export HUDSONROCK_API_KEY=your-key     # يفعّل 3 أدوات سجلات Hudson Rock السارقة

# تحليل الثغرات والبرمجيات الخبيثة
export VULNERS_API_KEY=your-key        # يفعّل أدوات البحث والثغرات في Vulners
export HYBRID_API_KEY=your-key         # يفعّل 3 أدوات Hybrid Analysis للبرمجيات الخبيثة

# التصيد
export PHISHTANK_API_KEY=your-key      # حدود معدل أعلى لـ PhishTank

# وكيل Tor SOCKS5 (للوصول إلى .onion)
export TOR_SOCKS_HOST=127.0.0.1       # الافتراضي: 127.0.0.1
export TOR_SOCKS_PORT=9050            # الافتراضي: 9050
```

جميع مفاتيح API اختيارية. بدونها، لا تزال تحصل على تتبع برامج الفدية، وقوائم الاختراقات، و GreyNoise، واستخبارات البلوكتشين، و OTX، وفحص عقد Tor الخارجية، والبحث في onion، وبحث CIRCL onion، والمزيد.

### الاتصال بوكيل الذكاء الاصطناعي

<details open>
<summary><b>Claude Code</b></summary>

```bash
# مع npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# مع الاستنساخ المحلي
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

أضف إلى `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / عملاء MCP آخرون</b></summary>

نفس تنسيق تكوين JSON. وجّه الأمر إلى `npx darknet-mcp-server` أو مسار التثبيت المحلي.

</details>

### إعداد Tor (اختياري، للوصول إلى .onion)

أدوات Tor السبع (`tor_fetch_onion`، `tor_scrape_onion`، إلخ) تتطلب وكيل Tor SOCKS5 قيد التشغيل.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# التحقق من الاتصال
npx darknet-mcp-server --check-tor
```

### ابدأ الاستعلام

```
أنت: "تحقق مما إذا كان example.com قد تعرض لأي اختراقات بيانات وابحث عن سجلات البرمجيات السارقة"
```

هذا كل شيء. الوكيل يتعامل مع عمليات البحث في الاختراقات، والبحث في بيانات الاعتماد، وربط التهديدات، والمزيد تلقائيًا.

---

## ما يمكن للذكاء الاصطناعي فعله

### التحقيق في الاختراقات

```
أنت: "تحقق مما إذا كان example.com قد تعرض لأي اختراقات بيانات"

الوكيل: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com يظهر في 5 اختراقات معروفة:
          - ExampleDB 2023: 4.2 مليون سجل (بريد إلكتروني، كلمات مرور، عناوين IP)
          - Collection #1: قائمة حشو بيانات الاعتماد
          - Combolist 2024: 890 ألف زوج بريد إلكتروني:كلمة مرور
          سجلات البرمجيات السارقة: 23 جهاز مخترق مع بيانات اعتماد محفوظة
          لـ example.com في قاعدة بيانات Hudson Rock.
          IntelligenceX: 47 نتيجة عبر مواقع اللصق والويب المظلم."
```

### تتبع برامج الفدية

```
أنت: "ما مجموعات برامج الفدية التي تستهدف قطاع الرعاية الصحية؟"

الوكيل: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "نشاط برامج الفدية في قطاع الرعاية الصحية:
          142 ضحية عبر 12 مجموعة في آخر 12 شهرًا.
          أبرز المجموعات: LockBit3 (38 ضحية)، BlackCat/ALPHV (24)،
          Cl0p (19)، Royal (15).
          الأحدث: MedCorp Inc. مدرجة من قبل LockBit3 (قبل يومين).
          3 ضحايا جدد في قطاع الرعاية الصحية خلال الأسبوع الماضي عبر
          خلاصات ransomware.live و RansomLook."
```

### استطلاع الويب المظلم

```
أنت: "ابحث عن ذكر لشركتنا في مواقع .onion"

الوكيل: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "نتائج البحث في الويب المظلم لـ AcmeCorp:
          Ahmia.fi: 3 صفحات .onion تذكر AcmeCorp
          - منشور في منتدى يناقش قائمة موظفي AcmeCorp (منتدى تسريبات)
          - عرض في سوق لقاعدة بيانات AcmeCorp (غير مؤكد)
          - مقال مدونة يشير إلى اختراق AcmeCorp
          IntelligenceX: 12 نتيجة في مواقع اللصق
          التوصية: التحقيق في منشور المنتدى وعرض السوق
          للكشف عن مبيعات بيانات نشطة محتملة."
```

### تحليل البرمجيات الخبيثة

```
أنت: "حلل تجزئة الملف هذه للكشف عن مؤشرات البرمجيات الخبيثة: abc123def456..."

الوكيل: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "تحليل البرمجيات الخبيثة لـ abc123def456:
          Hybrid Analysis: خبيث (درجة التهديد 95/100)
          - العائلة: AgentTesla (سارق معلومات)
          - MITRE ATT&CK: T1555 (الوصول لبيانات الاعتماد)، T1071 (C2)
          - مؤشرات الشبكة: 3 نطاقات C2، عنوانا IP
          MalwareBazaar: شوهد لأول مرة 2024-03-15، موسوم بـ 'AgentTesla'
          ThreatFox: إدخالا مؤشرات اختراق مرتبطان بنفس الحملة
          OTX: مشار إليه في 4 نبضات تهديد"
```

---

## مرجع الأدوات (66 أداة)

<details open>
<summary><b>شبكة Tor (7) &mdash; بدون مفتاح API (يتطلب خفي Tor لأدوات .onion)</b></summary>

| الأداة | الوصف |
|------|-------------|
| `tor_status` | التحقق مما إذا كان وكيل Tor SOCKS5 المحلي يعمل ويمكن الوصول إليه |
| `tor_fetch_onion` | جلب HTML الخام من رابط .onion عبر وكيل Tor SOCKS5 (منع تسرب DNS عبر socks5h) |
| `tor_scrape_onion` | جلب وتحليل موقع .onion &mdash; يعيد بيانات منظمة: العنوان، الروابط، نص المحتوى |
| `tor_search_onion` | البحث عن مواقع .onion باستخدام محرك بحث Ahmia.fi |
| `tor_exit_nodes` | الحصول على عناوين IP الحالية لعقد Tor الخارجية من قائمة مشروع Tor الرسمية |
| `tor_exit_check` | التحقق مما إذا كان عنوان IP محدد هو عقدة خروج Tor معروفة |
| `tor_exit_details` | الحصول على معلومات تفصيلية عن عقدة خروج Tor بما في ذلك البصمات وطوابع النشر الزمنية |

</details>

<details>
<summary><b>استخبارات برامج الفدية (9) &mdash; بدون مفتاح API</b></summary>

| الأداة | الوصف |
|------|-------------|
| `ransomwareRecent` | جلب أحدث ضحايا برامج الفدية من ransomware.live |
| `ransomwareGroups` | عرض جميع مجموعات برامج الفدية المعروفة التي يتتبعها ransomware.live |
| `ransomwareGroup` | الحصول على ملف تعريف مفصل لمجموعة برامج فدية محددة بالاسم |
| `ransomwareGroupVictims` | الحصول على جميع الضحايا الذين ادعتهم مجموعة برامج فدية محددة |
| `ransomwareSearch` | البحث في ضحايا برامج الفدية بكلمة مفتاحية (اسم الشركة، النطاق، إلخ) |
| `ransomwareByCountry` | الحصول على ضحايا برامج الفدية مفلترين برمز الدولة ISO 3166-1 alpha-2 |
| `ransomwareBySector` | الحصول على ضحايا برامج الفدية مفلترين بالقطاع/الصناعة (الرعاية الصحية، المالية، إلخ) |
| `ransomlookGroups` | عرض جميع مجموعات برامج الفدية الـ 582+ التي يتتبعها RansomLook |
| `ransomlookRecent` | جلب أحدث منشورات برامج الفدية وادعاءات الضحايا من RansomLook |

</details>

<details>
<summary><b>استخبارات الاختراق &mdash; HIBP (7) &mdash; جزئي: بعض الأدوات مجانية، البحث في الحسابات يتطلب HIBP_API_KEY</b></summary>

| الأداة | الوصف |
|------|-------------|
| `breachList` | عرض جميع اختراقات البيانات المعروفة من HaveIBeenPwned، مع إمكانية التصفية بالنطاق &mdash; مجاني |
| `breachGet` | الحصول على تفاصيل اختراق بيانات محدد بالاسم &mdash; مجاني |
| `breachLatest` | الحصول على أحدث اختراق بيانات تمت إضافته &mdash; مجاني |
| `breachDataClasses` | عرض جميع فئات البيانات (أنواع البيانات المخترقة) المعروفة لـ HIBP &mdash; مجاني |
| `breachPassword` | التحقق مما إذا كانت كلمة مرور قد ظهرت في اختراقات معروفة (خصوصية k-anonymity، يتم إرسال أول 5 أحرف من SHA-1 فقط) &mdash; مجاني |
| `breachSearch` | البحث في جميع الاختراقات عن حساب محدد (بريد إلكتروني/اسم مستخدم) &mdash; يتطلب `HIBP_API_KEY` |
| `breachPastes` | البحث عن عنوان بريد إلكتروني في اللصقات المنشورة علنيًا &mdash; يتطلب `HIBP_API_KEY` |

</details>

<details>
<summary><b>مجموعة abuse.ch (9) &mdash; بدون مفتاح API (ABUSECH_AUTH_KEY اختياري لمعدل أعلى)</b></summary>

| الأداة | الوصف |
|------|-------------|
| `threatfoxGetIocs` | الحصول على أحدث مؤشرات الاختراق من ThreatFox المبلغ عنها في آخر N يوم |
| `threatfoxSearch` | البحث في مؤشرات اختراق ThreatFox بـ IP أو نطاق أو تجزئة أو رابط |
| `threatfoxTag` | البحث في مؤشرات اختراق ThreatFox بالوسم (مثل Cobalt Strike، Emotet) |
| `threatfoxMalware` | البحث في مؤشرات اختراق ThreatFox بعائلة البرمجية الخبيثة باستخدام تسمية Malpedia |
| `urlhausLookup` | البحث عن رابط أو مضيف في URLhaus لتوزيع البرمجيات الخبيثة |
| `urlhausTag` | البحث في إدخالات URLhaus بالوسم |
| `bazaarHash` | البحث عن عينة برمجية خبيثة في MalwareBazaar بتجزئة MD5 أو SHA1 أو SHA256 |
| `bazaarRecent` | الحصول على أحدث عينات البرمجيات الخبيثة المقدمة من MalwareBazaar |
| `bazaarTag` | البحث في MalwareBazaar بالوسم أو اسم توقيع YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; بدون مفتاح API (OTX_API_KEY اختياري لمعدل أعلى)</b></summary>

| الأداة | الوصف |
|------|-------------|
| `otx_ip` | البحث عن استخبارات التهديدات لعنوان IP &mdash; معلومات النبضة، السمعة، الدولة، ASN |
| `otx_domain` | البحث عن استخبارات التهديدات لنطاق &mdash; معلومات النبضة، whois، السمعة |
| `otx_hash` | البحث عن استخبارات التهديدات لتجزئة ملف (MD5، SHA1، SHA256) |
| `otx_cve` | البحث عن استخبارات التهديدات لثغرة CVE &mdash; النبضات والمؤشرات المرتبطة |
| `otx_search_pulses` | البحث في نبضات تهديدات OTX بكلمة مفتاحية |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; يتطلب ABUSEIPDB_API_KEY</b></summary>

| الأداة | الوصف |
|------|-------------|
| `abuseipdb_check` | فحص عنوان IP لبلاغات الإساءة &mdash; درجة الثقة، مزود الخدمة، الدولة، عدد البلاغات |
| `abuseipdb_reports` | الحصول على بلاغات إساءة فردية لعنوان IP مع تعليقات وفئات تفصيلية |
| `abuseipdb_blacklist` | الحصول على القائمة السوداء لـ AbuseIPDB لأكثر عناوين IP الخبيثة المبلغ عنها |
| `abuseipdb_check_block` | فحص كتلة شبكة CIDR كاملة لبلاغات الإساءة |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; بدون مفتاح API</b></summary>

| الأداة | الوصف |
|------|-------------|
| `greynoise_ip` | البحث عن عنوان IP في GreyNoise &mdash; التصنيف (حميد/خبيث/غير معروف)، حالة الماسح |
| `greynoise_check` | فحص سريع: هل عنوان IP هذا ماسح معروف أو خدمة حميدة معروفة؟ |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; بدون مفتاح API (PULSEDIVE_API_KEY اختياري لمعدل أعلى)</b></summary>

| الأداة | الوصف |
|------|-------------|
| `pulsedive_indicator` | البحث عن مؤشر (IP، نطاق، رابط، أو تجزئة) &mdash; مستوى المخاطر، التهديدات، الخلاصات |
| `pulsedive_search` | البحث في مؤشرات Pulsedive بالقيمة |
| `pulsedive_explore` | استكشاف المؤشرات المرتبطة باستخدام استعلامات متقدمة (مؤشرات اختراق مرتبطة مع مستويات المخاطر) |

</details>

<details>
<summary><b>سجلات Hudson Rock السارقة (3) &mdash; يتطلب HUDSONROCK_API_KEY</b></summary>

| الأداة | الوصف |
|------|-------------|
| `stealer_domain` | البحث في إدخالات سجلات البرمجيات السارقة بالنطاق &mdash; أجهزة مخترقة، بيانات اعتماد، تفاصيل البرمجيات الخبيثة |
| `stealer_email` | البحث في سجلات البرمجيات السارقة بعنوان البريد الإلكتروني &mdash; أجهزة مخترقة تحتوي على هذا البريد في بيانات اعتماد المتصفح |
| `stealer_ip` | البحث في سجلات البرمجيات السارقة بعنوان IP &mdash; أجهزة مخترقة صادرة من عنوان IP هذا |

</details>

<details>
<summary><b>ثغرات Vulners (3) &mdash; بدون مفتاح API (VULNERS_API_KEY اختياري للبحث)</b></summary>

| الأداة | الوصف |
|------|-------------|
| `vulners_search` | البحث في قاعدة بيانات ثغرات Vulners باستخدام استعلامات Lucene |
| `vulners_id` | البحث عن ثغرة أو استغلال محدد بالمعرف (CVE، EDB، GHSA) &mdash; مجاني |
| `vulners_exploit` | البحث تحديدًا عن الاستغلالات (إدخالات ExploitDB) |

</details>

<details>
<summary><b>استخبارات البلوكتشين (4) &mdash; بدون مفتاح API</b></summary>

| الأداة | الوصف |
|------|-------------|
| `btc_address` | البحث عن عنوان بيتكوين &mdash; الرصيد، عدد المعاملات، المعاملات الأخيرة |
| `btc_balance` | الحصول على رصيد عنوان بيتكوين بالساتوشي (فحص سريع بدون السجل الكامل) |
| `btc_tx` | الحصول على معلومات تفصيلية عن معاملة بيتكوين بالتجزئة &mdash; المدخلات، المخرجات، الرسوم، معلومات الكتلة |
| `btc_abuse_check` | فحص عنوان بيتكوين لبلاغات الإساءة على ChainAbuse &mdash; بلاغات احتيال مع الفئات |

</details>

<details>
<summary><b>Hybrid Analysis للبرمجيات الخبيثة (3) &mdash; يتطلب HYBRID_API_KEY</b></summary>

| الأداة | الوصف |
|------|-------------|
| `malware_search` | البحث في صندوق رمل Hybrid Analysis بتجزئة الملف &mdash; الحكم، معدل كشف مضاد الفيروسات، تفاصيل التحليل |
| `malware_overview` | نظرة عامة كاملة على تحليل البرمجيات الخبيثة &mdash; تقنيات MITRE ATT&CK، مؤشرات الشبكة، العمليات |
| `malware_feed` | الحصول على أحدث خلاصة تفجير البرمجيات الخبيثة &mdash; العينات المحللة مؤخرًا مع الأحكام |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; بدون مفتاح API</b></summary>

| الأداة | الوصف |
|------|-------------|
| `onion_lookup` | البحث عن بيانات وصفية لعنوان .onion عبر مشروع CIRCL AIL &mdash; أول/آخر ظهور، الحالة، الوسوم، الشهادات، المنافذ، عناوين BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; يتطلب INTELX_API_KEY</b></summary>

| الأداة | الوصف |
|------|-------------|
| `intelx_search` | بدء بحث في IntelligenceX عن البيانات المسربة ومحتوى الويب المظلم والمزيد |
| `intelx_search_results` | استرداد نتائج بحث IntelligenceX بالمعرف |
| `intelx_phonebook` | بحث دليل الهاتف &mdash; العثور على بريد إلكتروني ونطاقات وروابط مرتبطة بمصطلح |
| `intelx_phonebook_results` | استرداد نتائج بحث دليل الهاتف بالمعرف |

</details>

<details>
<summary><b>PhishTank (1) &mdash; بدون مفتاح API (PHISHTANK_API_KEY اختياري لمعدل أعلى)</b></summary>

| الأداة | الوصف |
|------|-------------|
| `phishing_check` | التحقق مما إذا كان رابط هو موقع تصيد معروف عبر PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; بدون مفتاح API</b></summary>

| الأداة | الوصف |
|------|-------------|
| `darknet_list_sources` | عرض جميع مصادر البيانات المتاحة مع حالة التكوين وحالة مفتاح API وعدد الأدوات |

</details>

---

### استخدام سطر الأوامر

```bash
# عرض جميع الأدوات المتاحة
npx darknet-mcp-server --list

# التحقق من اتصال وكيل Tor SOCKS5
npx darknet-mcp-server --check-tor

# تشغيل أي أداة مباشرة
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# الأدوات التي تتطلب مفاتيح API
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## مصادر البيانات (16)

| المصدر | المصادقة | حد المعدل | ما يوفره |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 طلب/1.5 ثانية | البحث في الاختراقات، البحث في اللصقات، فحص كلمات المرور، قوائم الاختراقات |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 طلب/ثانية | محتوى الويب المظلم، بحث البيانات المسربة، دليل الهاتف (بريد إلكتروني/نطاقات/روابط) |
| [AlienVault OTX](https://otx.alienvault.com) | اختياري | 1 طلب/ثانية | استخبارات التهديدات لعناوين IP والنطاقات والتجزئات وثغرات CVE؛ البحث في نبضات التهديدات |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 طلب/ثانية | بلاغات إساءة IP، درجة الثقة، القائمة السوداء، فحص كتلة CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | اختياري | 2 طلب/ثانية | البحث في مؤشرات الاختراق، تتبع عائلات البرمجيات الخبيثة، البحث بالوسوم |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | اختياري | 2 طلب/ثانية | تتبع روابط توزيع البرمجيات الخبيثة، البحث بالمضيف/الرابط |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | اختياري | 2 طلب/ثانية | مستودع عينات البرمجيات الخبيثة، البحث بالتجزئة، البحث بتوقيعات YARA |
| [GreyNoise](https://www.greynoise.io) | لا شيء | 1 طلب/ثانية | تصنيف IP (حميد/خبيث)، كشف ماسحات الإنترنت |
| [Pulsedive](https://pulsedive.com) | اختياري | 1 طلب/ثانية | إثراء المؤشرات، تقييم المخاطر، استكشاف مؤشرات الاختراق المرتبطة |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 طلب/ثانية | البحث في سجلات البرمجيات السارقة بالنطاق أو البريد الإلكتروني أو عنوان IP |
| [Vulners](https://vulners.com) | اختياري | 1 طلب/ثانية | قاعدة بيانات الثغرات/الاستغلالات، البحث بـ CVE، البحث في ExploitDB |
| [Blockchain.info](https://blockchain.info) | لا شيء | 1 طلب/ثانية | البحث عن عناوين بيتكوين، الرصيد، تفاصيل المعاملات |
| [ChainAbuse](https://www.chainabuse.com) | لا شيء | 1 طلب/ثانية | بلاغات إساءة/احتيال عناوين بيتكوين |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 طلب/ثانية | تفجير صندوق رمل البرمجيات الخبيثة، خرائط MITRE ATT&CK، خلاصة العينات |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | لا شيء | 0.5 طلب/ثانية | بيانات وصفية لعناوين .onion، أول/آخر ظهور، عناوين BTC المرتبطة |
| [Tor Network](https://www.torproject.org) | لا شيء | غير محدد | قائمة عقد الخروج، جلب/تحليل .onion، بحث Ahmia.fi |

---

## البنية

```
src/
  index.ts                # نقطة دخول CLI (--help، --list، --check-tor، خادم stdio)
  protocol/
    mcp-server.ts         # إعداد خادم MCP (نقل stdio)
    tools.ts              # سجل الأدوات — جميع الأدوات الـ 66 مجمعة هنا
  types/
    index.ts              # أنواع مشتركة (ToolDef، ToolContext، ToolResult)
  utils/
    rate-limiter.ts       # محدد معدل لكل مزود
    cache.ts              # ذاكرة مؤقتة TTL لاستجابات API
    tor-fetch.ts          # عميل HTTP لوكيل Tor SOCKS5
    require-key.ts        # مساعد التحقق من مفتاح API
  tor/                    # أدوات شبكة Tor (7)
  ransomware/             # أدوات استخبارات برامج الفدية (9)
  breach/                 # أدوات اختراق HIBP (7)
  abusech/                # أدوات ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # أدوات AlienVault OTX (5)
  abuseipdb/              # أدوات AbuseIPDB (4)
  greynoise/              # أدوات GreyNoise Community (2)
  pulsedive/              # أدوات Pulsedive (3)
  hudsonrock/             # أدوات سجلات Hudson Rock السارقة (3)
  vulners/                # أدوات ثغرات Vulners (3)
  blockchain/             # أدوات استخبارات البلوكتشين (4)
  hybrid/                 # أدوات Hybrid Analysis للبرمجيات الخبيثة (3)
  onionlookup/            # أداة CIRCL Onion Lookup (1)
  intelx/                 # أدوات IntelligenceX (4)
  phishing/               # أداة PhishTank (1)
  meta/                   # أدوات Meta (1)
```

**قرارات التصميم:**

- **16 مزودًا، خادم واحد** &mdash; كل مصدر بيانات هو وحدة مستقلة. يختار الوكيل الأدوات المناسبة بناءً على الاستعلام.
- **محددات معدل لكل مزود** &mdash; كل مصدر بيانات لديه مثيل `RateLimiter` خاص مُعاير وفقًا لحدود واجهة البرمجة. لا يوجد عنق زجاجة مشترك.
- **التخزين المؤقت TTL** &mdash; بيانات برامج الفدية (15 دقيقة)، قوائم الاختراقات (10 دقائق)، نتائج abuse.ch (5 دقائق) مخزنة مؤقتًا لتجنب استدعاءات API زائدة أثناء سير العمل متعدد الأدوات.
- **التدهور الرشيق** &mdash; مفاتيح API المفقودة لا تُعطل الخادم. الأدوات تعيد رسائل خطأ وصفية: "عيّن HIBP_API_KEY لتفعيل البحث في حسابات الاختراق."
- **منع تسرب DNS** &mdash; أدوات Tor .onion تستخدم بروتوكول `socks5h://` لحل DNS عبر Tor، مما يمنع تسرب DNS إلى المحلل المحلي.
- **4 تبعيات** &mdash; `@modelcontextprotocol/sdk`، `zod`، `socks-proxy-agent`، و `cheerio`. جميع HTTP للشبكة العادية عبر `fetch` الأصلي. جميع حركة Tor عبر SOCKS5.

---

## القيود

- البحث في حسابات/لصقات HIBP يتطلب مفتاح API مدفوع ($3.50/شهر)
- IntelligenceX و AbuseIPDB و Hudson Rock و Hybrid Analysis تتطلب مفاتيح API لأدواتها
- أدوات Tor .onion تتطلب وكيل Tor SOCKS5 قيد التشغيل (غير مضمّن)
- الطبقة المجانية لـ abuse.ch لديها حدود معدل أقل بدون `ABUSECH_AUTH_KEY`
- بيانات Ransomware.live و RansomLook تعتمد على تكرار الجمع من المصادر العليا
- أدوات البلوكتشين تدعم بيتكوين فقط (لا إيثريوم/مونيرو)
- قاعدة بيانات PhishTank قد تتأخر عن حملات التصيد في الوقت الحقيقي
- تم الاختبار على macOS / Linux (Windows لم يُختبر)

---

## جزء من مجموعة MCP الأمنية

| المشروع | المجال | الأدوات |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | اختبار الأمان عبر المتصفح | 39 أداة، Firefox، اختبار الحقن |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | أمان السحابة (AWS/Azure/GCP) | 38 أداة، 60+ فحص |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | الوضع الأمني لـ GitHub | 39 أداة، 45 فحص |
| [cve-mcp](https://github.com/badchars/cve-mcp) | استخبارات الثغرات | 23 أداة، 5 مصادر |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | الاستخبارات مفتوحة المصدر والاستطلاع | 37 أداة، 12 مصدر |
| **darknet-mcp-server** | **استخبارات الويب المظلم والتهديدات** | **66 أداة، 16 مصدر** |

---

<p align="center">
<b>للاختبار والتقييم الأمني المصرح به فقط.</b><br>
تأكد دائمًا من حصولك على إذن مناسب قبل إجراء جمع الاستخبارات على أي هدف.
</p>

<p align="center">
  <a href="LICENSE">رخصة MIT</a> &bull; بُني بـ Bun + TypeScript
</p>
