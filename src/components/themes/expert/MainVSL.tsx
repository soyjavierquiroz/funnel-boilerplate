import { Lock } from 'lucide-react';
import type { HeroVideoConfig, MainVslContentConfig } from '../../../core/config/funnel.config';
import { CoreVideoPlayer } from '../../common/video-player';
import { SectionWrapper } from '../../common/layout/SectionWrapper';

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

export interface MainVSLProps {
  content: MainVslContentConfig;
  video: HeroVideoConfig;
  className?: string;
}

export function MainVSL({ content, video, className }: MainVSLProps) {
  const { enabled: isVideoEnabled, ...videoProps } = video;

  return (
    <SectionWrapper variant="display" spacing="xl" className={className}>
      <div className="relative overflow-hidden rounded-[2rem] border border-border-subtle/10 bg-surface/40 px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-40 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">{content.eyebrow}</p>
              <h1
                className={cx(
                  'text-4xl font-semibold tracking-[-0.04em] text-text-main sm:text-5xl lg:text-6xl lg:leading-[0.94]',
                  content.useTextGradient && 'text-gradient',
                )}
              >
                {content.headline}
              </h1>
              <p className="max-w-xl text-base leading-7 text-text-muted sm:text-lg">{content.subheadline}</p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <a
                href={content.ctaHref}
                className="cta-shimmer inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-7 text-center text-base font-semibold text-secondary transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,17,255,0.28)] sm:text-lg"
              >
                {content.ctaLabel}
              </a>
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-text-muted sm:text-sm">
                <Lock className="h-4 w-4 text-primary" />
                {content.certaintyText}
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-40 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-3xl sm:h-52 lg:h-64"
            />

            <div className="glass-surface rounded-[1.75rem] p-3 sm:p-4">
              <div className="overflow-hidden rounded-[1.35rem] border border-accent/15 bg-page/80">
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

export default MainVSL;
