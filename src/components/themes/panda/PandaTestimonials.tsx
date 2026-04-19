import { DNA } from '../../../dna.config';

const testimonials = [
  {
    name: 'Lucia Herrera',
    role: 'Consultora',
    quote:
      'Tomamos el boilerplate, ajustamos el DNA y en menos de una tarde ya teníamos una VSL nueva con aspecto premium y pricing coherente.',
    avatar: 'https://framerusercontent.com/images/zxdpIPhqc9YaLWvipDKlh4TrU.png?width=900&height=900',
    spanClassName: 'md:col-span-2 lg:col-span-2',
  },
  {
    name: 'Mateo Rojas',
    role: 'Info-productor',
    quote:
      'La parte que más valoro es que el precio principal, el bump y el valor total salen del mismo DNA. No volvimos a romper una oferta por olvidar un número viejo.',
    avatar: 'https://framerusercontent.com/images/a75aZaOa43QxpyRPEHYSQylX3Uo.webp?width=288&height=288',
  },
  {
    name: 'Camila Torres',
    role: 'Performance Lead',
    quote:
      'Cambiar de oferta ya no implica reescribir media landing. Editamos el DNA, verificamos el build y publicamos.',
    avatar: 'https://framerusercontent.com/images/D83i6v4gZp38pGUwMxt3La9qF8.webp?width=288&height=288',
  },
  {
    name: 'Diego Peña',
    role: 'Agency Owner',
    quote:
      'Nos ayudó a estandarizar entregas. El equipo ya sabe que si el tema usa el DNA, el proyecto entra a QA más rápido.',
    avatar: 'https://framerusercontent.com/images/sZT5i2JB1jHnQnGC28JpStB8Lk.webp?width=180&height=180',
  },
  {
    name: 'Valeria Soto',
    role: 'Growth Operator',
    quote:
      'La versión Panda quedó perfecta para ofertas que necesitan una sensación más técnica y cinematográfica sin perder velocidad de edición.',
    avatar: 'https://framerusercontent.com/images/KdiP3Lnuopp8aTb8PeRHdcd5UY.webp?width=160&height=160',
  },
  {
    name: 'Andrés Vega',
    role: 'Closer Manager',
    quote:
      `Pudimos adaptar ${DNA.copy.productName} sin arrastrar branding ajeno. Ese era el miedo principal y quedó resuelto.`,
    avatar: 'https://framerusercontent.com/images/j0jIaUS1RSWwMFMkmwlyM4B3wR4.webp?width=288&height=288',
    spanClassName: 'md:col-span-2 lg:col-span-2',
  },
  {
    name: 'Paula Méndez',
    role: 'Project Manager',
    quote:
      'El README actualizado nos quitó fricción. Ahora el procedimiento de clonación y despliegue es exactamente el que seguimos en producción.',
    avatar: 'https://framerusercontent.com/images/MCxH7MJxmyt9Iu5U4TTL38QSnd8.webp?width=288&height=288',
  },
  {
    name: 'Sebastián Cruz',
    role: 'Implementación',
    quote:
      'La parte visual se siente fuerte, pero lo importante es que el repo ya quedó listo para clonar, personalizar y subir sin sorpresas.',
    avatar: 'https://framerusercontent.com/images/0kKzI4Gc75aPguZrFSQL8qKw8Q.webp?width=180&height=180',
  },
];

const glassCardClassName = 'border border-border-subtle/25 bg-surface/70 backdrop-blur-xl shadow-2xl shadow-brand-accent/30';
const topRowTestimonials = testimonials.slice(0, 4);
const bottomRowTestimonials = testimonials.slice(4);

function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    quote: string;
    avatar: string;
  };
}) {
  return (
    <article
      className={`relative min-h-[240px] w-[280px] shrink-0 overflow-hidden rounded-3xl p-4 sm:w-[320px] sm:p-5 ${glassCardClassName}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--color-brand-primary)/0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgb(var(--color-cta-base)/0.08),transparent_36%)]"
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-14 w-14 rounded-full object-cover ring-1 ring-border-subtle/30"
            loading="lazy"
          />
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-text-main">{testimonial.name}</h3>
            <p className="text-sm font-light text-text-muted">{testimonial.role}</p>
          </div>
        </div>

        <p className="mt-5 text-sm font-light leading-6 text-text-muted">{testimonial.quote}</p>
      </div>
    </article>
  );
}

export function PandaTestimonials() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8%] top-0 h-[500px] w-[500px] rounded-full bg-brand-primary/20 blur-[120px] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6%] bottom-[-4rem] h-[500px] w-[500px] rounded-full bg-cta/20 blur-[120px] mix-blend-screen"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-border-subtle/25 bg-surface/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-text-muted backdrop-blur-xl">
            Testimonios
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-text-main sm:text-4xl">
            Comentarios de equipos que ya operan con una base lista para clonar
          </h2>
          <p className="mt-4 text-base font-light leading-7 text-text-muted">
            Testimonios genéricos de factory listos para reemplazar por prueba social real sin arrastrar branding
            externo dentro del tema.
          </p>
        </div>

      </div>

      <div className="mt-12 space-y-8 md:mt-14">
        <div className="mask-fade overflow-hidden">
          <div className="animate-marquee-left flex w-max min-w-full gap-8">
            {[...topRowTestimonials, ...topRowTestimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-top-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="mask-fade overflow-hidden">
          <div className="animate-marquee-right flex w-max min-w-full gap-8">
            {[...bottomRowTestimonials, ...bottomRowTestimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-bottom-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PandaTestimonials;
