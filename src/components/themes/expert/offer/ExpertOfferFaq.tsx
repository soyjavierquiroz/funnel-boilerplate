import { ChevronDown } from 'lucide-react';
import type { FunnelOfferConfig } from '../../../../core/config/funnel.config';

interface ExpertOfferFaqProps {
  offer: FunnelOfferConfig;
}

export function ExpertOfferFaq({ offer }: ExpertOfferFaqProps) {
  return (
    <section className="bg-event-surface px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[860px]">
        <p className="expert-event-kicker text-center text-[0.68rem] font-bold uppercase text-event-coral">
          Preguntas frecuentes
        </p>
        <h2 className="expert-headline mx-auto mt-3 max-w-[680px] text-center text-[2rem] leading-tight text-event-ink sm:text-[3rem]">
          Antes de acceder
        </h2>

        <div className="mt-8 grid gap-3">
          {offer.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-event-navy/10 bg-event-soft p-4 open:bg-event-surface sm:p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="expert-headline text-left text-[1.08rem] leading-snug text-event-navy">
                  {item.question}
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-event-coral transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="expert-body mt-3 text-sm font-semibold leading-6 text-event-muted sm:text-base sm:leading-7">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferFaq;
