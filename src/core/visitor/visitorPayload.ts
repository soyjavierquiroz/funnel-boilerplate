import { useMemo } from 'react';
import { useVisitor } from './VisitorContext';
import type { VisitorData } from './types';

export interface VisitorPayload {
  visitor: {
    ip: string;
    city: string;
    region: string;
    country: string;
    country_code: string;
    timezone: string;
    currency: string;
    country_calling_code: string;
  };
  visitor_ip: string;
  visitor_city: string;
  visitor_region: string;
  visitor_country: string;
  visitor_country_code: string;
  visitor_timezone: string;
  visitor_currency: string;
  visitor_country_calling_code: string;
}

function normalizeVisitorPayloadValue(value: string | undefined, invalidLiterals: string[] = []): string {
  const normalizedValue = value?.trim() ?? '';

  return invalidLiterals.includes(normalizedValue) ? '' : normalizedValue;
}

export function buildVisitorPayload(visitorData: VisitorData | null | undefined): VisitorPayload {
  const visitor = {
    ip: normalizeVisitorPayloadValue(visitorData?.ip),
    city: normalizeVisitorPayloadValue(visitorData?.city),
    region: normalizeVisitorPayloadValue(visitorData?.region),
    country: normalizeVisitorPayloadValue(visitorData?.country_name),
    country_code: normalizeVisitorPayloadValue(visitorData?.country_code),
    timezone: normalizeVisitorPayloadValue(visitorData?.timezone),
    currency: normalizeVisitorPayloadValue(visitorData?.currency),
    country_calling_code: normalizeVisitorPayloadValue(visitorData?.country_calling_code, [
      'country_calling_code',
      'visitor_country_calling_code',
    ]),
  };

  return {
    visitor,
    visitor_ip: visitor.ip,
    visitor_city: visitor.city,
    visitor_region: visitor.region,
    visitor_country: visitor.country,
    visitor_country_code: visitor.country_code,
    visitor_timezone: visitor.timezone,
    visitor_currency: visitor.currency,
    visitor_country_calling_code: visitor.country_calling_code,
  };
}

export function useVisitorPayload(): VisitorPayload {
  const { visitorData } = useVisitor();

  return useMemo(() => buildVisitorPayload(visitorData), [visitorData]);
}
