import { AlertCircle } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventPain() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="page" width="wide" className="md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div>
            <AlertCircle className="h-9 w-9 text-event-coral" aria-hidden="true" />
            <h2 className="expert-headline mt-5 text-[2.9rem] leading-[0.9] text-event-ink sm:text-[4.8rem]">
              {content.pain.title}
            </h2>
            <p className="expert-body mt-6 text-xl font-bold text-event-navy">{content.pain.intro}</p>
          </div>

          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {content.pain.bullets.map((bullet) => (
              <p key={bullet} className="expert-body border-b border-event-navy/10 pb-4 text-base font-semibold leading-7 text-event-muted">
                {bullet}
              </p>
            ))}
          </div>

          <ExpertEventCard tone="accent" className="p-6 sm:p-8">
            {content.pain.phrases.map((phrase) => (
              <p key={phrase} className="expert-headline text-3xl leading-[1.02] text-event-ink sm:text-4xl">
                {phrase}
              </p>
            ))}
          </ExpertEventCard>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.pain.ctaLabel}</ExpertEventCta>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[34px] bg-event-surface shadow-[0_24px_70px_rgb(var(--color-event-navy)/0.1)]">
            <img src={content.assets.parkedCarImage} alt="" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="ml-auto w-[82%] overflow-hidden rounded-[30px] bg-event-surface shadow-[0_20px_58px_rgb(var(--color-event-navy)/0.09)]">
            <img src={content.assets.motherWithChildrenImage} alt="" className="aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventPain;
