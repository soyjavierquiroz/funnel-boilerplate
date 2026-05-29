import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCountdown } from './ExpertEventCountdown';
import { ExpertEventRegistrationForm } from './ExpertEventRegistrationForm';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventFinalCta() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="soft" width="wide" className="md:py-20">
      <div className="overflow-hidden bg-event-navy shadow-[0_34px_90px_rgb(var(--color-event-navy)/0.22)]">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <img
            src={content.assets.finalCta}
            alt=""
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
          />
          <div className="grid gap-6 p-5 text-text-inverse sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:p-10">
            <div>
              <p className="expert-headline max-w-[620px] text-[1.5rem] leading-[1.08] text-text-inverse sm:text-[2.55rem]">
                {content.finalCta.text}
              </p>

              <div className="mt-6 max-w-[520px]">
                <ExpertEventCountdown variant="dark" />
              </div>
            </div>

            <ExpertEventRegistrationForm />
          </div>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventFinalCta;
