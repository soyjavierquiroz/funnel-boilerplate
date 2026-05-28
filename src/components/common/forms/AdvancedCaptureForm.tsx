import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { PricingCard } from './PricingCard';
import { SmartPhoneInput } from './SmartPhoneInput';
import { DNA } from '../../../dna.config';
import funnelConfig, { pricingProductKeys } from '../../../core/config/funnel.config';
import { useVisitor } from '../../../core/visitor/VisitorContext';
import analytics from '../../../core/services/analytics';
import { getFriendlyCurrencyName } from '../../../core/utils/currency';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsapp?: string;
}

interface VideoLeadPayload {
  lead: {
    nombre: string;
    apellido: string;
    email: string;
    whatsapp: string;
  };
  meta: {
    ip?: string;
    ciudad?: string;
    pais?: string;
    zona_horaria?: string;
    moneda?: string;
  };
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function resolveSuccessRedirectUrl() {
  const { successRedirectType, successRedirectUrl, whatsappRedirectBaseUrl } = funnelConfig.forms.capture;

  if (successRedirectType === 'whatsapp' && !/^https?:\/\//i.test(successRedirectUrl)) {
    const normalizedPhone = successRedirectUrl.replace(/\D/g, '');
    return `${whatsappRedirectBaseUrl.replace(/\/$/, '')}/${normalizedPhone}`;
  }

  return successRedirectUrl;
}

export function AdvancedCaptureForm() {
  const { visitorData, isLoading } = useVisitor();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState('');
  const formCopy = DNA.copy.captureForm;

  const dynamicHeadline = useMemo(() => {
    if (!isLoading && visitorData?.city && visitorData?.currency) {
      const friendlyCurrency = getFriendlyCurrencyName(visitorData.currency);
      return formCopy.headlineWithLocation
        .replace('{city}', visitorData.city)
        .replace('{currency}', friendlyCurrency);
    }

    return formCopy.headlineFallback;
  }, [formCopy.headlineFallback, formCopy.headlineWithLocation, isLoading, visitorData?.city, visitorData?.currency]);

  const canSubmit = useMemo(() => {
    return (
      !isSubmitting &&
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      isValidEmail(email.trim()) &&
      whatsapp.trim().length > 0 &&
      isWhatsappValid
    );
  }, [email, firstName, isSubmitting, isWhatsappValid, lastName, whatsapp]);

  const handleInputChange = (
    setter: (value: string) => void,
    field: keyof FormErrors,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setter(event.target.value);
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSubmitError('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!firstName.trim()) {
      nextErrors.firstName = formCopy.requiredError;
    }

    if (!lastName.trim()) {
      nextErrors.lastName = formCopy.requiredError;
    }

    if (!email.trim()) {
      nextErrors.email = formCopy.emailRequiredError;
    } else if (!isValidEmail(email.trim())) {
      nextErrors.email = formCopy.invalidEmailError;
    }

    if (!whatsapp.trim()) {
      nextErrors.whatsapp = formCopy.whatsappRequiredError;
    } else if (!isWhatsappValid) {
      nextErrors.whatsapp = formCopy.invalidWhatsappError;
    }

    setErrors(nextErrors);
    setSubmitError('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const payload: VideoLeadPayload = {
      lead: {
        nombre: firstName.trim(),
        apellido: lastName.trim(),
        email: email.trim(),
        whatsapp: whatsapp,
      },
      meta: {
        ip: visitorData?.ip,
        ciudad: visitorData?.city,
        pais: visitorData?.country_name,
        zona_horaria: visitorData?.timezone,
        moneda: visitorData?.currency,
      },
    };

    try {
      const response = await fetch(funnelConfig.forms.capture.webhookUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`);
      }

      try {
        await analytics.trackEvent('Lead', {
          lead: payload.lead,
          meta: payload.meta,
          form_id: 'advanced_capture_form',
          content_name: funnelConfig.brandName,
          status: 'submitted',
        });
      } catch (trackingError) {
        console.warn('[AdvancedCaptureForm] lead tracking failed', trackingError);
      }
      window.location.assign(resolveSuccessRedirectUrl());
    } catch (error) {
      console.error('[AdvancedCaptureForm] webhook submission failed', error);
      setSubmitError(formCopy.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-6">
      <section className="rounded-2xl border border-border-subtle bg-surface p-5 shadow-xl backdrop-blur md:p-7">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{formCopy.eyebrow}</p>
          <h2 className="text-xl font-bold text-text-main md:text-2xl">{dynamicHeadline}</h2>
          <p className="text-sm text-text-muted">
            {formCopy.description.replace('{productName}', funnelConfig.brandName)}
          </p>
        </div>

        <form className="mt-5 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="video-first-name" className="mb-2 block text-sm font-medium text-text-main">
                {formCopy.firstNameLabel}
              </label>
              <input
                id="video-first-name"
                type="text"
                value={firstName}
                onChange={(event) => handleInputChange(setFirstName, 'firstName', event)}
                className={[
                  'h-11 w-full rounded-md border bg-page px-4 text-base text-text-main',
                  'placeholder:text-text-muted focus:outline-none focus:ring-2',
                  errors.firstName
                    ? 'border-error focus:border-error focus:ring-error/30'
                    : 'border-border-subtle focus:border-primary focus:ring-primary/20',
                ].join(' ')}
                placeholder={formCopy.firstNamePlaceholder}
              />
              {errors.firstName ? <p className="mt-2 text-xs text-error">{errors.firstName}</p> : null}
            </div>

            <div>
              <label htmlFor="video-last-name" className="mb-2 block text-sm font-medium text-text-main">
                {formCopy.lastNameLabel}
              </label>
              <input
                id="video-last-name"
                type="text"
                value={lastName}
                onChange={(event) => handleInputChange(setLastName, 'lastName', event)}
                className={[
                  'h-11 w-full rounded-md border bg-page px-4 text-base text-text-main',
                  'placeholder:text-text-muted focus:outline-none focus:ring-2',
                  errors.lastName
                    ? 'border-error focus:border-error focus:ring-error/30'
                    : 'border-border-subtle focus:border-primary focus:ring-primary/20',
                ].join(' ')}
                placeholder={formCopy.lastNamePlaceholder}
              />
              {errors.lastName ? <p className="mt-2 text-xs text-error">{errors.lastName}</p> : null}
            </div>
          </div>

          <div>
            <label htmlFor="video-email" className="mb-2 block text-sm font-medium text-text-main">
              {formCopy.emailLabel}
            </label>
            <input
              id="video-email"
              type="email"
              value={email}
              onChange={(event) => handleInputChange(setEmail, 'email', event)}
              className={[
                'h-11 w-full rounded-md border bg-page px-4 text-base text-text-main',
                'placeholder:text-text-muted focus:outline-none focus:ring-2',
                errors.email
                  ? 'border-error focus:border-error focus:ring-error/30'
                  : 'border-border-subtle focus:border-primary focus:ring-primary/20',
              ].join(' ')}
              placeholder={formCopy.emailPlaceholder}
            />
            {errors.email ? <p className="mt-2 text-xs text-error">{errors.email}</p> : null}
          </div>

          <SmartPhoneInput
            id="video-whatsapp"
            name="whatsapp"
            label={formCopy.whatsappLabel}
            value={whatsapp}
            onChange={(nextValue) => {
              setWhatsapp(nextValue);
              setErrors((prev) => ({ ...prev, whatsapp: undefined }));
              setSubmitError('');
            }}
            onValidityChange={setIsWhatsappValid}
            error={errors.whatsapp}
            required
            defaultCountry="BO"
            autoDetectCountry
            placeholder={formCopy.whatsappPlaceholder}
          />

          <input type="hidden" name="visitor_ip" value={visitorData?.ip || ''} />
          <input type="hidden" name="visitor_city" value={visitorData?.city || ''} />
          <input type="hidden" name="visitor_country_name" value={visitorData?.country_name || ''} />
          <input type="hidden" name="visitor_timezone" value={visitorData?.timezone || ''} />
          <input type="hidden" name="visitor_currency" value={visitorData?.currency || ''} />

          {submitError ? (
            <div className="rounded-lg border border-error/40 bg-error/10 p-3 text-sm text-error">{submitError}</div>
          ) : null}

          <button
            type="submit"
            disabled={!canSubmit}
            className="h-12 w-full rounded-xl bg-primary px-6 text-base font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? formCopy.submittingLabel : formCopy.submitLabel}
          </button>
        </form>
      </section>

      <PricingCard
        productId={pricingProductKeys.ofertaPrincipal}
        productName={funnelConfig.brandName}
      />
    </section>
  );
}

export default AdvancedCaptureForm;
