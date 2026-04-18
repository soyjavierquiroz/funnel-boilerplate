import { Volume2 } from 'lucide-react';

interface VslOverlayProps {
  onUnmute: () => void;
  visible?: boolean;
}

export function VslOverlay({ onUnmute, visible = true }: VslOverlayProps) {
  return (
    <button
      type="button"
      onClick={onUnmute}
      aria-label="Activar sonido"
      aria-hidden={!visible}
      className={[
        'group absolute inset-0 cursor-pointer bg-[rgba(0,0,0,0.64)] backdrop-blur-[1.5px] transition-all duration-300',
        visible ? 'z-50 opacity-100' : '-z-10 pointer-events-none opacity-0',
      ].join(' ')}
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <span className="flex flex-col items-center gap-4 rounded-[20px] border border-white/15 bg-black/55 px-5 py-6 text-center shadow-[0_24px_55px_rgba(0,0,0,0.45)] sm:px-8 sm:py-7">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/12 text-white ring-4 ring-white/15 motion-safe:animate-pulse">
            <Volume2 className="h-8 w-8" />
          </span>
          <span className="text-lg font-bold uppercase leading-tight tracking-[0.03em] text-white motion-safe:animate-pulse md:text-xl">
            🔊 HAZ CLIC AQUÍ PARA ACTIVAR EL SONIDO
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 md:text-sm">
            Video sin distracciones
          </span>
        </span>
      </span>
    </button>
  );
}
