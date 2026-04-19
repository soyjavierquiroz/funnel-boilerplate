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

export const DNA = {
  theme: 'expert',
  colors: {
    primary: '#e01921',
    accent: '#1d3557',
    cta: '#fac215',
    ctaHover: '#eab308',
    surface: '#fefce8',
  },
  vslVideoId: 'ABC123XYZ',
  prices: {
    main: '97',
    bump: '37',
    totalValue: '3,788',
    regularPrice: '997',
  },
  copy: {
    productName: 'Sistema Kurukin Core',
    orderBumpTitle: '¡SÍ! AÑADIR EL PACK DE DUPLICACIÓN',
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
    '--color-primary': hexToRgbTriplet(DNA.colors.primary),
    '--color-secondary': hexToRgbTriplet(DNA.colors.accent),
    '--color-accent': hexToRgbTriplet(DNA.colors.cta),
    '--color-brand-primary': hexToRgbTriplet(DNA.colors.primary),
    '--color-brand-accent': hexToRgbTriplet(DNA.colors.accent),
    '--color-cta-base': hexToRgbTriplet(DNA.colors.cta),
    '--color-cta-hover': hexToRgbTriplet(DNA.colors.ctaHover),
    '--color-surface-bump': hexToRgbTriplet(DNA.colors.surface),
  } as const;
}
