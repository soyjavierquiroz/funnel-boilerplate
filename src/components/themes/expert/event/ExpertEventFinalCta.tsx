import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCountdown } from './ExpertEventCountdown';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventFinalCta() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="soft" width="content">
      <ExpertEventCard className="p-6 text-center sm:p-10">
        <p className="expert-body mx-auto max-w-[700px] text-lg font-semibold leading-8 text-event-muted">
          {content.finalCta.text}
        </p>

        <div className="mx-auto mt-8 max-w-[520px]">
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
