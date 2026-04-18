import { useEffect, useRef } from 'react';
import { AdvancedCaptureForm } from './components/AdvancedCaptureForm';
import { PricingCard } from './components/PricingCard';
import { BonusStack } from './components/funnel/BonusStack';
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
          className="pointer-events-none absolute inset-x-0 top-0 h-[38rem]"
          style={{
            background: 'radial-gradient(circle at top, rgb(var(--color-primary) / 0.18), transparent 62%)',
          }}
        />

        <MainVSL content={funnelConfig.content.mainVsl} video={funnelConfig.media.heroVideo} />
        <BonusStack content={funnelConfig.content.bonusStack} />

        <SectionWrapper id="pricing" variant="display" spacing="lg">
          <section className="glass-surface space-y-8 rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <header className="space-y-3 border-b border-border-subtle/10 pb-6">
              <p className="text-sm uppercase tracking-[0.24em] text-primary/80">Funnel Engine</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{funnelConfig.brandName}</h2>
              <p className="max-w-2xl text-sm leading-6 text-text-muted md:text-base">
                Runtime agnóstico para video, captura y pricing multi-producto, con ritmo visual de carta de ventas y capas de profundidad premium.
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <section className="space-y-5 rounded-[1.5rem] border border-border-subtle/10 bg-page/35 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Captura + Checkout</p>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-text-main sm:text-3xl">
                  Mantén el impulso de la VSL y llévalo directo a la acción.
                </h3>
                <p className="text-sm leading-6 text-text-muted sm:text-base">
                  Este bloque sostiene el ritmo de lectura con una transición limpia desde la promesa principal hacia captura, checkout y monetización adicional.
                </p>

                <div className="grid gap-3 text-sm text-text-muted">
                  <p className="rounded-2xl border border-border-subtle/10 bg-surface/50 px-4 py-3">
                    Formulario listo para activación inmediata y automatización de seguimiento.
                  </p>
                  <p className="rounded-2xl border border-border-subtle/10 bg-surface/50 px-4 py-3">
                    Pricing geolocalizado para oferta principal, bumps y upsells.
                  </p>
                  <p className="rounded-2xl border border-border-subtle/10 bg-surface/50 px-4 py-3">
                    Toda la oferta sigue siendo configurable desde un solo `funnel.config.ts`.
                  </p>
                </div>
              </section>
              <aside>
                <AdvancedCaptureForm />
              </aside>
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
