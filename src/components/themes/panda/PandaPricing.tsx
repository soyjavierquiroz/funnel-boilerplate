import { BadgeCheck, Lock, ShieldCheck } from 'lucide-react';
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
  },
  {
    productKey: pricingProductKeys.ofertaPrincipal,
    eyebrow: 'Oferta Principal',
    title: 'Panda Core',
    description: 'La opción central con el mejor balance entre autoridad visual, conversión y monetización.',
    featured: true,
  },
  {
    productKey: pricingProductKeys.upsellVip,
    eyebrow: 'Escala Total',
    title: 'Panda Elite',
    description: 'La capa de acompañamiento más alta para quien quiere soporte intensivo y margen premium.',
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
  featured = false,
}: {
  productKey: string;
  eyebrow: string;
  title: string;
  description: string;
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
        'glass-surface relative overflow-hidden rounded-[2rem] border bg-white/[0.03] p-6 backdrop-blur-xl',
        featured
          ? 'border-cyan-500 shadow-[0_0_80px_rgba(34,211,238,0.12)]'
          : 'border-white/10',
      ].join(' ')}
    >
      {featured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-8 h-32 rounded-full bg-cyan-500/10 blur-[90px]"
        />
      ) : null}

      <div className="relative">
        <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-300">
          {eyebrow}
        </span>

        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">{description}</p>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
          {status === 'loading' ? (
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Calculando precio geolocalizado…</p>
              <div className="h-10 w-32 rounded-xl bg-white/5" />
            </div>
          ) : (
            <>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Precio de hoy</p>
              <p className="mt-3 text-4xl font-bold tracking-tight text-white">
                {formatCurrency(displayAmount, displayCurrency)}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {hasLocalizedNumeric
                  ? `Geolocalizado para ${countryCode} con HotPrices.`
                  : `Precio base internacional: ${formatCurrency(product.basePriceUSD, 'USD')}.`}
              </p>
            </>
          )}
        </div>

        <div className="mt-6">
          {resolvedCheckoutUrl ? (
            <a
              href={resolvedCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              onClick={handleCheckoutClick}
              className={[
                'cta-shimmer inline-flex min-h-14 w-full items-center justify-center rounded-2xl px-6 text-base font-semibold text-white transition hover:opacity-95',
                featured
                  ? 'bg-gradient-to-r from-[#0047ff] to-[#00bfff] shadow-[0_20px_60px_rgba(0,191,255,0.24)]'
                  : 'border border-white/10 bg-white/[0.04]',
              ].join(' ')}
            >
              Ir al pago
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-base font-semibold text-white/60"
            >
              Producto no disponible
            </button>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {trustCues.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-500"
              >
                <Icon className="h-3.5 w-3.5 text-cyan-400" />
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
        className="absolute left-[-8%] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-gray-300">
            Panda Pricing
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Precios dinámicos conectados a HotPrices y listos para convertir.
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-400">
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
              featured={Boolean(plan.featured)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PandaPricing;
