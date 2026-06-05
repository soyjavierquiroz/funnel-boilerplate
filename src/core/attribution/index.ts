import { getAdsRoutePrefix } from '../routing/adsRoute';
import { resolveAttribution } from './resolver';
import { readStoredAttribution, writeStoredAttribution } from './storage';
import type { ResolveAttributionInput, ResolvedAttribution } from './types';

interface LocationLike {
  href?: string;
  pathname: string;
  search?: string;
  hash?: string;
}

function getCurrentBrowserUrl(): string {
  if (typeof window === 'undefined') {
    return '/';
  }

  return window.location.href;
}

function getLocationUrl(location?: LocationLike): string {
  if (!location) {
    return getCurrentBrowserUrl();
  }

  if (location.href) {
    return location.href;
  }

  return `${location.pathname}${location.search ?? ''}${location.hash ?? ''}`;
}

export function resolveCurrentAttribution(location?: LocationLike): ResolvedAttribution {
  const now = Date.now();
  const resolvedAttribution = resolveAttribution({
    url: getLocationUrl(location),
    adsRoutePrefix: getAdsRoutePrefix(),
    storedAttribution: readStoredAttribution(now),
    now,
  });

  writeStoredAttribution(resolvedAttribution, now);

  return resolvedAttribution;
}

export function resolveAttributionChannel(input: ResolveAttributionInput): ResolvedAttribution['channel'] {
  return resolveAttribution(input).channel;
}

export * from './resolver';
export * from './storage';
export * from './types';
