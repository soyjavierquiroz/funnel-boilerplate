import { useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { CoreVideoPlayer } from '../../common/video-player/CoreVideoPlayer';
import type { CoreVideoPlayerHandle, CoreVideoPlayerProps } from '../../common/video-player/types';

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

interface ExpertVslWrapperProps extends Omit<CoreVideoPlayerProps, 'autoplay' | 'muted' | 'controls'> {
  className?: string;
  playerClassName?: string;
}

export function ExpertVslWrapper({
  className,
  playerClassName,
  ...playerProps
}: ExpertVslWrapperProps) {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<CoreVideoPlayerHandle | null>(null);

  const handleUnmute = () => {
    playerRef.current?.seek(0);
    playerRef.current?.setLoop(false);
    playerRef.current?.mute(false);
    void playerRef.current?.play().catch(() => undefined);
    setIsMuted(false);
  };

  return (
    <div className={joinClassNames('relative w-full aspect-video bg-black', className)}>
      <CoreVideoPlayer
        ref={playerRef}
        autoplay={true}
        vslMode={true}
        muted={isMuted}
        controls={!isMuted}
        className={joinClassNames('!aspect-auto !h-full !w-full !rounded-none bg-transparent', playerClassName)}
        {...playerProps}
      />

      {isMuted ? (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer"
          onClick={handleUnmute}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleUnmute();
            }
          }}
          aria-label="Activar sonido"
        >
          <span className="pointer-events-none inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-6 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md transition-all motion-safe:animate-pulse md:text-base">
            <Volume2 className="h-4 w-4 md:h-5 md:w-5" />
            Haz clic para escuchar
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default ExpertVslWrapper;
