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
  <strong>Tiếng Việt</strong> |
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

<h3 align="center">Tình báo dark web và mối đe dọa cho các AI agent.</h3>

<p align="center">
  HIBP, ThreatFox, theo dõi ransomware, truy cập Tor .onion, tình báo blockchain, tìm kiếm exploit, nhật ký stealer, phân tích malware &mdash; hợp nhất trong một MCP server duy nhất.<br>
  AI agent của bạn có được <b>tình báo dark web toàn phổ theo yêu cầu</b>, không phải 16 tab trình duyệt và tương quan thủ công.
</p>

<br>

<p align="center">
  <a href="#vấn-đề">Vấn đề</a> &bull;
  <a href="#khác-biệt-như-thế-nào">Khác biệt như thế nào</a> &bull;
  <a href="#bắt-đầu-nhanh">Bắt đầu nhanh</a> &bull;
  <a href="#ai-có-thể-làm-gì">AI có thể làm gì</a> &bull;
  <a href="#tham-chiếu-công-cụ-66-công-cụ">Công cụ (66)</a> &bull;
  <a href="#nguồn-dữ-liệu-16">Nguồn dữ liệu</a> &bull;
  <a href="#kiến-trúc">Kiến trúc</a> &bull;
  <a href="CHANGELOG.md">Nhật ký thay đổi</a> &bull;
  <a href="CONTRIBUTING.md">Đóng góp</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Giấy phép"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Công cụ">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Nguồn">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="Demo darknet-mcp-server" width="800">
</p>

---

## Vấn đề

Tình báo dark web là tầng còn thiếu trong mọi cuộc điều tra bảo mật. Cơ sở dữ liệu rò rỉ, trình theo dõi ransomware, dịch vụ ẩn Tor, sandbox malware, nhật ký stealer, pháp y blockchain, cơ sở dữ liệu exploit &mdash; dữ liệu bạn cần nằm rải rác trên hàng chục nền tảng, mỗi nền tảng có API riêng, xác thực riêng, giới hạn tốc độ riêng, định dạng đầu ra riêng. Hôm nay bạn kiểm tra HIBP ở một tab, ThreatFox ở tab khác, duyệt các trang rò rỉ ransomware qua Tor, tra cứu hash trên MalwareBazaar, kiểm tra giao dịch blockchain trên block explorer, và rồi mất một giờ ghép nối tất cả thủ công.

```
Quy trình tình báo dark web truyền thống:
  kiểm tra lộ rò rỉ dữ liệu             ->  Giao diện web HIBP (API trả phí)
  tìm kiếm thông tin đăng nhập bị rò rỉ  ->  Giao diện web IntelligenceX
  theo dõi nhóm ransomware               ->  ransomware.live + ransomlook.io (2 UI riêng biệt)
  truy cập dịch vụ ẩn .onion             ->  Tor Browser thủ công
  phân tích mẫu malware                  ->  Hybrid Analysis + MalwareBazaar (2 UI nữa)
  kiểm tra lịch sử lạm dụng IP           ->  AbuseIPDB + GreyNoise (2 UI nữa)
  truy vết tiền mã hóa                   ->  blockchain.info + ChainAbuse
  tìm kiếm exploit                        ->  Giao diện web Vulners
  kiểm tra URL phishing                   ->  Giao diện web PhishTank
  tương quan tất cả                        ->  copy-paste vào báo cáo
  ────────────────────────────────
  Tổng: 60+ phút mỗi cuộc điều tra, phần lớn thời gian chuyển đổi ngữ cảnh
```

**darknet-mcp-server** cung cấp cho AI agent của bạn 66 công cụ từ 16 nguồn dữ liệu thông qua [Model Context Protocol](https://modelcontextprotocol.io). Agent truy vấn tất cả nguồn song song, tương quan dữ liệu trên web bề mặt và dark web, xác định mối đe dọa, và trình bày bức tranh tình báo hợp nhất &mdash; trong một cuộc hội thoại duy nhất.

```
Với darknet-mcp-server:
  Bạn: "Điều tra lộ rò rỉ và bối cảnh đe dọa cho target.com"

  Agent: -> HIBP: 3 vụ rò rỉ đã biết (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOC liên quan đến domain (C2 callback, phishing)
         -> URLhaus: 1 URL độc hại trên subdomain
         -> Ransomware: Không tìm thấy danh sách nạn nhân (tốt)
         -> Nhật ký stealer: tìm thấy 47 thông tin đăng nhập nhân viên bị xâm phạm
         -> OTX: 5 threat pulse đề cập đến domain
         -> AbuseIPDB: IP chính có 12 báo cáo lạm dụng (brute force)
         -> "target.com đã có trong 3 vụ rò rỉ dữ liệu lộ 2,1M bản ghi.
            47 thông tin đăng nhập nhân viên được tìm thấy trong nhật ký stealer —
            khuyến nghị đặt lại mật khẩu ngay lập tức. 2 IOC ThreatFox đang hoạt
            động cho thấy đang bị nhắm mục tiêu. Không có danh sách ransomware,
            nhưng các báo cáo lạm dụng trên IP chính cần được điều tra."
```

---

## Khác biệt như thế nào

Các công cụ hiện có cho bạn dữ liệu thô từ một nguồn tại một thời điểm. darknet-mcp-server cho AI agent của bạn khả năng **suy luận đồng thời trên tình báo web bề mặt và dark web**.

<table>
<thead>
<tr>
<th></th>
<th>Phương pháp truyền thống</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Giao diện</b></td>
<td>16 web UI, CLI và API khác nhau</td>
<td>MCP &mdash; AI agent gọi công cụ qua hội thoại</td>
</tr>
<tr>
<td><b>Nguồn dữ liệu</b></td>
<td>Một nền tảng tại một thời điểm</td>
<td>16 nguồn được truy vấn song song</td>
</tr>
<tr>
<td><b>Tình báo rò rỉ</b></td>
<td>HIBP web UI cho rò rỉ, IntelligenceX cho dữ liệu rò rỉ</td>
<td>Agent kết hợp rò rỉ HIBP + paste + IntelligenceX + nhật ký stealer</td>
</tr>
<tr>
<td><b>Truy cập dark web</b></td>
<td>Tor Browser thủ công, copy-paste từ các trang .onion</td>
<td>Agent tải, phân tích và tìm kiếm các trang .onion qua proxy SOCKS5</td>
</tr>
<tr>
<td><b>Phân tích malware</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox riêng lẻ</td>
<td>Agent đối chiếu: "Hash này từ ThreatFox cũng được phân tích trong Hybrid Analysis với các IOC mạng"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Block explorer + ChainAbuse riêng lẻ</td>
<td>Agent truy vết giao dịch BTC và kiểm tra báo cáo lạm dụng trong một bước</td>
</tr>
<tr>
<td><b>API key</b></td>
<td>Yêu cầu cho hầu hết mọi thứ</td>
<td>Nhiều công cụ miễn phí; API key mở khóa nguồn premium</td>
</tr>
<tr>
<td><b>Cài đặt</b></td>
<td>Cài đặt từng công cụ, quản lý từng cấu hình, chạy Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; một lệnh, không cần cấu hình</td>
</tr>
</tbody>
</table>

---

## Bắt đầu nhanh

### Tùy chọn 1: npx (không cần cài đặt)

```bash
npx darknet-mcp-server
```

Các công cụ miễn phí hoạt động ngay. Không cần API key cho theo dõi ransomware, danh sách rò rỉ, GreyNoise, blockchain, OTX và nhiều hơn nữa.

### Tùy chọn 2: Clone

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Biến môi trường (tùy chọn)

```bash
# Tình báo rò rỉ và thông tin đăng nhập
export HIBP_API_KEY=your-key           # Kích hoạt tìm kiếm tài khoản rò rỉ và tìm kiếm paste
export INTELX_API_KEY=your-key         # Kích hoạt 4 công cụ IntelligenceX

# Tình báo mối đe dọa
export OTX_API_KEY=your-key            # Tăng giới hạn tốc độ AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Kích hoạt 4 công cụ AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Giới hạn tốc độ cao hơn cho bộ abuse.ch
export PULSEDIVE_API_KEY=your-key      # Giới hạn tốc độ cao hơn cho Pulsedive

# Nhật ký stealer và thông tin đăng nhập
export HUDSONROCK_API_KEY=your-key     # Kích hoạt 3 công cụ nhật ký stealer Hudson Rock

# Phân tích exploit và malware
export VULNERS_API_KEY=your-key        # Kích hoạt tìm kiếm và công cụ exploit Vulners
export HYBRID_API_KEY=your-key         # Kích hoạt 3 công cụ phân tích malware Hybrid Analysis

# Phishing
export PHISHTANK_API_KEY=your-key      # Giới hạn tốc độ cao hơn cho PhishTank

# Proxy Tor SOCKS5 (để truy cập .onion)
export TOR_SOCKS_HOST=127.0.0.1       # Mặc định: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Mặc định: 9050
```

Tất cả API key đều tùy chọn. Không có chúng, bạn vẫn có được theo dõi ransomware, danh sách rò rỉ, GreyNoise, tình báo blockchain, OTX, kiểm tra nút thoát Tor, tìm kiếm onion, CIRCL onion lookup và nhiều hơn nữa.

### Kết nối với AI agent của bạn

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Với npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Với bản clone cục bộ
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Thêm vào `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / các MCP client khác</b></summary>

Cùng định dạng cấu hình JSON. Trỏ lệnh tới `npx darknet-mcp-server` hoặc đường dẫn cài đặt cục bộ của bạn.

</details>

### Cài đặt Tor (tùy chọn, để truy cập .onion)

7 công cụ Tor (`tor_fetch_onion`, `tor_scrape_onion`, v.v.) yêu cầu một proxy Tor SOCKS5 đang chạy.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Xác minh kết nối
npx darknet-mcp-server --check-tor
```

### Bắt đầu truy vấn

```
Bạn: "Kiểm tra xem example.com có trong bất kỳ vụ rò rỉ dữ liệu nào không và tìm nhật ký stealer"
```

Đó là tất cả. Agent tự động xử lý tra cứu rò rỉ, tìm kiếm thông tin đăng nhập, tương quan mối đe dọa và nhiều hơn nữa.

---

## AI có thể làm gì

### Điều tra rò rỉ

```
Bạn: "Kiểm tra xem example.com có trong bất kỳ vụ rò rỉ dữ liệu nào không"

Agent: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com xuất hiện trong 5 vụ rò rỉ đã biết:
          - ExampleDB 2023: 4,2M bản ghi (email, mật khẩu, IP)
          - Collection #1: danh sách credential stuffing
          - Combolist 2024: 890K cặp email:mật khẩu
          Nhật ký stealer: 23 máy bị xâm phạm với thông tin đăng nhập
          đã lưu cho example.com được tìm thấy trong cơ sở dữ liệu Hudson Rock.
          IntelligenceX: 47 kết quả trên các trang paste và dark web."
```

### Theo dõi Ransomware

```
Bạn: "Nhóm ransomware nào đang nhắm vào ngành y tế?"

Agent: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Hoạt động ransomware trong ngành y tế:
          142 nạn nhân từ 12 nhóm trong 12 tháng qua.
          Nhóm hàng đầu: LockBit3 (38 nạn nhân), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Gần nhất: MedCorp Inc. được liệt kê bởi LockBit3 (2 ngày trước).
          3 nạn nhân y tế mới trong tuần qua trên các nguồn
          ransomware.live và RansomLook."
```

### Trinh sát Dark Web

```
Bạn: "Tìm kiếm đề cập về công ty chúng tôi trên các trang .onion"

Agent: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Kết quả tìm kiếm dark web cho AcmeCorp:
          Ahmia.fi: 3 trang .onion đề cập AcmeCorp
          - Bài đăng diễn đàn thảo luận danh sách nhân viên AcmeCorp (diễn đàn rò rỉ)
          - Danh sách marketplace cho cơ sở dữ liệu AcmeCorp (chưa xác minh)
          - Bài blog đề cập vụ rò rỉ AcmeCorp
          IntelligenceX: 12 kết quả trên các trang paste
          Khuyến nghị: điều tra bài đăng diễn đàn và danh sách marketplace
          để phát hiện bán dữ liệu đang hoạt động."
```

### Phân tích Malware

```
Bạn: "Phân tích hash file này để tìm chỉ báo malware: abc123def456..."

Agent: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Phân tích malware cho abc123def456:
          Hybrid Analysis: ĐỘC HẠI (điểm đe dọa 95/100)
          - Họ: AgentTesla (stealer thông tin)
          - MITRE ATT&CK: T1555 (Truy cập thông tin đăng nhập), T1071 (C2)
          - IOC mạng: 3 domain C2, 2 IP
          MalwareBazaar: Phát hiện lần đầu 2024-03-15, gắn thẻ 'AgentTesla'
          ThreatFox: 2 mục IOC liên kết đến cùng chiến dịch
          OTX: Được đề cập trong 4 threat pulse"
```

---

## Tham chiếu công cụ (66 công cụ)

<details open>
<summary><b>Mạng Tor (7) &mdash; Không cần API key (cần Tor daemon cho công cụ .onion)</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `tor_status` | Kiểm tra xem Tor SOCKS5 proxy daemon cục bộ có đang chạy và truy cập được không |
| `tor_fetch_onion` | Tải HTML thô từ URL .onion qua proxy Tor SOCKS5 (ngăn rò rỉ DNS qua socks5h) |
| `tor_scrape_onion` | Tải và phân tích trang .onion &mdash; trả về dữ liệu có cấu trúc: tiêu đề, liên kết, nội dung |
| `tor_search_onion` | Tìm kiếm các trang .onion bằng công cụ tìm kiếm Ahmia.fi |
| `tor_exit_nodes` | Lấy địa chỉ IP nút thoát Tor hiện tại từ danh sách thoát hàng loạt chính thức của Tor Project |
| `tor_exit_check` | Kiểm tra xem một địa chỉ IP cụ thể có phải là nút thoát Tor đã biết không |
| `tor_exit_details` | Thông tin chi tiết nút thoát Tor bao gồm fingerprint và timestamp xuất bản |

</details>

<details>
<summary><b>Tình báo Ransomware (9) &mdash; Không cần API key</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `ransomwareRecent` | Tải nạn nhân ransomware gần nhất từ ransomware.live |
| `ransomwareGroups` | Liệt kê tất cả nhóm ransomware đã biết được theo dõi bởi ransomware.live |
| `ransomwareGroup` | Hồ sơ chi tiết cho một nhóm ransomware cụ thể theo tên |
| `ransomwareGroupVictims` | Tất cả nạn nhân được tuyên bố bởi một nhóm ransomware cụ thể |
| `ransomwareSearch` | Tìm kiếm nạn nhân ransomware theo từ khóa (tên công ty, domain, v.v.) |
| `ransomwareByCountry` | Nạn nhân ransomware lọc theo mã quốc gia ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Nạn nhân ransomware lọc theo ngành (y tế, tài chính, v.v.) |
| `ransomlookGroups` | Liệt kê tất cả 582+ nhóm ransomware được theo dõi bởi RansomLook |
| `ransomlookRecent` | Tải bài đăng ransomware và tuyên bố nạn nhân gần nhất từ RansomLook |

</details>

<details>
<summary><b>Tình báo rò rỉ &mdash; HIBP (7) &mdash; Một phần: một số công cụ miễn phí, tìm kiếm tài khoản yêu cầu HIBP_API_KEY</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `breachList` | Liệt kê tất cả vụ rò rỉ dữ liệu đã biết từ HaveIBeenPwned, tùy chọn lọc theo domain &mdash; miễn phí |
| `breachGet` | Chi tiết vụ rò rỉ dữ liệu cụ thể theo tên &mdash; miễn phí |
| `breachLatest` | Vụ rò rỉ dữ liệu được thêm gần nhất &mdash; miễn phí |
| `breachDataClasses` | Liệt kê tất cả lớp dữ liệu (loại dữ liệu bị xâm phạm) mà HIBP biết &mdash; miễn phí |
| `breachPassword` | Kiểm tra xem mật khẩu đã xuất hiện trong các vụ rò rỉ đã biết chưa (k-anonymity, chỉ gửi 5 ký tự SHA-1 prefix) &mdash; miễn phí |
| `breachSearch` | Tìm kiếm tất cả vụ rò rỉ cho tài khoản cụ thể (email/username) &mdash; yêu cầu `HIBP_API_KEY` |
| `breachPastes` | Tìm kiếm địa chỉ email trong các paste được đăng công khai &mdash; yêu cầu `HIBP_API_KEY` |

</details>

<details>
<summary><b>Bộ abuse.ch (9) &mdash; Không cần API key (ABUSECH_AUTH_KEY tùy chọn cho tốc độ cao hơn)</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `threatfoxGetIocs` | Lấy IOC gần đây từ ThreatFox được báo cáo trong N ngày qua |
| `threatfoxSearch` | Tìm kiếm ThreatFox IOC theo IP, domain, hash hoặc URL |
| `threatfoxTag` | Tìm kiếm ThreatFox IOC theo thẻ (v.d. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Tìm kiếm ThreatFox IOC theo họ malware sử dụng danh pháp Malpedia |
| `urlhausLookup` | Tra cứu URL hoặc host trong URLhaus để phát hiện phân phối malware |
| `urlhausTag` | Tìm kiếm mục URLhaus theo thẻ |
| `bazaarHash` | Tra cứu mẫu malware trong MalwareBazaar theo hash MD5, SHA1 hoặc SHA256 |
| `bazaarRecent` | Lấy mẫu malware mới nhất từ MalwareBazaar |
| `bazaarTag` | Tìm kiếm MalwareBazaar theo thẻ hoặc tên chữ ký YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Không cần API key (OTX_API_KEY tùy chọn cho tốc độ cao hơn)</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `otx_ip` | Tra cứu tình báo mối đe dọa cho địa chỉ IP &mdash; thông tin pulse, danh tiếng, quốc gia, ASN |
| `otx_domain` | Tra cứu tình báo mối đe dọa cho domain &mdash; thông tin pulse, whois, danh tiếng |
| `otx_hash` | Tra cứu tình báo mối đe dọa cho file hash (MD5, SHA1, SHA256) |
| `otx_cve` | Tra cứu tình báo mối đe dọa cho CVE &mdash; pulse và chỉ báo liên quan |
| `otx_search_pulses` | Tìm kiếm OTX threat pulse theo từ khóa |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Yêu cầu ABUSEIPDB_API_KEY</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `abuseipdb_check` | Kiểm tra địa chỉ IP cho báo cáo lạm dụng &mdash; điểm tin cậy, ISP, quốc gia, số lượng báo cáo |
| `abuseipdb_reports` | Lấy báo cáo lạm dụng riêng lẻ cho IP với bình luận và danh mục chi tiết |
| `abuseipdb_blacklist` | Lấy danh sách đen AbuseIPDB các địa chỉ IP độc hại được báo cáo nhiều nhất |
| `abuseipdb_check_block` | Kiểm tra toàn bộ khối mạng CIDR cho báo cáo lạm dụng |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Không cần API key</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `greynoise_ip` | Tra cứu IP trên GreyNoise &mdash; phân loại (lành tính/độc hại/không rõ), trạng thái scanner |
| `greynoise_check` | Kiểm tra nhanh: IP này có phải scanner đã biết hoặc dịch vụ lành tính đã biết không? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Không cần API key (PULSEDIVE_API_KEY tùy chọn cho tốc độ cao hơn)</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `pulsedive_indicator` | Tra cứu chỉ báo (IP, domain, URL hoặc hash) &mdash; mức rủi ro, mối đe dọa, feed |
| `pulsedive_search` | Tìm kiếm chỉ báo Pulsedive theo giá trị |
| `pulsedive_explore` | Khám phá chỉ báo liên kết bằng truy vấn nâng cao (IOC liên quan với mức rủi ro) |

</details>

<details>
<summary><b>Nhật ký Stealer Hudson Rock (3) &mdash; Yêu cầu HUDSONROCK_API_KEY</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `stealer_domain` | Tìm kiếm mục nhật ký stealer theo domain &mdash; máy bị xâm phạm, thông tin đăng nhập, chi tiết malware |
| `stealer_email` | Tìm kiếm nhật ký stealer theo địa chỉ email &mdash; máy bị xâm phạm có email đó trong thông tin đăng nhập trình duyệt |
| `stealer_ip` | Tìm kiếm nhật ký stealer theo địa chỉ IP &mdash; máy bị xâm phạm từ IP đó |

</details>

<details>
<summary><b>Exploit Vulners (3) &mdash; Không cần API key (VULNERS_API_KEY tùy chọn cho tìm kiếm)</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `vulners_search` | Tìm kiếm cơ sở dữ liệu lỗ hổng Vulners bằng truy vấn Lucene |
| `vulners_id` | Tra cứu lỗ hổng hoặc exploit cụ thể theo ID (CVE, EDB, GHSA) &mdash; miễn phí |
| `vulners_exploit` | Tìm kiếm riêng cho exploit (mục ExploitDB) |

</details>

<details>
<summary><b>Tình báo Blockchain (4) &mdash; Không cần API key</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `btc_address` | Tra cứu địa chỉ Bitcoin &mdash; số dư, số giao dịch, giao dịch gần đây |
| `btc_balance` | Lấy số dư địa chỉ Bitcoin bằng satoshi (kiểm tra nhanh không cần lịch sử đầy đủ) |
| `btc_tx` | Thông tin chi tiết giao dịch Bitcoin theo hash &mdash; đầu vào, đầu ra, phí, thông tin block |
| `btc_abuse_check` | Kiểm tra địa chỉ Bitcoin cho báo cáo lạm dụng trên ChainAbuse &mdash; báo cáo lừa đảo với danh mục |

</details>

<details>
<summary><b>Malware Hybrid Analysis (3) &mdash; Yêu cầu HYBRID_API_KEY</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `malware_search` | Tìm kiếm sandbox Hybrid Analysis theo file hash &mdash; phán định, tỷ lệ phát hiện AV, chi tiết phân tích |
| `malware_overview` | Tổng quan phân tích malware đầy đủ &mdash; kỹ thuật MITRE ATT&CK, chỉ báo mạng, tiến trình |
| `malware_feed` | Lấy feed kích nổ malware mới nhất &mdash; mẫu phân tích gần đây với phán định |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; Không cần API key</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `onion_lookup` | Tra cứu metadata cho địa chỉ .onion qua dự án CIRCL AIL &mdash; phát hiện đầu/cuối, trạng thái, thẻ, chứng chỉ, cổng, địa chỉ BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Yêu cầu INTELX_API_KEY</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `intelx_search` | Khởi tạo tìm kiếm trên IntelligenceX cho dữ liệu rò rỉ, nội dung dark web và nhiều hơn |
| `intelx_search_results` | Lấy kết quả tìm kiếm IntelligenceX theo ID |
| `intelx_phonebook` | Tìm kiếm danh bạ &mdash; tìm email, domain, URL liên quan đến một thuật ngữ |
| `intelx_phonebook_results` | Lấy kết quả tìm kiếm danh bạ theo ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Không cần API key (PHISHTANK_API_KEY tùy chọn cho tốc độ cao hơn)</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `phishing_check` | Kiểm tra xem URL có phải trang phishing đã biết qua PhishTank không |

</details>

<details>
<summary><b>Meta (1) &mdash; Không cần API key</b></summary>

| Công cụ | Mô tả |
|------|-------------|
| `darknet_list_sources` | Liệt kê tất cả nguồn dữ liệu khả dụng với trạng thái cấu hình, trạng thái API key và số lượng công cụ |

</details>

---

### Sử dụng CLI

```bash
# Liệt kê tất cả công cụ khả dụng
npx darknet-mcp-server --list

# Kiểm tra kết nối proxy Tor SOCKS5
npx darknet-mcp-server --check-tor

# Chạy bất kỳ công cụ nào trực tiếp
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Công cụ yêu cầu API key
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Nguồn dữ liệu (16)

| Nguồn | Xác thực | Giới hạn tốc độ | Cung cấp gì |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | Tìm kiếm rò rỉ, tìm kiếm paste, kiểm tra mật khẩu, danh sách rò rỉ |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Nội dung dark web, tìm kiếm dữ liệu rò rỉ, danh bạ (email/domain/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | Tùy chọn | 1 req/s | Tình báo mối đe dọa cho IP, domain, hash, CVE; tìm kiếm threat pulse |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | Báo cáo lạm dụng IP, chấm điểm tin cậy, danh sách đen, kiểm tra khối CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Tùy chọn | 2 req/s | Tìm kiếm IOC, theo dõi họ malware, tìm kiếm theo thẻ |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Tùy chọn | 2 req/s | Theo dõi URL phân phối malware, tra cứu host/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Tùy chọn | 2 req/s | Kho mẫu malware, tra cứu hash, tìm kiếm chữ ký YARA |
| [GreyNoise](https://www.greynoise.io) | Không | 1 req/s | Phân loại IP (lành tính/độc hại), phát hiện scanner internet |
| [Pulsedive](https://pulsedive.com) | Tùy chọn | 1 req/s | Làm giàu chỉ báo, chấm điểm rủi ro, khám phá IOC liên kết |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Tìm kiếm nhật ký stealer theo domain, email hoặc IP |
| [Vulners](https://vulners.com) | Tùy chọn | 1 req/s | Cơ sở dữ liệu lỗ hổng/exploit, tra cứu CVE, tìm kiếm ExploitDB |
| [Blockchain.info](https://blockchain.info) | Không | 1 req/s | Tra cứu địa chỉ Bitcoin, số dư, chi tiết giao dịch |
| [ChainAbuse](https://www.chainabuse.com) | Không | 1 req/s | Báo cáo lạm dụng/lừa đảo địa chỉ Bitcoin |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Kích nổ malware sandbox, ánh xạ MITRE ATT&CK, feed mẫu |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Không | 0.5 req/s | Metadata địa chỉ .onion, phát hiện đầu/cuối, địa chỉ BTC liên quan |
| [Tor Network](https://www.torproject.org) | Không | N/A | Danh sách nút thoát, tải/phân tích .onion, tìm kiếm Ahmia.fi |

---

## Kiến trúc

```
src/
  index.ts                # Điểm vào CLI (--help, --list, --check-tor, stdio server)
  protocol/
    mcp-server.ts         # Cài đặt MCP server (stdio transport)
    tools.ts              # Registry công cụ — tất cả 66 công cụ được tập hợp tại đây
  types/
    index.ts              # Kiểu dùng chung (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Bộ giới hạn tốc độ theo nhà cung cấp
    cache.ts              # TTL cache cho phản hồi API
    tor-fetch.ts          # HTTP client proxy Tor SOCKS5
    require-key.ts        # Helper xác thực API key
  tor/                    # Công cụ mạng Tor (7)
  ransomware/             # Công cụ tình báo Ransomware (9)
  breach/                 # Công cụ rò rỉ HIBP (7)
  abusech/                # Công cụ ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Công cụ AlienVault OTX (5)
  abuseipdb/              # Công cụ AbuseIPDB (4)
  greynoise/              # Công cụ GreyNoise Community (2)
  pulsedive/              # Công cụ Pulsedive (3)
  hudsonrock/             # Công cụ nhật ký stealer Hudson Rock (3)
  vulners/                # Công cụ exploit Vulners (3)
  blockchain/             # Công cụ tình báo Blockchain (4)
  hybrid/                 # Công cụ malware Hybrid Analysis (3)
  onionlookup/            # Công cụ CIRCL Onion Lookup (1)
  intelx/                 # Công cụ IntelligenceX (4)
  phishing/               # Công cụ PhishTank (1)
  meta/                   # Công cụ Meta (1)
```

**Quyết định thiết kế:**

- **16 nhà cung cấp, 1 server** &mdash; Mỗi nguồn dữ liệu là một module độc lập. Agent chọn công cụ nào sử dụng dựa trên truy vấn.
- **Bộ giới hạn tốc độ theo nhà cung cấp** &mdash; Mỗi nguồn dữ liệu có instance `RateLimiter` riêng được hiệu chỉnh theo giới hạn của API đó. Không có nút thắt cổ chai chung.
- **TTL caching** &mdash; Dữ liệu ransomware (15 phút), danh sách rò rỉ (10 phút), kết quả abuse.ch (5 phút) được cache để tránh gọi API thừa trong quy trình đa công cụ.
- **Suy giảm uyển chuyển** &mdash; API key thiếu không làm server crash. Công cụ trả về thông báo lỗi mô tả: "Set HIBP_API_KEY to enable breach account search."
- **Ngăn rò rỉ DNS** &mdash; Công cụ Tor .onion sử dụng giao thức `socks5h://` để phân giải DNS qua Tor, ngăn rò rỉ DNS tới resolver cục bộ.
- **4 dependency** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` và `cheerio`. Tất cả HTTP clearnet qua native `fetch`. Tất cả lưu lượng Tor qua SOCKS5.

---

## Hạn chế

- Tìm kiếm tài khoản/paste HIBP yêu cầu API key trả phí ($3.50/tháng)
- IntelligenceX, AbuseIPDB, Hudson Rock và Hybrid Analysis yêu cầu API key cho công cụ của họ
- Công cụ Tor .onion yêu cầu proxy Tor SOCKS5 đang chạy (không đi kèm)
- Tầng miễn phí abuse.ch có giới hạn tốc độ thấp hơn khi không có `ABUSECH_AUTH_KEY`
- Dữ liệu Ransomware.live và RansomLook phụ thuộc vào tần suất thu thập upstream
- Công cụ blockchain chỉ hỗ trợ Bitcoin (không hỗ trợ Ethereum/Monero)
- Cơ sở dữ liệu PhishTank có thể chậm hơn so với các chiến dịch phishing thời gian thực
- Đã test trên macOS / Linux (chưa test trên Windows)

---

## Thuộc Bộ Bảo Mật MCP

| Dự án | Lĩnh vực | Công cụ |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Kiểm thử bảo mật dựa trên trình duyệt | 39 công cụ, Firefox, kiểm thử injection |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Bảo mật đám mây (AWS/Azure/GCP) | 38 công cụ, 60+ kiểm tra |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Bảo mật GitHub | 39 công cụ, 45 kiểm tra |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Tình báo lỗ hổng | 23 công cụ, 5 nguồn |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT và trinh sát | 37 công cụ, 12 nguồn |
| **darknet-mcp-server** | **Dark web và tình báo mối đe dọa** | **66 công cụ, 16 nguồn** |

---

<p align="center">
<b>Chỉ dành cho kiểm thử và đánh giá bảo mật được ủy quyền.</b><br>
Luôn đảm bảo bạn có sự ủy quyền phù hợp trước khi thực hiện thu thập tình báo trên bất kỳ mục tiêu nào.
</p>

<p align="center">
  <a href="LICENSE">Giấy phép MIT</a> &bull; Xây dựng với Bun + TypeScript
</p>
