import { CheckCircle2 } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventImageFrame } from './ExpertEventImageFrame';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventPromise() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection id="event-promise" tone="surface" width="wide" className="md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <ExpertEventImageFrame src={content.assets.agenda3} alt="" loading="lazy" />

        <div className="space-y-8">
          <h2 className="expert-headline max-w-[760px] text-[1.95rem] leading-[1.02] text-event-ink sm:text-[3.6rem] sm:leading-[0.96] lg:text-[3.85rem]">
            {content.promise.title}
          </h2>

          <div className="grid gap-5">
            {content.promise.bullets.map((bullet) => (
              <div key={bullet} className="flex gap-4 border-b border-event-navy/10 pb-5 last:border-b-0 last:pb-0">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-event-coral" aria-hidden="true" />
                <p className="expert-body text-lg font-semibold leading-8 text-event-muted">{bullet}</p>
              </div>
            ))}
          </div>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.promise.ctaLabel}</ExpertEventCta>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventPromise;
