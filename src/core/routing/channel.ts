import { isAdsRoutePath } from './adsRoute';
import { resolveAttribution } from '../attribution';
import type { TrafficChannel } from '../attribution';

export type { TrafficChannel } from '../attribution';

export function isAdsRoute(pathname: string): boolean {
  return isAdsRoutePath(pathname);
}

function includesAttributionSignals(value: string): boolean {
  return value.includes('?') || value.startsWith('http://') || value.startsWith('https://');
}

/**
 * Compatibility helper for older route-only callers.
 *
 * New tracking and capture decisions should use `resolveCurrentAttribution`
 * or `resolveAttribution` so click IDs, UTMs, and stored attribution are
 * included. Plain pathname strings here fall back to ads-route matching only.
 */
export function getTrafficChannel(pathnameOrUrl: string | URL): TrafficChannel {
  if (pathnameOrUrl instanceof URL) {
    return resolveAttribution({ url: pathnameOrUrl }).channel;
  }

  if (includesAttributionSignals(pathnameOrUrl)) {
    return resolveAttribution({ url: pathnameOrUrl }).channel;
  }

  return isAdsRoute(pathnameOrUrl) ? 'ads' : 'organic';
}

export function resolveTrafficChannel(pathnameOrUrl: string | URL): TrafficChannel {
  return getTrafficChannel(pathnameOrUrl);
}
