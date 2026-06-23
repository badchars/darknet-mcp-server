// Blockchain Intelligence — Bitcoin address, transaction, and abuse checking
// Tools: btcAddress, btcBalance, btcTx, btcAbuseCheck

import { RateLimiter } from "../utils/rate-limiter.js";
import { TTLCache } from "../utils/cache.js";

// ─── Types ───

export interface BtcTransaction {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  size: number;
  weight: number;
  fee: number;
  lock_time: number;
  block_height: number;
  block_index: number;
  time: number;
  result: number;
  balance: number;
  inputs: {
    prev_out: {
      addr: string;
      value: number;
      spent: boolean;
      script: string;
    };
    script: string;
    sequence: number;
  }[];
  out: {
    addr: string;
    value: number;
    spent: boolean;
    script: string;
  }[];
  [key: string]: unknown;
}

export interface BtcAddressResponse {
  hash160: string;
  address: string;
  n_tx: number;
  n_unredeemed: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
  txs: BtcTransaction[];
}

export interface BtcBalanceResponse {
  [address: string]: {
    final_balance: number;
    n_tx: number;
    total_received: number;
  };
}

export interface BtcTxResponse {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  size: number;
  weight: number;
  fee: number;
  lock_time: number;
  block_height: number;
  block_index: number;
  time: number;
  inputs: {
    prev_out: {
      addr: string;
      value: number;
      spent: boolean;
      script: string;
    };
    script: string;
    sequence: number;
  }[];
  out: {
    addr: string;
    value: number;
    spent: boolean;
    script: string;
    n: number;
  }[];
  [key: string]: unknown;
}

export interface ChainAbuseReport {
  id: string;
  address: string;
  chain: string;
  description: string;
  category: string;
  createdAt: string;
  scamType: string;
  [key: string]: unknown;
}

export interface ChainAbuseResponse {
  reports: ChainAbuseReport[];
  count: number;
}

// ─── Rate Limiter & Cache ───

const limiter = new RateLimiter(500);
const cache = new TTLCache<unknown>(5 * 60 * 1000); // 5 min

// ─── Helpers ───

async function blockchainFetch<T>(url: string): Promise<T> {
  const cacheKey = `blockchain:${url}`;
  const cached = cache.get(cacheKey) as T | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Blockchain API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as T;
  cache.set(cacheKey, data);
  return data;
}

// ─── 1. btcAddress — Get Bitcoin address info with recent transactions ───

export async function btcAddress(address: string): Promise<BtcAddressResponse> {
  return blockchainFetch<BtcAddressResponse>(
    `https://blockchain.info/rawaddr/${encodeURIComponent(address)}?limit=50`,
  );
}

// ─── 2. btcBalance — Get Bitcoin address balance in satoshi ───

export async function btcBalance(
  address: string,
): Promise<BtcBalanceResponse> {
  return blockchainFetch<BtcBalanceResponse>(
    `https://blockchain.info/balance?active=${encodeURIComponent(address)}`,
  );
}

// ─── 3. btcTx — Get Bitcoin transaction details ───

export async function btcTx(txhash: string): Promise<BtcTxResponse> {
  return blockchainFetch<BtcTxResponse>(
    `https://blockchain.info/rawtx/${encodeURIComponent(txhash)}`,
  );
}

// ─── 4. btcAbuseCheck — Check address for abuse reports on ChainAbuse ───

export async function btcAbuseCheck(address: string): Promise<ChainAbuseResponse> {
  const cacheKey = `chainabuse:${address}`;
  const cached = cache.get(cacheKey) as ChainAbuseResponse | undefined;
  if (cached) return cached;

  await limiter.acquire();

  const params = new URLSearchParams({ address });
  const response = await fetch(
    `https://api.chainabuse.com/v0/reports?${params.toString()}`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    // ChainAbuse may return 404 for unknown addresses — treat as empty
    if (response.status === 404) {
      const empty: ChainAbuseResponse = { reports: [], count: 0 };
      cache.set(cacheKey, empty);
      return empty;
    }
    const body = await response.text().catch(() => "");
    throw new Error(`ChainAbuse API error: HTTP ${response.status} ${response.statusText} — ${body}`);
  }

  const data = (await response.json()) as ChainAbuseResponse;
  cache.set(cacheKey, data);
  return data;
}
