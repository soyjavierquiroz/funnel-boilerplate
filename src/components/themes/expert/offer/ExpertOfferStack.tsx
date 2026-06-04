import { CheckCircle2 } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferStackProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferStack({ offer }: ExpertOfferStackProps) {
  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1080px] gap-8 lg:grid-cols-[0.76fr_1fr] lg:items-start">
        <div>
          <p className="expert-event-kicker text-[0.68rem] font-bold uppercase text-event-coral">
            Incluye
          </p>
          <h2 className="expert-headline mt-3 text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
            Todo lo que necesitas para avanzar con claridad.
          </h2>
          <p className="expert-body mt-4 text-base font-semibold leading-7 text-event-muted sm:text-[1.05rem]">
            La oferta está organizada para que puedas empezar por pasos concretos y sostener el avance.
          </p>
        </div>

        <div className="grid gap-3">
          {offer.includes.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-lg border border-event-navy/10 bg-event-soft p-4 shadow-[0_10px_28px_rgb(var(--color-event-navy)/0.05)]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-event-coral" aria-hidden="true" />
              <p className="expert-body text-base font-bold leading-7 text-event-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferStack;
