import { ShieldCheck } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferGuaranteeProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferGuarantee({ offer }: ExpertOfferGuaranteeProps) {
  return (
    <section className="bg-event-navy px-5 py-12 text-text-inverse sm:px-6 sm:py-16">
      <div className="mx-auto flex w-full max-w-[920px] flex-col gap-5 rounded-lg border border-text-inverse/14 bg-text-inverse/8 p-6 sm:flex-row sm:items-center sm:p-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-event-sky/16 text-event-sky">
          <ShieldCheck className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-sky">
            Garantía y acceso
          </p>
          <p className="expert-body mt-2 text-base font-semibold leading-7 text-text-inverse/82 sm:text-[1.08rem]">
            {offer.guarantee}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferGuarantee;
