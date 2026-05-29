import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { DNA } from '../../../../dna.config';
import funnelConfig from '../../../../core/config/funnel.config';
import analytics from '../../../../core/services/analytics';
import { useVisitor } from '../../../../core/visitor/VisitorContext';
import { ExpertEventCard } from './ExpertEventCard';
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
    <ExpertEventSection className="min-h-screen pb-10 pt-8 md:pb-14 md:pt-12" width="wide">
      <div className="grid min-h-[calc(100vh-96px)] items-center gap-8 lg:grid-cols-[1fr_430px] lg:gap-12">
        <div className="space-y-7">
          <div className="space-y-5">
            <p className="expert-event-kicker inline-flex rounded-full border border-event-navy/15 bg-event-surface px-4 py-2 text-xs font-bold uppercase text-event-navy">
              {content.hero.eyebrow}
            </p>

            <h1 className="expert-headline max-w-[760px] text-[3.35rem] uppercase leading-[0.88] text-event-ink sm:text-[5.25rem] lg:text-[6.6rem]">
              {content.hero.headline}
            </h1>

            <p className="expert-body max-w-[680px] text-lg font-semibold leading-8 text-event-muted sm:text-xl">
              {content.hero.subheadline}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_230px]">
            <div className="overflow-hidden rounded-[28px] border border-event-navy/12 bg-event-surface shadow-[0_22px_60px_rgb(var(--color-event-navy)/0.12)]">
              <img
                src={content.assets.insecureDriverImage}
                alt={content.hero.imageAlt}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <ExpertEventCountdown />
              <ExpertEventCard tone="accent" className="p-4">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-event-navy" aria-hidden="true" />
                  <p className="expert-body text-sm font-semibold leading-6 text-event-muted">
                    {content.foundation.cardText}
                  </p>
                </div>
              </ExpertEventCard>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ExpertEventCta href={`#${content.registrationAnchorId}`}>{content.hero.primaryCtaLabel}</ExpertEventCta>
            <ExpertEventCta href="#event-promise" variant="secondary">
              {content.hero.secondaryCtaLabel}
            </ExpertEventCta>
          </div>
        </div>

        <ExpertEventCard id={content.registrationAnchorId} tone="plain" className="p-5 sm:p-7">
          <h2 className="expert-headline text-center text-2xl leading-tight text-event-ink">
            {content.hero.formTitle}
          </h2>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
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
                  'expert-input h-12 w-full rounded-[12px] border bg-event-soft px-4 text-base text-event-ink',
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
                  'expert-input h-12 w-full rounded-[12px] border bg-event-soft px-4 text-base text-event-ink',
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
              className="expert-headline min-h-14 w-full rounded-[14px] bg-cta px-6 py-4 text-center text-base font-black uppercase tracking-wide text-[rgb(var(--color-cta-text))] shadow-[0_14px_36px_rgb(var(--color-event-coral)/0.24)] transition hover:-translate-y-0.5 hover:bg-cta-hover focus:outline-none focus:ring-2 focus:ring-event-coral/35 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? content.hero.submittingLabel : content.hero.primaryCtaLabel}
            </button>
          </form>
        </ExpertEventCard>
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventHero;
