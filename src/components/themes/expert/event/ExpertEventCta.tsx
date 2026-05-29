import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ExpertEventCtaVariant = 'primary' | 'secondary';

interface ExpertEventCtaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ExpertEventCtaVariant;
}

const variantClasses: Record<ExpertEventCtaVariant, string> = {
  primary:
    'bg-cta text-[rgb(var(--color-cta-text))] shadow-[0_0_0_1px_rgb(var(--color-event-coral)/0.24),0_16px_42px_rgb(var(--color-event-coral)/0.36),0_0_34px_rgb(var(--color-event-coral)/0.18)] hover:bg-cta-hover hover:shadow-[0_0_0_1px_rgb(var(--color-event-coral)/0.28),0_22px_54px_rgb(var(--color-event-coral)/0.44),0_0_46px_rgb(var(--color-event-coral)/0.24)]',
  secondary:
    'border border-event-navy/20 bg-transparent text-event-navy shadow-[0_12px_34px_rgb(var(--color-event-navy)/0.08)] hover:border-event-navy/35 hover:bg-event-surface/70 hover:shadow-[0_18px_44px_rgb(var(--color-event-navy)/0.13)]',
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
        'expert-headline inline-flex min-h-[52px] items-center justify-center rounded-xl px-6 py-3.5',
        'text-center text-[0.82rem] font-black uppercase tracking-wide transition duration-300',
        'hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-event-coral/35',
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
