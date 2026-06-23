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
  <strong>ไทย</strong> |
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

<h3 align="center">ข่าวกรองดาร์กเว็บและภัยคุกคามสำหรับเอเจนต์ AI</h3>

<p align="center">
  HIBP, ThreatFox, การติดตามแรนซัมแวร์, การเข้าถึงไซต์ Tor .onion, ข่าวกรองบล็อกเชน, การค้นหาช่องโหว่, บันทึก stealer, การวิเคราะห์มัลแวร์ &mdash; รวมเป็นหนึ่งใน MCP เซิร์ฟเวอร์เดียว<br>
  เอเจนต์ AI ของคุณจะได้รับ<b>ข่าวกรองดาร์กเว็บครบวงจรตามต้องการ</b> ไม่ใช่ 16 แท็บเบราว์เซอร์และการเชื่อมโยงข้อมูลด้วยตนเอง
</p>

<br>

<p align="center">
  <a href="#ปัญหา">ปัญหา</a> &bull;
  <a href="#แตกต่างอย่างไร">แตกต่างอย่างไร</a> &bull;
  <a href="#เริ่มต้นอย่างรวดเร็ว">เริ่มต้นอย่างรวดเร็ว</a> &bull;
  <a href="#สิ่งที่-ai-ทำได้">สิ่งที่ AI ทำได้</a> &bull;
  <a href="#คู่มืออ้างอิงเครื่องมือ-66-เครื่องมือ">เครื่องมือ (66)</a> &bull;
  <a href="#แหล่งข้อมูล-16">แหล่งข้อมูล</a> &bull;
  <a href="#สถาปัตยกรรม">สถาปัตยกรรม</a> &bull;
  <a href="CHANGELOG.md">บันทึกการเปลี่ยนแปลง</a> &bull;
  <a href="CONTRIBUTING.md">การมีส่วนร่วม</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="สัญญาอนุญาต"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 เครื่องมือ">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 แหล่งข้อมูล">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="สาธิต darknet-mcp-server" width="800">
</p>

---

## ปัญหา

ข่าวกรองดาร์กเว็บเป็นชั้นที่ขาดหายไปในทุกการสืบสวนด้านความปลอดภัย ฐานข้อมูลการรั่วไหล, ตัวติดตามแรนซัมแวร์, บริการซ่อนของ Tor, แซนด์บ็อกซ์มัลแวร์, บันทึก stealer, นิติวิทยาศาสตร์บล็อกเชน, ฐานข้อมูลช่องโหว่ &mdash; ข้อมูลที่คุณต้องการกระจัดกระจายอยู่ในหลายสิบแพลตฟอร์ม แต่ละแพลตฟอร์มมี API ของตัวเอง การยืนยันตัวตนของตัวเอง ข้อจำกัดอัตราของตัวเอง รูปแบบเอาต์พุตของตัวเอง วันนี้คุณตรวจสอบ HIBP ในแท็บหนึ่ง, ThreatFox ในอีกแท็บหนึ่ง, เรียกดูไซต์รั่วไหลของแรนซัมแวร์ผ่าน Tor, ค้นหา MalwareBazaar สำหรับ hash, ตรวจสอบธุรกรรมบล็อกเชนในตัวสำรวจบล็อก แล้วใช้เวลาหนึ่งชั่วโมงในการรวบรวมทุกอย่างเข้าด้วยกันด้วยตนเอง

```
ขั้นตอนการทำงานข่าวกรองดาร์กเว็บแบบดั้งเดิม:
  ตรวจสอบการเปิดเผยจากการรั่วไหล  ->  อินเทอร์เฟซเว็บ HIBP (API แบบชำระเงิน)
  ค้นหาข้อมูลรับรองที่รั่วไหล      ->  อินเทอร์เฟซเว็บ IntelligenceX
  ติดตามกลุ่มแรนซัมแวร์            ->  ransomware.live + ransomlook.io (2 UI แยกกัน)
  เข้าถึงบริการซ่อน .onion          ->  เบราว์เซอร์ Tor ด้วยตนเอง
  วิเคราะห์ตัวอย่างมัลแวร์          ->  Hybrid Analysis + MalwareBazaar (อีก 2 UI)
  ตรวจสอบประวัติการละเมิด IP       ->  AbuseIPDB + GreyNoise (อีก 2 UI)
  ติดตามคริปโตเคอร์เรนซี          ->  blockchain.info + ChainAbuse
  ค้นหาช่องโหว่                    ->  อินเทอร์เฟซเว็บ Vulners
  ตรวจสอบ URL ฟิชชิง              ->  อินเทอร์เฟซเว็บ PhishTank
  เชื่อมโยงทุกอย่าง                ->  คัดลอกและวางลงในรายงาน
  ────────────────────────────────
  รวม: 60+ นาทีต่อการสืบสวน ส่วนใหญ่ใช้ไปกับการสลับบริบท
```

**darknet-mcp-server** มอบเครื่องมือ 66 ตัวจาก 16 แหล่งข้อมูลให้กับเอเจนต์ AI ของคุณผ่าน [Model Context Protocol](https://modelcontextprotocol.io) เอเจนต์จะสอบถามแหล่งข้อมูลทั้งหมดพร้อมกัน เชื่อมโยงข้อมูลข้ามเว็บปกติและดาร์กเว็บ ระบุภัยคุกคาม และนำเสนอภาพข่าวกรองแบบรวม &mdash; ในการสนทนาเดียว

```
กับ darknet-mcp-server:
  คุณ: "ตรวจสอบการเปิดเผยจากการรั่วไหลและภูมิทัศน์ภัยคุกคามของ target.com"

  เอเจนต์: -> HIBP: การรั่วไหลที่รู้จัก 3 รายการ (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: IOC 2 รายการที่เกี่ยวข้องกับโดเมน (C2 callback, ฟิชชิง)
         -> URLhaus: URL ที่เป็นอันตราย 1 รายการบนซับโดเมน
         -> แรนซัมแวร์: ไม่พบรายชื่อเหยื่อ (ดี)
         -> บันทึก stealer: พบข้อมูลรับรองพนักงานที่ถูกบุกรุก 47 รายการ
         -> OTX: พัลส์ภัยคุกคาม 5 รายการที่อ้างอิงถึงโดเมน
         -> AbuseIPDB: IP หลักมีรายงานการละเมิด 12 รายการ (brute force)
         -> "target.com ถูกรั่วไหลข้อมูล 3 ครั้งเปิดเผย 2.1 ล้านรายการ
            พบข้อมูลรับรองพนักงาน 47 รายการในบันทึก stealer — แนะนำให้
            รีเซ็ตรหัสผ่านทันที IOC ที่ใช้งานอยู่ 2 รายการใน ThreatFox
            บ่งชี้ว่ามีการกำหนดเป้าหมายอย่างต่อเนื่อง ไม่มีรายชื่อแรนซัมแวร์
            แต่รายงานการละเมิดบน IP หลักควรได้รับการตรวจสอบ"
```

---

## แตกต่างอย่างไร

เครื่องมือที่มีอยู่ให้ข้อมูลดิบจากแหล่งเดียวทีละครั้ง darknet-mcp-server มอบความสามารถให้เอเจนต์ AI ของคุณในการ**วิเคราะห์เหตุผลข้ามข่าวกรองเว็บปกติและดาร์กเว็บพร้อมกัน**

<table>
<thead>
<tr>
<th></th>
<th>วิธีการแบบดั้งเดิม</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>อินเทอร์เฟซ</b></td>
<td>UI เว็บ, CLI และ API ที่แตกต่างกัน 16 ตัว</td>
<td>MCP &mdash; เอเจนต์ AI เรียกใช้เครื่องมือผ่านการสนทนา</td>
</tr>
<tr>
<td><b>แหล่งข้อมูล</b></td>
<td>ทีละแพลตฟอร์ม</td>
<td>16 แหล่งข้อมูลสอบถามพร้อมกัน</td>
</tr>
<tr>
<td><b>ข่าวกรองการรั่วไหล</b></td>
<td>UI เว็บ HIBP สำหรับการรั่วไหล, IntelligenceX สำหรับการรั่ว</td>
<td>เอเจนต์รวมการรั่วไหล HIBP + pastes + IntelligenceX + บันทึก stealer</td>
</tr>
<tr>
<td><b>การเข้าถึงดาร์กเว็บ</b></td>
<td>เบราว์เซอร์ Tor ด้วยตนเอง, คัดลอกวางจากไซต์ .onion</td>
<td>เอเจนต์ดึงข้อมูล, สแครป และค้นหาไซต์ .onion ผ่านพร็อกซี SOCKS5</td>
</tr>
<tr>
<td><b>การวิเคราะห์มัลแวร์</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox แยกกัน</td>
<td>เอเจนต์ข้ามอ้างอิง: "แฮชนี้จาก ThreatFox ยังถูกระเบิดใน Hybrid Analysis พร้อม IOC เครือข่าย"</td>
</tr>
<tr>
<td><b>บล็อกเชน</b></td>
<td>ตัวสำรวจบล็อก + ChainAbuse แยกกัน</td>
<td>เอเจนต์ติดตามธุรกรรม BTC และตรวจสอบรายงานการละเมิดในขั้นตอนเดียว</td>
</tr>
<tr>
<td><b>คีย์ API</b></td>
<td>จำเป็นสำหรับเกือบทุกอย่าง</td>
<td>เครื่องมือหลายตัวทำงานฟรี; คีย์ API ปลดล็อกแหล่งข้อมูลพรีเมียม</td>
</tr>
<tr>
<td><b>การตั้งค่า</b></td>
<td>ติดตั้งแต่ละเครื่องมือ, จัดการแต่ละการกำหนดค่า, เรียกใช้เบราว์เซอร์ Tor</td>
<td><code>npx darknet-mcp-server</code> &mdash; คำสั่งเดียว, ไม่ต้องกำหนดค่า</td>
</tr>
</tbody>
</table>

---

## เริ่มต้นอย่างรวดเร็ว

### ตัวเลือกที่ 1: npx (ไม่ต้องติดตั้ง)

```bash
npx darknet-mcp-server
```

เครื่องมือฟรีทำงานได้ทันที ไม่ต้องใช้คีย์ API สำหรับการติดตามแรนซัมแวร์, รายการรั่วไหล, GreyNoise, บล็อกเชน, OTX และอื่นๆ

### ตัวเลือกที่ 2: โคลน

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### ตัวแปรสภาพแวดล้อม (ไม่บังคับ)

```bash
# ข่าวกรองการรั่วไหลและข้อมูลรับรอง
export HIBP_API_KEY=your-key           # เปิดใช้งานการค้นหาบัญชีรั่วไหลและการค้นหา paste
export INTELX_API_KEY=your-key         # เปิดใช้งานเครื่องมือ IntelligenceX 4 ตัว

# ข่าวกรองภัยคุกคาม
export OTX_API_KEY=your-key            # เพิ่มข้อจำกัดอัตราของ AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # เปิดใช้งานเครื่องมือ AbuseIPDB 4 ตัว
export ABUSECH_AUTH_KEY=your-key       # ข้อจำกัดอัตราที่สูงขึ้นสำหรับชุด abuse.ch
export PULSEDIVE_API_KEY=your-key      # ข้อจำกัดอัตราที่สูงขึ้นสำหรับ Pulsedive

# บันทึก stealer และข้อมูลรับรอง
export HUDSONROCK_API_KEY=your-key     # เปิดใช้งานเครื่องมือบันทึก stealer ของ Hudson Rock 3 ตัว

# การวิเคราะห์ช่องโหว่และมัลแวร์
export VULNERS_API_KEY=your-key        # เปิดใช้งานเครื่องมือค้นหาและช่องโหว่ของ Vulners
export HYBRID_API_KEY=your-key         # เปิดใช้งานเครื่องมือมัลแวร์ Hybrid Analysis 3 ตัว

# ฟิชชิง
export PHISHTANK_API_KEY=your-key      # ข้อจำกัดอัตราที่สูงขึ้นสำหรับ PhishTank

# พร็อกซี Tor SOCKS5 (สำหรับการเข้าถึง .onion)
export TOR_SOCKS_HOST=127.0.0.1       # ค่าเริ่มต้น: 127.0.0.1
export TOR_SOCKS_PORT=9050            # ค่าเริ่มต้น: 9050
```

คีย์ API ทั้งหมดเป็นทางเลือก หากไม่มี คุณยังคงได้รับการติดตามแรนซัมแวร์, รายการรั่วไหล, GreyNoise, ข่าวกรองบล็อกเชน, OTX, การตรวจสอบโหนดออก Tor, การค้นหา onion, การค้นหา CIRCL onion และอื่นๆ

### เชื่อมต่อกับเอเจนต์ AI ของคุณ

<details open>
<summary><b>Claude Code</b></summary>

```bash
# กับ npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# กับโคลนในเครื่อง
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

เพิ่มใน `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / ไคลเอนต์ MCP อื่นๆ</b></summary>

รูปแบบการกำหนดค่า JSON เดียวกัน ชี้คำสั่งไปที่ `npx darknet-mcp-server` หรือเส้นทางการติดตั้งในเครื่องของคุณ

</details>

### การตั้งค่า Tor (ไม่บังคับ, สำหรับการเข้าถึง .onion)

เครื่องมือ Tor 7 ตัว (`tor_fetch_onion`, `tor_scrape_onion` ฯลฯ) ต้องการพร็อกซี Tor SOCKS5 ที่กำลังทำงาน

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# ตรวจสอบการเชื่อมต่อ
npx darknet-mcp-server --check-tor
```

### เริ่มสอบถาม

```
คุณ: "ตรวจสอบว่า example.com เคยถูกรั่วไหลข้อมูลหรือไม่ และค้นหาบันทึก stealer"
```

เท่านั้น เอเจนต์จัดการการค้นหาการรั่วไหล, การค้นหาข้อมูลรับรอง, การเชื่อมโยงภัยคุกคาม และอื่นๆ โดยอัตโนมัติ

---

## สิ่งที่ AI ทำได้

### การสืบสวนการรั่วไหล

```
คุณ: "ตรวจสอบว่า example.com เคยถูกรั่วไหลข้อมูลหรือไม่"

เอเจนต์: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com ปรากฏใน 5 การรั่วไหลที่รู้จัก:
          - ExampleDB 2023: 4.2 ล้านรายการ (อีเมล, รหัสผ่าน, IP)
          - Collection #1: รายการ credential stuffing
          - Combolist 2024: 890,000 คู่อีเมล:รหัสผ่าน
          บันทึก stealer: พบเครื่อง 23 เครื่องที่ถูกบุกรุกพร้อมข้อมูลรับรองที่บันทึกไว้
          สำหรับ example.com ในฐานข้อมูล Hudson Rock
          IntelligenceX: 47 ผลลัพธ์ข้าม paste sites และดาร์กเว็บ"
```

### การติดตามแรนซัมแวร์

```
คุณ: "กลุ่มแรนซัมแวร์ใดกำลังกำหนดเป้าหมายภาคสาธารณสุข?"

เอเจนต์: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "กิจกรรมแรนซัมแวร์ในภาคสาธารณสุข:
          เหยื่อ 142 รายจาก 12 กลุ่มใน 12 เดือนที่ผ่านมา
          กลุ่มหลัก: LockBit3 (38 เหยื่อ), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15)
          ล่าสุด: MedCorp Inc. ถูกจัดรายชื่อโดย LockBit3 (2 วันที่แล้ว)
          เหยื่อสาธารณสุขใหม่ 3 รายในสัปดาห์ที่ผ่านมาจาก
          ฟีด ransomware.live และ RansomLook"
```

### การลาดตระเวนดาร์กเว็บ

```
คุณ: "ค้นหาการกล่าวถึงบริษัทของเราในไซต์ .onion"

เอเจนต์: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "ผลการค้นหาดาร์กเว็บสำหรับ AcmeCorp:
          Ahmia.fi: หน้า .onion 3 หน้ากล่าวถึง AcmeCorp
          - โพสต์ในฟอรัมพูดคุยเรื่องรายชื่อพนักงาน AcmeCorp (ฟอรัมรั่วไหล)
          - รายการในตลาดสำหรับฐานข้อมูล AcmeCorp (ยังไม่ยืนยัน)
          - โพสต์บล็อกอ้างอิงถึงการรั่วไหลของ AcmeCorp
          IntelligenceX: 12 ผลลัพธ์ใน paste sites
          คำแนะนำ: ตรวจสอบโพสต์ในฟอรัมและรายการในตลาด
          สำหรับการขายข้อมูลที่อาจยังดำเนินอยู่"
```

### การวิเคราะห์มัลแวร์

```
คุณ: "วิเคราะห์ file hash นี้สำหรับตัวบ่งชี้มัลแวร์: abc123def456..."

เอเจนต์: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "การวิเคราะห์มัลแวร์สำหรับ abc123def456:
          Hybrid Analysis: อันตราย (คะแนนภัยคุกคาม 95/100)
          - ตระกูล: AgentTesla (ตัวขโมยข้อมูล)
          - MITRE ATT&CK: T1555 (การเข้าถึงข้อมูลรับรอง), T1071 (C2)
          - IOC เครือข่าย: โดเมน C2 3 รายการ, IP 2 รายการ
          MalwareBazaar: พบครั้งแรก 2024-03-15, แท็ก 'AgentTesla'
          ThreatFox: รายการ IOC 2 รายการเชื่อมโยงกับแคมเปญเดียวกัน
          OTX: อ้างอิงใน 4 พัลส์ภัยคุกคาม"
```

---

## คู่มืออ้างอิงเครื่องมือ (66 เครื่องมือ)

<details open>
<summary><b>เครือข่าย Tor (7) &mdash; ไม่ต้องใช้คีย์ API (ต้องการ Tor daemon สำหรับเครื่องมือ .onion)</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `tor_status` | ตรวจสอบว่า daemon พร็อกซี Tor SOCKS5 ในเครื่องกำลังทำงานและเข้าถึงได้หรือไม่ |
| `tor_fetch_onion` | ดึง HTML ดิบจาก URL .onion ผ่านพร็อกซี Tor SOCKS5 (ป้องกันการรั่วไหลของ DNS ผ่าน socks5h) |
| `tor_scrape_onion` | ดึงและวิเคราะห์ไซต์ .onion &mdash; คืนค่าข้อมูลแบบมีโครงสร้าง: หัวข้อ, ลิงก์, เนื้อหา |
| `tor_search_onion` | ค้นหาไซต์ .onion โดยใช้เครื่องมือค้นหา Ahmia.fi |
| `tor_exit_nodes` | ดึงที่อยู่ IP โหนดออก Tor ปัจจุบันจากรายการโหนดออกอย่างเป็นทางการของ Tor Project |
| `tor_exit_check` | ตรวจสอบว่าที่อยู่ IP เฉพาะเป็นโหนดออก Tor ที่รู้จักหรือไม่ |
| `tor_exit_details` | ดึงข้อมูลรายละเอียดโหนดออก Tor รวมถึง fingerprint และ timestamp การเผยแพร่ |

</details>

<details>
<summary><b>ข่าวกรองแรนซัมแวร์ (9) &mdash; ไม่ต้องใช้คีย์ API</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `ransomwareRecent` | ดึงเหยื่อแรนซัมแวร์ล่าสุดจาก ransomware.live |
| `ransomwareGroups` | แสดงรายการกลุ่มแรนซัมแวร์ที่รู้จักทั้งหมดที่ติดตามโดย ransomware.live |
| `ransomwareGroup` | ดึงโปรไฟล์ละเอียดของกลุ่มแรนซัมแวร์เฉพาะตามชื่อ |
| `ransomwareGroupVictims` | ดึงเหยื่อทั้งหมดที่อ้างสิทธิ์โดยกลุ่มแรนซัมแวร์เฉพาะ |
| `ransomwareSearch` | ค้นหาเหยื่อแรนซัมแวร์ด้วยคำสำคัญ (ชื่อบริษัท, โดเมน ฯลฯ) |
| `ransomwareByCountry` | ดึงเหยื่อแรนซัมแวร์กรองตามรหัสประเทศ ISO 3166-1 alpha-2 |
| `ransomwareBySector` | ดึงเหยื่อแรนซัมแวร์กรองตามภาค/อุตสาหกรรม (สาธารณสุข, การเงิน ฯลฯ) |
| `ransomlookGroups` | แสดงรายการกลุ่มแรนซัมแวร์ 582+ กลุ่มทั้งหมดที่ติดตามโดย RansomLook |
| `ransomlookRecent` | ดึงโพสต์แรนซัมแวร์และการอ้างสิทธิ์เหยื่อล่าสุดจาก RansomLook |

</details>

<details>
<summary><b>ข่าวกรองการรั่วไหล &mdash; HIBP (7) &mdash; บางส่วน: บางเครื่องมือฟรี, การค้นหาบัญชีต้องใช้ HIBP_API_KEY</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `breachList` | แสดงรายการการรั่วไหลข้อมูลที่รู้จักทั้งหมดจาก HaveIBeenPwned, กรองตามโดเมนได้ &mdash; ฟรี |
| `breachGet` | ดึงรายละเอียดของการรั่วไหลข้อมูลเฉพาะตามชื่อ &mdash; ฟรี |
| `breachLatest` | ดึงการรั่วไหลข้อมูลที่เพิ่มล่าสุด &mdash; ฟรี |
| `breachDataClasses` | แสดงรายการคลาสข้อมูลทั้งหมด (ประเภทข้อมูลที่ถูกบุกรุก) ที่ HIBP รู้จัก &mdash; ฟรี |
| `breachPassword` | ตรวจสอบว่ารหัสผ่านปรากฏในการรั่วไหลที่รู้จักหรือไม่ (k-anonymity, ส่งเฉพาะ 5 อักขระแรกของ SHA-1) &mdash; ฟรี |
| `breachSearch` | ค้นหาการรั่วไหลทั้งหมดสำหรับบัญชีเฉพาะ (อีเมล/ชื่อผู้ใช้) &mdash; ต้องใช้ `HIBP_API_KEY` |
| `breachPastes` | ค้นหาที่อยู่อีเมลใน pastes ที่โพสต์สาธารณะ &mdash; ต้องใช้ `HIBP_API_KEY` |

</details>

<details>
<summary><b>ชุด abuse.ch (9) &mdash; ไม่ต้องใช้คีย์ API (ABUSECH_AUTH_KEY ไม่บังคับสำหรับอัตราที่สูงขึ้น)</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `threatfoxGetIocs` | ดึง IOC ล่าสุดจาก ThreatFox ที่รายงานใน N วันที่ผ่านมา |
| `threatfoxSearch` | ค้นหา IOC ของ ThreatFox ด้วย IP, โดเมน, hash หรือ URL |
| `threatfoxTag` | ค้นหา IOC ของ ThreatFox ด้วยแท็ก (เช่น Cobalt Strike, Emotet) |
| `threatfoxMalware` | ค้นหา IOC ของ ThreatFox ด้วยตระกูลมัลแวร์โดยใช้การตั้งชื่อ Malpedia |
| `urlhausLookup` | ค้นหา URL หรือโฮสต์ใน URLhaus สำหรับการแจกจ่ายมัลแวร์ |
| `urlhausTag` | ค้นหารายการ URLhaus ด้วยแท็ก |
| `bazaarHash` | ค้นหาตัวอย่างมัลแวร์ใน MalwareBazaar ด้วย hash MD5, SHA1 หรือ SHA256 |
| `bazaarRecent` | ดึงตัวอย่างมัลแวร์ที่ส่งล่าสุดจาก MalwareBazaar |
| `bazaarTag` | ค้นหาใน MalwareBazaar ด้วยแท็กหรือชื่อลายเซ็น YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; ไม่ต้องใช้คีย์ API (OTX_API_KEY ไม่บังคับสำหรับอัตราที่สูงขึ้น)</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `otx_ip` | ค้นหาข่าวกรองภัยคุกคามสำหรับที่อยู่ IP &mdash; ข้อมูลพัลส์, ชื่อเสียง, ประเทศ, ASN |
| `otx_domain` | ค้นหาข่าวกรองภัยคุกคามสำหรับโดเมน &mdash; ข้อมูลพัลส์, whois, ชื่อเสียง |
| `otx_hash` | ค้นหาข่าวกรองภัยคุกคามสำหรับ file hash (MD5, SHA1, SHA256) |
| `otx_cve` | ค้นหาข่าวกรองภัยคุกคามสำหรับ CVE &mdash; พัลส์และตัวบ่งชี้ที่เกี่ยวข้อง |
| `otx_search_pulses` | ค้นหาพัลส์ภัยคุกคาม OTX ด้วยคำสำคัญ |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; ต้องใช้ ABUSEIPDB_API_KEY</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `abuseipdb_check` | ตรวจสอบที่อยู่ IP สำหรับรายงานการละเมิด &mdash; คะแนนความเชื่อมั่น, ISP, ประเทศ, จำนวนรายงาน |
| `abuseipdb_reports` | ดึงรายงานการละเมิดแต่ละรายการสำหรับ IP พร้อมความคิดเห็นและหมวดหมู่โดยละเอียด |
| `abuseipdb_blacklist` | ดึงบัญชีดำของ AbuseIPDB สำหรับที่อยู่ IP ที่เป็นอันตรายที่ถูกรายงานมากที่สุด |
| `abuseipdb_check_block` | ตรวจสอบบล็อกเครือข่าย CIDR ทั้งหมดสำหรับรายงานการละเมิด |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; ไม่ต้องใช้คีย์ API</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `greynoise_ip` | ค้นหา IP ใน GreyNoise &mdash; การจำแนก (ไม่เป็นอันตราย/เป็นอันตราย/ไม่ทราบ), สถานะสแกนเนอร์ |
| `greynoise_check` | ตรวจสอบด่วน: IP นี้เป็นสแกนเนอร์ที่รู้จักหรือบริการที่ไม่เป็นอันตรายที่รู้จักหรือไม่? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; ไม่ต้องใช้คีย์ API (PULSEDIVE_API_KEY ไม่บังคับสำหรับอัตราที่สูงขึ้น)</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `pulsedive_indicator` | ค้นหาตัวบ่งชี้ (IP, โดเมน, URL หรือ hash) &mdash; ระดับความเสี่ยง, ภัยคุกคาม, ฟีด |
| `pulsedive_search` | ค้นหาตัวบ่งชี้ Pulsedive ด้วยค่า |
| `pulsedive_explore` | สำรวจตัวบ่งชี้ที่เชื่อมโยงโดยใช้คิวรีขั้นสูง (IOC ที่เกี่ยวข้องพร้อมระดับความเสี่ยง) |

</details>

<details>
<summary><b>บันทึก Stealer ของ Hudson Rock (3) &mdash; ต้องใช้ HUDSONROCK_API_KEY</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `stealer_domain` | ค้นหารายการบันทึก stealer ด้วยโดเมน &mdash; เครื่องที่ถูกบุกรุก, ข้อมูลรับรอง, รายละเอียดมัลแวร์ |
| `stealer_email` | ค้นหาบันทึก stealer ด้วยที่อยู่อีเมล &mdash; เครื่องที่ถูกบุกรุกที่มีอีเมลนั้นในข้อมูลรับรองเบราว์เซอร์ |
| `stealer_ip` | ค้นหาบันทึก stealer ด้วยที่อยู่ IP &mdash; เครื่องที่ถูกบุกรุกที่มาจาก IP นั้น |

</details>

<details>
<summary><b>ช่องโหว่ Vulners (3) &mdash; ไม่ต้องใช้คีย์ API (VULNERS_API_KEY ไม่บังคับสำหรับการค้นหา)</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `vulners_search` | ค้นหาฐานข้อมูลช่องโหว่ Vulners โดยใช้คิวรี Lucene |
| `vulners_id` | ค้นหาช่องโหว่หรือ exploit เฉพาะด้วย ID (CVE, EDB, GHSA) &mdash; ฟรี |
| `vulners_exploit` | ค้นหาเฉพาะ exploit (รายการ ExploitDB) |

</details>

<details>
<summary><b>ข่าวกรองบล็อกเชน (4) &mdash; ไม่ต้องใช้คีย์ API</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `btc_address` | ค้นหาที่อยู่ Bitcoin &mdash; ยอดเงิน, จำนวนธุรกรรม, ธุรกรรมล่าสุด |
| `btc_balance` | ดึงยอดเงินที่อยู่ Bitcoin ในหน่วย satoshi (ตรวจสอบด่วนโดยไม่มีประวัติเต็ม) |
| `btc_tx` | ดึงข้อมูลธุรกรรม Bitcoin โดยละเอียดด้วย hash &mdash; อินพุต, เอาต์พุต, ค่าธรรมเนียม, ข้อมูลบล็อก |
| `btc_abuse_check` | ตรวจสอบที่อยู่ Bitcoin สำหรับรายงานการละเมิดบน ChainAbuse &mdash; รายงานการหลอกลวงพร้อมหมวดหมู่ |

</details>

<details>
<summary><b>Hybrid Analysis มัลแวร์ (3) &mdash; ต้องใช้ HYBRID_API_KEY</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `malware_search` | ค้นหาในแซนด์บ็อกซ์ Hybrid Analysis ด้วย file hash &mdash; คำตัดสิน, อัตราการตรวจจับ AV, รายละเอียดการวิเคราะห์ |
| `malware_overview` | ภาพรวมการวิเคราะห์มัลแวร์แบบเต็ม &mdash; เทคนิค MITRE ATT&CK, ตัวบ่งชี้เครือข่าย, กระบวนการ |
| `malware_feed` | ดึงฟีดการระเบิดมัลแวร์ล่าสุด &mdash; ตัวอย่างที่วิเคราะห์ล่าสุดพร้อมคำตัดสิน |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; ไม่ต้องใช้คีย์ API</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `onion_lookup` | ค้นหาข้อมูลเมตาสำหรับที่อยู่ .onion ผ่านโปรเจกต์ CIRCL AIL &mdash; พบครั้งแรก/ล่าสุด, สถานะ, แท็ก, ใบรับรอง, พอร์ต, ที่อยู่ BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; ต้องใช้ INTELX_API_KEY</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `intelx_search` | เริ่มต้นการค้นหาบน IntelligenceX สำหรับข้อมูลที่รั่วไหล, เนื้อหาดาร์กเว็บ และอื่นๆ |
| `intelx_search_results` | ดึงผลลัพธ์สำหรับการค้นหา IntelligenceX ด้วย ID |
| `intelx_phonebook` | ค้นหาสมุดโทรศัพท์ &mdash; ค้นหาอีเมล, โดเมน, URL ที่เกี่ยวข้องกับคำค้น |
| `intelx_phonebook_results` | ดึงผลลัพธ์การค้นหาสมุดโทรศัพท์ด้วย ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; ไม่ต้องใช้คีย์ API (PHISHTANK_API_KEY ไม่บังคับสำหรับอัตราที่สูงขึ้น)</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `phishing_check` | ตรวจสอบว่า URL เป็นไซต์ฟิชชิงที่รู้จักผ่าน PhishTank หรือไม่ |

</details>

<details>
<summary><b>Meta (1) &mdash; ไม่ต้องใช้คีย์ API</b></summary>

| เครื่องมือ | คำอธิบาย |
|------|-------------|
| `darknet_list_sources` | แสดงรายการแหล่งข้อมูลที่มีทั้งหมดพร้อมสถานะการกำหนดค่า, สถานะคีย์ API และจำนวนเครื่องมือ |

</details>

---

### การใช้งาน CLI

```bash
# แสดงรายการเครื่องมือทั้งหมดที่มี
npx darknet-mcp-server --list

# ตรวจสอบการเชื่อมต่อพร็อกซี Tor SOCKS5
npx darknet-mcp-server --check-tor

# เรียกใช้เครื่องมือใดก็ได้โดยตรง
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# เครื่องมือที่ต้องใช้คีย์ API
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## แหล่งข้อมูล (16)

| แหล่งข้อมูล | การยืนยันตัวตน | ข้อจำกัดอัตรา | สิ่งที่ให้ |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5 วินาที | การค้นหาการรั่วไหล, การค้นหา paste, การตรวจสอบรหัสผ่าน, รายการรั่วไหล |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/วินาที | เนื้อหาดาร์กเว็บ, การค้นหาข้อมูลรั่วไหล, สมุดโทรศัพท์ (อีเมล/โดเมน/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | ไม่บังคับ | 1 req/วินาที | ข่าวกรองภัยคุกคามสำหรับ IP, โดเมน, hash, CVE; การค้นหาพัลส์ภัยคุกคาม |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/วินาที | รายงานการละเมิด IP, คะแนนความเชื่อมั่น, บัญชีดำ, การตรวจสอบบล็อก CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | ไม่บังคับ | 2 req/วินาที | การค้นหา IOC, การติดตามตระกูลมัลแวร์, การค้นหาด้วยแท็ก |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | ไม่บังคับ | 2 req/วินาที | การติดตาม URL แจกจ่ายมัลแวร์, การค้นหาโฮสต์/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | ไม่บังคับ | 2 req/วินาที | คลังตัวอย่างมัลแวร์, การค้นหา hash, การค้นหาลายเซ็น YARA |
| [GreyNoise](https://www.greynoise.io) | ไม่มี | 1 req/วินาที | การจำแนก IP (ไม่เป็นอันตราย/เป็นอันตราย), การตรวจจับสแกนเนอร์อินเทอร์เน็ต |
| [Pulsedive](https://pulsedive.com) | ไม่บังคับ | 1 req/วินาที | การเพิ่มคุณค่าตัวบ่งชี้, การให้คะแนนความเสี่ยง, การสำรวจ IOC ที่เชื่อมโยง |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/วินาที | การค้นหาบันทึก stealer ด้วยโดเมน, อีเมล หรือ IP |
| [Vulners](https://vulners.com) | ไม่บังคับ | 1 req/วินาที | ฐานข้อมูลช่องโหว่/exploit, การค้นหา CVE, การค้นหา ExploitDB |
| [Blockchain.info](https://blockchain.info) | ไม่มี | 1 req/วินาที | การค้นหาที่อยู่ Bitcoin, ยอดเงิน, รายละเอียดธุรกรรม |
| [ChainAbuse](https://www.chainabuse.com) | ไม่มี | 1 req/วินาที | รายงานการละเมิด/การหลอกลวงที่อยู่ Bitcoin |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/วินาที | การระเบิดมัลแวร์ในแซนด์บ็อกซ์, การแมป MITRE ATT&CK, ฟีดตัวอย่าง |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | ไม่มี | 0.5 req/วินาที | ข้อมูลเมตาที่อยู่ .onion, พบครั้งแรก/ล่าสุด, ที่อยู่ BTC ที่เกี่ยวข้อง |
| [Tor Network](https://www.torproject.org) | ไม่มี | N/A | รายการโหนดออก, การดึง/สแครป .onion, การค้นหา Ahmia.fi |

---

## สถาปัตยกรรม

```
src/
  index.ts                # จุดเข้า CLI (--help, --list, --check-tor, เซิร์ฟเวอร์ stdio)
  protocol/
    mcp-server.ts         # การตั้งค่าเซิร์ฟเวอร์ MCP (การขนส่ง stdio)
    tools.ts              # ทะเบียนเครื่องมือ — เครื่องมือทั้ง 66 ตัวรวมที่นี่
  types/
    index.ts              # ประเภทร่วม (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # ตัวจำกัดอัตราต่อผู้ให้บริการ
    cache.ts              # แคช TTL สำหรับการตอบสนอง API
    tor-fetch.ts          # ไคลเอนต์ HTTP พร็อกซี Tor SOCKS5
    require-key.ts        # ตัวช่วยตรวจสอบคีย์ API
  tor/                    # เครื่องมือเครือข่าย Tor (7)
  ransomware/             # เครื่องมือข่าวกรองแรนซัมแวร์ (9)
  breach/                 # เครื่องมือการรั่วไหล HIBP (7)
  abusech/                # เครื่องมือ ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # เครื่องมือ AlienVault OTX (5)
  abuseipdb/              # เครื่องมือ AbuseIPDB (4)
  greynoise/              # เครื่องมือ GreyNoise Community (2)
  pulsedive/              # เครื่องมือ Pulsedive (3)
  hudsonrock/             # เครื่องมือบันทึก stealer ของ Hudson Rock (3)
  vulners/                # เครื่องมือ exploit ของ Vulners (3)
  blockchain/             # เครื่องมือข่าวกรองบล็อกเชน (4)
  hybrid/                 # เครื่องมือมัลแวร์ Hybrid Analysis (3)
  onionlookup/            # เครื่องมือ CIRCL Onion Lookup (1)
  intelx/                 # เครื่องมือ IntelligenceX (4)
  phishing/               # เครื่องมือ PhishTank (1)
  meta/                   # เครื่องมือ Meta (1)
```

**การตัดสินใจด้านการออกแบบ:**

- **16 ผู้ให้บริการ, 1 เซิร์ฟเวอร์** &mdash; ทุกแหล่งข้อมูลเป็นโมดูลอิสระ เอเจนต์เลือกเครื่องมือที่จะใช้ตามคิวรี
- **ตัวจำกัดอัตราต่อผู้ให้บริการ** &mdash; แต่ละแหล่งข้อมูลมีอินสแตนซ์ `RateLimiter` ของตัวเองที่ปรับเทียบตามข้อจำกัดของ API นั้น ไม่มีคอขวดร่วม
- **การแคช TTL** &mdash; ข้อมูลแรนซัมแวร์ (15 นาที), รายการรั่วไหล (10 นาที), ผลลัพธ์ abuse.ch (5 นาที) ถูกแคชเพื่อหลีกเลี่ยงการเรียก API ซ้ำซ้อนระหว่างเวิร์กโฟลว์หลายเครื่องมือ
- **การลดระดับอย่างนุ่มนวล** &mdash; คีย์ API ที่หายไปไม่ทำให้เซิร์ฟเวอร์ล่ม เครื่องมือส่งคืนข้อความข้อผิดพลาดอธิบาย: "ตั้งค่า HIBP_API_KEY เพื่อเปิดใช้งานการค้นหาบัญชีรั่วไหล"
- **การป้องกันการรั่วไหลของ DNS** &mdash; เครื่องมือ Tor .onion ใช้โปรโตคอล `socks5h://` เพื่อแก้ไข DNS ผ่าน Tor ป้องกันการรั่วไหลของ DNS ไปยังตัวแก้ไขในเครื่อง
- **4 dependencies** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` และ `cheerio` HTTP เครือข่ายปกติทั้งหมดผ่าน `fetch` ดั้งเดิม ทราฟฟิก Tor ทั้งหมดผ่าน SOCKS5

---

## ข้อจำกัด

- การค้นหาบัญชี/paste ของ HIBP ต้องใช้คีย์ API แบบชำระเงิน ($3.50/เดือน)
- IntelligenceX, AbuseIPDB, Hudson Rock และ Hybrid Analysis ต้องใช้คีย์ API สำหรับเครื่องมือของตน
- เครื่องมือ Tor .onion ต้องการพร็อกซี Tor SOCKS5 ที่กำลังทำงาน (ไม่รวมมาด้วย)
- ระดับฟรีของ abuse.ch มีข้อจำกัดอัตราที่ต่ำกว่าโดยไม่มี `ABUSECH_AUTH_KEY`
- ข้อมูลจาก Ransomware.live และ RansomLook ขึ้นอยู่กับความถี่ในการสแครปจากต้นทาง
- เครื่องมือบล็อกเชนรองรับเฉพาะ Bitcoin (ไม่มี Ethereum/Monero)
- ฐานข้อมูล PhishTank อาจล้าหลังแคมเปญฟิชชิงแบบเรียลไทม์
- ทดสอบบน macOS / Linux (Windows ยังไม่ได้ทดสอบ)

---

## ส่วนหนึ่งของชุดความปลอดภัย MCP

| โปรเจกต์ | โดเมน | เครื่องมือ |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | การทดสอบความปลอดภัยผ่านเบราว์เซอร์ | 39 เครื่องมือ, Firefox, การทดสอบการฉีด |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | ความปลอดภัยคลาวด์ (AWS/Azure/GCP) | 38 เครื่องมือ, 60+ การตรวจสอบ |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | สถานะความปลอดภัยของ GitHub | 39 เครื่องมือ, 45 การตรวจสอบ |
| [cve-mcp](https://github.com/badchars/cve-mcp) | ข่าวกรองช่องโหว่ | 23 เครื่องมือ, 5 แหล่งข้อมูล |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT และการลาดตระเวน | 37 เครื่องมือ, 12 แหล่งข้อมูล |
| **darknet-mcp-server** | **ดาร์กเว็บและข่าวกรองภัยคุกคาม** | **66 เครื่องมือ, 16 แหล่งข้อมูล** |

---

<p align="center">
<b>สำหรับการทดสอบและประเมินความปลอดภัยที่ได้รับอนุญาตเท่านั้น</b><br>
ตรวจสอบให้แน่ใจเสมอว่าคุณได้รับอนุญาตอย่างเหมาะสมก่อนทำการรวบรวมข่าวกรองบนเป้าหมายใดๆ
</p>

<p align="center">
  <a href="LICENSE">สัญญาอนุญาต MIT</a> &bull; สร้างด้วย Bun + TypeScript
</p>
