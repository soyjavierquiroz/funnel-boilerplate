import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCountdown } from './ExpertEventCountdown';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventFinalCta() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="soft" width="content" className="md:py-28">
      <ExpertEventCard className="p-7 text-center sm:p-12">
        <p className="expert-headline mx-auto max-w-[760px] text-3xl leading-[1.05] text-event-ink sm:text-5xl">
          {content.finalCta.text}
        </p>

        <div className="mx-auto mt-10 max-w-[520px]">
          <ExpertEventCountdown />
        </div>

        <ExpertEventCta href={`#${content.registrationAnchorId}`} className="mt-8">
          {content.finalCta.ctaLabel}
        </ExpertEventCta>
      </ExpertEventCard>
    </ExpertEventSection>
  );
}

export default ExpertEventFinalCta;
