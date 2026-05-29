import { GraduationCap } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventAuthority() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection tone="navy" width="wide" className="text-text-inverse md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="overflow-hidden rounded-[36px] bg-text-inverse/10 p-3 shadow-[0_28px_82px_rgb(var(--color-event-ink)/0.18)]">
          <img
            src={content.assets.authority}
            alt=""
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[28px] object-cover"
          />
        </div>

        <div className="space-y-6">
          <GraduationCap className="h-10 w-10 text-event-sky" aria-hidden="true" />
          <h2 className="expert-headline text-[2.35rem] leading-[0.98] text-text-inverse sm:text-[4.3rem] sm:leading-[0.94]">
            {content.authority.title}
          </h2>
          <p className="expert-headline text-3xl leading-tight text-event-sky sm:text-4xl">{content.authority.intro}</p>
          <p className="expert-body text-xl font-semibold leading-9 text-text-inverse/80">{content.authority.bio}</p>

          {content.authority.paragraphs.map((paragraph) => (
            <p key={paragraph} className="expert-body text-base leading-8 text-text-inverse/75">
              {paragraph}
            </p>
          ))}

          <ExpertEventCard className="bg-event-surface p-6 sm:p-8">
            <p className="expert-headline text-3xl leading-[1.02] text-event-navy sm:text-4xl">{content.authority.quote}</p>
          </ExpertEventCard>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.authority.ctaLabel}</ExpertEventCta>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventAuthority;
