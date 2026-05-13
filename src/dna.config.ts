export type DnaTheme = 'expert' | 'panda';

function parsePrice(value: string) {
  const normalizedValue = value.replace(/,/g, '').trim();
  const parsedValue = Number(normalizedValue);

  if (!Number.isFinite(parsedValue)) {
    throw new Error(`[DNA] Invalid price value: "${value}"`);
  }

  return parsedValue;
}

function hexToRgbTriplet(hex: string) {
  const normalizedHex = hex.replace('#', '').trim();

  if (!/^[\da-f]{6}$/i.test(normalizedHex)) {
    throw new Error(`[DNA] Invalid hex color value: "${hex}"`);
  }

  const red = Number.parseInt(normalizedHex.slice(0, 2), 16);
  const green = Number.parseInt(normalizedHex.slice(2, 4), 16);
  const blue = Number.parseInt(normalizedHex.slice(4, 6), 16);

  return `${red} ${green} ${blue}`;
}

function normalizeColorValue(value: string) {
  const normalizedValue = value.trim();

  if (normalizedValue.startsWith('#')) {
    return hexToRgbTriplet(normalizedValue);
  }

  if (/^\d{1,3}\s+\d{1,3}\s+\d{1,3}$/.test(normalizedValue)) {
    return normalizedValue.replace(/\s+/g, ' ');
  }

  throw new Error(`[DNA] Invalid color value: "${value}"`);
}

export const DNA = {
  theme: 'expert',
  colors: {
    primary: '31 41 55',
    accent: '75 85 99',
    cta: '17 24 39',
    ctaHover: '0 0 0',
    surface: '249 250 251',
  },
  vslVideoId: import.meta.env.VITE_VSL_VIDEO_ID ?? '',
  prices: {
    main: '97',
    bump: '0',
    totalValue: '97',
    regularPrice: '97',
  },
  copy: {
    productName: 'Your Product',
    headline: 'Your primary transformation headline',
    ctaText: 'Get Instant Access',
    orderBumpTitle: 'Add the premium bonus',
  },
} as const satisfies {
  theme: DnaTheme;
  colors: {
    primary: string;
    accent: string;
    cta: string;
    ctaHover: string;
    surface: string;
  };
  vslVideoId: string;
  prices: {
    main: string;
    bump: string;
    totalValue: string;
    regularPrice: string;
  };
  copy: {
    productName: string;
    headline: string;
    ctaText: string;
    orderBumpTitle: string;
  };
};

export const dnaNumericPrices = {
  main: parsePrice(DNA.prices.main),
  bump: parsePrice(DNA.prices.bump),
  totalValue: parsePrice(DNA.prices.totalValue),
  regularPrice: parsePrice(DNA.prices.regularPrice),
} as const;

export function resolveDnaDocumentTheme(theme: DnaTheme = DNA.theme) {
  return theme === 'expert' ? 'theme-expert' : 'theme-panda';
}

export function resolveDnaFunnelTheme(theme: DnaTheme = DNA.theme) {
  return theme === 'expert' ? 'theme-expert' : 'theme-panda';
}

export function resolveDnaThemeStyle() {
  return {
    '--color-primary': normalizeColorValue(DNA.colors.primary),
    '--color-secondary': normalizeColorValue(DNA.colors.accent),
    '--color-accent': normalizeColorValue(DNA.colors.cta),
    '--color-brand-primary': normalizeColorValue(DNA.colors.primary),
    '--color-brand-accent': normalizeColorValue(DNA.colors.accent),
    '--color-cta-base': normalizeColorValue(DNA.colors.cta),
    '--color-cta-hover': normalizeColorValue(DNA.colors.ctaHover),
    '--color-surface-bump': normalizeColorValue(DNA.colors.surface),
  } as const;
}
