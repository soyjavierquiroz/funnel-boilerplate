import { startTransition, useEffect, useState } from 'react';
import { Check, ChevronLeft, CreditCard, Lock, MapPin, ShieldCheck, Truck } from 'lucide-react';
import funnelConfig, { pricingProductKeys } from '../../../core/config/funnel.config';
import { useHotmartPrices } from '../../../core/hooks/useHotmartPrices';
import analytics from '../../../core/services/analytics';
import { useVisitor } from '../../../core/visitor/VisitorContext';
import { SmartPhoneInput } from '../../common/forms/SmartPhoneInput';
import { ExpertCtaButton } from './ExpertCtaButton';
import { expertBrandAssets } from './expertContent';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsapp?: string;
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  postalCode?: string;
}

interface OrderLeadPayload {
  lead: {
    first_name: string;
    last_name: string;
    email: string;
    whatsapp: string;
    address: string;
    apartment: string;
    country: string;
    state: string;
    city: string;
    postal_code: string;
  };
  order: {
    shipping_usd: number;
    add_audiobook: boolean;
    add_live_recordings: boolean;
    total_usd: number;
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

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function isMockWebhook(url: string) {
  return !url || url.includes('test-webhook-url');
}

function resolveOfferPrice(baseValue: number, localizedValue?: { total: string }) {
  const parsed = Number(localizedValue?.total);
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }

  return baseValue;
}

export function ExpertOrderForm() {
  const { visitorData, isLoading } = useVisitor();
  const mainOffer = useHotmartPrices(pricingProductKeys.ofertaPrincipal);
  const audiobookOffer = useHotmartPrices(pricingProductKeys.orderBump);
  const liveRecordingsOffer = useHotmartPrices(pricingProductKeys.upsellContinuidad);

  const [step, setStep] = useState<1 | 2>(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [wantsAudiobook, setWantsAudiobook] = useState(false);
  const [wantsLiveRecordings, setWantsLiveRecordings] = useState(false);
  const [isWhatsappValid, setIsWhatsappValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isLoading || !visitorData) {
      return;
    }

    setCountry((currentValue) => currentValue || visitorData.country_name || '');
    setState((currentValue) => currentValue || visitorData.region || '');
    setCity((currentValue) => currentValue || visitorData.city || '');
  }, [isLoading, visitorData]);

  const countryCode = visitorData?.country_code?.toUpperCase() ?? 'US';
  const shippingPrice = countryCode === 'US' ? 9.95 : 19.95;
  const audiobookPrice = resolveOfferPrice(
    audiobookOffer.product.basePriceUSD,
    audiobookOffer.scrapedData?.[countryCode],
  );
  const liveRecordingsPrice = resolveOfferPrice(
    liveRecordingsOffer.product.basePriceUSD,
    liveRecordingsOffer.scrapedData?.[countryCode],
  );
  const orderTotal = shippingPrice + (wantsAudiobook ? audiobookPrice : 0) + (wantsLiveRecordings ? liveRecordingsPrice : 0);
  const compareAtValue = mainOffer.product.basePriceUSD;
  const checkoutUrl = mainOffer.product.checkoutUrl;

  const validateShippingStep = () => {
    const nextErrors: FormErrors = {};

    if (!firstName.trim()) nextErrors.firstName = 'Complete this field.';
    if (!lastName.trim()) nextErrors.lastName = 'Complete this field.';
    if (!email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!isValidEmail(email.trim())) {
      nextErrors.email = 'Please enter a valid email.';
    }
    if (!whatsapp.trim()) {
      nextErrors.whatsapp = 'Please enter your phone number.';
    } else if (!isWhatsappValid) {
      nextErrors.whatsapp = 'Please use an international phone format.';
    }
    if (!address.trim()) nextErrors.address = 'Address is required.';
    if (!country.trim()) nextErrors.country = 'Country is required.';
    if (!state.trim()) nextErrors.state = 'State is required.';
    if (!city.trim()) nextErrors.city = 'City is required.';
    if (!postalCode.trim()) nextErrors.postalCode = 'Postal code is required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleContinue = async () => {
    setSubmitError('');

    if (!validateShippingStep()) {
      return;
    }

    try {
      await analytics.trackEvent('AddToCart', {
        product_id: pricingProductKeys.ofertaPrincipal,
        product_name: funnelConfig.brandName,
        value: orderTotal,
        shipping_value: shippingPrice,
        country_code: countryCode,
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

    if (!validateShippingStep()) {
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
        address: address.trim(),
        apartment: apartment.trim(),
        country: country.trim(),
        state: state.trim(),
        city: city.trim(),
        postal_code: postalCode.trim(),
      },
      order: {
        shipping_usd: shippingPrice,
        add_audiobook: wantsAudiobook,
        add_live_recordings: wantsLiveRecordings,
        total_usd: orderTotal,
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
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      await analytics.trackEvent('Lead', {
        form_id: 'expert_order_form',
        lead: payload.lead,
        order: payload.order,
        content_name: funnelConfig.brandName,
        status: 'submitted',
      });

      await analytics.trackEvent('InitiateCheckout', {
        product_id: pricingProductKeys.ofertaPrincipal,
        product_name: funnelConfig.brandName,
        value: orderTotal,
        shipping_value: shippingPrice,
        checkout_url: checkoutUrl,
        country_code: countryCode,
      });

      if (/^https?:\/\//i.test(checkoutUrl)) {
        window.location.assign(checkoutUrl);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('[ExpertOrderForm] checkout handoff failed', error);
      setSubmitError('We could not continue to checkout right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <aside className="rounded-[12px] bg-white shadow-[0_26px_54px_rgba(0,0,0,0.1)]">
        <div className="rounded-t-[12px] bg-[#4876b9] px-5 py-4 text-center text-white">
          <p className="expert-headline text-[1rem] font-extrabold uppercase tracking-[0.08em]">Order Reserved</p>
        </div>
        <div className="space-y-4 px-5 py-6">
          <div className="flex items-center gap-3 rounded-[14px] bg-[#f4f8ff] p-4">
            <ShieldCheck className="h-8 w-8 text-[#4876b9]" />
            <div>
              <p className="expert-headline text-[1.1rem] font-extrabold text-[#2d2d2d]">Your spot is held.</p>
              <p className="expert-body text-sm leading-6 text-[#333]">
                We captured your details and the order form is ready for the next step.
              </p>
            </div>
          </div>

          <ExpertCtaButton
            label="Update My Shipping Details"
            subLabel="Return to the form"
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
            fullWidth
          />
        </div>
      </aside>
    );
  }

  return (
    <aside id="checkout" className="rounded-[12px] bg-white shadow-[0_26px_54px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 overflow-hidden rounded-t-[12px] text-white">
        <div className={`px-4 py-4 text-center ${step === 1 ? 'bg-[#4876b9]' : 'bg-[#7ea0ce]'}`}>
          <p className="expert-body text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Step 1</p>
          <p className="expert-headline mt-1 text-sm font-extrabold uppercase sm:text-[15px]">Shipping</p>
        </div>
        <div className={`px-4 py-4 text-center ${step === 2 ? 'bg-[#4876b9]' : 'bg-[#7ea0ce]'}`}>
          <p className="expert-body text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Step 2</p>
          <p className="expert-headline mt-1 text-sm font-extrabold uppercase sm:text-[15px]">Review</p>
        </div>
      </div>

      <div className="px-5 pb-6 pt-5 sm:px-6">
        <div className="rounded-[12px] bg-white px-4 pb-4 pt-2 shadow-[0_0_54px_rgba(0,0,0,0.08)]">
          <img src={expertBrandAssets.bundleUrl} alt="Expert Secrets bundle" className="mx-auto w-full" loading="lazy" />
          <p className="expert-body mt-3 text-center text-[14px] text-[#2d2d2d]/65">384 Pages | Industry Specific Examples | 5 Free Bonuses</p>
          <p className="expert-headline mt-2 text-center text-[1.6rem] font-extrabold leading-tight text-[#e01921] sm:text-[2rem]">
            Only <span className="line-through">{formatPrice(compareAtValue)}</span> FREE Today!
          </p>
          <p className="expert-body mt-2 text-center text-sm text-[#2d2d2d]/80">
            You pay only {formatPrice(shippingPrice)} for shipping and handling in {countryCode === 'US' ? 'the U.S.' : 'your region'}
          </p>
          <p className="expert-headline mt-2 text-center text-[1rem] font-semibold leading-6 text-[#2d2d2d]">
            Get your FREE copy now + receive instant access to 5 bonuses.
          </p>
        </div>

        {step === 1 ? (
          <div className="mt-5 space-y-4">
            <div className="rounded-[14px] border border-[#d8e3f2] bg-[#f7fbff] px-4 py-3">
              <p className="expert-headline text-[1.05rem] font-bold text-[#2d2d2d]">Get Your FREE Book, Send Me Your Address</p>
              <p className="expert-body mt-1 text-sm leading-6 text-[#333]">
                I&apos;d like to rush a free hardcover copy of Expert Secrets to your doorstep.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="expert-first-name" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                  First Name
                </label>
                <input
                  id="expert-first-name"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    setErrors((prev) => ({ ...prev, firstName: undefined }));
                  }}
                  className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
                />
                {errors.firstName ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.firstName}</p> : null}
              </div>

              <div>
                <label htmlFor="expert-last-name" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                  Last Name
                </label>
                <input
                  id="expert-last-name"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                    setErrors((prev) => ({ ...prev, lastName: undefined }));
                  }}
                  className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
                />
                {errors.lastName ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.lastName}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="expert-email" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                Email Address
              </label>
              <input
                id="expert-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
              />
              {errors.email ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.email}</p> : null}
            </div>

            <SmartPhoneInput
              id="expert-whatsapp"
              value={whatsapp}
              onChange={(nextValue) => {
                setWhatsapp(nextValue);
                setErrors((prev) => ({ ...prev, whatsapp: undefined }));
              }}
              onValidityChange={setIsWhatsappValid}
              error={errors.whatsapp}
              required
              autoDetectCountry
              label="Phone Number"
              labelClassName="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]"
              phoneInputClassName="rounded-md border border-[#cfd6df] focus-within:border-[#4876b9] focus-within:ring-4 focus-within:ring-[#4876b9]/10"
              errorTextClassName="mt-1.5 text-xs text-[#e01921]"
            />

            <div>
              <label htmlFor="expert-address" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                Address
              </label>
              <input
                id="expert-address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                  setErrors((prev) => ({ ...prev, address: undefined }));
                }}
                className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
              />
              {errors.address ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.address}</p> : null}
            </div>

            <div>
              <label htmlFor="expert-apartment" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                Apartment, building, floor (optional)
              </label>
              <input
                id="expert-apartment"
                value={apartment}
                onChange={(event) => setApartment(event.target.value)}
                className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="expert-country" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                  Country
                </label>
                <input
                  id="expert-country"
                  value={country}
                  onChange={(event) => {
                    setCountry(event.target.value);
                    setErrors((prev) => ({ ...prev, country: undefined }));
                  }}
                  className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
                />
                {errors.country ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.country}</p> : null}
              </div>

              <div>
                <label htmlFor="expert-state" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                  State
                </label>
                <input
                  id="expert-state"
                  value={state}
                  onChange={(event) => {
                    setState(event.target.value);
                    setErrors((prev) => ({ ...prev, state: undefined }));
                  }}
                  className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
                />
                {errors.state ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.state}</p> : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="expert-city" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                  City
                </label>
                <input
                  id="expert-city"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                    setErrors((prev) => ({ ...prev, city: undefined }));
                  }}
                  className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
                />
                {errors.city ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.city}</p> : null}
              </div>

              <div>
                <label htmlFor="expert-postal" className="expert-body mb-1.5 block text-sm font-semibold text-[#2d2d2d]">
                  Postal Code
                </label>
                <input
                  id="expert-postal"
                  value={postalCode}
                  onChange={(event) => {
                    setPostalCode(event.target.value);
                    setErrors((prev) => ({ ...prev, postalCode: undefined }));
                  }}
                  className="expert-input h-12 w-full rounded-md border border-[#cfd6df] px-4 text-[15px] focus:border-[#4876b9] focus:outline-none focus:ring-4 focus:ring-[#4876b9]/10"
                />
                {errors.postalCode ? <p className="mt-1.5 text-xs text-[#e01921]">{errors.postalCode}</p> : null}
              </div>
            </div>

            <ExpertCtaButton
              label="Continue To Step 2"
              subLabel="Review your free order and bonuses"
              onClick={() => {
                void handleContinue();
              }}
              fullWidth
            />
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="rounded-[14px] border border-[#d8e3f2] bg-[#f7fbff] p-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#4876b9]" />
                <div className="expert-body text-sm leading-6 text-[#2d2d2d]">
                  <p className="font-semibold">Shipping to</p>
                  <p>
                    {firstName} {lastName}, {address}
                    {apartment ? `, ${apartment}` : ''}, {city}, {state}, {country}, {postalCode}
                  </p>
                </div>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-[14px] border border-[#dae3ef] bg-white p-4">
              <input
                type="checkbox"
                checked={wantsAudiobook}
                onChange={(event) => setWantsAudiobook(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-[#cfd6df] text-[#4876b9] focus:ring-[#4876b9]"
              />
              <img src={expertBrandAssets.audiobookUrl} alt="Expert Secrets audiobook bonus" className="h-16 w-16 rounded-xl object-cover" loading="lazy" />
              <div className="min-w-0">
                <p className="expert-body text-xs font-bold uppercase tracking-[0.18em] text-[#4876b9]">Special One Time Offer</p>
                <p className="expert-headline mt-1 text-[1rem] font-extrabold leading-5 text-[#2d2d2d]">
                  Audiobook + 4 More Exclusive Products
                </p>
                <p className="expert-body mt-1 text-sm leading-6 text-[#333]">
                  Add this order bump for just {formatPrice(audiobookPrice)}.
                </p>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-[14px] border border-[#dae3ef] bg-white p-4">
              <input
                type="checkbox"
                checked={wantsLiveRecordings}
                onChange={(event) => setWantsLiveRecordings(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-[#cfd6df] text-[#4876b9] focus:ring-[#4876b9]"
              />
              <img src={expertBrandAssets.liveRecordingsUrl} alt="Expert Secrets live recordings" className="h-16 w-16 rounded-xl object-cover" loading="lazy" />
              <div className="min-w-0">
                <p className="expert-body text-xs font-bold uppercase tracking-[0.18em] text-[#4876b9]">Special One Time Offer</p>
                <p className="expert-headline mt-1 text-[1rem] font-extrabold leading-5 text-[#2d2d2d]">
                  Expert Secrets Live Recordings
                </p>
                <p className="expert-body mt-1 text-sm leading-6 text-[#333]">
                  Add the recordings for {formatPrice(liveRecordingsPrice)} before checkout.
                </p>
              </div>
            </label>

            <div className="rounded-[14px] border border-[#dae3ef] bg-[#fbfdff] p-4">
              <div className="flex items-start gap-3">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-[#4876b9]" />
                <div>
                  <p className="expert-headline text-[1rem] font-bold text-[#2d2d2d]">Secure Payment Handoff</p>
                  <p className="expert-body mt-1 text-sm leading-6 text-[#333]">
                    We review your order here and continue through the secure checkout configured in the funnel logic.
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-[#4876b9]">
                    <CreditCard className="h-5 w-5" />
                    <Truck className="h-5 w-5" />
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[14px] bg-[#111827] p-4 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <p className="expert-headline text-[1.05rem] font-bold">Order Summary</p>
                <p className="expert-body text-sm text-white/70">Secure 2-step form</p>
              </div>
              <div className="expert-body mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#ffcc00]" />
                    Hardcover Book
                  </span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Shipping & handling</span>
                  <span className="font-semibold">{formatPrice(shippingPrice)}</span>
                </div>
                {wantsAudiobook ? (
                  <div className="flex items-center justify-between gap-3">
                    <span>Audiobook bump</span>
                    <span className="font-semibold">{formatPrice(audiobookPrice)}</span>
                  </div>
                ) : null}
                {wantsLiveRecordings ? (
                  <div className="flex items-center justify-between gap-3">
                    <span>Live recordings bump</span>
                    <span className="font-semibold">{formatPrice(liveRecordingsPrice)}</span>
                  </div>
                ) : null}
                <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-base font-bold">
                  <span>Total due now</span>
                  <span>{formatPrice(orderTotal)}</span>
                </div>
              </div>
            </div>

            {submitError ? (
              <div className="rounded-[12px] border border-[#e01921]/25 bg-[#e01921]/8 px-4 py-3 text-sm text-[#a1151b]">
                {submitError}
              </div>
            ) : null}

            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-md border border-[#d0d8e2] px-5 text-sm font-semibold text-[#2d2d2d] transition hover:bg-[#f8fafc]"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </button>

              <ExpertCtaButton
                label={isSubmitting ? 'Submitting Order...' : 'Send My Book'}
                subLabel="Yes! I want this free book now!"
                onClick={() => {
                  void handleSubmit();
                }}
                fullWidth
                disabled={isSubmitting}
              />
            </div>

            <p className="expert-body text-center text-xs leading-5 text-[#2d2d2d]/70">
              By clicking the button, you consent to receive promotional messaging via email, calls, and SMS.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default ExpertOrderForm;
