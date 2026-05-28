import { useEffect, useId, useMemo, useRef, useState } from 'react';
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  type Country,
  type Value as PhoneValue,
} from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { parsePhoneNumberFromString } from 'libphonenumber-js/min';
import { useVisitor } from '../../../core/visitor/VisitorContext';
import 'react-phone-number-input/style.css';

const SUPPORTED_COUNTRIES = new Set<Country>(getCountries() as Country[]);
const FALLBACK_COUNTRY: Country = 'US';

const PRIORITY_COUNTRIES = [
  'BO',
  'AR',
  'CL',
  'CO',
  'PE',
  'EC',
  'UY',
  'PY',
  'VE',
  'MX',
  'US',
  'ES',
] as const satisfies readonly Country[];

const OTHER_ALLOWED_COUNTRIES = [
  'CA',
  'CR',
  'PA',
  'DO',
  'GT',
  'HN',
  'SV',
  'NI',
  'PR',
  'GB',
  'DE',
  'FR',
  'IT',
  'PT',
  'NL',
  'CH',
  'SE',
  'JP',
  'CN',
  'KR',
  'IN',
  'AU',
  'NZ',
] as const satisfies readonly Country[];

const ALLOWED_COUNTRIES: Country[] = [...PRIORITY_COUNTRIES, ...OTHER_ALLOWED_COUNTRIES].filter((country) =>
  SUPPORTED_COUNTRIES.has(country as Country),
) as Country[];
const ALLOWED_COUNTRY_SET = new Set<Country>(ALLOWED_COUNTRIES);
const PRIORITY_COUNTRY_SET = new Set<Country>(PRIORITY_COUNTRIES);
const OTHER_ALLOWED_COUNTRY_SET = new Set<Country>(OTHER_ALLOWED_COUNTRIES);
const PRIORITY_COUNTRY_ORDER = new Map<Country, number>(
  PRIORITY_COUNTRIES.map((country, index) => [country, index]),
);

interface CountryOption {
  value?: Country | 'divider';
  label: string;
  divider?: boolean;
}

interface CountrySelectProps {
  value?: Country;
  onChange: (value?: Country) => void;
  options: CountryOption[];
  iconComponent: React.ElementType;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

export interface SmartPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  defaultCountry?: Country;
  autoDetectCountry?: boolean;
  locale?: string;
  onCountryChange?: (country: Country) => void;
  onValidityChange?: (isValid: boolean) => void;
  labelClassName?: string;
  phoneInputClassName?: string;
  helperTextClassName?: string;
  errorTextClassName?: string;
  requiredMarkClassName?: string;
}

function normalizeCountry(countryCode?: string): Country {
  if (!countryCode) return FALLBACK_COUNTRY;

  const normalized = countryCode.toUpperCase() as Country;
  return ALLOWED_COUNTRY_SET.has(normalized) ? normalized : FALLBACK_COUNTRY;
}

function normalizeToE164(rawValue: string, country: Country): string {
  const trimmed = rawValue.trim();
  if (!trimmed) return '';

  if (trimmed.startsWith('+')) {
    return trimmed;
  }

  try {
    const parsed = parsePhoneNumberFromString(trimmed, country);
    return parsed?.number ?? trimmed;
  } catch {
    return trimmed;
  }
}

function validateE164(value: string, required: boolean): boolean {
  const trimmed = value.trim();
  if (!trimmed) return !required;

  try {
    return isValidPhoneNumber(trimmed);
  } catch {
    return false;
  }
}

function CountrySelectWithCallingCode({
  value,
  onChange,
  options,
  iconComponent: Icon,
  disabled,
  readOnly,
  className,
}: CountrySelectProps) {
  const reorderedOptions = useMemo(() => {
    const countryOptions = options.filter(
      (option): option is CountryOption & { value: Country } =>
        !option.divider && Boolean(option.value) && option.value !== 'divider',
    );

    const priorityOptions = countryOptions
      .filter((option) => PRIORITY_COUNTRY_SET.has(option.value))
      .sort((a, b) => (PRIORITY_COUNTRY_ORDER.get(a.value) ?? 0) - (PRIORITY_COUNTRY_ORDER.get(b.value) ?? 0));

    const otherOptions = countryOptions
      .filter((option) => OTHER_ALLOWED_COUNTRY_SET.has(option.value))
      .sort((a, b) => a.label.localeCompare(b.label));

    if (priorityOptions.length === 0) return otherOptions;
    if (otherOptions.length === 0) return priorityOptions;

    return [...priorityOptions, { divider: true, label: '---', value: 'divider' as const }, ...otherOptions];
  }, [options]);

  const selectedOption = useMemo(() => {
    return reorderedOptions.find((option) => !option.divider && option.value === value);
  }, [reorderedOptions, value]);

  const callingCode = value ? `+${getCountryCallingCode(value)}` : '';

  return (
    <div className="PhoneInputCountry SmartPhoneCountryArea">
      <select
        value={value ?? 'ZZ'}
        onChange={(event) => {
          const nextValue = event.target.value;
          if (nextValue === 'ZZ') {
            onChange(undefined);
            return;
          }
          if (nextValue === 'divider') return;

          onChange(nextValue as Country);
        }}
        disabled={disabled || readOnly}
        className={[
          'PhoneInputCountrySelect',
          'absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0',
          className ?? '',
        ]
          .join(' ')
          .trim()}
        aria-label="Seleccionar país"
      >
        {reorderedOptions.map((option) => {
          const optionValue = option.divider ? 'divider' : option.value ?? 'ZZ';

          return (
            <option
              key={option.divider ? 'divider' : optionValue}
              value={optionValue}
              disabled={Boolean(option.divider)}
            >
              {option.label}
            </option>
          );
        })}
      </select>

      {value ? <Icon country={value} countryName={selectedOption?.label ?? value} flags={flags} /> : null}

      <span className="SmartPhoneCallingCode" aria-hidden="true">
        {callingCode}
      </span>

      <span className="PhoneInputCountrySelectArrow" aria-hidden="true" />
    </div>
  );
}

export function SmartPhoneInput({
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  name,
  id,
  label,
  placeholder = 'WhatsApp o Teléfono',
  className,
  defaultCountry = FALLBACK_COUNTRY,
  autoDetectCountry = true,
  locale = 'es',
  onCountryChange,
  onValidityChange,
  labelClassName,
  phoneInputClassName,
  helperTextClassName,
  errorTextClassName,
  requiredMarkClassName,
}: SmartPhoneInputProps) {
  const { visitorData, isLoading } = useVisitor();

  const generatedId = useId();
  const inputId = id ?? `smart-phone-input-${generatedId}`;
  const errorId = `${inputId}-error`;

  const normalizedDefaultCountry = normalizeCountry(defaultCountry);

  const [selectedCountry, setSelectedCountry] = useState<Country>(normalizedDefaultCountry);

  const hasManualCountryChangeRef = useRef(false);

  const isPhoneValid = useMemo(() => validateE164(value, required), [value, required]);
  const showAutoInvalidState = !error && value.trim().length > 0 && !isPhoneValid;

  useEffect(() => {
    if (!onValidityChange) return;
    onValidityChange(isPhoneValid);
  }, [isPhoneValid, onValidityChange]);

  useEffect(() => {
    if (!autoDetectCountry) return;
    if (!visitorData?.country_code) return;
    if (hasManualCountryChangeRef.current) return;

    const detectedCountry = normalizeCountry(visitorData.country_code);
    if (detectedCountry === selectedCountry) return;

    setSelectedCountry(detectedCountry);
    onCountryChange?.(detectedCountry);
  }, [autoDetectCountry, onCountryChange, selectedCountry, visitorData?.country_code]);

  const basePhoneInputClasses = [
    'w-full max-w-full min-w-0 box-border overflow-hidden rounded-xl border transition-all duration-200',
    '[&_.PhoneInputCountry]:m-0 [&_.PhoneInputCountry]:flex [&_.PhoneInputCountry]:h-12 [&_.PhoneInputCountry]:min-w-[104px] [&_.PhoneInputCountry]:items-center [&_.PhoneInputCountry]:gap-2 [&_.PhoneInputCountry]:px-3 sm:[&_.PhoneInputCountry]:min-w-[116px]',
    '[&_.PhoneInputCountryIcon]:h-4 [&_.PhoneInputCountryIcon]:w-6 [&_.PhoneInputCountryIcon]:rounded-sm [&_.PhoneInputCountryIcon]:shadow-sm',
    '[&_.SmartPhoneCallingCode]:text-[18px] [&_.SmartPhoneCallingCode]:text-sm [&_.SmartPhoneCallingCode]:font-medium',
    '[&_.PhoneInputCountrySelectArrow]:ml-auto [&_.PhoneInputCountrySelectArrow]:mt-0 [&_.PhoneInputCountrySelectArrow]:h-2.5 [&_.PhoneInputCountrySelectArrow]:w-2.5 [&_.PhoneInputCountrySelectArrow]:opacity-100',
    '[&_.PhoneInputInput]:h-12 [&_.PhoneInputInput]:min-w-0 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:flex-1 [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:px-4 [&_.PhoneInputInput]:text-base [&_.PhoneInputInput]:focus:outline-none',
  ];

  const defaultPhoneInputVisualClasses = [
    showAutoInvalidState || error
      ? 'border-error focus-within:border-error focus-within:ring-2 focus-within:ring-error/20'
      : 'border-border-subtle bg-surface focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20',
    disabled ? 'opacity-70' : '',
    '[&_.PhoneInputCountry]:border-r [&_.PhoneInputCountry]:border-border-subtle [&_.PhoneInputCountry]:bg-surface',
    '[&_.SmartPhoneCallingCode]:text-text-main',
    '[&_.PhoneInputCountrySelectArrow]:border-text-muted',
    '[&_.PhoneInputInput]:bg-page [&_.PhoneInputInput]:text-text-main [&_.PhoneInputInput]:placeholder:text-text-muted',
  ];

  const customPhoneInputVisualClasses = [
    phoneInputClassName ?? '',
    disabled ? 'opacity-70' : '',
    showAutoInvalidState || error ? 'border-error/60 focus-within:ring-1 focus-within:ring-error' : '',
  ];

  const phoneInputClasses = [...basePhoneInputClasses, ...(phoneInputClassName ? customPhoneInputVisualClasses : defaultPhoneInputVisualClasses)]
    .filter(Boolean)
    .join(' ');

  const resolvedLabelClassName = labelClassName ?? 'mb-2 block text-sm font-medium text-text-main';
  const resolvedHelperTextClassName = helperTextClassName ?? 'mt-2 text-xs text-text-muted';
  const resolvedErrorTextClassName = errorTextClassName ?? 'mt-2 text-xs text-error';
  const resolvedRequiredMarkClassName = requiredMarkClassName ?? 'ml-1 text-error';

  return (
    <div className={['w-full max-w-full min-w-0 box-border', className ?? ''].join(' ').trim()}>
      {label ? (
        <label
          htmlFor={inputId}
          className={resolvedLabelClassName}
        >
          {label}
          {required ? <span className={resolvedRequiredMarkClassName}>*</span> : null}
        </label>
      ) : null}

      <PhoneInput
        id={inputId}
        flags={flags}
        value={(value as PhoneValue) || undefined}
        onChange={(nextValue) => {
          const next = normalizeToE164((nextValue ?? '') as string, selectedCountry);
          onChange(next);
        }}
        country={selectedCountry}
        onCountryChange={(nextCountry) => {
          const resolved = normalizeCountry(nextCountry);
          hasManualCountryChangeRef.current = true;
          setSelectedCountry(resolved);
          onCountryChange?.(resolved);

          if (value.trim() && !value.startsWith('+')) {
            onChange(normalizeToE164(value, resolved));
          }
        }}
        international={false}
        defaultCountry={normalizedDefaultCountry}
        countries={ALLOWED_COUNTRIES}
        addInternationalOption={false}
        countrySelectComponent={CountrySelectWithCallingCode}
        smartCaret={false}
        numberInputProps={{
          autoComplete: 'tel-national',
          inputMode: 'tel',
          disabled,
          placeholder,
          required,
          'aria-invalid': Boolean(error || showAutoInvalidState),
          'aria-describedby': error || showAutoInvalidState ? errorId : undefined,
        }}
        disabled={disabled}
        locale={locale}
        className={phoneInputClasses}
      />

      {autoDetectCountry && isLoading ? (
        <p className={resolvedHelperTextClassName}>Detectando país por IP...</p>
      ) : null}

      {error ? (
        <p id={errorId} className={resolvedErrorTextClassName}>
          {error}
        </p>
      ) : null}

      {!error && showAutoInvalidState ? (
        <p id={errorId} className={resolvedErrorTextClassName}>
          Número inválido.
        </p>
      ) : null}

      {name ? <input type="hidden" name={name} value={value} /> : null}
    </div>
  );
}

export default SmartPhoneInput;
