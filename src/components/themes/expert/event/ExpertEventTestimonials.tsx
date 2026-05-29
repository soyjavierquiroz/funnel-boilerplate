import { Quote } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventSection } from './ExpertEventSection';

export function ExpertEventTestimonials() {
  const content = funnelConfig.content.event;
  const { testimonials } = content;

  return (
    <ExpertEventSection tone="soft" width="wide" className="md:py-28">
      <div className="mx-auto max-w-[820px] text-center">
        <p className="expert-event-kicker text-xs font-bold uppercase text-event-coral">
          {testimonials.eyebrow}
        </p>
        <h2 className="expert-headline mt-4 text-[2.35rem] leading-[0.98] text-event-ink sm:text-[4.1rem] sm:leading-[0.94]">
          {testimonials.title}
        </h2>
        <p className="expert-body mx-auto mt-5 max-w-[660px] text-base font-semibold leading-8 text-event-muted sm:text-lg">
          {testimonials.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.items.map((item) => (
          <ExpertEventCard key={item.name} className="flex min-h-[300px] flex-col p-6 sm:p-7">
            <Quote className="h-8 w-8 text-event-coral" aria-hidden="true" />
            <p className="expert-body mt-6 flex-1 text-lg font-semibold leading-8 text-event-muted">
              "{item.quote}"
            </p>
            <div className="mt-7 border-t border-event-navy/10 pt-5">
              <p className="expert-headline text-2xl leading-none text-event-navy">{item.name}</p>
              <p className="expert-body mt-2 text-sm font-bold uppercase text-event-muted">{item.role}</p>
            </div>
          </ExpertEventCard>
        ))}
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventTestimonials;
