import { CalendarDays, Gift, MonitorPlay, Radio } from 'lucide-react';
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
    dateLabel: content.hero.dateLabel,
    quickBenefits: content.hero.quickBenefits,
  };
  const eventNameWords = heroCopy.brand.split(' ');
  const titleLead = eventNameWords[0] ?? heroCopy.brand;
  const titleMiddle = eventNameWords.length > 2 ? eventNameWords.slice(1, -1).join(' ') : '';
  const titleAccent = eventNameWords.length > 1 ? eventNameWords[eventNameWords.length - 1] : '';
  const benefitIcons = [MonitorPlay, Gift, Radio];

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden bg-event-navy px-4 py-3 text-text-inverse sm:min-h-[100svh] sm:px-6 sm:py-6 lg:min-h-[clamp(760px,85vh,920px)] lg:px-10 lg:py-8">
      <img
        src={content.assets.hero}
        alt={content.hero.imageAlt}
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[34%_center] sm:object-[30%_center] lg:scale-[1.03] lg:object-[center_52%]"
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--color-event-navy) / 0.16) 0%, rgb(var(--color-event-navy) / 0.08) 30%, rgb(var(--color-event-navy) / 0.42) 56%, rgb(var(--color-event-navy) / 0.86) 76%, rgb(var(--color-event-navy) / 0.99) 100%)',
        }}
      />
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgb(var(--color-event-navy) / 0.58) 0%, rgb(var(--color-event-navy) / 0.28) 26%, rgb(var(--color-event-navy) / 0.56) 54%, rgb(var(--color-event-navy) / 0.94) 82%, rgb(var(--color-event-navy) / 1) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgb(var(--color-event-sky)/0.22),transparent_30%),radial-gradient(circle_at_82%_80%,rgb(var(--color-event-coral)/0.18),transparent_34%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[calc(92svh-24px)] w-full max-w-[1320px] flex-col sm:min-h-[calc(100svh-48px)] lg:min-h-[calc(clamp(760px,85vh,920px)-64px)]">
        <div className="flex items-start justify-between gap-3">
          <a href={`#${content.registrationAnchorId}`} aria-label={heroCopy.brand} className="inline-flex">
            <span className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full border border-text-inverse/[0.72] bg-event-navy shadow-[0_12px_30px_rgb(var(--color-event-ink)/0.26),0_0_22px_rgb(var(--color-event-sky)/0.18)] sm:h-[116px] sm:w-[116px] sm:border-2 lg:h-[126px] lg:w-[126px]">
              <img
                src={content.assets.logo}
                alt={heroCopy.brand}
                className="h-full w-full scale-[1.24] rounded-full object-cover"
              />
            </span>
          </a>

          <div className="grid max-w-[190px] grid-cols-1 gap-1.5 sm:max-w-none sm:gap-2 sm:justify-items-end">
            <span className={[expertEventText.eyebrow, 'rounded-xl border border-text-inverse/[0.2] bg-event-navy/[0.66] px-2.5 py-1.5 text-center text-[0.52rem] text-text-inverse shadow-[0_8px_20px_rgb(var(--color-event-ink)/0.16)] backdrop-blur sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-[0.7rem]'].join(' ')}>
              {heroCopy.eyebrow}
            </span>
            <span className={[expertEventText.eyebrow, 'inline-flex items-center justify-center gap-1.5 rounded-xl bg-event-coral/95 px-2.5 py-1.5 text-center text-[0.52rem] text-text-inverse shadow-[0_10px_22px_rgb(var(--color-event-coral)/0.24)] sm:rounded-2xl sm:px-4 sm:py-2.5 sm:text-[0.7rem]'].join(' ')}>
              <CalendarDays className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
              {heroCopy.dateLabel}
            </span>
          </div>
        </div>

        <div className="grid flex-1 items-end gap-5 pb-2 pt-4 sm:gap-8 sm:pb-8 sm:pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,0.78fr)] lg:items-center lg:pb-0 lg:pt-8">
          <div className="hidden lg:block" aria-hidden="true" />

          <div className="mx-auto w-full max-w-[590px] text-center sm:max-w-[660px] lg:mx-0 lg:ml-auto lg:text-right">
            <h1 aria-label={heroCopy.brand}>
              <span className={[expertEventText.heroEventLead, 'block'].join(' ')}>
                {titleLead}
              </span>
              <span className={[expertEventText.heroEventRest, 'mt-1 block'].join(' ')}>
                {titleMiddle}{titleMiddle ? ' ' : ''}
                <span className="text-event-coral drop-shadow-[0_10px_30px_rgb(var(--color-event-coral)/0.32)]">
                  {titleAccent}
                </span>
              </span>
            </h1>

            <p className={[expertEventText.heroH1, 'mx-auto mt-4 max-w-[580px] text-[1.45rem] text-text-inverse sm:mt-6 sm:text-[2.15rem] lg:mx-0 lg:ml-auto lg:text-[2.42rem]'].join(' ')}>
              {heroCopy.headline}
            </p>

            <p className={[expertEventText.body, 'mx-auto mt-2 max-w-[480px] text-[0.95rem] font-semibold leading-6 text-text-inverse/[0.84] sm:mt-4 sm:text-[1.05rem] sm:leading-7 lg:mx-0 lg:ml-auto'].join(' ')}>
              {heroCopy.subheadline}
            </p>

            <div className="mt-4 flex w-full flex-col gap-2.5 sm:mx-auto sm:mt-6 sm:max-w-[520px] sm:flex-row sm:gap-3 lg:ml-auto lg:mr-0 lg:max-w-[560px] lg:justify-end">
              <ExpertEventCta href={`#${content.registrationAnchorId}`} className="w-full sm:flex-1">
                {heroCopy.primaryCtaLabel}
              </ExpertEventCta>
              <ExpertEventCta
                href="#event-promise"
                variant="secondary"
                className="hidden border-text-inverse/[0.28] bg-event-navy/[0.36] text-text-inverse shadow-[0_14px_34px_rgb(var(--color-event-ink)/0.18)] hover:border-text-inverse/[0.55] hover:bg-text-inverse/10 sm:inline-flex sm:flex-1"
              >
                {heroCopy.secondaryCtaLabel}
              </ExpertEventCta>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-5 sm:gap-2 lg:ml-auto lg:max-w-[540px]">
              {heroCopy.quickBenefits.map((benefit, index) => {
                const BenefitIcon = benefitIcons[index] ?? MonitorPlay;

                return (
                  <span
                    key={benefit}
                    className="inline-flex min-h-[32px] items-center justify-center gap-1 rounded-xl border border-text-inverse/[0.14] bg-text-inverse/[0.09] px-1.5 py-1 text-center shadow-[0_8px_18px_rgb(var(--color-event-ink)/0.14)] backdrop-blur sm:min-h-[44px] sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2"
                  >
                    <BenefitIcon className="h-3 w-3 shrink-0 text-event-sky sm:h-4 sm:w-4" aria-hidden="true" />
                    <span className={[expertEventText.small, 'text-[0.66rem] font-bold leading-4 text-text-inverse sm:text-sm sm:leading-5'].join(' ')}>
                      {benefit}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertEventHero;
