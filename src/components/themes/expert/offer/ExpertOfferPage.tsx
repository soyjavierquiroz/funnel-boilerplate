import type { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import funnelConfig from '../../../../core/config/funnel.config';
import { getTrafficChannel } from '../../../../core/routing/channel';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferBeliefShift } from './ExpertOfferBeliefShift';
import { ExpertOfferBonuses } from './ExpertOfferBonuses';
import { ExpertOfferCredibilityStrip } from './ExpertOfferCredibilityStrip';
import { ExpertOfferFaq } from './ExpertOfferFaq';
import { ExpertOfferFinalCta } from './ExpertOfferFinalCta';
import { ExpertOfferGuarantee } from './ExpertOfferGuarantee';
import { ExpertOfferHeroVsl } from './ExpertOfferHeroVsl';
import { ExpertOfferStack } from './ExpertOfferStack';
import { ExpertOfferStory } from './ExpertOfferStory';
import { ExpertOfferTestimonials } from './ExpertOfferTestimonials';

interface ExpertOfferBlockContext {
  offer: FunnelOfferConfig;
  trackingEnabled: boolean;
  trafficChannel: TrafficChannel;
}

interface ExpertOfferBlock {
  id: string;
  render: (context: ExpertOfferBlockContext) => ReactElement;
}

const expertOfferBlocks: ExpertOfferBlock[] = [
  {
    id: 'hero-vsl',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertOfferHeroVsl offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
    ),
  },
  {
    id: 'credibility-strip',
    render: ({ offer }) => <ExpertOfferCredibilityStrip offer={offer} />,
  },
  {
    id: 'belief-shift',
    render: ({ offer }) => <ExpertOfferBeliefShift offer={offer} />,
  },
  {
    id: 'story',
    render: ({ offer }) => <ExpertOfferStory offer={offer} />,
  },
  {
    id: 'testimonials',
    render: ({ offer }) => <ExpertOfferTestimonials offer={offer} />,
  },
  {
    id: 'offer-stack',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertOfferStack offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
    ),
  },
  {
    id: 'bonuses',
    render: ({ offer }) => <ExpertOfferBonuses offer={offer} />,
  },
  {
    id: 'guarantee',
    render: ({ offer }) => <ExpertOfferGuarantee offer={offer} />,
  },
  {
    id: 'faq',
    render: ({ offer }) => <ExpertOfferFaq offer={offer} />,
  },
  {
    id: 'final-cta',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertOfferFinalCta offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
    ),
  },
];

export function ExpertOfferPage() {
  const location = useLocation();
  const trafficChannel = getTrafficChannel(location.pathname);
  const channelConfig = funnelConfig.trafficChannels[trafficChannel];
  const blockContext: ExpertOfferBlockContext = {
    offer: funnelConfig.offer,
    trackingEnabled: channelConfig.trackingEnabled,
    trafficChannel,
  };

  return (
    <div className="theme-expert theme-expert-event min-h-screen bg-event-page text-event-ink">
      {expertOfferBlocks.map((block) => (
        <div key={block.id}>{block.render(blockContext)}</div>
      ))}
    </div>
  );
}

export default ExpertOfferPage;
