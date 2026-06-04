import { Quote } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertProofWallLargeProps {
  offer: FunnelOfferConfig;
}

export function ExpertProofWallLarge({ offer }: ExpertProofWallLargeProps) {
  const proof = offer.proofWallLarge;

  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {proof.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3.2rem]">
            {proof.title}
          </h2>
          <p className="expert-body mx-auto mt-4 max-w-[720px] text-base font-semibold leading-7 text-event-muted">
            {proof.subtitle}
          </p>
        </div>

        <article className="mt-9 grid overflow-hidden border border-event-navy/10 bg-event-page shadow-[0_18px_52px_rgb(var(--color-event-navy)/0.1)] lg:grid-cols-[0.82fr_1fr]">
          <div className="relative min-h-[280px] bg-event-ink">
            <img
              src={proof.featured.image}
              alt={proof.featured.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-event-ink/22" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
              {proof.featured.eyebrow}
            </p>
            <h3 className="expert-headline mt-3 text-[1.8rem] leading-tight text-event-navy sm:text-[2.4rem]">
              {proof.featured.title}
            </h3>
            <Quote className="mt-5 h-8 w-8 text-event-coral" aria-hidden="true" />
            <p className="expert-body mt-4 text-base font-semibold leading-8 text-event-muted sm:text-[1.08rem]">
              "{proof.featured.quote}"
            </p>
            <div className="mt-6 border-t border-event-navy/10 pt-5">
              <p className="expert-headline text-[1.2rem] leading-tight text-event-ink">{proof.featured.name}</p>
              <p className="expert-body mt-1 text-sm font-bold text-event-coral">{proof.featured.detail}</p>
            </div>
          </div>
        </article>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {proof.items.map((item) => (
            <article
              key={`${item.name}-${item.title}`}
              className="overflow-hidden border border-event-navy/10 bg-event-page shadow-[0_12px_30px_rgb(var(--color-event-navy)/0.06)]"
            >
              <div className="relative aspect-[4/3] bg-event-ink">
                <img src={item.image} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute left-3 top-3 bg-event-surface px-2 py-1">
                  <p className="expert-event-kicker text-[0.54rem] font-bold uppercase text-event-coral">
                    {item.eyebrow}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="expert-headline text-[1.08rem] leading-tight text-event-navy">{item.title}</h3>
                <p className="expert-body mt-3 text-sm font-semibold leading-6 text-event-muted">
                  "{item.quote}"
                </p>
                <p className="expert-body mt-4 text-sm font-black text-event-ink">{item.name}</p>
                <p className="expert-body text-xs font-bold text-event-coral">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertProofWallLarge;
