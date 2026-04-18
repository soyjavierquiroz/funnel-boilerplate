import type { KurukinPlayerProps } from '../../components/common/video-player/src/kurukin-video-player/types';

export type FunnelTheme = 'theme-expert' | 'theme-panda' | 'light-clean';
export type FunnelFormSuccessRedirectType = 'url' | 'whatsapp';
export type FunnelPricingCurrencyMode = 'fixed-usd' | 'geo-priced';

export interface HeroVideoConfig extends KurukinPlayerProps {
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
  brandName: 'Expert Secrets',
  domain: 'expertsecrets.com',
  theme: 'theme-expert',
  media: {
    heroVideo: {
      enabled: true,
      provider: 'youtube',
      videoId: 'dQw4w9WgXcQ',
      vslMode: false,
      lazyLoadYoutube: true,
      hideYoutubeUi: true,
      resumePlayback: true,
      smartPoster: {
        enabled: true,
        imageUrl:
          'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Jnbkrx/image/15107832/file/6d106a40e8d451eb343b5d72732dbbfa.jpg',
        eyebrow: 'Expert Secrets',
        title: 'Watch The Free Training',
        description: 'Find your message, build a tribe, and change the world.',
        buttonText: 'Play Video',
      },
      vslProgressBarColor: '#4876b9',
    },
  },
  content: {
    mainVsl: {
      eyebrow: 'Free Hardcover Offer',
      headline: 'Get your FREE copy of Expert Secrets and learn how to turn your message into a movement.',
      subheadline:
        'Build belief, create a tribe, and package your specialized knowledge into an offer people are excited to buy.',
      ctaLabel: 'Reserve My Free Copy',
      ctaHref: '#checkout',
      certaintyText: 'Secure 2-step order form',
    },
    bonusStack: {
      eyebrow: 'Bonus Stack',
      title: 'Everything you get when you order Expert Secrets today.',
      description:
        'The full value stack is shown in the offer and the localized pricing hook stays available for checkout-aware UI.',
      pricingSourceProductKey: pricingProductKeys.ofertaPrincipal,
      bonuses: [
        {
          id: 'bonus_01',
          eyebrow: 'Bonus 01',
          title: 'Expert Evolution',
          description: 'A guided training to sharpen your expert positioning and message.',
          valueUSD: 97.0,
        },
        {
          id: 'bonus_02',
          eyebrow: 'Bonus 02',
          title: 'Hook, Story, Offer',
          description: 'The messaging structure behind high-converting presentations and pitches.',
          valueUSD: 147,
        },
        {
          id: 'bonus_03',
          eyebrow: 'Bonus 03',
          title: '30 Day Expert Secrets Challenge',
          description: 'Daily prompts and implementation sprints to build momentum around your message.',
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
      successRedirectUrl: '#checkout',
    },
  },
  pricing: {
    currencyMode: 'geo-priced',
    defaultProductKey: pricingProductKeys.ofertaPrincipal,
    products: {
      [pricingProductKeys.ofertaPrincipal]: {
        basePriceUSD: 609.95,
        hotmartProductId: 'EXPERT_SECRETS_MAIN',
        checkoutUrl: '#checkout',
      },
      [pricingProductKeys.orderBump]: {
        basePriceUSD: 37,
        hotmartProductId: 'EXPERT_SECRETS_AUDIOBOOK',
        checkoutUrl: '#checkout',
      },
      [pricingProductKeys.upsellContinuidad]: {
        basePriceUSD: 97,
        hotmartProductId: 'EXPERT_SECRETS_RECORDINGS',
        checkoutUrl: '#checkout',
      },
      [pricingProductKeys.upsellVip]: {
        basePriceUSD: 197,
        hotmartProductId: 'EXPERT_SECRETS_WEBINAR_SLIDES',
        checkoutUrl: '#checkout',
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
