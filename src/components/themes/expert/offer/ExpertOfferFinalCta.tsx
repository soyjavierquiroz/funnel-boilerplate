import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferOrderCard } from './ExpertOfferOrderCard';
import { formatOfferPriceLine } from './offerUtils';

interface ExpertOfferFinalCtaProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
}

export function ExpertOfferFinalCta({ offer, trackingEnabled, trafficChannel }: ExpertOfferFinalCtaProps) {
  const priceLine = formatOfferPriceLine(offer.finalCta.priceLine, offer);

  return (
    <section className="bg-event-navy px-5 py-12 text-text-inverse sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1060px] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.45fr)] lg:items-center">
        <div className="text-center lg:text-left">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-sky">
            {offer.finalCta.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2.15rem] leading-tight text-text-inverse sm:text-[3.4rem]">
            {offer.finalCta.title}
          </h2>
          <p className="expert-body mt-4 max-w-[680px] text-base font-semibold leading-7 text-text-inverse/80 sm:text-[1.08rem] lg:mx-0">
            {offer.finalCta.subtitle}
          </p>
          <p className="expert-body mt-5 text-sm font-bold text-event-sky">
            {priceLine}
          </p>
        </div>

        <ExpertOfferOrderCard offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
      </div>
    </section>
  );
}

export default ExpertOfferFinalCta;
