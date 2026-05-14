export type DnaTheme = 'expert' | 'panda';

export interface DnaConfig {
  theme: DnaTheme;
  fonts: {
    sans: string;
    body: string;
  };
  vslVideoId: string;
  colors: {
    primary: string;
    accent: string;
    highlight: string;
  };
  surface: {
    page: string;
    panel: string;
  };
  text: {
    main: string;
    muted: string;
    onPrimary: string;
    onAccent: string;
  };
  cta: {
    bg: string;
    text: string;
    hoverBg: string;
  };
  prices: {
    main: string;
    bump: string;
    totalValue: string;
    regular: string;
    regularPrice: string;
  };
  copy: {
    productName: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaText: string;
    orderBumpTitle: string;
    salesLetterTitle: string;
    salesLetterParagraphs: string[];
    offerStackTitle: string;
    benefits: string[];
    specialOfferTitle: string;
    specialOfferSubtitle: string;
    specialOfferGuarantee: string;
    specialOfferImage: string;
    presentationPreTitle: string;
    presentationTitle: string;
    modules: Array<{
      title: string;
      value: string;
      description: string;
      image: string;
    }>;
    fastActionBonus: {
      timeLimit: string;
      title: string;
      subtitle: string;
    };
  };
}

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

  if (/^\d{1,3}\s+\d{1,3}\s+\d{1,3}(?:\s*\/\s*(?:\d{1,3}%|0?\.\d+|1(?:\.0+)?))?$/.test(normalizedValue)) {
    return normalizedValue.replace(/\s+/g, ' ');
  }

  throw new Error(`[DNA] Invalid color value: "${value}"`);
}

function toRgbTriplet(value: string) {
  const normalizedValue = normalizeColorValue(value);
  const [triplet] = normalizedValue.split('/');
  return triplet.trim();
}

export const DNA = {
  theme: 'expert',
  fonts: {
    sans: 'Montserrat',
    body: 'Open Sans',
  },
  vslVideoId: import.meta.env.VITE_VSL_VIDEO_ID ?? '',
  colors: {
    primary: '107 67 155',
    accent: '216 99 184',
    highlight: '255 215 0', // Amarillo fuerte #FFD700
  },
  surface: {
    page: '255 255 255',
    panel: '255 255 255',
  },
  text: {
    main: '45 32 61',
    muted: '95 74 115',
    onPrimary: '255 255 255',
    onAccent: '255 255 255',
  },
  cta: {
    bg: '216 99 184',
    text: '255 255 255',
    hoverBg: '216 99 184 / 90%',
  },
  prices: {
    main: '27',
    bump: '0',
    totalValue: '60',
    regular: '60',
    regularPrice: '60',
  },
  copy: {
    productName: 'Sensorial',
    headline: 'Crea tu primer libro sensorial y haz tu primera venta en 7 días',
    headlineHighlight: 'aunque hoy no sepas por dónde empezar',
    subheadline:
      'Descubre cómo venderlo y generar ingresos extra desde casa sin descuidar a tus hijos',
    ctaText: '¡Estoy lista para empezar!',
    orderBumpTitle: '',
    salesLetterTitle: 'De la Confusión a tu Primera Venta',
    salesLetterParagraphs: [
      'Cuando descubrí los libros sensoriales, pasé por lo mismo que tú...',
      'Tenía ganas de emprender y hacer algo creativo desde casa, pero no sabía por dónde empezar.',
      'Guardaba ideas, veía videos, compraba materiales... y aun así seguía sintiéndome perdida.',
      'No sabía qué actividades hacer. No sabía qué materiales usar. Y mucho menos cómo convertir eso en algo realmente vendible.',
      'Pero un día entendí algo que lo cambió todo. No necesitaba empezar desde cero improvisando. Necesitaba una ruta clara y modelos listos.',
      'Ahí fue cuando dejé de solo guardar ideas y empecé a crear libros sensoriales que las personas realmente querían comprar.',
      'Pasé de sentirme confundida a lograr mis primeras ventas. Y eso es exactamente lo que quiero enseñarte.',
    ],
    offerStackTitle: 'LO QUE TE LLEVAS HOY...',
    specialOfferTitle: 'Oferta Especial',
    specialOfferSubtitle: 'Genera tus <strong>primeros ingresos desde casa</strong> creando libros sensoriales para niños, incluso si hoy no tienes experiencia ni sabes por dónde empezar.',
    specialOfferGuarantee: 'Pago 100% seguro • Acceso inmediato',
    specialOfferImage: '/assets/pame.webp',
    presentationPreTitle: 'Te presento:',
    presentationTitle: '<span style="color: rgb(var(--color-brand-primary))">Lánzate</span> con tu primer<br/>libro sensorial',
    benefits: [
      'Crea tu primer libro sensorial paso a paso',
      'Logra tu primera venta en pocos días',
      'Aprende cómo hacer libros lindos, útiles y vendibles',
      'Descubre cómo cobrar sin miedo y vender con seguridad',
      'Empieza un proyecto creativo con propósito desde casa',
      'Trabaja con modelos listos para crear y vender',
    ],
    modules: [
      {
        title: 'Masterclass: De 0 a tu primera venta',
        value: '$97',
        description:
          'Descubrirás mi estrategia probada de cómo lograr tu primera venta de libros sensoriales en pocos días sin perder tiempo dudando ni pensando qué hacer.',
        image: '/assets/masterclass_de_cero_tu_primera_venta.webp',
      },
      {
        title: '3 modelos de libros sensoriales listos para crear y vender',
        value: '$97',
        description:
          'Arranca con modelos de libros sensoriales lindos, atractivos y vendibles con mi método AES y el paso a paso que puedes replicar fácilmente para empezar. No empiezas de cero, empiezas con modelos listos para vender.',
        image: '/assets/3libros_sensoriales.webp',
      },
      {
        title: '2 kits adicionales con diseños novedosos',
        value: '$47',
        description:
          'Diferénciate y aumenta tus ingresos con 2 kits adicionales listos para crear y vender. Tendrás más opciones para ofrecer y más oportunidades de generar ingresos con libros sensoriales tiernos, atractivos y vendibles.',
        image: '/assets/2proyectos_de_juguetes_didacticos.webp',
      },
      {
        title: 'Plantillas de mensajes listas para cerrar tus primeras ventas',
        value: '$47',
        description:
          'Genera ventas en pocos días sabiendo qué decir, cómo responder y cómo cerrar sin sentirte incómoda. Obtén claridad absoluta con esta herramienta.',
        image: '/assets/plantillas_para_vender_whatsApp_.webp',
      },
      {
        title: 'Cómo poner precios justos sin complicarte',
        value: '$97',
        description:
          'Mi fórmula mágica para no regalar tu trabajo, cobrar bien por tu trabajo con precios justos. Pierde el miedo a cobrar definitivamente.',
        image: '/assets/precios_sin_dramas.webp',
      },
      {
        title: 'Fotos y videos que venden',
        value: '$47',
        description:
          'Mis técnicas para tomar fotos y videos que venden libros sensoriales, para que generen interés y te escriban diciendo “quiero uno”, usando solo tu celular.',
        image: '/assets/fotos_y_videos_que_venden.webp',
      },
      {
        title: 'Lista maestra de materiales',
        value: '$27',
        description:
          'Mis secretos para elegir materiales lindos y funcionales para que sepas exactamente qué usar sin gastar de más ni confundirte.',
        image: '/assets/guia_maestra_de_materiales.webp',
      },
      {
        title: 'Envío perfecto',
        value: '$47',
        description:
          'Conquista a tus clientes para que te compren una y otra vez con ideas de empaques lindos, económicos y prácticos. Para que enamores a tus clientes y aumenten el valor percibido.',
        image: '/assets/kit_envIo_perfecto.webp',
      },
    ],
    fastActionBonus: {
      timeLimit: 'Si te inscribes en los próximos 60 minutos',
      title: '🚀 Sistema Lánzate en 7 días',
      subtitle: 'Crea y valida tu primer libro sensorial paso a paso',
    },
  },
} as const satisfies DnaConfig;

export const dnaNumericPrices = {
  main: parsePrice(DNA.prices.main),
  bump: parsePrice(DNA.prices.bump),
  totalValue: parsePrice(DNA.prices.totalValue),
  regular: parsePrice(DNA.prices.regular),
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
    '--font-sans': `'${DNA.fonts.sans}', sans-serif`,
    '--font-body': `'${DNA.fonts.body}', sans-serif`,
    '--color-page': toRgbTriplet(DNA.surface.page),
    '--color-surface': toRgbTriplet(DNA.surface.panel),
    '--color-primary': toRgbTriplet(DNA.colors.primary),
    '--color-secondary': toRgbTriplet(DNA.colors.accent),
    '--color-highlight': toRgbTriplet(DNA.colors.highlight),
    '--color-accent': toRgbTriplet(DNA.cta.bg),
    '--color-border-subtle': toRgbTriplet(DNA.text.main),
    '--color-text-main': toRgbTriplet(DNA.text.main),
    '--color-text-muted': toRgbTriplet(DNA.text.muted),
    '--color-brand-primary': toRgbTriplet(DNA.colors.primary),
    '--color-brand-accent': toRgbTriplet(DNA.colors.accent),
    '--color-cta-base': toRgbTriplet(DNA.cta.bg),
    '--color-cta-hover': toRgbTriplet(DNA.cta.hoverBg),
    '--color-cta-text': toRgbTriplet(DNA.cta.text),
    '--color-surface-bump': toRgbTriplet(DNA.surface.panel),
  } as const;
}