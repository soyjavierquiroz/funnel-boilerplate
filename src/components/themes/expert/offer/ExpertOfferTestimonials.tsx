import { Quote } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferTestimonialsProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferTestimonials({ offer }: ExpertOfferTestimonialsProps) {
  const proofGrid = offer.proofGrid;

  return (
    <section className="bg-event-page px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {proofGrid.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            {proofGrid.title}
          </h2>
          <p className="expert-body mx-auto mt-4 max-w-[680px] text-base font-semibold leading-7 text-event-muted">
            {proofGrid.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {proofGrid.items.map((item) => (
            <article
              key={`${item.name}-${item.title}`}
              className="flex min-h-[360px] flex-col overflow-hidden rounded-md border border-event-navy/10 bg-event-surface shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)]"
            >
              <div className="relative aspect-video bg-event-ink">
                <img src={item.image} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-event-ink/20" />
                <div className="absolute left-4 top-4 rounded-sm bg-event-surface px-3 py-1">
                  <p className="expert-event-kicker text-[0.58rem] font-bold uppercase text-event-coral">
                    {item.eyebrow}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="expert-headline text-[1.22rem] leading-tight text-event-navy">{item.title}</h3>
                <Quote className="mt-4 h-7 w-7 text-event-coral" aria-hidden="true" />
                <p className="expert-body mt-3 flex-1 text-sm font-semibold leading-6 text-event-muted">
                  "{item.quote}"
                </p>
                <div className="mt-5 border-t border-event-navy/10 pt-4">
                  <p className="expert-headline text-[1.08rem] leading-tight text-event-navy">{item.name}</p>
                  <p className="expert-body mt-1 text-xs font-bold text-event-coral">{item.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferTestimonials;
