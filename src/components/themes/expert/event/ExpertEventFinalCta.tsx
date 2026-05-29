import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCountdown } from './ExpertEventCountdown';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventFinalCta() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="soft" width="wide" className="md:py-28">
      <div className="overflow-hidden rounded-[34px] bg-event-navy shadow-[0_34px_90px_rgb(var(--color-event-navy)/0.22)]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <img
            src={content.assets.finalCta}
            alt=""
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
          />
          <div className="flex flex-col justify-center p-7 text-center text-text-inverse sm:p-12">
            <p className="expert-headline mx-auto max-w-[700px] text-[2rem] leading-[1.08] text-text-inverse sm:text-5xl">
              {content.finalCta.text}
            </p>

            <div className="mx-auto mt-10 max-w-[520px]">
              <ExpertEventCountdown variant="dark" />
            </div>

            <ExpertEventCta href={`#${content.registrationAnchorId}`} className="mt-8">
              {content.finalCta.ctaLabel}
            </ExpertEventCta>
          </div>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventFinalCta;
