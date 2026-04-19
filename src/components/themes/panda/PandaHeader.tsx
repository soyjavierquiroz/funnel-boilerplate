import { DNA } from '../../../dna.config';

function PandaMark() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle/30 bg-surface-bump/80">
      <svg viewBox="0 0 32 32" className="h-5 w-5 text-text-main" fill="none" aria-hidden="true">
        <path
          d="M9 11.5C9 8.462 11.462 6 14.5 6h3C20.538 6 23 8.462 23 11.5V16c0 5.523-4.477 10-10 10h-1a3 3 0 0 1-3-3V11.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M11 10 8.5 8 7 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M21 10 23.5 8 25 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="13" cy="15" r="1.2" fill="currentColor" />
        <circle cx="19" cy="15" r="1.2" fill="currentColor" />
        <path d="M13 20c1.1 1.1 4.9 1.1 6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const navItems = [
  { label: 'Video', href: '#video' },
  { label: 'Captura', href: '#capture' },
  { label: 'Precios', href: '#pricing' },
] as const;

export function PandaHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-subtle/20 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 md:px-8 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <PandaMark />
          <span className="text-base font-bold tracking-tight text-text-main sm:text-lg">{DNA.copy.productName}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-text-muted transition hover:text-text-main"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-border-subtle/30 px-3.5 text-sm font-semibold text-text-main transition hover:bg-surface-bump/80 sm:px-4"
        >
          Ver oferta
        </a>
      </div>
    </header>
  );
}

export default PandaHeader;
