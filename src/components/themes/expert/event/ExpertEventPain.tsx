import { AlertCircle } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventImageFrame } from './ExpertEventImageFrame';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventPain() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="surface" width="wide" className="md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div>
            <AlertCircle className="h-9 w-9 text-event-coral" aria-hidden="true" />
            <h2 className="expert-headline mt-5 text-[1.9rem] leading-[1.02] text-event-ink sm:text-[3.65rem] sm:leading-[0.96] lg:text-[3.9rem]">
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

          <div className="rounded-3xl bg-event-navy p-6 text-text-inverse shadow-[0_24px_70px_rgb(var(--color-event-navy)/0.18)] sm:p-8">
            {content.pain.phrases.map((phrase) => (
              <p key={phrase} className="expert-headline text-[1.6rem] leading-[1.06] text-text-inverse sm:text-[2rem]">
                {phrase}
              </p>
            ))}
          </div>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.pain.ctaLabel}</ExpertEventCta>
        </div>

        <ExpertEventImageFrame
          src={content.assets.pain}
          alt=""
          loading="lazy"
          aspectClassName="aspect-[4/5] sm:aspect-[4/3]"
        />
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventPain;
