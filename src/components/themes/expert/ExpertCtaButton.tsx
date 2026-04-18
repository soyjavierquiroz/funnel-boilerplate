import { ArrowRight, ShoppingCart } from 'lucide-react';
import type { MouseEventHandler, ReactNode } from 'react';

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

interface ExpertCtaButtonProps {
  label: string;
  subLabel?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}

const sharedClassName = [
  'animate-shimmer relative inline-flex min-h-[62px] items-center justify-center overflow-hidden rounded-md',
  'border border-[#c79d00] border-b-4 border-[#b28f00] bg-[#ffcc00] px-6 py-4 text-center text-black',
  'shadow-[0_18px_32px_rgba(255,204,0,0.28)] transition duration-200 hover:-translate-y-0.5',
  'focus:outline-none focus:ring-4 focus:ring-[#ffd84d]/60 disabled:cursor-not-allowed disabled:opacity-60',
].join(' ');

export function ExpertCtaButton({
  label,
  subLabel,
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  disabled = false,
  icon,
  className,
}: ExpertCtaButtonProps) {
  const content = (
    <>
      <span className="relative z-[1] flex items-center gap-2">
        {icon ?? <ShoppingCart className="h-5 w-5 shrink-0" strokeWidth={2.5} />}
        <span className="text-[1.02rem] font-extrabold uppercase leading-5 tracking-[-0.01em] sm:text-[1.18rem]">
          {label}
        </span>
        <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      </span>
      {subLabel ? (
        <span className="relative z-[1] mt-1 block text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-black/75 sm:text-[0.8rem]">
          {subLabel}
        </span>
      ) : null}
    </>
  );

  const resolvedClassName = joinClassNames(sharedClassName, fullWidth && 'w-full', className);

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={resolvedClassName}
        aria-disabled={disabled}
      >
        <span className="flex flex-col items-center">{content}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={resolvedClassName} disabled={disabled}>
      <span className="flex flex-col items-center">{content}</span>
    </button>
  );
}

export default ExpertCtaButton;
