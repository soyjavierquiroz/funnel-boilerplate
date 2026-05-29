import { CalendarDays } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventAgenda() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="soft" width="wide">
      <div className="mx-auto max-w-[780px] text-center">
        <CalendarDays className="mx-auto h-9 w-9 text-event-coral" aria-hidden="true" />
        <h2 className="expert-headline mt-5 text-[2.85rem] leading-[0.92] text-event-ink sm:text-[4.5rem]">
          {content.agenda.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {content.agenda.items.map((item) => (
          <ExpertEventCard key={item.title} className="p-7 sm:p-8">
            <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">{item.label}</p>
            <h3 className="expert-headline mt-5 text-3xl leading-[1.02] text-event-ink">{item.title}</h3>
            <p className="expert-body mt-5 text-base leading-8 text-event-muted">{item.description}</p>
          </ExpertEventCard>
        ))}
      </div>

      <div className="mt-10 text-center">
        <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.agenda.ctaLabel}</ExpertEventCta>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventAgenda;
