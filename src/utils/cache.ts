// Simple in-memory TTL cache
export class TTLCache<T> {
  private store = new Map<string, { value: T; expires: number }>();

  constructor(private ttlMs: number) {}

  get(key: string): T | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expires) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }

  set(key: string, value: T): void {
    this.store.set(key, { value, expires: Date.now() + this.ttlMs });
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  clear(): void {
    this.store.clear();
  }

  get size(): number {
    for (const [key, entry] of this.store) {
      if (Date.now() > entry.expires) this.store.delete(key);
    }
    return this.store.size;
  }
}
