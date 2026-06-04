import { CheckCircle2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferCta } from './ExpertOfferCta';
import { isOfferCheckoutConfigured } from './offerUtils';

interface ExpertOfferHeroProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
}

export function ExpertOfferHero({ offer, trackingEnabled, trafficChannel }: ExpertOfferHeroProps) {
  const isCheckoutConfigured = isOfferCheckoutConfigured(offer.checkoutUrl);

  return (
    <section className="relative isolate overflow-hidden bg-event-navy px-5 py-8 text-text-inverse sm:px-6 sm:py-10 lg:px-10">
      <img
        src={offer.heroImage}
        alt={offer.heroImageAlt}
        className="absolute inset-0 h-full w-full object-cover object-[38%_center] opacity-36 sm:object-center lg:opacity-80"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgb(var(--color-event-navy) / 0.78) 0%, rgb(var(--color-event-navy) / 0.86) 54%, rgb(var(--color-event-navy) / 0.98) 100%)',
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--color-event-navy) / 0.98) 0%, rgb(var(--color-event-navy) / 0.82) 42%, rgb(var(--color-event-navy) / 0.24) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[680px] w-full max-w-[1180px] items-center gap-8 py-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.72fr)]">
        <div className="max-w-[760px]">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase leading-5 text-event-sky sm:text-xs">
            {offer.eyebrow}
          </p>

          <h1 className="expert-headline mt-4 text-[2.35rem] leading-[0.96] text-text-inverse sm:text-[4rem] sm:leading-[0.92] lg:text-[5rem]">
            {offer.headline}
          </h1>

          <p className="expert-body mt-5 max-w-[620px] text-[1.02rem] font-semibold leading-7 text-text-inverse/82 sm:text-[1.18rem] sm:leading-8">
            {offer.subheadline}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {offer.bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex min-h-[72px] items-start gap-2 rounded-lg border border-text-inverse/14 bg-text-inverse/8 p-3 backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-event-sky" aria-hidden="true" />
                <span className="expert-body text-sm font-bold leading-5 text-text-inverse/90">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-text-inverse/18 bg-event-surface/95 p-5 text-event-ink shadow-[0_24px_70px_rgb(var(--color-event-ink)/0.24)] sm:p-6">
          <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
            {offer.productName}
          </p>
          <div className="mt-4 flex items-end gap-3">
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
            {isCheckoutConfigured ? offer.guarantee.description : offer.checkoutPendingMessage}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferHero;
