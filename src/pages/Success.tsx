import type { CSSProperties } from 'react';
import { DNA, resolveDnaThemeStyle } from '../dna.config';

export function Success() {
  return (
    <div
      className="theme-expert min-h-screen bg-page text-text-main"
      style={resolveDnaThemeStyle() as CSSProperties}
    >
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-[720px] rounded-[32px] border border-border-subtle/20 bg-surface px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
          <p className="expert-body text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            {DNA.copy.successPage.eyebrow}
          </p>
          <h1 className="expert-headline mt-4 text-[2.5rem] leading-[0.95] text-text-main sm:text-[3.5rem]">
            {DNA.copy.successPage.title}
          </h1>
          <p className="expert-body mx-auto mt-4 max-w-[520px] text-base leading-7 text-text-muted">
            {DNA.copy.successPage.description}
          </p>
          <p className="expert-body mt-3 text-sm leading-6 text-text-subtle">{DNA.copy.productName}</p>
          <a
            href="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-6 text-sm font-semibold text-text-inverse transition hover:opacity-90"
          >
            {DNA.copy.successPage.backLabel}
          </a>
        </div>
      </section>
    </div>
  );
}

export default Success;
