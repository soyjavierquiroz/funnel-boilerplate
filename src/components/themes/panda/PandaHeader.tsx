function PandaMark() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
      <svg viewBox="0 0 32 32" className="h-5 w-5 text-white" fill="none" aria-hidden="true">
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

const navItems = ['Productos', 'Precios', 'Compañía'];

export function PandaHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#04050c]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <PandaMark />
          <span className="text-lg font-bold tracking-tight text-white">PandaVideo</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-400 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/10 px-4 text-sm font-semibold text-white transition hover:bg-white/[0.04]"
        >
          Entrar
        </a>
      </div>
    </header>
  );
}

export default PandaHeader;
