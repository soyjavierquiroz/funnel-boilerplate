import { CheckCircle2 } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventPromise() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection id="event-promise" tone="surface" width="wide" className="md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="overflow-hidden rounded-[34px] bg-event-soft shadow-[0_24px_70px_rgb(var(--color-event-navy)/0.09)]">
          <img src={content.assets.confidentDriverImage} alt="" className="aspect-[4/3] w-full object-cover" />
        </div>

        <div className="space-y-8">
          <h2 className="expert-headline max-w-[760px] text-[2.85rem] leading-[0.92] text-event-ink sm:text-[4.5rem]">
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
