import type { CSSProperties } from 'react';
import { DNA, resolveDnaThemeStyle } from '../dna.config';

export function Success() {
  return (
    <div
      className="theme-expert min-h-screen bg-page text-[#141414]"
      style={resolveDnaThemeStyle() as CSSProperties}
    >
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[720px] rounded-[32px] border border-black/10 bg-white px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <p className="expert-body text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            Confirmacion
          </p>
          <h1 className="expert-headline mt-4 text-[2.5rem] leading-[0.95] tracking-[-0.05em] text-[#141414] sm:text-[3.5rem]">
            Compra Exitosa
          </h1>
          <p className="expert-body mx-auto mt-4 max-w-[520px] text-base leading-7 text-[#4b3d53]">
            Tu registro fue recibido correctamente. Esta pagina quedo como placeholder limpio mientras terminamos de
            retirar el flujo heredado.
          </p>
          <p className="expert-body mt-3 text-sm leading-6 text-[#6c5a76]">{DNA.copy.productName}</p>
          <a
            href="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-6 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Volver al inicio
          </a>
        </div>
      </section>
    </div>
  );
}

export default Success;
