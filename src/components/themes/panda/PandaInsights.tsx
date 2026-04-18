const insights = [
  {
    tag: 'Conversión',
    title: 'VSL horizontal o vertical: ¿qué formato convierte más?',
    date: '17 abr 2026',
    image: 'https://framerusercontent.com/images/RtF1KrtoO1DcCVHhgRJ7T8Nkv8.webp?width=1440&height=810',
  },
  {
    tag: 'Conversión',
    title: 'Remarketing para VSL: 4 segmentos a los que necesitas anunciar',
    date: '6 abr 2026',
    image: 'https://framerusercontent.com/images/8Xp8nIzEH2RPEqjkBElDfOw4g.webp?width=1440&height=810',
  },
  {
    tag: 'Conversión',
    title: '¿Cómo hacer remarketing para quienes vieron tus videos?',
    date: '6 abr 2026',
    image: 'https://framerusercontent.com/images/tlzF1WaYXTRv6yCfrvoVkRYoQU.webp?width=1440&height=810',
  },
];

export function PandaInsights() {
  const blogUrl = 'https://pandavideo.com/es/blog';

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute left-[-12%] bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-10%] top-8 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] mix-blend-screen pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-gray-300 backdrop-blur-xl">
              Aprender más
            </span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Perspectivas sobre videos, marketing y negocios
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-base font-light leading-7 text-gray-400">
              Vea consejos, tutoriales y estrategias para mejorar los resultados con video.
            </p>
            <a
              href={blogUrl}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.06]"
              target="_blank"
              rel="noreferrer"
            >
              Ver Blog
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#081226]"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04050c] via-[#04050c]/72 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl shadow-2xl">
                  <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-300">
                    {insight.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">{insight.title}</h3>
                  <p className="mt-4 text-sm font-light uppercase tracking-[0.18em] text-gray-400">{insight.date}</p>
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
