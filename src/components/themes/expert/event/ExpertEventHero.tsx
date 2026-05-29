import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';
import { expertEventText } from './ExpertEventTypography';

export function ExpertEventHero() {
  const content = funnelConfig.content.event;
  const heroCopy = {
    eyebrow: 'EVENTO GRATUITO ONLINE',
    brand: 'Maneja Sin Miedo',
    headline: '¿CANSADA DE DEPENDER DE OTROS?',
    subheadline:
      'Recupera tu confianza al volante y vuelve a sentir la libertad de moverte cuando quieras.',
    primaryCtaLabel: 'QUIERO RECUPERAR MI CONFIANZA',
    secondaryCtaLabel: 'VER CÓMO FUNCIONA',
  };

  return (
    <section className="relative isolate min-h-[740px] overflow-hidden bg-event-navy px-5 pb-8 pt-10 text-text-inverse sm:min-h-[780px] sm:px-6 lg:min-h-[clamp(760px,57vw,920px)] lg:px-10 lg:py-10">
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
            'linear-gradient(180deg, rgb(var(--color-event-navy) / 0) 0%, rgb(var(--color-event-navy) / 0.04) 42%, rgb(var(--color-event-navy) / 0.42) 58%, rgb(var(--color-event-navy) / 0.88) 74%, rgb(var(--color-event-navy) / 0.98) 100%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[700px] w-full max-w-[1320px] items-end sm:min-h-[720px] lg:min-h-[calc(clamp(760px,57vw,920px)-80px)] lg:items-center">
        <div className="ml-auto w-full max-w-[430px] pb-0 text-right sm:pb-2 lg:max-w-[440px] lg:pb-0 xl:max-w-[480px]">
          <p className={[expertEventText.eyebrow, 'text-text-inverse/80'].join(' ')}>
            {heroCopy.eyebrow}
          </p>

          <p className={[expertEventText.heroBrand, 'mt-3'].join(' ')}>
            {heroCopy.brand}
          </p>

          <h1 className={[expertEventText.heroH1, 'mt-4 lg:mt-5'].join(' ')}>
            {heroCopy.headline}
          </h1>

          <p className={[expertEventText.body, 'ml-auto mt-4 max-w-[430px] font-semibold text-text-inverse/80 lg:mt-5'].join(' ')}>
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
