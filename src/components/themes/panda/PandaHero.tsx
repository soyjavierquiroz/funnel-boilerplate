import { Sparkles } from 'lucide-react';
import funnelConfig from '../../../core/config/funnel.config';
import { CoreVideoPlayer } from '../../common/video-player';

export function PandaHero() {
  const { enabled: isVideoEnabled, ...videoProps } = funnelConfig.media.heroVideo;
  const primaryOffer = funnelConfig.pricing.products[funnelConfig.pricing.defaultProductKey];
  const ctaHref = primaryOffer?.checkoutUrl || '#demo';
  const isExternalLink = ctaHref.startsWith('http');

  return (
    <section className="relative isolate px-6 py-24 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute left-[-10%] top-6 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-12%] top-24 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen pointer-events-none"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-gray-300 backdrop-blur-xl">
          <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          Panda para VSLs y negocios
        </span>

        <div className="mt-8 max-w-4xl space-y-5">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
            Aloja, protege y presenta tu video como una experiencia premium desde el primer segundo.
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-base font-light leading-7 text-gray-400 sm:text-lg">
            Una interfaz oscura, precisa y cinematográfica para VSLs, clases, demostraciones y ofertas que dependen
            de una reproducción impecable para convertir.
          </p>
        </div>

        <div id="demo" className="relative mt-14 w-full max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute inset-x-12 top-10 h-40 rounded-full bg-gradient-to-r from-[#0047ff]/40 via-cyan-400/35 to-[#00bfff]/40 blur-[100px] pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-16 mx-auto h-24 w-[85%] rounded-full bg-white/10 blur-[60px] pointer-events-none"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-2xl">
            {isVideoEnabled ? (
              <CoreVideoPlayer {...videoProps} className="aspect-video w-full rounded-none bg-transparent" />
            ) : (
              <div className="flex aspect-video items-center justify-center bg-[#0b1020] px-6 text-center text-sm text-gray-400">
                Video no disponible
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={ctaHref}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#0047ff] to-[#00bfff] px-8 text-base font-semibold text-white shadow-[0_24px_80px_rgba(0,110,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_100px_rgba(0,140,255,0.45)]"
            target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noreferrer' : undefined}
          >
            Quiero ver la oferta
          </a>
        </div>
      </div>
    </section>
  );
}

export default PandaHero;
