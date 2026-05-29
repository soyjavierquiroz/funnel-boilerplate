import { AlertCircle } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventPain() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="page" width="wide">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div>
            <AlertCircle className="h-9 w-9 text-event-coral" aria-hidden="true" />
            <h2 className="expert-headline mt-4 text-4xl leading-[0.98] text-event-ink sm:text-5xl">
              {content.pain.title}
            </h2>
            <p className="expert-body mt-5 text-lg font-bold text-event-muted">{content.pain.intro}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.pain.bullets.map((bullet) => (
              <ExpertEventCard key={bullet} className="p-4" tone="soft">
                <p className="expert-body text-base font-semibold leading-7 text-event-muted">{bullet}</p>
              </ExpertEventCard>
            ))}
          </div>

          <ExpertEventCard tone="accent">
            {content.pain.phrases.map((phrase) => (
              <p key={phrase} className="expert-headline text-2xl leading-tight text-event-ink">
                {phrase}
              </p>
            ))}
          </ExpertEventCard>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.pain.ctaLabel}</ExpertEventCta>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[28px] border border-event-navy/12 bg-event-surface shadow-[0_22px_60px_rgb(var(--color-event-navy)/0.1)]">
            <img src={content.assets.parkedCarImage} alt="" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-[28px] border border-event-navy/12 bg-event-surface shadow-[0_22px_60px_rgb(var(--color-event-navy)/0.1)]">
            <img src={content.assets.motherWithChildrenImage} alt="" className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventPain;
