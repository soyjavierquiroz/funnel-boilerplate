import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { DNA } from '../../../../dna.config';
import funnelConfig from '../../../../core/config/funnel.config';
import analytics from '../../../../core/services/analytics';
import { useVisitor } from '../../../../core/visitor/VisitorContext';
import { ExpertEventCountdown } from './ExpertEventCountdown';
import { ExpertEventCta } from './ExpertEventCta';
import { ExpertEventSection } from './ExpertEventSection';

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

export function ExpertEventHero() {
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
        console.warn('[ExpertEventHero] lead tracking failed', trackingError);
      }

      window.location.assign(resolveSuccessRedirectUrl());
    } catch (error) {
      console.error('[ExpertEventHero] webhook submission failed', error);
      setSubmitError(formCopy.submitError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ExpertEventSection className="overflow-hidden pb-12 pt-5 md:pb-16 md:pt-10" width="wide">
      <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-10">
        <div className="relative isolate overflow-hidden rounded-[30px] bg-event-navy text-text-inverse shadow-[0_34px_90px_rgb(var(--color-event-navy)/0.24)] sm:rounded-[34px]">
          <img
            src={content.assets.hero}
            alt={content.hero.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.74]"
          />
          <div className="absolute inset-0 bg-event-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-event-navy via-event-navy/70 to-event-navy/10" />

          <div className="relative flex min-h-[550px] flex-col justify-end p-5 sm:min-h-[610px] sm:p-8 lg:min-h-[660px] lg:p-10">
            <p className="expert-event-kicker inline-flex rounded-full bg-event-surface/95 px-4 py-2 text-[0.66rem] font-bold uppercase text-event-navy shadow-[0_12px_34px_rgb(var(--color-event-navy)/0.14)]">
              {content.hero.eyebrow}
            </p>

            <p className="expert-headline mt-5 text-2xl leading-none text-event-sky sm:text-4xl">
              {content.hero.eventName}
            </p>

            <h1 className="expert-headline mt-3 max-w-[800px] text-[2.45rem] uppercase leading-[0.94] text-text-inverse sm:text-[5.2rem] sm:leading-[0.86] lg:text-[6.35rem]">
              {content.hero.headline}
            </h1>

            <p className="expert-body mt-4 max-w-[640px] text-base font-semibold leading-7 text-text-inverse/90 sm:mt-5 sm:text-xl sm:leading-8">
              {content.hero.subheadline}
            </p>

            <div className="mt-5 max-w-[500px] sm:mt-6">
              <ExpertEventCountdown variant="dark" />
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
              <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.hero.primaryCtaLabel}</ExpertEventCta>
              <ExpertEventCta
                href="#event-promise"
                variant="secondary"
                className="border-text-inverse/30 text-text-inverse hover:bg-text-inverse/10"
              >
                {content.hero.secondaryCtaLabel}
              </ExpertEventCta>
            </div>
          </div>
        </div>

        <div
          id={content.registrationAnchorId}
          className="rounded-[28px] border border-event-navy/10 bg-event-surface p-5 shadow-[0_30px_90px_rgb(var(--color-event-navy)/0.12)] sm:rounded-[32px] sm:p-7"
        >
          <div className="mb-5 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-event-coral/15">
              <ShieldCheck className="h-5 w-5 text-event-navy" aria-hidden="true" />
            </div>
            <div>
              <h2 className="expert-headline text-2xl leading-tight text-event-navy">
                {content.hero.formTitle}
              </h2>
              <p className="expert-body mt-2 text-sm font-semibold leading-6 text-event-muted">
                {content.foundation.cardText}
              </p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="event-first-name" className="expert-body mb-2 block text-sm font-bold text-event-ink">
                {formCopy.firstNameLabel}
              </label>
              <input
                id="event-first-name"
                type="text"
                value={firstName}
                onChange={(nextEvent) => handleInputChange(setFirstName, 'firstName', nextEvent)}
                className={[
                  'expert-input h-[52px] w-full rounded-[16px] border bg-event-soft px-4 text-base text-event-ink',
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
              <label htmlFor="event-email" className="expert-body mb-2 block text-sm font-bold text-event-ink">
                {formCopy.emailLabel}
              </label>
              <input
                id="event-email"
                type="email"
                value={email}
                onChange={(nextEvent) => handleInputChange(setEmail, 'email', nextEvent)}
                className={[
                  'expert-input h-[52px] w-full rounded-[16px] border bg-event-soft px-4 text-base text-event-ink',
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
              <div className="rounded-[12px] border border-error/40 bg-error/10 p-3 text-sm text-error">
                {submitError}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={!canSubmit}
              className="expert-headline min-h-14 w-full rounded-full bg-cta px-6 py-4 text-center text-base font-black uppercase tracking-wide text-[rgb(var(--color-cta-text))] shadow-[0_18px_44px_rgb(var(--color-event-coral)/0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-cta-hover hover:shadow-[0_22px_52px_rgb(var(--color-event-coral)/0.34)] focus:outline-none focus:ring-2 focus:ring-event-coral/35 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? content.hero.submittingLabel : content.hero.primaryCtaLabel}
            </button>
          </form>
        </div>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventHero;
