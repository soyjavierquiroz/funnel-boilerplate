import funnelConfig from '../../../core/config/funnel.config';
import { CoreVideoPlayer } from '../../common/video-player';

export function PandaHero() {
  const { enabled: isVideoEnabled, ...videoProps } = funnelConfig.media.heroVideo;
  const primaryOffer = funnelConfig.pricing.products[funnelConfig.pricing.defaultProductKey];
  const ctaHref = primaryOffer?.checkoutUrl || '#demo';
  const isExternalLink = ctaHref.startsWith('http');

  return (
    <section className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.18),transparent_24%)]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                Panda Conversion System
              </p>
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl lg:leading-[0.94]">
                Desbloquea el potencial de tu negocio
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Una experiencia limpia, sobria y enfocada en el video para presentar tu oferta con claridad y una
                sensacion premium desde el primer segundo.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={ctaHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 text-base font-semibold text-white shadow-[0_20px_40px_rgba(8,145,178,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(8,145,178,0.32)]"
                target={isExternalLink ? '_blank' : undefined}
                rel={isExternalLink ? 'noreferrer' : undefined}
              >
                Quiero ver la oferta
              </a>
              <p className="text-sm leading-6 text-slate-400">
                {funnelConfig.brandName} combina narrativa, video y conversion sin contaminar el resto de la app.
              </p>
            </div>
          </div>

          <div id="demo" className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)] blur-2xl"
            />
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_32px_90px_rgba(0,0,0,0.42)]">
              {isVideoEnabled ? (
                <CoreVideoPlayer {...videoProps} className="aspect-video w-full rounded-none bg-transparent" />
              ) : (
                <div className="flex aspect-video items-center justify-center bg-[#0b1020] px-6 text-center text-sm text-slate-300">
                  Video no disponible
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PandaHero;
