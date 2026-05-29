import { AlertCircle } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventPain() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="surface" width="wide" className="md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div>
            <AlertCircle className="h-9 w-9 text-event-coral" aria-hidden="true" />
            <h2 className="expert-headline mt-5 text-[2.35rem] leading-[0.98] text-event-ink sm:text-[4.55rem] sm:leading-[0.94]">
              {content.pain.title}
            </h2>
            <p className="expert-body mt-6 text-xl font-bold text-event-navy">{content.pain.intro}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.pain.bullets.map((bullet) => (
              <p
                key={bullet}
                className="expert-body rounded-[18px] border border-event-navy/10 bg-event-surface/70 p-4 text-base font-semibold leading-7 text-event-muted shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.05)]"
              >
                {bullet}
              </p>
            ))}
          </div>

          <div className="rounded-[28px] bg-event-navy p-6 text-text-inverse shadow-[0_24px_70px_rgb(var(--color-event-navy)/0.18)] sm:p-8">
            {content.pain.phrases.map((phrase) => (
              <p key={phrase} className="expert-headline text-3xl leading-[1.02] text-text-inverse sm:text-4xl">
                {phrase}
              </p>
            ))}
          </div>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.pain.ctaLabel}</ExpertEventCta>
        </div>

        <div className="overflow-hidden rounded-[36px] bg-event-navy p-3 shadow-[0_28px_82px_rgb(var(--color-event-navy)/0.18)]">
          <img
            src={content.assets.pain}
            alt=""
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[28px] object-cover sm:aspect-[4/3]"
          />
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventPain;
