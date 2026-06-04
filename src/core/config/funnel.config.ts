import { DNA, dnaNumericPrices, resolveDnaFunnelTheme } from '../../dna.config';
import type { DnaSuccessActionType, DnaTheme } from '../../dna.config';
import type { TrafficChannel } from '../routing/channel';

export type VideoProvider = 'youtube' | 'bunnynet' | 'vimeo' | 'wistia' | 'html5';
export type OverlayPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
export type FunnelType = 'vsl' | 'event' | 'tripwire';
export type SuccessActionType = DnaSuccessActionType;

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
  event: EventFunnelContentConfig;
}

export interface OfferBonusConfig {
  title: string;
  description: string;
  value?: string;
}

export interface OfferFaqItemConfig {
  question: string;
  answer: string;
}

export interface OfferCredibilityItemConfig {
  value: string;
  label: string;
}

export interface OfferTestimonialItemConfig {
  eyebrow: string;
  title: string;
  name: string;
  detail: string;
  quote: string;
  image: string;
  imageAlt: string;
}

export interface OfferValueStackItemConfig {
  title: string;
  description: string;
  value: string;
}

export interface FunnelOfferConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  productName: string;
  price: string;
  regularPrice: string;
  currency: string;
  checkoutUrl: string;
  ctaLabel: string;
  ctaPendingLabel: string;
  regularPriceLabel: string;
  checkoutPendingMessage: string;
  heroImage: string;
  heroImageAlt: string;
  bullets: string[];
  announcement: {
    text: string;
  };
  video: {
    eyebrow: string;
    title: string;
    subtitle: string;
    provider: VideoProvider;
    videoId: string;
    url: string;
    posterImage: string;
    progressBarColor: string;
    soundPrompt: string;
    placeholderText: string;
  };
  offerCard: {
    eyebrow: string;
    title: string;
    summary: string;
    includes: string[];
    footerNote: string;
  };
  credibility: {
    text: string;
    items: OfferCredibilityItemConfig[];
  };
  beliefShift: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlight: string;
    image: string;
    imageAlt: string;
  };
  proofGrid: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: OfferTestimonialItemConfig[];
  };
  repeatedCtas: Array<{
    eyebrow: string;
    title: string;
    subtitle: string;
    priceLine: string;
  }>;
  valueStack: {
    eyebrow: string;
    title: string;
    subtitle: string;
    totalValueLabel: string;
    totalValue: string;
    todayPriceLabel: string;
    includedLabel: string;
    items: OfferValueStackItemConfig[];
  };
  bonuses: {
    eyebrow: string;
    title: string;
    subtitle: string;
    valueLabel: string;
    items: OfferBonusConfig[];
  };
  guarantee: {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
  };
  scarcity: {
    eyebrow: string;
    title: string;
    description: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: OfferFaqItemConfig[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    priceLine: string;
  };
}

export interface CaptureFormConfig {
  enabled: boolean;
  webhookUrl: string;
  listSlug: string;
  successRedirectType: FunnelFormSuccessRedirectType;
  successRedirectUrl: string;
  whatsappRedirectBaseUrl: string;
  fields: {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    whatsapp: boolean;
  };
  tracking: {
    eventName: string;
    formId: string;
    status: string;
    source: string;
    payloadEventName: string;
  };
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

export interface FunnelAttributionConfig {
  funnelType: FunnelType;
  theme: DnaTheme;
  landingSlug: string;
}

export interface SuccessActionConfig {
  type: SuccessActionType;
  url: string;
}

export interface SuccessConfig {
  action: SuccessActionConfig;
  redirectSeconds: number;
  actionLabel: string;
  countdownLead: string;
  missingActionUrlMessage: string;
  progressAriaLabel: string;
}

export interface TrafficChannelConfig {
  captureListSlug: string;
  whatsappGroupUrl: string;
  trackingEnabled: boolean;
  confirmationPath: string;
  success: SuccessConfig;
}

export interface FunnelConfig {
  brandName: string;
  domain: string;
  theme: FunnelTheme;
  funnelType: FunnelType;
  attribution: FunnelAttributionConfig;
  offer: FunnelOfferConfig;
  media: FunnelMediaConfig;
  content: FunnelContentConfig;
  forms: FunnelFormsConfig;
  trafficChannels: Record<TrafficChannel, TrafficChannelConfig>;
  pricing: FunnelPricingConfig;
  integrations: FunnelIntegrationsConfig;
}

export interface EventFunnelContentConfig {
  registrationAnchorId: string;
  startsAtIso: string;
  footer: {
    logoAlt: string;
  };
  assets: {
    logo: string;
    hero: string;
    agenda1: string;
    agenda2: string;
    agenda3: string;
    pain: string;
    authority: string;
    authorityCarousel: readonly string[];
    finalCta: string;
    heroImage: string;
    agendaImages: string[];
    painImage: string;
    authorityImage: string;
    finalCtaImage: string;
    insecureDriverImage: string;
    confidentDriverImage: string;
    parkedCarImage: string;
    motherWithChildrenImage: string;
    expertTeachingImage: string;
  };
  hero: {
    eyebrow: string;
    eventName: string;
    dateLabel: string;
    headline: string;
    subheadline: string;
    quickBenefits: string[];
    imageAlt: string;
    formTitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    submittingLabel: string;
  };
  socialProof: string;
  countdown: {
    label: string;
    expiredLabel: string;
    units: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  foundation: {
    sectionEyebrow: string;
    sectionTitle: string;
    sectionText: string;
    cardTitle: string;
    cardText: string;
  };
  promise: {
    title: string;
    image: string;
    imageAlt: string;
    bullets: string[];
    ctaLabel: string;
  };
  transformation: {
    eyebrow: string;
    title: string;
    beforeTitle: string;
    afterTitle: string;
    beforeItems: string[];
    afterItems: string[];
  };
  agenda: {
    title: string;
    items: Array<{
      label: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    }>;
    ctaLabel: string;
  };
  whyFearPersists: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  pain: {
    title: string;
    imageAlt: string;
    intro: string;
    bullets: string[];
    phrases: string[];
    ctaLabel: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      location?: string;
      role?: string;
      quote: string;
      image?: string;
      result?: string;
    }>;
  };
  authority: {
    title: string;
    imageAlt: string;
    intro: string;
    bio: string;
    paragraphs: string[];
    badges: string[];
    quote: string;
    ctaLabel: string;
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    imageAlt: string;
    subheadline: string;
    bullets: string[];
    text: string;
    ctaLabel: string;
  };
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

const organicWhatsappGroupUrl = import.meta.env.VITE_ORGANIC_WHATSAPP_GROUP_URL?.trim() ?? '';

function resolveSuccessActionUrl(channelWhatsappGroupUrl: string) {
  if (DNA.success.action.type === 'whatsapp') {
    return channelWhatsappGroupUrl;
  }

  return DNA.success.action.url;
}

function resolveSuccessConfig(channelWhatsappGroupUrl: string): SuccessConfig {
  return {
    action: {
      type: DNA.success.action.type,
      url: resolveSuccessActionUrl(channelWhatsappGroupUrl).trim(),
    },
    redirectSeconds: DNA.success.redirectSeconds,
    actionLabel: DNA.copy.successPage.whatsappLabel,
    countdownLead: DNA.copy.successPage.countdownLead,
    missingActionUrlMessage: DNA.copy.successPage.missingWhatsappUrlMessage,
    progressAriaLabel: DNA.copy.successPage.progressAriaLabel,
  };
}

export const funnelConfig: FunnelConfig = {
  brandName: DNA.productName,
  domain: DNA.domain,
  theme: resolveDnaFunnelTheme(),
  funnelType: DNA.funnelType,
  attribution: {
    funnelType: DNA.funnelType,
    theme: DNA.theme,
    landingSlug: DNA.landingSlug,
  },
  offer: DNA.offer,
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
    event: {
      registrationAnchorId: DNA.copy.event.registrationAnchorId,
      startsAtIso: DNA.copy.event.startsAtIso,
      footer: DNA.copy.event.footer,
      assets: DNA.assets.event,
      hero: DNA.copy.event.hero,
      socialProof: DNA.copy.event.socialProof,
      countdown: DNA.copy.event.countdown,
      foundation: DNA.copy.event.foundation,
      promise: DNA.copy.event.promise,
      transformation: DNA.copy.event.transformation,
      agenda: DNA.copy.event.agenda,
      whyFearPersists: DNA.copy.event.whyFearPersists,
      pain: DNA.copy.event.pain,
      testimonials: DNA.copy.event.testimonials,
      authority: DNA.copy.event.authority,
      finalCta: DNA.copy.event.finalCta,
    },
  },
  forms: {
    capture: {
      enabled: true,
      webhookUrl: DNA.forms.captureWebhookUrl,
      listSlug: DNA.forms.captureListSlug,
      successRedirectType: DNA.forms.successRedirectType,
      successRedirectUrl: DNA.forms.successRedirectUrl,
      whatsappRedirectBaseUrl: DNA.forms.whatsappRedirectBaseUrl,
      fields: DNA.forms.captureFields,
      tracking: DNA.forms.captureTracking,
    },
  },
  trafficChannels: {
    ads: {
      captureListSlug: DNA.forms.captureListSlug,
      whatsappGroupUrl: DNA.forms.whatsappGroupUrl,
      trackingEnabled: true,
      confirmationPath: '/a/confirmacion',
      success: resolveSuccessConfig(DNA.forms.whatsappGroupUrl),
    },
    organic: {
      captureListSlug: import.meta.env.VITE_ORGANIC_CAPTURE_LIST_SLUG?.trim() ?? '',
      whatsappGroupUrl: organicWhatsappGroupUrl,
      trackingEnabled: false,
      confirmationPath: '/confirmacion',
      success: resolveSuccessConfig(organicWhatsappGroupUrl),
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
