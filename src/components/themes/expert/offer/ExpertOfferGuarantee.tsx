import { ShieldCheck } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferGuaranteeProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferGuarantee({ offer }: ExpertOfferGuaranteeProps) {
  const guarantee = offer.guarantee;

  return (
    <section className="bg-event-navy px-5 py-12 text-text-inverse sm:px-6 sm:py-16">
      <div className="mx-auto grid w-full max-w-[980px] gap-5 rounded-md border border-text-inverse/14 bg-text-inverse/8 p-6 sm:p-8 lg:grid-cols-[auto_1fr]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-event-sky/16 text-event-sky">
          <ShieldCheck className="h-7 w-7" aria-hidden="true" />
        </div>
        <div>
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-sky">
            {guarantee.eyebrow}
          </p>
          <h2 className="expert-headline mt-2 text-[1.8rem] leading-tight text-text-inverse sm:text-[2.4rem]">
            {guarantee.title}
          </h2>
          <p className="expert-body mt-3 text-base font-semibold leading-7 text-text-inverse/82 sm:text-[1.08rem]">
            {guarantee.description}
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {guarantee.bullets.map((bullet) => (
              <p key={bullet} className="expert-body border border-text-inverse/12 bg-text-inverse/8 p-3 text-sm font-bold leading-5 text-text-inverse/88">
                {bullet}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferGuarantee;
