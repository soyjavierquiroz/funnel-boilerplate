import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ExpertEventCtaVariant = 'primary' | 'secondary';

interface ExpertEventCtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ExpertEventCtaVariant;
}

const variantClasses: Record<ExpertEventCtaVariant, string> = {
  primary:
    'bg-cta text-[rgb(var(--color-cta-text))] shadow-[0_14px_36px_rgb(var(--color-event-coral)/0.24)] hover:bg-cta-hover',
  secondary:
    'border border-event-navy/20 bg-event-surface text-event-navy hover:border-event-navy/35 hover:bg-event-soft',
};

export function ExpertEventCta({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ExpertEventCtaProps) {
  return (
    <a
      className={[
        'expert-headline inline-flex min-h-12 items-center justify-center rounded-[14px] px-6 py-3',
        'text-center text-sm font-black uppercase tracking-wide transition',
        'hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-event-coral/35',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </a>
  );
}

export default ExpertEventCta;
