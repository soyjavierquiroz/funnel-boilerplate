const testimonials = [
  {
    name: 'Pablo Marçal',
    role: 'PLX',
    quote:
      'Pudimos reducir significativamente el costo de alojar videos que estaban en Vimeo, proporcionando una mejor experiencia para los estudiantes en diversas plataformas.',
    avatar: 'https://framerusercontent.com/images/zxdpIPhqc9YaLWvipDKlh4TrU.png?width=900&height=900',
    spanClassName: 'md:col-span-2 lg:col-span-2',
  },
  {
    name: 'Marcos Paulo',
    role: 'PLX',
    quote:
      'Precio más bajo, jugador más rápido y soporte en portugués. No entiendo por qué algunas personas todavía usan Vimeo, arriesgándose a descargar contenido con un solo clic. Panda no tiene competencia.',
    avatar: 'https://framerusercontent.com/images/a75aZaOa43QxpyRPEHYSQylX3Uo.webp?width=288&height=288',
  },
  {
    name: 'Cristian Barbosa',
    role: 'Tríada del Tiempo',
    quote:
      'Estamos migrando todas mis plataformas de cursos, así como las de TriadPS y nuestros socios, a Panda Video. Es más rápido y más seguro que Vimeo.',
    avatar: 'https://framerusercontent.com/images/D83i6v4gZp38pGUwMxt3La9qF8.webp?width=288&height=288',
  },
  {
    name: 'Rafael Wisch',
    role: 'Greenn',
    quote:
      'Nos impresionó la calidad del video y la velocidad de transmisión; superó con creces a Vimeo. Es una gran fuente de orgullo ver a una empresa brasileña ofreciendo este nivel de calidad. Ellos llegarán lejos.',
    avatar: 'https://framerusercontent.com/images/sZT5i2JB1jHnQnGC28JpStB8Lk.webp?width=180&height=180',
  },
  {
    name: 'Eleandro Ferronatto',
    role: 'Investfy',
    quote:
      'Migramos nuestra base de datos de videos completa de Vimeo a Panda. Esencial para garantizar la disponibilidad de videos en cualquier momento. Más seguro, muy fácil de usar.',
    avatar: 'https://framerusercontent.com/images/KdiP3Lnuopp8aTb8PeRHdcd5UY.webp?width=160&height=160',
  },
  {
    name: 'Romanni Souza',
    role: 'Instituto Romanni',
    quote:
      'Panda Video es robusto y tiene el mejor soporte en el mercado, y siempre están haciendo mejoras constantes, con optimizaciones específicas diseñadas para creadores de infoproductos.',
    avatar: 'https://framerusercontent.com/images/j0jIaUS1RSWwMFMkmwlyM4B3wR4.webp?width=288&height=288',
    spanClassName: 'md:col-span-2 lg:col-span-2',
  },
  {
    name: 'Rainer Borene',
    role: 'Memberkit',
    quote:
      'Recibimos varios pedidos de integración con Panda Video. Finalmente, tenemos una alternativa viable y con una calidad extraordinaria de alojamiento de videos. Panda tiene un futuro increíble por delante.',
    avatar: 'https://framerusercontent.com/images/MCxH7MJxmyt9Iu5U4TTL38QSnd8.webp?width=288&height=288',
  },
  {
    name: 'João Alves',
    role: 'Nuevos Ricos',
    quote:
      'Panda nos salvó cuando Vimeo presentó un cargo exorbitante por uso de ancho de banda. Pudimos migrar todo rápidamente gracias al apoyo del equipo.',
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
            Comentarios de personas y empresas que utilizan nuestro servicio
          </h2>
          <p className="mt-4 text-base font-light leading-7 text-text-muted">
            Comentarios reales extraídos del ecosistema Panda Video para recrear el bloque social con la misma energía
            oscura, técnica y confiable del original.
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
