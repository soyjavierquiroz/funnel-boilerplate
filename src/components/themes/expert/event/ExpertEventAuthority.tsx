import { GraduationCap } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventImageFrame } from './ExpertEventImageFrame';
import { ExpertEventSection } from './ExpertEventSection';
import { expertEventText } from './ExpertEventTypography';

export function ExpertEventAuthority() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="navy" width="wide" className="text-text-inverse">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <ExpertEventImageFrame
          src={content.assets.authority}
          alt="Darío Avila, guía del evento Maneja Sin Miedo"
          loading="lazy"
          aspectClassName="aspect-[4/5]"
        />

        <div className="space-y-6">
          <GraduationCap className="h-10 w-10 text-event-sky" aria-hidden="true" />
          <h2 className={[expertEventText.sectionH2, 'text-text-inverse'].join(' ')}>
            {content.authority.title}
          </h2>
          <p className={[expertEventText.editorialH2, 'text-event-sky'].join(' ')}>{content.authority.intro}</p>
          <p className={[expertEventText.bodyLarge, 'font-semibold text-text-inverse/80'].join(' ')}>
            {content.authority.bio}
          </p>

          {content.authority.paragraphs.map((paragraph) => (
            <p key={paragraph} className={[expertEventText.body, 'text-text-inverse/75'].join(' ')}>
              {paragraph}
            </p>
          ))}

          <ExpertEventCard className="bg-event-surface p-6 sm:p-8">
            <p className={[expertEventText.editorialH2, 'text-event-navy'].join(' ')}>
              {content.authority.quote}
            </p>
          </ExpertEventCard>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.authority.ctaLabel}</ExpertEventCta>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventAuthority;
