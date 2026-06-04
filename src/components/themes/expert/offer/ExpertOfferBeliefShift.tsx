import { HeartHandshake, Sparkles } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferBeliefShiftProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferBeliefShift({ offer }: ExpertOfferBeliefShiftProps) {
  const content = offer.beliefShift;

  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1080px] gap-8 lg:grid-cols-[0.78fr_1.12fr] lg:items-center">
        <div className="rounded-lg bg-event-navy p-6 text-text-inverse shadow-[0_22px_58px_rgb(var(--color-event-navy)/0.16)] sm:p-8">
          <HeartHandshake className="h-10 w-10 text-event-sky" aria-hidden="true" />
          <p className="expert-event-kicker mt-6 text-[0.68rem] font-bold uppercase text-event-sky">
            {content.eyebrow}
          </p>
          <h2 className="expert-headline mt-4 text-[1.9rem] leading-tight text-text-inverse sm:text-[2.7rem]">
            {content.title}
          </h2>
        </div>

        <div className="space-y-5">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="expert-body text-base font-semibold leading-8 text-event-muted sm:text-[1.08rem]">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {content.highlights.map((highlight) => (
              <div key={highlight} className="rounded-lg border border-event-navy/10 bg-event-soft p-5">
                <Sparkles className="h-6 w-6 text-event-coral" aria-hidden="true" />
                <p className="expert-headline mt-4 text-[1.2rem] leading-tight text-event-navy">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferBeliefShift;
