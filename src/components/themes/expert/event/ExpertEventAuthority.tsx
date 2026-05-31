import { useEffect, useState } from 'react';
import { Award, Eye, GraduationCap, Users } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventCta } from './ExpertEventCta';
import { expertEventImageFrameClass } from './ExpertEventImageFrame';
import { ExpertEventSection } from './ExpertEventSection';
import { expertEventText } from './ExpertEventTypography';

const authorityBadgeIcons = [Award, Users, Eye];

export function ExpertEventAuthority() {
  const content = funnelConfig.content.event;
  const authorityImages = content.assets.authorityCarousel.length > 0
    ? content.assets.authorityCarousel
    : [content.assets.authority];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (authorityImages.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % authorityImages.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [authorityImages.length]);

  return (
    <ExpertEventSection tone="navy" width="wide" className="text-text-inverse">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className={expertEventImageFrameClass}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            {authorityImages.map((imageSrc, index) => (
              <img
                key={imageSrc}
                src={imageSrc}
                alt={index === activeImageIndex ? 'Darío Avila, guía del evento Maneja Sin Miedo' : ''}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={[
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out',
                  index === activeImageIndex ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <GraduationCap className="h-10 w-10 text-event-sky" aria-hidden="true" />
          <h2 className={[expertEventText.sectionH2, 'text-text-inverse'].join(' ')}>
            {content.authority.title}
          </h2>
          <p className={[expertEventText.editorialH2, 'text-event-sky'].join(' ')}>{content.authority.intro}</p>
          <p className={[expertEventText.bodyLarge, 'max-w-[720px] font-semibold text-text-inverse/80'].join(' ')}>
            {content.authority.bio}
          </p>

          {content.authority.paragraphs.map((paragraph) => (
            <p key={paragraph} className={[expertEventText.body, 'max-w-[720px] text-text-inverse/75'].join(' ')}>
              {paragraph}
            </p>
          ))}

          <div className="grid gap-3 sm:grid-cols-3">
            {content.authority.badges.map((badge, index) => {
              const BadgeIcon = authorityBadgeIcons[index] ?? Award;

              return (
                <span
                  key={badge}
                  className="inline-flex min-h-[74px] items-center gap-3 rounded-2xl border border-text-inverse/15 bg-text-inverse/[0.08] px-4 py-3 shadow-[0_14px_34px_rgb(var(--color-event-ink)/0.18)] backdrop-blur"
                >
                  <BadgeIcon className="h-5 w-5 shrink-0 text-event-sky" aria-hidden="true" />
                  <span className={[expertEventText.small, 'font-bold text-text-inverse'].join(' ')}>
                    {badge}
                  </span>
                </span>
              );
            })}
          </div>

          <ExpertEventCard className="bg-event-surface p-5 sm:p-6">
            <p className={[expertEventText.cardH3, 'text-event-navy'].join(' ')}>
              {content.authority.quote}
            </p>
          </ExpertEventCard>

          <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.authority.ctaLabel}</ExpertEventCta>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventAuthority;
