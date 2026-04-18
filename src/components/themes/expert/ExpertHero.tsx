import type { ReactNode } from 'react';
import { Volume2 } from 'lucide-react';
import funnelConfig from '../../../core/config/funnel.config';
import { CoreVideoPlayer } from '../../common/video-player/CoreVideoPlayer';
import { ExpertCtaButton } from './ExpertCtaButton';
import { expertBrandAssets } from './expertContent';

interface ExpertHeroProps {
  aside: ReactNode;
}

export function ExpertHero({ aside }: ExpertHeroProps) {
  const heroVideo = funnelConfig.media.heroVideo;

  return (
    <section
      className="border-b border-[#dce7f3] bg-white bg-top bg-repeat pb-[60px]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.66) 0%, rgba(72,117,185,0.09) 98%), url(${expertBrandAssets.heroBackgroundUrl})`,
      }}
    >
      <div className="mx-auto max-w-[1225px] px-4 pt-4 sm:px-6">
        <header className="flex flex-col items-center justify-between gap-5 border-b border-[#e8edf3] pb-5 lg:flex-row">
          <img src={expertBrandAssets.logoUrl} alt="Expert Secrets" className="h-8 w-auto sm:h-9" />

          <nav className="expert-body flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#2d2d2d] sm:gap-6">
            <a href="#checkout" className="transition hover:text-[#4876b9]">Order Now</a>
            <a href="mailto:support@marketingsecrets.com" className="transition hover:text-[#4876b9]">Support</a>
            <a href="https://www.primemover.com/courses/expert-secrets" className="transition hover:text-[#4876b9]">Login</a>
          </nav>
        </header>

        <div className="mx-auto mt-5 max-w-[1040px]">
          <p className="expert-body text-center text-[0.82rem] font-bold lowercase tracking-[0.08em] text-[#4876b9] sm:text-[0.95rem]">
            what if people would actually pay you for your advice...?
          </p>

          <div className="mt-[20px] border-2 border-[#1d3557] bg-[#e7f5ff] px-[15px] pb-[10px] pt-[8px] text-center shadow-[0_12px_24px_rgba(72,117,185,0.08)]">
            <p className="expert-headline text-[18px] font-medium leading-tight tracking-[-0.025em] text-[#2d2d2d] sm:text-[28px] lg:text-[36px]">
              Your <span className="text-[#e01921]">FREE Copy</span> Of &apos;Expert Secrets&apos; Will Show You How To:
            </p>
          </div>

          <h1 className="expert-headline mt-[10px] text-center text-[1.68rem] font-black uppercase leading-none tracking-[-0.04em] text-[#2d2d2d] sm:text-[3.25rem] lg:text-[4.12rem]">
            “Find Your Message... Build A Tribe, And <span className="text-[#e01921]">Change The World!</span>”
          </h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_430px] lg:items-start">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-[20px] text-[#ffcc00]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="expert-headline text-[1rem] font-bold text-[#2d2d2d] sm:text-[1.25rem]">
                4.8 – 2,088 Amazon Ratings
              </p>
            </div>

            <div className="mb-4 flex items-center justify-center gap-[5px] bg-[#4775b9] px-[5px] py-[11px] text-center text-white">
              <Volume2 className="h-4 w-4 shrink-0" />
              <p className="expert-headline text-[12px] font-medium uppercase tracking-[0.08em] leading-[1.3] sm:text-[16px] sm:leading-none">
                Make Sure Your Sound Is Turned ON! <span className="font-normal normal-case">(Please wait for video to fully load)</span>
              </p>
            </div>

            {heroVideo.enabled ? (
              <CoreVideoPlayer
                provider={heroVideo.provider}
                videoId={heroVideo.videoId}
                autoplay={true}
                loop={true}
                muted={true}
                controls={false}
                vslMode={heroVideo.vslMode}
                resumePlayback={heroVideo.resumePlayback}
                lazyLoadYoutube={heroVideo.lazyLoadYoutube}
                hideYoutubeUi={heroVideo.hideYoutubeUi}
                hideYouTubeBranding={true}
                smartPoster={heroVideo.smartPoster}
                vslProgressBarColor={heroVideo.vslProgressBarColor}
                className="border-[6px] md:border-[8px] border-[#111] shadow-2xl w-full bg-black rounded-sm"
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
              “Expert Secrets is the map that will allow you to <span className="text-[#e01921]">turn your specialized knowledge</span>,
              talents and abilities into a business that will work for you.” - Robert Kiyosaki
            </blockquote>

            <div className="mx-auto mt-6 max-w-[420px] lg:hidden">
              <ExpertCtaButton
                href="#checkout"
                label="Reserve My Free Copy"
                subLabel="Jump straight to the 2-step order form"
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
