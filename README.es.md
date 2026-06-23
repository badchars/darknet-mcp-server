<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zh-TW.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <strong>Español</strong> |
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

<h3 align="center">Inteligencia de la dark web y amenazas para agentes de IA.</h3>

<p align="center">
  HIBP, ThreatFox, seguimiento de ransomware, acceso a Tor .onion, inteligencia blockchain, busqueda de exploits, logs de stealers, analisis de malware &mdash; unificado en un solo servidor MCP.<br>
  Tu agente de IA obtiene <b>inteligencia de espectro completo de la dark web bajo demanda</b>, no 16 pestanas del navegador y correlacion manual.
</p>

<br>

<p align="center">
  <a href="#el-problema">El Problema</a> &bull;
  <a href="#en-que-se-diferencia">En que se diferencia</a> &bull;
  <a href="#inicio-rapido">Inicio Rapido</a> &bull;
  <a href="#que-puede-hacer-la-ia">Que puede hacer la IA</a> &bull;
  <a href="#referencia-de-herramientas-66-herramientas">Herramientas (66)</a> &bull;
  <a href="#fuentes-de-datos-16">Fuentes de Datos</a> &bull;
  <a href="#arquitectura">Arquitectura</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Contribuir</a>
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
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="Demo de darknet-mcp-server" width="800">
</p>

---

## El Problema

La inteligencia de la dark web es la capa faltante en toda investigacion de seguridad. Bases de datos de filtraciones, rastreadores de ransomware, servicios ocultos de Tor, sandboxes de malware, logs de stealers, forense blockchain, bases de datos de exploits &mdash; los datos que necesitas estan dispersos en docenas de plataformas, cada una con su propia API, su propia autenticacion, sus propios limites de velocidad, su propio formato de salida. Hoy revisas HIBP en una pestana, ThreatFox en otra, navegas sitios de filtraciones de ransomware a traves de Tor, buscas un hash en MalwareBazaar, verificas transacciones blockchain en un explorador de bloques, y luego pasas una hora uniendo todo manualmente.

```
Flujo de trabajo tradicional de inteligencia dark web:
  verificar exposicion a filtraciones  ->  Interfaz web de HIBP (API de pago)
  buscar credenciales filtradas        ->  Interfaz web de IntelligenceX
  rastrear grupos de ransomware        ->  ransomware.live + ransomlook.io (2 UIs separadas)
  acceder a servicios ocultos .onion   ->  Navegador Tor manualmente
  analizar muestras de malware         ->  Hybrid Analysis + MalwareBazaar (2 UIs mas)
  verificar historial de abuso de IP   ->  AbuseIPDB + GreyNoise (2 UIs mas)
  rastrear criptomonedas               ->  blockchain.info + ChainAbuse
  buscar exploits                      ->  Interfaz web de Vulners
  verificar URLs de phishing           ->  Interfaz web de PhishTank
  correlacionar todo                   ->  copiar y pegar en un informe
  ────────────────────────────────
  Total: 60+ minutos por investigacion, la mayoria cambiando de contexto
```

**darknet-mcp-server** proporciona a tu agente de IA 66 herramientas de 16 fuentes de datos a traves del [Model Context Protocol](https://modelcontextprotocol.io). El agente consulta todas las fuentes en paralelo, correlaciona datos de la web superficial y la dark web, identifica amenazas y presenta una imagen de inteligencia unificada &mdash; en una sola conversacion.

```
Con darknet-mcp-server:
  Tu: "Investiga la exposicion a filtraciones y el panorama de amenazas de target.com"

  Agente: -> HIBP: 3 filtraciones conocidas (Adobe 2013, LinkedIn 2021, Collection #1)
          -> ThreatFox: 2 IOCs asociados al dominio (callback C2, phishing)
          -> URLhaus: 1 URL maliciosa alojada en un subdominio
          -> Ransomware: No se encontraron listados de victimas (bueno)
          -> Logs de stealers: 47 credenciales de empleados comprometidas encontradas
          -> OTX: 5 pulsos de amenazas que referencian el dominio
          -> AbuseIPDB: La IP principal tiene 12 reportes de abuso (fuerza bruta)
          -> "target.com ha estado en 3 filtraciones de datos exponiendo 2.1M
             de registros. 47 credenciales de empleados encontradas en logs
             de stealers — se recomienda restablecimiento de contrasena
             inmediato. 2 IOCs activos de ThreatFox sugieren un ataque
             en curso. Sin listados de ransomware, pero los reportes de
             abuso en la IP principal ameritan investigacion."
```

---

## En que se diferencia

Las herramientas existentes te dan datos brutos de una fuente a la vez. darknet-mcp-server le da a tu agente de IA la capacidad de **razonar sobre inteligencia de la web superficial y la dark web simultaneamente**.

<table>
<thead>
<tr>
<th></th>
<th>Enfoque Tradicional</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interfaz</b></td>
<td>16 interfaces web, CLIs y APIs diferentes</td>
<td>MCP &mdash; El agente de IA llama herramientas conversacionalmente</td>
</tr>
<tr>
<td><b>Fuentes de datos</b></td>
<td>Una plataforma a la vez</td>
<td>16 fuentes consultadas en paralelo</td>
</tr>
<tr>
<td><b>Inteligencia de filtraciones</b></td>
<td>Interfaz web de HIBP para filtraciones, IntelligenceX para fugas</td>
<td>El agente combina filtraciones HIBP + pastes + IntelligenceX + logs de stealers</td>
</tr>
<tr>
<td><b>Acceso a la dark web</b></td>
<td>Navegador Tor manual, copiar y pegar de sitios .onion</td>
<td>El agente obtiene, extrae y busca sitios .onion via proxy SOCKS5</td>
</tr>
<tr>
<td><b>Analisis de malware</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox por separado</td>
<td>El agente cruza referencias: "Este hash de ThreatFox tambien fue detonado en Hybrid Analysis con IOCs de red"</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Explorador de bloques + ChainAbuse por separado</td>
<td>El agente rastrea transacciones BTC y verifica reportes de abuso en un solo paso</td>
</tr>
<tr>
<td><b>Claves API</b></td>
<td>Requeridas para casi todo</td>
<td>Muchas herramientas funcionan gratis; las claves API desbloquean fuentes premium</td>
</tr>
<tr>
<td><b>Configuracion</b></td>
<td>Instalar cada herramienta, gestionar cada configuracion, ejecutar Navegador Tor</td>
<td><code>npx darknet-mcp-server</code> &mdash; un comando, cero configuracion</td>
</tr>
</tbody>
</table>

---

## Inicio Rapido

### Opcion 1: npx (sin instalacion)

```bash
npx darknet-mcp-server
```

Las herramientas gratuitas funcionan inmediatamente. No se requieren claves API para seguimiento de ransomware, listados de filtraciones, GreyNoise, blockchain, OTX y mas.

### Opcion 2: Clonar

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Variables de entorno (opcional)

```bash
# Inteligencia de filtraciones y credenciales
export HIBP_API_KEY=your-key           # Habilita busqueda de cuentas filtradas y busqueda de pastes
export INTELX_API_KEY=your-key         # Habilita 4 herramientas de IntelligenceX

# Inteligencia de amenazas
export OTX_API_KEY=your-key            # Aumenta limites de velocidad de AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Habilita 4 herramientas de AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Limites de velocidad mas altos para la suite abuse.ch
export PULSEDIVE_API_KEY=your-key      # Limites de velocidad mas altos para Pulsedive

# Logs de stealers y credenciales
export HUDSONROCK_API_KEY=your-key     # Habilita 3 herramientas de logs de stealers de Hudson Rock

# Exploits y analisis de malware
export VULNERS_API_KEY=your-key        # Habilita herramientas de busqueda y exploits de Vulners
export HYBRID_API_KEY=your-key         # Habilita 3 herramientas de malware de Hybrid Analysis

# Phishing
export PHISHTANK_API_KEY=your-key      # Limites de velocidad mas altos para PhishTank

# Proxy Tor SOCKS5 (para acceso .onion)
export TOR_SOCKS_HOST=127.0.0.1       # Por defecto: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Por defecto: 9050
```

Todas las claves API son opcionales. Sin ellas, aun obtendras seguimiento de ransomware, listados de filtraciones, GreyNoise, inteligencia blockchain, OTX, verificaciones de nodos de salida Tor, busqueda onion, consulta onion CIRCL y mas.

### Conectar a tu agente de IA

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Con npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Con clon local
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Agregar a `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / otros clientes MCP</b></summary>

Mismo formato de configuracion JSON. Apunta el comando a `npx darknet-mcp-server` o a tu ruta de instalacion local.

</details>

### Configuracion de Tor (opcional, para acceso .onion)

Las 7 herramientas Tor (`tor_fetch_onion`, `tor_scrape_onion`, etc.) requieren un proxy Tor SOCKS5 en ejecucion.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Verificar conectividad
npx darknet-mcp-server --check-tor
```

### Comenzar a consultar

```
Tu: "Verifica si example.com ha estado en alguna filtracion de datos y busca logs de stealers"
```

Eso es todo. El agente maneja busquedas de filtraciones, busquedas de credenciales, correlacion de amenazas y mas automaticamente.

---

## Que puede hacer la IA

### Investigacion de Filtraciones

```
Tu: "Verifica si example.com ha estado en alguna filtracion de datos"

Agente: -> breachList {domain: "example.com"}
        -> breachSearch {account: "admin@example.com"}
        -> stealer_domain {domain: "example.com"}
        -> intelx_search {term: "example.com"}
        -> "example.com aparece en 5 filtraciones conocidas:
           - ExampleDB 2023: 4.2M registros (emails, contrasenas, IPs)
           - Collection #1: lista de credential stuffing
           - Combolist 2024: 890K pares email:contrasena
           Logs de stealers: 23 maquinas comprometidas con credenciales
           guardadas para example.com encontradas en la base de datos
           de Hudson Rock.
           IntelligenceX: 47 resultados en sitios de paste y dark web."
```

### Seguimiento de Ransomware

```
Tu: "Que grupos de ransomware estan atacando el sector salud?"

Agente: -> ransomwareBySector {sector: "healthcare"}
        -> ransomwareRecent {}
        -> ransomlookRecent {}
        -> "Actividad de ransomware en el sector salud:
           142 victimas en 12 grupos en los ultimos 12 meses.
           Grupos principales: LockBit3 (38 victimas), BlackCat/ALPHV (24),
           Cl0p (19), Royal (15).
           Mas reciente: MedCorp Inc. listada por LockBit3 (hace 2 dias).
           3 nuevas victimas del sector salud en la ultima semana
           en los feeds de ransomware.live y RansomLook."
```

### Reconocimiento en la Dark Web

```
Tu: "Busca menciones de nuestra empresa en sitios .onion"

Agente: -> tor_search_onion {query: "AcmeCorp"}
        -> intelx_search {term: "acmecorp.com"}
        -> onion_lookup {address: "relevant-onion-address.onion"}
        -> "Resultados de busqueda en la dark web para AcmeCorp:
           Ahmia.fi: 3 paginas .onion mencionan AcmeCorp
           - Publicacion en foro discutiendo lista de empleados de AcmeCorp (foro de filtraciones)
           - Listado en marketplace de base de datos de AcmeCorp (no verificado)
           - Publicacion de blog referenciando filtracion de AcmeCorp
           IntelligenceX: 12 resultados en sitios de paste
           Recomendacion: investigar la publicacion del foro y el listado
           del marketplace para posible venta activa de datos."
```

### Analisis de Malware

```
Tu: "Analiza este hash de archivo para indicadores de malware: abc123def456..."

Agente: -> malware_search {hash: "abc123def456..."}
        -> malware_overview {sha256: "abc123def456..."}
        -> bazaarHash {hash: "abc123def456..."}
        -> threatfoxSearch {searchTerm: "abc123def456..."}
        -> otx_hash {hash: "abc123def456..."}
        -> "Analisis de malware para abc123def456:
           Hybrid Analysis: MALICIOSO (puntuacion de amenaza 95/100)
           - Familia: AgentTesla (stealer de informacion)
           - MITRE ATT&CK: T1555 (Acceso a Credenciales), T1071 (C2)
           - IOCs de red: 3 dominios C2, 2 IPs
           MalwareBazaar: Visto por primera vez 2024-03-15, etiquetado 'AgentTesla'
           ThreatFox: 2 entradas IOC vinculadas a la misma campana
           OTX: Referenciado en 4 pulsos de amenazas"
```

---

## Referencia de Herramientas (66 herramientas)

<details open>
<summary><b>Red Tor (7) &mdash; Sin clave API (se requiere demonio Tor para herramientas .onion)</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `tor_status` | Verificar si el demonio proxy Tor SOCKS5 local esta en ejecucion y accesible |
| `tor_fetch_onion` | Obtener HTML crudo de una URL .onion via proxy Tor SOCKS5 (prevencion de fuga DNS via socks5h) |
| `tor_scrape_onion` | Obtener y parsear un sitio .onion &mdash; devuelve datos estructurados: titulo, enlaces, texto del cuerpo |
| `tor_search_onion` | Buscar sitios .onion usando el motor de busqueda Ahmia.fi |
| `tor_exit_nodes` | Obtener direcciones IP actuales de nodos de salida Tor de la lista oficial de salida masiva del Proyecto Tor |
| `tor_exit_check` | Verificar si una direccion IP especifica es un nodo de salida Tor conocido |
| `tor_exit_details` | Obtener informacion detallada del nodo de salida Tor incluyendo huellas digitales y marcas de tiempo de publicacion |

</details>

<details>
<summary><b>Inteligencia de Ransomware (9) &mdash; Sin clave API</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `ransomwareRecent` | Obtener las victimas de ransomware mas recientes de ransomware.live |
| `ransomwareGroups` | Listar todos los grupos de ransomware conocidos rastreados por ransomware.live |
| `ransomwareGroup` | Obtener perfil detallado de un grupo de ransomware especifico por nombre |
| `ransomwareGroupVictims` | Obtener todas las victimas reclamadas por un grupo de ransomware especifico |
| `ransomwareSearch` | Buscar victimas de ransomware por palabra clave (nombre de empresa, dominio, etc.) |
| `ransomwareByCountry` | Obtener victimas de ransomware filtradas por codigo de pais ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Obtener victimas de ransomware filtradas por sector/industria (salud, finanzas, etc.) |
| `ransomlookGroups` | Listar todos los 582+ grupos de ransomware rastreados por RansomLook |
| `ransomlookRecent` | Obtener las publicaciones de ransomware y reclamos de victimas mas recientes de RansomLook |

</details>

<details>
<summary><b>Inteligencia de Filtraciones &mdash; HIBP (7) &mdash; Parcial: algunas herramientas gratuitas, busqueda de cuentas requiere HIBP_API_KEY</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `breachList` | Listar todas las filtraciones de datos conocidas de HaveIBeenPwned, opcionalmente filtrar por dominio &mdash; gratuito |
| `breachGet` | Obtener detalles de una filtracion de datos especifica por nombre &mdash; gratuito |
| `breachLatest` | Obtener la filtracion de datos anadida mas recientemente &mdash; gratuito |
| `breachDataClasses` | Listar todas las clases de datos (tipos de datos comprometidos) conocidas por HIBP &mdash; gratuito |
| `breachPassword` | Verificar si una contrasena ha aparecido en filtraciones conocidas (k-anonimato, solo se envia prefijo SHA-1 de 5 caracteres) &mdash; gratuito |
| `breachSearch` | Buscar todas las filtraciones para una cuenta especifica (email/nombre de usuario) &mdash; requiere `HIBP_API_KEY` |
| `breachPastes` | Buscar una direccion de email en pastes publicados publicamente &mdash; requiere `HIBP_API_KEY` |

</details>

<details>
<summary><b>Suite abuse.ch (9) &mdash; Sin clave API (ABUSECH_AUTH_KEY opcional para mayor velocidad)</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `threatfoxGetIocs` | Obtener IOCs recientes de ThreatFox reportados en los ultimos N dias |
| `threatfoxSearch` | Buscar IOCs de ThreatFox por IP, dominio, hash o URL |
| `threatfoxTag` | Buscar IOCs de ThreatFox por etiqueta (ej. Cobalt Strike, Emotet) |
| `threatfoxMalware` | Buscar IOCs de ThreatFox por familia de malware usando nomenclatura Malpedia |
| `urlhausLookup` | Buscar una URL o host en URLhaus para distribucion de malware |
| `urlhausTag` | Buscar entradas de URLhaus por etiqueta |
| `bazaarHash` | Buscar una muestra de malware en MalwareBazaar por hash MD5, SHA1 o SHA256 |
| `bazaarRecent` | Obtener las muestras de malware mas recientemente enviadas de MalwareBazaar |
| `bazaarTag` | Buscar en MalwareBazaar por etiqueta o nombre de firma YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Sin clave API (OTX_API_KEY opcional para mayor velocidad)</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `otx_ip` | Buscar inteligencia de amenazas para una direccion IP &mdash; info de pulsos, reputacion, pais, ASN |
| `otx_domain` | Buscar inteligencia de amenazas para un dominio &mdash; info de pulsos, whois, reputacion |
| `otx_hash` | Buscar inteligencia de amenazas para un hash de archivo (MD5, SHA1, SHA256) |
| `otx_cve` | Buscar inteligencia de amenazas para una CVE &mdash; pulsos relacionados e indicadores |
| `otx_search_pulses` | Buscar pulsos de amenazas OTX por palabra clave |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Requiere ABUSEIPDB_API_KEY</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `abuseipdb_check` | Verificar una direccion IP para reportes de abuso &mdash; puntuacion de confianza, ISP, pais, cantidad de reportes |
| `abuseipdb_reports` | Obtener reportes individuales de abuso para una IP con comentarios detallados y categorias |
| `abuseipdb_blacklist` | Obtener la lista negra de AbuseIPDB de las direcciones IP maliciosas mas reportadas |
| `abuseipdb_check_block` | Verificar un bloque de red CIDR completo para reportes de abuso |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Sin clave API</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `greynoise_ip` | Buscar una IP en GreyNoise &mdash; clasificacion (benigno/malicioso/desconocido), estado de escaner |
| `greynoise_check` | Verificacion rapida: es esta IP un escaner conocido o un servicio benigno conocido? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Sin clave API (PULSEDIVE_API_KEY opcional para mayor velocidad)</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `pulsedive_indicator` | Buscar un indicador (IP, dominio, URL o hash) &mdash; nivel de riesgo, amenazas, feeds |
| `pulsedive_search` | Buscar indicadores de Pulsedive por valor |
| `pulsedive_explore` | Explorar indicadores vinculados usando consultas avanzadas (IOCs relacionados con niveles de riesgo) |

</details>

<details>
<summary><b>Hudson Rock Logs de Stealers (3) &mdash; Requiere HUDSONROCK_API_KEY</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `stealer_domain` | Buscar entradas de logs de stealers por dominio &mdash; maquinas comprometidas, credenciales, detalles de malware |
| `stealer_email` | Buscar logs de stealers por direccion de email &mdash; maquinas comprometidas con ese email en credenciales del navegador |
| `stealer_ip` | Buscar logs de stealers por direccion IP &mdash; maquinas comprometidas originadas desde esa IP |

</details>

<details>
<summary><b>Vulners Exploits (3) &mdash; Sin clave API (VULNERS_API_KEY opcional para busqueda)</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `vulners_search` | Buscar en la base de datos de vulnerabilidades de Vulners usando consultas Lucene |
| `vulners_id` | Buscar una vulnerabilidad o exploit especifico por ID (CVE, EDB, GHSA) &mdash; gratuito |
| `vulners_exploit` | Buscar especificamente exploits (entradas de ExploitDB) |

</details>

<details>
<summary><b>Inteligencia Blockchain (4) &mdash; Sin clave API</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `btc_address` | Buscar una direccion Bitcoin &mdash; saldo, cantidad de transacciones, transacciones recientes |
| `btc_balance` | Obtener saldo de direccion Bitcoin en satoshi (verificacion rapida sin historial completo) |
| `btc_tx` | Obtener informacion detallada de transaccion Bitcoin por hash &mdash; entradas, salidas, comisiones, info de bloque |
| `btc_abuse_check` | Verificar una direccion Bitcoin para reportes de abuso en ChainAbuse &mdash; reportes de estafa con categorias |

</details>

<details>
<summary><b>Hybrid Analysis Malware (3) &mdash; Requiere HYBRID_API_KEY</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `malware_search` | Buscar en sandbox de Hybrid Analysis por hash de archivo &mdash; veredicto, tasa de deteccion AV, detalles de analisis |
| `malware_overview` | Vision general completa de analisis de malware &mdash; tecnicas MITRE ATT&CK, indicadores de red, procesos |
| `malware_feed` | Obtener el feed mas reciente de detonacion de malware &mdash; muestras analizadas recientemente con veredictos |

</details>

<details>
<summary><b>CIRCL Consulta Onion (1) &mdash; Sin clave API</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `onion_lookup` | Buscar metadatos de una direccion .onion via proyecto CIRCL AIL &mdash; primera/ultima vez visto, estado, etiquetas, certificados, puertos, direcciones BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Requiere INTELX_API_KEY</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `intelx_search` | Iniciar una busqueda en IntelligenceX de datos filtrados, contenido de la dark web y mas |
| `intelx_search_results` | Recuperar resultados de una busqueda de IntelligenceX por ID |
| `intelx_phonebook` | Busqueda de directorio telefonico &mdash; encontrar emails, dominios, URLs asociados a un termino |
| `intelx_phonebook_results` | Recuperar resultados de busqueda de directorio telefonico por ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Sin clave API (PHISHTANK_API_KEY opcional para mayor velocidad)</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `phishing_check` | Verificar si una URL es un sitio de phishing conocido via PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Sin clave API</b></summary>

| Herramienta | Descripcion |
|-------------|-------------|
| `darknet_list_sources` | Listar todas las fuentes de datos disponibles con estado de configuracion, estado de clave API y cantidad de herramientas |

</details>

---

### Uso de CLI

```bash
# Listar todas las herramientas disponibles
npx darknet-mcp-server --list

# Verificar conectividad del proxy Tor SOCKS5
npx darknet-mcp-server --check-tor

# Ejecutar cualquier herramienta directamente
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Herramientas que requieren claves API
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Fuentes de Datos (16)

| Fuente | Auth | Limite de Velocidad | Que proporciona |
|--------|------|---------------------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 sol./1.5s | Busqueda de filtraciones, busqueda de pastes, verificacion de contrasenas, listados de filtraciones |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 sol./s | Contenido de la dark web, busqueda de datos filtrados, directorio telefonico (emails/dominios/URLs) |
| [AlienVault OTX](https://otx.alienvault.com) | Opcional | 1 sol./s | Inteligencia de amenazas para IPs, dominios, hashes, CVEs; busqueda de pulsos de amenazas |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 sol./s | Reportes de abuso de IP, puntuacion de confianza, lista negra, verificacion de bloque CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Opcional | 2 sol./s | Busqueda de IOC, seguimiento de familias de malware, busqueda basada en etiquetas |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Opcional | 2 sol./s | Seguimiento de URLs de distribucion de malware, busqueda de host/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Opcional | 2 sol./s | Repositorio de muestras de malware, busqueda por hash, busqueda de firmas YARA |
| [GreyNoise](https://www.greynoise.io) | Ninguno | 1 sol./s | Clasificacion de IP (benigno/malicioso), deteccion de escaneres de internet |
| [Pulsedive](https://pulsedive.com) | Opcional | 1 sol./s | Enriquecimiento de indicadores, puntuacion de riesgo, exploracion de IOCs vinculados |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 sol./s | Busqueda de logs de stealers por dominio, email o IP |
| [Vulners](https://vulners.com) | Opcional | 1 sol./s | Base de datos de vulnerabilidades/exploits, busqueda de CVE, busqueda de ExploitDB |
| [Blockchain.info](https://blockchain.info) | Ninguno | 1 sol./s | Busqueda de direccion Bitcoin, saldo, detalles de transaccion |
| [ChainAbuse](https://www.chainabuse.com) | Ninguno | 1 sol./s | Reportes de abuso/estafa de direcciones Bitcoin |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 sol./s | Detonacion de malware en sandbox, mapeo MITRE ATT&CK, feed de muestras |
| [CIRCL AIL (Consulta Onion)](https://onion.ail-project.org) | Ninguno | 0.5 sol./s | Metadatos de direcciones .onion, primera/ultima vez visto, direcciones BTC asociadas |
| [Red Tor](https://www.torproject.org) | Ninguno | N/A | Lista de nodos de salida, obtencion/extraccion de .onion, busqueda Ahmia.fi |

---

## Arquitectura

```
src/
  index.ts                # Punto de entrada CLI (--help, --list, --check-tor, servidor stdio)
  protocol/
    mcp-server.ts         # Configuracion del servidor MCP (transporte stdio)
    tools.ts              # Registro de herramientas — las 66 herramientas ensambladas aqui
  types/
    index.ts              # Tipos compartidos (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Limitador de velocidad por proveedor
    cache.ts              # Cache TTL para respuestas de API
    tor-fetch.ts          # Cliente HTTP de proxy Tor SOCKS5
    require-key.ts        # Ayudante de validacion de clave API
  tor/                    # Herramientas de Red Tor (7)
  ransomware/             # Herramientas de Inteligencia de Ransomware (9)
  breach/                 # Herramientas de Filtraciones HIBP (7)
  abusech/                # Herramientas ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Herramientas AlienVault OTX (5)
  abuseipdb/              # Herramientas AbuseIPDB (4)
  greynoise/              # Herramientas GreyNoise Community (2)
  pulsedive/              # Herramientas Pulsedive (3)
  hudsonrock/             # Herramientas de logs de stealers Hudson Rock (3)
  vulners/                # Herramientas de exploits Vulners (3)
  blockchain/             # Herramientas de Inteligencia Blockchain (4)
  hybrid/                 # Herramientas de malware Hybrid Analysis (3)
  onionlookup/            # Herramienta de consulta onion CIRCL (1)
  intelx/                 # Herramientas IntelligenceX (4)
  phishing/               # Herramienta PhishTank (1)
  meta/                   # Herramientas Meta (1)
```

**Decisiones de diseno:**

- **16 proveedores, 1 servidor** &mdash; Cada fuente de datos es un modulo independiente. El agente elige que herramientas usar segun la consulta.
- **Limitadores de velocidad por proveedor** &mdash; Cada fuente de datos tiene su propia instancia de `RateLimiter` calibrada a los limites de esa API. Sin cuello de botella compartido.
- **Cache TTL** &mdash; Los datos de ransomware (15min), listas de filtraciones (10min), resultados de abuse.ch (5min) se cachean para evitar llamadas API redundantes durante flujos de trabajo multi-herramienta.
- **Degradacion elegante** &mdash; Las claves API faltantes no hacen que el servidor se caiga. Las herramientas devuelven mensajes de error descriptivos: "Establece HIBP_API_KEY para habilitar la busqueda de cuentas filtradas."
- **Prevencion de fugas DNS** &mdash; Las herramientas Tor .onion usan el protocolo `socks5h://` para resolver DNS a traves de Tor, previniendo fugas DNS al resolver local.
- **4 dependencias** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` y `cheerio`. Todo HTTP clearnet via `fetch` nativo. Todo trafico Tor via SOCKS5.

---

## Limitaciones

- La busqueda de cuentas/pastes de HIBP requiere una clave API de pago ($3.50/mes)
- IntelligenceX, AbuseIPDB, Hudson Rock y Hybrid Analysis requieren claves API para sus herramientas
- Las herramientas Tor .onion requieren un proxy Tor SOCKS5 en ejecucion (no incluido)
- El nivel gratuito de abuse.ch tiene limites de velocidad mas bajos sin `ABUSECH_AUTH_KEY`
- Los datos de Ransomware.live y RansomLook dependen de la frecuencia de scraping upstream
- Las herramientas blockchain solo soportan Bitcoin (sin Ethereum/Monero)
- La base de datos de PhishTank puede quedarse atras respecto a campanas de phishing en tiempo real
- Probado en macOS / Linux (Windows no probado)

---

## Parte de la Suite de Seguridad MCP

| Proyecto | Dominio | Herramientas |
|----------|---------|-------------|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Pruebas de seguridad basadas en navegador | 39 herramientas, Firefox, pruebas de inyeccion |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Seguridad en la nube (AWS/Azure/GCP) | 38 herramientas, 60+ verificaciones |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Postura de seguridad GitHub | 39 herramientas, 45 verificaciones |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Inteligencia de vulnerabilidades | 23 herramientas, 5 fuentes |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT y reconocimiento | 37 herramientas, 12 fuentes |
| **darknet-mcp-server** | **Inteligencia de dark web y amenazas** | **66 herramientas, 16 fuentes** |

---

<p align="center">
<b>Solo para pruebas y evaluaciones de seguridad autorizadas.</b><br>
Siempre asegurate de tener la autorizacion adecuada antes de realizar recopilacion de inteligencia sobre cualquier objetivo.
</p>

<p align="center">
  <a href="LICENSE">Licencia MIT</a> &bull; Construido con Bun + TypeScript
</p>
