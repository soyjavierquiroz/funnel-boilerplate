import { DNA } from '../../../../dna.config';
import { ExpertEventHero } from './ExpertEventHero';
import { ExpertEventAgenda } from './ExpertEventAgenda';
import { ExpertEventAuthority } from './ExpertEventAuthority';
import { ExpertEventFinalCta } from './ExpertEventFinalCta';
import { ExpertEventPain } from './ExpertEventPain';
import { ExpertEventPromise } from './ExpertEventPromise';
import { ExpertEventTestimonials } from './ExpertEventTestimonials';
import { ExpertEventTransformation } from './ExpertEventTransformation';
import { ExpertEventWhyFearPersists } from './ExpertEventWhyFearPersists';

export function ExpertEventTheme() {
  return (
    <div className="theme-expert theme-expert-event min-h-screen bg-event-page text-event-ink">
      <ExpertEventHero />
      <section className="border-y border-event-navy/10 bg-event-surface px-5 py-4 text-center sm:px-6">
        <p className="expert-body mx-auto max-w-[860px] text-sm font-bold leading-6 text-event-navy sm:text-base">
          {DNA.copy.event.socialProof}
        </p>
      </section>
      <ExpertEventPromise />
      <ExpertEventAuthority />
      <ExpertEventTransformation />
      <ExpertEventAgenda />
      <ExpertEventWhyFearPersists />
      <ExpertEventPain />
      <ExpertEventTestimonials />
      <ExpertEventFinalCta />

      <footer className="border-t border-event-navy/10 bg-event-surface px-4 py-8 text-center sm:px-6">
        <img
          src={DNA.assets.event.logo}
          alt="Maneja Sin Miedo"
          loading="lazy"
          className="mx-auto mb-4 h-auto w-[116px]"
        />
        <p className="expert-event-kicker text-xs font-bold uppercase text-event-muted">
          {DNA.copy.event.hero.eventName}
        </p>
      </footer>
    </div>
  );
}

export default ExpertEventTheme;
