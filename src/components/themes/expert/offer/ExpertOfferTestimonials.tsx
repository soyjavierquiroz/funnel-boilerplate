import { Quote } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferTestimonialsProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferTestimonials({ offer }: ExpertOfferTestimonialsProps) {
  const testimonials = offer.testimonials;

  return (
    <section className="bg-event-soft px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {testimonials.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            {testimonials.title}
          </h2>
          <p className="expert-body mx-auto mt-4 max-w-[680px] text-base font-semibold leading-7 text-event-muted">
            {testimonials.subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <article key={item.name} className="flex min-h-[300px] flex-col rounded-lg border border-event-navy/10 bg-event-surface p-6 shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)]">
              <Quote className="h-8 w-8 text-event-coral" aria-hidden="true" />
              <p className="expert-body mt-5 flex-1 text-base font-semibold leading-7 text-event-muted">
                "{item.quote}"
              </p>
              <div className="mt-6 border-t border-event-navy/10 pt-5">
                <p className="expert-headline text-[1.18rem] leading-tight text-event-navy">{item.name}</p>
                <p className="expert-body mt-1 text-sm font-bold text-event-coral">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferTestimonials;
