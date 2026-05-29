import funnelConfig from '../../../../core/config/funnel.config';
import { CheckCircle2 } from 'lucide-react';
import { ExpertEventCountdown } from './ExpertEventCountdown';
import { ExpertEventRegistrationForm } from './ExpertEventRegistrationForm';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventFinalCta() {
  const content = funnelConfig.content.event;
  const compactBadges = content.finalCta.bullets.slice(0, 2);

  return (
    <ExpertEventSection
      id={content.registrationAnchorId}
      tone="navy"
      width="wide"
      className="!py-7 scroll-mt-0 text-text-inverse sm:!py-10 md:!py-16"
    >
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-8">
        <div className="text-center lg:text-left">
          <p className="expert-event-kicker text-[0.58rem] font-bold uppercase text-event-sky sm:text-[0.64rem]">
            Registro gratuito
          </p>
          <h2 className="expert-headline mx-auto mt-3 max-w-[760px] text-[1.58rem] leading-[1.05] text-text-inverse sm:text-[2.7rem] sm:leading-[0.98] lg:mx-0 lg:text-[3.45rem] lg:leading-[0.94]">
            {content.finalCta.headline}
          </h2>
          <p className="expert-body mx-auto mt-3 max-w-[680px] text-[0.93rem] font-semibold leading-6 text-text-inverse/[0.78] sm:text-base sm:leading-7 lg:mx-0">
            {content.finalCta.subheadline}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
            {compactBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 border border-text-inverse/[0.14] bg-text-inverse/[0.07] px-3 py-1.5 text-left"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-event-sky" aria-hidden="true" />
                <span className="expert-body text-[0.72rem] font-bold leading-none text-text-inverse/[0.86] sm:text-xs">
                  {badge}
                </span>
              </span>
            ))}
          </div>

          <div className="mt-6 hidden overflow-hidden bg-text-inverse/[0.08] lg:block">
            <img
              src={content.assets.finalCta}
              alt=""
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="grid gap-3">
          <ExpertEventRegistrationForm />

          <div className="mx-auto w-full max-w-[440px]">
            <ExpertEventCountdown variant="dark" size="compact" />
          </div>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventFinalCta;
