import { GraduationCap } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventAuthority() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="surface" width="wide" className="md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="overflow-hidden rounded-[36px] bg-event-soft shadow-[0_24px_70px_rgb(var(--color-event-navy)/0.1)]">
          <img src={content.assets.expertTeachingImage} alt="" className="aspect-[4/5] w-full object-cover" />
        </div>

        <div className="space-y-6">
          <GraduationCap className="h-10 w-10 text-event-coral" aria-hidden="true" />
          <h2 className="expert-headline text-[2.85rem] leading-[0.92] text-event-ink sm:text-[4.5rem]">
            {content.authority.title}
          </h2>
          <p className="expert-headline text-3xl leading-tight text-event-navy sm:text-4xl">{content.authority.intro}</p>
          <p className="expert-body text-xl font-semibold leading-9 text-event-muted">{content.authority.bio}</p>

          {content.authority.paragraphs.map((paragraph) => (
            <p key={paragraph} className="expert-body text-base leading-8 text-event-muted">
              {paragraph}
            </p>
          ))}

          <ExpertEventCard tone="accent" className="p-6 sm:p-8">
            <p className="expert-headline text-3xl leading-[1.02] text-event-ink sm:text-4xl">{content.authority.quote}</p>
          </ExpertEventCard>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.authority.ctaLabel}</ExpertEventCta>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventAuthority;
