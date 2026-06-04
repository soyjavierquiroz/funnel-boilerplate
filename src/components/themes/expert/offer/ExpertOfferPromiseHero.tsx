import { CheckCircle2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferPromiseHeroProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferPromiseHero({ offer }: ExpertOfferPromiseHeroProps) {
  return (
    <header className="bg-event-surface px-5 pb-7 pt-7 text-center sm:px-6 sm:pb-9 sm:pt-9">
      <div className="mx-auto w-full max-w-[1060px]">
        <p className="expert-event-kicker text-[0.68rem] font-bold uppercase leading-5 text-event-coral sm:text-xs">
          {offer.eyebrow}
        </p>
        <h1 className="expert-headline mx-auto mt-3 max-w-[980px] text-[2.05rem] leading-[1.04] text-event-ink sm:text-[3.15rem] sm:leading-[1.02] lg:text-[4rem]">
          {offer.headline}
        </h1>
        <p className="expert-body mx-auto mt-4 max-w-[820px] text-[1rem] font-semibold leading-7 text-event-muted sm:text-[1.18rem] sm:leading-8">
          {offer.subheadline}
        </p>

        <div className="mx-auto mt-6 grid max-w-[960px] gap-3 md:grid-cols-3">
          {offer.bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex min-h-[72px] items-start gap-2 border border-event-navy/10 bg-event-soft px-4 py-3 text-left"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-event-coral" aria-hidden="true" />
              <span className="expert-body text-sm font-bold leading-5 text-event-ink">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default ExpertOfferPromiseHero;
