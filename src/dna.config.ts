export type DnaTheme = 'expert' | 'panda';
export type DnaFunnelType = 'vsl' | 'event' | 'tripwire';

const runtimeEnv = ((import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env ?? {});

function readEnv(name: string, fallback = '') {
  const value = runtimeEnv[name]?.trim();
  return value && value.length > 0 ? value : fallback;
}

export interface DnaConfig {
  theme: DnaTheme;
  funnelType: DnaFunnelType;
  productName: string;
  domain: string;
  siteId: string;
  fonts: {
    sans: string;
    body: string;
  };
  checkoutUrl: string;
  checkout: {
    providerName: string;
    productIds: {
      main: string;
      bump: string;
      continuity: string;
      vip: string;
    };
    successPath: string;
  };
  vslVideoId: string;
  videos: {
    vsl: {
      provider: 'youtube' | 'bunnynet' | 'vimeo' | 'wistia' | 'html5';
      videoId: string;
      revealAtSeconds: number;
      progressBarColor: string;
      posterImage: string;
      ctaDisplayAtSeconds: number;
    };
  };
  tracking: {
    siteId: string;
    metaPixelId: string;
    tiktokPixelId: string;
    capiWebhookUrl: string;
    visitorApiUrl: string;
    metaPixelScriptUrl: string;
    tiktokPixelScriptBaseUrl: string;
  };
  seo: {
    title: string;
    description: string;
    socialImage: string;
  };
  colors: {
    primary: string;
    accent: string;
    highlight: string;
    success: string;
    warning: string;
    error: string;
  };
  surface: {
    page: string;
    panel: string;
    muted: string;
    bump: string;
  };
  text: {
    main: string;
    muted: string;
    subtle: string;
    inverse: string;
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
    vip: string;
  };
  assets: {
    productImage: string;
    salesLetterImage: string;
    bonusImage: string;
    bundleWideImage: string;
    socialImage: string;
    event: {
      hero: string;
      agenda1: string;
      agenda2: string;
      agenda3: string;
      pain: string;
      authority: string;
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
  };
  forms: {
    captureWebhookUrl: string;
    successRedirectType: 'url' | 'whatsapp';
    successRedirectUrl: string;
    whatsappRedirectBaseUrl: string;
    captureFields: {
      firstName: boolean;
      lastName: boolean;
      email: boolean;
      whatsapp: boolean;
    };
    captureTracking: {
      eventName: string;
      formId: string;
      status: string;
    };
  };
  copy: {
    productName: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaText: string;
    checkoutCtaText: string;
    orderBumpTitle: string;
    salesLetter: {
      title: string;
      part1: string[];
      highlight: string;
      part2: string[];
      image: string;
      ctaText: string;
    };
    offerStackTitle: string;
    benefits: string[];
    specialOfferTitle: string;
    specialOfferSubtitle: string;
    specialOfferGuarantee: string;
    specialOfferImage: string;
    presentationPreTitle: string;
    presentationTitle: string;
    confidenceBooster: {
      headline: string;
      paragraphs: string[];
      bullets: string[];
      includedLabel: string;
    };
    sewingBonus: {
      eyebrow: string;
      title: string;
      image: string;
      description: string;
    };
    painPoints: {
      headline: string;
      subtitle: string;
      bullets: string[];
      transitionText: string;
    };
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
    offerSummary: {
      title: string;
      countdownLabel: string;
      opportunityExpiresLabel: string;
      bundleImageAlt: string;
      totalValueLabel: string;
      todayPriceLabel: string;
      regularPriceLabel: string;
      includedBadgeLabel: string;
      realValueLabel: string;
      ctaLabel: string;
      ctaSubLabel: string;
      offerAvailableLabel: string;
      specialPriceLabel: string;
      todayOnlyLabel: string;
      originalPriceLabel: string;
      valuedAtLabel: string;
    };
    certaintyItems: Array<{
      id: string;
      label: string;
    }>;
    orderForm: {
      eyebrow: string;
      description: string;
    };
    successPage: {
      eyebrow: string;
      title: string;
      description: string;
      backLabel: string;
    };
    captureForm: {
      eyebrow: string;
      headlineFallback: string;
      headlineWithLocation: string;
      description: string;
      firstNameLabel: string;
      firstNamePlaceholder: string;
      lastNameLabel: string;
      lastNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      whatsappLabel: string;
      whatsappPlaceholder: string;
      requiredError: string;
      emailRequiredError: string;
      invalidEmailError: string;
      whatsappRequiredError: string;
      invalidWhatsappError: string;
      submitError: string;
      submitLabel: string;
      submittingLabel: string;
    };
    event: {
      registrationAnchorId: string;
      startsAtIso: string;
      hero: {
        eyebrow: string;
        headline: string;
        subheadline: string;
        imageAlt: string;
        formTitle: string;
        primaryCtaLabel: string;
        secondaryCtaLabel: string;
        submittingLabel: string;
      };
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
        bullets: string[];
        ctaLabel: string;
      };
      agenda: {
        title: string;
        items: Array<{
          label: string;
          title: string;
          description: string;
        }>;
        ctaLabel: string;
      };
      pain: {
        title: string;
        intro: string;
        bullets: string[];
        phrases: string[];
        ctaLabel: string;
      };
      authority: {
        title: string;
        intro: string;
        bio: string;
        paragraphs: string[];
        quote: string;
        ctaLabel: string;
      };
      finalCta: {
        text: string;
        ctaLabel: string;
      };
    };
    pricingCard: {
      eyebrow: string;
      title: string;
      baseValueLabel: string;
      basePriceLabel: string;
      subtotalLabel: string;
      localTaxesLabel: string;
      includedTaxesLabel: string;
      checkoutTotalLabel: string;
      equivalentLabel: string;
      internationalPriceLabel: string;
      buyButtonLabel: string;
      unavailableLabel: string;
      securePaymentLabel: string;
      processedByLabel: string;
      immediateAccessLabel: string;
    };
    video: {
      smartPosterEyebrow: string;
      smartPosterTitle: string;
      smartPosterDescription: string;
      smartPosterButtonText: string;
      ctaEyebrow: string;
      ctaHeadline: string;
      ctaButtonText: string;
      soundPrompt: string;
      placeholderText: string;
    };
    testimonials: {
      headline: string;
      subtitle: string;
      items: Array<{
        name: string;
        quote: string;
        image: string;
      }>;
    };
    faq: {
      title: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
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

const productName = 'Aprender Motores';
const domain = readEnv('VITE_DOMAIN', 'aprendermotores.com');
const siteId = readEnv('VITE_SITE_ID', 'APRENDER_MOTORES');
const checkoutUrl = readEnv('VITE_CHECKOUT_URL', 'https://example.com/replace-with-checkout-url');
const vslVideoId = readEnv('VITE_VSL_VIDEO_ID', 'REPLACE_WITH_VSL_VIDEO_ID');

const msmEventAssets = {
  hero: '/assets/msm/hero-main.webp',
  agenda1: '/assets/msm/agenda-1.webp',
  agenda2: '/assets/msm/agenda-2.webp',
  agenda3: '/assets/msm/agenda-3.webp',
  pain: '/assets/msm/pain-auto-parqueado.webp',
  authority: '/assets/msm/authority-dario.webp',
  finalCta: '/assets/msm/cta-final.webp',
} as const;

export const DNA = {
  theme: 'expert',
  funnelType: 'event',
  productName,
  domain,
  siteId,
  fonts: {
    sans: 'Montserrat',
    body: 'Open Sans',
  },
  checkoutUrl,
  checkout: {
    providerName: readEnv('VITE_CHECKOUT_PROVIDER_NAME', 'Checkout'),
    productIds: {
      main: 'APRENDER_MOTORES_MAIN',
      bump: 'APRENDER_MOTORES_BUMP',
      continuity: 'APRENDER_MOTORES_CONTINUITY',
      vip: 'APRENDER_MOTORES_VIP',
    },
    successPath: '/confirmacion',
  },
  vslVideoId,
  videos: {
    vsl: {
      provider: 'bunnynet',
      videoId: vslVideoId,
      revealAtSeconds: 10,
      progressBarColor: '#2f6f73',
      posterImage: '',
      ctaDisplayAtSeconds: 10,
    },
  },
  tracking: {
    siteId,
    metaPixelId: readEnv('VITE_META_PIXEL_ID'),
    tiktokPixelId: readEnv('VITE_TIKTOK_PIXEL_ID'),
    capiWebhookUrl: readEnv('VITE_CAPI_RELAY_URL'),
    visitorApiUrl: readEnv('VITE_VISITOR_API_URL', 'https://ipapi.co/json/'),
    metaPixelScriptUrl: readEnv('VITE_META_PIXEL_SCRIPT_URL', 'https://connect.facebook.net/en_US/fbevents.js'),
    tiktokPixelScriptBaseUrl: readEnv(
      'VITE_TIKTOK_PIXEL_SCRIPT_BASE_URL',
      'https://analytics.tiktok.com/i18n/pixel/events.js',
    ),
  },
  seo: {
    title: readEnv('VITE_SITE_TITLE', `${productName} | Maneja Sin Miedo`),
    description: readEnv(
      'VITE_SITE_DESCRIPTION',
      'Evento gratuito online para ganar confianza al volante y manejar con mayor seguridad.',
    ),
    socialImage: readEnv('VITE_SOCIAL_IMAGE', `https://${domain}/assets/funnel-placeholder.svg`),
  },
  colors: {
    primary: '47 111 115',
    accent: '214 101 64',
    highlight: '241 184 77',
    success: '49 151 112',
    warning: '191 128 38',
    error: '190 58 58',
  },
  surface: {
    page: '250 250 247',
    panel: '255 255 255',
    muted: '244 241 235',
    bump: '255 255 255',
  },
  text: {
    main: '31 37 44',
    muted: '86 94 104',
    subtle: '122 130 139',
    inverse: '255 255 255',
    onPrimary: '255 255 255',
    onAccent: '255 255 255',
  },
  cta: {
    bg: '214 101 64',
    text: '255 255 255',
    hoverBg: '190 80 49',
  },
  prices: {
    main: '0',
    bump: '0',
    totalValue: '0',
    regular: '0',
    regularPrice: '0',
    vip: '0',
  },
  assets: {
    productImage: '/assets/funnel-placeholder.svg',
    salesLetterImage: '/assets/funnel-placeholder.svg',
    bonusImage: '/assets/funnel-placeholder.svg',
    bundleWideImage: '/assets/funnel-placeholder.svg',
    socialImage: '/assets/funnel-placeholder.svg',
    event: {
      ...msmEventAssets,
      heroImage: msmEventAssets.hero,
      agendaImages: [
        msmEventAssets.agenda1,
        msmEventAssets.agenda2,
        msmEventAssets.agenda3,
      ],
      painImage: msmEventAssets.pain,
      authorityImage: msmEventAssets.authority,
      finalCtaImage: msmEventAssets.finalCta,
      insecureDriverImage: msmEventAssets.hero,
      confidentDriverImage: msmEventAssets.agenda3,
      parkedCarImage: msmEventAssets.pain,
      motherWithChildrenImage: msmEventAssets.finalCta,
      expertTeachingImage: msmEventAssets.authority,
    },
  },
  forms: {
    captureWebhookUrl: readEnv('VITE_CAPTURE_WEBHOOK_URL'),
    successRedirectType: 'url',
    successRedirectUrl: '/confirmacion',
    whatsappRedirectBaseUrl: readEnv('VITE_WHATSAPP_REDIRECT_BASE_URL', 'https://wa.me'),
    captureFields: {
      firstName: true,
      lastName: false,
      email: true,
      whatsapp: false,
    },
    captureTracking: {
      eventName: 'Lead',
      formId: 'expert_event_registration_form',
      status: 'submitted',
    },
  },
  copy: {
    productName,
    headline: 'Configura aqui el headline principal de tu VSL',
    headlineHighlight: 'con una promesa clara para tu audiencia',
    subheadline:
      'Reemplaza este texto por la descripcion breve de la transformacion, el publico objetivo y el resultado esperado.',
    ctaText: 'Quiero acceder ahora',
    checkoutCtaText: 'Si, quiero acceder',
    orderBumpTitle: '',
    salesLetter: {
      title: 'Historia de transformacion',
      part1: [
        'Usa este bloque para conectar con el problema actual de tu audiencia.',
        'Mantén la estructura persuasiva y reemplaza el texto con la historia del nuevo funnel.',
      ],
      highlight: 'Despues, muestra el descubrimiento que cambia el camino.',
      part2: [
        'Explica por que la oferta existe y como ayuda a avanzar con claridad.',
        'Cierra el bloque invitando a tomar accion con el producto configurado.',
      ],
      image: '/assets/funnel-placeholder.svg',
      ctaText: 'Quiero continuar',
    },
    offerStackTitle: 'Lo que recibes hoy',
    benefits: [
      'Beneficio principal configurable',
      'Resultado esperado configurable',
      'Acceso a materiales configurables',
      'Acompanamiento o soporte configurable',
    ],
    specialOfferTitle: 'Oferta especial',
    specialOfferSubtitle:
      'Reemplaza esta frase por el resumen de la oferta de <strong>Aprender Motores</strong> y el principal motivo para actuar hoy.',
    specialOfferGuarantee: 'Pago seguro - Acceso inmediato',
    specialOfferImage: '/assets/funnel-placeholder.svg',
    presentationPreTitle: 'Te presento:',
    presentationTitle: '<span style="color: rgb(var(--color-brand-primary))">Aprender Motores</span>',
    confidenceBooster: {
      headline: 'Refuerza la confianza antes de la decision',
      paragraphs: [
        'Explica por que la persona puede avanzar aunque empiece desde cero.',
        'Muestra que el proceso esta ordenado y que cada paso tiene una razon.',
      ],
      bullets: [
        'Checklist o guia configurable',
        'Recursos de apoyo configurables',
      ],
      includedLabel: 'Incluye:',
    },
    sewingBonus: {
      eyebrow: 'Bono configurable',
      title: 'Bono configurable',
      image: '/assets/funnel-placeholder.svg',
      description: 'Describe aqui el bono que aumenta el valor percibido de la oferta.',
    },
    painPoints: {
      headline: '¿Te suena familiar?',
      subtitle: 'Configura aqui los puntos de dolor reales del nuevo mercado.',
      bullets: [
        'Punto de dolor configurable 1.',
        'Punto de dolor configurable 2.',
        'Punto de dolor configurable 3.',
        'Punto de dolor configurable 4.',
      ],
      transitionText: 'Entonces este puede ser el siguiente paso.',
    },
    modules: [
      {
        title: 'Modulo configurable 1',
        value: '$0',
        description: 'Describe el primer entregable del producto.',
        image: '/assets/funnel-placeholder.svg',
      },
      {
        title: 'Modulo configurable 2',
        value: '$0',
        description: 'Describe el segundo entregable del producto.',
        image: '/assets/funnel-placeholder.svg',
      },
      {
        title: 'Bono configurable',
        value: '$0',
        description: 'Describe un bono o recurso adicional.',
        image: '/assets/funnel-placeholder.svg',
      },
    ],
    fastActionBonus: {
      timeLimit: 'Si tomas accion en los proximos 60 minutos',
      title: 'Bono de accion rapida',
      subtitle: 'Configura aqui el beneficio de actuar ahora.',
    },
    offerSummary: {
      title: 'Todo lo que recibes con {productName} hoy',
      countdownLabel: 'La oferta vence en:',
      opportunityExpiresLabel: 'Esta oportunidad expira en:',
      bundleImageAlt: 'Paquete completo de la oferta con bonos incluidos',
      totalValueLabel: 'Valor total',
      todayPriceLabel: 'Precio de hoy',
      regularPriceLabel: 'Precio regular',
      includedBadgeLabel: 'Incluido gratis',
      realValueLabel: 'Valor real',
      ctaLabel: 'Si, quiero activar {productName}',
      ctaSubLabel: 'Hoy por ${price} - Acceso inmediato y seguro',
      offerAvailableLabel: 'La oferta esta disponible',
      specialPriceLabel: 'Precio especial: ${price}',
      todayOnlyLabel: 'Hoy solo',
      originalPriceLabel: 'Precio original',
      valuedAtLabel: 'Valorado en',
    },
    certaintyItems: [
      { id: 'secure-payment', label: 'Pago seguro' },
      { id: 'guarantee', label: 'Garantia configurable' },
      { id: 'ssl', label: 'Checkout protegido' },
    ],
    orderForm: {
      eyebrow: 'Checkout placeholder',
      description:
        'Este bloque se conserva como placeholder temporal. El CTA principal usa la URL de checkout definida en DNA.',
    },
    successPage: {
      eyebrow: 'Confirmacion',
      title: 'Registro recibido',
      description: 'Tu solicitud fue recibida correctamente. Configura aqui el mensaje posterior a la conversion.',
      backLabel: 'Volver al inicio',
    },
    captureForm: {
      eyebrow: 'Formulario enriquecido',
      headlineFallback: 'Tambien puedes participar desde tu ciudad',
      headlineWithLocation: 'Tambien puedes participar desde {city} y pagar en {currency}',
      description: 'Completa tus datos para continuar con {productName} y conservar el contexto de tu pais.',
      firstNameLabel: 'Nombre',
      firstNamePlaceholder: 'Tu nombre',
      lastNameLabel: 'Apellido',
      lastNamePlaceholder: 'Tu apellido',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      whatsappLabel: 'WhatsApp',
      whatsappPlaceholder: '79790873',
      requiredError: 'Completa este campo.',
      emailRequiredError: 'Por favor, ingresa tu email.',
      invalidEmailError: 'Ingresa un email valido.',
      whatsappRequiredError: 'Por favor, ingresa tu WhatsApp.',
      invalidWhatsappError: 'Ingresa un numero de WhatsApp valido en formato internacional.',
      submitError: 'No pudimos procesar tu solicitud en este momento. Intentalo nuevamente.',
      submitLabel: 'Validar y enviar',
      submittingLabel: 'Enviando...',
    },
    event: {
      registrationAnchorId: 'registro-evento',
      startsAtIso: readEnv('VITE_EVENT_STARTS_AT', '2026-06-15T19:00:00-04:00'),
      hero: {
        eyebrow: 'Evento Gratuito Online',
        headline: 'MANEJA SIN MIEDO',
        subheadline:
          'Descubre cómo ganar confianza al volante y manejar con seguridad… aunque hoy sientas miedo, ansiedad o inseguridad al conducir.',
        imageAlt: 'Persona al volante recuperando confianza para manejar',
        formTitle: 'Reserva tu cupo gratuito ahora',
        primaryCtaLabel: 'QUIERO MANEJAR SIN MIEDO',
        secondaryCtaLabel: 'Ver lo que descubrirás',
        submittingLabel: 'Reservando...',
      },
      countdown: {
        label: 'El evento comienza en:',
        expiredLabel: 'El evento ya comenzó',
        units: {
          days: 'Días',
          hours: 'Horas',
          minutes: 'Min',
          seconds: 'Seg',
        },
      },
      foundation: {
        sectionEyebrow: 'Base visual',
        sectionTitle: 'Un sistema cálido para hablar de confianza, seguridad e independencia.',
        sectionText:
          'Esta primera versión define ritmo, aire visual, tarjetas, CTAs y superficies para construir luego las secciones del evento sin acoplarlas al VSL.',
        cardTitle: 'Foundation de evento',
        cardText: 'Preparado para countdown, agenda, autoridad y formulario en iteraciones futuras.',
      },
      promise: {
        title: 'Esto es lo que descubrirás en el evento:',
        bullets: [
          'Por qué el miedo al conducir NO significa que no seas capaz',
          'El verdadero motivo por el que muchas mujeres nunca logran ganar confianza al volante',
          'Cómo empezar a sentir seguridad al manejar incluso si llevas años evitándolo',
          'Cómo dejar de depender de otros para movilizarte',
        ],
        ctaLabel: 'QUIERO RESERVAR MI CUPO GRATIS',
      },
      agenda: {
        title: 'Lo que veremos durante el evento',
        items: [
          {
            label: 'Clase 1',
            title: 'Entender el miedo y recuperar confianza',
            description:
              'Por qué aparece el miedo al conducir, qué lo alimenta, y por qué muchas personas llevan años sin superarlo.',
          },
          {
            label: 'Clase 2',
            title: 'Los errores que mantienen el miedo vivo',
            description:
              'Los errores más comunes, qué cosas empeoran la inseguridad, y cómo empezar a cambiar tu relación con el volante.',
          },
          {
            label: 'Clase 3',
            title: 'El camino para manejar con seguridad',
            description:
              'Cómo empezar a recuperar independencia, cómo volver a confiar en ti, y cuál es el acompañamiento que he preparado para ayudarte en este proceso.',
          },
        ],
        ctaLabel: 'RESERVAR MI CUPO GRATUITO',
      },
      pain: {
        title: 'El miedo a conducir te está costando más de lo que crees…',
        intro: 'Tal vez hoy:',
        bullets: [
          'Evitas salir sola',
          'Dependes de alguien para movilizarte',
          'Te pierdes actividades con tus hijos',
          'Dices “otro día manejo”',
          'Tu auto pasa parqueado',
          'O simplemente sientes frustración cada vez que piensas en conducir',
        ],
        phrases: [
          'No es solo manejar…',
          'Es sentir que el miedo tiene el control.',
          'Y eso puede cambiar.',
        ],
        ctaLabel: 'QUIERO RECUPERAR MI CONFIANZA',
      },
      authority: {
        title: '¿Quién será tu guía en este proceso?',
        intro: 'Hola, soy Darío Avila.',
        bio:
          'Educador automotriz y creador de contenido con miles de seguidores en redes sociales, especializado en enseñanza automotriz y conducción práctica.',
        paragraphs: [
          'Durante años he visto cómo muchas personas NO tienen problemas de capacidad… Tienen problemas de confianza.',
          'Por eso creé “Maneja Sin Miedo”, un evento diseñado para ayudarte a recuperar seguridad al volante de forma práctica, emocional y progresiva.',
        ],
        quote: 'Porque manejar no debería sentirse como miedo… sino como libertad.',
        ctaLabel: 'QUIERO ASISTIR GRATIS AL EVENTO',
      },
      finalCta: {
        text:
          'Este evento gratuito tendrá cupos limitados para garantizar una mejor experiencia. Reserva ahora tu acceso antes de que se completen los registros.',
        ctaLabel: 'RESERVAR MI CUPO AHORA',
      },
    },
    pricingCard: {
      eyebrow: 'Oferta especial',
      title: 'Activa {productName} hoy mismo',
      baseValueLabel: 'Valor base',
      basePriceLabel: 'Precio base',
      subtotalLabel: 'Subtotal',
      localTaxesLabel: 'Impuestos locales',
      includedTaxesLabel: 'Incluidos',
      checkoutTotalLabel: 'Total final en {providerName}',
      equivalentLabel: 'Equivalente a {price} USD. Impuestos incluidos',
      internationalPriceLabel: 'Precio internacional directo.',
      buyButtonLabel: 'Comprar ahora',
      unavailableLabel: 'Producto no disponible',
      securePaymentLabel: 'Pago seguro',
      processedByLabel: 'Procesado por {providerName}',
      immediateAccessLabel: 'Acceso inmediato',
    },
    video: {
      smartPosterEyebrow: productName,
      smartPosterTitle: `Mira la presentacion de ${productName}`,
      smartPosterDescription: 'Configura aqui la descripcion del video principal.',
      smartPosterButtonText: 'Ver video',
      ctaEyebrow: 'Oferta activa',
      ctaHeadline: 'La oferta ya esta disponible',
      ctaButtonText: 'Ir al checkout',
      soundPrompt: 'Enciende tus parlantes',
      placeholderText: 'Video placeholder',
    },
    testimonials: {
      headline: 'Testimonios configurables',
      subtitle: 'Reemplaza estos placeholders por testimonios reales del nuevo funnel.',
      items: [
        {
          name: 'Cliente 1',
          quote: 'Testimonio placeholder 1.',
          image: '/assets/funnel-placeholder.svg',
        },
        {
          name: 'Cliente 2',
          quote: 'Testimonio placeholder 2.',
          image: '/assets/funnel-placeholder.svg',
        },
        {
          name: 'Cliente 3',
          quote: 'Testimonio placeholder 3.',
          image: '/assets/funnel-placeholder.svg',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Que debo configurar antes de publicar?',
          answer:
            'Actualiza el video, checkout, tracking, precios, garantias, testimonios, assets y copy desde <code>src/dna.config.ts</code> y las variables de entorno necesarias.',
        },
        {
          question: '¿El acceso al checkout esta activo?',
          answer:
            'No por defecto. El valor inicial es un placeholder seguro. Reemplazalo por la URL real del procesador de pago del nuevo funnel.',
        },
      ],
    },
  },
} as const satisfies DnaConfig;

export const dnaNumericPrices = {
  main: parsePrice(DNA.prices.main),
  bump: parsePrice(DNA.prices.bump),
  totalValue: parsePrice(DNA.prices.totalValue),
  regular: parsePrice(DNA.prices.regular),
  regularPrice: parsePrice(DNA.prices.regularPrice),
  vip: parsePrice(DNA.prices.vip),
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
    '--color-surface-muted': toRgbTriplet(DNA.surface.muted),
    '--color-primary': toRgbTriplet(DNA.colors.primary),
    '--color-secondary': toRgbTriplet(DNA.colors.accent),
    '--color-highlight': toRgbTriplet(DNA.colors.highlight),
    '--color-success': toRgbTriplet(DNA.colors.success),
    '--color-warning': toRgbTriplet(DNA.colors.warning),
    '--color-error': toRgbTriplet(DNA.colors.error),
    '--color-accent': toRgbTriplet(DNA.cta.bg),
    '--color-border-subtle': toRgbTriplet(DNA.text.subtle),
    '--color-text-main': toRgbTriplet(DNA.text.main),
    '--color-text-muted': toRgbTriplet(DNA.text.muted),
    '--color-text-subtle': toRgbTriplet(DNA.text.subtle),
    '--color-text-inverse': toRgbTriplet(DNA.text.inverse),
    '--color-brand-primary': toRgbTriplet(DNA.colors.primary),
    '--color-brand-accent': toRgbTriplet(DNA.colors.accent),
    '--color-cta-base': toRgbTriplet(DNA.cta.bg),
    '--color-cta-hover': toRgbTriplet(DNA.cta.hoverBg),
    '--color-cta-text': toRgbTriplet(DNA.cta.text),
    '--color-surface-bump': toRgbTriplet(DNA.surface.bump),
  } as const;
}
