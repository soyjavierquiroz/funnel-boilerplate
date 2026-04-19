const insights = [
  {
    tag: 'VSL',
    title: 'Qué ajustar primero cuando clonas una VSL para un cliente nuevo',
    date: 'Factory Step 01',
    image: 'https://framerusercontent.com/images/RtF1KrtoO1DcCVHhgRJ7T8Nkv8.webp?width=1440&height=810',
  },
  {
    tag: 'Pricing',
    title: 'Cómo validar que precios, bump y valor total salen todos del DNA',
    date: 'Factory Step 02',
    image: 'https://framerusercontent.com/images/8Xp8nIzEH2RPEqjkBElDfOw4g.webp?width=1440&height=810',
  },
  {
    tag: 'Deploy',
    title: 'Checklist previo al build: tema, copy, video y salida estática',
    date: 'Factory Step 03',
    image: 'https://framerusercontent.com/images/tlzF1WaYXTRv6yCfrvoVkRYoQU.webp?width=1440&height=810',
  },
];

export function PandaInsights() {
  return (
    <section id="insights" className="relative isolate overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12%] bottom-0 h-[500px] w-[500px] rounded-full bg-brand-primary/20 blur-[120px] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-8 h-[500px] w-[500px] rounded-full bg-cta/20 blur-[120px] mix-blend-screen"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-border-subtle/25 bg-surface/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-text-muted backdrop-blur-xl">
              Manual rápido
            </span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-text-main sm:text-4xl">
              Tres chequeos antes de declarar un funnel listo para producción
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-base font-light leading-7 text-text-muted">
              Usa esta sección como recordatorio visual del flujo mínimo que debe pasar cada clon antes del deploy.
            </p>
            <a
              href="#capture"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-border-subtle/25 bg-surface/50 px-5 text-sm font-semibold text-text-main backdrop-blur-xl transition hover:bg-surface/70"
            >
              Preparar captura
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border-subtle/25 bg-surface-bump"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-page via-page/70 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-[1.25rem] border border-border-subtle/25 bg-surface/70 p-4 backdrop-blur-xl shadow-2xl shadow-brand-accent/30">
                  <span className="inline-flex rounded-full border border-border-subtle/25 bg-surface/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                    {insight.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-text-main">{insight.title}</h3>
                  <p className="mt-4 text-sm font-light uppercase tracking-[0.18em] text-text-muted">{insight.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PandaInsights;
