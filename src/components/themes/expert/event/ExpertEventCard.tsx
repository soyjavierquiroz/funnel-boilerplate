import type { HTMLAttributes, ReactNode } from 'react';
import { expertEventSurface } from './ExpertEventTypography';

interface ExpertEventCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: 'plain' | 'soft' | 'accent';
}

const toneClasses = {
  plain: 'bg-event-card',
  soft: 'bg-event-soft',
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
        expertEventSurface.card,
        'p-5',
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
