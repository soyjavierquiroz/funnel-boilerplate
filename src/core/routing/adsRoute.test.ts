import { describe, expect, it } from 'vitest';
import {
  normalizeAdsRoutePrefix,
  isAdsRoutePath,
  stripAdsRoutePrefix,
  withAdsRoutePrefix,
  withoutTrailingSlash,
} from './adsRoute';

describe('normalizeAdsRoutePrefix', () => {
  it('falls back to the default prefix for empty or unsafe root values', () => {
    expect(normalizeAdsRoutePrefix(undefined)).toBe('/x9m');
    expect(normalizeAdsRoutePrefix('')).toBe('/x9m');
    expect(normalizeAdsRoutePrefix('/')).toBe('/x9m');
  });

  it('normalizes slash and whitespace variants', () => {
    expect(normalizeAdsRoutePrefix('x9m')).toBe('/x9m');
    expect(normalizeAdsRoutePrefix('/x9m')).toBe('/x9m');
    expect(normalizeAdsRoutePrefix('/x9m/')).toBe('/x9m');
    expect(normalizeAdsRoutePrefix(' /traffic/ ')).toBe('/traffic');
  });
});

describe('isAdsRoutePath', () => {
  it('matches only the configured prefix or its child routes', () => {
    expect(isAdsRoutePath('/x9m', '/x9m')).toBe(true);
    expect(isAdsRoutePath('/x9m/oferta', '/x9m')).toBe(true);
    expect(isAdsRoutePath('/x9m/confirmacion', '/x9m')).toBe(true);
    expect(isAdsRoutePath('/x9mish', '/x9m')).toBe(false);
    expect(isAdsRoutePath('/', '/x9m')).toBe(false);
    expect(isAdsRoutePath('/oferta', '/x9m')).toBe(false);
  });

  it('supports a clone-specific prefix', () => {
    expect(isAdsRoutePath('/vxdr', '/vxdr')).toBe(true);
    expect(isAdsRoutePath('/vxdr/oferta', '/vxdr')).toBe(true);
    expect(isAdsRoutePath('/x9m/oferta', '/vxdr')).toBe(false);
  });
});

describe('stripAdsRoutePrefix', () => {
  it('removes the ads prefix without changing organic paths', () => {
    expect(stripAdsRoutePrefix('/x9m', '/x9m')).toBe('/');
    expect(stripAdsRoutePrefix('/x9m/oferta', '/x9m')).toBe('/oferta');
    expect(stripAdsRoutePrefix('/oferta', '/x9m')).toBe('/oferta');
    expect(stripAdsRoutePrefix('/x9m/', '/x9m')).toBe('/');
  });
});

describe('withAdsRoutePrefix', () => {
  it('adds the ads prefix once', () => {
    expect(withAdsRoutePrefix('/', '/x9m')).toBe('/x9m');
    expect(withAdsRoutePrefix('/oferta', '/x9m')).toBe('/x9m/oferta');
    expect(withAdsRoutePrefix('oferta', '/x9m')).toBe('/x9m/oferta');
    expect(withAdsRoutePrefix('/x9m/oferta', '/x9m')).toBe('/x9m/oferta');
    expect(withAdsRoutePrefix('/x9m', '/x9m')).toBe('/x9m');
  });
});

describe('withoutTrailingSlash', () => {
  it('keeps root and trims trailing slashes elsewhere', () => {
    expect(withoutTrailingSlash('/x9m/')).toBe('/x9m');
    expect(withoutTrailingSlash('/')).toBe('/');
  });
});
