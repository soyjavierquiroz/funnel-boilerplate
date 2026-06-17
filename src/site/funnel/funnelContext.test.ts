import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  FUNNEL_CONTEXT_STORAGE_KEY,
  getFunnelContext,
  persistFunnelContextFromUrl,
} from './funnelContext';
import { ATTRIBUTION_STORAGE_KEY } from '../../core/attribution';

class MemoryStorage implements Pick<Storage, 'getItem' | 'setItem' | 'removeItem'> {
  values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }
}

function installBrowserMocks(pathWithSearch: string) {
  const url = new URL(pathWithSearch, 'https://example.com');
  const storage = new MemoryStorage();

  vi.stubGlobal('window', {
    location: {
      href: url.toString(),
      pathname: url.pathname,
      search: url.search,
    },
    localStorage: storage,
  });

  return storage;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('funnel context', () => {
  it('reads query params', () => {
    installBrowserMocks(
      '/x9m/oferta?from_funnel=vsl-main&sid=sid-1&pattern=handoff&vsl_completed=1',
    );

    expect(getFunnelContext()).toMatchObject({
      from_funnel: 'vsl-main',
      funnel_slug: 'vsl-main',
      sid: 'sid-1',
      pattern: 'handoff',
      vsl_completed: true,
      tracking_mode: 'ads',
    });
  });

  it('reads localStorage', () => {
    const storage = installBrowserMocks('/oferta');
    storage.setItem(
      FUNNEL_CONTEXT_STORAGE_KEY,
      JSON.stringify({
        from_funnel: 'stored-funnel',
        funnel_slug: 'stored-slug',
        sid: 'stored-sid',
        tracking_mode: 'organic',
      }),
    );

    expect(getFunnelContext()).toMatchObject({
      from_funnel: 'stored-funnel',
      funnel_slug: 'stored-slug',
      sid: 'stored-sid',
      tracking_mode: 'organic',
    });
  });

  it('gives query params priority over localStorage', () => {
    const storage = installBrowserMocks('/oferta?from_funnel=query-funnel&sid=query-sid');
    storage.setItem(
      FUNNEL_CONTEXT_STORAGE_KEY,
      JSON.stringify({
        from_funnel: 'stored-funnel',
        sid: 'stored-sid',
      }),
    );

    expect(getFunnelContext()).toMatchObject({
      from_funnel: 'query-funnel',
      funnel_slug: 'query-funnel',
      sid: 'query-sid',
      tracking_mode: 'organic',
    });
  });

  it('persists funnel context without replacing attribution storage', () => {
    const storage = installBrowserMocks('/oferta?from_funnel=query-funnel&sid=query-sid');
    const storedAttribution = JSON.stringify({
      channel: 'ads',
      source: 'clickid',
      landingPath: '/landing',
      resolvedAt: 1,
      expiresAt: 2,
    });
    storage.setItem(ATTRIBUTION_STORAGE_KEY, storedAttribution);

    expect(persistFunnelContextFromUrl()).toMatchObject({
      from_funnel: 'query-funnel',
      sid: 'query-sid',
    });

    expect(storage.getItem(ATTRIBUTION_STORAGE_KEY)).toBe(storedAttribution);
    expect(JSON.parse(storage.getItem(FUNNEL_CONTEXT_STORAGE_KEY) ?? '{}')).toMatchObject({
      from_funnel: 'query-funnel',
      sid: 'query-sid',
    });
  });
});
