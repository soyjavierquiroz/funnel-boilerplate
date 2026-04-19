import { useCallback, useEffect, useRef, useState } from 'react';
import { FakeProgressBar } from '../../common/video-player/src/kurukin-video-player/components/FakeProgressBar';
import type { IVideoProvider } from '../../common/video-player/src/kurukin-video-player/providers/IVideoProvider';
import { useVideoProviderController } from '../../common/video-player/src/kurukin-video-player/providers/useVideoProviderController';
import type { KurukinPlayerProps } from '../../common/video-player/src/kurukin-video-player/types';

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

interface ExpertVslWrapperProps extends KurukinPlayerProps {
  className?: string;
  playerClassName?: string;
  loop?: boolean;
  hideYouTubeBranding?: boolean;
}

export function ExpertVslWrapper({
  className,
  playerClassName,
  loop = false,
  onTimeUpdate,
  hideYouTubeBranding: _hideYouTubeBranding,
  provider,
  videoId,
  vslProgressBarColor,
}: ExpertVslWrapperProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<IVideoProvider | null>(null);

  const controller = useVideoProviderController({
    provider,
    enabled: true,
    videoId,
    autoPlay: true,
    muted: isMuted,
    loop: loop && isMuted,
    hideNativeUi: isMuted,
    controlsVariant: isMuted ? 'vsl' : 'standard',
    onReady: (activeProvider) => {
      playerRef.current = activeProvider;
      setIsReady(true);

      const nextDuration = activeProvider.getDuration();

      if (nextDuration > 0) {
        setDuration(nextDuration);
      }
    },
    onPlay: () => {
      setIsReady(true);
    },
    onPause: () => undefined,
    onProgress: (seconds) => {
      setCurrentTime(seconds);
      onTimeUpdate?.(seconds);
    },
    onEnded: () => {
      setCurrentTime(0);
    },
    onMuteChange: () => undefined,
    onAutoplayBlocked: () => undefined,
  });

  useEffect(() => {
    playerRef.current = controller.providerRef.current;
  }, [controller.providerRef]);

  useEffect(() => {
    setIsMuted(true);
    setIsReady(false);
    setCurrentTime(0);
    setDuration(0);
    playerRef.current = null;
  }, [provider, videoId]);

  useEffect(() => {
    const activeProvider = playerRef.current ?? controller.providerRef.current;
    const nextDuration = activeProvider?.getDuration() ?? 0;

    if (nextDuration > 0 && nextDuration !== duration) {
      setDuration(nextDuration);
    }
  }, [controller.providerRef, currentTime, duration]);

  useEffect(() => {
    if (controller.surface !== 'video' || !controller.mountRef.current) {
      return;
    }

    controller.mountRef.current.autoplay = true;
    controller.mountRef.current.controls = !isMuted;
    controller.mountRef.current.muted = isMuted;
  }, [controller.mountRef, controller.surface, isMuted]);

  const handleUnmute = useCallback(() => {
    if (!isMuted) {
      return;
    }

    setIsMuted(false);
    setCurrentTime(0);

    const activeProvider = playerRef.current ?? controller.providerRef.current;

    if (!activeProvider) {
      return;
    }

    try {
      activeProvider.seek(0);
      setCurrentTime(0);
      activeProvider.mute(false);

      if (controller.surface === 'video' && controller.mountRef.current?.paused) {
        void activeProvider.play().catch((error) => {
          console.warn('VSL sequence suppressed', error);
        });
      }
    } catch (error) {
      console.warn('VSL sequence suppressed', error);
    }
  }, [controller.mountRef, controller.providerRef, controller.surface, isMuted]);

  const shouldShowSmartBar = isMuted && (isReady || currentTime > 0);

  return (
    <div className={joinClassNames('relative w-full aspect-video bg-black overflow-hidden', className)}>
      {controller.surface === 'video' ? (
        <video
          ref={controller.mountRef}
          className={joinClassNames('absolute inset-0 h-full w-full bg-black object-cover', playerClassName)}
          autoPlay={true}
          muted={isMuted}
          controls={!isMuted}
          playsInline
        />
      ) : (
        <div
          ref={controller.mountRef}
          className={joinClassNames('absolute inset-0 h-full w-full bg-black', playerClassName)}
        />
      )}

      {shouldShowSmartBar ? (
        <FakeProgressBar color={vslProgressBarColor} currentTime={currentTime} duration={duration} />
      ) : null}

      {isMuted ? (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <button
            type="button"
            onClick={handleUnmute}
            className="px-6 py-3 bg-black/60 backdrop-blur-md text-white font-medium rounded-full animate-pulse border border-white/20 shadow-xl"
          >
            🔊 Haz clic para escuchar
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ExpertVslWrapper;
