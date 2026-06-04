import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferCta } from './ExpertOfferCta';

interface ExpertOfferFinalCtaProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
}

export function ExpertOfferFinalCta({ offer, trackingEnabled, trafficChannel }: ExpertOfferFinalCtaProps) {
  const priceLine = offer.finalCta.priceLine
    .replace('{price}', offer.price)
    .replace('{regularPrice}', offer.regularPrice);

  return (
    <section className="bg-event-navy px-5 py-12 text-center text-text-inverse sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[820px]">
        <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-sky">
          {offer.finalCta.eyebrow}
        </p>
        <h2 className="expert-headline mt-3 text-[2.15rem] leading-tight text-text-inverse sm:text-[3.4rem]">
          {offer.finalCta.title}
        </h2>
        <p className="expert-body mx-auto mt-4 max-w-[680px] text-base font-semibold leading-7 text-text-inverse/80 sm:text-[1.08rem]">
          {offer.finalCta.subtitle}
        </p>
        <p className="expert-body mt-5 text-sm font-bold text-event-sky">
          {priceLine}
        </p>
        <div className="mx-auto mt-7 max-w-[380px] sm:max-w-none">
          <ExpertOfferCta offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferFinalCta;
