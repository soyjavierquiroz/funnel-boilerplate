import { Globe2, LayoutGrid, Sparkles, Zap } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ');
}

export interface BentoGridProps {
  brandName: string;
  domain: string;
  productCount: number;
  className?: string;
}

const tileBaseClassName =
  'glass-surface relative overflow-hidden rounded-[1.75rem] p-6 sm:p-7';

export function BentoGrid({ brandName, domain, productCount, className }: BentoGridProps) {
  return (
    <SectionWrapper variant="display" spacing="lg" className={className}>
      <div className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            <LayoutGrid className="h-4 w-4" />
            Panda System Grid
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-text-main sm:text-4xl lg:text-5xl">
            Un catálogo visual con jerarquía clara, brillo controlado y ritmo de conversión.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
            Este bloque reúne la identidad Panda Blue en módulos que explican la oferta, el stack técnico y la sensación general del funnel sin romper la lectura.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className={cx(tileBaseClassName, 'min-h-[22rem]')}>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(0,242,255,0.25),transparent_62%)]"
            />

            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Visual Thesis</p>
                <h3 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-text-main sm:text-4xl">
                  {brandName} ahora se presenta como una superficie premium, oscura y eléctrica.
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-text-muted sm:text-base">
                  Fondo ultra oscuro, azul de alta energía y destellos cian para separar prioridades sin saturar la interfaz.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.25rem] border border-primary/20 bg-primary/12 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">Primary</p>
                  <p className="mt-3 text-2xl font-semibold text-text-main">#0011ff</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-secondary p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Secondary</p>
                  <p className="mt-3 text-2xl font-semibold text-text-main">#0a0b1e</p>
                </div>
                <div className="rounded-[1.25rem] border border-accent/25 bg-accent/10 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Accent</p>
                  <p className="mt-3 text-2xl font-semibold text-text-main">#00f2ff</p>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className={tileBaseClassName}>
              <div className="space-y-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Dominio</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-text-main">{domain}</h3>
                </div>
                <p className="text-sm leading-6 text-text-muted">
                  La interfaz quedó preparada para verse consistente cuando la montemos en producción.
                </p>
              </div>
            </article>

            <article className={tileBaseClassName}>
              <div className="space-y-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Oferta Activa</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-text-main">
                    {productCount} productos conectados
                  </h3>
                </div>
                <p className="text-sm leading-6 text-text-muted">
                  El grid acompaña VSL, bonos y pricing sin pelear por atención con el CTA principal.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className={tileBaseClassName}>
            <div className="space-y-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Globe2 className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text-main">Geo-pricing real</h3>
              <p className="text-sm leading-6 text-text-muted">
                El precio se adapta por país para que el valor percibido siga siendo creíble y local.
              </p>
            </div>
          </article>

          <article className={tileBaseClassName}>
            <div className="space-y-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text-main">Glows con propósito</h3>
              <p className="text-sm leading-6 text-text-muted">
                El cian se reserva para foco, precio y separación visual; no invade toda la página.
              </p>
            </div>
          </article>

          <article className={tileBaseClassName}>
            <div className="space-y-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <LayoutGrid className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text-main">Escala modular</h3>
              <p className="text-sm leading-6 text-text-muted">
                Cada sección cumple una sola función: presentar, profundizar, apilar valor y cerrar.
              </p>
            </div>
          </article>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default BentoGrid;
