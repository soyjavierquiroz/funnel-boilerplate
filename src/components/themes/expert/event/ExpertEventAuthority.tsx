import { GraduationCap } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventAuthority() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="surface" width="wide">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[28px] border border-event-navy/12 bg-event-soft shadow-[0_22px_60px_rgb(var(--color-event-navy)/0.1)]">
          <img src={content.assets.expertTeachingImage} alt="" className="aspect-[4/5] w-full object-cover" />
        </div>

        <div className="space-y-5">
          <GraduationCap className="h-10 w-10 text-event-navy" aria-hidden="true" />
          <h2 className="expert-headline text-4xl leading-[0.98] text-event-ink sm:text-5xl">
            {content.authority.title}
          </h2>
          <p className="expert-headline text-3xl leading-tight text-event-navy">{content.authority.intro}</p>
          <p className="expert-body text-lg font-semibold leading-8 text-event-muted">{content.authority.bio}</p>

          {content.authority.paragraphs.map((paragraph) => (
            <p key={paragraph} className="expert-body text-base leading-8 text-event-muted">
              {paragraph}
            </p>
          ))}

          <ExpertEventCard tone="accent">
            <p className="expert-headline text-2xl leading-tight text-event-ink">{content.authority.quote}</p>
          </ExpertEventCard>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.authority.ctaLabel}</ExpertEventCta>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventAuthority;
