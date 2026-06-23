// Shared helper for API key validation
export function requireApiKey(key: string | undefined, provider: string, envVar: string): string {
  if (!key) {
    throw new Error(
      `${provider} API key required. Set ${envVar} environment variable to enable ${provider} tools.`,
    );
  }
  return key;
}
