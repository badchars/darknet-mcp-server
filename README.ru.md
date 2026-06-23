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
  <strong>Русский</strong> |
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

<h3 align="center">Разведка даркнета и угроз для AI-агентов.</h3>

<p align="center">
  HIBP, ThreatFox, отслеживание программ-вымогателей, доступ к Tor .onion, блокчейн-разведка, поиск эксплойтов, логи стилеров, анализ вредоносного ПО &mdash; объединены в единый MCP-сервер.<br>
  Ваш AI-агент получает <b>полный спектр разведки даркнета по запросу</b>, а не 16 вкладок браузера и ручную корреляцию.
</p>

<br>

<p align="center">
  <a href="#проблема">Проблема</a> &bull;
  <a href="#чем-отличается">Чем Отличается</a> &bull;
  <a href="#быстрый-старт">Быстрый Старт</a> &bull;
  <a href="#что-может-ai">Что Может AI</a> &bull;
  <a href="#справочник-инструментов-66-инструментов">Инструменты (66)</a> &bull;
  <a href="#источники-данных-16">Источники Данных</a> &bull;
  <a href="#архитектура">Архитектура</a> &bull;
  <a href="CHANGELOG.md">Журнал изменений</a> &bull;
  <a href="CONTRIBUTING.md">Участие</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Лицензия"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Инструментов">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Источников">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server демо" width="800">
</p>

---

## Проблема

Разведка даркнета — это недостающий слой в каждом расследовании безопасности. Базы данных утечек, трекеры программ-вымогателей, скрытые сервисы Tor, песочницы для вредоносного ПО, логи стилеров, блокчейн-криминалистика, базы данных эксплойтов &mdash; нужные вам данные разбросаны по десяткам платформ, каждая со своим API, своей аутентификацией, своими ограничениями по частоте запросов, своим форматом вывода. Сегодня вы проверяете HIBP в одной вкладке, ThreatFox в другой, просматриваете сайты утечек программ-вымогателей через Tor, ищете хеш в MalwareBazaar, проверяете транзакции блокчейна в обозревателе блоков, а затем тратите час на ручное сопоставление всего этого.

```
Традиционный рабочий процесс разведки даркнета:
  проверка подверженности утечкам      ->  веб-интерфейс HIBP (платный API)
  поиск утекших учётных данных         ->  веб-интерфейс IntelligenceX
  отслеживание групп вымогателей       ->  ransomware.live + ransomlook.io (2 отдельных интерфейса)
  доступ к скрытым сервисам .onion     ->  Tor Browser вручную
  анализ образцов вредоносного ПО      ->  Hybrid Analysis + MalwareBazaar (ещё 2 интерфейса)
  проверка истории злоупотреблений IP  ->  AbuseIPDB + GreyNoise (ещё 2 интерфейса)
  отслеживание криптовалюты            ->  blockchain.info + ChainAbuse
  поиск эксплойтов                     ->  веб-интерфейс Vulners
  проверка фишинговых URL              ->  веб-интерфейс PhishTank
  корреляция всего                     ->  копирование-вставка в отчёт
  ────────────────────────────────
  Итого: 60+ минут на расследование, большая часть потрачена на переключение контекста
```

**darknet-mcp-server** предоставляет вашему AI-агенту 66 инструментов из 16 источников данных через [Model Context Protocol](https://modelcontextprotocol.io). Агент запрашивает все источники параллельно, коррелирует данные из открытого и тёмного интернета, идентифицирует угрозы и представляет единую разведывательную картину &mdash; в одном разговоре.

```
С darknet-mcp-server:
  Вы: "Исследуй подверженность утечкам и ландшафт угроз для target.com"

  Агент: -> HIBP: 3 известные утечки (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOC, связанных с доменом (обратный вызов C2, фишинг)
         -> URLhaus: 1 вредоносный URL, размещённый на поддомене
         -> Программы-вымогатели: жертвы не найдены (хорошо)
         -> Логи стилеров: найдено 47 скомпрометированных учётных записей сотрудников
         -> OTX: 5 импульсов угроз, ссылающихся на домен
         -> AbuseIPDB: основной IP имеет 12 сообщений о злоупотреблениях (brute force)
         -> "target.com фигурирует в 3 утечках данных с раскрытием 2,1M записей.
            47 учётных записей сотрудников найдены в логах стилеров — рекомендуется
            немедленный сброс паролей. 2 активных IOC ThreatFox предполагают
            продолжающееся нацеливание. Нет списков вымогателей, но сообщения
            о злоупотреблениях на основном IP требуют расследования."
```

---

## Чем Отличается

Существующие инструменты дают вам необработанные данные по одному источнику за раз. darknet-mcp-server даёт вашему AI-агенту возможность **одновременно анализировать разведданные из открытого и тёмного интернета**.

<table>
<thead>
<tr>
<th></th>
<th>Традиционный Подход</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Интерфейс</b></td>
<td>16 различных веб-интерфейсов, CLI и API</td>
<td>MCP &mdash; AI-агент вызывает инструменты в диалоговом режиме</td>
</tr>
<tr>
<td><b>Источники данных</b></td>
<td>Одна платформа за раз</td>
<td>16 источников запрашиваются параллельно</td>
</tr>
<tr>
<td><b>Разведка утечек</b></td>
<td>Веб-интерфейс HIBP для утечек, IntelligenceX для слитых данных</td>
<td>Агент объединяет утечки HIBP + пасты + IntelligenceX + логи стилеров</td>
</tr>
<tr>
<td><b>Доступ к даркнету</b></td>
<td>Ручной Tor Browser, копирование-вставка с .onion-сайтов</td>
<td>Агент получает, парсит и ищет .onion-сайты через прокси SOCKS5</td>
</tr>
<tr>
<td><b>Анализ вредоносного ПО</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox по отдельности</td>
<td>Агент перекрёстно сверяет: "Этот хеш из ThreatFox также был детонирован в Hybrid Analysis с сетевыми IOC"</td>
</tr>
<tr>
<td><b>Блокчейн</b></td>
<td>Обозреватель блоков + ChainAbuse по отдельности</td>
<td>Агент отслеживает транзакции BTC и проверяет сообщения о злоупотреблениях за один шаг</td>
</tr>
<tr>
<td><b>API-ключи</b></td>
<td>Требуются почти для всего</td>
<td>Многие инструменты работают бесплатно; API-ключи открывают премиум-источники</td>
</tr>
<tr>
<td><b>Настройка</b></td>
<td>Установка каждого инструмента, управление каждой конфигурацией, запуск Tor Browser</td>
<td><code>npx darknet-mcp-server</code> &mdash; одна команда, нулевая настройка</td>
</tr>
</tbody>
</table>

---

## Быстрый Старт

### Вариант 1: npx (без установки)

```bash
npx darknet-mcp-server
```

Бесплатные инструменты работают сразу. API-ключи не требуются для отслеживания программ-вымогателей, списков утечек, GreyNoise, блокчейна, OTX и другого.

### Вариант 2: Клонирование

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Переменные окружения (опционально)

```bash
# Разведка утечек и учётных данных
export HIBP_API_KEY=your-key           # Включает поиск аккаунтов в утечках и поиск пастов
export INTELX_API_KEY=your-key         # Включает 4 инструмента IntelligenceX

# Разведка угроз
export OTX_API_KEY=your-key            # Увеличивает лимиты запросов AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Включает 4 инструмента AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Повышенные лимиты запросов для пакета abuse.ch
export PULSEDIVE_API_KEY=your-key      # Повышенные лимиты запросов для Pulsedive

# Логи стилеров и учётные данные
export HUDSONROCK_API_KEY=your-key     # Включает 3 инструмента логов стилеров Hudson Rock

# Эксплойты и анализ вредоносного ПО
export VULNERS_API_KEY=your-key        # Включает инструменты поиска и эксплойтов Vulners
export HYBRID_API_KEY=your-key         # Включает 3 инструмента вредоносного ПО Hybrid Analysis

# Фишинг
export PHISHTANK_API_KEY=your-key      # Повышенные лимиты запросов для PhishTank

# Tor SOCKS5 прокси (для доступа к .onion)
export TOR_SOCKS_HOST=127.0.0.1       # По умолчанию: 127.0.0.1
export TOR_SOCKS_PORT=9050            # По умолчанию: 9050
```

Все API-ключи опциональны. Без них вам по-прежнему доступны отслеживание программ-вымогателей, списки утечек, GreyNoise, блокчейн-разведка, OTX, проверка выходных узлов Tor, поиск onion, поиск CIRCL onion и многое другое.

### Подключение к AI-агенту

<details open>
<summary><b>Claude Code</b></summary>

```bash
# С npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# С локальным клоном
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Добавьте в `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / другие MCP-клиенты</b></summary>

Тот же формат конфигурации JSON. Укажите команду на `npx darknet-mcp-server` или путь локальной установки.

</details>

### Настройка Tor (опционально, для доступа к .onion)

7 инструментов Tor (`tor_fetch_onion`, `tor_scrape_onion` и т.д.) требуют работающего Tor SOCKS5 прокси.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Проверка подключения
npx darknet-mcp-server --check-tor
```

### Начните запрашивать

```
Вы: "Проверь, был ли example.com в каких-либо утечках данных, и поищи логи стилеров"
```

Вот и всё. Агент автоматически обрабатывает поиск утечек, поиск учётных данных, корреляцию угроз и многое другое.

---

## Что Может AI

### Расследование Утечек

```
Вы: "Проверь, был ли example.com в каких-либо утечках данных"

Агент: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com фигурирует в 5 известных утечках:
          - ExampleDB 2023: 4,2M записей (email, пароли, IP)
          - Collection #1: список для credential stuffing
          - Combolist 2024: 890K пар email:пароль
          Логи стилеров: 23 скомпрометированных машины с сохранёнными
          учётными данными для example.com найдены в базе Hudson Rock.
          IntelligenceX: 47 результатов на паст-сайтах и в даркнете."
```

### Отслеживание Программ-Вымогателей

```
Вы: "Какие группы вымогателей атакуют сферу здравоохранения?"

Агент: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Активность вымогателей в сфере здравоохранения:
          142 жертвы в 12 группах за последние 12 месяцев.
          Ведущие группы: LockBit3 (38 жертв), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Последняя: MedCorp Inc. указана LockBit3 (2 дня назад).
          3 новых жертвы в сфере здравоохранения за последнюю неделю
          в лентах ransomware.live и RansomLook."
```

### Разведка Даркнета

```
Вы: "Найди упоминания нашей компании на .onion-сайтах"

Агент: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Результаты поиска в даркнете для AcmeCorp:
          Ahmia.fi: 3 .onion-страницы упоминают AcmeCorp
          - Пост на форуме, обсуждающий список сотрудников AcmeCorp (форум утечек)
          - Объявление на маркетплейсе о базе данных AcmeCorp (неподтверждённо)
          - Пост в блоге, ссылающийся на утечку AcmeCorp
          IntelligenceX: 12 результатов на паст-сайтах
          Рекомендация: расследовать пост на форуме и объявление
          на маркетплейсе на предмет потенциальных активных продаж данных."
```

### Анализ Вредоносного ПО

```
Вы: "Проанализируй этот хеш файла на наличие индикаторов вредоносного ПО: abc123def456..."

Агент: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Анализ вредоносного ПО для abc123def456:
          Hybrid Analysis: ВРЕДОНОСНЫЙ (оценка угрозы 95/100)
          - Семейство: AgentTesla (стилер информации)
          - MITRE ATT&CK: T1555 (Доступ к учётным данным), T1071 (C2)
          - Сетевые IOC: 3 домена C2, 2 IP
          MalwareBazaar: Впервые замечен 15-03-2024, тег 'AgentTesla'
          ThreatFox: 2 записи IOC, связанные с той же кампанией
          OTX: Упоминается в 4 импульсах угроз"
```

---

## Справочник Инструментов (66 инструментов)

<details open>
<summary><b>Сеть Tor (7) &mdash; API-ключ не требуется (демон Tor необходим для .onion-инструментов)</b></summary>

| Инструмент | Описание |
|------------|----------|
| `tor_status` | Проверить, работает ли и доступен ли локальный демон прокси Tor SOCKS5 |
| `tor_fetch_onion` | Получить необработанный HTML с .onion URL через прокси Tor SOCKS5 (предотвращение DNS-утечек через socks5h) |
| `tor_scrape_onion` | Получить и разобрать .onion-сайт &mdash; возвращает структурированные данные: заголовок, ссылки, текст |
| `tor_search_onion` | Поиск .onion-сайтов с помощью поисковой системы Ahmia.fi |
| `tor_exit_nodes` | Получить текущие IP-адреса выходных узлов Tor из официального списка Tor Project |
| `tor_exit_check` | Проверить, является ли конкретный IP-адрес известным выходным узлом Tor |
| `tor_exit_details` | Получить подробную информацию о выходных узлах Tor, включая отпечатки и временные метки публикации |

</details>

<details>
<summary><b>Разведка Программ-Вымогателей (9) &mdash; API-ключ не требуется</b></summary>

| Инструмент | Описание |
|------------|----------|
| `ransomwareRecent` | Получить последних жертв программ-вымогателей с ransomware.live |
| `ransomwareGroups` | Список всех известных групп вымогателей, отслеживаемых ransomware.live |
| `ransomwareGroup` | Получить подробный профиль конкретной группы вымогателей по названию |
| `ransomwareGroupVictims` | Получить всех жертв, заявленных конкретной группой вымогателей |
| `ransomwareSearch` | Поиск жертв вымогателей по ключевому слову (название компании, домен и т.д.) |
| `ransomwareByCountry` | Получить жертв вымогателей, отфильтрованных по коду страны ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Получить жертв вымогателей, отфильтрованных по сектору/отрасли (здравоохранение, финансы и т.д.) |
| `ransomlookGroups` | Список всех 582+ групп вымогателей, отслеживаемых RansomLook |
| `ransomlookRecent` | Получить последние посты и заявления о жертвах вымогателей из RansomLook |

</details>

<details>
<summary><b>Разведка Утечек &mdash; HIBP (7) &mdash; Частично: некоторые инструменты бесплатны, поиск аккаунтов требует HIBP_API_KEY</b></summary>

| Инструмент | Описание |
|------------|----------|
| `breachList` | Список всех известных утечек данных из HaveIBeenPwned, опционально фильтр по домену &mdash; бесплатно |
| `breachGet` | Получить детали конкретной утечки данных по названию &mdash; бесплатно |
| `breachLatest` | Получить последнюю добавленную утечку данных &mdash; бесплатно |
| `breachDataClasses` | Список всех классов данных (типов скомпрометированных данных), известных HIBP &mdash; бесплатно |
| `breachPassword` | Проверить, появлялся ли пароль в известных утечках (k-анонимность, отправляется только 5-символьный префикс SHA-1) &mdash; бесплатно |
| `breachSearch` | Поиск всех утечек для конкретного аккаунта (email/имя пользователя) &mdash; требует `HIBP_API_KEY` |
| `breachPastes` | Поиск email-адреса в публично размещённых пастах &mdash; требует `HIBP_API_KEY` |

</details>

<details>
<summary><b>Пакет abuse.ch (9) &mdash; API-ключ не требуется (ABUSECH_AUTH_KEY опционально для повышенных лимитов)</b></summary>

| Инструмент | Описание |
|------------|----------|
| `threatfoxGetIocs` | Получить последние IOC из ThreatFox, сообщённые за последние N дней |
| `threatfoxSearch` | Поиск IOC ThreatFox по IP, домену, хешу или URL |
| `threatfoxTag` | Поиск IOC ThreatFox по тегу (напр., Cobalt Strike, Emotet) |
| `threatfoxMalware` | Поиск IOC ThreatFox по семейству вредоносного ПО с использованием номенклатуры Malpedia |
| `urlhausLookup` | Поиск URL или хоста в URLhaus для распространения вредоносного ПО |
| `urlhausTag` | Поиск записей URLhaus по тегу |
| `bazaarHash` | Поиск образца вредоносного ПО в MalwareBazaar по хешу MD5, SHA1 или SHA256 |
| `bazaarRecent` | Получить последние отправленные образцы вредоносного ПО из MalwareBazaar |
| `bazaarTag` | Поиск MalwareBazaar по тегу или имени YARA-сигнатуры |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; API-ключ не требуется (OTX_API_KEY опционально для повышенных лимитов)</b></summary>

| Инструмент | Описание |
|------------|----------|
| `otx_ip` | Поиск разведки угроз для IP-адреса &mdash; информация о пульсах, репутация, страна, ASN |
| `otx_domain` | Поиск разведки угроз для домена &mdash; информация о пульсах, whois, репутация |
| `otx_hash` | Поиск разведки угроз для хеша файла (MD5, SHA1, SHA256) |
| `otx_cve` | Поиск разведки угроз для CVE &mdash; связанные пульсы и индикаторы |
| `otx_search_pulses` | Поиск пульсов угроз OTX по ключевому слову |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Требует ABUSEIPDB_API_KEY</b></summary>

| Инструмент | Описание |
|------------|----------|
| `abuseipdb_check` | Проверить IP-адрес на сообщения о злоупотреблениях &mdash; оценка доверия, ISP, страна, количество сообщений |
| `abuseipdb_reports` | Получить индивидуальные сообщения о злоупотреблениях для IP с подробными комментариями и категориями |
| `abuseipdb_blacklist` | Получить чёрный список AbuseIPDB наиболее часто сообщаемых вредоносных IP-адресов |
| `abuseipdb_check_block` | Проверить весь сетевой блок CIDR на сообщения о злоупотреблениях |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; API-ключ не требуется</b></summary>

| Инструмент | Описание |
|------------|----------|
| `greynoise_ip` | Поиск IP в GreyNoise &mdash; классификация (безопасный/вредоносный/неизвестный), статус сканера |
| `greynoise_check` | Быстрая проверка: является ли этот IP известным сканером или известным безопасным сервисом? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; API-ключ не требуется (PULSEDIVE_API_KEY опционально для повышенных лимитов)</b></summary>

| Инструмент | Описание |
|------------|----------|
| `pulsedive_indicator` | Поиск индикатора (IP, домен, URL или хеш) &mdash; уровень риска, угрозы, ленты |
| `pulsedive_search` | Поиск индикаторов Pulsedive по значению |
| `pulsedive_explore` | Исследование связанных индикаторов с помощью расширенных запросов (связанные IOC с уровнями риска) |

</details>

<details>
<summary><b>Логи Стилеров Hudson Rock (3) &mdash; Требует HUDSONROCK_API_KEY</b></summary>

| Инструмент | Описание |
|------------|----------|
| `stealer_domain` | Поиск записей логов стилеров по домену &mdash; скомпрометированные машины, учётные данные, детали вредоносного ПО |
| `stealer_email` | Поиск логов стилеров по email-адресу &mdash; скомпрометированные машины с этим email в учётных данных браузера |
| `stealer_ip` | Поиск логов стилеров по IP-адресу &mdash; скомпрометированные машины, исходящие с этого IP |

</details>

<details>
<summary><b>Эксплойты Vulners (3) &mdash; API-ключ не требуется (VULNERS_API_KEY опционально для поиска)</b></summary>

| Инструмент | Описание |
|------------|----------|
| `vulners_search` | Поиск в базе данных уязвимостей Vulners с помощью запросов Lucene |
| `vulners_id` | Поиск конкретной уязвимости или эксплойта по ID (CVE, EDB, GHSA) &mdash; бесплатно |
| `vulners_exploit` | Поиск специфически эксплойтов (записи ExploitDB) |

</details>

<details>
<summary><b>Блокчейн-Разведка (4) &mdash; API-ключ не требуется</b></summary>

| Инструмент | Описание |
|------------|----------|
| `btc_address` | Поиск Bitcoin-адреса &mdash; баланс, количество транзакций, последние транзакции |
| `btc_balance` | Получить баланс Bitcoin-адреса в сатоши (быстрая проверка без полной истории) |
| `btc_tx` | Получить подробную информацию о транзакции Bitcoin по хешу &mdash; входы, выходы, комиссии, информация о блоке |
| `btc_abuse_check` | Проверить Bitcoin-адрес на сообщения о злоупотреблениях на ChainAbuse &mdash; сообщения о мошенничестве с категориями |

</details>

<details>
<summary><b>Вредоносное ПО Hybrid Analysis (3) &mdash; Требует HYBRID_API_KEY</b></summary>

| Инструмент | Описание |
|------------|----------|
| `malware_search` | Поиск в песочнице Hybrid Analysis по хешу файла &mdash; вердикт, уровень обнаружения AV, детали анализа |
| `malware_overview` | Полный обзор анализа вредоносного ПО &mdash; техники MITRE ATT&CK, сетевые индикаторы, процессы |
| `malware_feed` | Получить последнюю ленту детонации вредоносного ПО &mdash; недавно проанализированные образцы с вердиктами |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; API-ключ не требуется</b></summary>

| Инструмент | Описание |
|------------|----------|
| `onion_lookup` | Поиск метаданных для .onion-адреса через проект CIRCL AIL &mdash; первое/последнее обнаружение, статус, теги, сертификаты, порты, BTC-адреса |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Требует INTELX_API_KEY</b></summary>

| Инструмент | Описание |
|------------|----------|
| `intelx_search` | Запустить поиск в IntelligenceX по утекшим данным, контенту даркнета и прочему |
| `intelx_search_results` | Получить результаты поиска IntelligenceX по ID |
| `intelx_phonebook` | Поиск в телефонной книге &mdash; найти email, домены, URL, связанные с термином |
| `intelx_phonebook_results` | Получить результаты поиска в телефонной книге по ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; API-ключ не требуется (PHISHTANK_API_KEY опционально для повышенных лимитов)</b></summary>

| Инструмент | Описание |
|------------|----------|
| `phishing_check` | Проверить, является ли URL известным фишинговым сайтом через PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; API-ключ не требуется</b></summary>

| Инструмент | Описание |
|------------|----------|
| `darknet_list_sources` | Список всех доступных источников данных со статусом конфигурации, статусом API-ключей и количеством инструментов |

</details>

---

### Использование CLI

```bash
# Список всех доступных инструментов
npx darknet-mcp-server --list

# Проверка подключения к прокси Tor SOCKS5
npx darknet-mcp-server --check-tor

# Запуск любого инструмента напрямую
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Инструменты, требующие API-ключей
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Источники Данных (16)

| Источник | Аутентификация | Лимит Запросов | Что предоставляет |
|----------|----------------|----------------|-------------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1.5s | Поиск утечек, поиск пастов, проверка паролей, списки утечек |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Контент даркнета, поиск утекших данных, телефонная книга (email/домены/URL) |
| [AlienVault OTX](https://otx.alienvault.com) | Опционально | 1 req/s | Разведка угроз для IP, доменов, хешей, CVE; поиск пульсов угроз |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | Сообщения о злоупотреблениях IP, оценка доверия, чёрный список, проверка блока CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Опционально | 2 req/s | Поиск IOC, отслеживание семейств вредоносного ПО, поиск по тегам |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Опционально | 2 req/s | Отслеживание URL распространения вредоносного ПО, поиск хостов/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Опционально | 2 req/s | Репозиторий образцов вредоносного ПО, поиск хешей, поиск YARA-сигнатур |
| [GreyNoise](https://www.greynoise.io) | Не требуется | 1 req/s | Классификация IP (безопасный/вредоносный), обнаружение интернет-сканеров |
| [Pulsedive](https://pulsedive.com) | Опционально | 1 req/s | Обогащение индикаторов, оценка рисков, исследование связанных IOC |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Поиск логов стилеров по домену, email или IP |
| [Vulners](https://vulners.com) | Опционально | 1 req/s | База данных уязвимостей/эксплойтов, поиск CVE, поиск ExploitDB |
| [Blockchain.info](https://blockchain.info) | Не требуется | 1 req/s | Поиск Bitcoin-адресов, баланс, детали транзакций |
| [ChainAbuse](https://www.chainabuse.com) | Не требуется | 1 req/s | Сообщения о злоупотреблениях/мошенничестве с Bitcoin-адресами |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Детонация вредоносного ПО в песочнице, маппинг MITRE ATT&CK, лента образцов |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Не требуется | 0.5 req/s | Метаданные .onion-адресов, первое/последнее обнаружение, связанные BTC-адреса |
| [Tor Network](https://www.torproject.org) | Не требуется | N/A | Список выходных узлов, получение/парсинг .onion, поиск Ahmia.fi |

---

## Архитектура

```
src/
  index.ts                # Точка входа CLI (--help, --list, --check-tor, stdio-сервер)
  protocol/
    mcp-server.ts         # Настройка MCP-сервера (stdio-транспорт)
    tools.ts              # Реестр инструментов — все 66 инструментов собраны здесь
  types/
    index.ts              # Общие типы (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Ограничитель запросов для каждого провайдера
    cache.ts              # TTL-кеш для ответов API
    tor-fetch.ts          # HTTP-клиент прокси Tor SOCKS5
    require-key.ts        # Помощник валидации API-ключей
  tor/                    # Инструменты Сети Tor (7)
  ransomware/             # Инструменты Разведки Программ-Вымогателей (9)
  breach/                 # Инструменты Утечек HIBP (7)
  abusech/                # Инструменты ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Инструменты AlienVault OTX (5)
  abuseipdb/              # Инструменты AbuseIPDB (4)
  greynoise/              # Инструменты GreyNoise Community (2)
  pulsedive/              # Инструменты Pulsedive (3)
  hudsonrock/             # Инструменты логов стилеров Hudson Rock (3)
  vulners/                # Инструменты эксплойтов Vulners (3)
  blockchain/             # Инструменты Блокчейн-Разведки (4)
  hybrid/                 # Инструменты вредоносного ПО Hybrid Analysis (3)
  onionlookup/            # Инструмент CIRCL Onion Lookup (1)
  intelx/                 # Инструменты IntelligenceX (4)
  phishing/               # Инструмент PhishTank (1)
  meta/                   # Инструменты Meta (1)
```

**Проектные решения:**

- **16 провайдеров, 1 сервер** &mdash; Каждый источник данных является независимым модулем. Агент выбирает, какие инструменты использовать, основываясь на запросе.
- **Ограничители запросов для каждого провайдера** &mdash; У каждого источника данных свой экземпляр `RateLimiter`, настроенный на лимиты этого API. Нет общего узкого места.
- **TTL-кеширование** &mdash; Данные о вымогателях (15 мин), списки утечек (10 мин), результаты abuse.ch (5 мин) кешируются, чтобы избежать избыточных вызовов API при многоинструментальных рабочих процессах.
- **Плавная деградация** &mdash; Отсутствие API-ключей не приводит к сбою сервера. Инструменты возвращают описательные сообщения об ошибках: "Установите HIBP_API_KEY для включения поиска аккаунтов в утечках."
- **Предотвращение DNS-утечек** &mdash; Инструменты Tor .onion используют протокол `socks5h://` для разрешения DNS через Tor, предотвращая DNS-утечки к локальному резолверу.
- **4 зависимости** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` и `cheerio`. Весь clearnet HTTP через нативный `fetch`. Весь Tor-трафик через SOCKS5.

---

## Ограничения

- Поиск аккаунтов/пастов HIBP требует платного API-ключа ($3.50/месяц)
- IntelligenceX, AbuseIPDB, Hudson Rock и Hybrid Analysis требуют API-ключей для своих инструментов
- Инструменты Tor .onion требуют работающего прокси Tor SOCKS5 (не включён)
- Бесплатный уровень abuse.ch имеет более низкие лимиты запросов без `ABUSECH_AUTH_KEY`
- Данные Ransomware.live и RansomLook зависят от частоты сбора данных из источников
- Блокчейн-инструменты поддерживают только Bitcoin (без Ethereum/Monero)
- База данных PhishTank может отставать от фишинговых кампаний в реальном времени
- Протестировано на macOS / Linux (Windows не тестировался)

---

## Часть Пакета Безопасности MCP

| Проект | Область | Инструменты |
|--------|---------|-------------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Тестирование безопасности на основе браузера | 39 инструментов, Firefox, тестирование инъекций |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Облачная безопасность (AWS/Azure/GCP) | 38 инструментов, 60+ проверок |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Состояние безопасности GitHub | 39 инструментов, 45 проверок |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Разведка уязвимостей | 23 инструмента, 5 источников |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT и разведка | 37 инструментов, 12 источников |
| **darknet-mcp-server** | **Даркнет и разведка угроз** | **66 инструментов, 16 источников** |

---

<p align="center">
<b>Только для авторизованного тестирования и оценки безопасности.</b><br>
Всегда убедитесь, что у вас есть надлежащее разрешение, прежде чем проводить сбор разведданных о любой цели.
</p>

<p align="center">
  <a href="LICENSE">Лицензия MIT</a> &bull; Создано с помощью Bun + TypeScript
</p>
