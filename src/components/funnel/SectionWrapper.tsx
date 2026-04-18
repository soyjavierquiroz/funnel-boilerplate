import type { ElementType, HTMLAttributes, ReactNode } from 'react';

type SectionVariant = 'sales' | 'display';
type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl';

const variantClasses: Record<SectionVariant, string> = {
  sales: 'max-w-4xl',
  display: 'max-w-7xl',
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24 lg:py-28',
  xl: 'py-24 md:py-28 lg:py-32',
};

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  className?: string;
  innerClassName?: string;
}

export function SectionWrapper({
  as,
  children,
  variant = 'sales',
  spacing = 'lg',
  className,
  innerClassName,
  ...restProps
}: SectionWrapperProps) {
  const Component = as ?? 'section';

  return (
    <Component className={cx('px-5 sm:px-6 lg:px-8', spacingClasses[spacing], className)} {...restProps}>
      <div className={cx('mx-auto w-full', variantClasses[variant], innerClassName)}>{children}</div>
    </Component>
  );
}

export default SectionWrapper;
