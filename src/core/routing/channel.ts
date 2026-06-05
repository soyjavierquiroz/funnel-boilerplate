import { isAdsRoutePath } from './adsRoute';

export type TrafficChannel = 'organic' | 'ads';

export function isAdsRoute(pathname: string): boolean {
  return isAdsRoutePath(pathname);
}

export function getTrafficChannel(pathname: string): TrafficChannel {
  return isAdsRoute(pathname) ? 'ads' : 'organic';
}
