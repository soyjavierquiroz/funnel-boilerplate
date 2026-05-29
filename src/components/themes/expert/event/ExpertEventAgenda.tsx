import { CalendarDays } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventImageFrame } from './ExpertEventImageFrame';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventAgenda() {
  const content = funnelConfig.content.event;
  const agendaImages = [content.assets.agenda1, content.assets.agenda2, content.assets.agenda3];

  return (
    <ExpertEventSection tone="soft" width="wide">
      <div className="mx-auto max-w-[780px] text-center">
        <CalendarDays className="mx-auto h-9 w-9 text-event-navy" aria-hidden="true" />
        <h2 className="expert-headline mt-5 text-[2rem] leading-[1] text-event-ink sm:text-[3.45rem] lg:text-[3.75rem]">
          {content.agenda.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {content.agenda.items.map((item, index) => (
          <ExpertEventCard key={item.title} className="overflow-hidden p-0">
            <ExpertEventImageFrame
              src={agendaImages[index] ?? agendaImages[0]}
              alt=""
              loading="lazy"
              frameClassName="m-3 mb-0 shadow-[0_16px_42px_rgb(var(--color-event-navy)/0.1)]"
            />
            <div className="p-6 sm:p-7">
              <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">{item.label}</p>
              <h3 className="expert-headline mt-4 text-[1.48rem] leading-[1.08] text-event-navy sm:text-[1.55rem]">{item.title}</h3>
              <p className="expert-body mt-4 text-base leading-8 text-event-muted">{item.description}</p>
            </div>
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
