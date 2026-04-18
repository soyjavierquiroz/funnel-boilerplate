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
        className={joinClassNames('mb-1.5 block text-sm font-semibold text-[#2d2d2d]', labelClassName)}
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
          'h-12 w-full rounded-md bg-white border border-gray-300 text-gray-900 shadow-sm px-4 text-[15px]',
          'focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none',
          disabled && 'cursor-not-allowed opacity-70',
          error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
          inputClassName,
        )}
      />

      {error ? (
        <p className={joinClassNames('mt-1.5 text-xs text-[#e01921]', errorClassName)}>{error}</p>
      ) : null}
    </div>
  );
}

export default CommonTextField;
