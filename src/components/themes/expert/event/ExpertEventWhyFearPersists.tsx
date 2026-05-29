import { HeartHandshake, Sparkles } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventSection } from './ExpertEventSection';
import { expertEventSurface, expertEventText } from './ExpertEventTypography';

export function ExpertEventWhyFearPersists() {
  const content = funnelConfig.content.event;
  const { whyFearPersists } = content;

  return (
    <ExpertEventSection tone="page" width="wide">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className={[expertEventSurface.darkPanel, 'p-6 text-text-inverse sm:p-7 lg:p-8'].join(' ')}>
          <HeartHandshake className="h-10 w-10 text-event-sky" aria-hidden="true" />
          <p className={[expertEventText.eyebrow, 'mt-6 text-event-sky'].join(' ')}>
            {whyFearPersists.eyebrow}
          </p>
          <h2 className={[expertEventText.editorialH2, 'mt-4 text-text-inverse'].join(' ')}>
            {whyFearPersists.title}
          </h2>
        </div>

        <div className="space-y-5">
          {whyFearPersists.paragraphs.map((paragraph) => (
            <p key={paragraph} className={[expertEventText.bodyLarge, 'font-semibold text-event-muted'].join(' ')}>
              {paragraph}
            </p>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {whyFearPersists.highlights.map((highlight) => (
              <ExpertEventCard key={highlight} tone="soft" className="p-5">
                <Sparkles className="h-6 w-6 text-event-coral" aria-hidden="true" />
                <p className={[expertEventText.cardH3, 'mt-4 text-event-navy'].join(' ')}>
                  {highlight}
                </p>
              </ExpertEventCard>
            ))}
          </div>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventWhyFearPersists;
