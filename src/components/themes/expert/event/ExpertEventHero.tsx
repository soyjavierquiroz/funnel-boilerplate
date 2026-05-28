import { ShieldCheck } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventHero() {
  const content = funnelConfig.content.event;

  return (
    <ExpertEventSection className="min-h-screen pb-10 pt-8 md:pb-14 md:pt-12" width="wide">
      <div className="grid min-h-[calc(100vh-96px)] items-center gap-8 lg:grid-cols-[1fr_0.88fr] lg:gap-12">
        <div className="space-y-7">
          <div className="space-y-5">
            <p className="expert-event-kicker inline-flex rounded-full border border-event-navy/15 bg-event-surface px-4 py-2 text-xs font-bold uppercase text-event-navy">
              {content.hero.eyebrow}
            </p>

            <h1 className="expert-headline max-w-[760px] text-[3.35rem] uppercase leading-[0.88] text-event-ink sm:text-[5.25rem] lg:text-[6.6rem]">
              {content.hero.headline}
            </h1>

            <p className="expert-body max-w-[680px] text-lg font-semibold leading-8 text-event-muted sm:text-xl">
              {content.hero.subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.hero.primaryCtaLabel}</ExpertEventCta>
            <ExpertEventCta href="#event-foundation" variant="secondary">
              {content.hero.secondaryCtaLabel}
            </ExpertEventCta>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[28px] border border-event-navy/12 bg-event-surface shadow-[0_22px_60px_rgb(var(--color-event-navy)/0.12)]">
            <img
              src={content.assets.insecureDriverImage}
              alt={content.hero.imageAlt}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <ExpertEventCard tone="accent" className="-mt-10 ml-6 max-w-[360px] sm:ml-10">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-event-navy" aria-hidden="true" />
              <div>
                <p className="expert-headline text-xl leading-tight text-event-ink">
                  {content.foundation.cardTitle}
                </p>
                <p className="expert-body mt-2 text-sm font-semibold leading-6 text-event-muted">
                  {content.foundation.cardText}
                </p>
              </div>
            </div>
          </ExpertEventCard>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventHero;
