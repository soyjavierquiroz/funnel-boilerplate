import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferOrderCard } from './ExpertOfferOrderCard';
import { formatOfferPriceLine } from './offerUtils';

interface ExpertRepeatedOfferProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
  index: number;
}

export function ExpertRepeatedOffer({ offer, trackingEnabled, trafficChannel, index }: ExpertRepeatedOfferProps) {
  const repeatedOffer = offer.repeatedOffers[index];

  if (!repeatedOffer) {
    return null;
  }

  const offerBox = offer.offerBoxes[repeatedOffer.offerBoxIndex] ?? offer.offerBoxes[0];

  return (
    <section className="bg-event-page px-5 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1080px] gap-7 border-y border-event-navy/12 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.45fr)] lg:items-center">
        <div>
          <p className="expert-event-kicker text-[0.66rem] font-bold uppercase text-event-coral">
            {repeatedOffer.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[1.9rem] leading-tight text-event-ink sm:text-[2.85rem]">
            {repeatedOffer.title}
          </h2>
          <p className="expert-body mt-4 max-w-[700px] text-base font-semibold leading-7 text-event-muted sm:text-[1.05rem]">
            {repeatedOffer.subtitle}
          </p>
          <p className="expert-headline mt-5 text-[1.35rem] leading-tight text-event-navy">
            {formatOfferPriceLine(repeatedOffer.priceLine, offer)}
          </p>
        </div>

        <ExpertOfferOrderCard
          offer={offer}
          trackingEnabled={trackingEnabled}
          trafficChannel={trafficChannel}
          offerBox={offerBox}
        />
      </div>
    </section>
  );
}

export default ExpertRepeatedOffer;
