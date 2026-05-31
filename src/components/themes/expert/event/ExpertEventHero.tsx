import { CalendarDays } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';
import { expertEventText } from './ExpertEventTypography';

export function ExpertEventHero() {
  const content = funnelConfig.content.event;
  const heroCopy = {
    eyebrow: content.hero.eyebrow.toUpperCase(),
    brand: content.hero.eventName,
    headline: content.hero.headline,
    subheadline: content.hero.subheadline,
    primaryCtaLabel: content.hero.primaryCtaLabel,
    secondaryCtaLabel: content.hero.secondaryCtaLabel,
    dateLabel: '9, 10 y 11 DE JUNIO',
  };

  return (
    <section className="relative isolate min-h-[700px] overflow-hidden bg-event-navy px-5 pb-8 pt-5 text-text-inverse sm:min-h-[760px] sm:px-6 sm:pt-6 lg:min-h-[clamp(760px,57vw,920px)] lg:px-10 lg:py-8">
      <img
        src={content.assets.hero}
        alt={content.hero.imageAlt}
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[24%_center] sm:object-[25%_center] lg:scale-[1.04] lg:object-[center_52%]"
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--color-event-navy) / 0) 0%, rgb(var(--color-event-navy) / 0.04) 38%, rgb(var(--color-event-navy) / 0.36) 58%, rgb(var(--color-event-navy) / 0.82) 76%, rgb(var(--color-event-navy) / 0.98) 100%)',
        }}
      />
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgb(var(--color-event-navy) / 0.05) 0%, rgb(var(--color-event-navy) / 0.05) 32%, rgb(var(--color-event-navy) / 0.42) 56%, rgb(var(--color-event-navy) / 0.9) 76%, rgb(var(--color-event-navy) / 0.99) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] items-start justify-between gap-3">
        <a href={`#${content.registrationAnchorId}`} aria-label="Maneja Sin Miedo" className="inline-flex">
          <span className="rounded-2xl border border-text-inverse/20 bg-text-inverse/[0.92] px-3 py-2 shadow-[0_16px_42px_rgb(var(--color-event-ink)/0.22)] backdrop-blur">
            <img
              src={content.assets.logo}
              alt="Maneja Sin Miedo"
              className="h-auto w-[118px] sm:w-[150px]"
            />
          </span>
        </a>

        <div className="flex max-w-[176px] flex-col items-end gap-2 text-right sm:max-w-none sm:flex-row sm:items-center">
          <span className={[expertEventText.eyebrow, 'rounded-full border border-text-inverse/20 bg-event-navy/[0.62] px-3 py-2 text-text-inverse shadow-[0_12px_34px_rgb(var(--color-event-ink)/0.18)] backdrop-blur'].join(' ')}>
            {heroCopy.eyebrow}
          </span>
          <span className={[expertEventText.eyebrow, 'inline-flex items-center gap-1.5 rounded-full bg-event-coral px-3 py-2 text-text-inverse shadow-[0_14px_34px_rgb(var(--color-event-coral)/0.28)]'].join(' ')}>
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {heroCopy.dateLabel}
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[635px] w-full max-w-[1320px] items-end sm:min-h-[670px] lg:min-h-[calc(clamp(760px,57vw,920px)-112px)] lg:items-center">
        <div className="ml-auto w-full max-w-[430px] pb-0 text-right sm:pb-2 lg:max-w-[440px] lg:pb-0 xl:max-w-[480px]">
          <p className={[expertEventText.heroBrand, 'text-event-sky'].join(' ')}>
            {heroCopy.brand}
          </p>

          <h1 className={[expertEventText.heroH1, 'mt-4 lg:mt-5'].join(' ')}>
            {heroCopy.headline}
          </h1>

          <p className={[expertEventText.bodyLarge, 'ml-auto mt-4 max-w-[460px] font-semibold text-text-inverse/85 lg:mt-5'].join(' ')}>
            {heroCopy.subheadline}
          </p>

          <div className="ml-auto mt-6 flex w-full flex-col gap-3 sm:max-w-[430px] lg:mt-7 xl:max-w-[480px] xl:flex-row xl:justify-end">
            <ExpertEventCta href={`#${content.registrationAnchorId}`}>{heroCopy.primaryCtaLabel}</ExpertEventCta>
            <ExpertEventCta
              href="#event-promise"
              variant="secondary"
              className="border-text-inverse/30 text-text-inverse shadow-none hover:border-text-inverse/55 hover:bg-text-inverse/10"
            >
              {heroCopy.secondaryCtaLabel}
            </ExpertEventCta>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertEventHero;
