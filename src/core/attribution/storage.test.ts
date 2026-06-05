import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  ATTRIBUTION_STORAGE_KEY,
  ATTRIBUTION_TTL_MS,
  clearStoredAttribution,
  isStoredAttributionValid,
  readStoredAttribution,
  writeStoredAttribution,
} from './storage';
import type { ResolvedAttribution, StoredAttribution } from './types';

const NOW = 1_700_000_000_000;

class MemoryStorage implements Pick<Storage, 'getItem' | 'removeItem' | 'setItem'> {
  values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }
}

const storedAttribution: StoredAttribution = {
  channel: 'ads',
  source: 'clickid',
  paidPlatform: 'meta',
  landingPath: '/landing',
  clickIds: { fbclid: 'stored_fbclid' },
  utms: { utm_campaign: 'stored_campaign' },
  resolvedAt: NOW - 1_000,
  expiresAt: NOW + 1_000,
};

const adsResolvedAttribution: ResolvedAttribution = {
  channel: 'ads',
  source: 'clickid',
  paidPlatform: 'meta',
  landingPath: '/oferta',
  currentPath: '/oferta',
  clickIds: { fbclid: 'abc' },
  utms: { utm_medium: 'paid' },
  shouldTrackAds: true,
};

const organicResolvedAttribution: ResolvedAttribution = {
  channel: 'organic',
  source: 'default',
  paidPlatform: null,
  landingPath: '/',
  currentPath: '/',
  clickIds: {},
  utms: {},
  shouldTrackAds: false,
};

function stubStorage(): MemoryStorage {
  const storage = new MemoryStorage();
  vi.stubGlobal('window', { localStorage: storage });
  return storage;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('readStoredAttribution', () => {
  it('returns null if window or localStorage is unavailable', () => {
    expect(readStoredAttribution(NOW)).toBeNull();
  });

  it('returns null and clears storage when JSON is corrupt', () => {
    const storage = stubStorage();
    storage.setItem(ATTRIBUTION_STORAGE_KEY, '{bad-json');

    expect(readStoredAttribution(NOW)).toBeNull();
    expect(storage.getItem(ATTRIBUTION_STORAGE_KEY)).toBeNull();
  });

  it('returns null and clears storage when attribution expired', () => {
    const storage = stubStorage();
    storage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify({ ...storedAttribution, expiresAt: NOW - 1 }),
    );

    expect(readStoredAttribution(NOW)).toBeNull();
    expect(storage.getItem(ATTRIBUTION_STORAGE_KEY)).toBeNull();
  });

  it('returns stored attribution when it is valid', () => {
    const storage = stubStorage();
    storage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(storedAttribution));

    expect(readStoredAttribution(NOW)).toEqual(storedAttribution);
  });
});

describe('writeStoredAttribution', () => {
  it('stores ads attribution with a fresh TTL', () => {
    const storage = stubStorage();

    writeStoredAttribution(adsResolvedAttribution, NOW);

    const storedValue = storage.getItem(ATTRIBUTION_STORAGE_KEY);
    expect(storedValue).not.toBeNull();
    expect(JSON.parse(storedValue ?? '')).toEqual({
      channel: 'ads',
      source: 'clickid',
      paidPlatform: 'meta',
      landingPath: '/oferta',
      clickIds: { fbclid: 'abc' },
      utms: { utm_medium: 'paid' },
      resolvedAt: NOW,
      expiresAt: NOW + ATTRIBUTION_TTL_MS,
    });
  });

  it('does not store organic default attribution', () => {
    const storage = stubStorage();

    writeStoredAttribution(organicResolvedAttribution, NOW);

    expect(storage.getItem(ATTRIBUTION_STORAGE_KEY)).toBeNull();
  });

  it('does not renew stored-source attribution', () => {
    const storage = stubStorage();

    writeStoredAttribution(
      {
        ...adsResolvedAttribution,
        source: 'stored',
      },
      NOW,
    );

    expect(storage.getItem(ATTRIBUTION_STORAGE_KEY)).toBeNull();
  });
});

describe('clearStoredAttribution', () => {
  it('removes the attribution key', () => {
    const storage = stubStorage();
    storage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(storedAttribution));

    clearStoredAttribution();

    expect(storage.getItem(ATTRIBUTION_STORAGE_KEY)).toBeNull();
  });
});

describe('isStoredAttributionValid', () => {
  it('checks stored attribution freshness', () => {
    expect(isStoredAttributionValid(storedAttribution, NOW)).toBe(true);
    expect(isStoredAttributionValid({ ...storedAttribution, expiresAt: NOW - 1 }, NOW)).toBe(false);
    expect(isStoredAttributionValid(null, NOW)).toBe(false);
  });
});
