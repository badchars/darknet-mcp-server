<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <strong>한국어</strong> |
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

<h3 align="center">AI 에이전트를 위한 다크웹 및 위협 인텔리전스.</h3>

<p align="center">
  HIBP, ThreatFox, 랜섬웨어 추적, Tor .onion 접근, 블록체인 인텔리전스, 익스플로잇 검색, 스틸러 로그, 악성코드 분석 &mdash; 단일 MCP 서버로 통합.<br>
  AI 에이전트가 <b>필요할 때 전방위 다크웹 인텔리전스를 즉시 확보</b>합니다. 16개 브라우저 탭과 수동 상관분석은 더 이상 필요 없습니다.
</p>

<br>

<p align="center">
  <a href="#문제점">문제점</a> &bull;
  <a href="#차별점">차별점</a> &bull;
  <a href="#빠른-시작">빠른 시작</a> &bull;
  <a href="#ai가-할-수-있는-것">AI가 할 수 있는 것</a> &bull;
  <a href="#도구-참조66개-도구">도구 (66)</a> &bull;
  <a href="#데이터-소스16개">데이터 소스</a> &bull;
  <a href="#아키텍처">아키텍처</a> &bull;
  <a href="CHANGELOG.md">변경 이력</a> &bull;
  <a href="CONTRIBUTING.md">기여 가이드</a>
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
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server 데모" width="800">
</p>

---

## 문제점

다크웹 인텔리전스는 모든 보안 조사에서 누락된 계층입니다. 유출 데이터베이스, 랜섬웨어 추적기, Tor 히든 서비스, 악성코드 샌드박스, 스틸러 로그, 블록체인 포렌식, 익스플로잇 데이터베이스 &mdash; 필요한 데이터가 수십 개의 플랫폼에 흩어져 있고, 각각 고유한 API, 인증 방식, 속도 제한, 출력 형식을 가지고 있습니다. 현재는 한 탭에서 HIBP를 확인하고, 다른 탭에서 ThreatFox를 확인하고, Tor를 통해 랜섬웨어 유출 사이트를 탐색하고, MalwareBazaar에서 해시를 조회하고, 블록 탐색기에서 블록체인 거래를 확인한 다음, 한 시간 동안 수동으로 모든 것을 종합합니다.

```
기존 다크웹 인텔리전스 워크플로우:
  유출 노출 확인               ->  HIBP 웹 인터페이스 (유료 API)
  유출된 자격증명 검색           ->  IntelligenceX 웹 인터페이스
  랜섬웨어 그룹 추적            ->  ransomware.live + ransomlook.io (2개의 별도 UI)
  .onion 히든 서비스 접근       ->  Tor 브라우저 수동 사용
  악성코드 샘플 분석            ->  Hybrid Analysis + MalwareBazaar (2개 더)
  IP 악용 이력 확인            ->  AbuseIPDB + GreyNoise (2개 더)
  암호화폐 추적               ->  blockchain.info + ChainAbuse
  익스플로잇 검색              ->  Vulners 웹 인터페이스
  피싱 URL 확인              ->  PhishTank 웹 인터페이스
  모든 정보 상관분석            ->  보고서에 복사-붙여넣기
  ────────────────────────────────
  합계: 조사당 60분 이상, 대부분 컨텍스트 전환에 소비
```

**darknet-mcp-server**는 [Model Context Protocol](https://modelcontextprotocol.io)을 통해 AI 에이전트에게 16개 데이터 소스에 걸친 66개 도구를 제공합니다. 에이전트가 모든 소스를 병렬로 쿼리하고, 표면 웹과 다크웹의 데이터를 상관분석하고, 위협을 식별하며, 단일 대화에서 통합된 인텔리전스 전경을 제시합니다.

```
darknet-mcp-server 사용:
  사용자: "target.com의 유출 노출과 위협 현황을 조사해주세요"

  에이전트: -> HIBP: 3건의 알려진 유출 (Adobe 2013, LinkedIn 2021, Collection #1)
           -> ThreatFox: 도메인과 연관된 2개의 IOC (C2 콜백, 피싱)
           -> URLhaus: 서브도메인에 호스팅된 1개의 악성 URL
           -> 랜섬웨어: 피해자 목록 없음 (좋은 소식)
           -> 스틸러 로그: 47개의 유출된 직원 자격증명 발견
           -> OTX: 도메인을 참조하는 5개의 위협 펄스
           -> AbuseIPDB: 기본 IP에 12건의 악용 보고 (무차별 대입)
           -> "target.com은 3건의 데이터 유출에 연루되어 210만 건의
              레코드가 노출되었습니다. 스틸러 로그에서 47개의 직원
              자격증명이 발견되었습니다 — 즉시 비밀번호 재설정을
              권장합니다. 2개의 활성 ThreatFox IOC는 지속적인
              공격을 시사합니다. 랜섬웨어 목록은 없지만 기본 IP의
              악용 보고는 조사가 필요합니다."
```

---

## 차별점

기존 도구는 한 번에 하나의 소스에서 원시 데이터를 제공합니다. darknet-mcp-server는 AI 에이전트에게 **표면 웹과 다크웹 인텔리전스를 동시에 추론**하는 능력을 부여합니다.

<table>
<thead>
<tr>
<th></th>
<th>기존 접근 방식</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>인터페이스</b></td>
<td>16개의 서로 다른 웹 UI, CLI 및 API</td>
<td>MCP &mdash; AI 에이전트가 대화형으로 도구 호출</td>
</tr>
<tr>
<td><b>데이터 소스</b></td>
<td>한 번에 하나의 플랫폼</td>
<td>16개 소스를 병렬로 쿼리</td>
</tr>
<tr>
<td><b>유출 인텔리전스</b></td>
<td>유출에는 HIBP 웹 UI, 누출에는 IntelligenceX</td>
<td>에이전트가 HIBP 유출 + 페이스트 + IntelligenceX + 스틸러 로그를 결합</td>
</tr>
<tr>
<td><b>다크웹 접근</b></td>
<td>수동 Tor 브라우저, .onion 사이트에서 복사-붙여넣기</td>
<td>에이전트가 SOCKS5 프록시를 통해 .onion 사이트를 가져오고, 스크래핑하고, 검색</td>
</tr>
<tr>
<td><b>악성코드 분석</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox를 각각 별도로</td>
<td>에이전트가 교차 참조: "ThreatFox의 이 해시가 Hybrid Analysis에서도 네트워크 IOC와 함께 분석됨"</td>
</tr>
<tr>
<td><b>블록체인</b></td>
<td>블록 탐색기 + ChainAbuse를 각각 별도로</td>
<td>에이전트가 한 단계로 BTC 거래 추적 및 악용 보고 확인</td>
</tr>
<tr>
<td><b>API 키</b></td>
<td>거의 모든 것에 필요</td>
<td>많은 도구가 무료; API 키로 프리미엄 소스 잠금 해제</td>
</tr>
<tr>
<td><b>설정</b></td>
<td>각 도구 설치, 각 설정 관리, Tor 브라우저 실행</td>
<td><code>npx darknet-mcp-server</code> &mdash; 명령 하나, 설정 불필요</td>
</tr>
</tbody>
</table>

---

## 빠른 시작

### 옵션 1: npx (설치 불필요)

```bash
npx darknet-mcp-server
```

무료 도구를 즉시 사용할 수 있습니다. 랜섬웨어 추적, 유출 목록, GreyNoise, 블록체인, OTX 등에 API 키가 필요 없습니다.

### 옵션 2: 클론

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### 환경 변수 (선택사항)

```bash
# 유출 및 자격증명 인텔리전스
export HIBP_API_KEY=your-key           # 유출 계정 검색 및 페이스트 검색 활성화
export INTELX_API_KEY=your-key         # 4개의 IntelligenceX 도구 활성화

# 위협 인텔리전스
export OTX_API_KEY=your-key            # AlienVault OTX 속도 제한 증가
export ABUSEIPDB_API_KEY=your-key      # 4개의 AbuseIPDB 도구 활성화
export ABUSECH_AUTH_KEY=your-key       # abuse.ch 제품군의 속도 제한 증가
export PULSEDIVE_API_KEY=your-key      # Pulsedive 속도 제한 증가

# 스틸러 로그 및 자격증명
export HUDSONROCK_API_KEY=your-key     # 3개의 Hudson Rock 스틸러 로그 도구 활성화

# 익스플로잇 및 악성코드 분석
export VULNERS_API_KEY=your-key        # Vulners 검색 및 익스플로잇 도구 활성화
export HYBRID_API_KEY=your-key         # 3개의 Hybrid Analysis 악성코드 도구 활성화

# 피싱
export PHISHTANK_API_KEY=your-key      # PhishTank 속도 제한 증가

# Tor SOCKS5 프록시 (.onion 접근용)
export TOR_SOCKS_HOST=127.0.0.1       # 기본값: 127.0.0.1
export TOR_SOCKS_PORT=9050            # 기본값: 9050
```

모든 API 키는 선택사항입니다. 키 없이도 랜섬웨어 추적, 유출 목록, GreyNoise, 블록체인 인텔리전스, OTX, Tor 출구 노드 확인, 어니언 검색, CIRCL 어니언 조회 등을 사용할 수 있습니다.

### AI 에이전트에 연결

<details open>
<summary><b>Claude Code</b></summary>

```bash
# npx 사용
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# 로컬 클론 사용
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

`~/Library/Application Support/Claude/claude_desktop_config.json`에 추가:

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
<summary><b>Cursor / Windsurf / 기타 MCP 클라이언트</b></summary>

동일한 JSON 설정 형식입니다. 명령을 `npx darknet-mcp-server` 또는 로컬 설치 경로로 지정하세요.

</details>

### Tor 설정 (선택사항, .onion 접근용)

7개의 Tor 도구(`tor_fetch_onion`, `tor_scrape_onion` 등)는 실행 중인 Tor SOCKS5 프록시가 필요합니다.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# 연결 확인
npx darknet-mcp-server --check-tor
```

### 쿼리 시작

```
사용자: "example.com이 데이터 유출에 포함되었는지 확인하고 스틸러 로그를 찾아주세요"
```

그게 전부입니다. 에이전트가 유출 조회, 자격증명 검색, 위협 상관분석 등을 자동으로 처리합니다.

---

## AI가 할 수 있는 것

### 유출 조사

```
사용자: "example.com이 데이터 유출에 포함되었는지 확인해주세요"

에이전트: -> breachList {domain: "example.com"}
         -> breachSearch {account: "admin@example.com"}
         -> stealer_domain {domain: "example.com"}
         -> intelx_search {term: "example.com"}
         -> "example.com은 5건의 알려진 유출에 나타납니다:
            - ExampleDB 2023: 420만 건의 레코드 (이메일, 비밀번호, IP)
            - Collection #1: 크리덴셜 스터핑 목록
            - Combolist 2024: 89만 개의 이메일:비밀번호 쌍
            스틸러 로그: Hudson Rock 데이터베이스에서 example.com의
            자격증명이 저장된 23대의 감염된 컴퓨터가 발견되었습니다.
            IntelligenceX: 페이스트 사이트와 다크웹에서 47건의 결과."
```

### 랜섬웨어 추적

```
사용자: "어떤 랜섬웨어 그룹이 의료 산업을 타겟으로 하고 있나요?"

에이전트: -> ransomwareBySector {sector: "healthcare"}
         -> ransomwareRecent {}
         -> ransomlookRecent {}
         -> "의료 산업 랜섬웨어 활동:
            지난 12개월간 12개 그룹에 걸쳐 142명의 피해자.
            주요 그룹: LockBit3 (38명), BlackCat/ALPHV (24명),
            Cl0p (19명), Royal (15명).
            최근: MedCorp Inc.가 LockBit3에 의해 등록됨 (2일 전).
            지난 한 주 동안 ransomware.live와 RansomLook 피드에
            3명의 새로운 의료 산업 피해자 발생."
```

### 다크웹 정찰

```
사용자: ".onion 사이트에서 우리 회사에 대한 언급을 검색해주세요"

에이전트: -> tor_search_onion {query: "AcmeCorp"}
         -> intelx_search {term: "acmecorp.com"}
         -> onion_lookup {address: "relevant-onion-address.onion"}
         -> "AcmeCorp 다크웹 검색 결과:
            Ahmia.fi: 3개의 .onion 페이지에서 AcmeCorp 언급
            - 포럼 게시글에서 AcmeCorp 직원 명단 논의 (유출 포럼)
            - 마켓플레이스에 AcmeCorp 데이터베이스 등록 (미확인)
            - 블로그 게시글에서 AcmeCorp 유출 사건 언급
            IntelligenceX: 페이스트 사이트에서 12건의 결과
            권장사항: 포럼 게시글과 마켓플레이스 등록을 조사하여
            활성 데이터 판매 가능성을 확인하세요."
```

### 악성코드 분석

```
사용자: "이 파일 해시의 악성코드 지표를 분석해주세요: abc123def456..."

에이전트: -> malware_search {hash: "abc123def456..."}
         -> malware_overview {sha256: "abc123def456..."}
         -> bazaarHash {hash: "abc123def456..."}
         -> threatfoxSearch {searchTerm: "abc123def456..."}
         -> otx_hash {hash: "abc123def456..."}
         -> "abc123def456 악성코드 분석:
            Hybrid Analysis: 악성 (위협 점수 95/100)
            - 패밀리: AgentTesla (정보 탈취기)
            - MITRE ATT&CK: T1555 (자격증명 접근), T1071 (C2)
            - 네트워크 IOC: 3개의 C2 도메인, 2개의 IP
            MalwareBazaar: 최초 발견 2024-03-15, 'AgentTesla' 태그
            ThreatFox: 동일 캠페인과 연결된 2개의 IOC 항목
            OTX: 4개의 위협 펄스에서 참조됨"
```

---

## 도구 참조 (66개 도구)

<details open>
<summary><b>Tor 네트워크 (7) &mdash; API 키 불필요 (.onion 도구에는 Tor 데몬 필요)</b></summary>

| 도구 | 설명 |
|------|------|
| `tor_status` | 로컬 Tor SOCKS5 프록시 데몬이 실행 중이고 접근 가능한지 확인 |
| `tor_fetch_onion` | Tor SOCKS5 프록시를 통해 .onion URL의 원시 HTML 가져오기 (socks5h를 통한 DNS 유출 방지) |
| `tor_scrape_onion` | .onion 사이트를 가져와 파싱 &mdash; 구조화된 데이터 반환: 제목, 링크, 본문 텍스트 |
| `tor_search_onion` | Ahmia.fi 검색 엔진을 사용하여 .onion 사이트 검색 |
| `tor_exit_nodes` | Tor 프로젝트 공식 대량 출구 목록에서 현재 Tor 출구 노드 IP 주소 가져오기 |
| `tor_exit_check` | 특정 IP 주소가 알려진 Tor 출구 노드인지 확인 |
| `tor_exit_details` | 지문 및 게시 타임스탬프를 포함한 상세한 Tor 출구 노드 정보 가져오기 |

</details>

<details>
<summary><b>랜섬웨어 인텔리전스 (9) &mdash; API 키 불필요</b></summary>

| 도구 | 설명 |
|------|------|
| `ransomwareRecent` | ransomware.live에서 최근 랜섬웨어 피해자 가져오기 |
| `ransomwareGroups` | ransomware.live에서 추적하는 모든 알려진 랜섬웨어 그룹 나열 |
| `ransomwareGroup` | 이름으로 특정 랜섬웨어 그룹의 상세 프로필 가져오기 |
| `ransomwareGroupVictims` | 특정 랜섬웨어 그룹이 주장하는 모든 피해자 가져오기 |
| `ransomwareSearch` | 키워드로 랜섬웨어 피해자 검색 (회사명, 도메인 등) |
| `ransomwareByCountry` | ISO 3166-1 alpha-2 국가 코드로 랜섬웨어 피해자 필터링 |
| `ransomwareBySector` | 산업/분야별 랜섬웨어 피해자 필터링 (의료, 금융 등) |
| `ransomlookGroups` | RansomLook에서 추적하는 582개 이상의 모든 랜섬웨어 그룹 나열 |
| `ransomlookRecent` | RansomLook에서 최근 랜섬웨어 게시글 및 피해자 주장 가져오기 |

</details>

<details>
<summary><b>유출 인텔리전스 &mdash; HIBP (7) &mdash; 부분: 일부 도구 무료, 계정 검색에는 HIBP_API_KEY 필요</b></summary>

| 도구 | 설명 |
|------|------|
| `breachList` | HaveIBeenPwned의 모든 알려진 데이터 유출 나열, 도메인별 필터 가능 &mdash; 무료 |
| `breachGet` | 이름으로 특정 데이터 유출의 상세 정보 가져오기 &mdash; 무료 |
| `breachLatest` | 가장 최근에 추가된 데이터 유출 가져오기 &mdash; 무료 |
| `breachDataClasses` | HIBP에 알려진 모든 데이터 클래스 (유출된 데이터 유형) 나열 &mdash; 무료 |
| `breachPassword` | 비밀번호가 알려진 유출에 나타났는지 확인 (k-익명성, SHA-1 접두사 5자만 전송) &mdash; 무료 |
| `breachSearch` | 특정 계정 (이메일/사용자명)의 모든 유출 검색 &mdash; `HIBP_API_KEY` 필요 |
| `breachPastes` | 공개 게시된 페이스트에서 이메일 주소 검색 &mdash; `HIBP_API_KEY` 필요 |

</details>

<details>
<summary><b>abuse.ch 제품군 (9) &mdash; API 키 불필요 (ABUSECH_AUTH_KEY 선택사항, 속도 제한 증가용)</b></summary>

| 도구 | 설명 |
|------|------|
| `threatfoxGetIocs` | ThreatFox에서 최근 N일 동안 보고된 IOC 가져오기 |
| `threatfoxSearch` | IP, 도메인, 해시 또는 URL로 ThreatFox IOC 검색 |
| `threatfoxTag` | 태그로 ThreatFox IOC 검색 (예: Cobalt Strike, Emotet) |
| `threatfoxMalware` | Malpedia 명명법을 사용하여 악성코드 패밀리별 ThreatFox IOC 검색 |
| `urlhausLookup` | URLhaus에서 악성코드 배포를 위한 URL 또는 호스트 조회 |
| `urlhausTag` | 태그별 URLhaus 항목 검색 |
| `bazaarHash` | MD5, SHA1 또는 SHA256 해시로 MalwareBazaar에서 악성코드 샘플 조회 |
| `bazaarRecent` | MalwareBazaar에서 가장 최근 제출된 악성코드 샘플 가져오기 |
| `bazaarTag` | 태그 또는 YARA 시그니처 이름으로 MalwareBazaar 검색 |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; API 키 불필요 (OTX_API_KEY 선택사항, 속도 제한 증가용)</b></summary>

| 도구 | 설명 |
|------|------|
| `otx_ip` | IP 주소의 위협 인텔리전스 조회 &mdash; 펄스 정보, 평판, 국가, ASN |
| `otx_domain` | 도메인의 위협 인텔리전스 조회 &mdash; 펄스 정보, whois, 평판 |
| `otx_hash` | 파일 해시 (MD5, SHA1, SHA256)의 위협 인텔리전스 조회 |
| `otx_cve` | CVE의 위협 인텔리전스 조회 &mdash; 관련 펄스 및 지표 |
| `otx_search_pulses` | 키워드로 OTX 위협 펄스 검색 |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; ABUSEIPDB_API_KEY 필요</b></summary>

| 도구 | 설명 |
|------|------|
| `abuseipdb_check` | IP 주소의 악용 보고 확인 &mdash; 신뢰도 점수, ISP, 국가, 보고 수 |
| `abuseipdb_reports` | 상세한 코멘트 및 카테고리가 포함된 IP의 개별 악용 보고 가져오기 |
| `abuseipdb_blacklist` | AbuseIPDB에서 가장 많이 보고된 악성 IP 주소 블랙리스트 가져오기 |
| `abuseipdb_check_block` | 전체 CIDR 네트워크 블록의 악용 보고 확인 |

</details>

<details>
<summary><b>GreyNoise 커뮤니티 (2) &mdash; API 키 불필요</b></summary>

| 도구 | 설명 |
|------|------|
| `greynoise_ip` | GreyNoise에서 IP 조회 &mdash; 분류 (양성/악성/미확인), 스캐너 상태 |
| `greynoise_check` | 빠른 확인: 이 IP가 알려진 스캐너인지 알려진 양성 서비스인지? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; API 키 불필요 (PULSEDIVE_API_KEY 선택사항, 속도 제한 증가용)</b></summary>

| 도구 | 설명 |
|------|------|
| `pulsedive_indicator` | 지표 (IP, 도메인, URL 또는 해시) 조회 &mdash; 위험 수준, 위협, 피드 |
| `pulsedive_search` | 값으로 Pulsedive 지표 검색 |
| `pulsedive_explore` | 고급 쿼리를 사용하여 연결된 지표 탐색 (위험 수준이 있는 관련 IOC) |

</details>

<details>
<summary><b>Hudson Rock 스틸러 로그 (3) &mdash; HUDSONROCK_API_KEY 필요</b></summary>

| 도구 | 설명 |
|------|------|
| `stealer_domain` | 도메인별 스틸러 로그 항목 검색 &mdash; 감염된 컴퓨터, 자격증명, 악성코드 세부 정보 |
| `stealer_email` | 이메일 주소별 스틸러 로그 검색 &mdash; 해당 이메일이 브라우저 자격증명에 있는 감염된 컴퓨터 |
| `stealer_ip` | IP 주소별 스틸러 로그 검색 &mdash; 해당 IP에서 발생한 감염된 컴퓨터 |

</details>

<details>
<summary><b>Vulners 익스플로잇 (3) &mdash; API 키 불필요 (VULNERS_API_KEY 선택사항, 검색용)</b></summary>

| 도구 | 설명 |
|------|------|
| `vulners_search` | Lucene 쿼리를 사용하여 Vulners 취약점 데이터베이스 검색 |
| `vulners_id` | ID로 특정 취약점 또는 익스플로잇 조회 (CVE, EDB, GHSA) &mdash; 무료 |
| `vulners_exploit` | 익스플로잇 전용 검색 (ExploitDB 항목) |

</details>

<details>
<summary><b>블록체인 인텔리전스 (4) &mdash; API 키 불필요</b></summary>

| 도구 | 설명 |
|------|------|
| `btc_address` | 비트코인 주소 조회 &mdash; 잔액, 거래 수, 최근 거래 |
| `btc_balance` | 비트코인 주소 잔액을 사토시 단위로 가져오기 (전체 이력 없는 빠른 확인) |
| `btc_tx` | 해시로 상세한 비트코인 거래 정보 가져오기 &mdash; 입력, 출력, 수수료, 블록 정보 |
| `btc_abuse_check` | ChainAbuse에서 비트코인 주소의 악용 보고 확인 &mdash; 카테고리별 사기 보고 |

</details>

<details>
<summary><b>Hybrid Analysis 악성코드 (3) &mdash; HYBRID_API_KEY 필요</b></summary>

| 도구 | 설명 |
|------|------|
| `malware_search` | 파일 해시로 Hybrid Analysis 샌드박스 검색 &mdash; 판정, AV 탐지율, 분석 세부 정보 |
| `malware_overview` | 전체 악성코드 분석 개요 &mdash; MITRE ATT&CK 기법, 네트워크 지표, 프로세스 |
| `malware_feed` | 최신 악성코드 분석 피드 가져오기 &mdash; 최근 분석된 샘플 및 판정 |

</details>

<details>
<summary><b>CIRCL 어니언 조회 (1) &mdash; API 키 불필요</b></summary>

| 도구 | 설명 |
|------|------|
| `onion_lookup` | CIRCL AIL 프로젝트를 통해 .onion 주소의 메타데이터 조회 &mdash; 최초/마지막 발견, 상태, 태그, 인증서, 포트, BTC 주소 |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; INTELX_API_KEY 필요</b></summary>

| 도구 | 설명 |
|------|------|
| `intelx_search` | IntelligenceX에서 유출 데이터, 다크웹 콘텐츠 등의 검색 시작 |
| `intelx_search_results` | ID로 IntelligenceX 검색 결과 가져오기 |
| `intelx_phonebook` | 전화번호부 검색 &mdash; 용어와 관련된 이메일, 도메인, URL 찾기 |
| `intelx_phonebook_results` | ID로 전화번호부 검색 결과 가져오기 |

</details>

<details>
<summary><b>PhishTank (1) &mdash; API 키 불필요 (PHISHTANK_API_KEY 선택사항, 속도 제한 증가용)</b></summary>

| 도구 | 설명 |
|------|------|
| `phishing_check` | PhishTank을 통해 URL이 알려진 피싱 사이트인지 확인 |

</details>

<details>
<summary><b>Meta (1) &mdash; API 키 불필요</b></summary>

| 도구 | 설명 |
|------|------|
| `darknet_list_sources` | 모든 사용 가능한 데이터 소스와 설정 상태, API 키 상태 및 도구 수 나열 |

</details>

---

### CLI 사용법

```bash
# 모든 사용 가능한 도구 나열
npx darknet-mcp-server --list

# Tor SOCKS5 프록시 연결 확인
npx darknet-mcp-server --check-tor

# 도구 직접 실행
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# API 키가 필요한 도구
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## 데이터 소스 (16개)

| 소스 | 인증 | 속도 제한 | 제공 내용 |
|------|------|---------|---------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 요청/1.5초 | 유출 검색, 페이스트 검색, 비밀번호 확인, 유출 목록 |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 요청/초 | 다크웹 콘텐츠, 유출 데이터 검색, 전화번호부 (이메일/도메인/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | 선택사항 | 1 요청/초 | IP, 도메인, 해시, CVE의 위협 인텔리전스; 위협 펄스 검색 |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 요청/초 | IP 악용 보고, 신뢰도 점수, 블랙리스트, CIDR 블록 확인 |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | 선택사항 | 2 요청/초 | IOC 검색, 악성코드 패밀리 추적, 태그 기반 검색 |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | 선택사항 | 2 요청/초 | 악성코드 배포 URL 추적, 호스트/URL 조회 |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | 선택사항 | 2 요청/초 | 악성코드 샘플 저장소, 해시 조회, YARA 시그니처 검색 |
| [GreyNoise](https://www.greynoise.io) | 없음 | 1 요청/초 | IP 분류 (양성/악성), 인터넷 스캐너 탐지 |
| [Pulsedive](https://pulsedive.com) | 선택사항 | 1 요청/초 | 지표 보강, 위험 점수, 연결된 IOC 탐색 |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 요청/초 | 도메인, 이메일 또는 IP별 스틸러 로그 검색 |
| [Vulners](https://vulners.com) | 선택사항 | 1 요청/초 | 취약점/익스플로잇 데이터베이스, CVE 조회, ExploitDB 검색 |
| [Blockchain.info](https://blockchain.info) | 없음 | 1 요청/초 | 비트코인 주소 조회, 잔액, 거래 세부 정보 |
| [ChainAbuse](https://www.chainabuse.com) | 없음 | 1 요청/초 | 비트코인 주소 악용/사기 보고 |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 요청/초 | 악성코드 샌드박스 분석, MITRE ATT&CK 매핑, 샘플 피드 |
| [CIRCL AIL (어니언 조회)](https://onion.ail-project.org) | 없음 | 0.5 요청/초 | .onion 주소 메타데이터, 최초/마지막 발견, 관련 BTC 주소 |
| [Tor 네트워크](https://www.torproject.org) | 없음 | N/A | 출구 노드 목록, .onion 가져오기/스크래핑, Ahmia.fi 검색 |

---

## 아키텍처

```
src/
  index.ts                # CLI 진입점 (--help, --list, --check-tor, stdio 서버)
  protocol/
    mcp-server.ts         # MCP 서버 설정 (stdio 전송)
    tools.ts              # 도구 레지스트리 — 모든 66개 도구가 여기서 조립
  types/
    index.ts              # 공유 타입 (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # 공급자별 속도 제한기
    cache.ts              # API 응답용 TTL 캐시
    tor-fetch.ts          # Tor SOCKS5 프록시 HTTP 클라이언트
    require-key.ts        # API 키 검증 헬퍼
  tor/                    # Tor 네트워크 도구 (7)
  ransomware/             # 랜섬웨어 인텔리전스 도구 (9)
  breach/                 # HIBP 유출 도구 (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar 도구 (9)
  otx/                    # AlienVault OTX 도구 (5)
  abuseipdb/              # AbuseIPDB 도구 (4)
  greynoise/              # GreyNoise 커뮤니티 도구 (2)
  pulsedive/              # Pulsedive 도구 (3)
  hudsonrock/             # Hudson Rock 스틸러 로그 도구 (3)
  vulners/                # Vulners 익스플로잇 도구 (3)
  blockchain/             # 블록체인 인텔리전스 도구 (4)
  hybrid/                 # Hybrid Analysis 악성코드 도구 (3)
  onionlookup/            # CIRCL 어니언 조회 도구 (1)
  intelx/                 # IntelligenceX 도구 (4)
  phishing/               # PhishTank 도구 (1)
  meta/                   # Meta 도구 (1)
```

**설계 결정:**

- **16개 공급자, 1개 서버** &mdash; 각 데이터 소스는 독립 모듈입니다. 에이전트가 쿼리에 따라 사용할 도구를 선택합니다.
- **공급자별 속도 제한기** &mdash; 각 데이터 소스에 해당 API의 제한에 맞게 조정된 자체 `RateLimiter` 인스턴스가 있습니다. 공유 병목 없음.
- **TTL 캐싱** &mdash; 랜섬웨어 데이터 (15분), 유출 목록 (10분), abuse.ch (5분) 결과가 캐시되어 다중 도구 워크플로우에서의 불필요한 API 호출을 방지합니다.
- **우아한 성능 저하** &mdash; API 키가 없어도 서버가 충돌하지 않습니다. 도구가 설명적인 오류 메시지를 반환합니다: "HIBP_API_KEY를 설정하여 유출 계정 검색을 활성화하세요."
- **DNS 유출 방지** &mdash; Tor .onion 도구가 `socks5h://` 프로토콜을 사용하여 Tor를 통해 DNS를 해석하므로 로컬 리졸버로의 DNS 유출을 방지합니다.
- **4개의 의존성** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent`, `cheerio`. 모든 클리어넷 HTTP는 네이티브 `fetch`. 모든 Tor 트래픽은 SOCKS5.

---

## 제한사항

- HIBP 계정/페이스트 검색에는 유료 API 키 필요 ($3.50/월)
- IntelligenceX, AbuseIPDB, Hudson Rock, Hybrid Analysis 도구에는 API 키 필요
- Tor .onion 도구에는 실행 중인 Tor SOCKS5 프록시 필요 (번들 미포함)
- `ABUSECH_AUTH_KEY` 없이 abuse.ch 무료 티어의 속도 제한이 낮음
- Ransomware.live 및 RansomLook 데이터는 업스트림 스크래핑 빈도에 의존
- 블록체인 도구는 비트코인만 지원 (이더리움/모네로 미지원)
- PhishTank 데이터베이스가 실시간 피싱 캠페인보다 뒤처질 수 있음
- macOS / Linux에서 테스트됨 (Windows 미테스트)

---

## MCP 보안 제품군의 일부

| 프로젝트 | 도메인 | 도구 |
|---------|--------|------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | 브라우저 기반 보안 테스트 | 39개 도구, Firefox, 인젝션 테스트 |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | 클라우드 보안 (AWS/Azure/GCP) | 38개 도구, 60+ 검사 |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub 보안 태세 | 39개 도구, 45 검사 |
| [cve-mcp](https://github.com/badchars/cve-mcp) | 취약점 인텔리전스 | 23개 도구, 5개 소스 |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT 및 정찰 | 37개 도구, 12개 소스 |
| **darknet-mcp-server** | **다크웹 및 위협 인텔리전스** | **66개 도구, 16개 소스** |

---

<p align="center">
<b>인가된 보안 테스트 및 평가 목적으로만 사용하십시오.</b><br>
모든 대상에 대해 인텔리전스 수집을 수행하기 전에 항상 적절한 인가를 확보하십시오.
</p>

<p align="center">
  <a href="LICENSE">MIT 라이선스</a> &bull; Bun + TypeScript로 빌드
</p>
