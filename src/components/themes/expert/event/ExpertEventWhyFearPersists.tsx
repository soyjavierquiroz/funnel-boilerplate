import { HeartHandshake, Sparkles } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventWhyFearPersists() {
  const content = funnelConfig.content.event;
  const { whyFearPersists } = content;

  return (
    <ExpertEventSection tone="page" width="wide" className="md:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-3xl bg-event-navy p-6 text-text-inverse shadow-[0_30px_90px_rgb(var(--color-event-navy)/0.18)] sm:p-8">
          <HeartHandshake className="h-10 w-10 text-event-sky" aria-hidden="true" />
          <p className="expert-event-kicker mt-6 text-xs font-bold uppercase text-event-sky">
            {whyFearPersists.eyebrow}
          </p>
          <h2 className="expert-headline mt-4 text-[1.82rem] leading-[1.02] text-text-inverse sm:text-[3.35rem] sm:leading-[0.96] lg:text-[3.6rem]">
            {whyFearPersists.title}
          </h2>
        </div>

        <div className="space-y-5">
          {whyFearPersists.paragraphs.map((paragraph) => (
            <p key={paragraph} className="expert-body text-lg font-semibold leading-9 text-event-muted">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {whyFearPersists.highlights.map((highlight) => (
              <ExpertEventCard key={highlight} tone="soft" className="p-5">
                <Sparkles className="h-6 w-6 text-event-coral" aria-hidden="true" />
                <p className="expert-headline mt-4 text-[1.3rem] leading-tight text-event-navy sm:text-[1.4rem]">
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
