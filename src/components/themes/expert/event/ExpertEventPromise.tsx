import { CheckCircle2 } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventPromise() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection id="event-promise" tone="surface" width="wide">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[28px] border border-event-navy/12 bg-event-soft shadow-[0_22px_60px_rgb(var(--color-event-navy)/0.1)]">
          <img src={content.assets.confidentDriverImage} alt="" className="aspect-[4/3] w-full object-cover" />
        </div>

        <div className="space-y-6">
          <h2 className="expert-headline text-4xl leading-[0.98] text-event-ink sm:text-5xl">
            {content.promise.title}
          </h2>

          <div className="grid gap-3">
            {content.promise.bullets.map((bullet) => (
              <ExpertEventCard key={bullet} className="p-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
                  <p className="expert-body text-base font-semibold leading-7 text-event-muted">{bullet}</p>
                </div>
              </ExpertEventCard>
            ))}
          </div>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.promise.ctaLabel}</ExpertEventCta>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventPromise;
