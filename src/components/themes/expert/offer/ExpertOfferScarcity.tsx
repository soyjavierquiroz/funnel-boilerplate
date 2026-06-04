import { Clock3 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferScarcityProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferScarcity({ offer }: ExpertOfferScarcityProps) {
  return (
    <section className="bg-event-page px-5 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-[860px] flex-col gap-4 border border-event-coral/35 bg-event-surface p-5 sm:flex-row sm:items-start sm:p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-event-coral/12 text-event-coral">
          <Clock3 className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
            {offer.scarcity.eyebrow}
          </p>
          <h2 className="expert-headline mt-2 text-[1.45rem] leading-tight text-event-navy">
            {offer.scarcity.title}
          </h2>
          <p className="expert-body mt-2 text-sm font-semibold leading-6 text-event-muted sm:text-base sm:leading-7">
            {offer.scarcity.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferScarcity;
