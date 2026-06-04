import { Award, Clock, ShieldCheck } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferCredibilityStripProps {
  offer: FunnelOfferConfig;
}

const credibilityIcons = [Award, ShieldCheck, Clock] as const;

export function ExpertOfferCredibilityStrip({ offer }: ExpertOfferCredibilityStripProps) {
  return (
    <section className="border-y border-event-navy/10 bg-event-surface px-5 py-6 sm:px-6">
      <div className="mx-auto grid w-full max-w-[1080px] gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <p className="expert-body text-center text-base font-bold leading-7 text-event-navy lg:text-left">
          {offer.credibility.text}
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {offer.credibility.items.map((item, index) => {
            const Icon = credibilityIcons[index] ?? Award;

            return (
              <div
                key={`${item.value}-${item.label}`}
                className="flex min-h-[94px] items-center gap-3 rounded-lg border border-event-navy/10 bg-event-soft px-4 py-3"
              >
                <Icon className="h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
                <div>
                  <p className="expert-headline text-[1.08rem] leading-tight text-event-navy">{item.value}</p>
                  <p className="expert-body mt-1 text-xs font-bold leading-5 text-event-muted">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferCredibilityStrip;
