import { CheckCircle2 } from 'lucide-react';
import type { FunnelOfferConfig, OfferBoxConfig } from '../../../../core/config/funnel.config';
import type { ResolvedAttribution } from '../../../../core/attribution';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferCta } from './ExpertOfferCta';
import { isOfferCheckoutConfigured } from './offerUtils';

interface ExpertOfferOrderCardProps {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
  attribution: ResolvedAttribution;
  className?: string;
  offerBox?: OfferBoxConfig;
}

export function ExpertOfferOrderCard({
  offer,
  trackingEnabled,
  trafficChannel,
  attribution,
  className = '',
  offerBox,
}: ExpertOfferOrderCardProps) {
  const isCheckoutConfigured = isOfferCheckoutConfigured(offer.checkoutUrl);
  const fallbackOfferBox: OfferBoxConfig = {
    ...offer.offerCard,
    badge: '',
  };
  const content = offerBox ?? offer.offerBoxes[0] ?? fallbackOfferBox;
  const statusText = isCheckoutConfigured ? content.footerNote : offer.checkoutPendingMessage;

  return (
    <aside
      className={[
        'rounded-md border border-event-navy/15 bg-event-surface p-5 text-event-ink shadow-[0_18px_46px_rgb(var(--color-event-navy)/0.12)] sm:p-6',
        className,
      ].join(' ')}
    >
      <p className="expert-event-kicker text-[0.64rem] font-bold uppercase text-event-coral">
        {content.eyebrow}
      </p>
      <h2 className="expert-headline mt-2 text-[1.55rem] leading-tight text-event-navy">
        {content.title}
      </h2>
      {content.badge && (
        <p className="expert-event-kicker mt-2 inline-flex rounded-sm bg-event-soft px-3 py-1 text-[0.58rem] font-bold uppercase text-event-navy">
          {content.badge}
        </p>
      )}
      <p className="expert-body mt-3 text-sm font-semibold leading-6 text-event-muted">
        {content.summary}
      </p>

      <div className="mt-5 border-y border-event-navy/10 py-5">
        <p className="expert-event-kicker text-[0.62rem] font-bold uppercase text-event-muted">
          {offer.valueStack.todayPriceLabel}
        </p>
        <div className="mt-2 flex flex-wrap items-end gap-3">
          <span className="expert-headline text-[3rem] leading-none text-event-ink sm:text-[3.4rem]">
            {offer.price}
          </span>
          <span className="expert-body pb-2 text-sm font-bold text-event-muted">
            <span className="line-through">{offer.regularPrice}</span> {offer.regularPriceLabel}
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {content.includes.map((item) => (
          <div key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-event-coral" aria-hidden="true" />
            <p className="expert-body text-sm font-bold leading-5 text-event-ink">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ExpertOfferCta
          offer={offer}
          trackingEnabled={trackingEnabled}
          trafficChannel={trafficChannel}
          attribution={attribution}
        />
      </div>

      <p className="expert-body mt-3 text-center text-xs font-bold leading-5 text-event-muted">
        {statusText}
      </p>
    </aside>
  );
}

export default ExpertOfferOrderCard;
