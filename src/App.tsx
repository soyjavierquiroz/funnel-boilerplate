import { useEffect, useRef } from 'react';
import { PricingCard } from './components/PricingCard';
import { BonusStack } from './components/funnel/BonusStack';
import { BentoGrid } from './components/funnel/BentoGrid';
import { MainVSL } from './components/funnel/MainVSL';
import { SectionWrapper } from './components/funnel/SectionWrapper';
import funnelConfig, { pricingProductKeys } from './config/funnel.config';
import analytics from './services/analytics';

function App() {
  const hasTrackedPageViewRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', funnelConfig.theme);

    if (hasTrackedPageViewRef.current) {
      return;
    }

    hasTrackedPageViewRef.current = true;
    void analytics.trackEvent('PageView', {
      page_title: document.title,
      page_path: window.location.pathname,
      page_url: window.location.href,
      brand_name: funnelConfig.brandName,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-page text-text-main">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[42rem]"
          style={{
            background:
              'radial-gradient(circle at top, rgb(var(--color-primary) / 0.22), transparent 52%), radial-gradient(circle at 80% 16%, rgb(var(--color-accent) / 0.16), transparent 24%)',
          }}
        />

        <SectionWrapper as="header" variant="display" spacing="md">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Panda Style Catalog</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-text-main sm:text-5xl lg:text-6xl">
                Catálogo visual para validar la coherencia del funnel completo en Panda Blue.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
                Reunimos los bloques principales en una sola página para revisar jerarquía, contraste, glows y ritmo de conversión antes de publicar en {funnelConfig.domain}.
              </p>
            </div>

            <div className="glass-surface rounded-[1.75rem] p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-primary/20 bg-primary/12 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">Primary</p>
                  <p className="mt-3 text-xl font-semibold text-text-main">#0011ff</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-secondary p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Secondary</p>
                  <p className="mt-3 text-xl font-semibold text-text-main">#0a0b1e</p>
                </div>
                <div className="rounded-[1.25rem] border border-accent/20 bg-accent/10 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Accent</p>
                  <p className="mt-3 text-xl font-semibold text-text-main">#00f2ff</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <MainVSL content={funnelConfig.content.mainVsl} video={funnelConfig.media.heroVideo} />
        <BentoGrid
          brandName={funnelConfig.brandName}
          domain={funnelConfig.domain}
          productCount={Object.keys(funnelConfig.pricing.products).length}
        />
        <BonusStack content={funnelConfig.content.bonusStack} />

        <SectionWrapper id="pricing" variant="display" spacing="lg">
          <section className="glass-surface space-y-8 rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <header className="space-y-3 border-b border-border-subtle/10 pb-6">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">Pricing Card Showcase</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{funnelConfig.brandName}</h2>
              <p className="max-w-2xl text-sm leading-6 text-text-muted md:text-base">
                Tarjetas de pricing apiladas en una sola superficie para comprobar contraste, lectura de precio y claridad del CTA en la nueva paleta Panda.
              </p>
            </header>

            <div className="rounded-[1.5rem] border border-border-subtle/10 bg-page/35 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Catálogo de Ofertas</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-text-main sm:text-3xl">
                Cada tarjeta mantiene el mismo sistema visual aunque cambie el producto.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-text-muted sm:text-base">
                El resultado es una sección de cierre limpia: precios localizados, CTA dominante y señales de seguridad con glows medidos.
              </p>
            </div>

            <section className="grid gap-4 border-t border-border-subtle/10 pt-6 lg:grid-cols-2">
              <PricingCard productId={pricingProductKeys.ofertaPrincipal} productName={`${funnelConfig.brandName} Principal`} />
              <PricingCard productId={pricingProductKeys.orderBump} productName={`${funnelConfig.brandName} Order Bump`} />
              <PricingCard
                productId={pricingProductKeys.upsellContinuidad}
                productName={`${funnelConfig.brandName} Continuidad`}
              />
              <PricingCard productId={pricingProductKeys.upsellVip} productName={`${funnelConfig.brandName} VIP`} />
            </section>
          </section>
        </SectionWrapper>
      </div>
    </main>
  );
}

export default App;
