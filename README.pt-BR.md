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
  <strong>Português (Brasil)</strong> |
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

<h3 align="center">Dark web e intelig&ecirc;ncia de amea&ccedil;as para agentes de IA.</h3>

<p align="center">
  HIBP, ThreatFox, rastreamento de ransomware, acesso a sites Tor .onion, intelig&ecirc;ncia blockchain, busca de exploits, logs de stealers, an&aacute;lise de malware &mdash; unificados em um &uacute;nico servidor MCP.<br>
  Seu agente de IA obt&eacute;m <b>intelig&ecirc;ncia completa da dark web sob demanda</b>, n&atilde;o 16 abas de navegador e correla&ccedil;&atilde;o manual.
</p>

<br>

<p align="center">
  <a href="#o-problema">O Problema</a> &bull;
  <a href="#como-%C3%A9-diferente">Como &Eacute; Diferente</a> &bull;
  <a href="#in%C3%ADcio-r%C3%A1pido">In&iacute;cio R&aacute;pido</a> &bull;
  <a href="#o-que-a-ia-pode-fazer">O Que a IA Pode Fazer</a> &bull;
  <a href="#refer%C3%AAncia-de-ferramentas-66-ferramentas">Ferramentas (66)</a> &bull;
  <a href="#fontes-de-dados-16">Fontes de Dados</a> &bull;
  <a href="#arquitetura">Arquitetura</a> &bull;
  <a href="CHANGELOG.md">Changelog</a> &bull;
  <a href="CONTRIBUTING.md">Contribuindo</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/darknet-mcp-server"><img src="https://img.shields.io/npm/v/darknet-mcp-server.svg" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licen&ccedil;a"></a>
  <img src="https://img.shields.io/badge/runtime-Bun-f472b6" alt="Bun">
  <img src="https://img.shields.io/badge/protocol-MCP-8b5cf6" alt="MCP">
  <img src="https://img.shields.io/badge/tools-66-ef4444" alt="66 Ferramentas">
  <img src="https://img.shields.io/badge/sources-16-f97316" alt="16 Fontes">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/badchars/darknet-mcp-server/main/.github/demo.gif" alt="demo do darknet-mcp-server" width="800">
</p>

---

## O Problema

Intelig&ecirc;ncia da dark web &eacute; a camada ausente em toda investiga&ccedil;&atilde;o de seguran&ccedil;a. Bancos de dados de vazamentos, rastreadores de ransomware, servi&ccedil;os ocultos Tor, sandboxes de malware, logs de stealers, forense de blockchain, bancos de dados de exploits &mdash; os dados que voc&ecirc; precisa est&atilde;o espalhados por dezenas de plataformas, cada uma com sua pr&oacute;pria API, sua pr&oacute;pria autentica&ccedil;&atilde;o, seus pr&oacute;prios limites de taxa, seu pr&oacute;prio formato de sa&iacute;da. Hoje voc&ecirc; verifica o HIBP em uma aba, o ThreatFox em outra, navega em sites de vazamento de ransomware pelo Tor, consulta o MalwareBazaar para um hash, verifica transa&ccedil;&otilde;es blockchain em um explorador de blocos, e depois passa uma hora juntando tudo manualmente.

```
Fluxo de trabalho tradicional de inteligência da dark web:
  verificar exposição a vazamentos    ->  interface web do HIBP (API pago)
  buscar credenciais vazadas          ->  interface web do IntelligenceX
  rastrear grupos de ransomware       ->  ransomware.live + ransomlook.io (2 interfaces separadas)
  acessar serviços ocultos .onion     ->  Navegador Tor manualmente
  analisar amostras de malware        ->  Hybrid Analysis + MalwareBazaar (mais 2 interfaces)
  verificar histórico de abuso de IP  ->  AbuseIPDB + GreyNoise (mais 2 interfaces)
  rastrear criptomoedas               ->  blockchain.info + ChainAbuse
  buscar exploits                     ->  interface web do Vulners
  verificar URLs de phishing          ->  interface web do PhishTank
  correlacionar tudo                  ->  copiar e colar em um relatório
  ────────────────────────────────
  Total: 60+ minutos por investigação, a maior parte alternando contextos
```

**darknet-mcp-server** fornece ao seu agente de IA 66 ferramentas em 16 fontes de dados via o [Model Context Protocol](https://modelcontextprotocol.io). O agente consulta todas as fontes em paralelo, correlaciona dados entre a web aberta e a dark web, identifica amea&ccedil;as e apresenta um panorama de intelig&ecirc;ncia unificado &mdash; em uma &uacute;nica conversa.

```
Com darknet-mcp-server:
  Você: "Investigue a exposição a vazamentos e o cenário de ameaças para target.com"

  Agente: -> HIBP: 3 vazamentos conhecidos (Adobe 2013, LinkedIn 2021, Collection #1)
         -> ThreatFox: 2 IOCs associados ao domínio (callback C2, phishing)
         -> URLhaus: 1 URL maliciosa hospedada em subdomínio
         -> Ransomware: Nenhuma listagem de vítimas encontrada (bom)
         -> Logs de stealers: 47 credenciais de funcionários comprometidas encontradas
         -> OTX: 5 pulsos de ameaças referenciando o domínio
         -> AbuseIPDB: IP primário tem 12 relatórios de abuso (força bruta)
         -> "target.com esteve em 3 vazamentos de dados expondo 2,1M registros.
            47 credenciais de funcionários encontradas em logs de stealers — redefinição
            imediata de senhas recomendada. 2 IOCs ativos no ThreatFox sugerem
            direcionamento contínuo. Sem listagens de ransomware, mas os relatórios
            de abuso no IP primário justificam investigação."
```

---

## Como &Eacute; Diferente

Ferramentas existentes fornecem dados brutos de uma fonte por vez. darknet-mcp-server d&aacute; ao seu agente de IA a capacidade de **raciocinar sobre intelig&ecirc;ncia da web aberta e dark web simultaneamente**.

<table>
<thead>
<tr>
<th></th>
<th>Abordagem Tradicional</th>
<th>darknet-mcp-server</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Interface</b></td>
<td>16 interfaces web, CLIs e APIs diferentes</td>
<td>MCP &mdash; agente de IA chama ferramentas conversacionalmente</td>
</tr>
<tr>
<td><b>Fontes de dados</b></td>
<td>Uma plataforma por vez</td>
<td>16 fontes consultadas em paralelo</td>
</tr>
<tr>
<td><b>Intelig&ecirc;ncia de vazamentos</b></td>
<td>Interface web do HIBP para vazamentos, IntelligenceX para leaks</td>
<td>Agente combina vazamentos HIBP + pastes + IntelligenceX + logs de stealers</td>
</tr>
<tr>
<td><b>Acesso &agrave; dark web</b></td>
<td>Navegador Tor manual, copiar e colar de sites .onion</td>
<td>Agente busca, faz scraping e pesquisa sites .onion via proxy SOCKS5</td>
</tr>
<tr>
<td><b>An&aacute;lise de malware</b></td>
<td>Hybrid Analysis + MalwareBazaar + ThreatFox separadamente</td>
<td>Agente faz refer&ecirc;ncia cruzada: &quot;Este hash do ThreatFox tamb&eacute;m foi detonado no Hybrid Analysis com IOCs de rede&quot;</td>
</tr>
<tr>
<td><b>Blockchain</b></td>
<td>Explorador de blocos + ChainAbuse separadamente</td>
<td>Agente rastreia transa&ccedil;&otilde;es BTC e verifica relat&oacute;rios de abuso em um passo</td>
</tr>
<tr>
<td><b>Chaves de API</b></td>
<td>Necess&aacute;rias para quase tudo</td>
<td>Muitas ferramentas funcionam gratuitamente; chaves de API desbloqueiam fontes premium</td>
</tr>
<tr>
<td><b>Configura&ccedil;&atilde;o</b></td>
<td>Instalar cada ferramenta, gerenciar cada configura&ccedil;&atilde;o, executar Navegador Tor</td>
<td><code>npx darknet-mcp-server</code> &mdash; um comando, zero configura&ccedil;&atilde;o</td>
</tr>
</tbody>
</table>

---

## In&iacute;cio R&aacute;pido

### Op&ccedil;&atilde;o 1: npx (sem instala&ccedil;&atilde;o)

```bash
npx darknet-mcp-server
```

Ferramentas gratuitas funcionam imediatamente. Nenhuma chave de API necess&aacute;ria para rastreamento de ransomware, listagens de vazamentos, GreyNoise, blockchain, OTX e mais.

### Op&ccedil;&atilde;o 2: Clone

```bash
git clone https://github.com/badchars/darknet-mcp-server.git
cd darknet-mcp-server
bun install
```

### Vari&aacute;veis de ambiente (opcionais)

```bash
# Inteligência de vazamentos e credenciais
export HIBP_API_KEY=your-key           # Habilita busca de contas em vazamentos e busca de pastes
export INTELX_API_KEY=your-key         # Habilita 4 ferramentas IntelligenceX

# Inteligência de ameaças
export OTX_API_KEY=your-key            # Aumenta limites de taxa do AlienVault OTX
export ABUSEIPDB_API_KEY=your-key      # Habilita 4 ferramentas AbuseIPDB
export ABUSECH_AUTH_KEY=your-key       # Limites de taxa maiores para o conjunto abuse.ch
export PULSEDIVE_API_KEY=your-key      # Limites de taxa maiores para Pulsedive

# Logs de stealers e credenciais
export HUDSONROCK_API_KEY=your-key     # Habilita 3 ferramentas de logs de stealers Hudson Rock

# Análise de exploits e malware
export VULNERS_API_KEY=your-key        # Habilita ferramentas de busca e exploits do Vulners
export HYBRID_API_KEY=your-key         # Habilita 3 ferramentas de malware Hybrid Analysis

# Phishing
export PHISHTANK_API_KEY=your-key      # Limites de taxa maiores para PhishTank

# Proxy Tor SOCKS5 (para acesso .onion)
export TOR_SOCKS_HOST=127.0.0.1       # Padrão: 127.0.0.1
export TOR_SOCKS_PORT=9050            # Padrão: 9050
```

Todas as chaves de API s&atilde;o opcionais. Sem elas, voc&ecirc; ainda tem rastreamento de ransomware, listagens de vazamentos, GreyNoise, intelig&ecirc;ncia blockchain, OTX, verifica&ccedil;&otilde;es de n&oacute;s de sa&iacute;da Tor, busca onion, consulta CIRCL onion e mais.

### Conecte ao seu agente de IA

<details open>
<summary><b>Claude Code</b></summary>

```bash
# Com npx
claude mcp add darknet-mcp-server -- npx darknet-mcp-server

# Com clone local
claude mcp add darknet-mcp-server -- bun run /path/to/darknet-mcp-server/src/index.ts
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Adicione ao `~/Library/Application Support/Claude/claude_desktop_config.json`:

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
<summary><b>Cursor / Windsurf / outros clientes MCP</b></summary>

Mesmo formato de configura&ccedil;&atilde;o JSON. Aponte o comando para `npx darknet-mcp-server` ou o caminho da sua instala&ccedil;&atilde;o local.

</details>

### Configura&ccedil;&atilde;o do Tor (opcional, para acesso .onion)

As 7 ferramentas Tor (`tor_fetch_onion`, `tor_scrape_onion`, etc.) requerem um proxy Tor SOCKS5 em execu&ccedil;&atilde;o.

```bash
# macOS
brew install tor && brew services start tor

# Linux
sudo apt install tor && sudo systemctl start tor

# Docker
docker run -d -p 9050:9050 dperson/torproxy

# Verificar conectividade
npx darknet-mcp-server --check-tor
```

### Comece a consultar

```
Você: "Verifique se example.com esteve em algum vazamento de dados e procure logs de stealers"
```

&Eacute; isso. O agente lida com buscas de vazamentos, pesquisas de credenciais, correla&ccedil;&atilde;o de amea&ccedil;as e mais automaticamente.

---

## O Que a IA Pode Fazer

### Investiga&ccedil;&atilde;o de Vazamentos

```
Você: "Verifique se example.com esteve em algum vazamento de dados"

Agente: -> breachList {domain: "example.com"}
       -> breachSearch {account: "admin@example.com"}
       -> stealer_domain {domain: "example.com"}
       -> intelx_search {term: "example.com"}
       -> "example.com aparece em 5 vazamentos conhecidos:
          - ExampleDB 2023: 4,2M registros (e-mails, senhas, IPs)
          - Collection #1: lista de credential stuffing
          - Combolist 2024: 890K pares e-mail:senha
          Logs de stealers: 23 máquinas comprometidas com credenciais salvas
          para example.com encontradas no banco de dados Hudson Rock.
          IntelligenceX: 47 resultados em sites de paste e dark web."
```

### Rastreamento de Ransomware

```
Você: "Quais grupos de ransomware estão atacando o setor de saúde?"

Agente: -> ransomwareBySector {sector: "healthcare"}
       -> ransomwareRecent {}
       -> ransomlookRecent {}
       -> "Atividade de ransomware no setor de saúde:
          142 vítimas em 12 grupos nos últimos 12 meses.
          Principais grupos: LockBit3 (38 vítimas), BlackCat/ALPHV (24),
          Cl0p (19), Royal (15).
          Mais recente: MedCorp Inc. listada pelo LockBit3 (2 dias atrás).
          3 novas vítimas do setor de saúde na última semana nos
          feeds do ransomware.live e RansomLook."
```

### Reconhecimento na Dark Web

```
Você: "Busque menções da nossa empresa em sites .onion"

Agente: -> tor_search_onion {query: "AcmeCorp"}
       -> intelx_search {term: "acmecorp.com"}
       -> onion_lookup {address: "relevant-onion-address.onion"}
       -> "Resultados de busca na dark web para AcmeCorp:
          Ahmia.fi: 3 páginas .onion mencionam AcmeCorp
          - Post em fórum discutindo lista de funcionários da AcmeCorp (fórum de vazamentos)
          - Listagem em marketplace do banco de dados AcmeCorp (não verificado)
          - Post de blog referenciando vazamento da AcmeCorp
          IntelligenceX: 12 resultados em sites de paste
          Recomendação: investigar o post do fórum e a listagem do marketplace
          para possíveis vendas de dados ativas."
```

### An&aacute;lise de Malware

```
Você: "Analise este hash de arquivo para indicadores de malware: abc123def456..."

Agente: -> malware_search {hash: "abc123def456..."}
       -> malware_overview {sha256: "abc123def456..."}
       -> bazaarHash {hash: "abc123def456..."}
       -> threatfoxSearch {searchTerm: "abc123def456..."}
       -> otx_hash {hash: "abc123def456..."}
       -> "Análise de malware para abc123def456:
          Hybrid Analysis: MALICIOSO (pontuação de ameaça 95/100)
          - Família: AgentTesla (ladrão de informações)
          - MITRE ATT&CK: T1555 (Acesso a Credenciais), T1071 (C2)
          - IOCs de rede: 3 domínios C2, 2 IPs
          MalwareBazaar: Visto pela primeira vez em 2024-03-15, marcado como 'AgentTesla'
          ThreatFox: 2 entradas de IOC ligadas à mesma campanha
          OTX: Referenciado em 4 pulsos de ameaças"
```

---

## Refer&ecirc;ncia de Ferramentas (66 ferramentas)

<details open>
<summary><b>Rede Tor (7) &mdash; Sem chave de API (daemon Tor necess&aacute;rio para ferramentas .onion)</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `tor_status` | Verificar se o daemon do proxy Tor SOCKS5 local est&aacute; em execu&ccedil;&atilde;o e acess&iacute;vel |
| `tor_fetch_onion` | Buscar HTML bruto de uma URL .onion via proxy Tor SOCKS5 (preven&ccedil;&atilde;o de vazamento DNS via socks5h) |
| `tor_scrape_onion` | Buscar e analisar um site .onion &mdash; retorna dados estruturados: t&iacute;tulo, links, texto do corpo |
| `tor_search_onion` | Buscar sites .onion usando o motor de busca Ahmia.fi |
| `tor_exit_nodes` | Obter endere&ccedil;os IP atuais dos n&oacute;s de sa&iacute;da Tor da lista oficial do Tor Project |
| `tor_exit_check` | Verificar se um endere&ccedil;o IP espec&iacute;fico &eacute; um n&oacute; de sa&iacute;da Tor conhecido |
| `tor_exit_details` | Obter informa&ccedil;&otilde;es detalhadas de n&oacute;s de sa&iacute;da Tor incluindo fingerprints e timestamps de publica&ccedil;&atilde;o |

</details>

<details>
<summary><b>Intelig&ecirc;ncia de Ransomware (9) &mdash; Sem chave de API</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `ransomwareRecent` | Buscar as v&iacute;timas de ransomware mais recentes do ransomware.live |
| `ransomwareGroups` | Listar todos os grupos de ransomware conhecidos rastreados pelo ransomware.live |
| `ransomwareGroup` | Obter um perfil detalhado de um grupo de ransomware espec&iacute;fico por nome |
| `ransomwareGroupVictims` | Obter todas as v&iacute;timas reivindicadas por um grupo de ransomware espec&iacute;fico |
| `ransomwareSearch` | Buscar v&iacute;timas de ransomware por palavra-chave (nome da empresa, dom&iacute;nio, etc.) |
| `ransomwareByCountry` | Obter v&iacute;timas de ransomware filtradas por c&oacute;digo de pa&iacute;s ISO 3166-1 alpha-2 |
| `ransomwareBySector` | Obter v&iacute;timas de ransomware filtradas por setor/ind&uacute;stria (sa&uacute;de, finan&ccedil;as, etc.) |
| `ransomlookGroups` | Listar todos os 582+ grupos de ransomware rastreados pelo RansomLook |
| `ransomlookRecent` | Buscar as postagens e reivindica&ccedil;&otilde;es de v&iacute;timas de ransomware mais recentes do RansomLook |

</details>

<details>
<summary><b>Intelig&ecirc;ncia de Vazamentos &mdash; HIBP (7) &mdash; Parcial: algumas ferramentas gratuitas, busca de contas requer HIBP_API_KEY</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `breachList` | Listar todos os vazamentos de dados conhecidos do HaveIBeenPwned, opcionalmente filtrar por dom&iacute;nio &mdash; gratuito |
| `breachGet` | Obter detalhes de um vazamento de dados espec&iacute;fico por nome &mdash; gratuito |
| `breachLatest` | Obter o vazamento de dados adicionado mais recentemente &mdash; gratuito |
| `breachDataClasses` | Listar todas as classes de dados (tipos de dados comprometidos) conhecidas pelo HIBP &mdash; gratuito |
| `breachPassword` | Verificar se uma senha apareceu em vazamentos conhecidos (k-anonymity, apenas prefixo de 5 caracteres SHA-1 enviado) &mdash; gratuito |
| `breachSearch` | Buscar em todos os vazamentos por uma conta espec&iacute;fica (e-mail/nome de usu&aacute;rio) &mdash; requer `HIBP_API_KEY` |
| `breachPastes` | Buscar um endere&ccedil;o de e-mail em pastes publicados publicamente &mdash; requer `HIBP_API_KEY` |

</details>

<details>
<summary><b>Conjunto abuse.ch (9) &mdash; Sem chave de API (ABUSECH_AUTH_KEY opcional para taxa maior)</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `threatfoxGetIocs` | Obter IOCs recentes do ThreatFox reportados nos &uacute;ltimos N dias |
| `threatfoxSearch` | Buscar IOCs do ThreatFox por IP, dom&iacute;nio, hash ou URL |
| `threatfoxTag` | Buscar IOCs do ThreatFox por tag (ex.: Cobalt Strike, Emotet) |
| `threatfoxMalware` | Buscar IOCs do ThreatFox por fam&iacute;lia de malware usando nomenclatura Malpedia |
| `urlhausLookup` | Consultar uma URL ou host no URLhaus para distribui&ccedil;&atilde;o de malware |
| `urlhausTag` | Buscar entradas do URLhaus por tag |
| `bazaarHash` | Consultar uma amostra de malware no MalwareBazaar por hash MD5, SHA1 ou SHA256 |
| `bazaarRecent` | Obter as amostras de malware enviadas mais recentemente do MalwareBazaar |
| `bazaarTag` | Buscar no MalwareBazaar por tag ou nome de assinatura YARA |

</details>

<details>
<summary><b>AlienVault OTX (5) &mdash; Sem chave de API (OTX_API_KEY opcional para taxa maior)</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `otx_ip` | Consultar intelig&ecirc;ncia de amea&ccedil;as para um endere&ccedil;o IP &mdash; info de pulso, reputa&ccedil;&atilde;o, pa&iacute;s, ASN |
| `otx_domain` | Consultar intelig&ecirc;ncia de amea&ccedil;as para um dom&iacute;nio &mdash; info de pulso, whois, reputa&ccedil;&atilde;o |
| `otx_hash` | Consultar intelig&ecirc;ncia de amea&ccedil;as para um hash de arquivo (MD5, SHA1, SHA256) |
| `otx_cve` | Consultar intelig&ecirc;ncia de amea&ccedil;as para uma CVE &mdash; pulsos e indicadores relacionados |
| `otx_search_pulses` | Buscar pulsos de amea&ccedil;as OTX por palavra-chave |

</details>

<details>
<summary><b>AbuseIPDB (4) &mdash; Requer ABUSEIPDB_API_KEY</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `abuseipdb_check` | Verificar um endere&ccedil;o IP para relat&oacute;rios de abuso &mdash; pontua&ccedil;&atilde;o de confian&ccedil;a, ISP, pa&iacute;s, contagem de relat&oacute;rios |
| `abuseipdb_reports` | Obter relat&oacute;rios individuais de abuso para um IP com coment&aacute;rios e categorias detalhadas |
| `abuseipdb_blacklist` | Obter a lista negra do AbuseIPDB dos endere&ccedil;os IP maliciosos mais reportados |
| `abuseipdb_check_block` | Verificar um bloco de rede CIDR inteiro para relat&oacute;rios de abuso |

</details>

<details>
<summary><b>GreyNoise Community (2) &mdash; Sem chave de API</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `greynoise_ip` | Consultar um IP no GreyNoise &mdash; classifica&ccedil;&atilde;o (benigno/malicioso/desconhecido), status de scanner |
| `greynoise_check` | Verifica&ccedil;&atilde;o r&aacute;pida: este IP &eacute; um scanner conhecido ou servi&ccedil;o benigno conhecido? |

</details>

<details>
<summary><b>Pulsedive (3) &mdash; Sem chave de API (PULSEDIVE_API_KEY opcional para taxa maior)</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `pulsedive_indicator` | Consultar um indicador (IP, dom&iacute;nio, URL ou hash) &mdash; n&iacute;vel de risco, amea&ccedil;as, feeds |
| `pulsedive_search` | Buscar indicadores Pulsedive por valor |
| `pulsedive_explore` | Explorar indicadores vinculados usando consultas avan&ccedil;adas (IOCs relacionados com n&iacute;veis de risco) |

</details>

<details>
<summary><b>Hudson Rock Logs de Stealers (3) &mdash; Requer HUDSONROCK_API_KEY</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `stealer_domain` | Buscar entradas de logs de stealers por dom&iacute;nio &mdash; m&aacute;quinas comprometidas, credenciais, detalhes de malware |
| `stealer_email` | Buscar logs de stealers por endere&ccedil;o de e-mail &mdash; m&aacute;quinas comprometidas com esse e-mail nas credenciais do navegador |
| `stealer_ip` | Buscar logs de stealers por endere&ccedil;o IP &mdash; m&aacute;quinas comprometidas originadas desse IP |

</details>

<details>
<summary><b>Vulners Exploits (3) &mdash; Sem chave de API (VULNERS_API_KEY opcional para busca)</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `vulners_search` | Buscar no banco de dados de vulnerabilidades Vulners usando consultas Lucene |
| `vulners_id` | Consultar uma vulnerabilidade ou exploit espec&iacute;fico por ID (CVE, EDB, GHSA) &mdash; gratuito |
| `vulners_exploit` | Buscar especificamente por exploits (entradas ExploitDB) |

</details>

<details>
<summary><b>Intelig&ecirc;ncia Blockchain (4) &mdash; Sem chave de API</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `btc_address` | Consultar um endere&ccedil;o Bitcoin &mdash; saldo, contagem de transa&ccedil;&otilde;es, transa&ccedil;&otilde;es recentes |
| `btc_balance` | Obter saldo de endere&ccedil;o Bitcoin em satoshi (verifica&ccedil;&atilde;o r&aacute;pida sem hist&oacute;rico completo) |
| `btc_tx` | Obter informa&ccedil;&otilde;es detalhadas de transa&ccedil;&atilde;o Bitcoin por hash &mdash; entradas, sa&iacute;das, taxas, info do bloco |
| `btc_abuse_check` | Verificar um endere&ccedil;o Bitcoin para relat&oacute;rios de abuso no ChainAbuse &mdash; relat&oacute;rios de golpe com categorias |

</details>

<details>
<summary><b>Hybrid Analysis Malware (3) &mdash; Requer HYBRID_API_KEY</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `malware_search` | Buscar no sandbox Hybrid Analysis por hash de arquivo &mdash; veredito, taxa de detec&ccedil;&atilde;o AV, detalhes da an&aacute;lise |
| `malware_overview` | Vis&atilde;o geral completa da an&aacute;lise de malware &mdash; t&eacute;cnicas MITRE ATT&CK, indicadores de rede, processos |
| `malware_feed` | Obter o feed mais recente de detona&ccedil;&atilde;o de malware &mdash; amostras analisadas recentemente com vereditos |

</details>

<details>
<summary><b>CIRCL Onion Lookup (1) &mdash; Sem chave de API</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `onion_lookup` | Consultar metadados de um endere&ccedil;o .onion via projeto CIRCL AIL &mdash; primeiro/&uacute;ltimo visto, status, tags, certificados, portas, endere&ccedil;os BTC |

</details>

<details>
<summary><b>IntelligenceX (4) &mdash; Requer INTELX_API_KEY</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `intelx_search` | Iniciar uma busca no IntelligenceX por dados vazados, conte&uacute;do da dark web e mais |
| `intelx_search_results` | Recuperar resultados de uma busca IntelligenceX por ID |
| `intelx_phonebook` | Busca de cat&aacute;logo telef&ocirc;nico &mdash; encontrar e-mails, dom&iacute;nios, URLs associados a um termo |
| `intelx_phonebook_results` | Recuperar resultados de busca de cat&aacute;logo telef&ocirc;nico por ID |

</details>

<details>
<summary><b>PhishTank (1) &mdash; Sem chave de API (PHISHTANK_API_KEY opcional para taxa maior)</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `phishing_check` | Verificar se uma URL &eacute; um site de phishing conhecido via PhishTank |

</details>

<details>
<summary><b>Meta (1) &mdash; Sem chave de API</b></summary>

| Ferramenta | Descri&ccedil;&atilde;o |
|------|-------------|
| `darknet_list_sources` | Listar todas as fontes de dados dispon&iacute;veis com status de configura&ccedil;&atilde;o, status de chave de API e contagem de ferramentas |

</details>

---

### Uso via CLI

```bash
# Listar todas as ferramentas disponíveis
npx darknet-mcp-server --list

# Verificar conectividade do proxy Tor SOCKS5
npx darknet-mcp-server --check-tor

# Executar qualquer ferramenta diretamente
npx darknet-mcp-server --tool breachList '{"domain":"adobe.com"}'
npx darknet-mcp-server --tool ransomwareRecent '{}'
npx darknet-mcp-server --tool tor_search_onion '{"query":"marketplace"}'
npx darknet-mcp-server --tool btc_address '{"address":"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}'

# Ferramentas que requerem chaves de API
HIBP_API_KEY=your-key npx darknet-mcp-server --tool breachSearch '{"account":"user@example.com"}'
HYBRID_API_KEY=your-key npx darknet-mcp-server --tool malware_search '{"hash":"abc123..."}'
```

---

## Fontes de Dados (16)

| Fonte | Autentica&ccedil;&atilde;o | Limite de Taxa | O que fornece |
|--------|------|-----------|-----------------|
| [Have I Been Pwned](https://haveibeenpwned.com) | `HIBP_API_KEY` | 1 req/1,5s | Busca de vazamentos, busca de pastes, verifica&ccedil;&atilde;o de senhas, listagens de vazamentos |
| [IntelligenceX](https://intelx.io) | `INTELX_API_KEY` | 1 req/s | Conte&uacute;do da dark web, busca de dados vazados, cat&aacute;logo telef&ocirc;nico (e-mails/dom&iacute;nios/URLs) |
| [AlienVault OTX](https://otx.alienvault.com) | Opcional | 1 req/s | Intelig&ecirc;ncia de amea&ccedil;as para IPs, dom&iacute;nios, hashes, CVEs; busca de pulsos de amea&ccedil;as |
| [AbuseIPDB](https://www.abuseipdb.com) | `ABUSEIPDB_API_KEY` | 1 req/s | Relat&oacute;rios de abuso de IP, pontua&ccedil;&atilde;o de confian&ccedil;a, lista negra, verifica&ccedil;&atilde;o de bloco CIDR |
| [abuse.ch (ThreatFox)](https://threatfox.abuse.ch) | Opcional | 2 req/s | Busca de IOC, rastreamento de fam&iacute;lias de malware, busca por tags |
| [abuse.ch (URLhaus)](https://urlhaus.abuse.ch) | Opcional | 2 req/s | Rastreamento de URLs de distribui&ccedil;&atilde;o de malware, consulta de host/URL |
| [abuse.ch (MalwareBazaar)](https://bazaar.abuse.ch) | Opcional | 2 req/s | Reposit&oacute;rio de amostras de malware, consulta por hash, busca de assinaturas YARA |
| [GreyNoise](https://www.greynoise.io) | Nenhuma | 1 req/s | Classifica&ccedil;&atilde;o de IP (benigno/malicioso), detec&ccedil;&atilde;o de scanners de internet |
| [Pulsedive](https://pulsedive.com) | Opcional | 1 req/s | Enriquecimento de indicadores, pontua&ccedil;&atilde;o de risco, explora&ccedil;&atilde;o de IOCs vinculados |
| [Hudson Rock Cavalier](https://cavalier.hudsonrock.com) | `HUDSONROCK_API_KEY` | 1 req/s | Busca de logs de stealers por dom&iacute;nio, e-mail ou IP |
| [Vulners](https://vulners.com) | Opcional | 1 req/s | Banco de dados de vulnerabilidades/exploits, consulta CVE, busca ExploitDB |
| [Blockchain.info](https://blockchain.info) | Nenhuma | 1 req/s | Consulta de endere&ccedil;os Bitcoin, saldo, detalhes de transa&ccedil;&otilde;es |
| [ChainAbuse](https://www.chainabuse.com) | Nenhuma | 1 req/s | Relat&oacute;rios de abuso/golpe de endere&ccedil;os Bitcoin |
| [Hybrid Analysis](https://hybrid-analysis.com) | `HYBRID_API_KEY` | 1 req/s | Detona&ccedil;&atilde;o de malware em sandbox, mapeamento MITRE ATT&CK, feed de amostras |
| [CIRCL AIL (Onion Lookup)](https://onion.ail-project.org) | Nenhuma | 0,5 req/s | Metadados de endere&ccedil;os .onion, primeiro/&uacute;ltimo visto, endere&ccedil;os BTC associados |
| [Tor Network](https://www.torproject.org) | Nenhuma | N/A | Lista de n&oacute;s de sa&iacute;da, busca/scraping de .onion, busca Ahmia.fi |

---

## Arquitetura

```
src/
  index.ts                # Ponto de entrada CLI (--help, --list, --check-tor, servidor stdio)
  protocol/
    mcp-server.ts         # Configuração do servidor MCP (transporte stdio)
    tools.ts              # Registro de ferramentas — todas as 66 ferramentas montadas aqui
  types/
    index.ts              # Tipos compartilhados (ToolDef, ToolContext, ToolResult)
  utils/
    rate-limiter.ts       # Limitador de taxa por provedor
    cache.ts              # Cache TTL para respostas de API
    tor-fetch.ts          # Cliente HTTP do proxy Tor SOCKS5
    require-key.ts        # Auxiliar de validação de chave de API
  tor/                    # Ferramentas da Rede Tor (7)
  ransomware/             # Ferramentas de Inteligência de Ransomware (9)
  breach/                 # Ferramentas de Vazamentos HIBP (7)
  abusech/                # Ferramentas ThreatFox + URLhaus + MalwareBazaar (9)
  otx/                    # Ferramentas AlienVault OTX (5)
  abuseipdb/              # Ferramentas AbuseIPDB (4)
  greynoise/              # Ferramentas GreyNoise Community (2)
  pulsedive/              # Ferramentas Pulsedive (3)
  hudsonrock/             # Ferramentas de logs de stealers Hudson Rock (3)
  vulners/                # Ferramentas de exploits Vulners (3)
  blockchain/             # Ferramentas de Inteligência Blockchain (4)
  hybrid/                 # Ferramentas de malware Hybrid Analysis (3)
  onionlookup/            # Ferramenta CIRCL Onion Lookup (1)
  intelx/                 # Ferramentas IntelligenceX (4)
  phishing/               # Ferramenta PhishTank (1)
  meta/                   # Ferramentas Meta (1)
```

**Decis&otilde;es de design:**

- **16 provedores, 1 servidor** &mdash; Cada fonte de dados &eacute; um m&oacute;dulo independente. O agente escolhe quais ferramentas usar com base na consulta.
- **Limitadores de taxa por provedor** &mdash; Cada fonte de dados tem sua pr&oacute;pria inst&acirc;ncia de `RateLimiter` calibrada para os limites daquela API. Sem gargalo compartilhado.
- **Cache TTL** &mdash; Dados de ransomware (15 min), listas de vazamentos (10 min), resultados abuse.ch (5 min) s&atilde;o cacheados para evitar chamadas de API redundantes durante fluxos de trabalho multi-ferramentas.
- **Degrada&ccedil;&atilde;o graciosa** &mdash; Chaves de API ausentes n&atilde;o derrubam o servidor. Ferramentas retornam mensagens de erro descritivas: &quot;Defina HIBP_API_KEY para habilitar busca de contas em vazamentos.&quot;
- **Preven&ccedil;&atilde;o de vazamento DNS** &mdash; Ferramentas Tor .onion usam o protocolo `socks5h://` para resolver DNS atrav&eacute;s do Tor, prevenindo vazamentos DNS para o resolver local.
- **4 depend&ecirc;ncias** &mdash; `@modelcontextprotocol/sdk`, `zod`, `socks-proxy-agent` e `cheerio`. Todo HTTP clearnet via `fetch` nativo. Todo tr&aacute;fego Tor via SOCKS5.

---

## Limita&ccedil;&otilde;es

- Busca de contas/pastes no HIBP requer uma chave de API paga ($3,50/m&ecirc;s)
- IntelligenceX, AbuseIPDB, Hudson Rock e Hybrid Analysis requerem chaves de API para suas ferramentas
- Ferramentas Tor .onion requerem um proxy Tor SOCKS5 em execu&ccedil;&atilde;o (n&atilde;o inclu&iacute;do)
- Tier gratuito do abuse.ch tem limites de taxa menores sem `ABUSECH_AUTH_KEY`
- Dados do Ransomware.live e RansomLook dependem da frequ&ecirc;ncia de scraping upstream
- Ferramentas blockchain suportam apenas Bitcoin (sem Ethereum/Monero)
- Banco de dados do PhishTank pode estar atrasado em rela&ccedil;&atilde;o a campanhas de phishing em tempo real
- macOS / Linux testados (Windows n&atilde;o testado)

---

## Parte do Conjunto de Seguran&ccedil;a MCP

| Projeto | Dom&iacute;nio | Ferramentas |
|---|---|---|
| [hackbrowser-mcp](https://github.com/badchars/hackbrowser-mcp) | Testes de seguran&ccedil;a baseados em navegador | 39 ferramentas, Firefox, testes de inje&ccedil;&atilde;o |
| [cloud-audit-mcp](https://github.com/badchars/cloud-audit-mcp) | Seguran&ccedil;a na nuvem (AWS/Azure/GCP) | 38 ferramentas, 60+ verifica&ccedil;&otilde;es |
| [github-security-mcp](https://github.com/badchars/github-security-mcp) | Postura de seguran&ccedil;a do GitHub | 39 ferramentas, 45 verifica&ccedil;&otilde;es |
| [cve-mcp](https://github.com/badchars/cve-mcp) | Intelig&ecirc;ncia de vulnerabilidades | 23 ferramentas, 5 fontes |
| [osint-mcp-server](https://github.com/badchars/osint-mcp-server) | OSINT e reconhecimento | 37 ferramentas, 12 fontes |
| **darknet-mcp-server** | **Dark web e intelig&ecirc;ncia de amea&ccedil;as** | **66 ferramentas, 16 fontes** |

---

<p align="center">
<b>Apenas para testes e avalia&ccedil;&otilde;es de seguran&ccedil;a autorizados.</b><br>
Sempre garanta que voc&ecirc; tem a devida autoriza&ccedil;&atilde;o antes de realizar coleta de intelig&ecirc;ncia em qualquer alvo.
</p>

<p align="center">
  <a href="LICENSE">Licen&ccedil;a MIT</a> &bull; Constru&iacute;do com Bun + TypeScript
</p>
