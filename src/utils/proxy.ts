import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";

/**
 * Honour standard proxy environment variables (HTTPS_PROXY / HTTP_PROXY /
 * ALL_PROXY + lowercase variants, and NO_PROXY) for every outbound request.
 *
 * Node's built-in fetch (undici) ignores these variables unless a dispatcher is
 * installed explicitly. Without this, every clearnet data source fails when the
 * server runs behind a proxy — which is the common setup for the restricted
 * networks this server is usually deployed in (and for anyone routing their
 * threat-intel traffic through a proxy/VPN).
 *
 * No-op when no proxy variable is configured. Tor (.onion) requests keep using
 * their own SocksProxyAgent, which overrides this global dispatcher per-request.
 */
export function installProxySupport(): boolean {
  const env = process.env;
  const configured =
    env.HTTPS_PROXY || env.https_proxy ||
    env.HTTP_PROXY || env.http_proxy ||
    env.ALL_PROXY || env.all_proxy;
  if (!configured) return false;
  setGlobalDispatcher(new EnvHttpProxyAgent());
  return true;
}
