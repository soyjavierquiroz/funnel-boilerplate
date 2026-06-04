import { DNA } from '../../site/current';
import type { VisitorData } from './types';

const VISITOR_STORAGE_KEY = 'visitor_data';

export function normalizeVisitorData(payload: Partial<VisitorData>): VisitorData {
  return {
    ip: payload.ip ?? '',
    city: payload.city ?? '',
    region: payload.region ?? '',
    country_name: payload.country_name ?? '',
    country_code: payload.country_code ?? '',
    timezone: payload.timezone ?? '',
    currency: payload.currency ?? '',
    country_calling_code: payload.country_calling_code ?? '',
  };
}

function readCachedVisitorData(): VisitorData | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const cached = window.sessionStorage.getItem(VISITOR_STORAGE_KEY);

  if (!cached) {
    return null;
  }

  try {
    const parsed = JSON.parse(cached) as VisitorData;
    return normalizeVisitorData(parsed);
  } catch {
    window.sessionStorage.removeItem(VISITOR_STORAGE_KEY);
    return null;
  }
}

export async function fetchVisitorData(): Promise<VisitorData | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  const cachedVisitorData = readCachedVisitorData();

  if (cachedVisitorData) {
    return cachedVisitorData;
  }

  try {
    const response = await fetch(DNA.tracking.visitorApiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Visitor request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as Partial<VisitorData>;
    const normalizedVisitorData = normalizeVisitorData(payload);

    window.sessionStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(normalizedVisitorData));

    return normalizedVisitorData;
  } catch {
    return null;
  }
}
