import type { ImgHTMLAttributes } from 'react';

interface ExpertEventImageFrameProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'className'> {
  aspectClassName?: string;
  frameClassName?: string;
  imageClassName?: string;
}

export const expertEventImageFrameClass =
  'overflow-hidden rounded-2xl border border-event-navy/10 bg-event-surface/85 p-2 shadow-[0_22px_64px_rgb(var(--color-event-navy)/0.12)]';

export function ExpertEventImageFrame({
  aspectClassName = 'aspect-[4/3]',
  frameClassName = '',
  imageClassName = '',
  ...imageProps
}: ExpertEventImageFrameProps) {
  return (
    <div className={[expertEventImageFrameClass, frameClassName].join(' ')}>
      <img
        {...imageProps}
        className={[aspectClassName, 'w-full rounded-xl object-cover', imageClassName].join(' ')}
      />
    </div>
  );
}

export default ExpertEventImageFrame;
