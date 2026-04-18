import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import funnelConfig from '../../../core/config/funnel.config';
import analytics from '../../../core/services/analytics';
import { getFriendlyCurrencyName } from '../../../core/utils/currency';
import { useVisitor } from '../../../core/visitor/VisitorContext';
import { SmartPhoneInput } from '../../common/forms/SmartPhoneInput';

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

function PandaTextInput({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={[
          'w-full rounded-xl border border-transparent bg-black/40 px-4 py-3 text-white shadow-inner transition-all',
          'placeholder:text-white/20 focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-cyan-500',
          error ? 'focus:ring-red-500' : '',
        ].join(' ')}
        placeholder={placeholder}
      />
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}

export function PandaCaptureForm() {
  const { visitorData, isLoading } = useVisitor();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState('');

  const dynamicSubheadline = useMemo(() => {
    if (!isLoading && visitorData?.city && visitorData?.currency) {
      return `Captura tu acceso desde ${visitorData.city} y continúa pagando en ${getFriendlyCurrencyName(visitorData.currency)}.`;
    }

    return 'Deja tus datos para activar el flujo de seguimiento, el webhook y la monetización geolocalizada.';
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
      nextErrors.email = 'Ingresa un email válido.';
    }

    if (!whatsapp.trim()) {
      nextErrors.whatsapp = 'Por favor, ingresa tu WhatsApp.';
    } else if (!isWhatsappValid) {
      nextErrors.whatsapp = 'Ingresa un número de WhatsApp válido en formato internacional.';
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
        whatsapp,
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
          form_id: 'panda_capture_form',
          content_name: funnelConfig.brandName,
          status: 'submitted',
        });
      } catch (trackingError) {
        console.warn('[PandaCaptureForm] lead tracking failed', trackingError);
      }

      window.location.assign(resolveSuccessRedirectUrl());
    } catch (error) {
      console.error('[PandaCaptureForm] webhook submission failed', error);
      setSubmitError('No pudimos procesar tu solicitud en este momento. Inténtalo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative isolate py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute left-[-10%] top-8 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8%] bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/[0.04] bg-white/[0.02] shadow-2xl shadow-black/50 backdrop-blur-2xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/[0.04] p-6 md:p-8 lg:border-b-0 lg:border-r">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.04] bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-gray-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                Captura Premium
              </span>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Convierte la visita en lead antes de hablar de precio.
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-400">{dynamicSubheadline}</p>

              <div className="mt-8 space-y-4">
                {[
                  'Webhook listo para n8n, Make o Leadflow.',
                  'Validación internacional de teléfono con detección por IP.',
                  'Payload enriquecido con ciudad, país, moneda y zona horaria.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    <p className="text-sm leading-6 text-gray-400">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.04] bg-black/20 p-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  <p className="text-sm font-medium text-white">Infraestructura de monetización conectada</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  El formulario queda preparado para disparar seguimiento, scoring y automatizaciones sin salir de la
                  estética Panda.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <PandaTextInput
                    id="panda-capture-first-name"
                    label="Nombre"
                    value={firstName}
                    onChange={(event) => handleInputChange(setFirstName, 'firstName', event)}
                    error={errors.firstName}
                    placeholder="Tu nombre"
                    autoComplete="given-name"
                  />
                  <PandaTextInput
                    id="panda-capture-last-name"
                    label="Apellido"
                    value={lastName}
                    onChange={(event) => handleInputChange(setLastName, 'lastName', event)}
                    error={errors.lastName}
                    placeholder="Tu apellido"
                    autoComplete="family-name"
                  />
                </div>

                <PandaTextInput
                  id="panda-capture-email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(event) => handleInputChange(setEmail, 'email', event)}
                  error={errors.email}
                  placeholder="tu@email.com"
                  autoComplete="email"
                />

                <SmartPhoneInput
                  id="panda-capture-whatsapp"
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
                  labelClassName="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40"
                  phoneInputClassName={[
                    'w-full rounded-xl border border-transparent bg-black/40 px-0 py-0 text-white shadow-inner transition-all',
                    'focus-within:bg-black/60 focus-within:outline-none focus-within:ring-1 focus-within:ring-cyan-500',
                    '[&_.PhoneInputCountry]:border-r [&_.PhoneInputCountry]:border-transparent [&_.PhoneInputCountry]:bg-black/40',
                    '[&_.SmartPhoneCallingCode]:text-white',
                    '[&_.PhoneInputCountrySelectArrow]:border-white/20',
                    '[&_.PhoneInputInput]:bg-black/40 [&_.PhoneInputInput]:py-3 [&_.PhoneInputInput]:text-white [&_.PhoneInputInput]:placeholder:text-white/20',
                  ].join(' ')}
                  helperTextClassName="mt-2 text-xs text-white/30"
                  errorTextClassName="mt-2 text-xs text-red-400"
                  requiredMarkClassName="ml-1 text-red-400"
                />

                <input type="hidden" name="visitor_ip" value={visitorData?.ip || ''} />
                <input type="hidden" name="visitor_city" value={visitorData?.city || ''} />
                <input type="hidden" name="visitor_country_name" value={visitorData?.country_name || ''} />
                <input type="hidden" name="visitor_timezone" value={visitorData?.timezone || ''} />
                <input type="hidden" name="visitor_currency" value={visitorData?.currency || ''} />

                {submitError ? (
                  <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300">
                    {submitError}
                  </div>
                ) : null}

                <div className="sticky bottom-4 z-10 pt-2 md:static md:pt-0">
                  <div className="rounded-2xl bg-gradient-to-t from-[#04050c] via-[#04050c]/90 to-transparent p-2 md:bg-none md:p-0">
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="cta-shimmer inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0047ff] to-[#00bfff] px-6 text-base font-semibold text-white shadow-[0_24px_80px_rgba(0,191,255,0.22)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? 'Enviando...' : 'Reservar mi acceso'}
                      {!isSubmitting ? <ArrowRight className="h-4 w-4" /> : null}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PandaCaptureForm;
