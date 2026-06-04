import { Gift } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferBonusesProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferBonuses({ offer }: ExpertOfferBonusesProps) {
  const bonuses = offer.bonuses;

  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {bonuses.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            {bonuses.title}
          </h2>
          <p className="expert-body mt-4 text-base font-semibold leading-7 text-event-muted sm:text-[1.05rem]">
            {bonuses.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {bonuses.items.map((bonus) => (
            <article
              key={bonus.title}
              className="flex min-h-[260px] flex-col rounded-md border border-event-navy/10 bg-event-page p-5 shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-event-coral/12 text-event-coral">
                <Gift className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="expert-headline mt-5 text-[1.35rem] leading-tight text-event-navy">
                {bonus.title}
              </h3>
              <p className="expert-body mt-3 flex-1 text-sm font-semibold leading-6 text-event-muted">
                {bonus.description}
              </p>
              {bonus.value && (
                <p className="expert-event-kicker mt-5 text-[0.64rem] font-bold uppercase text-event-coral">
                  {bonuses.valueLabel}: {bonus.value}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferBonuses;
