import { CheckCircle2 } from 'lucide-react';
import { DNA } from '../../../site/current';
import { ExpertCtaButton } from './ExpertCtaButton';

export function ExpertConfidenceBooster() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-12 text-center">
          <h2
            className="mb-6 text-3xl font-black leading-tight md:text-4xl"
            style={{ color: 'rgb(var(--color-brand-primary))' }}
          >
            {DNA.copy.confidenceBooster.headline}
          </h2>
          <div
            className="mb-8 space-y-4 text-lg md:text-xl"
            style={{ color: 'rgb(var(--color-text-main))' }}
          >
            {DNA.copy.confidenceBooster.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="inline-block w-full rounded-2xl border border-border-subtle/20 bg-surface-muted p-6 text-left shadow-sm">
            <p
              className="mb-4 text-sm font-bold uppercase tracking-wider"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {DNA.copy.confidenceBooster.includedLabel}
            </p>
            <ul className="space-y-3">
              {DNA.copy.confidenceBooster.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg font-medium"
                  style={{ color: 'rgb(var(--color-text-main))' }}
                >
                  <CheckCircle2
                    className="mt-0.5 h-6 w-6 shrink-0"
                    style={{ color: 'rgb(var(--color-brand-accent))' }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16 flex flex-col overflow-hidden rounded-3xl border border-border-subtle/20 bg-surface shadow-2xl transition-transform hover:-translate-y-1 md:flex-row">
          <div className="relative flex items-center justify-center bg-surface-muted p-6 md:w-2/5">
            <img
              src={DNA.copy.sewingBonus.image}
              alt={DNA.copy.sewingBonus.title}
              className="relative z-10 h-auto w-full rounded-2xl object-contain shadow-sm transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:w-3/5">
            <div
              className="mb-3 inline-block self-start rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest"
              style={{
                backgroundColor: 'rgb(var(--color-highlight))',
                color: 'rgb(var(--color-text-main))',
              }}
            >
              {DNA.copy.sewingBonus.eyebrow}
            </div>
            <h3
              className="mb-4 text-2xl font-black leading-tight md:text-3xl"
              style={{ color: 'rgb(var(--color-text-main))' }}
            >
              {DNA.copy.sewingBonus.title}
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {DNA.copy.sewingBonus.description}
            </p>
          </div>
        </div>

        <div
          className="rounded-3xl border-2 bg-surface-muted p-8 text-center md:p-12"
          style={{ borderColor: 'rgba(var(--color-brand-primary), 0.1)' }}
        >
          <div className="mb-6">
            <span className="mb-1 block text-xl font-medium text-text-subtle line-through">
              {DNA.copy.offerSummary.originalPriceLabel} US${DNA.prices.regular}
            </span>
            <div
              className="text-4xl font-black md:text-5xl"
              style={{ color: 'rgb(var(--color-text-main))' }}
            >
              {DNA.copy.offerSummary.todayOnlyLabel}{' '}
              <span style={{ color: 'rgb(var(--color-brand-primary))' }}>
                US${DNA.prices.main}
              </span>
            </div>
          </div>
          <div className="mx-auto mb-6 max-w-md">
            <ExpertCtaButton
              href="#checkout"
              label={DNA.copy.checkoutCtaText}
              fullWidth={true}
            />
          </div>
          <div
            className="font-mono text-sm font-bold uppercase tracking-wide"
            style={{ color: 'rgb(var(--color-text-muted))' }}
          >
            {DNA.copy.specialOfferGuarantee}
          </div>
        </div>
      </div>
    </section>
  );
}
