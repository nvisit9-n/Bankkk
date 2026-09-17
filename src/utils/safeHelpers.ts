/**
 * Safe Browser API Helpers
 * Protects against iframe permission denials, sandbox restrictions, and localStorage quota/access exceptions.
 */

const memoryStore = new Map<string, string>();

export const safeStorage = {
  getItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch (e) {
      // Storage blocked or inaccessible in sandbox
    }
    return memoryStore.get(key) ?? null;
  },

  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
        window.localStorage.setItem(key, value);
        return;
      }
    } catch (e) {
      // Storage blocked or quota exceeded
    }
    memoryStore.set(key, value);
  },

  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && 'localStorage' in window && window.localStorage) {
        window.localStorage.removeItem(key);
        return;
      }
    } catch (e) {
      // Storage blocked
    }
    memoryStore.delete(key);
  },

  /**
   * Safely reads and parses JSON from storage with a reliable fallback
   */
  getJSON<T>(key: string, fallback: T): T {
    try {
      const raw = this.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed !== null && parsed !== undefined ? (parsed as T) : fallback;
    } catch (e) {
      console.warn(`safeStorage.getJSON parsing failure for key "${key}":`, e);
      return fallback;
    }
  },

  /**
   * Safely serializes and saves an object to storage
   */
  setJSON<T>(key: string, value: T): boolean {
    try {
      const serialized = JSON.stringify(value);
      this.setItem(key, serialized);
      return true;
    } catch (e) {
      console.error(`safeStorage.setJSON serialization failure for key "${key}":`, e);
      return false;
    }
  }
};

/**
 * Safely parses any JSON string with guarantee of never throwing
 */
export function safeJsonParse<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw || typeof raw !== 'string') return fallback;
  try {
    const parsed = JSON.parse(raw);
    return parsed !== null && parsed !== undefined ? (parsed as T) : fallback;
  } catch {
    return fallback;
  }
}

/**
 * Copies text to clipboard safely with fallback for sandboxed iframes
 */
export async function safeCopyToClipboard(text: string): Promise<boolean> {
  if (!text) return false;

  // 1. Try modern async Clipboard API
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    // Clipboard permission denied in iframe
  }

  // 2. Try legacy execCommand fallback
  try {
    if (typeof document !== 'undefined') {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      textarea.style.top = '-999999px';
      textarea.setAttribute('readonly', '');
      document.body.appendChild(textarea);
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    }
  } catch (fallbackErr) {
    // ignore
  }

  return false;
}
