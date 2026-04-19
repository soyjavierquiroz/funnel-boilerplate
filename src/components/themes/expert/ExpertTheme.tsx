import type { CSSProperties } from 'react';
import { Check, MapPin, Sparkles } from 'lucide-react';
import { DNA, resolveDnaThemeStyle } from '../../../dna.config';
import funnelConfig from '../../../core/config/funnel.config';
import {
  magiaAssets,
  magiaBenefits,
  magiaBrand,
  magiaDifferentiators,
  magiaExperience,
  magiaScheduleCards,
} from '../../../content/magia';
import { KurukinPlayer as ExpertVideoPlayer } from './components/video-player/src/kurukin-video-player';
import { ExpertCtaButton } from './ExpertCtaButton';
import { ExpertOrderForm } from './ExpertOrderForm';

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <p className="expert-body text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">{eyebrow}</p>
      <h2 className="expert-headline mt-3 text-[2.3rem] leading-none tracking-[-0.05em] text-[#3f3045] sm:text-[3.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="expert-body mx-auto mt-4 max-w-[640px] text-[1rem] leading-7 text-[#5f4f65] sm:text-[1.08rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ExpertTheme() {
  const heroVideo = funnelConfig.media.heroVideo;

  return (
    <div
      className="theme-expert min-h-screen bg-[rgb(255,248,249)] text-text-main"
      style={resolveDnaThemeStyle() as CSSProperties}
    >
      <section className="relative overflow-hidden border-b border-brand-accent/10 bg-[radial-gradient(circle_at_top,#f4d9eb_0%,#22152d_52%,#130d18_100%)] px-4 pb-14 pt-6 text-white sm:px-6 sm:pb-20">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(255,248,249,0.8))]" />

        <div className="relative mx-auto max-w-[1220px]">
          <header className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row">
            <div>
              <p className="expert-headline text-[1.65rem] tracking-[0.08em] text-[#ffe8cf] sm:text-[2rem]">
                {magiaBrand.title}
              </p>
              <p className="expert-body mt-1 text-xs uppercase tracking-[0.24em] text-white/70">{magiaBrand.eyebrow}</p>
            </div>

            <nav className="expert-body flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/80 sm:gap-6">
              <a href="#checkout" className="transition hover:text-[#ffe8cf]">Reservar</a>
              <a href="#ceremonia" className="transition hover:text-[#ffe8cf]">La ceremonia</a>
              <a href="#modalidades" className="transition hover:text-[#ffe8cf]">Modalidades</a>
            </nav>
          </header>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                <Sparkles className="h-4 w-4 text-[#ffe8cf]" />
                <span className="expert-body text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                  Ritual guiado para activar prosperidad
                </span>
              </div>

              <h1 className="expert-headline mt-6 max-w-[780px] text-[3rem] leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.8rem]">
                {DNA.copy.headline}
              </h1>
              <p className="expert-body mt-5 max-w-[640px] text-[1.05rem] leading-8 text-white/82 sm:text-[1.18rem]">
                {magiaBrand.subtitle}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {magiaBenefits.map((benefit) => (
                  <div key={benefit} className="glass-surface rounded-[26px] px-4 py-4">
                    <p className="expert-body text-sm leading-6 text-white/86">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="mb-4 flex items-center justify-center gap-[5px] rounded-[20px] border border-[#f6dfcc]/35 bg-[#f6dfcc]/12 px-4 py-3 text-center text-white">
                  <Sparkles className="h-4 w-4 shrink-0 text-[#ffe8cf]" />
                  <p className="expert-headline text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.3] sm:text-[15px]">
                    Mira la energia de la ceremonia y elige tu modalidad
                  </p>
                </div>

                {heroVideo.enabled ? (
                  <ExpertVideoPlayer
                    provider={heroVideo.provider}
                    videoId={heroVideo.videoId}
                    vslMode={true}
                    autoplay={true}
                    muted={true}
                    idleHideControls={true}
                    allowFullscreen={true}
                    resumePlayback={heroVideo.resumePlayback}
                    lazyLoadYoutube={heroVideo.lazyLoadYoutube}
                    hideYoutubeUi={heroVideo.hideYoutubeUi}
                    smartPoster={heroVideo.smartPoster}
                    vslProgressBarColor={heroVideo.vslProgressBarColor}
                    className="w-full rounded-[26px] border border-white/15 shadow-[0_20px_80px_rgba(7,6,10,0.45)]"
                  />
                ) : null}
              </div>

              <div className="mt-8 grid gap-4 rounded-[28px] border border-white/12 bg-white/8 p-5 backdrop-blur sm:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="expert-body text-xs uppercase tracking-[0.24em] text-[#ffe8cf]">Vista del funnel original</p>
                  <h3 className="expert-headline mt-3 text-[2rem] leading-none tracking-[-0.05em] text-white">
                    Un ritual presentado con claridad y una accion muy concreta.
                  </h3>
                  <p className="expert-body mt-4 text-sm leading-7 text-white/76">
                    Usamos la pieza visual original como referencia de atmosfera para mantener el tono ceremonial,
                    femenino y directo hacia la reserva del evento.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[24px] border border-white/12 bg-black/15">
                  <img
                    src={magiaAssets.landingPreviewUrl}
                    alt="Vista de referencia de Magia de la Abundancia"
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div>
              <ExpertOrderForm />
            </div>
          </div>
        </div>
      </section>

      <section id="ceremonia" className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionTitle
            eyebrow="Ceremonia Blanca"
            title="Un espacio sagrado para liberar bloqueos y abrir el flujo de abundancia."
            description="La experiencia original describe un ritual ancestral guiado con simbolos, afirmaciones y activacion energetica para ayudarte a conectar con tu poder interior."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div className="overflow-hidden rounded-[32px] border border-[rgb(var(--color-brand-accent)/0.12)] bg-white shadow-[0_24px_80px_rgba(67,42,76,0.12)]">
              <img
                src={magiaAssets.landingPreviewUrl}
                alt="Ceremonia Magia de la Abundancia"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="space-y-4">
              {magiaExperience.map((item) => (
                <div key={item} className="rounded-[24px] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(89,63,97,0.08)]">
                  <div className="flex gap-4">
                    <Check className="mt-1 h-6 w-6 shrink-0 text-brand-primary" />
                    <p className="expert-body text-[1rem] leading-7 text-[#4f4157]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="modalidades" className="bg-[linear-gradient(180deg,#f5e6ef_0%,#fff7f6_100%)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionTitle
            eyebrow="Proximas Ceremonias"
            title="Elige entre una experiencia virtual o una presencial en Cochabamba."
            description="Ambas modalidades conservan la misma esencia ritual y te llevan a una confirmacion contextual con instrucciones de acceso, pago y preparacion."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {magiaScheduleCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[32px] border border-[rgb(var(--color-brand-accent)/0.12)] bg-white shadow-[0_20px_60px_rgba(89,63,97,0.12)]"
              >
                <div className="grid gap-0 md:grid-cols-[1fr_1.05fr]">
                  <div className="flex flex-col justify-between px-6 py-6 sm:px-7">
                    <div>
                      <p className="expert-body text-xs uppercase tracking-[0.24em] text-brand-accent">Modalidad</p>
                      <h3 className="expert-headline mt-3 text-[2rem] leading-none tracking-[-0.05em] text-[#3f3045]">
                        {card.title}
                      </h3>
                      <p className="expert-body mt-4 text-[1rem] leading-7 text-[#5f4f65]">
                        {card.schedule}
                        <br />
                        Horas {card.hour}
                      </p>
                    </div>

                    <div className="mt-6 rounded-[22px] bg-[rgb(var(--color-surface-bump))] px-5 py-4">
                      <p className="expert-body text-xs uppercase tracking-[0.22em] text-brand-accent">Reserva</p>
                      <p className="expert-headline mt-2 text-[2.2rem] leading-none tracking-[-0.05em] text-brand-primary">
                        {card.price}
                      </p>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden bg-[#140f18]">
                    <img src={card.imageUrl} alt={card.title} className="h-full w-full object-cover object-top" loading="lazy" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <SectionTitle
            eyebrow="Por que es diferente"
            title="Una experiencia guiada con contencion, simbolismo y direccion concreta."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {magiaDifferentiators.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-[rgb(var(--color-brand-accent)/0.09)] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(89,63,97,0.08)]"
              >
                <p className="expert-body text-[1rem] leading-7 text-[#4f4157]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1180px] rounded-[36px] bg-[radial-gradient(circle_at_top,#f1dde8_0%,#ead0db_45%,#d8b8c8_100%)] px-6 py-10 text-center shadow-[0_24px_80px_rgba(89,63,97,0.16)] sm:px-10 sm:py-12">
          <MapPin className="mx-auto h-10 w-10 text-brand-accent" />
          <h2 className="expert-headline mt-4 text-[2.6rem] leading-none tracking-[-0.05em] text-[#3f3045] sm:text-[4rem]">
            Reserva tu lugar y recibe la confirmacion adecuada para tu sesion.
          </h2>
          <p className="expert-body mx-auto mt-5 max-w-[700px] text-[1rem] leading-7 text-[#5f4f65] sm:text-[1.08rem]">
            El formulario te guiara a una pagina de confirmacion distinta para Zoom o Cochabamba, con monto,
            instrucciones, QR y acceso a los videos de preparacion.
          </p>
          <div className="mx-auto mt-8 max-w-[420px]">
            <ExpertCtaButton
              href="#checkout"
              label={DNA.copy.ctaText}
              subLabel="Selecciona sabado o domingo dentro del formulario"
              fullWidth
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-accent/10 bg-[#1a1420] px-4 py-10 text-center text-white sm:px-6">
        <div className="mx-auto max-w-[980px]">
          <p className="expert-headline text-[1.65rem] tracking-[0.08em] text-[#ffe8cf]">{magiaBrand.title}</p>
          <p className="expert-body mx-auto mt-5 max-w-[760px] text-sm leading-7 text-white/70">
            Ritual guiado, informacion de pago y preparacion sujetos a la modalidad seleccionada. Este sitio solo
            centraliza el registro para la ceremonia y dirige a la confirmacion correspondiente.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ExpertTheme;
