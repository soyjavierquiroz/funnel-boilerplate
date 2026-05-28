import type { HTMLAttributes, ReactNode } from 'react';

interface ExpertEventCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: 'plain' | 'soft' | 'accent';
}

const toneClasses = {
  plain: 'border-event-navy/12 bg-event-card',
  soft: 'border-event-navy/10 bg-event-soft',
  accent: 'border-event-coral/30 bg-event-coral/10',
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
        'rounded-[22px] border p-5 shadow-[0_16px_42px_rgb(var(--color-event-navy)/0.08)]',
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
