export type TrafficChannel = 'ads' | 'organic';
export type AttributionSource = 'route' | 'clickid' | 'utm' | 'stored' | 'default';
export type PaidPlatform = 'meta' | 'tiktok' | 'google' | null;

export interface AttributionClickIds {
  fbclid?: string;
  ttclid?: string;
  gclid?: string;
}

export interface ResolvedAttribution {
  channel: TrafficChannel;
  source: AttributionSource;
  paidPlatform: PaidPlatform;
  landingPath: string;
  currentPath: string;
  clickIds: AttributionClickIds;
  utms: Record<string, string>;
  shouldTrackAds: boolean;
}

export interface StoredAttribution {
  channel: 'ads';
  source: Exclude<AttributionSource, 'default'>;
  paidPlatform: PaidPlatform;
  landingPath: string;
  clickIds: AttributionClickIds;
  utms: Record<string, string>;
  resolvedAt: number;
  expiresAt: number;
}

export interface ResolveAttributionInput {
  url: string | URL;
  adsRoutePrefix?: string;
  storedAttribution?: StoredAttribution | null;
  now?: number;
}
