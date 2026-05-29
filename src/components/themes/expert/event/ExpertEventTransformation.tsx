import { ArrowRight, CheckCircle2, CircleDot } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventTransformation() {
  const content = funnelConfig.content.event;
  const { transformation } = content;

  return (
    <ExpertEventSection tone="soft" width="wide" className="md:py-28">
      <div className="mx-auto max-w-[860px] text-center">
        <p className="expert-event-kicker text-xs font-bold uppercase text-event-coral">
          {transformation.eyebrow}
        </p>
        <h2 className="expert-headline mt-4 text-[1.9rem] leading-[1.02] text-event-ink sm:text-[3.45rem] sm:leading-[0.96] lg:text-[3.75rem]">
          {transformation.title}
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <ExpertEventCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <CircleDot className="h-7 w-7 shrink-0 text-event-muted" aria-hidden="true" />
            <h3 className="expert-headline text-[1.55rem] leading-none text-event-navy sm:text-[1.7rem]">
              {transformation.beforeTitle}
            </h3>
          </div>

          <div className="mt-7 grid gap-4">
            {transformation.beforeItems.map((item) => (
              <p
                key={item}
                className="expert-body rounded-[18px] bg-event-soft px-4 py-3 text-base font-semibold leading-7 text-event-muted"
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
            <h3 className="expert-headline text-[1.55rem] leading-none text-event-navy sm:text-[1.7rem]">
              {transformation.afterTitle}
            </h3>
          </div>

          <div className="mt-7 grid gap-4">
            {transformation.afterItems.map((item) => (
              <p
                key={item}
                className="expert-body rounded-[18px] bg-event-surface px-4 py-3 text-base font-bold leading-7 text-event-ink shadow-[0_12px_28px_rgb(var(--color-event-navy)/0.05)]"
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
