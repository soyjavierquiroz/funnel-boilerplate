import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOpportunitySectionProps {
  offer: FunnelOfferConfig;
}

export function ExpertOpportunitySection({ offer }: ExpertOpportunitySectionProps) {
  const opportunity = offer.opportunity;

  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1080px] gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="lg:sticky lg:top-6">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {opportunity.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2.15rem] leading-tight text-event-ink sm:text-[3.2rem]">
            {opportunity.title}
          </h2>
          <p className="expert-body mt-4 text-base font-bold leading-7 text-event-navy sm:text-[1.08rem]">
            {opportunity.intro}
          </p>
        </div>

        <div>
          <div className="space-y-5">
            {opportunity.paragraphs.map((paragraph) => (
              <p key={paragraph} className="expert-body text-base font-semibold leading-8 text-event-muted sm:text-[1.08rem]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {opportunity.bullets.map((bullet) => (
              <div key={bullet} className="flex min-h-[96px] gap-3 border border-event-navy/10 bg-event-soft p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
                <p className="expert-body text-sm font-bold leading-6 text-event-ink sm:text-base">
                  {bullet}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex gap-3 border-l-4 border-event-coral bg-event-page p-5 shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)]">
            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
            <p className="expert-headline text-[1.25rem] leading-tight text-event-navy sm:text-[1.55rem]">
              {opportunity.callout}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertOpportunitySection;
