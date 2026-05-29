import { CalendarDays } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventAgenda() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="soft" width="wide">
      <div className="mx-auto max-w-[760px] text-center">
        <CalendarDays className="mx-auto h-9 w-9 text-event-navy" aria-hidden="true" />
        <h2 className="expert-headline mt-4 text-4xl leading-[0.98] text-event-ink sm:text-5xl">
          {content.agenda.title}
        </h2>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {content.agenda.items.map((item) => (
          <ExpertEventCard key={item.title} className="p-6">
            <p className="expert-event-kicker text-xs font-bold uppercase text-event-coral">{item.label}</p>
            <h3 className="expert-headline mt-3 text-2xl leading-tight text-event-ink">{item.title}</h3>
            <p className="expert-body mt-4 text-base leading-7 text-event-muted">{item.description}</p>
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
