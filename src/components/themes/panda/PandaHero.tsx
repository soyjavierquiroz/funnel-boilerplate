import { ArrowRight, PlayCircle } from 'lucide-react';
import type { HeroVideoConfig } from '../../../core/config/funnel.config';
import { SectionWrapper } from '../../common/layout/SectionWrapper';
import { CoreVideoPlayer } from '../../common/video-player';

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

export interface PandaHeroProps {
  brandName: string;
  eyebrow: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  video: HeroVideoConfig;
  highlights: string[];
  className?: string;
}

export function PandaHero({
  brandName,
  eyebrow,
  headline,
  description,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  video,
  highlights,
  className,
}: PandaHeroProps) {
  const { enabled: isVideoEnabled, ...videoProps } = video;

  return (
    <SectionWrapper
      as="header"
      variant="display"
      spacing="xl"
      className={cx('relative overflow-hidden', className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.16),transparent_50%)]"
      />

      <div className="relative z-10 space-y-10">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-border-subtle/50 bg-surface/85 px-6 py-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                <span className="text-lg font-semibold text-white">{brandName.slice(0, 1)}</span>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-[-0.03em] text-text-main">{brandName}</p>
                <p className="text-sm text-text-muted">Video infrastructure for a calmer conversion flow.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-border-subtle/45 bg-page/70 px-4 py-2"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1fr)] lg:items-end">
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">{brandName} Showcase</p>
            <div className="space-y-5">
              <h1 className="panda-display text-4xl font-semibold tracking-[-0.05em] text-text-main sm:text-5xl lg:text-[4.25rem] lg:leading-[0.96]">
                {headline}
              </h1>
              <p className="max-w-lg text-base leading-7 text-text-muted sm:text-lg">{description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={ctaHref}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-secondary px-7 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary/92"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryHref}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-border-subtle/50 bg-surface/70 px-7 text-base font-medium text-text-main transition duration-300 hover:border-accent/40 hover:text-accent"
              >
                <PlayCircle className="h-4 w-4 text-accent" />
                {secondaryLabel}
              </a>
            </div>
          </div>

          <div id="demo" className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_58%)]"
            />

            <div className="glass-surface relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-secondary">
                {isVideoEnabled ? (
                  <CoreVideoPlayer
                    {...videoProps}
                    className="aspect-video w-full"
                  />
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-page text-sm text-text-muted">
                    Video no disponible
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PandaHero;
