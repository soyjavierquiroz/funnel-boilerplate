import { useLocation } from 'react-router-dom';
import funnelConfig from '../../../../core/config/funnel.config';
import { getTrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferBonuses } from './ExpertOfferBonuses';
import { ExpertOfferCta } from './ExpertOfferCta';
import { ExpertOfferFaq } from './ExpertOfferFaq';
import { ExpertOfferGuarantee } from './ExpertOfferGuarantee';
import { ExpertOfferHero } from './ExpertOfferHero';
import { ExpertOfferStack } from './ExpertOfferStack';

export function ExpertOfferPage() {
  const location = useLocation();
  const trafficChannel = getTrafficChannel(location.pathname);
  const channelConfig = funnelConfig.trafficChannels[trafficChannel];
  const offer = funnelConfig.offer;

  return (
    <div className="theme-expert theme-expert-event min-h-screen bg-event-page text-event-ink">
      <ExpertOfferHero
        offer={offer}
        trackingEnabled={channelConfig.trackingEnabled}
        trafficChannel={trafficChannel}
      />
      <ExpertOfferStack offer={offer} />
      <ExpertOfferBonuses offer={offer} />
      <ExpertOfferGuarantee offer={offer} />
      <ExpertOfferFaq offer={offer} />

      <section className="bg-event-page px-5 py-12 text-center sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[760px]">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {offer.productName}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            Empieza hoy con acceso inmediato.
          </h2>
          <p className="expert-body mx-auto mt-4 max-w-[600px] text-base font-semibold leading-7 text-event-muted">
            Precio especial {offer.price}. Precio regular {offer.regularPrice}.
          </p>
          <div className="mx-auto mt-6 max-w-[360px] sm:max-w-none">
            <ExpertOfferCta
              offer={offer}
              trackingEnabled={channelConfig.trackingEnabled}
              trafficChannel={trafficChannel}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExpertOfferPage;
