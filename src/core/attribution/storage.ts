import { isStoredAttributionFresh } from './resolver';
import type { ResolvedAttribution, StoredAttribution } from './types';

export const ATTRIBUTION_STORAGE_KEY = 'funnel_attribution';
export const ATTRIBUTION_TTL_MS = 30 * 24 * 60 * 60 * 1000;

function getLocalStorage(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function parseSource(value: unknown): StoredAttribution['source'] {
  return value === 'route' || value === 'clickid' || value === 'utm' || value === 'stored'
    ? value
    : 'stored';
}

function parsePaidPlatform(value: unknown): StoredAttribution['paidPlatform'] {
  return value === 'meta' || value === 'tiktok' || value === 'google' ? value : null;
}

function parseClickIds(value: unknown): StoredAttribution['clickIds'] {
  if (!isRecord(value)) {
    return {};
  }

  return {
    fbclid: typeof value.fbclid === 'string' ? value.fbclid : undefined,
    ttclid: typeof value.ttclid === 'string' ? value.ttclid : undefined,
    gclid: typeof value.gclid === 'string' ? value.gclid : undefined,
  };
}

function parseUtms(value: unknown): Record<string, string> {
  if (!isRecord(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string'),
  );
}

function parseStoredAttribution(value: unknown): StoredAttribution | null {
  if (!isRecord(value)) {
    return null;
  }

  if (value.channel !== 'ads' || typeof value.landingPath !== 'string') {
    return null;
  }

  if (typeof value.resolvedAt !== 'number' || typeof value.expiresAt !== 'number') {
    return null;
  }

  return {
    channel: 'ads',
    source: parseSource(value.source),
    paidPlatform: parsePaidPlatform(value.paidPlatform),
    landingPath: value.landingPath,
    clickIds: parseClickIds(value.clickIds),
    utms: parseUtms(value.utms),
    resolvedAt: value.resolvedAt,
    expiresAt: value.expiresAt,
  };
}

export function isStoredAttributionValid(
  storedAttribution: StoredAttribution | null | undefined,
  now = Date.now(),
): storedAttribution is StoredAttribution {
  return isStoredAttributionFresh(storedAttribution, now);
}

export function readStoredAttribution(now = Date.now()): StoredAttribution | null {
  const storage = getLocalStorage();

  if (!storage) {
    return null;
  }

  try {
    const rawValue = storage.getItem(ATTRIBUTION_STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    const storedAttribution = parseStoredAttribution(JSON.parse(rawValue));

    if (!isStoredAttributionValid(storedAttribution, now)) {
      storage.removeItem(ATTRIBUTION_STORAGE_KEY);
      return null;
    }

    return storedAttribution;
  } catch {
    try {
      storage.removeItem(ATTRIBUTION_STORAGE_KEY);
    } catch {
      // Ignore storage cleanup failures.
    }

    return null;
  }
}

export function writeStoredAttribution(resolved: ResolvedAttribution, now = Date.now()): void {
  if (resolved.channel !== 'ads' || resolved.source === 'stored') {
    return;
  }

  const storage = getLocalStorage();

  if (!storage) {
    return;
  }

  const storedAttribution: StoredAttribution = {
    channel: 'ads',
    source: resolved.source === 'default' ? 'stored' : resolved.source,
    paidPlatform: resolved.paidPlatform,
    landingPath: resolved.landingPath,
    clickIds: resolved.clickIds,
    utms: resolved.utms,
    resolvedAt: now,
    expiresAt: now + ATTRIBUTION_TTL_MS,
  };

  try {
    storage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(storedAttribution));
  } catch {
    // Ignore storage quota and privacy-mode errors.
  }
}

export function clearStoredAttribution(): void {
  const storage = getLocalStorage();

  if (!storage) {
    return;
  }

  try {
    storage.removeItem(ATTRIBUTION_STORAGE_KEY);
  } catch {
    // Ignore storage cleanup failures.
  }
}
