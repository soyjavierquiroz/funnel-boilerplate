import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { DNA } from '../../../../dna.config';
import funnelConfig from '../../../../core/config/funnel.config';
import analytics from '../../../../core/services/analytics';
import { useVisitor } from '../../../../core/visitor/VisitorContext';

interface FormErrors {
  firstName?: string;
  email?: string;
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

export function ExpertEventRegistrationForm() {
  const content = funnelConfig.content.event;
  const capture = funnelConfig.forms.capture;
  const formCopy = DNA.copy.captureForm;
  const { visitorData } = useVisitor();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return !isSubmitting && firstName.trim().length > 0 && isValidEmail(email.trim());
  }, [email, firstName, isSubmitting]);

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

    if (!email.trim()) {
      nextErrors.email = formCopy.emailRequiredError;
    } else if (!isValidEmail(email.trim())) {
      nextErrors.email = formCopy.invalidEmailError;
    }

    setErrors(nextErrors);
    setSubmitError('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    const payload = {
      lead: {
        nombre: firstName.trim(),
        email: email.trim(),
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
      const response = await fetch(capture.webhookUrl, {
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
        await analytics.trackEvent(capture.tracking.eventName, {
          lead: payload.lead,
          meta: payload.meta,
          form_id: capture.tracking.formId,
          content_name: funnelConfig.brandName,
          status: capture.tracking.status,
        });
      } catch (trackingError) {
        console.warn('[ExpertEventRegistrationForm] lead tracking failed', trackingError);
      }

      window.location.assign(resolveSuccessRedirectUrl());
    } catch (error) {
      console.error('[ExpertEventRegistrationForm] webhook submission failed', error);
      setSubmitError(formCopy.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-event-navy/10 bg-event-surface p-4 shadow-[0_0_0_1px_rgb(var(--color-event-surface)/0.5),0_22px_62px_rgb(var(--color-event-ink)/0.18),0_0_40px_rgb(var(--color-event-coral)/0.12)] sm:p-6">
      <form className="space-y-3.5" onSubmit={handleSubmit} aria-label={content.hero.formTitle} noValidate>
        <div>
          <label htmlFor="event-first-name" className="sr-only">
            {formCopy.firstNameLabel}
          </label>
          <input
            id="event-first-name"
            type="text"
            value={firstName}
            onChange={(nextEvent) => handleInputChange(setFirstName, 'firstName', nextEvent)}
            className={[
              'expert-input h-[48px] w-full rounded-xl border bg-event-soft px-4 text-base text-event-ink sm:h-[52px]',
              'placeholder:text-event-muted focus:outline-none focus:ring-2',
              errors.firstName
                ? 'border-error focus:border-error focus:ring-error/30'
                : 'border-event-navy/20 focus:border-event-coral focus:ring-event-coral/25',
            ].join(' ')}
            placeholder={formCopy.firstNamePlaceholder}
          />
          {errors.firstName ? <p className="mt-2 text-xs text-error">{errors.firstName}</p> : null}
        </div>

        <div>
          <label htmlFor="event-email" className="sr-only">
            {formCopy.emailLabel}
          </label>
          <input
            id="event-email"
            type="email"
            value={email}
            onChange={(nextEvent) => handleInputChange(setEmail, 'email', nextEvent)}
            className={[
              'expert-input h-[48px] w-full rounded-xl border bg-event-soft px-4 text-base text-event-ink sm:h-[52px]',
              'placeholder:text-event-muted focus:outline-none focus:ring-2',
              errors.email
                ? 'border-error focus:border-error focus:ring-error/30'
                : 'border-event-navy/20 focus:border-event-coral focus:ring-event-coral/25',
            ].join(' ')}
            placeholder={formCopy.emailPlaceholder}
          />
          {errors.email ? <p className="mt-2 text-xs text-error">{errors.email}</p> : null}
        </div>

        <input type="hidden" name="visitor_ip" value={visitorData?.ip || ''} />
        <input type="hidden" name="visitor_city" value={visitorData?.city || ''} />
        <input type="hidden" name="visitor_country_name" value={visitorData?.country_name || ''} />
        <input type="hidden" name="visitor_timezone" value={visitorData?.timezone || ''} />
        <input type="hidden" name="visitor_currency" value={visitorData?.currency || ''} />

        {submitError ? (
          <div className="rounded-xl border border-error/40 bg-error/10 p-3 text-sm text-error">
            {submitError}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit}
          className={[
            'expert-headline cta-pick-me min-h-[50px] w-full rounded-xl bg-cta px-5 py-3.5 text-center text-[0.82rem] sm:min-h-[54px] sm:px-6 sm:py-4 sm:text-sm',
            'font-black uppercase tracking-wide text-[rgb(var(--color-cta-text))]',
            'shadow-[0_0_0_1px_rgb(var(--color-event-coral)/0.28),0_16px_42px_rgb(var(--color-event-coral)/0.42),0_0_34px_rgb(var(--color-event-coral)/0.2)]',
            'transition duration-300 hover:-translate-y-1 hover:bg-cta-hover',
            'hover:shadow-[0_0_0_1px_rgb(var(--color-event-coral)/0.34),0_22px_54px_rgb(var(--color-event-coral)/0.48),0_0_46px_rgb(var(--color-event-coral)/0.28)]',
            'focus:outline-none focus:ring-2 focus:ring-event-coral/35 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none',
          ].join(' ')}
        >
          {isSubmitting ? content.hero.submittingLabel : content.finalCta.ctaLabel}
        </button>
      </form>
    </div>
  );
}

export default ExpertEventRegistrationForm;
