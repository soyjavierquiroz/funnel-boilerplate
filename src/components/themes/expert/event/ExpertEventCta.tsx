import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ExpertEventCtaVariant = 'primary' | 'secondary';

interface ExpertEventCtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ExpertEventCtaVariant;
}

const variantClasses: Record<ExpertEventCtaVariant, string> = {
  primary:
    'bg-cta text-[rgb(var(--color-cta-text))] shadow-[0_18px_44px_rgb(var(--color-event-coral)/0.28)] hover:bg-cta-hover hover:shadow-[0_22px_52px_rgb(var(--color-event-coral)/0.34)]',
  secondary:
    'border border-event-navy/20 bg-transparent text-event-navy hover:border-event-navy/35 hover:bg-event-surface/70',
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
        'expert-headline inline-flex min-h-14 items-center justify-center rounded-full px-7 py-4',
        'text-center text-sm font-black uppercase tracking-wide transition duration-300',
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
