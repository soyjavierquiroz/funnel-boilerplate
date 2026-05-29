import { useEffect, useRef } from 'react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCta } from './ExpertEventCta';

export function ExpertEventHero() {
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
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

  useEffect(() => {
    const image = heroImageRef.current;
    const hero = heroRef.current;

    if (!image || !hero || typeof window === 'undefined') {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;

    const renderParallax = () => {
      animationFrame = 0;

      if (reducedMotionQuery.matches) {
        image.style.transform = 'translate3d(0, 0, 0) scale(1.02)';
        return;
      }

      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return;
      }

      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.min(1, Math.max(0, progress));
      const maxTravel = window.innerWidth < 640 ? 8 : window.innerWidth < 1024 ? 16 : 40;
      const offset = (clampedProgress - 0.5) * maxTravel;

      image.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.04)`;
    };

    const requestParallax = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(renderParallax);
      }
    };

    requestParallax();
    window.addEventListener('scroll', requestParallax, { passive: true });
    window.addEventListener('resize', requestParallax);
    reducedMotionQuery.addEventListener('change', requestParallax);

    return () => {
      window.removeEventListener('scroll', requestParallax);
      window.removeEventListener('resize', requestParallax);
      reducedMotionQuery.removeEventListener('change', requestParallax);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[720px] overflow-hidden bg-event-navy px-5 py-10 text-text-inverse sm:min-h-[760px] sm:px-6 lg:min-h-[clamp(760px,57vw,920px)] lg:px-10"
    >
      <img
        ref={heroImageRef}
        src={content.assets.hero}
        alt={content.hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-[34%_center] will-change-transform sm:object-[33%_center] lg:object-[center_52%]"
        style={{ transform: 'translate3d(0, 0, 0) scale(1.04)' }}
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
            'linear-gradient(180deg, rgb(var(--color-event-navy) / 0.02) 0%, rgb(var(--color-event-navy) / 0.08) 42%, rgb(var(--color-event-navy) / 0.76) 70%, rgb(var(--color-event-navy) / 0.98) 100%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1320px] items-end sm:min-h-[680px] lg:min-h-[calc(clamp(760px,57vw,920px)-80px)] lg:items-center">
        <div className="ml-auto w-full max-w-[430px] pb-3 text-right sm:pb-5 lg:max-w-[440px] lg:pb-0 xl:max-w-[480px]">
          <p className="expert-event-kicker text-[0.62rem] font-bold uppercase text-text-inverse/80">
            {heroCopy.eyebrow}
          </p>

          <p className="expert-headline mt-3 text-[1rem] leading-none text-event-sky sm:text-[1.12rem]">
            {heroCopy.brand}
          </p>

          <h1 className="expert-headline mt-4 text-[2.05rem] uppercase leading-[0.97] text-text-inverse sm:text-[2.85rem] sm:leading-[0.94] lg:mt-5 lg:text-[3.55rem] lg:leading-[0.93] xl:text-[3.95rem]">
            {heroCopy.headline}
          </h1>

          <p className="expert-body ml-auto mt-4 max-w-[430px] text-[0.98rem] font-semibold leading-7 text-text-inverse/80 sm:text-[1.05rem] sm:leading-8 lg:mt-5">
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
