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
  <strong>Türkçe</strong> |
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

<h3 align="center">Yapay zeka ajanları için karanlık ağ ve tehdit istihbaratı.</h3>

<p align="center">
  HIBP, ThreatFox, fidye yazılımı takibi, Tor .onion erişimi, blokzincir istihbaratı, exploit arama, stealer logları, zararlı yazılım analizi &mdash; tek bir MCP sunucusunda birleştirildi.<br>
  Yapay zeka ajanınız <b>talep üzerine tam kapsamlı karanlık ağ istihbaratı</b> elde eder; 16 tarayıcı sekmesi ve manuel korelasyon yerine.
</p>

<br>

<p align="center">
  <a href="#sorun">Sorun</a> &bull;
  <a href="#farkı-ne">Farkı Ne</a> &bull;
  <a href="#hızlı-başlangıç">Hızlı Başlangıç</a> &bull;
  <a href="#yapay-zeka-neler-yapabilir">Yapay Zeka Neler Yapabilir</a> &bull;
  <a href="#araç-referansı-66-araç">Araçlar (66)</a> &bull;
  <a href="#veri-kaynakları-16">Veri Kaynakları</a> &bull;
  <a href="#mimari">Mimari</a> &bull;
  <a href="CHANGELOG.md">Değişiklik Günlüğü</a> &bull;
  <a href="CONTRIBUTING.md">Katkıda Bulunma</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Lisans"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Araç">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Kaynak">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="darknet-mcp-server demo" width="800">
</p>

---

## Sorun

Karanlık ağ istihbaratı, her güvenlik soruşturmasında eksik kalan katmandır. Sızıntı veritabanları, fidye yazılımı takipçileri, Tor gizli hizmetleri, zararlı yazılım sandbox'ları, stealer logları, blokzincir adli bilişimi, exploit veritabanları &mdash; ihtiyacınız olan veriler, her birinin kendi API'si, kendi kimlik doğrulaması, kendi hız sınırları ve kendi çıktı formatı olan düzinelerce platforma dağılmış durumdadır. Bugün bir sekmede HIBP'yi kontrol ediyor, başka bir sekmede ThreatFox'u açıyor, Tor üzerinden fidye yazılımı sızıntı sitelerini geziyor, bir hash için MalwareBazaar'ı çekiyor, bir blok gezgininde blokzincir işlemlerini kontrol ediyor ve ardından hepsini bir araya getirmek için bir saat harcıyorsunuz.

```
Geleneksel karanlık ağ istihbarat iş akışı:
  sızıntı maruziyetini kontrol et         ->  HIBP web arayüzü (ücretli API)
  sızdırılmış kimlik bilgilerini ara      ->  IntelligenceX web arayüzü
  fidye yazılımı gruplarını takip et      ->  ransomware.live + ransomlook.io (2 ayrı arayüz)
  .onion gizli hizmetlere eriş           ->  Tor Browser ile manuel erişim
  zararlı yazılım örneklerini analiz et   ->  Hybrid Analysis + MalwareBazaar (2 ayrı arayüz)
  IP kötüye kullanım geçmişini kontrol et ->  AbuseIPDB + GreyNoise (2 ayrı arayüz)
  kripto para takibi yap                  ->  blockchain.info + ChainAbuse
  exploit ara                             ->  Vulners web arayüzü
  oltalama URL'lerini kontrol et          ->  PhishTank web arayüzü
  her şeyi ilişkilendir                   ->  kopyala-yapıştır ile rapor hazırla
  ────────────────────────────────
  Toplam: Soruşturma başına 60+ dakika, çoğu bağlam değiştirmeyle geçer
```

**darknet-mcp-server**, yapay zeka ajanınıza [Model Context Protocol](https://modelcontextprotocol.io) aracılığıyla 16 veri kaynağında 66 araç sunar. Ajan tüm kaynakları paralel olarak sorgular, yüzey ağı ve karanlık ağ verilerini çapraz ilişkilendirir, tehditleri tespit eder ve birleştirilmiş bir istihbarat tablosu sunar &mdash; tek bir konuşmada.

```
darknet-mcp-server ile:
  Siz: "hedef.com için sızıntı maruziyetini ve tehdit ortamını araştır"

  Ajan: -> HIBP: 3 bilinen sızıntı (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: Alan adıyla ilişkili 2 IOC (C2 geri çağrısı, oltalama)
         -> URLhaus: Alt alan adında barındırılan 1 zararlı URL
         -> Fidye yazılımı: Kurban kaydı bulunamadı (iyi)
         -> Stealer logları: 47 ele geçirilmiş çalışan kimlik bilgisi bulundu
         -> OTX: Alan adına referans veren 5 tehdit pulse'ı
         -> AbuseIPDB: Birincil IP'de 12 kötüye kullanım raporu (brute force)
         -> "hedef.com, 2.1M kayıt açığa çıkaran 3 veri sızıntısında yer almış.
            Stealer loglarında 47 çalışan kimlik bilgisi bulundu — acil
            parola sıfırlama önerilir. 2 aktif ThreatFox IOC'u devam
            eden hedeflemeyi gösteriyor. Fidye yazılımı kaydı yok, ancak
            birincil IP'deki kötüye kullanım raporları araştırmayı gerektiriyor."
```

---

## Farkı Ne

Mevcut araçlar size bir seferde tek bir kaynaktan ham veri sunar. darknet-mcp-server, yapay zeka ajanınıza **yüzey ağı ve karanlık ağ istihbaratını eşzamanlı olarak analiz etme** yeteneği kazandırır.

<table>
<thead>
<tr>
<th></th>
<th>Geleneksel Yaklaşım</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Arayüz</b></td>
<td>16 farklı web arayüzü, CLI ve API</td>
<td>MCP &mdash; Yapay zeka ajanı araçları konuşma yoluyla çağırır</td>
</tr>
<tr>
<td><b>Veri kaynakları</b></td>
<td>Her seferinde tek bir platform</td>
<td>16 kaynak paralel olarak sorgulanır</td>
</tr>
<tr>
<td><b>Sızıntı istihbaratı</b></td>
<td>Sızıntılar için HIBP web arayüzü, sızıntılar için IntelligenceX</td>
<td>Ajan HIBP sızıntıları + paste'ler + IntelligenceX + stealer loglarını birleştirir</td>
</tr>
<tr>
<td><b>Karanlık ağ erişimi</b></td>
<td>Manuel Tor Browser, .onion sitelerinden kopyala-yapıştır</td>
<td>Ajan .onion sitelerini SOCKS5 proxy üzerinden getirir, tarar ve arar</td>
</tr>
<tr>
<td><b>Zararlı yazılım analizi</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox ayrı ayrı</td>
<td>Ajan çapraz referans yapar: "ThreatFox'taki bu hash, Hybrid Analysis'te ağ IOC'larıyla birlikte de patlatılmış"</td>
</tr>
<tr>
<td><b>Blokzincir</b></td>
<td>Blok gezgini + ChainAbuse ayrı ayrı</td>
<td>Ajan BTC işlemlerini takip eder ve kötüye kullanım raporlarını tek adımda kontrol eder</td>
</tr>
<tr>
<td><b>API anahtarları</b></td>
<td>Neredeyse her şey için gerekli</td>
<td>Birçok araç ücretsiz çalışır; API anahtarları premium kaynakların kilidini açar</td>
</tr>
<tr>
<td><b>Kurulum</b></td>
<td>Her aracı kur, her yapılandırmayı yönet, Tor Browser çalıştır</td>
<td><code>npx darknet-mcp-server</code> &mdash; tek komut, sıfır yapılandırma</td>
</tr>
</tbody>
</table>

---

## Hızlı Başlangıç

### Seçenek 1: npx (kurulum gerektirmez)

```bash
npx darknet-mcp-server
```

Ücretsiz araçlar anında çalışır. Fidye yazılımı takibi, sızıntı listeleri, GreyNoise, blokzincir, OTX ve daha fazlası için API anahtarı gerekmez.

### Seçenek 2: Klonlama

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Ortam değişkenleri (isteğe bağlı)

```bash
# Sızıntı ve kimlik bilgisi istihbaratı
export HIBP_API_KEY=your-key           # Sızıntı hesap arama ve paste aramayı etkinleştirir
export INTELX_API_KEY=your-key         # 4 IntelligenceX aracını etkinleştirir

# Tehdit istihbaratı
export OTX_API_KEY=your-key            # AlienVault OTX hız sınırlarını artırır
export ABUSEIPDB_API_KEY=your-key      # 4 AbuseIPDB aracını etkinleştirir
export ABUSECH_AUTH_KEY=your-key       # abuse.ch paketi için daha yüksek hız sınırları
export PULSEDIVE_API_KEY=your-key      # Pulsedive için daha yüksek hız sınırları

# Stealer logları ve kimlik bilgileri
export HUDSONROCK_API_KEY=your-key     # 3 Hudson Rock stealer log aracını etkinleştirir

# Exploit ve zararlı yazılım analizi
export VULNERS_API_KEY=your-key        # Vulners arama ve exploit araçlarını etkinleştirir
export HYBRID_API_KEY=your-key         # 3 Hybrid Analysis zararlı yazılım aracını etkinleştirir

# Oltalama
export PHISHTANK_API_KEY=your-key      # PhishTank için daha yüksek hız sınırları

# Tor SOCKS5 proxy (.onion erişimi için)
export TOR_SOCKS_HOST=127.0.0.1       # Varsayılan: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Varsayılan: 9050
```

Tüm API anahtarları isteğe bağlıdır. Anahtarlar olmadan bile fidye yazılımı takibi, sızıntı listeleri, GreyNoise, blokzincir istihbaratı, OTX, Tor çıkış düğümü kontrolleri, onion arama, CIRCL onion araması ve daha fazlasını kullanabilirsiniz.

### Yapay zeka ajanınıza bağlayın

<details open>
<summary><b>Claude Code</b></summary>

```bash
# npx ile
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Yerel klonlama ile
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

`~/Library/Application Support/Claude/claude_desktop_config.json` dosyasına ekleyin:

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
<summary><b>Cursor / Windsurf / diğer MCP istemcileri</b></summary>

Aynı JSON yapılandırma formatı. Komutu `npx darknet-mcp-server` veya yerel kurulum yolunuza yönlendirin.

</details>

### Tor kurulumu (isteğe bağlı, .onion erişimi için)

7 Tor aracı (`tor_fetch_onion`, `tor_scrape_onion`, vb.) çalışan bir Tor SOCKS5 proxy gerektirir.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Bağlantıyı doğrula
npx darknet-mcp-server --check-tor
```

### Sorgulamaya başlayın

```
Siz: "example.com'un herhangi bir veri sızıntısında yer alıp almadığını kontrol et ve stealer loglarına bak"
```

Bu kadar. Ajan sızıntı aramalarını, kimlik bilgisi sorgularını, tehdit korelasyonunu ve daha fazlasını otomatik olarak yönetir.

---

## Yapay Zeka Neler Yapabilir

### Sızıntı Soruşturması

```
Siz: "example.com'un herhangi bir veri sızıntısında yer alıp almadığını kontrol et"

Ajan: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com 5 bilinen sızıntıda yer almaktadır:
          - ExampleDB 2023: 4.2M kayıt (e-postalar, parolalar, IP'ler)
          - Collection #1: kimlik bilgisi doldurma listesi
          - Combolist 2024: 890K e-posta:parola çifti
          Stealer logları: Hudson Rock veritabanında example.com için
          kaydedilmiş kimlik bilgilerine sahip 23 ele geçirilmiş makine bulundu.
          IntelligenceX: Paste siteleri ve karanlık ağda 47 sonuç."
```

### Fidye Yazılımı Takibi

```
Siz: "Hangi fidye yazılımı grupları sağlık sektörünü hedefliyor?"

Ajan: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Sağlık sektörü fidye yazılımı faaliyetleri:
          Son 12 ayda 12 grup genelinde 142 kurban.
          En aktif gruplar: LockBit3 (38 kurban), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          En son: MedCorp Inc., LockBit3 tarafından listelenmiş (2 gün önce).
          ransomware.live ve RansomLook akışlarında son bir
          haftada 3 yeni sağlık sektörü kurbanı."
```

### Karanlık Ağ Keşfi

```
Siz: "Şirketimizin .onion sitelerinde geçip geçmediğini ara"

Ajan: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "AcmeCorp için karanlık ağ arama sonuçları:
          Ahmia.fi: AcmeCorp'tan bahseden 3 .onion sayfası
          - AcmeCorp çalışan listesini tartışan forum gönderisi (sızıntı forumu)
          - AcmeCorp veritabanı için pazar yeri ilanı (doğrulanmamış)
          - AcmeCorp sızıntısına atıfta bulunan blog yazısı
          IntelligenceX: Paste sitelerinde 12 sonuç
          Öneri: Potansiyel aktif veri satışları için forum gönderisini
          ve pazar yeri ilanını araştırın."
```

### Zararlı Yazılım Analizi

```
Siz: "Bu dosya hash'ini zararlı yazılım göstergeleri için analiz et: abc123def456..."

Ajan: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "abc123def456 için zararlı yazılım analizi:
          Hybrid Analysis: ZARARLI (tehdit puanı 95/100)
          - Aile: AgentTesla (bilgi hırsızı)
          - MITRE ATT&CK: T1555 (Kimlik Bilgisi Erişimi), T1071 (C2)
          - Ağ IOC'ları: 3 C2 alan adı, 2 IP
          MalwareBazaar: İlk görülme 2024-03-15, 'AgentTesla' etiketi
          ThreatFox: Aynı kampanyaya bağlanan 2 IOC girişi
          OTX: 4 tehdit pulse'ında referans verilmiş"
```

---

## Araç Referansı (66 araç)

<details open>
<summary><b>Tor Ağı (7) &mdash; API anahtarı gerekmez (.onion araçları için Tor daemon gereklidir)</b></summary>

| Araç | Açıklama |
|------|----------|
| `tor_status` | Yerel Tor SOCKS5 proxy daemon'unun çalışıp çalışmadığını ve erişilebilir olup olmadığını kontrol eder |
| `tor_fetch_onion` | Tor SOCKS5 proxy üzerinden bir .onion URL'sinden ham HTML getirir (socks5h ile DNS sızıntısı önleme) |
| `tor_scrape_onion` | Bir .onion sitesini getirir ve ayrıştırır &mdash; yapılandırılmış veri döndürür: başlık, bağlantılar, gövde metni |
| `tor_search_onion` | Ahmia.fi arama motoru kullanarak .onion sitelerini arar |
| `tor_exit_nodes` | Resmi Tor Project toplu çıkış listesinden güncel Tor çıkış düğümü IP adreslerini alır |
| `tor_exit_check` | Belirli bir IP adresinin bilinen bir Tor çıkış düğümü olup olmadığını kontrol eder |
| `tor_exit_details` | Parmak izleri ve yayınlanma zaman damgaları dahil detaylı Tor çıkış düğümü bilgilerini alır |

</details>

<details>
<summary><b>Fidye Yazılımı İstihbaratı (9) &mdash; API anahtarı gerekmez</b></summary>

| Araç | Açıklama |
|------|----------|
| `ransomwareRecent` | ransomware.live'dan en son fidye yazılımı kurbanlarını getirir |
| `ransomwareGroups` | ransomware.live tarafından takip edilen tüm bilinen fidye yazılımı gruplarını listeler |
| `ransomwareGroup` | Belirli bir fidye yazılımı grubunun adına göre detaylı profilini alır |
| `ransomwareGroupVictims` | Belirli bir fidye yazılımı grubunun iddia ettiği tüm kurbanları alır |
| `ransomwareSearch` | Fidye yazılımı kurbanlarını anahtar kelimeye göre arar (şirket adı, alan adı, vb.) |
| `ransomwareByCountry` | ISO 3166-1 alpha-2 ülke koduna göre filtrelenmiş fidye yazılımı kurbanlarını alır |
| `ransomwareBySector` | Sektör/endüstriye göre filtrelenmiş fidye yazılımı kurbanlarını alır (sağlık, finans, vb.) |
| `ransomlookGroups` | RansomLook tarafından takip edilen 582'den fazla fidye yazılımı grubunu listeler |
| `ransomlookRecent` | RansomLook'tan en son fidye yazılımı gönderilerini ve kurban iddialarını getirir |

</details>

<details>
<summary><b>Sızıntı İstihbaratı &mdash; HIBP (7) &mdash; Kısmi: bazı araçlar ücretsiz, hesap araması HIBP_API_KEY gerektirir</b></summary>

| Araç | Açıklama |
|------|----------|
| `breachList` | HaveIBeenPwned'dan bilinen tüm veri sızıntılarını listeler, isteğe bağlı olarak alan adına göre filtreler &mdash; ücretsiz |
| `breachGet` | Belirli bir veri sızıntısının adına göre detaylarını alır &mdash; ücretsiz |
| `breachLatest` | En son eklenen veri sızıntısını alır &mdash; ücretsiz |
| `breachDataClasses` | HIBP tarafından bilinen tüm veri sınıflarını (ele geçirilen veri türleri) listeler &mdash; ücretsiz |
| `breachPassword` | Bir parolanın bilinen sızıntılarda görünüp görünmediğini kontrol eder (k-anonimlik, yalnızca 5 karakterlik SHA-1 öneki gönderilir) &mdash; ücretsiz |
| `breachSearch` | Belirli bir hesap (e-posta/kullanıcı adı) için tüm sızıntıları arar &mdash; `HIBP_API_KEY` gerektirir |
| `breachPastes` | Herkese açık yayınlanan paste'lerde bir e-posta adresini arar &mdash; `HIBP_API_KEY` gerektirir |

</details>

<details>
<summary><b>abuse.ch Paketi (9) &mdash; API anahtarı gerekmez (daha yüksek hız için ABUSECH_AUTH_KEY isteğe bağlı)</b></summary>

| Araç | Açıklama |
|------|----------|
| `threatfoxGetIocs` | Son N günde raporlanan ThreatFox'tan güncel IOC'ları alır |
| `threatfoxSearch` | ThreatFox IOC'larını IP, alan adı, hash veya URL ile arar |
| `threatfoxTag` | ThreatFox IOC'larını etikete göre arar (ör. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Malpedia adlandırması kullanarak ThreatFox IOC'larını zararlı yazılım ailesine göre arar |
| `urlhausLookup` | Zararlı yazılım dağıtımı için URLhaus'ta bir URL veya ana bilgisayarı arar |
| `urlhausTag` | URLhaus girişlerini etikete göre arar |
| `bazaarHash` | MalwareBazaar'da MD5, SHA1 veya SHA256 hash'ine göre bir zararlı yazılım örneğini arar |
| `bazaarRecent` | MalwareBazaar'dan en son gönderilen zararlı yazılım örneklerini alır |
| `bazaarTag` | MalwareBazaar'da etiket veya YARA imza adına göre arama yapar |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; API anahtarı gerekmez (daha yüksek hız için OTX_API_KEY isteğe bağlı)</b></summary>

| Araç | Açıklama |
|------|----------|
| `otx_ip` | Bir IP adresi için tehdit istihbaratını arar &mdash; pulse bilgisi, itibar, ülke, ASN |
| `otx_domain` | Bir alan adı için tehdit istihbaratını arar &mdash; pulse bilgisi, whois, itibar |
| `otx_hash` | Bir dosya hash'i (MD5, SHA1, SHA256) için tehdit istihbaratını arar |
| `otx_cve` | Bir CVE için tehdit istihbaratını arar &mdash; ilgili pulse'lar ve göstergeler |
| `otx_search_pulses` | OTX tehdit pulse'larını anahtar kelimeye göre arar |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; ABUSEIPDB_API_KEY gerektirir</b></summary>

| Araç | Açıklama |
|------|----------|
| `abuseipdb_check` | Bir IP adresini kötüye kullanım raporları için kontrol eder &mdash; güven puanı, ISS, ülke, rapor sayısı |
| `abuseipdb_reports` | Bir IP için detaylı yorumlar ve kategorilerle bireysel kötüye kullanım raporlarını alır |
| `abuseipdb_blacklist` | AbuseIPDB'nin en çok raporlanan zararlı IP adreslerinin kara listesini alır |
| `abuseipdb_check_block` | Tam bir CIDR ağ bloğunu kötüye kullanım raporları için kontrol eder |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; API anahtarı gerekmez</b></summary>

| Araç | Açıklama |
|------|----------|
| `greynoise_ip` | GreyNoise'da bir IP'yi arar &mdash; sınıflandırma (zararsız/zararlı/bilinmeyen), tarayıcı durumu |
| `greynoise_check` | Hızlı kontrol: bu IP bilinen bir tarayıcı mı yoksa bilinen zararsız bir hizmet mi? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; API anahtarı gerekmez (daha yüksek hız için PULSEDIVE_API_KEY isteğe bağlı)</b></summary>

| Araç | Açıklama |
|------|----------|
| `pulsedive_indicator` | Bir göstergeyi (IP, alan adı, URL veya hash) arar &mdash; risk seviyesi, tehditler, akışlar |
| `pulsedive_search` | Pulsedive göstergelerini değere göre arar |
| `pulsedive_explore` | Gelişmiş sorgular kullanarak bağlantılı göstergeleri keşfeder (risk seviyeleriyle ilişkili IOC'lar) |

</details>

<details>
<summary><b>Hudson Rock Stealer Logları (3) &mdash; HUDSONROCK_API_KEY gerektirir</b></summary>

| Araç | Açıklama |
|------|----------|
| `stealer_domain` | Stealer log girişlerini alan adına göre arar &mdash; ele geçirilmiş makineler, kimlik bilgileri, zararlı yazılım detayları |
| `stealer_email` | Stealer loglarını e-posta adresine göre arar &mdash; tarayıcı kimlik bilgilerinde o e-postaya sahip ele geçirilmiş makineler |
| `stealer_ip` | Stealer loglarını IP adresine göre arar &mdash; o IP'den kaynaklanan ele geçirilmiş makineler |

</details>

<details>
<summary><b>Vulners Exploit'ler (3) &mdash; API anahtarı gerekmez (arama için VULNERS_API_KEY isteğe bağlı)</b></summary>

| Araç | Açıklama |
|------|----------|
| `vulners_search` | Lucene sorguları kullanarak Vulners zafiyet veritabanını arar |
| `vulners_id` | ID'ye göre belirli bir zafiyet veya exploit'i arar (CVE, EDB, GHSA) &mdash; ücretsiz |
| `vulners_exploit` | Özellikle exploit'leri (ExploitDB girişleri) arar |

</details>

<details>
<summary><b>Blokzincir İstihbaratı (4) &mdash; API anahtarı gerekmez</b></summary>

| Araç | Açıklama |
|------|----------|
| `btc_address` | Bir Bitcoin adresini arar &mdash; bakiye, işlem sayısı, son işlemler |
| `btc_balance` | Bitcoin adres bakiyesini satoshi cinsinden alır (tam geçmiş olmadan hızlı kontrol) |
| `btc_tx` | Hash'e göre detaylı Bitcoin işlem bilgilerini alır &mdash; girdiler, çıktılar, ücretler, blok bilgisi |
| `btc_abuse_check` | ChainAbuse'da bir Bitcoin adresini kötüye kullanım raporları için kontrol eder &mdash; kategorili dolandırıcılık raporları |

</details>

<details>
<summary><b>Hybrid Analysis Zararlı Yazılım (3) &mdash; HYBRID_API_KEY gerektirir</b></summary>

| Araç | Açıklama |
|------|----------|
| `malware_search` | Hybrid Analysis sandbox'ında dosya hash'ine göre arama yapar &mdash; karar, AV tespit oranı, analiz detayları |
| `malware_overview` | Tam zararlı yazılım analiz özeti &mdash; MITRE ATT&CK teknikleri, ağ göstergeleri, süreçler |
| `malware_feed` | En son zararlı yazılım patlatma akışını alır &mdash; kararlarıyla birlikte son analiz edilen örnekler |

</details>

<details>
<summary><b>CIRCL Onion Araması (1) &mdash; API anahtarı gerekmez</b></summary>

| Araç | Açıklama |
|------|----------|
| `onion_lookup` | CIRCL AIL projesi aracılığıyla bir .onion adresi için metadata arar &mdash; ilk/son görülme, durum, etiketler, sertifikalar, portlar, BTC adresleri |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; INTELX_API_KEY gerektirir</b></summary>

| Araç | Açıklama |
|------|----------|
| `intelx_search` | IntelligenceX'te sızdırılmış veri, karanlık ağ içeriği ve daha fazlası için arama başlatır |
| `intelx_search_results` | ID'ye göre bir IntelligenceX aramasının sonuçlarını getirir |
| `intelx_phonebook` | Telefon rehberi araması &mdash; bir terimle ilişkili e-postaları, alan adlarını, URL'leri bulur |
| `intelx_phonebook_results` | ID'ye göre telefon rehberi arama sonuçlarını getirir |

</details>

<details>
<summary><b>PhishTank (1) &mdash; API anahtarı gerekmez (daha yüksek hız için PHISHTANK_API_KEY isteğe bağlı)</b></summary>

| Araç | Açıklama |
|------|----------|
| `phishing_check` | PhishTank aracılığıyla bir URL'nin bilinen bir oltalama sitesi olup olmadığını kontrol eder |

</details>

<details>
<summary><b>Meta (1) &mdash; API anahtarı gerekmez</b></summary>

| Araç | Açıklama |
|------|----------|
| `darknet_list_sources` | Yapılandırma durumu, API anahtarı durumu ve araç sayılarıyla birlikte tüm mevcut veri kaynaklarını listeler |

</details>

---

### CLI Kullanımı

```bash
# Tüm mevcut araçları listele
npx darknet-mcp-server --list

# Tor SOCKS5 proxy bağlantısını kontrol et
npx darknet-mcp-server --check-tor

# Herhangi bir aracı doğrudan çalıştır
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# API anahtarı gerektiren araçlar
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Veri Kaynakları (16)

| Kaynak | Kimlik Doğrulama | Hız Sınırı | Sağladığı veriler |
|--------|-------------------|-----------|-------------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 istek/1.5s | Sızıntı arama, paste arama, parola kontrolü, sızıntı listeleri |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 istek/s | Karanlık ağ içeriği, sızdırılmış veri arama, telefon rehberi (e-postalar/alan adları/URL'ler) |
| [AlienVault OTX](https://otx.alienvault.com) | İsteğe bağlı | 1 istek/s | IP'ler, alan adları, hash'ler, CVE'ler için tehdit istihbaratı; tehdit pulse arama |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 istek/s | IP kötüye kullanım raporları, güven puanlama, kara liste, CIDR blok kontrolü |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | İsteğe bağlı | 2 istek/s | IOC arama, zararlı yazılım ailesi takibi, etiket tabanlı arama |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | İsteğe bağlı | 2 istek/s | Zararlı yazılım dağıtım URL takibi, ana bilgisayar/URL araması |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | İsteğe bağlı | 2 istek/s | Zararlı yazılım örneği deposu, hash araması, YARA imza arama |
| [GreyNoise](https://www.greynoise.io) | Yok | 1 istek/s | IP sınıflandırma (zararsız/zararlı), internet tarayıcı tespiti |
| [Pulsedive](https://pulsedive.com) | İsteğe bağlı | 1 istek/s | Gösterge zenginleştirme, risk puanlama, bağlantılı IOC keşfi |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 istek/s | Alan adı, e-posta veya IP'ye göre stealer log arama |
| [Vulners](https://vulners.com) | İsteğe bağlı | 1 istek/s | Zafiyet/exploit veritabanı, CVE araması, ExploitDB arama |
| [Blockchain.info](https://blockchain.info) | Yok | 1 istek/s | Bitcoin adres araması, bakiye, işlem detayları |
| [ChainAbuse](https://www.chainabuse.com) | Yok | 1 istek/s | Bitcoin adres kötüye kullanım/dolandırıcılık raporları |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 istek/s | Zararlı yazılım sandbox patlatma, MITRE ATT&CK eşleştirme, örnek akışı |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Yok | 0.5 istek/s | .onion adres metadata'sı, ilk/son görülme, ilişkili BTC adresleri |
| [Tor Network](https://www.torproject.org) | Yok | N/A | Çıkış düğümü listesi, .onion getirme/tarama, Ahmia.fi arama |

---

## Mimari

```
src/
  index.ts                # CLI giriş noktası (--help, --list, --check-tor, stdio sunucu)
  protocol/
    mcp-server.ts         # MCP sunucu kurulumu (stdio aktarımı)
    tools.ts              # Araç kayıt defteri — tüm 66 araç burada birleştirilir
  types/
    index.ts              # Paylaşılan tipler (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Sağlayıcı bazlı hız sınırlayıcı
    cache.ts              # API yanıtları için TTL önbellek
    tor-fetch.ts          # Tor SOCKS5 proxy HTTP istemcisi
    require-key.ts        # API anahtarı doğrulama yardımcısı
  tor/                    # Tor Ağı araçları (7)
  ransomware/             # Fidye Yazılımı İstihbaratı araçları (9)
  breach/                 # HIBP Sızıntı araçları (7)
  abusech/                # ThreatFox + URLhaus + MalwareBazaar araçları (9)
  otx/                    # AlienVault OTX araçları (5)
  abuseipdb/              # AbuseIPDB araçları (4)
  greynoise/              # GreyNoise Community araçları (2)
  pulsedive/              # Pulsedive araçları (3)
  hudsonrock/             # Hudson Rock stealer log araçları (3)
  vulners/                # Vulners exploit araçları (3)
  blockchain/             # Blokzincir İstihbaratı araçları (4)
  hybrid/                 # Hybrid Analysis zararlı yazılım araçları (3)
  onionlookup/            # CIRCL Onion Lookup aracı (1)
  intelx/                 # IntelligenceX araçları (4)
  phishing/               # PhishTank aracı (1)
  meta/                   # Meta araçları (1)
```

**Tasarım kararları:**

- **16 sağlayıcı, 1 sunucu** &mdash; Her veri kaynağı bağımsız bir modüldür. Ajan, sorguya göre hangi araçları kullanacağını seçer.
- **Sağlayıcı bazlı hız sınırlayıcılar** &mdash; Her veri kaynağının, o API'nin sınırlarına göre kalibre edilmiş kendi `RateLimiter` örneği vardır. Paylaşılan darboğaz yoktur.
- **TTL önbellekleme** &mdash; Fidye yazılımı verileri (15dk), sızıntı listeleri (10dk), abuse.ch (5dk) sonuçları, çok araçlı iş akışlarında gereksiz API çağrılarını önlemek için önbelleğe alınır.
- **Zarif bozulma** &mdash; Eksik API anahtarları sunucuyu çökertmez. Araçlar açıklayıcı hata mesajları döndürür: "Sızıntı hesap aramasını etkinleştirmek için HIBP_API_KEY ayarlayın."
- **DNS sızıntısı önleme** &mdash; Tor .onion araçları, yerel çözücüye DNS sızıntısını önlemek için DNS'i Tor üzerinden çözmek amacıyla `socks5h://` protokolünü kullanır.
- **4 bağımlılık** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` ve `cheerio`. Tüm açık ağ HTTP'si yerel `fetch` ile. Tüm Tor trafiği SOCKS5 ile.

---

## Sınırlamalar

- HIBP hesap/paste araması ücretli bir API anahtarı gerektirir (aylık $3.50)
- IntelligenceX, AbuseIPDB, Hudson Rock ve Hybrid Analysis araçları için API anahtarları gerektirir
- Tor .onion araçları çalışan bir Tor SOCKS5 proxy gerektirir (dahil değildir)
- abuse.ch ücretsiz katmanı `ABUSECH_AUTH_KEY` olmadan daha düşük hız sınırlarına sahiptir
- Ransomware.live ve RansomLook verileri, yukarı akış tarama sıklığına bağlıdır
- Blokzincir araçları yalnızca Bitcoin'i destekler (Ethereum/Monero desteği yoktur)
- PhishTank veritabanı, gerçek zamanlı oltalama kampanyalarının gerisinde kalabilir
- macOS / Linux test edilmiştir (Windows test edilmemiştir)

---

## MCP Güvenlik Paketinin Parçası

| Proje | Alan | Araçlar |
|-------|------|---------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Tarayıcı tabanlı güvenlik testi | 39 araç, Firefox, enjeksiyon testi |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Bulut güvenliği (AWS/Azure/GCP) | 38 araç, 60+ kontrol |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | GitHub güvenlik duruşu | 39 araç, 45 kontrol |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Zafiyet istihbaratı | 23 araç, 5 kaynak |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT ve keşif | 37 araç, 12 kaynak |
| **darknet-mcp-server** | **Karanlık ağ ve tehdit istihbaratı** | **66 araç, 16 kaynak** |

---

<p align="center">
<b>Yalnızca yetkili güvenlik testi ve değerlendirmesi içindir.</b><br>
Herhangi bir hedefe yönelik istihbarat toplama işlemi gerçekleştirmeden önce daima uygun yetkiye sahip olduğunuzdan emin olun.
</p>

<p align="center">
  <a href="LICENSE">MIT Lisansı</a> &bull; Bun + TypeScript ile geliştirilmiştir
</p>
