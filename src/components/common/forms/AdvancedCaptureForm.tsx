import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { PricingCard } from './PricingCard';
import { SmartPhoneInput } from './SmartPhoneInput';
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
  const { successRedirectType, successRedirectUrl } = funnelConfig.forms.capture;

  if (successRedirectType === 'whatsapp' && !/^https?:\/\//i.test(successRedirectUrl)) {
    const normalizedPhone = successRedirectUrl.replace(/\D/g, '');
    return `https://wa.me/${normalizedPhone}`;
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

  const dynamicHeadline = useMemo(() => {
    if (!isLoading && visitorData?.city && visitorData?.currency) {
      const friendlyCurrency = getFriendlyCurrencyName(visitorData.currency);
      return `También puedes participar desde ${visitorData.city} y pagar en ${friendlyCurrency}`;
    }

    return 'También puedes participar desde tu ciudad';
  }, [isLoading, visitorData?.city, visitorData?.currency]);

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
      nextErrors.firstName = 'Completa este campo.';
    }

    if (!lastName.trim()) {
      nextErrors.lastName = 'Completa este campo.';
    }

    if (!email.trim()) {
      nextErrors.email = 'Por favor, ingresa tu email.';
    } else if (!isValidEmail(email.trim())) {
      nextErrors.email = 'Ingresa un email valido.';
    }

    if (!whatsapp.trim()) {
      nextErrors.whatsapp = 'Por favor, ingresa tu WhatsApp.';
    } else if (!isWhatsappValid) {
      nextErrors.whatsapp = 'Ingresa un numero de WhatsApp valido en formato internacional.';
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
      setSubmitError('No pudimos procesar tu solicitud en este momento. Inténtalo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-6">
      <section className="rounded-2xl border border-border-subtle bg-surface p-5 shadow-xl backdrop-blur md:p-7">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Formulario enriquecido</p>
          <h2 className="text-xl font-bold text-text-main md:text-2xl">{dynamicHeadline}</h2>
          <p className="text-sm text-text-muted">
            Completa tus datos para continuar con {funnelConfig.brandName} y conservar el contexto de tu país.
          </p>
        </div>

        <form className="mt-5 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="video-first-name" className="mb-2 block text-sm font-medium text-text-main">
                Nombre
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
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-border-subtle focus:border-primary focus:ring-primary/20',
                ].join(' ')}
                placeholder="Tu nombre"
              />
              {errors.firstName ? <p className="mt-2 text-xs text-red-400">{errors.firstName}</p> : null}
            </div>

            <div>
              <label htmlFor="video-last-name" className="mb-2 block text-sm font-medium text-text-main">
                Apellido
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
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30'
                    : 'border-border-subtle focus:border-primary focus:ring-primary/20',
                ].join(' ')}
                placeholder="Tu apellido"
              />
              {errors.lastName ? <p className="mt-2 text-xs text-red-400">{errors.lastName}</p> : null}
            </div>
          </div>

          <div>
            <label htmlFor="video-email" className="mb-2 block text-sm font-medium text-text-main">
              Email
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
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30'
                  : 'border-border-subtle focus:border-primary focus:ring-primary/20',
              ].join(' ')}
              placeholder="tu@email.com"
            />
            {errors.email ? <p className="mt-2 text-xs text-red-400">{errors.email}</p> : null}
          </div>

          <SmartPhoneInput
            id="video-whatsapp"
            name="whatsapp"
            label="WhatsApp"
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
            placeholder="79790873"
          />

          <input type="hidden" name="visitor_ip" value={visitorData?.ip || ''} />
          <input type="hidden" name="visitor_city" value={visitorData?.city || ''} />
          <input type="hidden" name="visitor_country_name" value={visitorData?.country_name || ''} />
          <input type="hidden" name="visitor_timezone" value={visitorData?.timezone || ''} />
          <input type="hidden" name="visitor_currency" value={visitorData?.currency || ''} />

          {submitError ? (
            <div className="rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-300">{submitError}</div>
          ) : null}

          <button
            type="submit"
            disabled={!canSubmit}
            className="h-12 w-full rounded-xl bg-primary px-6 text-base font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando...' : 'Validar y Enviar'}
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
