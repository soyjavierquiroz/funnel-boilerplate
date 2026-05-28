import { DNA, dnaNumericPrices, resolveDnaFunnelTheme } from '../../dna.config';

export type VideoProvider = 'youtube' | 'bunnynet' | 'vimeo' | 'wistia' | 'html5';
export type OverlayPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';

export interface MutedPreviewConfig {
  enabled: boolean;
  overlayImageUrl?: string;
  overlayPosition?: OverlayPosition;
  buttonText?: string;
  fallbackColor?: string;
  fallbackText1?: string;
  fallbackText2?: string;
}

export interface CallToActionConfig {
  enabled: boolean;
  displayAtSeconds: number;
  eyebrow?: string;
  headline: string;
  buttonText: string;
  buttonUrl: string;
  isDismissible?: boolean;
}

export interface SmartPosterConfig {
  enabled?: boolean;
  imageUrl?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export type FunnelTheme = 'theme-expert' | 'theme-panda' | 'light-clean';
export type FunnelFormSuccessRedirectType = 'url' | 'whatsapp';
export type FunnelPricingCurrencyMode = 'fixed-usd' | 'geo-priced';

export interface HeroVideoConfig {
  enabled: boolean;
  provider: VideoProvider;
  videoId: string;
  revealAtSeconds?: number;
  vslMode?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  idleHideControls?: boolean;
  allowFullscreen?: boolean;
  vslProgressBarColor?: string;
  mutedPreview?: MutedPreviewConfig;
  lazyLoadYoutube?: boolean;
  stickyOnScroll?: boolean;
  stickyScroll?: boolean;
  resumePlayback?: boolean;
  onTimeUpdate?: (currentTime: number) => void;
  callToAction?: CallToActionConfig;
  hideYoutubeUi?: boolean;
  smartPoster?: SmartPosterConfig;
  className?: string;
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
  checkoutProductId: string;
  checkoutUrl: string;
}

export interface FunnelPricingConfig {
  currencyMode: FunnelPricingCurrencyMode;
  defaultProductKey: string;
  products: Record<string, FunnelPricingProductConfig>;
}

export interface FunnelIntegrationsConfig {
  siteId: string;
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
  brandName: DNA.productName,
  domain: DNA.domain,
  theme: resolveDnaFunnelTheme(),
  media: {
    heroVideo: {
      enabled: true,
      provider: DNA.videos.vsl.provider,
      videoId: DNA.videos.vsl.videoId,
      revealAtSeconds: DNA.videos.vsl.revealAtSeconds,
      vslMode: false,
      resumePlayback: true,
      smartPoster: {
        enabled: false,
        imageUrl: DNA.videos.vsl.posterImage,
        eyebrow: DNA.copy.video.smartPosterEyebrow,
        title: DNA.copy.video.smartPosterTitle,
        description: DNA.copy.video.smartPosterDescription,
        buttonText: DNA.copy.video.smartPosterButtonText,
      },
      callToAction: {
        enabled: false,
        displayAtSeconds: DNA.videos.vsl.ctaDisplayAtSeconds,
        eyebrow: DNA.copy.video.ctaEyebrow,
        headline: DNA.copy.video.ctaHeadline,
        buttonText: DNA.copy.video.ctaButtonText,
        buttonUrl: DNA.checkoutUrl,
        isDismissible: true,
      },
      vslProgressBarColor: DNA.videos.vsl.progressBarColor,
    },
  },
  content: {
    mainVsl: {
      eyebrow: DNA.copy.productName,
      headline: DNA.copy.headline,
      subheadline: DNA.copy.subheadline,
      ctaLabel: DNA.copy.ctaText,
      ctaHref: '#checkout',
      certaintyText: DNA.copy.specialOfferGuarantee,
    },
    bonusStack: {
      eyebrow: DNA.copy.fastActionBonus.title,
      title: DNA.copy.offerStackTitle,
      description: DNA.copy.fastActionBonus.subtitle,
      pricingSourceProductKey: pricingProductKeys.ofertaPrincipal,
      bonuses: DNA.copy.modules.map((module, index) => ({
        id: `bonus_${index + 1}`,
        eyebrow: DNA.copy.offerSummary.includedBadgeLabel,
        title: module.title,
        description: module.description,
        valueUSD: Number(module.value.replace(/[^\d.]/g, '')) || 0,
      })),
    },
  },
  forms: {
    capture: {
      enabled: true,
      webhookUrl: DNA.forms.captureWebhookUrl,
      successRedirectType: DNA.forms.successRedirectType,
      successRedirectUrl: DNA.forms.successRedirectUrl,
    },
  },
  pricing: {
    currencyMode: 'geo-priced',
    defaultProductKey: pricingProductKeys.ofertaPrincipal,
    products: {
      [pricingProductKeys.ofertaPrincipal]: {
        basePriceUSD: dnaNumericPrices.main,
        checkoutProductId: DNA.checkout.productIds.main,
        checkoutUrl: DNA.checkoutUrl,
      },
      [pricingProductKeys.orderBump]: {
        basePriceUSD: dnaNumericPrices.bump,
        checkoutProductId: DNA.checkout.productIds.bump,
        checkoutUrl: DNA.checkoutUrl,
      },
      [pricingProductKeys.upsellContinuidad]: {
        basePriceUSD: dnaNumericPrices.main,
        checkoutProductId: DNA.checkout.productIds.continuity,
        checkoutUrl: DNA.checkoutUrl,
      },
      [pricingProductKeys.upsellVip]: {
        basePriceUSD: dnaNumericPrices.vip,
        checkoutProductId: DNA.checkout.productIds.vip,
        checkoutUrl: DNA.checkoutUrl,
      },
    },
  },
  integrations: {
    siteId: DNA.tracking.siteId,
    capiWebhookUrl: DNA.tracking.capiWebhookUrl,
    metaPixelId: DNA.tracking.metaPixelId,
    tiktokPixelId: DNA.tracking.tiktokPixelId,
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
