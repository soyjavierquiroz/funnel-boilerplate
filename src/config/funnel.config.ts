import type { CoreVideoPlayerProps } from '../components/video-player';

export type FunnelTheme = 'theme-expert' | 'theme-panda' | 'light-clean';
export type FunnelFormSuccessRedirectType = 'url' | 'whatsapp';
export type FunnelPricingCurrencyMode = 'fixed-usd' | 'geo-priced';

export interface HeroVideoConfig extends CoreVideoPlayerProps {
  enabled: boolean;
}

export interface FunnelMediaConfig {
  heroVideo: HeroVideoConfig;
}

export interface MainVslContentConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  certaintyText: string;
  useTextGradient?: boolean;
}

export interface BonusItemConfig {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  valueUSD: number;
}

export interface BonusStackConfig {
  eyebrow: string;
  title: string;
  description: string;
  pricingSourceProductKey: string;
  bonuses: BonusItemConfig[];
}

export interface FunnelContentConfig {
  mainVsl: MainVslContentConfig;
  bonusStack: BonusStackConfig;
}

export interface CaptureFormConfig {
  enabled: boolean;
  webhookUrl: string;
  successRedirectType: FunnelFormSuccessRedirectType;
  successRedirectUrl: string;
}

export interface FunnelFormsConfig {
  capture: CaptureFormConfig;
}

export interface FunnelPricingProductConfig {
  basePriceUSD: number;
  hotmartProductId: string;
  checkoutUrl: string;
}

export interface FunnelPricingConfig {
  currencyMode: FunnelPricingCurrencyMode;
  defaultProductKey: string;
  products: Record<string, FunnelPricingProductConfig>;
}

export interface FunnelIntegrationsConfig {
  metaPixelId: string;
  tiktokPixelId: string;
  capiWebhookUrl: string;
}

export interface FunnelConfig {
  brandName: string;
  domain: string;
  theme: FunnelTheme;
  media: FunnelMediaConfig;
  content: FunnelContentConfig;
  forms: FunnelFormsConfig;
  pricing: FunnelPricingConfig;
  integrations: FunnelIntegrationsConfig;
}

export interface ResolvedPricingProduct {
  requestedProductKey: string;
  resolvedProductKey: string;
  product: FunnelPricingProductConfig;
  hasRequestedProduct: boolean;
}

export const pricingProductKeys = {
  ofertaPrincipal: 'oferta_principal',
  orderBump: 'order_bump',
  upsellContinuidad: 'upsell_continuidad',
  upsellVip: 'upsell_vip',
} as const;

export const funnelConfig: FunnelConfig = {
  brandName: 'Javier Quiroz Test',
  domain: 'javierquiroz.com',
  theme: 'theme-panda',
  media: {
    heroVideo: {
      enabled: true,
      provider: 'youtube',
      videoId: 'dQw4w9WgXcQ',
      vslMode: true,
      resumePlayback: true,
      vslProgressBarColor: 'rgb(var(--color-primary))',
    },
  },
  content: {
    mainVsl: {
      eyebrow: 'Sistema de Conversión Agnóstico',
      headline: 'Convierte con una VSL de autoridad y una interfaz que se siente premium desde el primer scroll.',
      subheadline:
        'Jerarquía de lectura forzada, profundidad técnica y una llamada a la acción imposible de ignorar, todo alimentado desde configuración.',
      ctaLabel: 'Quiero Ver La Oferta Completa',
      ctaHref: '#pricing',
      certaintyText: 'Pago 100% seguro',
      useTextGradient: true,
    },
    bonusStack: {
      eyebrow: 'Bonos de Alto Valor',
      title: 'Apila valor percibido sin romper la coherencia local del precio.',
      description:
        'Cada bono comunica una ganancia concreta y su valor se localiza con el mismo motor de precios del funnel para que la oferta se sienta real en cada país.',
      pricingSourceProductKey: pricingProductKeys.ofertaPrincipal,
      bonuses: [
        {
          id: 'bonus_01',
          eyebrow: 'Bono 01',
          title: 'Script de Cierre de Alta Conversión',
          description:
            'Una secuencia lista para adaptar tus llamadas, objeciones y cierres sin improvisar ni perder autoridad comercial.',
          valueUSD: 97,
        },
        {
          id: 'bonus_02',
          eyebrow: 'Bono 02',
          title: 'Biblioteca de Hooks para VSL',
          description:
            'Arranques, loops de curiosidad y transiciones pensadas para retener atención en el primer minuto del video.',
          valueUSD: 147,
        },
        {
          id: 'bonus_03',
          eyebrow: 'Bono 03',
          title: 'Stack de Automatizaciones de Seguimiento',
          description:
            'Mensajes y triggers para recuperar leads tibios, elevar respuesta y sostener la percepción premium del funnel.',
          valueUSD: 197,
        },
      ],
    },
  },
  forms: {
    capture: {
      enabled: true,
      webhookUrl: 'https://hook.us1.make.com/test-webhook-url',
      successRedirectType: 'url',
      successRedirectUrl: 'https://javierquiroz.com/gracias',
    },
  },
  pricing: {
    currencyMode: 'geo-priced',
    defaultProductKey: pricingProductKeys.ofertaPrincipal,
    products: {
      [pricingProductKeys.ofertaPrincipal]: {
        basePriceUSD: 497,
        hotmartProductId: 'T31166654J',
        checkoutUrl: 'https://pay.hotmart.com/T31166654J',
      },
      [pricingProductKeys.orderBump]: {
        basePriceUSD: 97,
        hotmartProductId: 'M47153038V',
        checkoutUrl: 'https://pay.hotmart.com/M47153038V',
      },
      [pricingProductKeys.upsellContinuidad]: {
        basePriceUSD: 297,
        hotmartProductId: 'W17722015X',
        checkoutUrl: 'https://pay.hotmart.com/W17722015X',
      },
      [pricingProductKeys.upsellVip]: {
        basePriceUSD: 997,
        hotmartProductId: 'E53983014T',
        checkoutUrl: 'https://pay.hotmart.com/E53983014T',
      },
    },
  },
  integrations: {
    metaPixelId: 'TU_PIXEL_ID',
    tiktokPixelId: 'TU_TIKTOK_ID',
    capiWebhookUrl: 'https://n8n.tu-server.com/webhook/capi-in',
  },
};

export function resolvePricingProduct(productKey: string) {
  const { defaultProductKey, products } = funnelConfig.pricing;
  const requestedProduct = products[productKey];

  if (requestedProduct) {
    return {
      requestedProductKey: productKey,
      resolvedProductKey: productKey,
      product: requestedProduct,
      hasRequestedProduct: true,
    } satisfies ResolvedPricingProduct;
  }

  const fallbackProduct = products[defaultProductKey];

  if (fallbackProduct) {
    console.warn(
      `[funnelConfig] pricing product "${productKey}" was not found. Falling back to "${defaultProductKey}".`,
    );

    return {
      requestedProductKey: productKey,
      resolvedProductKey: defaultProductKey,
      product: fallbackProduct,
      hasRequestedProduct: false,
    } satisfies ResolvedPricingProduct;
  }

  throw new Error(`[funnelConfig] No pricing products are configured. Missing key: "${productKey}".`);
}

export default funnelConfig;
