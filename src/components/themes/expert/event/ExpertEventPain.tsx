import { AlertCircle } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventImageFrame } from './ExpertEventImageFrame';
import { ExpertEventSection } from './ExpertEventSection';
import { expertEventSurface, expertEventText } from './ExpertEventTypography';

export function ExpertEventPain() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="surface" width="wide">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div>
            <AlertCircle className="h-9 w-9 text-event-coral" aria-hidden="true" />
            <h2 className={[expertEventText.sectionH2, 'mt-5 text-event-ink'].join(' ')}>
              {content.pain.title}
            </h2>
            <p className={[expertEventText.bodyLarge, 'mt-6 font-bold text-event-navy'].join(' ')}>
              {content.pain.intro}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.pain.bullets.map((bullet) => (
              <p
                key={bullet}
                className={[expertEventText.body, 'rounded-xl border border-event-navy/10 bg-event-surface/70 p-4 font-semibold text-event-muted shadow-[0_10px_26px_rgb(var(--color-event-navy)/0.05)]'].join(' ')}
              >
                {bullet}
              </p>
            ))}
          </div>

          <div className={[expertEventSurface.darkPanel, 'p-6 text-text-inverse sm:p-8'].join(' ')}>
            {content.pain.phrases.map((phrase) => (
              <p key={phrase} className={[expertEventText.editorialH2, 'text-text-inverse'].join(' ')}>
                {phrase}
              </p>
            ))}
          </div>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.pain.ctaLabel}</ExpertEventCta>
        </div>

        <ExpertEventImageFrame
          src={content.assets.pain}
          alt={content.pain.imageAlt}
          loading="lazy"
          aspectClassName="aspect-[4/5] sm:aspect-[4/3]"
        />
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventPain;
