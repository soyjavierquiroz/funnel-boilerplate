const placeholderLogos = [
  { name: 'Aster Labs', shape: 'rect' },
  { name: 'Nova Cloud', shape: 'circle' },
  { name: 'Atlas One', shape: 'rect' },
  { name: 'Northstar', shape: 'circle' },
  { name: 'Pixel Forge', shape: 'rect' },
] as const;

function LogoPlaceholder({ name, shape }: { name: string; shape: 'rect' | 'circle' }) {
  const iconClassName =
    shape === 'circle'
      ? 'h-8 w-8 rounded-full bg-surface-bump'
      : 'h-7 w-10 rounded-lg bg-surface-bump';

  return (
    <div className="group flex min-w-[180px] shrink-0 items-center justify-center gap-3 rounded-2xl border border-border-subtle/20 bg-surface/60 px-6 py-4 backdrop-blur-xl grayscale opacity-30 transition duration-300 hover:grayscale-0 hover:opacity-100">
      <span className={iconClassName} aria-hidden="true" />
      <span className="text-sm font-medium uppercase tracking-[0.12em] text-text-main/70 transition duration-300 group-hover:text-text-main">
        {name}
      </span>
    </div>
  );
}

export function PandaTrustLogos() {
  const marqueeLogos = [...placeholderLogos, ...placeholderLogos];

  return (
    <section className="relative pb-10 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-text-muted/80">
          Cientos de empresas confían en nosotros
        </p>
      </div>

      <div className="mask-fade mt-6 overflow-hidden">
        <div className="animate-marquee-left flex w-max min-w-full gap-8">
          {marqueeLogos.map((logo, index) => (
            <LogoPlaceholder key={`${logo.name}-${index}`} name={logo.name} shape={logo.shape} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PandaTrustLogos;
