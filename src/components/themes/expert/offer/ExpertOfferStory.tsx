import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferStoryProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferStory({ offer }: ExpertOfferStoryProps) {
  const story = offer.story;

  return (
    <section className="bg-event-page px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1080px] gap-8 lg:grid-cols-[1.04fr_0.86fr] lg:items-center">
        <div>
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {story.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3.1rem]">
            {story.title}
          </h2>

          <div className="mt-6 space-y-5">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="expert-body text-base font-semibold leading-8 text-event-muted sm:text-[1.08rem]">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="expert-headline mt-7 rounded-lg border-l-4 border-event-coral bg-event-surface p-5 text-[1.35rem] leading-tight text-event-navy shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)] sm:text-[1.65rem]">
            {story.highlight}
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-event-navy/10 bg-event-surface p-2 shadow-[0_18px_48px_rgb(var(--color-event-navy)/0.1)]">
          <img src={story.image} alt={story.imageAlt} loading="lazy" className="aspect-[4/5] w-full rounded-md object-cover" />
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferStory;
