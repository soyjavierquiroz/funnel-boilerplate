import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferAnnouncementBarProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferAnnouncementBar({ offer }: ExpertOfferAnnouncementBarProps) {
  return (
    <div className="border-t-[8px] border-event-sky bg-event-ink px-5 py-3 text-center text-text-inverse sm:px-6">
      <p className="expert-event-kicker text-[0.64rem] font-bold uppercase leading-5 text-text-inverse/90 sm:text-[0.72rem]">
        {offer.announcement.text}
      </p>
    </div>
  );
}

export default ExpertOfferAnnouncementBar;
