export type TrafficChannel = 'organic' | 'ads';

export function isAdsRoute(pathname: string): boolean {
  return pathname === '/a' || pathname.startsWith('/a/');
}

export function getTrafficChannel(pathname: string): TrafficChannel {
  return isAdsRoute(pathname) ? 'ads' : 'organic';
}
