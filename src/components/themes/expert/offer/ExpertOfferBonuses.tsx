import { Gift } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferBonusesProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferBonuses({ offer }: ExpertOfferBonusesProps) {
  return (
    <section className="bg-event-page px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="max-w-[720px]">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {offer.bonusSection.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            {offer.bonusSection.title}
          </h2>
          <p className="expert-body mt-4 text-base font-semibold leading-7 text-event-muted sm:text-[1.05rem]">
            {offer.bonusSection.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {offer.bonuses.map((bonus) => (
            <article
              key={bonus.title}
              className="flex min-h-[260px] flex-col rounded-lg border border-event-navy/10 bg-event-surface p-5 shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-event-coral/12 text-event-coral">
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
                  {offer.bonusSection.valueLabel}: {bonus.value}
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
