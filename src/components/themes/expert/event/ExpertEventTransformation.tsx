import { ArrowRight, CheckCircle2, CircleDot } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventSection } from './ExpertEventSection';
import { expertEventText } from './ExpertEventTypography';

export function ExpertEventTransformation() {
  const content = funnelConfig.content.event;
  const { transformation } = content;

  return (
    <ExpertEventSection tone="soft" width="wide">
      <div className="mx-auto max-w-[860px] text-center">
        <p className={[expertEventText.eyebrow, 'text-event-coral'].join(' ')}>
          {transformation.eyebrow}
        </p>
        <h2 className={[expertEventText.sectionH2, 'mt-4 text-event-ink'].join(' ')}>
          {transformation.title}
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <ExpertEventCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <CircleDot className="h-7 w-7 shrink-0 text-event-muted" aria-hidden="true" />
            <h3 className={[expertEventText.cardH3, 'text-event-navy'].join(' ')}>
              {transformation.beforeTitle}
            </h3>
          </div>

          <div className="mt-7 grid gap-4">
            {transformation.beforeItems.map((item) => (
              <p
                key={item}
                className={[expertEventText.body, 'rounded-xl bg-event-soft px-4 py-3 font-semibold text-event-muted'].join(' ')}
              >
                {item}
              </p>
            ))}
          </div>
        </ExpertEventCard>

        <div className="flex justify-center lg:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-event-coral text-text-inverse shadow-[0_18px_44px_rgb(var(--color-event-coral)/0.26)] lg:h-14 lg:w-14">
            <ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" aria-hidden="true" />
          </div>
        </div>

        <ExpertEventCard tone="accent" className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-7 w-7 shrink-0 text-event-coral" aria-hidden="true" />
            <h3 className={[expertEventText.cardH3, 'text-event-navy'].join(' ')}>
              {transformation.afterTitle}
            </h3>
          </div>

          <div className="mt-7 grid gap-4">
            {transformation.afterItems.map((item) => (
              <p
                key={item}
                className={[expertEventText.body, 'rounded-xl bg-event-surface px-4 py-3 font-bold text-event-ink shadow-[0_10px_24px_rgb(var(--color-event-navy)/0.05)]'].join(' ')}
              >
                {item}
              </p>
            ))}
          </div>
        </ExpertEventCard>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventTransformation;
