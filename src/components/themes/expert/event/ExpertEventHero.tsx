import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';

export function ExpertEventHero() {
  const content = funnelConfig.content.event;

  return (
    <section className="relative isolate overflow-hidden bg-event-navy px-5 py-11 text-text-inverse sm:px-6 sm:py-14 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--color-event-sky)/0.24),transparent_32%),linear-gradient(115deg,rgb(var(--color-event-navy))_0%,rgb(var(--color-event-navy))_54%,rgb(var(--color-event-navy)/0.84)_100%)]" />
      <div className="relative mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-[680px]">
          <p className="expert-event-kicker inline-flex rounded-[12px] bg-text-inverse/10 px-3 py-2 text-[0.62rem] font-bold uppercase text-event-sky ring-1 ring-text-inverse/15">
            {content.hero.eventName}
          </p>

          <h1 className="expert-headline mt-5 max-w-[740px] text-[1.85rem] uppercase leading-[0.98] text-text-inverse sm:text-[4.4rem] sm:leading-[0.88] lg:text-[5.4rem]">
            {content.hero.headline}
          </h1>

          <p className="expert-headline mt-4 max-w-[620px] text-[1.55rem] leading-tight text-event-sky sm:text-[2.55rem]">
            {content.hero.subheadline}
          </p>

          <p className="expert-body mt-4 max-w-[560px] text-sm font-semibold leading-6 text-text-inverse/75 sm:text-[1.05rem] sm:leading-7">
            {content.hero.eyebrow}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.hero.primaryCtaLabel}</ExpertEventCta>
            <ExpertEventCta
              href="#event-promise"
              variant="secondary"
              className="border-text-inverse/25 text-text-inverse hover:border-text-inverse/45 hover:bg-text-inverse/10"
            >
              {content.hero.secondaryCtaLabel}
            </ExpertEventCta>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[500px]">
          <img
            src={content.assets.hero}
            alt={content.hero.imageAlt}
            className="h-full min-h-[300px] w-full object-cover object-center shadow-[0_28px_88px_rgb(var(--color-event-ink)/0.26)] lg:absolute lg:inset-0 lg:min-h-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-event-navy/62 via-event-navy/12 to-transparent lg:bg-gradient-to-r lg:from-event-navy/36 lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default ExpertEventHero;
