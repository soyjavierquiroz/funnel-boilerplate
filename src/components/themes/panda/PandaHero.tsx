import { Sparkles } from 'lucide-react';
import funnelConfig from '../../../core/config/funnel.config';
import { KurukinPlayer as PandaVideoPlayer } from './components/video-player/src/kurukin-video-player';

export function PandaHero() {
  const { enabled: isVideoEnabled, ...videoProps } = funnelConfig.media.heroVideo;
  const primaryOffer = funnelConfig.pricing.products[funnelConfig.pricing.defaultProductKey];
  const ctaHref = primaryOffer?.checkoutUrl || '#demo';
  const isExternalLink = ctaHref.startsWith('http');

  return (
    <section className="relative isolate overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-6 h-[500px] w-[500px] rounded-full bg-brand-primary/20 blur-[120px] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-24 h-[500px] w-[500px] rounded-full bg-cta/20 blur-[120px] mix-blend-screen"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle/25 bg-surface/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-text-muted backdrop-blur-xl sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-cta" />
            Panda para VSLs y negocios
          </span>

          <div className="mt-6 max-w-5xl space-y-4 md:mt-8 md:space-y-5">
            <h1 className="text-4xl font-bold tracking-tighter text-text-main sm:text-5xl md:text-7xl md:leading-[0.95]">
              Aloja, protege y presenta tu video como una experiencia premium desde el primer segundo.
            </h1>
            <p className="mx-auto max-w-2xl text-base font-light leading-7 text-text-muted sm:text-lg md:text-xl">
              Una interfaz oscura, precisa y cinematográfica para VSLs, clases, demostraciones y ofertas que dependen
              de una reproducción impecable para convertir.
            </p>
          </div>

          <div id="demo" className="relative mt-10 w-full md:mt-16">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 bg-brand-primary/20 blur-[150px]"
            />
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-border-subtle/30 shadow-[0_0_100px_rgb(var(--color-cta-base)/0.15)] md:rounded-[2rem]">
              {isVideoEnabled ? (
                <PandaVideoPlayer
                  {...videoProps}
                  vslMode={true}
                  autoplay={true}
                  muted={true}
                  idleHideControls={true}
                  allowFullscreen={false}
                  className="aspect-video w-full rounded-none"
                />
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-surface-bump px-6 text-center text-sm text-text-muted">
                  Video no disponible
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-center md:mt-10">
            <a
              href={ctaHref}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-cta px-6 text-base font-semibold text-text-main shadow-[0_24px_80px_rgb(var(--color-brand-primary)/0.35)] transition duration-300 hover:-translate-y-0.5 hover:from-brand-primary hover:to-cta-hover hover:shadow-[0_28px_100px_rgb(var(--color-cta-base)/0.45)] sm:px-8"
              target={isExternalLink ? '_blank' : undefined}
              rel={isExternalLink ? 'noreferrer' : undefined}
            >
              Quiero ver la oferta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PandaHero;
