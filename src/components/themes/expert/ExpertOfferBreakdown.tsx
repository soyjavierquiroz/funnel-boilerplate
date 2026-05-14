import { DNA } from '../../../dna.config';

export function ExpertOfferBreakdown() {
  return (
    <section className="px-4 py-16 sm:px-6" style={{ backgroundColor: 'rgba(var(--color-primary), 0.03)' }}>
      <div className="mx-auto max-w-[1000px]">
        <div className="space-y-8">
          {DNA.copy.modules.map((module, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl md:flex-row"
            >
              <div className="relative flex items-center justify-center bg-white p-6 md:w-2/5">
                <img
                  src={module.image}
                  alt={module.title}
                  /* AÑADIDO: rounded-2xl para esquinas suaves y shadow-sm para separarlo sutilmente del fondo blanco */
                  className="relative z-10 h-auto w-full rounded-2xl shadow-sm object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:w-3/5">
                <div
                  className="mb-2 text-sm font-black uppercase tracking-widest"
                  style={{ color: 'rgb(var(--color-brand-primary))' }}
                >
                  Módulo {index + 1}
                </div>
                <h3
                  className="mb-3 text-2xl font-black leading-tight"
                  style={{ color: 'rgb(var(--color-text-main))' }}
                >
                  {module.title}
                </h3>
                <p
                  className="mb-6 text-lg leading-relaxed"
                  style={{ color: 'rgb(var(--color-text-muted))' }}
                >
                  {module.description}
                </p>
                <div
                  className="mt-auto inline-block self-start rounded-full px-5 py-2 text-sm font-bold shadow-sm"
                  style={{
                    backgroundColor: 'rgba(var(--color-brand-accent), 0.1)',
                    color: 'rgb(var(--color-brand-accent))',
                  }}
                >
                  Valorado en {module.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {DNA.copy.fastActionBonus && (
          <div
            className="relative mt-16 overflow-hidden rounded-3xl border-2 p-8 text-center shadow-2xl transition-transform hover:-translate-y-1 md:p-12"
            style={{
              backgroundColor: 'white',
              borderColor: 'rgb(var(--color-highlight))',
            }}
          >
            <div
              className="absolute left-0 top-0 h-3 w-full"
              style={{ backgroundColor: 'rgb(var(--color-highlight))' }}
            ></div>

            <p
              className="mb-4 text-sm font-black uppercase tracking-widest md:text-base"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {DNA.copy.fastActionBonus.timeLimit}
            </p>
            <h3
              className="mb-3 text-[1.8rem] font-black leading-tight md:text-[2.5rem]"
              style={{ color: 'rgb(var(--color-text-main))' }}
            >
              {DNA.copy.fastActionBonus.title}
            </h3>
            <p
              className="text-xl font-medium md:text-2xl"
              style={{ color: 'rgb(var(--color-brand-primary))' }}
            >
              {DNA.copy.fastActionBonus.subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}