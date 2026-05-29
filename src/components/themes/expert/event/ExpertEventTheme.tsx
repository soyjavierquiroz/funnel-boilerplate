import { DNA } from '../../../../dna.config';
import { ExpertEventHero } from './ExpertEventHero';
import { ExpertEventAgenda } from './ExpertEventAgenda';
import { ExpertEventAuthority } from './ExpertEventAuthority';
import { ExpertEventFinalCta } from './ExpertEventFinalCta';
import { ExpertEventPain } from './ExpertEventPain';
import { ExpertEventPromise } from './ExpertEventPromise';

export function ExpertEventTheme() {
  return (
    <div className="theme-expert theme-expert-event min-h-screen bg-event-page text-event-ink">
      <ExpertEventHero />
      <ExpertEventPromise />
      <ExpertEventAgenda />
      <ExpertEventPain />
      <ExpertEventAuthority />
      <ExpertEventFinalCta />

      <footer className="border-t border-event-navy/10 bg-event-surface px-4 py-8 text-center sm:px-6">
        <p className="expert-event-kicker text-xs font-bold uppercase text-event-muted">
          {DNA.copy.productName}
        </p>
      </footer>
    </div>
  );
}

export default ExpertEventTheme;
