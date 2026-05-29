import type { HTMLAttributes, ReactNode } from 'react';

interface ExpertEventCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: 'plain' | 'soft' | 'accent';
}

const toneClasses = {
  plain: 'border-transparent bg-event-card',
  soft: 'border-transparent bg-event-soft',
  accent: 'border-event-coral/20 bg-event-coral/10',
};

export function ExpertEventCard({
  children,
  tone = 'plain',
  className = '',
  ...props
}: ExpertEventCardProps) {
  return (
    <div
      className={[
        'rounded-[24px] border p-5 shadow-[0_18px_50px_rgb(var(--color-event-navy)/0.06)]',
        toneClasses[tone],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export default ExpertEventCard;
