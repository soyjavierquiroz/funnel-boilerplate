import { Volume2 } from 'lucide-react';

interface VslOverlayProps {
  onUnmute: () => void;
  visible?: boolean;
}

export function VslOverlay({ onUnmute, visible = true }: VslOverlayProps) {
  return (
    <div
      aria-hidden={!visible}
      className={[
        'absolute inset-0 z-50 flex items-center justify-center bg-black/30 transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <button
        type="button"
        onClick={onUnmute}
        aria-label="Activar sonido"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-6 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md transition-all motion-safe:animate-pulse hover:bg-black/80 md:text-base"
      >
        <Volume2 className="h-4 w-4 motion-safe:animate-pulse md:h-5 md:w-5" />
        <span>Haz clic para escuchar</span>
      </button>
    </div>
  );
}
