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
  <strong>日本語</strong> |
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

<h3 align="center">AIエージェント向けダークウェブ＆脅威インテリジェンス。</h3>

<p align="center">
  HIBP、ThreatFox、ランサムウェア追跡、Tor .onionアクセス、ブロックチェーンインテリジェンス、エクスプロイト検索、スティーラーログ、マルウェア分析 &mdash; 単一のMCPサーバーに統合。<br>
  あなたのAIエージェントは、16個のブラウザタブと手動の相関分析ではなく、<b>オンデマンドのフルスペクトラム・ダークウェブインテリジェンス</b>を取得できます。
</p>

<br>

<p align="center">
  <a href="#問題点">問題点</a> &bull;
  <a href="#何が違うのか">何が違うのか</a> &bull;
  <a href="#クイックスタート">クイックスタート</a> &bull;
  <a href="#aiにできること">AIにできること</a> &bull;
  <a href="#ツールリファレンス66ツール">ツール（66）</a> &bull;
  <a href="#データソース16">データソース</a> &bull;
  <a href="#アーキテクチャ">アーキテクチャ</a> &bull;
  <a href="CHANGELOG.md">変更履歴</a> &bull;
  <a href="CONTRIBUTING.md">貢献</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="ライセンス"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66ツール">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16ソース">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server デモ" width="800">
</p>

---

## 問題点

ダークウェブインテリジェンスは、あらゆるセキュリティ調査で欠落しているレイヤーです。侵害データベース、ランサムウェアトラッカー、Tor隠しサービス、マルウェアサンドボックス、スティーラーログ、ブロックチェーンフォレンジック、エクスプロイトデータベース &mdash; 必要なデータは数十のプラットフォームに散在しており、それぞれ独自のAPI、独自の認証、独自のレート制限、独自の出力形式を持っています。今日では、1つのタブでHIBPを確認し、別のタブでThreatFoxを確認し、Tor経由でランサムウェアリークサイトを閲覧し、MalwareBazaarでハッシュを検索し、ブロックエクスプローラーでブロックチェーントランザクションを確認し、その後1時間かけてすべてを手動でつなぎ合わせています。

```
従来のダークウェブインテリジェンスワークフロー:
  侵害露出を確認                     ->  HIBP ウェブインターフェース（有料API）
  漏洩した認証情報を検索              ->  IntelligenceX ウェブインターフェース
  ランサムウェアグループを追跡         ->  ransomware.live + ransomlook.io（2つの別々のUI）
  .onion隠しサービスにアクセス         ->  Tor Browser を手動で
  マルウェアサンプルを分析             ->  Hybrid Analysis + MalwareBazaar（さらに2つのUI）
  IP悪用履歴を確認                    ->  AbuseIPDB + GreyNoise（さらに2つのUI）
  暗号通貨を追跡                      ->  blockchain.info + ChainAbuse
  エクスプロイトを検索                 ->  Vulners ウェブインターフェース
  フィッシングURLを確認               ->  PhishTank ウェブインターフェース
  すべてを相関分析                    ->  レポートにコピー＆ペースト
  ────────────────────────────────
  合計: 調査あたり60分以上、そのほとんどがコンテキスト切り替え
```

**darknet-mcp-server** は、[Model Context Protocol](https://modelcontextprotocol.io)を通じて、16のデータソースにまたがる66のツールをAIエージェントに提供します。エージェントはすべてのソースを並行して照会し、サーフェスウェブとダークウェブにわたるデータを相関分析し、脅威を特定し、統合されたインテリジェンス全体像を提示します &mdash; 単一の会話で。

```
darknet-mcp-serverの場合:
  あなた: "target.comの侵害露出と脅威ランドスケープを調査してください"

  エージェント: -> HIBP: 3件の既知の侵害 (Adobe 2013, LinkedIn 2021, Collection #1)
               -> ThreatFox: ドメインに関連する2件のIOC (C2コールバック、フィッシング)
               -> URLhaus: サブドメインでホストされている1件の悪意のあるURL
               -> ランサムウェア: 被害者リストは見つかりませんでした（良好）
               -> スティーラーログ: 47件の漏洩した従業員認証情報が見つかりました
               -> OTX: ドメインを参照する5件の脅威パルス
               -> AbuseIPDB: プライマリIPに12件の悪用レポート（ブルートフォース）
               -> "target.comは210万件のレコードが露出した3件のデータ侵害を受けて
                  います。スティーラーログで47件の従業員認証情報が見つかりました —
                  即座のパスワードリセットを推奨します。2件のアクティブな
                  ThreatFox IOCは継続的な標的化を示唆しています。ランサムウェア
                  リストはありませんが、プライマリIPの悪用レポートは調査が必要です。"
```

---

## 何が違うのか

既存のツールは一度に1つのソースから生データを提供します。darknet-mcp-serverはAIエージェントに**サーフェスウェブとダークウェブのインテリジェンスを同時に推論する**能力を与えます。

<table>
<thead>
<tr>
<th></th>
<th>従来のアプローチ</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>インターフェース</b></td>
<td>16の異なるウェブUI、CLI、API</td>
<td>MCP &mdash; AIエージェントが会話的にツールを呼び出します</td>
</tr>
<tr>
<td><b>データソース</b></td>
<td>一度に1つのプラットフォーム</td>
<td>16のソースを並行して照会</td>
</tr>
<tr>
<td><b>侵害インテリジェンス</b></td>
<td>侵害用のHIBP ウェブUI、リーク用のIntelligenceX</td>
<td>エージェントがHIBP侵害 + ペースト + IntelligenceX + スティーラーログを統合</td>
</tr>
<tr>
<td><b>ダークウェブアクセス</b></td>
<td>手動のTor Browser、.onionサイトからのコピー＆ペースト</td>
<td>エージェントがSOCKS5プロキシ経由で.onionサイトを取得、スクレイピング、検索</td>
</tr>
<tr>
<td><b>マルウェア分析</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFoxを個別に</td>
<td>エージェントがクロスリファレンス: "ThreatFoxのこのハッシュはHybrid Analysisでもネットワーク IOCとともにデトネーションされました"</td>
</tr>
<tr>
<td><b>ブロックチェーン</b></td>
<td>ブロックエクスプローラー + ChainAbuseを個別に</td>
<td>エージェントが1ステップでBTCトランザクションを追跡し悪用レポートを確認</td>
</tr>
<tr>
<td><b>APIキー</b></td>
<td>ほぼすべてに必要</td>
<td>多くのツールが無料で動作。APIキーでプレミアムソースを解放</td>
</tr>
<tr>
<td><b>セットアップ</b></td>
<td>各ツールのインストール、各設定の管理、Tor Browserの起動</td>
<td><code>npx darknet-mcp-server</code> &mdash; 1コマンド、設定不要</td>
</tr>
</tbody>
</table>

---

## クイックスタート

### オプション1: npx（インストール不要）

```bash
npx darknet-mcp-server
```

無料ツールがすぐに動作します。ランサムウェア追跡、侵害リスト、GreyNoise、ブロックチェーン、OTXなどにAPIキーは不要です。

### オプション2: クローン

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### 環境変数（オプション）

```bash
# 侵害＆認証情報インテリジェンス
export HIBP_API_KEY=your-key           # 侵害アカウント検索とペースト検索を有効化
export INTELX_API_KEY=your-key         # 4つのIntelligenceXツールを有効化

# 脅威インテリジェンス
export OTX_API_KEY=your-key            # AlienVault OTXのレート制限を引き上げ
export ABUSEIPDB_API_KEY=your-key      # 4つのAbuseIPDBツールを有効化
export ABUSECH_AUTH_KEY=your-key       # abuse.chスイートのレート制限を引き上げ
export PULSEDIVE_API_KEY=your-key      # Pulsediveのレート制限を引き上げ

# スティーラーログ＆認証情報
export HUDSONROCK_API_KEY=your-key     # 3つのHudson Rockスティーラーログツールを有効化

# エクスプロイト＆マルウェア分析
export VULNERS_API_KEY=your-key        # Vulners検索＆エクスプロイトツールを有効化
export HYBRID_API_KEY=your-key         # 3つのHybrid Analysisマルウェアツールを有効化

# フィッシング
export PHISHTANK_API_KEY=your-key      # PhishTankのレート制限を引き上げ

# Tor SOCKS5プロキシ（.onionアクセス用）
export TOR_SOCKS_HOST=127.0.0.1       # デフォルト: 127.0.0.1
export TOR_SOCKS_PORT=9050            # デフォルト: 9050
```

すべてのAPIキーはオプションです。キーがなくても、ランサムウェア追跡、侵害リスト、GreyNoise、ブロックチェーンインテリジェンス、OTX、Tor出口ノードチェック、オニオン検索、CIRCLオニオンルックアップなどが利用できます。

### AIエージェントに接続

<details open>
<summary><b>Claude Code</b></summary>

```bash
# npxの場合
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# ローカルクローンの場合
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

`~/Library/Application Support/Claude/claude_desktop_config.json` に追加:

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
<summary><b>Cursor / Windsurf / その他のMCPクライアント</b></summary>

同じJSON設定形式です。コマンドを `npx darknet-mcp-server` またはローカルインストールパスに指定してください。

</details>

### Torセットアップ（オプション、.onionアクセス用）

7つのTorツール（`tor_fetch_onion`、`tor_scrape_onion` など）には、実行中のTor SOCKS5プロキシが必要です。

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# 接続性を確認
npx darknet-mcp-server --check-tor
```

### 照会を開始

```
あなた: "example.comがデータ侵害に遭っていないか確認し、スティーラーログを検索してください"
```

以上です。エージェントが侵害検索、認証情報検索、脅威の相関分析などを自動的に処理します。

---

## AIにできること

### 侵害調査

```
あなた: "example.comがデータ侵害に遭っていないか確認してください"

エージェント: -> breachList {domain: "example.com"}
             -> breachSearch {account: "admin@example.com"}
             -> stealer_domain {domain: "example.com"}
             -> intelx_search {term: "example.com"}
             -> "example.comは5件の既知の侵害に含まれています:
                - ExampleDB 2023: 420万件のレコード（メール、パスワード、IP）
                - Collection #1: クレデンシャルスタッフィングリスト
                - Combolist 2024: 89万件のメール:パスワードペア
                スティーラーログ: example.comの保存された認証情報を持つ
                23台の侵害されたマシンがHudson Rockデータベースで見つかりました。
                IntelligenceX: ペーストサイトとダークウェブで47件の結果。"
```

### ランサムウェア追跡

```
あなた: "どのランサムウェアグループがヘルスケアを標的にしていますか？"

エージェント: -> ransomwareBySector {sector: "healthcare"}
             -> ransomwareRecent {}
             -> ransomlookRecent {}
             -> "ヘルスケアセクターのランサムウェア活動:
                過去12ヶ月間で12グループにわたる142件の被害者。
                トップグループ: LockBit3（38件の被害者）、BlackCat/ALPHV（24件）、
                Cl0p（19件）、Royal（15件）。
                最新: MedCorp Inc.がLockBit3にリストされました（2日前）。
                先週、ransomware.liveとRansomLookフィードで
                3件の新しいヘルスケア被害者。"
```

### ダークウェブ偵察

```
あなた: ".onionサイトで当社への言及を検索してください"

エージェント: -> tor_search_onion {query: "AcmeCorp"}
             -> intelx_search {term: "acmecorp.com"}
             -> onion_lookup {address: "relevant-onion-address.onion"}
             -> "AcmeCorpのダークウェブ検索結果:
                Ahmia.fi: 3つの.onionページがAcmeCorpに言及
                - AcmeCorp従業員リストを議論するフォーラム投稿（リークフォーラム）
                - AcmeCorpデータベースのマーケットプレイスリスティング（未確認）
                - AcmeCorp侵害を参照するブログ投稿
                IntelligenceX: ペーストサイトで12件の結果
                推奨: 潜在的なアクティブなデータ販売について
                フォーラム投稿とマーケットプレイスリスティングを調査してください。"
```

### マルウェア分析

```
あなた: "このファイルハッシュのマルウェアインジケーターを分析してください: abc123def456..."

エージェント: -> malware_search {hash: "abc123def456..."}
             -> malware_overview {sha256: "abc123def456..."}
             -> bazaarHash {hash: "abc123def456..."}
             -> threatfoxSearch {searchTerm: "abc123def456..."}
             -> otx_hash {hash: "abc123def456..."}
             -> "abc123def456のマルウェア分析:
                Hybrid Analysis: 悪意あり（脅威スコア95/100）
                - ファミリー: AgentTesla（情報窃取型）
                - MITRE ATT&CK: T1555（認証情報アクセス）、T1071（C2）
                - ネットワークIOC: 3つのC2ドメイン、2つのIP
                MalwareBazaar: 2024-03-15に初めて確認、'AgentTesla'タグ付き
                ThreatFox: 同じキャンペーンにリンクされた2件のIOCエントリ
                OTX: 4件の脅威パルスで参照"
```

---

## ツールリファレンス（66ツール）

<details open>
<summary><b>Torネットワーク (7) &mdash; APIキー不要（.onionツールにはTorデーモンが必要）</b></summary>

| ツール | 説明 |
|--------|------|
| `tor_status` | ローカルTor SOCKS5プロキシデーモンが実行中でアクセス可能か確認 |
| `tor_fetch_onion` | Tor SOCKS5プロキシ経由で.onion URLから生HTMLを取得（socks5h経由のDNSリーク防止） |
| `tor_scrape_onion` | .onionサイトを取得・解析 &mdash; 構造化データを返す: タイトル、リンク、本文テキスト |
| `tor_search_onion` | Ahmia.fi検索エンジンを使用して.onionサイトを検索 |
| `tor_exit_nodes` | Tor Project公式バルク出口リストから現在のTor出口ノードIPアドレスを取得 |
| `tor_exit_check` | 特定のIPアドレスが既知のTor出口ノードかどうかを確認 |
| `tor_exit_details` | フィンガープリントと公開タイムスタンプを含む詳細なTor出口ノード情報を取得 |

</details>

<details>
<summary><b>ランサムウェアインテリジェンス (9) &mdash; APIキー不要</b></summary>

| ツール | 説明 |
|--------|------|
| `ransomwareRecent` | ransomware.liveから最新のランサムウェア被害者を取得 |
| `ransomwareGroups` | ransomware.liveで追跡されている既知のランサムウェアグループをすべてリスト |
| `ransomwareGroup` | 名前で特定のランサムウェアグループの詳細プロファイルを取得 |
| `ransomwareGroupVictims` | 特定のランサムウェアグループが主張するすべての被害者を取得 |
| `ransomwareSearch` | キーワード（企業名、ドメインなど）でランサムウェア被害者を検索 |
| `ransomwareByCountry` | ISO 3166-1 alpha-2国コードでフィルターされたランサムウェア被害者を取得 |
| `ransomwareBySector` | セクター/業界（ヘルスケア、金融など）でフィルターされたランサムウェア被害者を取得 |
| `ransomlookGroups` | RansomLookで追跡されている582以上のランサムウェアグループをすべてリスト |
| `ransomlookRecent` | RansomLookから最新のランサムウェア投稿と被害者の主張を取得 |

</details>

<details>
<summary><b>侵害インテリジェンス &mdash; HIBP (7) &mdash; 部分的: 一部のツールは無料、アカウント検索にはHIBP_API_KEYが必要</b></summary>

| ツール | 説明 |
|--------|------|
| `breachList` | HaveIBeenPwnedからすべての既知のデータ侵害をリスト、オプションでドメインフィルター &mdash; 無料 |
| `breachGet` | 名前で特定のデータ侵害の詳細を取得 &mdash; 無料 |
| `breachLatest` | 最新に追加されたデータ侵害を取得 &mdash; 無料 |
| `breachDataClasses` | HIBPが認識しているすべてのデータクラス（漏洩データの種類）をリスト &mdash; 無料 |
| `breachPassword` | パスワードが既知の侵害に含まれているか確認（k-anonymity、SHA-1プレフィックス5文字のみ送信） &mdash; 無料 |
| `breachSearch` | 特定のアカウント（メール/ユーザー名）のすべての侵害を検索 &mdash; `HIBP_API_KEY` が必要 |
| `breachPastes` | 公開されたペーストでメールアドレスを検索 &mdash; `HIBP_API_KEY` が必要 |

</details>

<details>
<summary><b>abuse.chスイート (9) &mdash; APIキー不要（ABUSECH_AUTH_KEYはオプションでレート向上）</b></summary>

| ツール | 説明 |
|--------|------|
| `threatfoxGetIocs` | 過去N日間に報告されたThreatFoxの最新IOCを取得 |
| `threatfoxSearch` | IP、ドメイン、ハッシュ、またはURLでThreatFox IOCを検索 |
| `threatfoxTag` | タグ（例: Cobalt Strike、Emotet）でThreatFox IOCを検索 |
| `threatfoxMalware` | Malpedia命名規則を使用してマルウェアファミリーでThreatFox IOCを検索 |
| `urlhausLookup` | URLhausでURLまたはホストをマルウェア配布用に検索 |
| `urlhausTag` | タグでURLhausエントリを検索 |
| `bazaarHash` | MD5、SHA1、またはSHA256ハッシュでMalwareBazaarのマルウェアサンプルを検索 |
| `bazaarRecent` | MalwareBazaarから最近送信されたマルウェアサンプルを取得 |
| `bazaarTag` | タグまたはYARAシグネチャ名でMalwareBazaarを検索 |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; APIキー不要（OTX_API_KEYはオプションでレート向上）</b></summary>

| ツール | 説明 |
|--------|------|
| `otx_ip` | IPアドレスの脅威インテリジェンスを検索 &mdash; パルス情報、レピュテーション、国、ASN |
| `otx_domain` | ドメインの脅威インテリジェンスを検索 &mdash; パルス情報、whois、レピュテーション |
| `otx_hash` | ファイルハッシュ（MD5、SHA1、SHA256）の脅威インテリジェンスを検索 |
| `otx_cve` | CVEの脅威インテリジェンスを検索 &mdash; 関連パルスとインジケーター |
| `otx_search_pulses` | キーワードでOTX脅威パルスを検索 |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; ABUSEIPDB_API_KEYが必要</b></summary>

| ツール | 説明 |
|--------|------|
| `abuseipdb_check` | IPアドレスの悪用レポートを確認 &mdash; 信頼度スコア、ISP、国、レポート数 |
| `abuseipdb_reports` | 詳細なコメントとカテゴリを含むIPの個別悪用レポートを取得 |
| `abuseipdb_blacklist` | AbuseIPDBの最も報告された悪意のあるIPアドレスのブラックリストを取得 |
| `abuseipdb_check_block` | CIDRネットワークブロック全体の悪用レポートを確認 |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; APIキー不要</b></summary>

| ツール | 説明 |
|--------|------|
| `greynoise_ip` | GreyNoiseでIPを検索 &mdash; 分類（良性/悪意/不明）、スキャナーステータス |
| `greynoise_check` | クイックチェック: このIPは既知のスキャナーまたは既知の良性サービスか？ |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; APIキー不要（PULSEDIVE_API_KEYはオプションでレート向上）</b></summary>

| ツール | 説明 |
|--------|------|
| `pulsedive_indicator` | インジケーター（IP、ドメイン、URL、またはハッシュ）を検索 &mdash; リスクレベル、脅威、フィード |
| `pulsedive_search` | 値でPulsediveインジケーターを検索 |
| `pulsedive_explore` | 高度なクエリを使用してリンクされたインジケーターを探索（リスクレベル付き関連IOC） |

</details>

<details>
<summary><b>Hudson Rockスティーラーログ (3) &mdash; HUDSONROCK_API_KEYが必要</b></summary>

| ツール | 説明 |
|--------|------|
| `stealer_domain` | ドメインでスティーラーログエントリを検索 &mdash; 侵害されたマシン、認証情報、マルウェア詳細 |
| `stealer_email` | メールアドレスでスティーラーログを検索 &mdash; ブラウザ認証情報にそのメールがある侵害されたマシン |
| `stealer_ip` | IPアドレスでスティーラーログを検索 &mdash; そのIPを発信元とする侵害されたマシン |

</details>

<details>
<summary><b>Vulnersエクスプロイト (3) &mdash; APIキー不要（VULNERS_API_KEYはオプションで検索用）</b></summary>

| ツール | 説明 |
|--------|------|
| `vulners_search` | Luceneクエリを使用してVulners脆弱性データベースを検索 |
| `vulners_id` | ID（CVE、EDB、GHSA）で特定の脆弱性またはエクスプロイトを検索 &mdash; 無料 |
| `vulners_exploit` | エクスプロイト（ExploitDBエントリ）を特定的に検索 |

</details>

<details>
<summary><b>ブロックチェーンインテリジェンス (4) &mdash; APIキー不要</b></summary>

| ツール | 説明 |
|--------|------|
| `btc_address` | Bitcoinアドレスを検索 &mdash; 残高、トランザクション数、最近のトランザクション |
| `btc_balance` | Bitcoinアドレスの残高をsatoshiで取得（完全な履歴なしのクイックチェック） |
| `btc_tx` | ハッシュで詳細なBitcoinトランザクション情報を取得 &mdash; 入力、出力、手数料、ブロック情報 |
| `btc_abuse_check` | ChainAbuseでBitcoinアドレスの悪用レポートを確認 &mdash; カテゴリ付き詐欺レポート |

</details>

<details>
<summary><b>Hybrid Analysisマルウェア (3) &mdash; HYBRID_API_KEYが必要</b></summary>

| ツール | 説明 |
|--------|------|
| `malware_search` | ファイルハッシュでHybrid Analysisサンドボックスを検索 &mdash; 判定、AV検出率、分析詳細 |
| `malware_overview` | 完全なマルウェア分析概要 &mdash; MITRE ATT&CKテクニック、ネットワークインジケーター、プロセス |
| `malware_feed` | 最新のマルウェアデトネーションフィードを取得 &mdash; 判定付き最近分析されたサンプル |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; APIキー不要</b></summary>

| ツール | 説明 |
|--------|------|
| `onion_lookup` | CIRCL AILプロジェクト経由で.onionアドレスのメタデータを検索 &mdash; 初回/最終確認日、ステータス、タグ、証明書、ポート、BTCアドレス |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; INTELX_API_KEYが必要</b></summary>

| ツール | 説明 |
|--------|------|
| `intelx_search` | IntelligenceXで漏洩データ、ダークウェブコンテンツなどの検索を開始 |
| `intelx_search_results` | IDでIntelligenceX検索の結果を取得 |
| `intelx_phonebook` | フォンブック検索 &mdash; 用語に関連するメール、ドメイン、URLを検索 |
| `intelx_phonebook_results` | IDでフォンブック検索結果を取得 |

</details>

<details>
<summary><b>PhishTank (1) &mdash; APIキー不要（PHISHTANK_API_KEYはオプションでレート向上）</b></summary>

| ツール | 説明 |
|--------|------|
| `phishing_check` | PhishTank経由でURLが既知のフィッシングサイトかどうかを確認 |

</details>

<details>
<summary><b>Meta (1) &mdash; APIキー不要</b></summary>

| ツール | 説明 |
|--------|------|
| `darknet_list_sources` | 設定ステータス、APIキーステータス、ツール数を含むすべての利用可能なデータソースをリスト |

</details>

---

### CLI使用方法

```bash
# すべての利用可能なツールをリスト
npx darknet-mcp-server --list

# Tor SOCKS5プロキシ接続を確認
npx darknet-mcp-server --check-tor

# 任意のツールを直接実行
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# APIキーが必要なツール
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## データソース（16）

| ソース | 認証 | レート制限 | 提供するもの |
|--------|------|-----------|-------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | 侵害検索、ペースト検索、パスワードチェック、侵害リスト |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | ダークウェブコンテンツ、漏洩データ検索、フォンブック（メール/ドメイン/URL） |
| [AlienVault OTX](https://otx.alienvault.com) | オプション | 1 req/s | IP、ドメイン、ハッシュ、CVEの脅威インテリジェンス；脅威パルス検索 |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | IP悪用レポート、信頼度スコアリング、ブラックリスト、CIDRブロックチェック |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | オプション | 2 req/s | IOC検索、マルウェアファミリー追跡、タグベース検索 |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | オプション | 2 req/s | マルウェア配布URL追跡、ホスト/URL検索 |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | オプション | 2 req/s | マルウェアサンプルリポジトリ、ハッシュ検索、YARAシグネチャ検索 |
| [GreyNoise](https://www.greynoise.io) | なし | 1 req/s | IP分類（良性/悪意）、インターネットスキャナー検出 |
| [Pulsedive](https://pulsedive.com) | オプション | 1 req/s | インジケーターエンリッチメント、リスクスコアリング、リンクされたIOC探索 |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | ドメイン、メール、またはIPによるスティーラーログ検索 |
| [Vulners](https://vulners.com) | オプション | 1 req/s | 脆弱性/エクスプロイトデータベース、CVE検索、ExploitDB検索 |
| [Blockchain.info](https://blockchain.info) | なし | 1 req/s | Bitcoinアドレス検索、残高、トランザクション詳細 |
| [ChainAbuse](https://www.chainabuse.com) | なし | 1 req/s | Bitcoinアドレスの悪用/詐欺レポート |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | マルウェアサンドボックスデトネーション、MITRE ATT&CKマッピング、サンプルフィード |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | なし | 0.5 req/s | .onionアドレスメタデータ、初回/最終確認日、関連BTCアドレス |
| [Tor Network](https://www.torproject.org) | なし | N/A | 出口ノードリスト、.onion取得/スクレイピング、Ahmia.fi検索 |

---

## アーキテクチャ

```
src/
  index.ts                # CLIエントリーポイント (--help, --list, --check-tor, stdioサーバー)
  protocol/
    mcp-server.ts         # MCPサーバーセットアップ (stdioトランスポート)
    tools.ts              # ツールレジストリ — 全66ツールをここで組み立て
  types/
    index.ts              # 共有型 (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # プロバイダーごとのレートリミッター
    cache.ts              # APIレスポンスのTTLキャッシュ
    tor-fetch.ts          # Tor SOCKS5プロキシHTTPクライアント
    require-key.ts        # APIキーバリデーションヘルパー
  tor/                    # Torネットワークツール (7)
  ransomware/             # ランサムウェアインテリジェンスツール (9)
  breach/                 # HIBP侵害ツール (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaarツール (9)
  otx/                    # AlienVault OTXツール (5)
  abuseipdb/              # AbuseIPDBツール (4)
  greynoise/              # GreyNoise Communityツール (2)
  pulsedive/              # Pulsediveツール (3)
  hudsonrock/             # Hudson Rockスティーラーログツール (3)
  vulners/                # Vulnersエクスプロイトツール (3)
  blockchain/             # ブロックチェーンインテリジェンスツール (4)
  hybrid/                 # Hybrid Analysisマルウェアツール (3)
  onionlookup/            # CIRCL Onion Lookupツール (1)
  intelx/                 # IntelligenceXツール (4)
  phishing/               # PhishTankツール (1)
  meta/                   # Metaツール (1)
```

**設計上の決定:**

- **16プロバイダー、1サーバー** &mdash; 各データソースは独立したモジュールです。エージェントがクエリに基づいて使用するツールを選択します。
- **プロバイダーごとのレートリミッター** &mdash; 各データソースは、そのAPIの制限に合わせて調整された独自の `RateLimiter` インスタンスを持ちます。共有ボトルネックはありません。
- **TTLキャッシュ** &mdash; ランサムウェアデータ（15分）、侵害リスト（10分）、abuse.ch結果（5分）がキャッシュされ、マルチツールワークフロー中の冗長なAPI呼び出しを回避します。
- **グレースフルデグラデーション** &mdash; APIキーが欠落してもサーバーはクラッシュしません。ツールは説明的なエラーメッセージを返します: "侵害アカウント検索を有効にするにはHIBP_API_KEYを設定してください。"
- **DNSリーク防止** &mdash; Tor .onionツールは `socks5h://` プロトコルを使用してTor経由でDNSを解決し、ローカルリゾルバーへのDNSリークを防止します。
- **4つの依存関係** &mdash; `@modelcontextprotocol/sdk`、`zod`、`socks-proxy-agent`、`cheerio`。すべてのクリアネットHTTPはネイティブ `fetch` 経由。すべてのTorトラフィックはSOCKS5経由。

---

## 制限事項

- HIBPアカウント/ペースト検索には有料APIキーが必要（$3.50/月）
- IntelligenceX、AbuseIPDB、Hudson Rock、Hybrid AnalysisはそれぞれのツールにAPIキーが必要
- Tor .onionツールには実行中のTor SOCKS5プロキシが必要（バンドルされていません）
- abuse.chの無料ティアは `ABUSECH_AUTH_KEY` なしではレート制限が低い
- Ransomware.liveとRansomLookのデータはアップストリームのスクレイピング頻度に依存
- ブロックチェーンツールはBitcoinのみサポート（Ethereum/Moneroなし）
- PhishTankデータベースはリアルタイムのフィッシングキャンペーンに遅れる場合があります
- macOS / Linuxでテスト済み（Windowsは未テスト）

---

## MCPセキュリティスイートの一部

| プロジェクト | ドメイン | ツール |
|------------|---------|--------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | ブラウザベースのセキュリティテスト | 39ツール、Firefox、インジェクションテスト |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | クラウドセキュリティ (AWS/Azure/GCP) | 38ツール、60以上のチェック |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHubセキュリティ態勢 | 39ツール、45チェック |
| [cve-mcp](https://github.com/badchars/cve-mcp) | 脆弱性インテリジェンス | 23ツール、5ソース |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT＆偵察 | 37ツール、12ソース |
| **darknet-mcp-server** | **ダークウェブ＆脅威インテリジェンス** | **66ツール、16ソース** |

---

<p align="center">
<b>許可されたセキュリティテストおよび評価のみを目的としています。</b><br>
任意のターゲットに対してインテリジェンス収集を行う前に、必ず適切な許可を得てください。
</p>

<p align="center">
  <a href="LICENSE">MITライセンス</a> &bull; Bun + TypeScriptで構築
</p>
