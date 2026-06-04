import { Volume2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { KurukinPlayer } from '../components/video-player/src/kurukin-video-player';
import { ExpertOfferOrderCard } from './ExpertOfferOrderCard';

interface ExpertOfferVslOrderProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
}

export function ExpertOfferVslOrder({ offer, trackingEnabled, trafficChannel }: ExpertOfferVslOrderProps) {
  const video = offer.video;
  const videoSource = video.url || video.videoId;
  const hasVideo = videoSource.trim().length > 0 && videoSource !== 'REPLACE_WITH_VSL_VIDEO_ID';

  return (
    <section className="bg-event-surface px-5 pb-10 sm:px-6 sm:pb-14 lg:pb-16">
      <div className="mx-auto grid w-full max-w-[1140px] gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(318px,0.38fr)] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-md border-[6px] border-event-navy bg-event-ink shadow-[0_22px_62px_rgb(var(--color-event-navy)/0.2)]">
            <div className="flex items-center justify-center gap-2 bg-event-navy px-4 py-3 text-center text-text-inverse">
              <Volume2 className="h-4 w-4 shrink-0 text-event-sky" aria-hidden="true" />
              <p className="expert-event-kicker text-[0.62rem] font-bold uppercase leading-5 sm:text-[0.7rem]">
                {video.soundPrompt}
              </p>
            </div>

            <div className="relative aspect-video bg-event-ink">
              {hasVideo ? (
                <KurukinPlayer
                  provider={video.provider}
                  videoId={videoSource}
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
                    eyebrow: video.eyebrow,
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

          <div className="mx-auto mt-5 max-w-[820px] text-center">
            <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
              {video.eyebrow}
            </p>
            <h2 className="expert-headline mt-2 text-[1.55rem] leading-tight text-event-navy sm:text-[2rem]">
              {video.title}
            </h2>
            <p className="expert-body mt-3 text-sm font-semibold leading-6 text-event-muted sm:text-base sm:leading-7">
              {video.subtitle}
            </p>
          </div>
        </div>

        <ExpertOfferOrderCard
          offer={offer}
          trackingEnabled={trackingEnabled}
          trafficChannel={trafficChannel}
          className="lg:sticky lg:top-6"
        />
      </div>
    </section>
  );
}

export default ExpertOfferVslOrder;
