import { CheckCircle2, Volume2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { KurukinPlayer } from '../components/video-player/src/kurukin-video-player';
import { ExpertOfferCta } from './ExpertOfferCta';
import { isOfferCheckoutConfigured } from './offerUtils';

interface ExpertOfferHeroVslProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
}

export function ExpertOfferHeroVsl({ offer, trackingEnabled, trafficChannel }: ExpertOfferHeroVslProps) {
  const video = offer.video;
  const isCheckoutConfigured = isOfferCheckoutConfigured(offer.checkoutUrl);
  const hasVideo = video.videoId.trim().length > 0 && video.videoId !== 'REPLACE_WITH_VSL_VIDEO_ID';

  return (
    <section className="relative isolate overflow-hidden bg-event-navy px-5 pb-12 pt-8 text-text-inverse sm:px-6 sm:pb-16 sm:pt-10 lg:px-10 lg:pb-20">
      <img
        src={offer.heroImage}
        alt={offer.heroImageAlt}
        className="absolute inset-0 h-full w-full object-cover object-[38%_center] opacity-24 sm:object-center lg:opacity-44"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgb(var(--color-event-navy) / 0.9) 0%, rgb(var(--color-event-navy) / 0.92) 48%, rgb(var(--color-event-navy) / 0.98) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase leading-5 text-event-sky sm:text-xs">
            {offer.eyebrow}
          </p>
          <h1 className="expert-headline mt-4 text-[2.55rem] leading-[0.96] text-text-inverse sm:text-[4.3rem] sm:leading-[0.92] lg:text-[5.2rem]">
            {offer.title}
          </h1>
          <p className="expert-body mx-auto mt-5 max-w-[720px] text-[1.02rem] font-semibold leading-7 text-text-inverse/82 sm:text-[1.18rem] sm:leading-8">
            {offer.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.42fr)] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-lg border-[5px] border-event-coral bg-event-ink shadow-[0_28px_78px_rgb(var(--color-event-ink)/0.34)] sm:border-[7px]">
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

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {offer.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex min-h-[76px] items-start gap-2 rounded-lg border border-text-inverse/14 bg-text-inverse/8 p-3 backdrop-blur"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-event-sky" aria-hidden="true" />
                  <span className="expert-body text-sm font-bold leading-5 text-text-inverse/90">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-text-inverse/18 bg-event-surface/96 p-5 text-event-ink shadow-[0_24px_70px_rgb(var(--color-event-ink)/0.24)] sm:p-6 lg:sticky lg:top-6">
            <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
              {offer.productName}
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-3">
              <span className="expert-headline text-[3rem] leading-none text-event-navy sm:text-[3.6rem]">
                {offer.price}
              </span>
              <span className="expert-body pb-2 text-sm font-bold text-event-muted">
                <span className="line-through">{offer.regularPrice}</span> {offer.regularPriceLabel}
              </span>
            </div>

            <div className="mt-5">
              <ExpertOfferCta offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
            </div>

            <p className="expert-body mt-3 text-sm font-semibold leading-6 text-event-muted">
              {isCheckoutConfigured ? offer.guarantee : offer.checkoutPendingMessage}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferHeroVsl;
