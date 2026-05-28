import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

function joinClassNames(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

export interface CommonTextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

export function CommonTextField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  error,
  placeholder,
  disabled = false,
  autoComplete,
  className,
  inputClassName,
  labelClassName,
  errorClassName,
}: CommonTextFieldProps) {
  const inputId = `${id}-input`;

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className={joinClassNames('mb-1.5 block text-sm font-semibold text-text-main', labelClassName)}
      >
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={joinClassNames(
          'h-12 w-full rounded-md bg-surface border border-border-subtle text-text-main shadow-sm px-4 text-[15px]',
          'focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none',
          disabled && 'cursor-not-allowed opacity-70',
          error && 'border-error focus:ring-error/30 focus:border-error',
          inputClassName,
        )}
      />

      {error ? (
        <p className={joinClassNames('mt-1.5 text-xs text-error', errorClassName)}>{error}</p>
      ) : null}
    </div>
  );
}

export default CommonTextField;
