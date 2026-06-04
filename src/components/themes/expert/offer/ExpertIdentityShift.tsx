import { CheckCircle2, XCircle } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertIdentityShiftProps {
  offer: FunnelOfferConfig;
}

export function ExpertIdentityShift({ offer }: ExpertIdentityShiftProps) {
  const identity = offer.identityShift;

  return (
    <section className="bg-event-page px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            {identity.eyebrow}
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            {identity.title}
          </h2>
          <p className="expert-body mx-auto mt-4 max-w-[720px] text-base font-semibold leading-7 text-event-muted">
            {identity.subtitle}
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          <article className="border border-event-navy/10 bg-event-surface p-5 shadow-[0_14px_34px_rgb(var(--color-event-navy)/0.06)] sm:p-6">
            <h3 className="expert-headline text-[1.45rem] leading-tight text-event-ink">
              {identity.oldIdentityTitle}
            </h3>
            <div className="mt-5 grid gap-3">
              {identity.oldItems.map((item) => (
                <div key={item} className="flex gap-3 bg-event-soft p-4">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-event-muted" aria-hidden="true" />
                  <p className="expert-body text-sm font-bold leading-6 text-event-muted sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border border-event-coral/35 bg-event-surface p-5 shadow-[0_18px_46px_rgb(var(--color-event-coral)/0.12)] sm:p-6">
            <h3 className="expert-headline text-[1.45rem] leading-tight text-event-navy">
              {identity.newIdentityTitle}
            </h3>
            <div className="mt-5 grid gap-3">
              {identity.newItems.map((item) => (
                <div key={item} className="flex gap-3 bg-event-soft p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
                  <p className="expert-body text-sm font-bold leading-6 text-event-ink sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <p className="expert-headline mx-auto mt-8 max-w-[860px] border-y border-event-navy/12 py-6 text-center text-[1.45rem] leading-tight text-event-navy sm:text-[1.9rem]">
          {identity.closing}
        </p>
      </div>
    </section>
  );
}

export default ExpertIdentityShift;
