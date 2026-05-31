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
        <ExpertEventCard className="relative overflow-hidden border-event-coral/30 bg-[linear-gradient(135deg,rgb(var(--color-event-coral)/0.2),rgb(var(--color-event-surface)/0.95)_48%,rgb(var(--color-event-soft)/0.96))] p-6 shadow-[0_22px_58px_rgb(var(--color-event-coral)/0.12)] sm:p-8">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[999px] bg-event-coral/20" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-event-coral/[0.18] text-event-coral shadow-[0_12px_30px_rgb(var(--color-event-coral)/0.14)]">
              <CircleDot className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className={[expertEventText.cardH3, 'text-event-navy'].join(' ')}>
              {transformation.beforeTitle}
            </h3>
          </div>

          <div className="mt-7 grid gap-4">
            {transformation.beforeItems.map((item) => (
              <p
                key={item}
                className={[expertEventText.body, 'rounded-xl border border-event-coral/[0.18] bg-event-surface/[0.78] px-4 py-3 font-semibold text-event-muted shadow-[0_10px_28px_rgb(var(--color-event-coral)/0.08)]'].join(' ')}
              >
                {item}
              </p>
            ))}
          </div>
        </ExpertEventCard>

        <div className="relative flex justify-center lg:items-center">
          <div className="absolute top-1/2 hidden h-px w-16 -translate-y-1/2 bg-[linear-gradient(90deg,rgb(var(--color-event-coral)/0.45),rgb(var(--color-event-sky)/0.58))] lg:block" aria-hidden="true" />
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgb(var(--color-event-coral)),rgb(var(--color-event-sky)))] text-text-inverse shadow-[0_20px_48px_rgb(var(--color-event-navy)/0.18),0_0_34px_rgb(var(--color-event-sky)/0.2)] lg:h-16 lg:w-16">
            <ArrowRight className="h-7 w-7 rotate-90 lg:rotate-0" aria-hidden="true" />
          </div>
        </div>

        <ExpertEventCard className="relative overflow-hidden border-event-sky/35 bg-[linear-gradient(135deg,rgb(var(--color-event-sky)/0.22),rgb(var(--color-event-surface)/0.96)_50%,rgb(var(--color-event-navy)/0.08))] p-6 shadow-[0_22px_60px_rgb(var(--color-event-navy)/0.12)] sm:p-8">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[999px] bg-event-sky/20" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-event-navy text-text-inverse shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.18)]">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className={[expertEventText.cardH3, 'text-event-navy'].join(' ')}>
              {transformation.afterTitle}
            </h3>
          </div>

          <div className="mt-7 grid gap-4">
            {transformation.afterItems.map((item) => (
              <p
                key={item}
                className={[expertEventText.body, 'rounded-xl border border-event-sky/20 bg-event-surface/[0.88] px-4 py-3 font-bold text-event-ink shadow-[0_12px_30px_rgb(var(--color-event-navy)/0.07)]'].join(' ')}
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
