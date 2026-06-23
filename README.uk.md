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
  <strong>Українська</strong> |
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

<h3 align="center">Розвідка даркнету та аналіз загроз для ШІ-агентів.</h3>

<p align="center">
  HIBP, ThreatFox, відстеження програм-вимагачів, доступ до Tor .onion, блокчейн-розвідка, пошук експлойтів, логи стілерів, аналіз шкідливого ПЗ &mdash; об'єднані в єдиний MCP-сервер.<br>
  Ваш ШІ-агент отримує <b>повний спектр розвідки даркнету на вимогу</b>, а не 16 вкладок браузера та ручну кореляцію.
</p>

<br>

<p align="center">
  <a href="#проблема">Проблема</a> &bull;
  <a href="#чим-це-відрізняється">Чим це відрізняється</a> &bull;
  <a href="#швидкий-старт">Швидкий старт</a> &bull;
  <a href="#що-може-шІ">Що може ШІ</a> &bull;
  <a href="#довідник-інструментів-66-інструментів">Інструменти (66)</a> &bull;
  <a href="#джерела-даних-16">Джерела даних</a> &bull;
  <a href="#архітектура">Архітектура</a> &bull;
  <a href="CHANGELOG.md">Журнал змін</a> &bull;
  <a href="CONTRIBUTING.md">Участь у розробці</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Ліцензія"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 інструментів">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 джерел">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="Демо darknet-mcp-server" width="800">
</p>

---

## Проблема

Розвідка даркнету — це відсутній шар у кожному розслідуванні безпеки. Бази даних витоків, трекери програм-вимагачів, приховані сервіси Tor, пісочниці для аналізу шкідливого ПЗ, логи стілерів, блокчейн-форензика, бази експлойтів &mdash; потрібні дані розкидані по десятках платформ, кожна зі своїм API, автентифікацією, обмеженнями частоти запитів та форматом виводу. Сьогодні ви перевіряєте HIBP в одній вкладці, ThreatFox в іншій, переглядаєте сайти витоків програм-вимагачів через Tor, шукаєте хеш у MalwareBazaar, перевіряєте транзакції блокчейну в оглядачі блоків, а потім витрачаєте годину на ручне зведення всього разом.

```
Традиційний робочий процес розвідки даркнету:
  перевірка витоків даних              ->  Веб-інтерфейс HIBP (платний API)
  пошук викрадених облікових даних     ->  Веб-інтерфейс IntelligenceX
  відстеження груп вимагачів           ->  ransomware.live + ransomlook.io (2 окремих інтерфейси)
  доступ до прихованих .onion сервісів ->  Tor Browser вручну
  аналіз зразків шкідливого ПЗ        ->  Hybrid Analysis + MalwareBazaar (ще 2 інтерфейси)
  перевірка історії зловживань IP      ->  AbuseIPDB + GreyNoise (ще 2 інтерфейси)
  відстеження криптовалюти             ->  blockchain.info + ChainAbuse
  пошук експлойтів                     ->  Веб-інтерфейс Vulners
  перевірка фішингових URL             ->  Веб-інтерфейс PhishTank
  кореляція всього                     ->  копіювання-вставка у звіт
  ────────────────────────────────
  Разом: 60+ хвилин на розслідування, більшість часу — перемикання контексту
```

**darknet-mcp-server** надає вашому ШІ-агенту 66 інструментів з 16 джерел даних через [Model Context Protocol](https://modelcontextprotocol.io). Агент паралельно запитує всі джерела, корелює дані з поверхневого та темного вебу, ідентифікує загрози та представляє єдину розвідувальну картину &mdash; в одній розмові.

```
З darknet-mcp-server:
  Ви: "Дослідіть витоки даних та ландшафт загроз для target.com"

  Агент: -> HIBP: 3 відомих витоки (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOC, пов'язаних з доменом (зворотний виклик C2, фішинг)
         -> URLhaus: 1 шкідливий URL на піддомені
         -> Програми-вимагачі: Записів про жертв не знайдено (добре)
         -> Логи стілерів: знайдено 47 скомпрометованих облікових записів співробітників
         -> OTX: 5 розвідувальних пульсів, що згадують домен
         -> AbuseIPDB: Основний IP має 12 скарг на зловживання (брутфорс)
         -> "target.com був у 3 витоках даних з розкриттям 2,1М записів.
            47 облікових записів співробітників знайдено в логах стілерів —
            рекомендується негайне скидання паролів. 2 активних IOC ThreatFox
            свідчать про поточне таргетування. Записів про програми-вимагачі
            немає, але скарги на зловживання основним IP потребують розслідування."
```

---

## Чим це відрізняється

Існуючі інструменти надають вам необроблені дані з одного джерела за раз. darknet-mcp-server дає вашому ШІ-агенту можливість **одночасно аналізувати розвідку з поверхневого та темного вебу**.

<table>
<thead>
<tr>
<th></th>
<th>Традиційний підхід</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Інтерфейс</b></td>
<td>16 різних веб-інтерфейсів, CLI та API</td>
<td>MCP &mdash; ШІ-агент викликає інструменти в розмові</td>
</tr>
<tr>
<td><b>Джерела даних</b></td>
<td>Одна платформа за раз</td>
<td>16 джерел запитуються паралельно</td>
</tr>
<tr>
<td><b>Розвідка витоків</b></td>
<td>Веб-інтерфейс HIBP для витоків, IntelligenceX для витоків даних</td>
<td>Агент поєднує витоки HIBP + вставки + IntelligenceX + логи стілерів</td>
</tr>
<tr>
<td><b>Доступ до даркнету</b></td>
<td>Ручний Tor Browser, копіювання-вставка з .onion сайтів</td>
<td>Агент отримує, парсить та шукає .onion сайти через SOCKS5 проксі</td>
</tr>
<tr>
<td><b>Аналіз шкідливого ПЗ</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox окремо</td>
<td>Агент перехресно перевіряє: "Цей хеш з ThreatFox також був проаналізований у Hybrid Analysis з мережевими IOC"</td>
</tr>
<tr>
<td><b>Блокчейн</b></td>
<td>Оглядач блоків + ChainAbuse окремо</td>
<td>Агент відстежує BTC-транзакції та перевіряє звіти про зловживання за один крок</td>
</tr>
<tr>
<td><b>API-ключі</b></td>
<td>Потрібні майже для всього</td>
<td>Багато інструментів працюють безкоштовно; API-ключі відкривають преміум-джерела</td>
</tr>
<tr>
<td><b>Налаштування</b></td>
<td>Встановити кожен інструмент, налаштувати кожну конфігурацію, запустити Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; одна команда, нульова конфігурація</td>
</tr>
</tbody>
</table>

---

## Швидкий старт

### Варіант 1: npx (без встановлення)

```bash
npx darknet-mcp-server
```

Безкоштовні інструменти працюють одразу. API-ключі не потрібні для відстеження програм-вимагачів, списків витоків, GreyNoise, блокчейну, OTX та іншого.

### Варіант 2: Клонування

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Змінні середовища (необов'язково)

```bash
# Розвідка витоків та облікових даних
export HIBP_API_KEY=your-key           # Вмикає пошук облікових записів у витоках та пошук у вставках
export INTELX_API_KEY=your-key         # Вмикає 4 інструменти IntelligenceX

# Розвідка загроз
export OTX_API_KEY=your-key            # Збільшує обмеження частоти запитів AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Вмикає 4 інструменти AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Вищі обмеження частоти для набору abuse.ch
export PULSEDIVE_API_KEY=your-key      # Вищі обмеження частоти для Pulsedive

# Логи стілерів та облікові дані
export HUDSONROCK_API_KEY=your-key     # Вмикає 3 інструменти логів стілерів Hudson Rock

# Аналіз експлойтів та шкідливого ПЗ
export VULNERS_API_KEY=your-key        # Вмикає пошук та інструменти експлойтів Vulners
export HYBRID_API_KEY=your-key         # Вмикає 3 інструменти аналізу шкідливого ПЗ Hybrid Analysis

# Фішинг
export PHISHTANK_API_KEY=your-key      # Вищі обмеження частоти для PhishTank

# Tor SOCKS5 проксі (для доступу до .onion)
export TOR_SOCKS_HOST=127.0.0.1       # За замовчуванням: 127.0.0.1
export TOR_SOCKS_PORT=9050            # За замовчуванням: 9050
```

Усі API-ключі необов'язкові. Без них ви все ще отримуєте відстеження програм-вимагачів, списки витоків, GreyNoise, блокчейн-розвідку, OTX, перевірку вихідних вузлів Tor, пошук onion, CIRCL onion lookup та інше.

### Підключення до вашого ШІ-агента

<details open>
<summary><b>Claude Code</b></summary>

```bash
# З npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# З локальним клоном
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Додайте до `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / інші MCP-клієнти</b></summary>

Той самий формат JSON-конфігурації. Вкажіть команду на `npx darknet-mcp-server` або шлях до вашої локальної установки.

</details>

### Налаштування Tor (необов'язково, для доступу до .onion)

7 інструментів Tor (`tor_fetch_onion`, `tor_scrape_onion` тощо) потребують запущеного Tor SOCKS5 проксі.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Перевірка з'єднання
npx darknet-mcp-server --check-tor
```

### Почніть запити

```
Ви: "Перевірте, чи був example.com у витоках даних, та знайдіть логи стілерів"
```

Це все. Агент автоматично виконує пошук витоків, пошук облікових даних, кореляцію загроз та інше.

---

## Що може ШІ

### Розслідування витоків

```
Ви: "Перевірте, чи був example.com у будь-яких витоках даних"

Агент: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com з'являється у 5 відомих витоках:
          - ExampleDB 2023: 4,2М записів (електронні адреси, паролі, IP)
          - Collection #1: список для credential stuffing
          - Combolist 2024: 890К пар email:пароль
          Логи стілерів: 23 скомпрометовані машини зі збереженими
          обліковими даними для example.com знайдено в базі Hudson Rock.
          IntelligenceX: 47 результатів на paste-сайтах та в даркнеті."
```

### Відстеження програм-вимагачів

```
Ви: "Які групи вимагачів атакують сектор охорони здоров'я?"

Агент: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Активність програм-вимагачів у секторі охорони здоров'я:
          142 жертви серед 12 груп за останні 12 місяців.
          Топ-групи: LockBit3 (38 жертв), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Остання: MedCorp Inc. внесена LockBit3 (2 дні тому).
          3 нових жертви у секторі охорони здоров'я за останній тиждень
          у стрічках ransomware.live та RansomLook."
```

### Розвідка даркнету

```
Ви: "Шукайте згадки нашої компанії на .onion сайтах"

Агент: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Результати пошуку в даркнеті для AcmeCorp:
          Ahmia.fi: 3 .onion сторінки згадують AcmeCorp
          - Пост на форумі з обговоренням списку співробітників AcmeCorp (форум витоків)
          - Лот на маркетплейсі з базою даних AcmeCorp (неперевірений)
          - Блог-пост з посиланням на витік AcmeCorp
          IntelligenceX: 12 результатів на paste-сайтах
          Рекомендація: дослідити пост на форумі та лот на маркетплейсі
          на предмет можливого активного продажу даних."
```

### Аналіз шкідливого ПЗ

```
Ви: "Проаналізуйте цей хеш файлу на індикатори шкідливого ПЗ: abc123def456..."

Агент: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Аналіз шкідливого ПЗ для abc123def456:
          Hybrid Analysis: ШКІДЛИВИЙ (оцінка загрози 95/100)
          - Сімейство: AgentTesla (стілер інформації)
          - MITRE ATT&CK: T1555 (Доступ до облікових даних), T1071 (C2)
          - Мережеві IOC: 3 C2-домени, 2 IP
          MalwareBazaar: Вперше виявлено 2024-03-15, тег 'AgentTesla'
          ThreatFox: 2 записи IOC, що пов'язують з тією ж кампанією
          OTX: Згадується у 4 розвідувальних пульсах"
```

---

## Довідник інструментів (66 інструментів)

<details open>
<summary><b>Мережа Tor (7) &mdash; API-ключ не потрібен (для .onion інструментів потрібен демон Tor)</b></summary>

| Інструмент | Опис |
|------|-------------|
| `tor_status` | Перевірити, чи працює та доступний локальний Tor SOCKS5 проксі-демон |
| `tor_fetch_onion` | Отримати необроблений HTML з .onion URL через Tor SOCKS5 проксі (запобігання DNS-витоку через socks5h) |
| `tor_scrape_onion` | Отримати та розпарсити .onion сайт &mdash; повертає структуровані дані: заголовок, посилання, текст |
| `tor_search_onion` | Шукати .onion сайти за допомогою пошукового двигуна Ahmia.fi |
| `tor_exit_nodes` | Отримати поточні IP-адреси вихідних вузлів Tor з офіційного списку Tor Project |
| `tor_exit_check` | Перевірити, чи є конкретна IP-адреса відомим вихідним вузлом Tor |
| `tor_exit_details` | Отримати детальну інформацію про вихідний вузол Tor, включаючи відбитки та часові мітки публікації |

</details>

<details>
<summary><b>Розвідка програм-вимагачів (9) &mdash; API-ключ не потрібен</b></summary>

| Інструмент | Опис |
|------|-------------|
| `ransomwareRecent` | Отримати найновіших жертв програм-вимагачів з ransomware.live |
| `ransomwareGroups` | Список усіх відомих груп програм-вимагачів, що відстежуються ransomware.live |
| `ransomwareGroup` | Отримати детальний профіль конкретної групи програм-вимагачів за назвою |
| `ransomwareGroupVictims` | Отримати всіх жертв, заявлених конкретною групою програм-вимагачів |
| `ransomwareSearch` | Шукати жертв програм-вимагачів за ключовим словом (назва компанії, домен тощо) |
| `ransomwareByCountry` | Отримати жертв програм-вимагачів, відфільтрованих за кодом країни ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Отримати жертв програм-вимагачів, відфільтрованих за сектором/галуззю (охорона здоров'я, фінанси тощо) |
| `ransomlookGroups` | Список усіх 582+ груп програм-вимагачів, що відстежуються RansomLook |
| `ransomlookRecent` | Отримати найновіші пости та заяви про жертв програм-вимагачів з RansomLook |

</details>

<details>
<summary><b>Розвідка витоків &mdash; HIBP (7) &mdash; Частково: деякі інструменти безкоштовні, пошук облікових записів потребує HIBP_API_KEY</b></summary>

| Інструмент | Опис |
|------|-------------|
| `breachList` | Список усіх відомих витоків даних з HaveIBeenPwned, з можливістю фільтрації за доменом &mdash; безкоштовно |
| `breachGet` | Отримати деталі конкретного витоку даних за назвою &mdash; безкоштовно |
| `breachLatest` | Отримати останній доданий витік даних &mdash; безкоштовно |
| `breachDataClasses` | Список усіх класів даних (типів скомпрометованих даних), відомих HIBP &mdash; безкоштовно |
| `breachPassword` | Перевірити, чи з'являвся пароль у відомих витоках (k-анонімність, надсилається лише 5-символьний SHA-1 префікс) &mdash; безкоштовно |
| `breachSearch` | Шукати у всіх витоках конкретний обліковий запис (email/ім'я користувача) &mdash; потребує `HIBP_API_KEY` |
| `breachPastes` | Шукати email-адресу у публічно розміщених вставках &mdash; потребує `HIBP_API_KEY` |

</details>

<details>
<summary><b>Набір abuse.ch (9) &mdash; API-ключ не потрібен (ABUSECH_AUTH_KEY необов'язковий для вищої частоти)</b></summary>

| Інструмент | Опис |
|------|-------------|
| `threatfoxGetIocs` | Отримати нещодавні IOC з ThreatFox, повідомлені за останні N днів |
| `threatfoxSearch` | Шукати IOC ThreatFox за IP, доменом, хешем або URL |
| `threatfoxTag` | Шукати IOC ThreatFox за тегом (наприклад, Cobalt Strike, Emotet) |
| `threatfoxMalware` | Шукати IOC ThreatFox за сімейством шкідливого ПЗ, використовуючи номенклатуру Malpedia |
| `urlhausLookup` | Шукати URL або хост у URLhaus для виявлення розповсюдження шкідливого ПЗ |
| `urlhausTag` | Шукати записи URLhaus за тегом |
| `bazaarHash` | Шукати зразок шкідливого ПЗ у MalwareBazaar за хешем MD5, SHA1 або SHA256 |
| `bazaarRecent` | Отримати найновіші подані зразки шкідливого ПЗ з MalwareBazaar |
| `bazaarTag` | Шукати MalwareBazaar за тегом або назвою YARA-сигнатури |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; API-ключ не потрібен (OTX_API_KEY необов'язковий для вищої частоти)</b></summary>

| Інструмент | Опис |
|------|-------------|
| `otx_ip` | Пошук розвідки загроз для IP-адреси &mdash; інформація про пульси, репутація, країна, ASN |
| `otx_domain` | Пошук розвідки загроз для домену &mdash; інформація про пульси, whois, репутація |
| `otx_hash` | Пошук розвідки загроз для хешу файлу (MD5, SHA1, SHA256) |
| `otx_cve` | Пошук розвідки загроз для CVE &mdash; пов'язані пульси та індикатори |
| `otx_search_pulses` | Шукати пульси загроз OTX за ключовим словом |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Потребує ABUSEIPDB_API_KEY</b></summary>

| Інструмент | Опис |
|------|-------------|
| `abuseipdb_check` | Перевірити IP-адресу на скарги про зловживання &mdash; оцінка впевненості, провайдер, країна, кількість скарг |
| `abuseipdb_reports` | Отримати індивідуальні скарги про зловживання для IP з детальними коментарями та категоріями |
| `abuseipdb_blacklist` | Отримати чорний список AbuseIPDB найбільш повідомлених шкідливих IP-адрес |
| `abuseipdb_check_block` | Перевірити цілий мережевий блок CIDR на скарги про зловживання |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; API-ключ не потрібен</b></summary>

| Інструмент | Опис |
|------|-------------|
| `greynoise_ip` | Пошук IP у GreyNoise &mdash; класифікація (доброякісний/шкідливий/невідомий), статус сканера |
| `greynoise_check` | Швидка перевірка: чи є цей IP відомим сканером або відомим легітимним сервісом? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; API-ключ не потрібен (PULSEDIVE_API_KEY необов'язковий для вищої частоти)</b></summary>

| Інструмент | Опис |
|------|-------------|
| `pulsedive_indicator` | Пошук індикатора (IP, домен, URL або хеш) &mdash; рівень ризику, загрози, канали |
| `pulsedive_search` | Шукати індикатори Pulsedive за значенням |
| `pulsedive_explore` | Дослідження пов'язаних індикаторів за допомогою розширених запитів (пов'язані IOC з рівнями ризику) |

</details>

<details>
<summary><b>Логи стілерів Hudson Rock (3) &mdash; Потребує HUDSONROCK_API_KEY</b></summary>

| Інструмент | Опис |
|------|-------------|
| `stealer_domain` | Шукати записи логів стілерів за доменом &mdash; скомпрометовані машини, облікові дані, деталі шкідливого ПЗ |
| `stealer_email` | Шукати логи стілерів за email-адресою &mdash; скомпрометовані машини з цим email у збережених обліковках браузера |
| `stealer_ip` | Шукати логи стілерів за IP-адресою &mdash; скомпрометовані машини, що походять з цього IP |

</details>

<details>
<summary><b>Експлойти Vulners (3) &mdash; API-ключ не потрібен (VULNERS_API_KEY необов'язковий для пошуку)</b></summary>

| Інструмент | Опис |
|------|-------------|
| `vulners_search` | Шукати у базі вразливостей Vulners за допомогою запитів Lucene |
| `vulners_id` | Пошук конкретної вразливості або експлойту за ID (CVE, EDB, GHSA) &mdash; безкоштовно |
| `vulners_exploit` | Шукати конкретно експлойти (записи ExploitDB) |

</details>

<details>
<summary><b>Блокчейн-розвідка (4) &mdash; API-ключ не потрібен</b></summary>

| Інструмент | Опис |
|------|-------------|
| `btc_address` | Пошук Bitcoin-адреси &mdash; баланс, кількість транзакцій, нещодавні транзакції |
| `btc_balance` | Отримати баланс Bitcoin-адреси в сатоші (швидка перевірка без повної історії) |
| `btc_tx` | Отримати детальну інформацію про Bitcoin-транзакцію за хешем &mdash; входи, виходи, комісії, інформація про блок |
| `btc_abuse_check` | Перевірити Bitcoin-адресу на скарги про зловживання на ChainAbuse &mdash; звіти про шахрайство з категоріями |

</details>

<details>
<summary><b>Аналіз шкідливого ПЗ Hybrid Analysis (3) &mdash; Потребує HYBRID_API_KEY</b></summary>

| Інструмент | Опис |
|------|-------------|
| `malware_search` | Шукати в пісочниці Hybrid Analysis за хешем файлу &mdash; вердикт, рівень виявлення AV, деталі аналізу |
| `malware_overview` | Повний огляд аналізу шкідливого ПЗ &mdash; техніки MITRE ATT&CK, мережеві індикатори, процеси |
| `malware_feed` | Отримати останню стрічку детонації шкідливого ПЗ &mdash; нещодавно проаналізовані зразки з вердиктами |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; API-ключ не потрібен</b></summary>

| Інструмент | Опис |
|------|-------------|
| `onion_lookup` | Пошук метаданих для .onion адреси через проєкт CIRCL AIL &mdash; перше/останнє виявлення, статус, теги, сертифікати, порти, BTC-адреси |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Потребує INTELX_API_KEY</b></summary>

| Інструмент | Опис |
|------|-------------|
| `intelx_search` | Ініціювати пошук у IntelligenceX витоків даних, контенту даркнету та іншого |
| `intelx_search_results` | Отримати результати пошуку IntelligenceX за ID |
| `intelx_phonebook` | Пошук у телефонній книзі &mdash; знайти email-адреси, домени, URL, пов'язані з терміном |
| `intelx_phonebook_results` | Отримати результати пошуку телефонної книги за ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; API-ключ не потрібен (PHISHTANK_API_KEY необов'язковий для вищої частоти)</b></summary>

| Інструмент | Опис |
|------|-------------|
| `phishing_check` | Перевірити, чи є URL відомим фішинговим сайтом через PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; API-ключ не потрібен</b></summary>

| Інструмент | Опис |
|------|-------------|
| `darknet_list_sources` | Список усіх доступних джерел даних зі статусом конфігурації, статусом API-ключів та кількістю інструментів |

</details>

---

### Використання CLI

```bash
# Список усіх доступних інструментів
npx darknet-mcp-server --list

# Перевірка з'єднання з Tor SOCKS5 проксі
npx darknet-mcp-server --check-tor

# Запуск будь-якого інструменту безпосередньо
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Інструменти, що потребують API-ключів
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Джерела даних (16)

| Джерело | Автентифікація | Обмеження частоти | Що надає |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 запит/1,5с | Пошук витоків, пошук вставок, перевірка паролів, списки витоків |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 запит/с | Контент даркнету, пошук витоків даних, телефонна книга (email/домени/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | Необов'язково | 1 запит/с | Розвідка загроз для IP, доменів, хешів, CVE; пошук пульсів загроз |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 запит/с | Звіти про зловживання IP, оцінка впевненості, чорний список, перевірка CIDR-блоків |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Необов'язково | 2 запити/с | Пошук IOC, відстеження сімейств шкідливого ПЗ, пошук за тегами |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Необов'язково | 2 запити/с | Відстеження URL розповсюдження шкідливого ПЗ, пошук хоста/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Необов'язково | 2 запити/с | Репозиторій зразків шкідливого ПЗ, пошук за хешем, пошук YARA-сигнатур |
| [GreyNoise](https://www.greynoise.io) | Не потрібна | 1 запит/с | Класифікація IP (доброякісний/шкідливий), виявлення інтернет-сканерів |
| [Pulsedive](https://pulsedive.com) | Необов'язково | 1 запит/с | Збагачення індикаторів, оцінка ризику, дослідження пов'язаних IOC |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 запит/с | Пошук логів стілерів за доменом, email або IP |
| [Vulners](https://vulners.com) | Необов'язково | 1 запит/с | База вразливостей/експлойтів, пошук CVE, пошук ExploitDB |
| [Blockchain.info](https://blockchain.info) | Не потрібна | 1 запит/с | Пошук Bitcoin-адрес, баланс, деталі транзакцій |
| [ChainAbuse](https://www.chainabuse.com) | Не потрібна | 1 запит/с | Звіти про зловживання/шахрайство Bitcoin-адрес |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 запит/с | Детонація шкідливого ПЗ в пісочниці, відображення MITRE ATT&CK, стрічка зразків |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Не потрібна | 0,5 запиту/с | Метадані .onion адрес, перше/останнє виявлення, пов'язані BTC-адреси |
| [Tor Network](https://www.torproject.org) | Не потрібна | Н/Д | Список вихідних вузлів, отримання/парсинг .onion, пошук Ahmia.fi |

---

## Архітектура

```
src/
  index.ts                # Точка входу CLI (--help, --list, --check-tor, stdio-сервер)
  protocol/
    mcp-server.ts         # Налаштування MCP-сервера (stdio-транспорт)
    tools.ts              # Реєстр інструментів — усі 66 інструментів зібрані тут
  types/
    index.ts              # Спільні типи (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Обмежувач частоти запитів для кожного провайдера
    cache.ts              # TTL-кеш для відповідей API
    tor-fetch.ts          # HTTP-клієнт Tor SOCKS5 проксі
    require-key.ts        # Допоміжна функція перевірки API-ключів
  tor/                    # Інструменти мережі Tor (7)
  ransomware/             # Інструменти розвідки програм-вимагачів (9)
  breach/                 # Інструменти витоків HIBP (7)
  abusech/                # Інструменти ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Інструменти AlienVault OTX (5)
  abuseipdb/              # Інструменти AbuseIPDB (4)
  greynoise/              # Інструменти GreyNoise Community (2)
  pulsedive/              # Інструменти Pulsedive (3)
  hudsonrock/             # Інструменти логів стілерів Hudson Rock (3)
  vulners/                # Інструменти експлойтів Vulners (3)
  blockchain/             # Інструменти блокчейн-розвідки (4)
  hybrid/                 # Інструменти аналізу шкідливого ПЗ Hybrid Analysis (3)
  onionlookup/            # Інструмент CIRCL Onion Lookup (1)
  intelx/                 # Інструменти IntelligenceX (4)
  phishing/               # Інструмент PhishTank (1)
  meta/                   # Мета-інструменти (1)
```

**Проєктні рішення:**

- **16 провайдерів, 1 сервер** &mdash; Кожне джерело даних є незалежним модулем. Агент обирає, які інструменти використовувати, на основі запиту.
- **Обмежувачі частоти для кожного провайдера** &mdash; Кожне джерело даних має власний екземпляр `RateLimiter`, налаштований під обмеження його API. Жодного спільного вузького місця.
- **TTL-кешування** &mdash; Дані програм-вимагачів (15 хв), списки витоків (10 хв), результати abuse.ch (5 хв) кешуються для уникнення зайвих API-запитів під час багатоінструментних робочих процесів.
- **Граціозна деградація** &mdash; Відсутні API-ключі не обвалюють сервер. Інструменти повертають описові повідомлення про помилки: "Set HIBP_API_KEY to enable breach account search."
- **Запобігання DNS-витоку** &mdash; Tor .onion інструменти використовують протокол `socks5h://` для розв'язання DNS через Tor, запобігаючи DNS-витокам до локального резолвера.
- **4 залежності** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` та `cheerio`. Весь clearnet HTTP через нативний `fetch`. Весь Tor-трафік через SOCKS5.

---

## Обмеження

- Пошук облікових записів/вставок HIBP потребує платний API-ключ ($3,50/місяць)
- IntelligenceX, AbuseIPDB, Hudson Rock та Hybrid Analysis потребують API-ключі для своїх інструментів
- Tor .onion інструменти потребують запущений Tor SOCKS5 проксі (не включений)
- Безкоштовний рівень abuse.ch має нижчі обмеження частоти без `ABUSECH_AUTH_KEY`
- Дані Ransomware.live та RansomLook залежать від частоти вищестоящого збору
- Блокчейн-інструменти підтримують лише Bitcoin (без Ethereum/Monero)
- База PhishTank може відставати від фішингових кампаній у реальному часі
- Протестовано на macOS / Linux (Windows не тестувалося)

---

## Частина набору безпеки MCP

| Проєкт | Домен | Інструменти |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Тестування безпеки на основі браузера | 39 інструментів, Firefox, тестування ін'єкцій |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Хмарна безпека (AWS/Azure/GCP) | 38 інструментів, 60+ перевірок |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Безпека GitHub | 39 інструментів, 45 перевірок |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Розвідка вразливостей | 23 інструменти, 5 джерел |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT та розвідка | 37 інструментів, 12 джерел |
| **darknet-mcp-server** | **Розвідка даркнету та аналіз загроз** | **66 інструментів, 16 джерел** |

---

<p align="center">
<b>Лише для авторизованого тестування та оцінки безпеки.</b><br>
Завжди переконуйтесь, що маєте належний дозвіл перед проведенням розвідки щодо будь-якої цілі.
</p>

<p align="center">
  <a href="LICENSE">Ліцензія MIT</a> &bull; Створено з Bun + TypeScript
</p>
