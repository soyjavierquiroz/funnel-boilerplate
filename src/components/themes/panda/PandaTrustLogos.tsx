const placeholderLogos = [
  { name: 'Aster Labs', shape: 'rect' },
  { name: 'Nova Cloud', shape: 'circle' },
  { name: 'Atlas One', shape: 'rect' },
  { name: 'Northstar', shape: 'circle' },
  { name: 'Pixel Forge', shape: 'rect' },
];

function LogoPlaceholder({ name, shape }: { name: string; shape: 'rect' | 'circle' }) {
  const iconClassName =
    shape === 'circle'
      ? 'h-8 w-8 rounded-full bg-white/10'
      : 'h-7 w-10 rounded-lg bg-white/10';

  return (
    <div className="flex min-w-[140px] items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 backdrop-blur-xl">
      <span className={iconClassName} aria-hidden="true" />
      <span className="text-sm font-medium tracking-[0.12em] text-white/55 uppercase">{name}</span>
    </div>
  );
}

export function PandaTrustLogos() {
  return (
    <section className="relative px-6 pb-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-gray-500">
          Cientos de empresas confían en nosotros
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {placeholderLogos.map((logo) => (
            <LogoPlaceholder key={logo.name} name={logo.name} shape={logo.shape} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PandaTrustLogos;
