import type { CSSProperties, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveDnaThemeStyle } from '../../../../site/current';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import funnelConfig from '../../../../core/config/funnel.config';
import { getTrafficChannel } from '../../../../core/routing/channel';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferAnnouncementBar } from './ExpertOfferAnnouncementBar';
import { ExpertOfferBonuses } from './ExpertOfferBonuses';
import { ExpertOfferCredibilityStrip } from './ExpertOfferCredibilityStrip';
import { ExpertOfferFaq } from './ExpertOfferFaq';
import { ExpertOfferFinalCta } from './ExpertOfferFinalCta';
import { ExpertOfferGuarantee } from './ExpertOfferGuarantee';
import { ExpertOfferPromiseHero } from './ExpertOfferPromiseHero';
import { ExpertOfferStack } from './ExpertOfferStack';
import { ExpertOfferStory } from './ExpertOfferStory';
import { ExpertOfferTestimonials } from './ExpertOfferTestimonials';
import { ExpertOfferVslOrder } from './ExpertOfferVslOrder';
import { ExpertFascinationBullets } from './ExpertFascinationBullets';
import { ExpertIdentityShift } from './ExpertIdentityShift';
import { ExpertOpportunitySection } from './ExpertOpportunitySection';
import { ExpertProofWallLarge } from './ExpertProofWallLarge';
import { ExpertRepeatedOffer } from './ExpertRepeatedOffer';

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
    id: 'announcement-bar',
    render: ({ offer }) => <ExpertOfferAnnouncementBar offer={offer} />,
  },
  {
    id: 'big-promise-hero',
    render: ({ offer }) => <ExpertOfferPromiseHero offer={offer} />,
  },
  {
    id: 'vsl-order-card',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertOfferVslOrder offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
    ),
  },
  {
    id: 'credibility-strip',
    render: ({ offer }) => <ExpertOfferCredibilityStrip offer={offer} />,
  },
  {
    id: 'opportunity-section',
    render: ({ offer }) => <ExpertOpportunitySection offer={offer} />,
  },
  {
    id: 'identity-shift',
    render: ({ offer }) => <ExpertIdentityShift offer={offer} />,
  },
  {
    id: 'proof-wall-large',
    render: ({ offer }) => <ExpertProofWallLarge offer={offer} />,
  },
  {
    id: 'repeated-offer-1',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertRepeatedOffer offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} index={0} />
    ),
  },
  {
    id: 'story',
    render: ({ offer }) => <ExpertOfferStory offer={offer} />,
  },
  {
    id: 'proof-grid',
    render: ({ offer }) => <ExpertOfferTestimonials offer={offer} />,
  },
  {
    id: 'repeated-offer-2',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertRepeatedOffer offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} index={1} />
    ),
  },
  {
    id: 'value-stack',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertOfferStack offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} />
    ),
  },
  {
    id: 'bonuses',
    render: ({ offer }) => <ExpertOfferBonuses offer={offer} />,
  },
  {
    id: 'repeated-offer-3',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertRepeatedOffer offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} index={2} />
    ),
  },
  {
    id: 'guarantee',
    render: ({ offer }) => <ExpertOfferGuarantee offer={offer} />,
  },
  {
    id: 'fascination-bullets',
    render: ({ offer }) => <ExpertFascinationBullets offer={offer} />,
  },
  {
    id: 'repeated-offer-4',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertRepeatedOffer offer={offer} trackingEnabled={trackingEnabled} trafficChannel={trafficChannel} index={3} />
    ),
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
    <div
      className="theme-expert theme-expert-event min-h-screen bg-event-page text-event-ink"
      style={resolveDnaThemeStyle() as CSSProperties}
    >
      {expertOfferBlocks.map((block) => (
        <div key={block.id}>{block.render(blockContext)}</div>
      ))}
    </div>
  );
}

export default ExpertOfferPage;
