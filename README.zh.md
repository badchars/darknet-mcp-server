<p align="center">
  <a href="README.md">English</a> |
  <strong>简体中文</strong> |
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

<h3 align="center">为 AI 代理提供暗网与威胁情报。</h3>

<p align="center">
  HIBP、ThreatFox、勒索软件追踪、Tor .onion 访问、区块链情报、漏洞利用搜索、窃密日志、恶意软件分析 &mdash; 统一集成于单一 MCP 服务器。<br>
  您的 AI 代理可<b>按需获取全方位暗网情报</b>，无需打开 16 个浏览器标签页手动关联数据。
</p>

<br>

<p align="center">
  <a href="#问题所在">问题所在</a> &bull;
  <a href="#与众不同">与众不同</a> &bull;
  <a href="#快速开始">快速开始</a> &bull;
  <a href="#ai-能做什么">AI 能做什么</a> &bull;
  <a href="#工具参考66-个工具">工具 (66)</a> &bull;
  <a href="#数据源16-个">数据源</a> &bull;
  <a href="#架构">架构</a> &bull;
  <a href="CHANGELOG.md">更新日志</a> &bull;
  <a href="CONTRIBUTING.md">贡献指南</a>
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
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server 演示" width="800">
</p>

---

## 问题所在

暗网情报是每项安全调查中缺失的一环。泄露数据库、勒索软件追踪器、Tor 隐藏服务、恶意软件沙箱、窃密日志、区块链取证、漏洞利用数据库 &mdash; 您所需的数据分散在数十个平台上，每个平台有自己的 API、自己的认证方式、自己的速率限制、自己的输出格式。如今您需要在一个标签页查 HIBP，在另一个标签页查 ThreatFox，通过 Tor 浏览勒索软件泄露网站，在 MalwareBazaar 中查询哈希值，在区块浏览器上检查区块链交易，然后花一个小时手动将所有信息拼凑在一起。

```
传统暗网情报工作流：
  检查泄露暴露                ->  HIBP 网页界面（付费 API）
  搜索泄露凭证                ->  IntelligenceX 网页界面
  追踪勒索软件组织             ->  ransomware.live + ransomlook.io（2 个独立界面）
  访问 .onion 隐藏服务        ->  手动使用 Tor 浏览器
  分析恶意软件样本             ->  Hybrid Analysis + MalwareBazaar（又 2 个界面）
  检查 IP 滥用历史            ->  AbuseIPDB + GreyNoise（又 2 个界面）
  追踪加密货币                ->  blockchain.info + ChainAbuse
  搜索漏洞利用                ->  Vulners 网页界面
  检查钓鱼 URL               ->  PhishTank 网页界面
  关联所有信息                ->  复制粘贴到报告中
  ────────────────────────────────
  总计：每次调查 60+ 分钟，大部分时间在切换上下文
```

**darknet-mcp-server** 通过 [Model Context Protocol](https://modelcontextprotocol.io) 为您的 AI 代理提供横跨 16 个数据源的 66 个工具。代理并行查询所有数据源，跨表面网络和暗网关联数据，识别威胁，并在单次对话中呈现统一的情报全景。

```
使用 darknet-mcp-server：
  您："调查 target.com 的泄露暴露和威胁态势"

  代理：-> HIBP：3 次已知泄露（Adobe 2013、LinkedIn 2021、Collection #1）
        -> ThreatFox：2 个与该域名关联的 IOC（C2 回调、钓鱼）
        -> URLhaus：子域名上托管的 1 个恶意 URL
        -> 勒索软件：未发现受害者列表（好消息）
        -> 窃密日志：发现 47 个被盗员工凭证
        -> OTX：5 个引用该域名的威胁脉冲
        -> AbuseIPDB：主 IP 有 12 条滥用报告（暴力破解）
        -> "target.com 涉及 3 次数据泄露，暴露了 210 万条记录。
           窃密日志中发现 47 个员工凭证 — 建议立即
           重置密码。2 个活跃的 ThreatFox IOC 表明
           正在遭受持续攻击。未发现勒索软件列表，但主 IP
           的滥用报告值得调查。"
```

---

## 与众不同

现有工具一次只能从一个数据源提供原始数据。darknet-mcp-server 赋予您的 AI 代理**同时推理表面网络和暗网情报**的能力。

<table>
<thead>
<tr>
<th></th>
<th>传统方法</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>界面</b></td>
<td>16 个不同的网页界面、命令行和 API</td>
<td>MCP &mdash; AI 代理通过对话调用工具</td>
</tr>
<tr>
<td><b>数据源</b></td>
<td>一次只能访问一个平台</td>
<td>16 个数据源并行查询</td>
</tr>
<tr>
<td><b>泄露情报</b></td>
<td>HIBP 网页界面查泄露，IntelligenceX 查泄漏</td>
<td>代理整合 HIBP 泄露 + 粘贴 + IntelligenceX + 窃密日志</td>
</tr>
<tr>
<td><b>暗网访问</b></td>
<td>手动使用 Tor 浏览器，从 .onion 网站复制粘贴</td>
<td>代理通过 SOCKS5 代理获取、抓取和搜索 .onion 网站</td>
</tr>
<tr>
<td><b>恶意软件分析</b></td>
<td>分别使用 Hybrid Analysis + MalwareBazaar + ThreatFox</td>
<td>代理交叉引用："ThreatFox 中的这个哈希也在 Hybrid Analysis 中被引爆，包含网络 IOC"</td>
</tr>
<tr>
<td><b>区块链</b></td>
<td>分别使用区块浏览器 + ChainAbuse</td>
<td>代理一步完成 BTC 交易追踪和滥用报告检查</td>
</tr>
<tr>
<td><b>API 密钥</b></td>
<td>几乎所有功能都需要</td>
<td>许多工具免费使用；API 密钥解锁高级数据源</td>
</tr>
<tr>
<td><b>安装</b></td>
<td>安装每个工具，管理每个配置，运行 Tor 浏览器</td>
<td><code>npx darknet-mcp-server</code> &mdash; 一条命令，零配置</td>
</tr>
</tbody>
</table>

---

## 快速开始

### 方式一：npx（无需安装）

```bash
npx darknet-mcp-server
```

免费工具可立即使用。勒索软件追踪、泄露列表、GreyNoise、区块链、OTX 等无需 API 密钥。

### 方式二：克隆

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### 环境变量（可选）

```bash
# 泄露与凭证情报
export HIBP_API_KEY=your-key           # 启用泄露账户搜索和粘贴搜索
export INTELX_API_KEY=your-key         # 启用 4 个 IntelligenceX 工具

# 威胁情报
export OTX_API_KEY=your-key            # 提高 AlienVault OTX 速率限制
export ABUSEIPDB_API_KEY=your-key      # 启用 4 个 AbuseIPDB 工具
export ABUSECH_AUTH_KEY=your-key       # 提高 abuse.ch 套件的速率限制
export PULSEDIVE_API_KEY=your-key      # 提高 Pulsedive 速率限制

# 窃密日志与凭证
export HUDSONROCK_API_KEY=your-key     # 启用 3 个 Hudson Rock 窃密日志工具

# 漏洞利用与恶意软件分析
export VULNERS_API_KEY=your-key        # 启用 Vulners 搜索和漏洞利用工具
export HYBRID_API_KEY=your-key         # 启用 3 个 Hybrid Analysis 恶意软件工具

# 钓鱼
export PHISHTANK_API_KEY=your-key      # 提高 PhishTank 速率限制

# Tor SOCKS5 代理（用于 .onion 访问）
export TOR_SOCKS_HOST=127.0.0.1       # 默认：127.0.0.1
export TOR_SOCKS_PORT=9050            # 默认：9050
```

所有 API 密钥均为可选。没有密钥，您仍可使用勒索软件追踪、泄露列表、GreyNoise、区块链情报、OTX、Tor 出口节点检查、洋葱搜索、CIRCL 洋葱查询等功能。

### 连接到您的 AI 代理

<details open>
<summary><b>Claude Code</b></summary>

```bash
# 使用 npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# 使用本地克隆
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

添加到 `~/Library/Application Support/Claude/claude_desktop_config.json`：

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
<summary><b>Cursor / Windsurf / 其他 MCP 客户端</b></summary>

相同的 JSON 配置格式。将命令指向 `npx darknet-mcp-server` 或您的本地安装路径。

</details>

### Tor 设置（可选，用于 .onion 访问）

7 个 Tor 工具（`tor_fetch_onion`、`tor_scrape_onion` 等）需要运行中的 Tor SOCKS5 代理。

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# 验证连接
npx darknet-mcp-server --check-tor
```

### 开始查询

```
您："检查 example.com 是否有数据泄露记录，并查找窃密日志"
```

就是这样。代理会自动处理泄露查询、凭证搜索、威胁关联等。

---

## AI 能做什么

### 泄露调查

```
您："检查 example.com 是否有数据泄露"

代理：-> breachList {domain: "example.com"}
      -> breachSearch {account: "admin@example.com"}
      -> stealer_domain {domain: "example.com"}
      -> intelx_search {term: "example.com"}
      -> "example.com 出现在 5 次已知泄露中：
         - ExampleDB 2023：420 万条记录（邮箱、密码、IP）
         - Collection #1：撞库攻击列表
         - Combolist 2024：89 万个邮箱:密码对
         窃密日志：Hudson Rock 数据库中发现 23 台被入侵机器
         保存了 example.com 的凭证。
         IntelligenceX：在粘贴网站和暗网中找到 47 条结果。"
```

### 勒索软件追踪

```
您："哪些勒索软件组织在针对医疗行业？"

代理：-> ransomwareBySector {sector: "healthcare"}
      -> ransomwareRecent {}
      -> ransomlookRecent {}
      -> "医疗行业勒索软件活动：
         过去 12 个月共 142 个受害者，涉及 12 个组织。
         主要组织：LockBit3（38 个受害者）、BlackCat/ALPHV（24 个）、
         Cl0p（19 个）、Royal（15 个）。
         最近：MedCorp Inc. 被 LockBit3 列出（2 天前）。
         过去一周在 ransomware.live 和 RansomLook 信息流中
         新增 3 个医疗行业受害者。"
```

### 暗网侦察

```
您："在 .onion 网站上搜索有关我们公司的提及"

代理：-> tor_search_onion {query: "AcmeCorp"}
      -> intelx_search {term: "acmecorp.com"}
      -> onion_lookup {address: "relevant-onion-address.onion"}
      -> "AcmeCorp 暗网搜索结果：
         Ahmia.fi：3 个 .onion 页面提及 AcmeCorp
         - 论坛帖子讨论 AcmeCorp 员工名单（泄露论坛）
         - 市场上架 AcmeCorp 数据库（未验证）
         - 博客文章引用 AcmeCorp 泄露事件
         IntelligenceX：粘贴网站上有 12 条结果
         建议：调查论坛帖子和市场列表，
         了解是否存在活跃的数据销售。"
```

### 恶意软件分析

```
您："分析此文件哈希的恶意软件指标：abc123def456..."

代理：-> malware_search {hash: "abc123def456..."}
      -> malware_overview {sha256: "abc123def456..."}
      -> bazaarHash {hash: "abc123def456..."}
      -> threatfoxSearch {searchTerm: "abc123def456..."}
      -> otx_hash {hash: "abc123def456..."}
      -> "abc123def456 恶意软件分析：
         Hybrid Analysis：恶意（威胁评分 95/100）
         - 家族：AgentTesla（信息窃取器）
         - MITRE ATT&CK：T1555（凭证访问）、T1071（C2）
         - 网络 IOC：3 个 C2 域名、2 个 IP
         MalwareBazaar：首次发现 2024-03-15，标记为 'AgentTesla'
         ThreatFox：2 个 IOC 条目关联到同一攻击活动
         OTX：在 4 个威胁脉冲中被引用"
```

---

## 工具参考（66 个工具）

<details open>
<summary><b>Tor 网络 (7) &mdash; 无需 API 密钥（.onion 工具需要 Tor 守护进程）</b></summary>

| 工具 | 描述 |
|------|------|
| `tor_status` | 检查本地 Tor SOCKS5 代理守护进程是否正在运行且可访问 |
| `tor_fetch_onion` | 通过 Tor SOCKS5 代理获取 .onion URL 的原始 HTML（通过 socks5h 防止 DNS 泄露） |
| `tor_scrape_onion` | 获取并解析 .onion 网站 &mdash; 返回结构化数据：标题、链接、正文 |
| `tor_search_onion` | 使用 Ahmia.fi 搜索引擎搜索 .onion 网站 |
| `tor_exit_nodes` | 从 Tor 项目官方批量出口列表获取当前 Tor 出口节点 IP 地址 |
| `tor_exit_check` | 检查特定 IP 地址是否为已知的 Tor 出口节点 |
| `tor_exit_details` | 获取详细的 Tor 出口节点信息，包括指纹和发布时间戳 |

</details>

<details>
<summary><b>勒索软件情报 (9) &mdash; 无需 API 密钥</b></summary>

| 工具 | 描述 |
|------|------|
| `ransomwareRecent` | 从 ransomware.live 获取最近的勒索软件受害者 |
| `ransomwareGroups` | 列出 ransomware.live 追踪的所有已知勒索软件组织 |
| `ransomwareGroup` | 按名称获取特定勒索软件组织的详细资料 |
| `ransomwareGroupVictims` | 获取特定勒索软件组织声称的所有受害者 |
| `ransomwareSearch` | 按关键词搜索勒索软件受害者（公司名称、域名等） |
| `ransomwareByCountry` | 按 ISO 3166-1 alpha-2 国家代码筛选勒索软件受害者 |
| `ransomwareBySector` | 按行业/领域筛选勒索软件受害者（医疗、金融等） |
| `ransomlookGroups` | 列出 RansomLook 追踪的所有 582+ 个勒索软件组织 |
| `ransomlookRecent` | 从 RansomLook 获取最近的勒索软件帖子和受害者声明 |

</details>

<details>
<summary><b>泄露情报 &mdash; HIBP (7) &mdash; 部分免费：部分工具免费，账户搜索需要 HIBP_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `breachList` | 列出 HaveIBeenPwned 的所有已知数据泄露，可按域名筛选 &mdash; 免费 |
| `breachGet` | 按名称获取特定数据泄露的详细信息 &mdash; 免费 |
| `breachLatest` | 获取最近添加的数据泄露 &mdash; 免费 |
| `breachDataClasses` | 列出 HIBP 已知的所有数据类别（被泄露数据的类型） &mdash; 免费 |
| `breachPassword` | 检查密码是否出现在已知泄露中（k-匿名性，仅发送 SHA-1 前 5 个字符） &mdash; 免费 |
| `breachSearch` | 搜索特定账户（邮箱/用户名）的所有泄露 &mdash; 需要 `HIBP_API_KEY` |
| `breachPastes` | 搜索公开粘贴中的邮箱地址 &mdash; 需要 `HIBP_API_KEY` |

</details>

<details>
<summary><b>abuse.ch 套件 (9) &mdash; 无需 API 密钥（ABUSECH_AUTH_KEY 可选，用于提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `threatfoxGetIocs` | 获取 ThreatFox 最近 N 天报告的 IOC |
| `threatfoxSearch` | 按 IP、域名、哈希或 URL 搜索 ThreatFox IOC |
| `threatfoxTag` | 按标签搜索 ThreatFox IOC（如 Cobalt Strike、Emotet） |
| `threatfoxMalware` | 使用 Malpedia 命名按恶意软件家族搜索 ThreatFox IOC |
| `urlhausLookup` | 在 URLhaus 中查询 URL 或主机的恶意软件分发情况 |
| `urlhausTag` | 按标签搜索 URLhaus 条目 |
| `bazaarHash` | 通过 MD5、SHA1 或 SHA256 哈希在 MalwareBazaar 中查询恶意软件样本 |
| `bazaarRecent` | 获取 MalwareBazaar 最近提交的恶意软件样本 |
| `bazaarTag` | 按标签或 YARA 签名名称搜索 MalwareBazaar |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; 无需 API 密钥（OTX_API_KEY 可选，用于提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `otx_ip` | 查询 IP 地址的威胁情报 &mdash; 脉冲信息、信誉、国家、ASN |
| `otx_domain` | 查询域名的威胁情报 &mdash; 脉冲信息、whois、信誉 |
| `otx_hash` | 查询文件哈希（MD5、SHA1、SHA256）的威胁情报 |
| `otx_cve` | 查询 CVE 的威胁情报 &mdash; 相关脉冲和指标 |
| `otx_search_pulses` | 按关键词搜索 OTX 威胁脉冲 |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; 需要 ABUSEIPDB_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `abuseipdb_check` | 检查 IP 地址的滥用报告 &mdash; 信心评分、ISP、国家、报告数量 |
| `abuseipdb_reports` | 获取 IP 的详细滥用报告，包含评论和类别 |
| `abuseipdb_blacklist` | 获取 AbuseIPDB 报告最多的恶意 IP 地址黑名单 |
| `abuseipdb_check_block` | 检查整个 CIDR 网络块的滥用报告 |

</details>

<details>
<summary><b>GreyNoise 社区版 (2) &mdash; 无需 API 密钥</b></summary>

| 工具 | 描述 |
|------|------|
| `greynoise_ip` | 在 GreyNoise 上查询 IP &mdash; 分类（良性/恶意/未知）、扫描器状态 |
| `greynoise_check` | 快速检查：此 IP 是已知扫描器还是已知良性服务？ |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; 无需 API 密钥（PULSEDIVE_API_KEY 可选，用于提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `pulsedive_indicator` | 查询指标（IP、域名、URL 或哈希） &mdash; 风险等级、威胁、信息源 |
| `pulsedive_search` | 按值搜索 Pulsedive 指标 |
| `pulsedive_explore` | 使用高级查询探索关联指标（带风险等级的相关 IOC） |

</details>

<details>
<summary><b>Hudson Rock 窃密日志 (3) &mdash; 需要 HUDSONROCK_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `stealer_domain` | 按域名搜索窃密日志条目 &mdash; 被入侵机器、凭证、恶意软件详情 |
| `stealer_email` | 按邮箱地址搜索窃密日志 &mdash; 浏览器凭证中包含该邮箱的被入侵机器 |
| `stealer_ip` | 按 IP 地址搜索窃密日志 &mdash; 来自该 IP 的被入侵机器 |

</details>

<details>
<summary><b>Vulners 漏洞利用 (3) &mdash; 无需 API 密钥（VULNERS_API_KEY 可选，用于搜索）</b></summary>

| 工具 | 描述 |
|------|------|
| `vulners_search` | 使用 Lucene 查询搜索 Vulners 漏洞数据库 |
| `vulners_id` | 按 ID 查询特定漏洞或利用（CVE、EDB、GHSA） &mdash; 免费 |
| `vulners_exploit` | 专门搜索漏洞利用（ExploitDB 条目） |

</details>

<details>
<summary><b>区块链情报 (4) &mdash; 无需 API 密钥</b></summary>

| 工具 | 描述 |
|------|------|
| `btc_address` | 查询比特币地址 &mdash; 余额、交易数量、最近交易 |
| `btc_balance` | 获取比特币地址余额（聪为单位，无需完整历史的快速检查） |
| `btc_tx` | 按哈希获取详细的比特币交易信息 &mdash; 输入、输出、手续费、区块信息 |
| `btc_abuse_check` | 在 ChainAbuse 上检查比特币地址的滥用报告 &mdash; 带类别的诈骗报告 |

</details>

<details>
<summary><b>Hybrid Analysis 恶意软件 (3) &mdash; 需要 HYBRID_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `malware_search` | 按文件哈希在 Hybrid Analysis 沙箱中搜索 &mdash; 裁定、杀毒软件检测率、分析详情 |
| `malware_overview` | 完整恶意软件分析概览 &mdash; MITRE ATT&CK 技术、网络指标、进程 |
| `malware_feed` | 获取最新的恶意软件引爆信息流 &mdash; 最近分析的样本及裁定 |

</details>

<details>
<summary><b>CIRCL 洋葱查询 (1) &mdash; 无需 API 密钥</b></summary>

| 工具 | 描述 |
|------|------|
| `onion_lookup` | 通过 CIRCL AIL 项目查询 .onion 地址的元数据 &mdash; 首次/末次发现、状态、标签、证书、端口、BTC 地址 |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; 需要 INTELX_API_KEY</b></summary>

| 工具 | 描述 |
|------|------|
| `intelx_search` | 在 IntelligenceX 上发起搜索，查找泄露数据、暗网内容等 |
| `intelx_search_results` | 按 ID 检索 IntelligenceX 搜索结果 |
| `intelx_phonebook` | 电话簿搜索 &mdash; 查找与关键词关联的邮箱、域名、URL |
| `intelx_phonebook_results` | 按 ID 检索电话簿搜索结果 |

</details>

<details>
<summary><b>PhishTank (1) &mdash; 无需 API 密钥（PHISHTANK_API_KEY 可选，用于提高速率）</b></summary>

| 工具 | 描述 |
|------|------|
| `phishing_check` | 通过 PhishTank 检查 URL 是否为已知钓鱼网站 |

</details>

<details>
<summary><b>Meta (1) &mdash; 无需 API 密钥</b></summary>

| 工具 | 描述 |
|------|------|
| `darknet_list_sources` | 列出所有可用数据源及其配置状态、API 密钥状态和工具数量 |

</details>

---

### CLI 用法

```bash
# 列出所有可用工具
npx darknet-mcp-server --list

# 检查 Tor SOCKS5 代理连接
npx darknet-mcp-server --check-tor

# 直接运行任意工具
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# 需要 API 密钥的工具
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## 数据源（16 个）

| 来源 | 认证 | 速率限制 | 提供内容 |
|------|------|---------|---------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 次请求/1.5 秒 | 泄露搜索、粘贴搜索、密码检查、泄露列表 |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 次请求/秒 | 暗网内容、泄露数据搜索、电话簿（邮箱/域名/URL） |
| [AlienVault OTX](https://otx.alienvault.com) | 可选 | 1 次请求/秒 | IP、域名、哈希、CVE 的威胁情报；威胁脉冲搜索 |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 次请求/秒 | IP 滥用报告、信心评分、黑名单、CIDR 块检查 |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | 可选 | 2 次请求/秒 | IOC 搜索、恶意软件家族追踪、基于标签的搜索 |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | 可选 | 2 次请求/秒 | 恶意软件分发 URL 追踪、主机/URL 查询 |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | 可选 | 2 次请求/秒 | 恶意软件样本库、哈希查询、YARA 签名搜索 |
| [GreyNoise](https://www.greynoise.io) | 无 | 1 次请求/秒 | IP 分类（良性/恶意）、互联网扫描器检测 |
| [Pulsedive](https://pulsedive.com) | 可选 | 1 次请求/秒 | 指标丰富化、风险评分、关联 IOC 探索 |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 次请求/秒 | 按域名、邮箱或 IP 搜索窃密日志 |
| [Vulners](https://vulners.com) | 可选 | 1 次请求/秒 | 漏洞/利用数据库、CVE 查询、ExploitDB 搜索 |
| [Blockchain.info](https://blockchain.info) | 无 | 1 次请求/秒 | 比特币地址查询、余额、交易详情 |
| [ChainAbuse](https://www.chainabuse.com) | 无 | 1 次请求/秒 | 比特币地址滥用/诈骗报告 |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 次请求/秒 | 恶意软件沙箱引爆、MITRE ATT&CK 映射、样本信息流 |
| [CIRCL AIL（洋葱查询）](https://onion.ail-project.org) | 无 | 0.5 次请求/秒 | .onion 地址元数据、首次/末次发现、关联 BTC 地址 |
| [Tor 网络](https://www.torproject.org) | 无 | 不适用 | 出口节点列表、.onion 获取/抓取、Ahmia.fi 搜索 |

---

## 架构

```
src/
  index.ts                # CLI 入口（--help、--list、--check-tor、stdio 服务器）
  protocol/
    mcp-server.ts         # MCP 服务器设置（stdio 传输）
    tools.ts              # 工具注册表 — 所有 66 个工具在此组装
  types/
    index.ts              # 共享类型（ToolDef、ToolContext、ToolResult）
  utils/
    rate-limiter.ts       # 每个提供者的速率限制器
    cache.ts              # API 响应的 TTL 缓存
    tor-fetch.ts          # Tor SOCKS5 代理 HTTP 客户端
    require-key.ts        # API 密钥验证助手
  tor/                    # Tor 网络工具 (7)
  ransomware/             # 勒索软件情报工具 (9)
  breach/                 # HIBP 泄露工具 (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar 工具 (9)
  otx/                    # AlienVault OTX 工具 (5)
  abuseipdb/              # AbuseIPDB 工具 (4)
  greynoise/              # GreyNoise 社区版工具 (2)
  pulsedive/              # Pulsedive 工具 (3)
  hudsonrock/             # Hudson Rock 窃密日志工具 (3)
  vulners/                # Vulners 漏洞利用工具 (3)
  blockchain/             # 区块链情报工具 (4)
  hybrid/                 # Hybrid Analysis 恶意软件工具 (3)
  onionlookup/            # CIRCL 洋葱查询工具 (1)
  intelx/                 # IntelligenceX 工具 (4)
  phishing/               # PhishTank 工具 (1)
  meta/                   # Meta 工具 (1)
```

**设计决策：**

- **16 个提供者，1 个服务器** &mdash; 每个数据源都是独立模块。代理根据查询选择使用哪些工具。
- **每个提供者独立的速率限制器** &mdash; 每个数据源有自己的 `RateLimiter` 实例，根据该 API 的限制进行校准。无共享瓶颈。
- **TTL 缓存** &mdash; 勒索软件数据（15 分钟）、泄露列表（10 分钟）、abuse.ch（5 分钟）结果会被缓存，避免多工具工作流中的冗余 API 调用。
- **优雅降级** &mdash; 缺少 API 密钥不会导致服务器崩溃。工具返回描述性错误信息："设置 HIBP_API_KEY 以启用泄露账户搜索。"
- **DNS 泄露防护** &mdash; Tor .onion 工具使用 `socks5h://` 协议通过 Tor 解析 DNS，防止 DNS 泄露到本地解析器。
- **4 个依赖** &mdash; `@modelcontextprotocol/sdk`、`zod`、`socks-proxy-agent` 和 `cheerio`。所有明网 HTTP 使用原生 `fetch`。所有 Tor 流量通过 SOCKS5。

---

## 限制

- HIBP 账户/粘贴搜索需要付费 API 密钥（$3.50/月）
- IntelligenceX、AbuseIPDB、Hudson Rock 和 Hybrid Analysis 的工具需要 API 密钥
- Tor .onion 工具需要运行中的 Tor SOCKS5 代理（未捆绑）
- 没有 `ABUSECH_AUTH_KEY` 时 abuse.ch 免费层有较低的速率限制
- Ransomware.live 和 RansomLook 数据取决于上游抓取频率
- 区块链工具仅支持比特币（不支持以太坊/门罗币）
- PhishTank 数据库可能落后于实时钓鱼活动
- 已在 macOS / Linux 上测试（未在 Windows 上测试）

---

## MCP 安全套件的一部分

| 项目 | 领域 | 工具 |
|------|------|------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | 基于浏览器的安全测试 | 39 个工具、Firefox、注入测试 |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | 云安全（AWS/Azure/GCP） | 38 个工具、60+ 项检查 |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub 安全态势 | 39 个工具、45 项检查 |
| [cve-mcp](https://github.com/badchars/cve-mcp) | 漏洞情报 | 23 个工具、5 个数据源 |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT 与侦察 | 37 个工具、12 个数据源 |
| **darknet-mcp-server** | **暗网与威胁情报** | **66 个工具、16 个数据源** |

---

<p align="center">
<b>仅用于授权的安全测试和评估。</b><br>
在对任何目标进行情报收集之前，请始终确保您已获得适当授权。
</p>

<p align="center">
  <a href="LICENSE">MIT 许可证</a> &bull; 使用 Bun + TypeScript 构建
</p>
