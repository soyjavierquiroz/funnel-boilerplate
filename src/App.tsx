import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import funnelConfig from './core/config/funnel.config';
import analytics from './core/services/analytics';
import { ExpertTheme } from './components/themes/expert/ExpertTheme';
import { PandaTheme } from './components/themes/panda/PandaTheme';

type ShowroomTheme = 'lobby' | 'expert' | 'panda';
type ActiveDocumentTheme = 'theme-showroom' | 'theme-expert' | 'theme-panda';

interface ThemeCard {
  id: Exclude<ShowroomTheme, 'lobby'>;
  label: string;
  title: string;
  description: string;
  accentClassName: string;
}

const themeCards: ThemeCard[] = [
  {
    id: 'expert',
    label: 'Ver Tema Expert',
    title: 'Expert',
    description: 'Conversión frontal, contraste alto, VSL dominante y una narrativa de oferta más agresiva.',
    accentClassName: 'from-primary/35 via-primary/10 to-transparent',
  },
  {
    id: 'panda',
    label: 'Ver Tema Panda',
    title: 'Panda',
    description: 'Jerarquía más sobria, aire editorial, ritmo corporativo y foco visual en el canvas del video.',
    accentClassName: 'from-accent/35 via-accent/10 to-transparent',
  },
];

function resolveDocumentTheme(currentTheme: ShowroomTheme): ActiveDocumentTheme {
  if (currentTheme === 'expert') {
    return 'theme-expert';
  }

  if (currentTheme === 'panda') {
    return 'theme-panda';
  }

  return 'theme-showroom';
}

function Lobby({ onSelectTheme }: { onSelectTheme: (theme: Exclude<ShowroomTheme, 'lobby'>) => void }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-page text-text-main">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(34,211,238,0.14),transparent_20%)]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Arquitectura de Showroom
          </p>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Boilerplate UI Showcase
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Un lobby editorial para navegar temas aislados. El core vive fuera de la piel visual y cada entrada de
              showroom consume la misma base compartida.
            </p>
          </div>
        </div>

        <div className="grid gap-5 pt-14 lg:grid-cols-2">
          {themeCards.map((themeCard) => (
            <button
              key={themeCard.id}
              type="button"
              onClick={() => onSelectTheme(themeCard.id)}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-left shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${themeCard.accentClassName} opacity-90 transition duration-300 group-hover:scale-[1.02]`}
              />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Theme Entry</p>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      {themeCard.title}
                    </h2>
                    <p className="max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                      {themeCard.description}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-base font-semibold text-white">
                  {themeCard.label}
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

function App() {
  const [currentTheme, setCurrentTheme] = useState<ShowroomTheme>('lobby');

  useEffect(() => {
    const documentTheme = resolveDocumentTheme(currentTheme);
    const nextTitle =
      currentTheme === 'lobby'
        ? 'Boilerplate UI Showcase'
        : `${funnelConfig.brandName} - ${currentTheme === 'expert' ? 'Expert Theme' : 'Panda Theme'}`;

    document.documentElement.setAttribute('data-theme', documentTheme);
    document.title = nextTitle;

    void analytics.trackEvent('ShowroomView', {
      showroom_theme: currentTheme,
      page_title: nextTitle,
      brand_name: funnelConfig.brandName,
      page_path: window.location.pathname,
      page_url: window.location.href,
    });
  }, [currentTheme]);

  return (
    <>
      {currentTheme === 'lobby' ? <Lobby onSelectTheme={setCurrentTheme} /> : null}
      {currentTheme === 'expert' ? <ExpertTheme /> : null}
      {currentTheme === 'panda' ? <PandaTheme /> : null}

      {currentTheme !== 'lobby' ? (
        <button
          type="button"
          onClick={() => setCurrentTheme('lobby')}
          className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-slate-950/88 px-5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Lobby
        </button>
      ) : null}
    </>
  );
}

export default App;
