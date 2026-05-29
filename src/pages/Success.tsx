import { useEffect, useMemo, useState } from 'react';
import analytics from '../core/services/analytics';
import { DNA } from '../dna.config';

const REDIRECT_DELAY_SECONDS = 10;

function resolveWhatsappGroupUrl() {
  const envUrl = import.meta.env.VITE_WHATSAPP_GROUP_URL?.trim();
  return envUrl && envUrl.length > 0 ? envUrl : DNA.forms.whatsappGroupUrl;
}

function trackCompleteRegistrationOnce() {
  const trackingKey = `${DNA.siteId}.success.complete-registration`;

  try {
    if (window.sessionStorage.getItem(trackingKey) === '1') {
      return;
    }

    window.sessionStorage.setItem(trackingKey, '1');
  } catch {
    // If storage is unavailable, still allow the analytics helper to handle the event.
  }

  void analytics.trackEvent('CompleteRegistration', {
    source: 'SuccessPage',
    funnel_type: DNA.funnelType,
    site_id: DNA.siteId,
  });
}

export function Success() {
  const [secondsRemaining, setSecondsRemaining] = useState(REDIRECT_DELAY_SECONDS);
  const whatsappGroupUrl = useMemo(resolveWhatsappGroupUrl, []);
  const hasWhatsappGroupUrl = whatsappGroupUrl.length > 0;
  const progressPercent =
    ((REDIRECT_DELAY_SECONDS - secondsRemaining) / REDIRECT_DELAY_SECONDS) * 100;

  useEffect(() => {
    trackCompleteRegistrationOnce();
  }, []);

  useEffect(() => {
    if (!hasWhatsappGroupUrl) {
      console.warn(
        '[Success] VITE_WHATSAPP_GROUP_URL is not configured. WhatsApp redirect disabled.',
      );
      return;
    }

    const redirectTimer = window.setTimeout(() => {
      window.location.assign(whatsappGroupUrl);
    }, REDIRECT_DELAY_SECONDS * 1000);

    const countdownTimer = window.setInterval(() => {
      setSecondsRemaining((currentSeconds) => Math.max(currentSeconds - 1, 0));
    }, 1000);

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownTimer);
    };
  }, [hasWhatsappGroupUrl, whatsappGroupUrl]);

  return (
    <div className="theme-expert theme-expert-event min-h-screen bg-event-navy text-text-inverse">
      <main className="flex min-h-screen items-center px-4 py-10 sm:px-6">
        <section className="mx-auto flex w-full max-w-[620px] flex-col items-center text-center">
          <div className="mb-7 h-16 w-16 rounded-full border border-event-sky/35 bg-event-sky/12 p-3 shadow-[0_18px_50px_rgb(var(--color-event-sky)/0.16)]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-event-coral text-2xl font-black text-text-inverse">
              1
            </div>
          </div>

          <p className="expert-event-kicker text-xs font-bold uppercase text-event-sky">
            {DNA.copy.successPage.eyebrow}
          </p>
          <h1 className="expert-headline mt-4 text-[2.45rem] leading-[1.02] text-text-inverse sm:text-[4rem]">
            {DNA.copy.successPage.title}
          </h1>
          <p className="expert-body mx-auto mt-5 max-w-[540px] text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
            {DNA.copy.successPage.description}
          </p>

          <div className="mt-9 w-full rounded-2xl border border-white/12 bg-white/[0.07] p-5 shadow-[0_24px_70px_rgb(0_0_0/0.22)] sm:p-7">
            {hasWhatsappGroupUrl ? (
              <>
                <p className="expert-body text-sm font-semibold text-white/78">
                  {DNA.copy.successPage.countdownLead}
                </p>
                <div className="mt-3 text-[4rem] font-black leading-none text-event-sky sm:text-[5rem]">
                  {secondsRemaining}
                </div>

                <div
                  className="mt-5 h-3 overflow-hidden rounded-full bg-white/14"
                  role="progressbar"
                  aria-label="Progreso de redirección a WhatsApp"
                  aria-valuemin={0}
                  aria-valuemax={REDIRECT_DELAY_SECONDS}
                  aria-valuenow={REDIRECT_DELAY_SECONDS - secondsRemaining}
                >
                  <div
                    className="h-full rounded-full bg-event-coral transition-[width] duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <a
                  href={whatsappGroupUrl}
                  className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#25D366] px-6 text-base font-black text-[#062714] shadow-[0_16px_36px_rgb(37_211_102/0.24)] transition hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/35 sm:w-auto sm:min-w-[260px]"
                >
                  {DNA.copy.successPage.whatsappLabel}
                </a>
              </>
            ) : (
              <>
                <p className="expert-body text-base font-semibold leading-7 text-white/86">
                  {DNA.copy.successPage.missingWhatsappUrlMessage}
                </p>
                <button
                  type="button"
                  disabled
                  className="mt-6 inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center rounded-full bg-white/18 px-6 text-base font-black text-white/55 sm:w-auto sm:min-w-[260px]"
                >
                  {DNA.copy.successPage.whatsappLabel}
                </button>
              </>
            )}
          </div>

          <p className="expert-body mt-6 text-xs font-semibold uppercase text-white/48">
            {DNA.copy.productName}
          </p>
        </section>
      </main>
    </div>
  );
}

export default Success;
