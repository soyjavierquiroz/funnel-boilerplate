import { DNA } from '../../../../dna.config';
import { ExpertEventHero } from './ExpertEventHero';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventTheme() {
  const content = DNA.copy.event;

  return (
    <div className="theme-expert theme-expert-event min-h-screen bg-event-page text-event-ink">
      <ExpertEventHero />

      <ExpertEventSection id="event-foundation" tone="surface" width="content">
        <ExpertEventCard tone="soft">
          <p className="expert-event-kicker text-xs font-bold uppercase text-event-coral">
            {content.foundation.sectionEyebrow}
          </p>
          <h2 className="expert-headline mt-4 text-3xl leading-tight text-event-ink sm:text-4xl">
            {content.foundation.sectionTitle}
          </h2>
          <p className="expert-body mt-4 text-base font-semibold leading-7 text-event-muted">
            {content.foundation.sectionText}
          </p>
        </ExpertEventCard>
      </ExpertEventSection>

      <footer className="border-t border-event-navy/10 bg-event-surface px-4 py-8 text-center sm:px-6">
        <p className="expert-event-kicker text-xs font-bold uppercase text-event-muted">
          {DNA.copy.productName}
        </p>
      </footer>
    </div>
  );
}

export default ExpertEventTheme;
