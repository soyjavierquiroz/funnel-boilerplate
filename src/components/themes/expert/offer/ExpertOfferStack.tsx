import { CheckCircle2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import type { ResolvedAttribution } from '../../../../core/attribution';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferCta } from './ExpertOfferCta';

interface ExpertOfferStackProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
  attribution: ResolvedAttribution;
}

export function ExpertOfferStack({
  offer,
  trackingEnabled,
  trafficChannel,
  attribution,
}: ExpertOfferStackProps) {
  const valueStack = offer.valueStack;

  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_0.62fr] lg:items-start">
          <div>
            <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
              {valueStack.eyebrow}
            </p>
            <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3.1rem]">
              {valueStack.title}
            </h2>
            <p className="expert-body mt-4 max-w-[720px] text-base font-semibold leading-7 text-event-muted sm:text-[1.05rem]">
              {valueStack.subtitle}
            </p>

            <div className="mt-7 grid gap-4">
              {valueStack.stackSections.map((section) => (
                <article
                  key={section.title}
                  className="border border-event-navy/10 bg-event-page p-5 shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)]"
                >
                  <p className="expert-event-kicker text-[0.6rem] font-bold uppercase text-event-coral">
                    {section.eyebrow}
                  </p>
                  <h3 className="expert-headline mt-2 text-[1.35rem] leading-tight text-event-navy">
                    {section.title}
                  </h3>
                  <p className="expert-body mt-2 text-sm font-semibold leading-6 text-event-muted">
                    {section.description}
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {section.items.map((item) => (
                      <p key={item} className="expert-body bg-event-soft p-3 text-xs font-bold leading-5 text-event-ink">
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {offer.offerCard.includes.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-md border border-event-navy/10 bg-event-soft p-4 shadow-[0_10px_28px_rgb(var(--color-event-navy)/0.05)]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
                  <p className="expert-body text-base font-bold leading-7 text-event-ink">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4">
              {valueStack.items.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-4 rounded-md border border-event-navy/10 bg-event-page p-4 shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)] sm:grid-cols-[1fr_120px] sm:items-center"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
                    <div>
                      <p className="expert-headline text-[1.18rem] leading-tight text-event-navy">{item.title}</p>
                      <p className="expert-body mt-2 text-sm font-semibold leading-6 text-event-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <p className="expert-headline rounded-sm bg-event-soft px-3 py-2 text-left text-[1.2rem] text-event-navy sm:text-center">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-md border border-event-navy/10 bg-event-page p-5 text-center shadow-[0_22px_64px_rgb(var(--color-event-navy)/0.1)] sm:p-6 lg:sticky lg:top-6">
            <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
              {valueStack.totalValueLabel}
            </p>
            <p className="expert-headline mt-2 text-[2.35rem] leading-none text-event-navy line-through">
              {valueStack.totalValue}
            </p>

            <div className="my-5 h-px bg-event-navy/10" />

            <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
              {valueStack.todayPriceLabel}
            </p>
            <p className="expert-headline mt-2 text-[3.6rem] leading-none text-event-ink">
              {offer.price}
            </p>
            <p className="expert-body mt-2 text-sm font-bold text-event-muted">
              {offer.regularPriceLabel}: <span className="line-through">{offer.regularPrice}</span>
            </p>

            <div className="mt-6">
              <ExpertOfferCta
                offer={offer}
                trackingEnabled={trackingEnabled}
                trafficChannel={trafficChannel}
                attribution={attribution}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferStack;
