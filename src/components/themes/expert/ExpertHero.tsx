import type { ReactNode } from 'react';
import { Volume2 } from 'lucide-react';
import { DNA } from '../../../dna.config';
import funnelConfig from '../../../core/config/funnel.config';
import { KurukinPlayer as ExpertVideoPlayer } from './components/video-player/src/kurukin-video-player';
import { ExpertCtaButton } from './ExpertCtaButton';
import { expertBrandAssets } from './expertContent';

interface ExpertHeroProps {
  aside: ReactNode;
}

export function ExpertHero({ aside }: ExpertHeroProps) {
  const heroVideo = funnelConfig.media.heroVideo;

  return (
    <section
      className="border-b border-brand-accent/10 bg-white bg-top bg-repeat pb-[60px]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgb(255 255 255 / 0.66) 0%, rgb(var(--color-brand-accent) / 0.09) 98%), url(${expertBrandAssets.heroBackgroundUrl})`,
      }}
    >
      <div className="mx-auto max-w-[1225px] px-4 pt-4 sm:px-6">
        <header className="flex flex-col items-center justify-between gap-5 border-b border-brand-accent/10 pb-5 lg:flex-row">
          <img src={expertBrandAssets.logoUrl} alt="Expert Secrets" className="h-8 w-auto sm:h-9" />

          <nav className="expert-body flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#2d2d2d] sm:gap-6">
            <a href="#checkout" className="transition hover:text-brand-accent">Order Now</a>
            <a href="mailto:support@marketingsecrets.com" className="transition hover:text-brand-accent">Support</a>
            <a href="https://www.primemover.com/courses/expert-secrets" className="transition hover:text-brand-accent">Login</a>
          </nav>
        </header>

        <div className="mx-auto mt-4 max-w-[1040px] md:mt-5">
          <p className="expert-body px-2 text-center text-xs font-bold lowercase tracking-[0.05em] text-brand-accent text-balance md:px-0 md:text-sm">
            what if people would actually pay you for your advice...?
          </p>

          <div className="mt-[16px] border-2 border-brand-accent bg-brand-accent/5 px-3 pb-[10px] pt-[8px] text-center shadow-[0_12px_24px_rgba(72,117,185,0.08)] md:mt-[20px] md:px-[15px]">
            <p className="expert-headline text-balance text-[14px] font-medium leading-tight tracking-[-0.02em] text-[#2d2d2d] sm:text-[16px] md:text-[20px] lg:text-[36px]">
              Tu acceso a <span className="text-brand-primary">{DNA.copy.productName}</span> te mostrará cómo:
            </p>
          </div>

          <h1 className="expert-headline mt-[10px] text-center text-[1.68rem] font-black uppercase leading-none tracking-[-0.04em] text-[#2d2d2d] sm:text-[3.25rem] lg:text-[4.12rem]">
            “Escalar tu oferta, duplicar tu sistema y <span className="text-brand-primary">cerrar con más claridad</span>”
          </h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_430px] lg:items-start">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[20px] text-cta">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="expert-headline text-[1rem] font-bold text-[#2d2d2d] sm:text-[1.25rem]">
                4.8 – 2,088 Amazon Ratings
              </p>
            </div>

            <div className="mb-4 flex items-center justify-center gap-[5px] bg-brand-accent px-[5px] py-[11px] text-center text-white">
              <Volume2 className="h-4 w-4 shrink-0" />
              <p className="expert-headline text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.3] sm:text-[16px] sm:leading-none">
                Make Sure Your Sound Is Turned ON! <span className="font-normal normal-case">(Please wait for video to fully load)</span>
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
                allowFullscreen={false}
                resumePlayback={heroVideo.resumePlayback}
                lazyLoadYoutube={heroVideo.lazyLoadYoutube}
                hideYoutubeUi={heroVideo.hideYoutubeUi}
                smartPoster={heroVideo.smartPoster}
                vslProgressBarColor={heroVideo.vslProgressBarColor}
                className="border-[6px] md:border-[8px] border-[#111] shadow-2xl w-full rounded-sm"
              />
            ) : (
              <img
                src={expertBrandAssets.heroPosterUrl}
                alt="Expert Secrets video poster"
                className="border-[6px] md:border-[8px] border-[#111] shadow-2xl w-full bg-black rounded-sm aspect-video object-cover"
              />
            )}

            <img
              src={expertBrandAssets.heroCoverUrl}
              alt="Expert Secrets cover"
              className="mt-4 w-full"
              loading="lazy"
            />

            <blockquote className="expert-headline mt-5 text-center text-[1.15rem] font-semibold leading-8 tracking-[-0.04em] text-[#2d2d2d] sm:text-[1.5rem]">
              “{DNA.copy.productName} organiza tu mensaje, tu oferta y tu stack para que el funnel convierta sin cargar lógica visual innecesaria.”
            </blockquote>

            <div className="mx-auto mt-6 max-w-[420px] lg:hidden">
              <ExpertCtaButton
                href="#checkout"
                label={`Quiero entrar a ${DNA.copy.productName}`}
                subLabel={`Precio principal: $${DNA.prices.main}`}
                fullWidth
              />
            </div>
          </div>

          <div>{aside}</div>
        </div>
      </div>
    </section>
  );
}

export default ExpertHero;
