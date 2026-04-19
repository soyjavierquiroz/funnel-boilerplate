import { startTransition, useState } from 'react';
import { ChevronLeft, Lock, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import type { Country } from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
import { DNA } from '../../../dna.config';
import funnelConfig from '../../../core/config/funnel.config';
import analytics from '../../../core/services/analytics';
import { useVisitor } from '../../../core/visitor/VisitorContext';
import {
  magiaEventOptions,
  magiaPayment,
  resolveEventOption,
  saveRegistrationSnapshot,
  type EventMode,
} from '../../../content/magia';
import { CommonTextField } from '../../common/forms/CommonTextField';
import { SmartPhoneInput } from '../../common/forms/SmartPhoneInput';
import { ExpertCtaButton } from './ExpertCtaButton';

interface FormErrors {
  eventMode?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsapp?: string;
}

interface OrderLeadPayload {
  lead: {
    first_name: string;
    last_name: string;
    email: string;
    whatsapp: string;
  };
  event: {
    mode: EventMode;
    label: string;
    amount_bs: number;
    schedule: string;
    location: string;
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

function isMockWebhook(url: string) {
  return !url || url.includes('test-webhook-url');
}

function resolveDefaultPhoneCountry(countryCode?: string): Country {
  if (!countryCode) {
    return 'BO';
  }

  return countryCode.toUpperCase() as Country;
}

const fieldClassName =
  'bg-white border border-[rgb(var(--color-brand-accent)/0.18)] text-gray-900 rounded-xl focus:ring-2 focus:ring-brand-accent shadow-sm';

export function ExpertOrderForm() {
  const navigate = useNavigate();
  const { visitorData } = useVisitor();

  const [step, setStep] = useState<1 | 2>(1);
  const [eventMode, setEventMode] = useState<EventMode | ''>('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState('');

  const selectedEvent = eventMode ? resolveEventOption(eventMode) : null;

  const validateStepOne = () => {
    const nextErrors: FormErrors = {};

    if (!eventMode) nextErrors.eventMode = 'Selecciona una modalidad para continuar.';
    if (!firstName.trim()) nextErrors.firstName = 'Completa tu nombre.';
    if (!lastName.trim()) nextErrors.lastName = 'Completa tu apellido.';
    if (!email.trim()) {
      nextErrors.email = 'Ingresa tu correo.';
    } else if (!isValidEmail(email.trim())) {
      nextErrors.email = 'Ingresa un correo valido.';
    }
    if (!whatsapp.trim()) {
      nextErrors.whatsapp = 'Ingresa tu WhatsApp.';
    } else if (!isWhatsappValid) {
      nextErrors.whatsapp = 'Usa un formato internacional valido.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleContinue = async () => {
    setSubmitError('');

    if (!validateStepOne() || !selectedEvent) {
      return;
    }

    try {
      await analytics.trackEvent('AddToCart', {
        product_name: DNA.copy.productName,
        event_mode: selectedEvent.id,
        event_label: selectedEvent.label,
        amount_bs: selectedEvent.amountBs,
        country_code: visitorData?.country_code?.toUpperCase() ?? 'BO',
      });
    } catch (trackingError) {
      console.warn('[ExpertOrderForm] could not track AddToCart', trackingError);
    }

    startTransition(() => {
      setStep(2);
    });
  };

  const handleSubmit = async () => {
    setSubmitError('');

    if (!validateStepOne() || !selectedEvent) {
      setStep(1);
      return;
    }

    setIsSubmitting(true);

    const payload: OrderLeadPayload = {
      lead: {
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim(),
      },
      event: {
        mode: selectedEvent.id,
        label: selectedEvent.label,
        amount_bs: selectedEvent.amountBs,
        schedule: selectedEvent.schedule,
        location: selectedEvent.location,
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
      if (!isMockWebhook(funnelConfig.forms.capture.webhookUrl)) {
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
      } else {
        await new Promise((resolve) => setTimeout(resolve, 400));
      }

      saveRegistrationSnapshot({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim(),
        eventMode: selectedEvent.id,
        createdAt: new Date().toISOString(),
      });

      await analytics.trackEvent('Lead', {
        form_id: 'magia_expert_order_form',
        content_name: DNA.copy.productName,
        lead: payload.lead,
        event: payload.event,
        status: 'submitted',
      });

      const searchParams = new URLSearchParams({
        sesion: selectedEvent.id,
        pname: firstName.trim(),
      });

      startTransition(() => {
        navigate(`/confirmacion?${searchParams.toString()}`);
      });
    } catch (error) {
      console.error('[ExpertOrderForm] registration handoff failed', error);
      setSubmitError('No pudimos completar tu registro en este momento. Intenta nuevamente en unos segundos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside
      id="checkout"
      className="overflow-hidden rounded-[32px] border border-white/15 bg-white/95 text-[#2f2535] shadow-[0_30px_80px_rgba(14,10,18,0.36)] backdrop-blur"
    >
      <div className="grid grid-cols-2 border-b border-[rgb(var(--color-brand-accent)/0.12)]">
        <div className={`px-4 py-4 text-center transition-colors ${step === 1 ? 'bg-[#3b2d42] text-white' : 'bg-[#f6eef5] text-[#6b5a72]'}`}>
          <p className={`expert-body text-[11px] font-bold uppercase tracking-[0.2em] ${step === 1 ? 'text-white/78' : 'text-[#8d7b94]'}`}>
            {step === 1 ? 'Activo' : 'Completo'}
          </p>
          <p className="expert-headline mt-1 text-sm font-extrabold sm:text-[15px]">Paso 1: Registro</p>
        </div>
        <div className={`border-l border-[rgb(var(--color-brand-accent)/0.12)] px-4 py-4 text-center transition-colors ${step === 2 ? 'bg-[#3b2d42] text-white' : 'bg-[#f6eef5] text-[#6b5a72]'}`}>
          <p className={`expert-body text-[11px] font-bold uppercase tracking-[0.2em] ${step === 2 ? 'text-white/78' : 'text-[#8d7b94]'}`}>
            {step === 2 ? 'Activo' : 'Siguiente'}
          </p>
          <p className="expert-headline mt-1 text-sm font-extrabold sm:text-[15px]">Paso 2: Confirmacion</p>
        </div>
      </div>

      <div className="px-5 pb-6 pt-5 sm:px-6">
        <div className="rounded-[24px] bg-[linear-gradient(180deg,#fff7f7_0%,#f7eef5_100%)] px-5 py-5 shadow-[0_18px_40px_rgba(80,56,89,0.08)]">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-1 h-6 w-6 shrink-0 text-brand-primary" />
            <div>
              <p className="expert-headline text-[1.15rem] font-extrabold text-[#3b2d42]">
                {DNA.copy.ctaText}
              </p>
              <p className="expert-body mt-1 text-sm leading-6 text-[#5f4f65]">
                Elige tu modalidad y deja tus datos para recibir una confirmacion especifica para Zoom o Cochabamba.
              </p>
            </div>
          </div>
        </div>

        {step === 1 ? (
          <div className="mt-5 space-y-4">
            <div className="rounded-[24px] border border-[rgb(var(--color-brand-accent)/0.1)] bg-[#fffaf8] p-4">
              <p className="expert-headline text-[1.05rem] font-bold text-[#3b2d42]">Selecciona la ceremonia a la que asistiras</p>
              <div className="mt-3 grid gap-3">
                {magiaEventOptions.map((option) => {
                  const isSelected = eventMode === option.id;

                  return (
                    <label
                      key={option.id}
                      className={`block cursor-pointer rounded-[22px] border px-4 py-4 transition ${
                        isSelected
                          ? 'border-brand-primary bg-[rgb(var(--color-brand-primary)/0.1)] shadow-[0_12px_30px_rgba(112,69,90,0.12)]'
                          : 'border-[rgb(var(--color-brand-accent)/0.12)] bg-white hover:border-brand-accent/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="magia-event-mode"
                        value={option.id}
                        checked={isSelected}
                        onChange={() => {
                          setEventMode(option.id);
                          setErrors((prev) => ({ ...prev, eventMode: undefined }));
                        }}
                        className="sr-only"
                      />
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="expert-headline text-[1.1rem] font-bold text-[#3b2d42]">{option.label}</p>
                          <p className="expert-body mt-1 text-sm leading-6 text-[#5f4f65]">{option.schedule}</p>
                          <p className="expert-body mt-1 text-xs uppercase tracking-[0.18em] text-brand-accent">{option.location}</p>
                        </div>
                        <div className="rounded-full bg-[rgb(var(--color-surface-bump))] px-4 py-2">
                          <p className="expert-headline text-[1rem] font-extrabold text-brand-primary">Bs {option.amountBs}</p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
              {errors.eventMode ? <p className="mt-2 text-xs text-brand-primary">{errors.eventMode}</p> : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <CommonTextField
                id="magia-first-name"
                label="Nombre"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                  setErrors((prev) => ({ ...prev, firstName: undefined }));
                }}
                error={errors.firstName}
                autoComplete="given-name"
                inputClassName={fieldClassName}
              />

              <CommonTextField
                id="magia-last-name"
                label="Apellido"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                  setErrors((prev) => ({ ...prev, lastName: undefined }));
                }}
                error={errors.lastName}
                autoComplete="family-name"
                inputClassName={fieldClassName}
              />
            </div>

            <CommonTextField
              id="magia-email"
              label="Correo electronico"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              error={errors.email}
              autoComplete="email"
              inputClassName={fieldClassName}
            />

            <SmartPhoneInput
              id="magia-whatsapp"
              value={whatsapp}
              onChange={(nextValue) => {
                setWhatsapp(nextValue);
                setErrors((prev) => ({ ...prev, whatsapp: undefined }));
              }}
              onValidityChange={setIsWhatsappValid}
              error={errors.whatsapp}
              required
              autoDetectCountry
              defaultCountry={resolveDefaultPhoneCountry(visitorData?.country_code)}
              label="WhatsApp"
              labelClassName="expert-body mb-1.5 block text-sm font-semibold text-[#3b2d42]"
              phoneInputClassName={fieldClassName}
              helperTextClassName="mt-1.5 text-xs text-brand-accent"
              errorTextClassName="mt-1.5 text-xs text-brand-primary"
            />

            <div className="rounded-[20px] bg-[#f7f1f8] px-4 py-4">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                <p className="expert-body text-sm leading-6 text-[#5f4f65]">
                  Tus datos solo se usan para confirmar tu asistencia y enviarte el acceso o la ubicacion final por WhatsApp.
                </p>
              </div>
            </div>

            <ExpertCtaButton
              label="Continuar a confirmacion"
              subLabel="Verifica modalidad, monto y siguientes pasos"
              onClick={() => {
                void handleContinue();
              }}
              fullWidth
            />
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="rounded-[24px] border border-[rgb(var(--color-brand-accent)/0.12)] bg-[#fff9fb] px-5 py-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-brand-primary" />
                <div>
                  <p className="expert-headline text-[1.2rem] font-extrabold text-[#3b2d42]">Tu lugar esta casi reservado</p>
                  <p className="expert-body mt-1 text-sm leading-6 text-[#5f4f65]">
                    Confirmaras tu modalidad y luego pasaras a la pagina con instrucciones de pago y acceso.
                  </p>
                </div>
              </div>
            </div>

            {selectedEvent ? (
              <div className="rounded-[24px] bg-[linear-gradient(180deg,#fff7f7_0%,#f6eef5_100%)] px-5 py-5 shadow-[0_18px_40px_rgba(80,56,89,0.08)]">
                <p className="expert-body text-xs uppercase tracking-[0.22em] text-brand-accent">Modalidad seleccionada</p>
                <p className="expert-headline mt-2 text-[1.7rem] leading-tight text-[#3b2d42]">{selectedEvent.label}</p>
                <p className="expert-body mt-2 text-sm leading-6 text-[#5f4f65]">
                  {selectedEvent.schedule}
                  <br />
                  {selectedEvent.location}
                </p>
                <div className="mt-4 rounded-[20px] bg-white px-4 py-4">
                  <p className="expert-body text-xs uppercase tracking-[0.22em] text-brand-accent">Monto a pagar</p>
                  <p className="expert-headline mt-2 text-[2.3rem] leading-none text-brand-primary">Bs {selectedEvent.amountBs}</p>
                  <p className="expert-body mt-2 text-sm leading-6 text-[#5f4f65]">
                    Deposito o QR a nombre de {magiaPayment.holder}. Luego envia tu comprobante al WhatsApp {magiaPayment.whatsapp}.
                  </p>
                </div>
              </div>
            ) : null}

            <div className="rounded-[24px] border border-[rgb(var(--color-brand-accent)/0.12)] bg-white px-5 py-5">
              <p className="expert-headline text-[1.05rem] font-bold text-[#3b2d42]">Resumen del registro</p>
              <p className="expert-body mt-3 text-sm leading-7 text-[#5f4f65]">
                {firstName} {lastName}
                <br />
                {email}
                <br />
                {whatsapp}
              </p>
            </div>

            {submitError ? (
              <p className="rounded-[18px] bg-[rgb(var(--color-brand-primary)/0.08)] px-4 py-3 text-sm text-brand-primary">
                {submitError}
              </p>
            ) : null}

            <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-[60px] items-center justify-center gap-2 rounded-[18px] border border-[rgb(var(--color-brand-accent)/0.14)] bg-white px-5 py-4 text-sm font-semibold text-[#4b3d53] transition hover:bg-[#f7f1f8]"
              >
                <ChevronLeft className="h-4 w-4" />
                Editar
              </button>

              <ExpertCtaButton
                label="Ir a mi confirmacion"
                subLabel="Ver monto, QR y pasos finales"
                onClick={() => {
                  void handleSubmit();
                }}
                fullWidth
                disabled={isSubmitting}
                icon={<Lock className="h-5 w-5 shrink-0" strokeWidth={2.5} />}
              />
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default ExpertOrderForm;
