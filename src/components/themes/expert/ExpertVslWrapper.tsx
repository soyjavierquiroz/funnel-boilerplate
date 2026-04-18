// @ts-expect-error Golden Master dist bundle ships without host-consumable declarations.
import { KurukinPlayer } from '../../common/video-player/dist/kurukin-video-player.es.js';
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
  loop: _loop,
  hideYouTubeBranding: _hideYouTubeBranding,
  ...playerProps
}: ExpertVslWrapperProps) {
  return (
    <KurukinPlayer
      {...playerProps}
      className={joinClassNames('relative w-full aspect-video bg-black', className, playerClassName)}
    />
  );
}

export default ExpertVslWrapper;
