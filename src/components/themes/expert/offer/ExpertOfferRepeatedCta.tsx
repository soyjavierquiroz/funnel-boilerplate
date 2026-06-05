import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { ResolvedAttribution } from '../../../../core/attribution';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferOrderCard } from './ExpertOfferOrderCard';
import { formatOfferPriceLine } from './offerUtils';

interface ExpertOfferRepeatedCtaProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
  attribution: ResolvedAttribution;
  index: number;
}

export function ExpertOfferRepeatedCta({
  offer,
  trackingEnabled,
  trafficChannel,
  attribution,
  index,
}: ExpertOfferRepeatedCtaProps) {
  const cta = offer.repeatedCtas[index];

  if (!cta) {
    return null;
  }

  return (
    <section className="bg-event-page px-5 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid w-full max-w-[1060px] gap-7 border-y border-event-navy/12 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.45fr)] lg:items-center">
        <div>
          <p className="expert-event-kicker text-[0.66rem] font-bold uppercase text-event-coral">
            {cta.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[1.9rem] leading-tight text-event-ink sm:text-[2.75rem]">
            {cta.title}
          </h2>
          <p className="expert-body mt-4 max-w-[680px] text-base font-semibold leading-7 text-event-muted">
            {cta.subtitle}
          </p>
          <p className="expert-headline mt-5 text-[1.35rem] leading-tight text-event-navy">
            {formatOfferPriceLine(cta.priceLine, offer)}
          </p>
        </div>

        <ExpertOfferOrderCard
          offer={offer}
          trackingEnabled={trackingEnabled}
          trafficChannel={trafficChannel}
          attribution={attribution}
        />
      </div>
    </section>
  );
}

export default ExpertOfferRepeatedCta;
