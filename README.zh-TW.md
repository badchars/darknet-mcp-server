<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <strong>繁體中文</strong> |
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

<h3 align="center">為 AI 代理提供暗網與威脅情報。</h3>

<p align="center">
  HIBP、ThreatFox、勒索軟體追蹤、Tor .onion 存取、區塊鏈情報、漏洞利用搜尋、竊密日誌、惡意軟體分析 &mdash; 統一整合於單一 MCP 伺服器。<br>
  您的 AI 代理可<b>按需取得全方位暗網情報</b>，無需開啟 16 個瀏覽器分頁手動關聯資料。
</p>

<br>

<p align="center">
  <a href="#問題所在">問題所在</a> &bull;
  <a href="#與眾不同">與眾不同</a> &bull;
  <a href="#快速開始">快速開始</a> &bull;
  <a href="#ai-能做什麼">AI 能做什麼</a> &bull;
  <a href="#工具參考66-個工具">工具 (66)</a> &bull;
  <a href="#資料來源16-個">資料來源</a> &bull;
  <a href="#架構">架構</a> &bull;
  <a href="CHANGELOG.md">更新日誌</a> &bull;
  <a href="CONTRIBUTING.md">貢獻指南</a>
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
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server 示範" width="800">
</p>

---

## 問題所在

暗網情報是每項安全調查中缺失的一環。洩露資料庫、勒索軟體追蹤器、Tor 隱藏服務、惡意軟體沙箱、竊密日誌、區塊鏈鑑識、漏洞利用資料庫 &mdash; 您所需的資料分散在數十個平台上，每個平台有自己的 API、自己的驗證方式、自己的速率限制、自己的輸出格式。如今您需要在一個分頁查 HIBP，在另一個分頁查 ThreatFox，透過 Tor 瀏覽勒索軟體洩露網站，在 MalwareBazaar 中查詢雜湊值，在區塊瀏覽器上檢查區塊鏈交易，然後花一個小時手動將所有資訊拼湊在一起。

```
傳統暗網情報工作流程：
  檢查洩露暴露                ->  HIBP 網頁介面（付費 API）
  搜尋洩露憑證                ->  IntelligenceX 網頁介面
  追蹤勒索軟體組織             ->  ransomware.live + ransomlook.io（2 個獨立介面）
  存取 .onion 隱藏服務        ->  手動使用 Tor 瀏覽器
  分析惡意軟體樣本             ->  Hybrid Analysis + MalwareBazaar（又 2 個介面）
  檢查 IP 濫用歷史            ->  AbuseIPDB + GreyNoise（又 2 個介面）
  追蹤加密貨幣                ->  blockchain.info + ChainAbuse
  搜尋漏洞利用                ->  Vulners 網頁介面
  檢查釣魚 URL               ->  PhishTank 網頁介面
  關聯所有資訊                ->  複製貼上到報告中
  ────────────────────────────────
  總計：每次調查 60+ 分鐘，大部分時間在切換上下文
```

**darknet-mcp-server** 透過 [Model Context Protocol](https://modelcontextprotocol.io) 為您的 AI 代理提供橫跨 16 個資料來源的 66 個工具。代理並行查詢所有資料來源，跨表面網路和暗網關聯資料，識別威脅，並在單次對話中呈現統一的情報全景。

```
使用 darknet-mcp-server：
  您："調查 target.com 的洩露暴露和威脅態勢"

  代理：-> HIBP：3 次已知洩露（Adobe 2013、LinkedIn 2021、Collection #1）
        -> ThreatFox：2 個與該網域關聯的 IOC（C2 回呼、釣魚）
        -> URLhaus：子網域上託管的 1 個惡意 URL
        -> 勒索軟體：未發現受害者列表（好消息）
        -> 竊密日誌：發現 47 個被竊取的員工憑證
        -> OTX：5 個引用該網域的威脅脈衝
        -> AbuseIPDB：主 IP 有 12 條濫用報告（暴力破解）
        -> "target.com 涉及 3 次資料洩露，暴露了 210 萬筆記錄。
           竊密日誌中發現 47 個員工憑證 — 建議立即
           重設密碼。2 個活躍的 ThreatFox IOC 表明
           正在遭受持續攻擊。未發現勒索軟體列表，但主 IP
           的濫用報告值得調查。"
```

---

## 與眾不同

現有工具一次只能從一個資料來源提供原始資料。darknet-mcp-server 賦予您的 AI 代理**同時推理表面網路和暗網情報**的能力。

<table>
<thead>
<tr>
<th></th>
<th>傳統方法</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>介面</b></td>
<td>16 個不同的網頁介面、命令列和 API</td>
<td>MCP &mdash; AI 代理透過對話呼叫工具</td>
</tr>
<tr>
<td><b>資料來源</b></td>
<td>一次只能存取一個平台</td>
<td>16 個資料來源並行查詢</td>
</tr>
<tr>
<td><b>洩露情報</b></td>
<td>HIBP 網頁介面查洩露，IntelligenceX 查洩漏</td>
<td>代理整合 HIBP 洩露 + 貼文 + IntelligenceX + 竊密日誌</td>
</tr>
<tr>
<td><b>暗網存取</b></td>
<td>手動使用 Tor 瀏覽器，從 .onion 網站複製貼上</td>
<td>代理透過 SOCKS5 代理擷取、爬取和搜尋 .onion 網站</td>
</tr>
<tr>
<td><b>惡意軟體分析</b></td>
<td>分別使用 Hybrid Analysis + MalwareBazaar + ThreatFox</td>
<td>代理交叉比對："ThreatFox 中的這個雜湊也在 Hybrid Analysis 中被引爆，包含網路 IOC"</td>
</tr>
<tr>
<td><b>區塊鏈</b></td>
<td>分別使用區塊瀏覽器 + ChainAbuse</td>
<td>代理一步完成 BTC 交易追蹤和濫用報告檢查</td>
</tr>
<tr>
<td><b>API 金鑰</b></td>
<td>幾乎所有功能都需要</td>
<td>許多工具免費使用；API 金鑰解鎖進階資料來源</td>
</tr>
<tr>
<td><b>安裝</b></td>
<td>安裝每個工具，管理每個設定，執行 Tor 瀏覽器</td>
<td><code>npx darknet-mcp-server</code> &mdash; 一條指令，零設定</td>
</tr>
</tbody>
</table>

---

## 快速開始

### 方式一：npx（無需安裝）

```bash
npx darknet-mcp-server
```

免費工具可立即使用。勒索軟體追蹤、洩露列表、GreyNoise、區塊鏈、OTX 等無需 API 金鑰。

### 方式二：複製

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### 環境變數（選用）

```bash
# 洩露與憑證情報
export HIBP_API_KEY=your-key           # 啟用洩露帳戶搜尋和貼文搜尋
export INTELX_API_KEY=your-key         # 啟用 4 個 IntelligenceX 工具

# 威脅情報
export OTX_API_KEY=your-key            # 提高 AlienVault OTX 速率限制
export ABUSEIPDB_API_KEY=your-key      # 啟用 4 個 AbuseIPDB 工具
export ABUSECH_AUTH_KEY=your-key       # 提高 abuse.ch 套件的速率限制
export PULSEDIVE_API_KEY=your-key      # 提高 Pulsedive 速率限制

# 竊密日誌與憑證
export HUDSONROCK_API_KEY=your-key     # 啟用 3 個 Hudson Rock 竊密日誌工具

# 漏洞利用與惡意軟體分析
export VULNERS_API_KEY=your-key        # 啟用 Vulners 搜尋和漏洞利用工具
export HYBRID_API_KEY=your-key         # 啟用 3 個 Hybrid Analysis 惡意軟體工具

# 釣魚
export PHISHTANK_API_KEY=your-key      # 提高 PhishTank 速率限制

# Tor SOCKS5 代理（用於 .onion 存取）
export TOR_SOCKS_HOST=127.0.0.1       # 預設：127.0.0.1
export TOR_SOCKS_PORT=9050            # 預設：9050
```

所有 API 金鑰均為選用。沒有金鑰，您仍可使用勒索軟體追蹤、洩露列表、GreyNoise、區塊鏈情報、OTX、Tor 出口節點檢查、洋蔥搜尋、CIRCL 洋蔥查詢等功能。

### 連接到您的 AI 代理

<details open>
<summary><b>Claude Code</b></summary>

```bash
# 使用 npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# 使用本地複製
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

新增到 `~/Library/Application Support/Claude/claude_desktop_config.json`：

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
<summary><b>Cursor / Windsurf / 其他 MCP 用戶端</b></summary>

相同的 JSON 設定格式。將指令指向 `npx darknet-mcp-server` 或您的本地安裝路徑。

</details>

### Tor 設定（選用，用於 .onion 存取）

7 個 Tor 工具（`tor_fetch_onion`、`tor_scrape_onion` 等）需要執行中的 Tor SOCKS5 代理。

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# 驗證連線
npx darknet-mcp-server --check-tor
```

### 開始查詢

```
您："檢查 example.com 是否有資料洩露記錄，並查找竊密日誌"
```

就是這樣。代理會自動處理洩露查詢、憑證搜尋、威脅關聯等。

---

## AI 能做什麼

### 洩露調查

```
您："檢查 example.com 是否有資料洩露"

代理：-> breachList {domain: "example.com"}
      -> breachSearch {account: "admin@example.com"}
      -> stealer_domain {domain: "example.com"}
      -> intelx_search {term: "example.com"}
      -> "example.com 出現在 5 次已知洩露中：
         - ExampleDB 2023：420 萬筆記錄（電子郵件、密碼、IP）
         - Collection #1：撞庫攻擊列表
         - Combolist 2024：89 萬個電子郵件:密碼對
         竊密日誌：Hudson Rock 資料庫中發現 23 台被入侵機器
         儲存了 example.com 的憑證。
         IntelligenceX：在貼文網站和暗網中找到 47 條結果。"
```

### 勒索軟體追蹤

```
您："哪些勒索軟體組織在針對醫療產業？"

代理：-> ransomwareBySector {sector: "healthcare"}
      -> ransomwareRecent {}
      -> ransomlookRecent {}
      -> "醫療產業勒索軟體活動：
         過去 12 個月共 142 個受害者，涉及 12 個組織。
         主要組織：LockBit3（38 個受害者）、BlackCat/ALPHV（24 個）、
         Cl0p（19 個）、Royal（15 個）。
         最近：MedCorp Inc. 被 LockBit3 列出（2 天前）。
         過去一週在 ransomware.live 和 RansomLook 資訊流中
         新增 3 個醫療產業受害者。"
```

### 暗網偵察

```
您："在 .onion 網站上搜尋有關我們公司的提及"

代理：-> tor_search_onion {query: "AcmeCorp"}
      -> intelx_search {term: "acmecorp.com"}
      -> onion_lookup {address: "relevant-onion-address.onion"}
      -> "AcmeCorp 暗網搜尋結果：
         Ahmia.fi：3 個 .onion 頁面提及 AcmeCorp
         - 論壇貼文討論 AcmeCorp 員工名單（洩露論壇）
         - 市場上架 AcmeCorp 資料庫（未驗證）
         - 部落格文章引用 AcmeCorp 洩露事件
         IntelligenceX：貼文網站上有 12 條結果
         建議：調查論壇貼文和市場列表，
         了解是否存在活躍的資料銷售。"
```

### 惡意軟體分析

```
您："分析此檔案雜湊的惡意軟體指標：abc123def456..."

代理：-> malware_search {hash: "abc123def456..."}
      -> malware_overview {sha256: "abc123def456..."}
      -> bazaarHash {hash: "abc123def456..."}
      -> threatfoxSearch {searchTerm: "abc123def456..."}
      -> otx_hash {hash: "abc123def456..."}
      -> "abc123def456 惡意軟體分析：
         Hybrid Analysis：惡意（威脅評分 95/100）
         - 家族：AgentTesla（資訊竊取器）
         - MITRE ATT&CK：T1555（憑證存取）、T1071（C2）
         - 網路 IOC：3 個 C2 網域、2 個 IP
         MalwareBazaar：首次發現 2024-03-15，標記為 'AgentTesla'
         ThreatFox：2 個 IOC 條目關聯到同一攻擊活動
         OTX：在 4 個威脅脈衝中被引用"
```

---

## 工具參考（66 個工具）

<details open>
<summary><b>Tor 網路 (7) &mdash; 無需 API 金鑰（.onion 工具需要 Tor 守護程式）</b></summary>

| 工具 | 描述 |
|------|------|
| `tor_status` | 檢查本地 Tor SOCKS5 代理守護程式是否正在執行且可存取 |
| `tor_fetch_onion` | 透過 Tor SOCKS5 代理擷取 .onion URL 的原始 HTML（透過 socks5h 防止 DNS 洩露） |
| `tor_scrape_onion` | 擷取並解析 .onion 網站 &mdash; 回傳結構化資料：標題、連結、正文 |
| `tor_search_onion` | 使用 Ahmia.fi 搜尋引擎搜尋 .onion 網站 |
| `tor_exit_nodes` | 從 Tor 專案官方批量出口列表取得當前 Tor 出口節點 IP 位址 |
| `tor_exit_check` | 檢查特定 IP 位址是否為已知的 Tor 出口節點 |
| `tor_exit_details` | 取得詳細的 Tor 出口節點資訊，包括指紋和發布時間戳記 |

</details>

<details>
<summary><b>勒索軟體情報 (9) &mdash; 無需 API 金鑰</b></summary>

| 工具 | 描述 |
|------|------|
| `ransomwareRecent` | 從 ransomware.live 取得最近的勒索軟體受害者 |
| `ransomwareGroups` | 列出 ransomware.live 追蹤的所有已知勒索軟體組織 |
| `ransomwareGroup` | 按名稱取得特定勒索軟體組織的詳細資料 |
| `ransomwareGroupVictims` | 取得特定勒索軟體組織聲稱的所有受害者 |
| `ransomwareSearch` | 按關鍵字搜尋勒索軟體受害者（公司名稱、網域等） |
| `ransomwareByCountry` | 按 ISO 3166-1 alpha-2 國家代碼篩選勒索軟體受害者 |
| `ransomwareBySector` | 按產業/領域篩選勒索軟體受害者（醫療、金融等） |
| `ransomlookGroups` | 列出 RansomLook 追蹤的所有 582+ 個勒索軟體組織 |
| `ransomlookRecent` | 從 RansomLook 取得最近的勒索軟體貼文和受害者聲明 |

</details>

<details>
<summary><b>洩露情報 &mdash; HIBP (7) &mdash; 部分免費：部分工具免費，帳戶搜尋需要 HIBP_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `breachList` | 列出 HaveIBeenPwned 的所有已知資料洩露，可按網域篩選 &mdash; 免費 |
| `breachGet` | 按名稱取得特定資料洩露的詳細資訊 &mdash; 免費 |
| `breachLatest` | 取得最近新增的資料洩露 &mdash; 免費 |
| `breachDataClasses` | 列出 HIBP 已知的所有資料類別（被洩露資料的類型） &mdash; 免費 |
| `breachPassword` | 檢查密碼是否出現在已知洩露中（k-匿名性，僅傳送 SHA-1 前 5 個字元） &mdash; 免費 |
| `breachSearch` | 搜尋特定帳戶（電子郵件/使用者名稱）的所有洩露 &mdash; 需要 `HIBP_API_KEY` |
| `breachPastes` | 搜尋公開貼文中的電子郵件位址 &mdash; 需要 `HIBP_API_KEY` |

</details>

<details>
<summary><b>abuse.ch 套件 (9) &mdash; 無需 API 金鑰（ABUSECH_AUTH_KEY 選用，用於提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `threatfoxGetIocs` | 取得 ThreatFox 最近 N 天報告的 IOC |
| `threatfoxSearch` | 按 IP、網域、雜湊或 URL 搜尋 ThreatFox IOC |
| `threatfoxTag` | 按標籤搜尋 ThreatFox IOC（如 Cobalt Strike、Emotet） |
| `threatfoxMalware` | 使用 Malpedia 命名按惡意軟體家族搜尋 ThreatFox IOC |
| `urlhausLookup` | 在 URLhaus 中查詢 URL 或主機的惡意軟體分發情況 |
| `urlhausTag` | 按標籤搜尋 URLhaus 條目 |
| `bazaarHash` | 透過 MD5、SHA1 或 SHA256 雜湊在 MalwareBazaar 中查詢惡意軟體樣本 |
| `bazaarRecent` | 取得 MalwareBazaar 最近提交的惡意軟體樣本 |
| `bazaarTag` | 按標籤或 YARA 簽名名稱搜尋 MalwareBazaar |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; 無需 API 金鑰（OTX_API_KEY 選用，用於提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `otx_ip` | 查詢 IP 位址的威脅情報 &mdash; 脈衝資訊、信譽、國家、ASN |
| `otx_domain` | 查詢網域的威脅情報 &mdash; 脈衝資訊、whois、信譽 |
| `otx_hash` | 查詢檔案雜湊（MD5、SHA1、SHA256）的威脅情報 |
| `otx_cve` | 查詢 CVE 的威脅情報 &mdash; 相關脈衝和指標 |
| `otx_search_pulses` | 按關鍵字搜尋 OTX 威脅脈衝 |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; 需要 ABUSEIPDB_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `abuseipdb_check` | 檢查 IP 位址的濫用報告 &mdash; 信心評分、ISP、國家、報告數量 |
| `abuseipdb_reports` | 取得 IP 的詳細濫用報告，包含評論和類別 |
| `abuseipdb_blacklist` | 取得 AbuseIPDB 報告最多的惡意 IP 位址黑名單 |
| `abuseipdb_check_block` | 檢查整個 CIDR 網路區塊的濫用報告 |

</details>

<details>
<summary><b>GreyNoise 社群版 (2) &mdash; 無需 API 金鑰</b></summary>

| 工具 | 描述 |
|------|------|
| `greynoise_ip` | 在 GreyNoise 上查詢 IP &mdash; 分類（良性/惡意/未知）、掃描器狀態 |
| `greynoise_check` | 快速檢查：此 IP 是已知掃描器還是已知良性服務？ |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; 無需 API 金鑰（PULSEDIVE_API_KEY 選用，用於提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `pulsedive_indicator` | 查詢指標（IP、網域、URL 或雜湊） &mdash; 風險等級、威脅、資訊來源 |
| `pulsedive_search` | 按值搜尋 Pulsedive 指標 |
| `pulsedive_explore` | 使用進階查詢探索關聯指標（帶風險等級的相關 IOC） |

</details>

<details>
<summary><b>Hudson Rock 竊密日誌 (3) &mdash; 需要 HUDSONROCK_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `stealer_domain` | 按網域搜尋竊密日誌條目 &mdash; 被入侵機器、憑證、惡意軟體詳情 |
| `stealer_email` | 按電子郵件位址搜尋竊密日誌 &mdash; 瀏覽器憑證中包含該電子郵件的被入侵機器 |
| `stealer_ip` | 按 IP 位址搜尋竊密日誌 &mdash; 來自該 IP 的被入侵機器 |

</details>

<details>
<summary><b>Vulners 漏洞利用 (3) &mdash; 無需 API 金鑰（VULNERS_API_KEY 選用，用於搜尋）</b></summary>

| 工具 | 描述 |
|------|------|
| `vulners_search` | 使用 Lucene 查詢搜尋 Vulners 漏洞資料庫 |
| `vulners_id` | 按 ID 查詢特定漏洞或利用（CVE、EDB、GHSA） &mdash; 免費 |
| `vulners_exploit` | 專門搜尋漏洞利用（ExploitDB 條目） |

</details>

<details>
<summary><b>區塊鏈情報 (4) &mdash; 無需 API 金鑰</b></summary>

| 工具 | 描述 |
|------|------|
| `btc_address` | 查詢比特幣位址 &mdash; 餘額、交易數量、最近交易 |
| `btc_balance` | 取得比特幣位址餘額（聰為單位，無需完整歷史的快速檢查） |
| `btc_tx` | 按雜湊取得詳細的比特幣交易資訊 &mdash; 輸入、輸出、手續費、區塊資訊 |
| `btc_abuse_check` | 在 ChainAbuse 上檢查比特幣位址的濫用報告 &mdash; 帶類別的詐騙報告 |

</details>

<details>
<summary><b>Hybrid Analysis 惡意軟體 (3) &mdash; 需要 HYBRID_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `malware_search` | 按檔案雜湊在 Hybrid Analysis 沙箱中搜尋 &mdash; 裁定、防毒軟體檢測率、分析詳情 |
| `malware_overview` | 完整惡意軟體分析概覽 &mdash; MITRE ATT&CK 技術、網路指標、程序 |
| `malware_feed` | 取得最新的惡意軟體引爆資訊流 &mdash; 最近分析的樣本及裁定 |

</details>

<details>
<summary><b>CIRCL 洋蔥查詢 (1) &mdash; 無需 API 金鑰</b></summary>

| 工具 | 描述 |
|------|------|
| `onion_lookup` | 透過 CIRCL AIL 專案查詢 .onion 位址的中繼資料 &mdash; 首次/末次發現、狀態、標籤、憑證、連接埠、BTC 位址 |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; 需要 INTELX_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `intelx_search` | 在 IntelligenceX 上發起搜尋，查找洩露資料、暗網內容等 |
| `intelx_search_results` | 按 ID 擷取 IntelligenceX 搜尋結果 |
| `intelx_phonebook` | 電話簿搜尋 &mdash; 查找與關鍵字關聯的電子郵件、網域、URL |
| `intelx_phonebook_results` | 按 ID 擷取電話簿搜尋結果 |

</details>

<details>
<summary><b>PhishTank (1) &mdash; 無需 API 金鑰（PHISHTANK_API_KEY 選用，用於提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `phishing_check` | 透過 PhishTank 檢查 URL 是否為已知釣魚網站 |

</details>

<details>
<summary><b>Meta (1) &mdash; 無需 API 金鑰</b></summary>

| 工具 | 描述 |
|------|------|
| `darknet_list_sources` | 列出所有可用資料來源及其設定狀態、API 金鑰狀態和工具數量 |

</details>

---

### CLI 用法

```bash
# 列出所有可用工具
npx darknet-mcp-server --list

# 檢查 Tor SOCKS5 代理連線
npx darknet-mcp-server --check-tor

# 直接執行任意工具
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# 需要 API 金鑰的工具
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## 資料來源（16 個）

| 來源 | 驗證 | 速率限制 | 提供內容 |
|------|------|---------|---------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 次請求/1.5 秒 | 洩露搜尋、貼文搜尋、密碼檢查、洩露列表 |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 次請求/秒 | 暗網內容、洩露資料搜尋、電話簿（電子郵件/網域/URL） |
| [AlienVault OTX](https://otx.alienvault.com) | 選用 | 1 次請求/秒 | IP、網域、雜湊、CVE 的威脅情報；威脅脈衝搜尋 |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 次請求/秒 | IP 濫用報告、信心評分、黑名單、CIDR 區塊檢查 |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | 選用 | 2 次請求/秒 | IOC 搜尋、惡意軟體家族追蹤、基於標籤的搜尋 |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | 選用 | 2 次請求/秒 | 惡意軟體分發 URL 追蹤、主機/URL 查詢 |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | 選用 | 2 次請求/秒 | 惡意軟體樣本庫、雜湊查詢、YARA 簽名搜尋 |
| [GreyNoise](https://www.greynoise.io) | 無 | 1 次請求/秒 | IP 分類（良性/惡意）、網際網路掃描器偵測 |
| [Pulsedive](https://pulsedive.com) | 選用 | 1 次請求/秒 | 指標豐富化、風險評分、關聯 IOC 探索 |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 次請求/秒 | 按網域、電子郵件或 IP 搜尋竊密日誌 |
| [Vulners](https://vulners.com) | 選用 | 1 次請求/秒 | 漏洞/利用資料庫、CVE 查詢、ExploitDB 搜尋 |
| [Blockchain.info](https://blockchain.info) | 無 | 1 次請求/秒 | 比特幣位址查詢、餘額、交易詳情 |
| [ChainAbuse](https://www.chainabuse.com) | 無 | 1 次請求/秒 | 比特幣位址濫用/詐騙報告 |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 次請求/秒 | 惡意軟體沙箱引爆、MITRE ATT&CK 對應、樣本資訊流 |
| [CIRCL AIL（洋蔥查詢）](https://onion.ail-project.org) | 無 | 0.5 次請求/秒 | .onion 位址中繼資料、首次/末次發現、關聯 BTC 位址 |
| [Tor 網路](https://www.torproject.org) | 無 | 不適用 | 出口節點列表、.onion 擷取/爬取、Ahmia.fi 搜尋 |

---

## 架構

```
src/
  index.ts                # CLI 進入點（--help、--list、--check-tor、stdio 伺服器）
  protocol/
    mcp-server.ts         # MCP 伺服器設定（stdio 傳輸）
    tools.ts              # 工具註冊表 — 所有 66 個工具在此組裝
  types/
    index.ts              # 共享型別（ToolDef、ToolContext、ToolResult）
  utils/
    rate-limiter.ts       # 每個提供者的速率限制器
    cache.ts              # API 回應的 TTL 快取
    tor-fetch.ts          # Tor SOCKS5 代理 HTTP 用戶端
    require-key.ts        # API 金鑰驗證輔助程式
  tor/                    # Tor 網路工具 (7)
  ransomware/             # 勒索軟體情報工具 (9)
  breach/                 # HIBP 洩露工具 (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar 工具 (9)
  otx/                    # AlienVault OTX 工具 (5)
  abuseipdb/              # AbuseIPDB 工具 (4)
  greynoise/              # GreyNoise 社群版工具 (2)
  pulsedive/              # Pulsedive 工具 (3)
  hudsonrock/             # Hudson Rock 竊密日誌工具 (3)
  vulners/                # Vulners 漏洞利用工具 (3)
  blockchain/             # 區塊鏈情報工具 (4)
  hybrid/                 # Hybrid Analysis 惡意軟體工具 (3)
  onionlookup/            # CIRCL 洋蔥查詢工具 (1)
  intelx/                 # IntelligenceX 工具 (4)
  phishing/               # PhishTank 工具 (1)
  meta/                   # Meta 工具 (1)
```

**設計決策：**

- **16 個提供者，1 個伺服器** &mdash; 每個資料來源都是獨立模組。代理根據查詢選擇使用哪些工具。
- **每個提供者獨立的速率限制器** &mdash; 每個資料來源有自己的 `RateLimiter` 實例，根據該 API 的限制進行校準。無共享瓶頸。
- **TTL 快取** &mdash; 勒索軟體資料（15 分鐘）、洩露列表（10 分鐘）、abuse.ch（5 分鐘）結果會被快取，避免多工具工作流程中的冗餘 API 呼叫。
- **優雅降級** &mdash; 缺少 API 金鑰不會導致伺服器當機。工具回傳描述性錯誤訊息：「設定 HIBP_API_KEY 以啟用洩露帳戶搜尋。」
- **DNS 洩露防護** &mdash; Tor .onion 工具使用 `socks5h://` 協定透過 Tor 解析 DNS，防止 DNS 洩露到本地解析器。
- **4 個依賴** &mdash; `@modelcontextprotocol/sdk`、`zod`、`socks-proxy-agent` 和 `cheerio`。所有明網 HTTP 使用原生 `fetch`。所有 Tor 流量透過 SOCKS5。

---

## 限制

- HIBP 帳戶/貼文搜尋需要付費 API 金鑰（$3.50/月）
- IntelligenceX、AbuseIPDB、Hudson Rock 和 Hybrid Analysis 的工具需要 API 金鑰
- Tor .onion 工具需要執行中的 Tor SOCKS5 代理（未捆綁）
- 沒有 `ABUSECH_AUTH_KEY` 時 abuse.ch 免費層有較低的速率限制
- Ransomware.live 和 RansomLook 資料取決於上游爬取頻率
- 區塊鏈工具僅支援比特幣（不支援以太坊/門羅幣）
- PhishTank 資料庫可能落後於即時釣魚活動
- 已在 macOS / Linux 上測試（未在 Windows 上測試）

---

## MCP 安全套件的一部分

| 專案 | 領域 | 工具 |
|------|------|------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | 基於瀏覽器的安全測試 | 39 個工具、Firefox、注入測試 |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | 雲端安全（AWS/Azure/GCP） | 38 個工具、60+ 項檢查 |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub 安全態勢 | 39 個工具、45 項檢查 |
| [cve-mcp](https://github.com/badchars/cve-mcp) | 漏洞情報 | 23 個工具、5 個資料來源 |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT 與偵察 | 37 個工具、12 個資料來源 |
| **darknet-mcp-server** | **暗網與威脅情報** | **66 個工具、16 個資料來源** |

---

<p align="center">
<b>僅用於授權的安全測試和評估。</b><br>
在對任何目標進行情報蒐集之前，請始終確保您已取得適當授權。
</p>

<p align="center">
  <a href="LICENSE">MIT 授權條款</a> &bull; 使用 Bun + TypeScript 建構
</p>
