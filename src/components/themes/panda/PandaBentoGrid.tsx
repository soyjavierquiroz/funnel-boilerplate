import { Quote } from 'lucide-react';
import { SectionWrapper } from '../../common/layout/SectionWrapper';

export interface PandaTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface PandaBentoGridProps {
  eyebrow: string;
  title: string;
  description: string;
  testimonials: PandaTestimonial[];
  className?: string;
}

export function PandaBentoGrid({
  eyebrow,
  title,
  description,
  testimonials,
  className,
}: PandaBentoGridProps) {
  const [featuredTestimonial, ...remainingTestimonials] = testimonials;

  return (
    <SectionWrapper id="stories" variant="display" spacing="lg" className={className}>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="glass-surface rounded-[2rem] p-7 sm:p-9">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-text-main sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-base leading-7 text-text-muted sm:text-lg">{description}</p>
          </div>

          {featuredTestimonial ? (
            <article className="mt-10 rounded-[1.7rem] border border-border-subtle/45 bg-page/78 p-6 sm:p-7">
              <Quote className="h-8 w-8 text-accent/70" strokeWidth={1.4} />
              <p className="panda-display mt-6 max-w-2xl text-2xl font-medium leading-[1.45] tracking-[-0.03em] text-text-main">
                {featuredTestimonial.quote}
              </p>
              <div className="mt-8">
                <p className="text-base font-semibold text-text-main">{featuredTestimonial.name}</p>
                <p className="text-sm text-text-muted">{featuredTestimonial.role}</p>
              </div>
            </article>
          ) : null}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {remainingTestimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-surface rounded-[1.75rem] p-6 sm:p-7">
              <Quote className="h-7 w-7 text-accent/70" strokeWidth={1.4} />
              <p className="mt-5 text-lg leading-8 tracking-[-0.02em] text-text-main">{testimonial.quote}</p>
              <div className="mt-8 border-t border-border-subtle/35 pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-text-main">{testimonial.name}</p>
                <p className="mt-2 text-sm leading-6 text-text-muted">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PandaBentoGrid;
