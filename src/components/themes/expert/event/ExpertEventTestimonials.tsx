import { Quote } from 'lucide-react';
import funnelConfig from '../../../../core/config/funnel.config';
import { ExpertEventCard } from './ExpertEventCard';
import { ExpertEventSection } from './ExpertEventSection';
import { expertEventText } from './ExpertEventTypography';

export function ExpertEventTestimonials() {
  const content = funnelConfig.content.event;
  const { testimonials } = content;

  return (
    <ExpertEventSection tone="soft" width="wide">
      <div className="mx-auto max-w-[820px] text-center">
        <p className={[expertEventText.eyebrow, 'text-event-coral'].join(' ')}>
          {testimonials.eyebrow}
        </p>
        <h2 className={[expertEventText.sectionH2, 'mt-4 text-event-ink'].join(' ')}>
          {testimonials.title}
        </h2>
        <p className={[expertEventText.body, 'mx-auto mt-5 max-w-[660px] font-semibold text-event-muted'].join(' ')}>
          {testimonials.subtitle}
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.items.map((item) => (
          <ExpertEventCard key={item.name} className="flex min-h-[300px] flex-col p-6 sm:p-7">
            <Quote className="h-8 w-8 text-event-coral" aria-hidden="true" />
            <p className={[expertEventText.bodyLarge, 'mt-6 flex-1 font-semibold text-event-muted'].join(' ')}>
              "{item.quote}"
            </p>
            <div className="mt-7 border-t border-event-navy/10 pt-5">
              <p className={[expertEventText.cardH3, 'text-event-navy'].join(' ')}>{item.name}</p>
              <p className={[expertEventText.small, 'mt-2 font-bold uppercase text-event-muted'].join(' ')}>
                {item.role}
              </p>
            </div>
          </ExpertEventCard>
        ))}
      </div>
    </ExpertEventSection>
  );
}

export default ExpertEventTestimonials;
