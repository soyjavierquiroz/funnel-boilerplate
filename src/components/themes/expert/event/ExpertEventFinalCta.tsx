import funnelConfig from '../../../../core/config/funnel.config';
import { CheckCircle2 } from 'lucide-react';
import { ExpertEventCountdown } from './ExpertEventCountdown';
import { ExpertEventImageFrame } from './ExpertEventImageFrame';
import { ExpertEventRegistrationForm } from './ExpertEventRegistrationForm';
import { ExpertEventSection } from './ExpertEventSection';
import { expertEventText } from './ExpertEventTypography';

export function ExpertEventFinalCta() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection
      id={content.registrationAnchorId}
      tone="navy"
      width="wide"
      className="!py-6 scroll-mt-0 text-text-inverse sm:!py-8 md:!py-12"
    >
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <p className={[expertEventText.eyebrow, 'text-event-sky'].join(' ')}>
          {content.finalCta.eyebrow}
        </p>

        <h2 className={[expertEventText.editorialH2, 'mt-3 max-w-[760px] text-text-inverse'].join(' ')}>
          {content.finalCta.headline}
        </h2>

        <p className={[expertEventText.body, 'mt-3 max-w-[680px] font-semibold text-text-inverse/[0.78]'].join(' ')}>
          {content.finalCta.subheadline}
        </p>

        <div className="mt-4 flex flex-col items-center gap-1.5 sm:flex-row sm:gap-6">
          {content.finalCta.bullets.map((benefit) => (
            <span key={benefit} className="inline-flex items-center gap-1.5 text-left">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-event-sky" aria-hidden="true" />
              <span className={[expertEventText.small, 'font-bold text-text-inverse/[0.9]'].join(' ')}>
                {benefit}
              </span>
            </span>
          ))}
        </div>

        <div className="mt-5 w-full max-w-[520px] rounded-2xl border border-text-inverse/20 bg-text-inverse/[0.08] p-1.5 shadow-[0_22px_62px_rgb(var(--color-event-ink)/0.3),0_0_36px_rgb(var(--color-event-sky)/0.14)] sm:mt-6 sm:p-2">
          <ExpertEventRegistrationForm />
        </div>

        <div className="mt-3 w-full max-w-[440px] rounded-2xl border border-text-inverse/15 bg-event-ink/25 p-1 shadow-[0_18px_46px_rgb(var(--color-event-ink)/0.24)]">
          <ExpertEventCountdown variant="dark" size="compact" />
        </div>

        <ExpertEventImageFrame
          src={content.assets.finalCta}
          alt={content.finalCta.imageAlt}
          loading="lazy"
          aspectClassName="aspect-[16/9]"
          frameClassName="mt-4 w-full max-w-[520px] sm:mt-5"
        />
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventFinalCta;
