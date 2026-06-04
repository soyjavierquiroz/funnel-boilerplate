import { CheckCircle2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferCta } from './ExpertOfferCta';

interface ExpertOfferValueStackProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
}

export function ExpertOfferValueStack({ offer, trackingEnabled, trafficChannel }: ExpertOfferValueStackProps) {
  const stack = offer.valueStack;

  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px] rounded-lg border border-event-navy/10 bg-event-page p-5 shadow-[0_22px_64px_rgb(var(--color-event-navy)/0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_0.62fr] lg:items-start">
          <div>
            <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
              {stack.eyebrow}
            </p>
            <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3.1rem]">
              {stack.title}
            </h2>
            <p className="expert-body mt-4 max-w-[720px] text-base font-semibold leading-7 text-event-muted sm:text-[1.05rem]">
              {stack.subtitle}
            </p>

            <div className="mt-8 grid gap-4">
              {stack.items.map((item) => (
                <article key={item.title} className="grid gap-4 rounded-lg border border-event-navy/10 bg-event-surface p-4 sm:grid-cols-[1fr_120px] sm:items-center">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
                    <div>
                      <p className="expert-headline text-[1.18rem] leading-tight text-event-navy">{item.title}</p>
                      <p className="expert-body mt-2 text-sm font-semibold leading-6 text-event-muted">{item.description}</p>
                    </div>
                  </div>
                  <p className="expert-headline rounded-md bg-event-soft px-3 py-2 text-left text-[1.2rem] text-event-navy sm:text-center">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-event-navy/10 bg-event-surface p-5 text-center shadow-[0_16px_42px_rgb(var(--color-event-navy)/0.08)] sm:p-6 lg:sticky lg:top-6">
            <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
              {stack.totalValueLabel}
            </p>
            <p className="expert-headline mt-2 text-[2.35rem] leading-none text-event-navy line-through">
              {stack.totalValue}
            </p>

            <div className="my-5 h-px bg-event-navy/10" />

            <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
              {stack.todayPriceLabel}
            </p>
            <p className="expert-headline mt-2 text-[3.6rem] leading-none text-event-ink">
              {offer.price}
            </p>
            <p className="expert-body mt-2 text-sm font-bold text-event-muted">
              {offer.regularPriceLabel}: <span className="line-through">{offer.regularPrice}</span>
            </p>

            <div className="mt-6">
              <ExpertOfferCta offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferValueStack;
