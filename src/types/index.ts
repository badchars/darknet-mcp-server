import type { z } from "zod";

// ─── MCP Tool Infrastructure ───

export interface ToolDef {
  name: string;
  description: string;
  schema: Record<string, z.ZodType>;
  execute: (args: Record<string, unknown>, ctx: ToolContext) => Promise<ToolResult>;
}

export interface ToolContext {
  config: {
    // Breach & Intel
    hibpApiKey?: string;
    intelxApiKey?: string;
    // Threat Intel
    otxApiKey?: string;
    abuseipdbApiKey?: string;
    abusechAuthKey?: string;
    pulsediveApiKey?: string;
    // Stealer & Credentials
    hudsonrockApiKey?: string;
    // Exploit & Malware
    vulnersApiKey?: string;
    hybridApiKey?: string;
    // Phishing
    phishtankApiKey?: string;
    // Tor
    torSocksHost: string;
    torSocksPort: number;
  };
}

export interface ToolResult {
  [key: string]: unknown;
  content: { type: "text"; text: string }[];
}

// ─── Response Helpers ───

export function text(msg: string): ToolResult {
  return { content: [{ type: "text", text: msg }] };
}

export function json(data: unknown): ToolResult {
  return text(JSON.stringify(data, null, 2));
}
