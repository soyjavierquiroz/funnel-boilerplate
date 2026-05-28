import type { ElementType, HTMLAttributes, ReactNode } from 'react';

interface ExpertEventSectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  width?: 'content' | 'wide';
  tone?: 'page' | 'surface' | 'soft';
}

const widthClasses = {
  content: 'max-w-[980px]',
  wide: 'max-w-[1180px]',
};

const toneClasses = {
  page: 'bg-event-page',
  surface: 'bg-event-surface',
  soft: 'bg-event-soft',
};

export function ExpertEventSection({
  as,
  children,
  width = 'wide',
  tone = 'page',
  className = '',
  ...props
}: ExpertEventSectionProps) {
  const Component = as ?? 'section';

  return (
    <Component className={['px-5 py-14 sm:px-6 md:py-20', toneClasses[tone], className].join(' ')} {...props}>
      <div className={['mx-auto w-full', widthClasses[width]].join(' ')}>{children}</div>
    </Component>
  );
}

export default ExpertEventSection;
