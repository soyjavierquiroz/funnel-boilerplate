import { Sparkles } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertFascinationBulletsProps {
  offer: FunnelOfferConfig;
}

export function ExpertFascinationBullets({ offer }: ExpertFascinationBulletsProps) {
  const fascinations = offer.fascinations;

  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {fascinations.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            {fascinations.title}
          </h2>
          <p className="expert-body mx-auto mt-4 max-w-[700px] text-base font-semibold leading-7 text-event-muted">
            {fascinations.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {fascinations.items.map((item) => (
            <div key={item} className="flex gap-3 border border-event-navy/10 bg-event-soft p-4">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
              <p className="expert-body text-sm font-bold leading-6 text-event-ink sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="expert-headline mx-auto mt-8 max-w-[760px] text-center text-[1.35rem] leading-tight text-event-navy sm:text-[1.7rem]">
          {fascinations.closing}
        </p>
      </div>
    </section>
  );
}

export default ExpertFascinationBullets;
