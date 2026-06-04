import type { CSSProperties, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveDnaThemeStyle } from '../../../../dna.config';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';
import funnelConfig from '../../../../core/config/funnel.config';
import { getTrafficChannel } from '../../../../core/routing/channel';
import type { TrafficChannel } from '../../../../core/routing/channel';
import { ExpertOfferAnnouncementBar } from './ExpertOfferAnnouncementBar';
import { ExpertOfferBeliefShift } from './ExpertOfferBeliefShift';
import { ExpertOfferBonuses } from './ExpertOfferBonuses';
import { ExpertOfferCredibilityStrip } from './ExpertOfferCredibilityStrip';
import { ExpertOfferFaq } from './ExpertOfferFaq';
import { ExpertOfferFinalCta } from './ExpertOfferFinalCta';
import { ExpertOfferGuarantee } from './ExpertOfferGuarantee';
import { ExpertOfferPromiseHero } from './ExpertOfferPromiseHero';
import { ExpertOfferRepeatedCta } from './ExpertOfferRepeatedCta';
import { ExpertOfferScarcity } from './ExpertOfferScarcity';
import { ExpertOfferStack } from './ExpertOfferStack';
import { ExpertOfferStory } from './ExpertOfferStory';
import { ExpertOfferTestimonials } from './ExpertOfferTestimonials';
import { ExpertOfferVslOrder } from './ExpertOfferVslOrder';

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
    id: 'belief-shift',
    render: ({ offer }) => <ExpertOfferBeliefShift offer={offer} />,
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
    id: 'mid-page-order-box',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertOfferRepeatedCta
        offer={offer}
        trackingEnabled={trackingEnabled}
        trafficChannel={trafficChannel}
        index={0}
      />
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
    id: 'late-order-box',
    render: ({ offer, trackingEnabled, trafficChannel }) => (
      <ExpertOfferRepeatedCta
        offer={offer}
        trackingEnabled={trackingEnabled}
        trafficChannel={trafficChannel}
        index={1}
      />
    ),
  },
  {
    id: 'guarantee',
    render: ({ offer }) => <ExpertOfferGuarantee offer={offer} />,
  },
  {
    id: 'scarcity-note',
    render: ({ offer }) => <ExpertOfferScarcity offer={offer} />,
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
