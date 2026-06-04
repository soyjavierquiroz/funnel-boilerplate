import { Volume2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import { KurukinPlayer } from '../components/video-player/src/kurukin-video-player';

interface ExpertOfferVslProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferVsl({ offer }: ExpertOfferVslProps) {
  const video = offer.video;
  const hasVideo = video.videoId.trim().length > 0 && video.videoId !== 'REPLACE_WITH_VSL_VIDEO_ID';

  return (
    <section className="bg-event-page px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {video.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3.2rem]">
            {video.title}
          </h2>
          <p className="expert-body mx-auto mt-4 max-w-[720px] text-base font-semibold leading-7 text-event-muted sm:text-[1.08rem] sm:leading-8">
            {video.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[920px] overflow-hidden rounded-lg border-[5px] border-event-navy bg-event-ink shadow-[0_24px_70px_rgb(var(--color-event-navy)/0.24)] sm:border-[7px]">
          <div className="flex items-center justify-center gap-2 bg-event-coral px-4 py-3 text-center text-text-inverse">
            <Volume2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <p className="expert-event-kicker text-[0.62rem] font-bold uppercase leading-5 sm:text-[0.7rem]">
              {video.soundPrompt}
            </p>
          </div>

          <div className="relative aspect-video bg-event-ink">
            {hasVideo ? (
              <KurukinPlayer
                provider={video.provider}
                videoId={video.videoId}
                vslMode
                autoplay={false}
                muted={false}
                idleHideControls
                allowFullscreen={false}
                resumePlayback
                vslProgressBarColor={video.progressBarColor}
                smartPoster={{
                  enabled: Boolean(video.posterImage),
                  imageUrl: video.posterImage,
                  title: video.title,
                  description: video.subtitle,
                  buttonText: video.eyebrow,
                }}
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-event-ink px-6 text-center">
                <p className="expert-body text-sm font-bold uppercase tracking-wide text-text-inverse/60 sm:text-base">
                  {video.placeholderText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferVsl;
