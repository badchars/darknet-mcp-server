// Queue-based rate limiter — ensures minimum delay between requests
export class RateLimiter {
  private lastRequest = 0;
  private queue: (() => void)[] = [];
  private processing = false;

  constructor(private minDelayMs: number) {}

  async acquire(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.queue.push(resolve);
      if (!this.processing) this.processQueue();
    });
  }

  private async processQueue(): Promise<void> {
    this.processing = true;
    while (this.queue.length > 0) {
      const now = Date.now();
      const elapsed = now - this.lastRequest;
      if (elapsed < this.minDelayMs) {
        await sleep(this.minDelayMs - elapsed);
      }
      this.lastRequest = Date.now();
      const resolve = this.queue.shift();
      resolve?.();
    }
    this.processing = false;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
