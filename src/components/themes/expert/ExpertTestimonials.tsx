import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';
import { CoreVideoPlayer } from '../../common/video-player/CoreVideoPlayer';
import type { ExpertTestimonialItem } from './expertContent';

interface ExpertTestimonialsProps {
  items: ExpertTestimonialItem[];
}

function extractYouTubeVideoId(videoUrl: string) {
  try {
    const url = new URL(videoUrl);
    const watchId = url.searchParams.get('v');

    if (watchId) {
      return watchId;
    }

    const segments = url.pathname.split('/').filter(Boolean);
    return segments[segments.length - 1] ?? '';
  } catch {
    return '';
  }
}

export function ExpertTestimonials({ items }: ExpertTestimonialsProps) {
  const [activeItem, setActiveItem] = useState<ExpertTestimonialItem | null>(null);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveItem(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activeItem]);

  const activeVideoId = activeItem ? extractYouTubeVideoId(activeItem.videoUrl) : '';

  return (
    <>
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center">
            <p className="expert-body text-sm font-bold uppercase tracking-[0.28em] text-[#4876b9]">Success Stories</p>
            <h2 className="expert-headline mt-3 text-[2rem] font-black leading-none tracking-[-0.05em] text-[#2d2d2d] sm:text-[2.85rem]">
              Hear How Readers Use Expert Secrets In The Real World
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveItem(item)}
                className="group overflow-hidden rounded-[18px] border border-[#d7e2f0] bg-white text-left shadow-[0_20px_45px_rgba(17,17,17,0.08)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-[#111]">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.thumbnailAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/14 text-white/85 backdrop-blur-sm">
                      <Play className="ml-1 h-10 w-10 fill-current" />
                    </span>
                  </div>
                </div>

                <div className="px-5 py-5">
                  <p className="expert-headline text-[1.12rem] font-extrabold text-[#2d2d2d]">{item.name}</p>
                  <p className="expert-body mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#4876b9]">{item.title}</p>
                  <p className="expert-body mt-3 text-[0.98rem] leading-7 text-[#2d2d2d]">{item.quote}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeItem && activeVideoId ? (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonio de ${activeItem.name}`}
        >
          <div
            className="relative w-full max-w-[1120px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-3 top-3 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white shadow-lg ring-1 ring-white/15 transition hover:bg-black/75"
              aria-label="Cerrar testimonio"
            >
              <X className="h-5 w-5" />
            </button>

            <CoreVideoPlayer
              provider="youtube"
              videoId={activeVideoId}
              autoplay={true}
              loop={true}
              muted={true}
              controls={false}
              enableVslOverlay={true}
              hideYouTubeBranding={true}
              hideYoutubeUi={true}
              className="!aspect-[3/4] max-h-[82svh] rounded-[22px] border border-white/10 bg-black shadow-[0_35px_90px_rgba(0,0,0,0.55)] md:!aspect-video [&_iframe]:h-full [&_iframe]:w-full [&_video]:object-cover"
            />

            <div className="mt-4 px-1 text-white">
              <p className="expert-headline text-[1.2rem] font-extrabold">{activeItem.name}</p>
              <p className="expert-body mt-1 text-sm uppercase tracking-[0.14em] text-white/70">{activeItem.title}</p>
              <p className="expert-body mt-3 max-w-[760px] text-[1rem] leading-7 text-white/84">{activeItem.quote}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ExpertTestimonials;
