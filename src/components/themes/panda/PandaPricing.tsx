import { BadgeCheck, Check, Lock, ShieldCheck } from 'lucide-react';
import { useMemo } from 'react';
import funnelConfig, { pricingProductKeys } from '../../../core/config/funnel.config';
import analytics from '../../../core/services/analytics';
import { useHotmartPrices } from '../../../core/hooks/useHotmartPrices';
import { useVisitor } from '../../../core/visitor/VisitorContext';

const trustCues = [
  { icon: ShieldCheck, label: 'Pago Seguro' },
  { icon: Lock, label: 'Cifrado SSL' },
  { icon: BadgeCheck, label: 'Garantía 7 días' },
];

const pricingPlans = [
  {
    productKey: pricingProductKeys.orderBump,
    eyebrow: 'Entrada',
    title: 'Starter',
    description: 'Una puerta de entrada compacta para acelerar la decisión sin romper la estética premium.',
    featured: false,
    features: ['Acceso inmediato', 'Setup ligero', 'Checkout geolocalizado'],
  },
  {
    productKey: pricingProductKeys.ofertaPrincipal,
    eyebrow: 'Oferta Principal',
    title: 'Panda Core',
    description: 'La opción central con el mejor balance entre autoridad visual, conversión y monetización.',
    featured: true,
    features: ['Flujo principal optimizado', 'Mayor autoridad visual', 'Stack de monetización completo'],
  },
  {
    productKey: pricingProductKeys.upsellVip,
    eyebrow: 'Escala Total',
    title: 'Panda Elite',
    description: 'La capa de acompañamiento más alta para quien quiere soporte intensivo y margen premium.',
    featured: false,
    features: ['Prioridad estratégica', 'Escala premium', 'Acompañamiento intensivo'],
  },
] as const;

function formatCurrency(value: number, currencyCode: string) {
  try {
    return new Intl.NumberFormat('es-419', {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `${value} ${currencyCode}`;
  }
}

function PandaPricingCard({
  productKey,
  eyebrow,
  title,
  description,
  features,
  featured = false,
}: {
  productKey: string;
  eyebrow: string;
  title: string;
  description: string;
  features: readonly string[];
  featured?: boolean;
}) {
  const { visitorData } = useVisitor();
  const { product, resolvedProductKey, scrapedData, status, hasRequestedProduct } = useHotmartPrices(productKey);

  const countryCode = visitorData?.country_code?.toUpperCase() ?? 'US';
  const currencyCode = visitorData?.currency?.toUpperCase() ?? 'USD';
  const resolvedCheckoutUrl = hasRequestedProduct ? product.checkoutUrl : undefined;

  const countryPricing = useMemo(() => {
    if (!scrapedData) return undefined;
    return scrapedData[countryCode];
  }, [countryCode, scrapedData]);

  const localizedNumeric = Number(countryPricing?.total ?? '');
  const hasLocalizedNumeric = status === 'ready' && Number.isFinite(localizedNumeric) && localizedNumeric > 0;
  const displayAmount = hasLocalizedNumeric ? localizedNumeric : product.basePriceUSD;
  const displayCurrency = hasLocalizedNumeric ? currencyCode : 'USD';

  const handleCheckoutClick = () => {
    if (!resolvedCheckoutUrl) {
      return;
    }

    void analytics.trackEvent('InitiateCheckout', {
      product_id: resolvedProductKey,
      product_name: title,
      content_name: funnelConfig.brandName,
      checkout_url: resolvedCheckoutUrl,
      hotmart_product_id: product.hotmartProductId,
      country_code: countryCode,
      currency: displayCurrency,
      value: displayAmount,
    });
  };

  return (
    <article
      className={[
        'relative overflow-hidden rounded-[2rem] border bg-surface/70 p-8 shadow-2xl shadow-brand-accent/40 backdrop-blur-2xl md:p-10',
        featured
          ? 'border-cta/60 shadow-[0_0_80px_rgb(var(--color-brand-primary)/0.18)]'
          : 'border-border-subtle/20',
      ].join(' ')}
    >
      {featured ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-primary to-cta px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-text-main shadow-[0_0_15px_rgb(var(--color-cta-base)/0.4)]">
          Más Popular
        </div>
      ) : null}

      {featured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-8 h-32 rounded-full bg-brand-primary/20 blur-[90px]"
        />
      ) : null}

      <div className="relative">
        <span className="inline-flex rounded-full border border-border-subtle/20 bg-brand-accent/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
          {eyebrow}
        </span>

        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-text-main">{title}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-text-muted">{description}</p>

        <div className="mt-8 rounded-[1.5rem] border border-border-subtle/20 bg-surface-bump p-5">
          {status === 'loading' ? (
            <div className="space-y-2">
              <p className="text-sm text-text-muted/80">Calculando precio geolocalizado…</p>
              <div className="h-10 w-32 rounded-xl bg-text-main/5" />
            </div>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.18em] text-text-muted/80">Precio de hoy</p>
              <p className="mt-3 text-5xl font-bold tracking-tighter text-text-main drop-shadow-md md:text-6xl">
                {formatCurrency(displayAmount, displayCurrency)}
              </p>
              <p className="mt-2 text-sm text-text-muted/80">
                {hasLocalizedNumeric
                  ? `Geolocalizado para ${countryCode} con HotPrices.`
                  : `Precio base internacional: ${formatCurrency(product.basePriceUSD, 'USD')}.`}
              </p>
            </>
          )}
        </div>

        <div className="mt-6 space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-sm text-text-muted">
              <Check className="h-4 w-4 shrink-0 text-cta" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          {resolvedCheckoutUrl ? (
            <a
              href={resolvedCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              onClick={handleCheckoutClick}
              className={[
                'inline-flex min-h-14 w-full items-center justify-center rounded-2xl px-6 text-base font-semibold text-text-main',
                featured
                  ? 'cta-shimmer bg-gradient-to-r from-brand-primary to-cta shadow-[0_0_20px_rgb(var(--color-cta-base)/0.4)] transition-transform hover:scale-105 hover:to-cta-hover'
                  : 'border border-border-subtle/30 bg-surface-bump/80 transition-colors hover:bg-surface-bump',
              ].join(' ')}
            >
              Ir al pago
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center rounded-2xl border border-border-subtle/20 bg-surface-bump/60 px-6 text-base font-semibold text-text-main/60"
            >
              Producto no disponible
            </button>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {trustCues.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border-subtle/20 bg-brand-accent/50 px-3 py-2 text-[10px] uppercase tracking-widest text-text-main/40"
              >
                <Icon className="h-3.5 w-3.5 text-cta/50" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function PandaPricing() {
  return (
    <section id="pricing" className="relative isolate py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-0 h-[500px] w-[500px] rounded-full bg-brand-primary/20 blur-[120px] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-cta/20 blur-[120px] mix-blend-screen"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border-subtle/20 bg-surface/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-text-muted">
            Panda Pricing
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-text-main sm:text-4xl">
            Precios dinámicos conectados a HotPrices y listos para convertir.
          </h2>
          <p className="mt-4 text-base leading-7 text-text-muted">
            La tabla se adapta a la moneda y al país del visitante sin sacrificar la estética de software premium.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PandaPricingCard
              key={plan.productKey}
              productKey={plan.productKey}
              eyebrow={plan.eyebrow}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              featured={Boolean(plan.featured)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PandaPricing;
