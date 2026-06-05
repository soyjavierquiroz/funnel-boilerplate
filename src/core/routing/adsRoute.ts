export const ADS_ROUTE_PREFIX_FALLBACK = '/x9m';

function warnInvalidAdsRoutePrefix(value: string, reason: string): void {
  if (import.meta.env.DEV) {
    console.warn(
      `[routing] Invalid VITE_ADS_ROUTE_PREFIX "${value}" (${reason}). Falling back to ${ADS_ROUTE_PREFIX_FALLBACK}.`
    );
  }
}

function ensureLeadingSlash(pathname: string): string {
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function withoutTrailingSlash(pathname: string): string {
  const normalized = pathname.trim();

  if (normalized === '/') {
    return normalized;
  }

  return normalized.replace(/\/+$/, '') || '/';
}

export function normalizeAdsRoutePrefix(value: string | undefined): string {
  const rawValue = value?.trim();

  if (!rawValue) {
    return ADS_ROUTE_PREFIX_FALLBACK;
  }

  if (rawValue.includes('?') || rawValue.includes('#')) {
    warnInvalidAdsRoutePrefix(rawValue, 'query strings and hashes are not supported');
    return ADS_ROUTE_PREFIX_FALLBACK;
  }

  const normalized = withoutTrailingSlash(ensureLeadingSlash(rawValue));

  if (normalized === '/') {
    warnInvalidAdsRoutePrefix(rawValue, 'prefix cannot be the root path');
    return ADS_ROUTE_PREFIX_FALLBACK;
  }

  return normalized;
}

export function getAdsRoutePrefix(): string {
  return normalizeAdsRoutePrefix(import.meta.env.VITE_ADS_ROUTE_PREFIX);
}

export function isAdsRoutePath(pathname: string, prefix?: string): boolean {
  const adsPrefix = normalizeAdsRoutePrefix(prefix ?? getAdsRoutePrefix());
  const normalizedPathname = withoutTrailingSlash(ensureLeadingSlash(pathname));

  return normalizedPathname === adsPrefix || normalizedPathname.startsWith(`${adsPrefix}/`);
}

export function stripAdsRoutePrefix(pathname: string, prefix?: string): string {
  const adsPrefix = normalizeAdsRoutePrefix(prefix ?? getAdsRoutePrefix());
  const normalizedPathname = withoutTrailingSlash(ensureLeadingSlash(pathname));

  if (!isAdsRoutePath(normalizedPathname, adsPrefix)) {
    return normalizedPathname;
  }

  const strippedPathname = normalizedPathname.slice(adsPrefix.length);

  return strippedPathname === '' ? '/' : strippedPathname;
}

export function withAdsRoutePrefix(pathname: string, prefix?: string): string {
  const adsPrefix = normalizeAdsRoutePrefix(prefix ?? getAdsRoutePrefix());
  const normalizedPathname = withoutTrailingSlash(ensureLeadingSlash(pathname));

  if (isAdsRoutePath(normalizedPathname, adsPrefix)) {
    return normalizedPathname;
  }

  return normalizedPathname === '/' ? adsPrefix : `${adsPrefix}${normalizedPathname}`;
}
