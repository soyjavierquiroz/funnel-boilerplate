import { useState, useEffect } from 'react';
import { Check, Clock } from 'lucide-react';
import { DNA } from '../../../dna.config';
import { ExpertCtaButton } from './ExpertCtaButton';
import type { ExpertBonusItem } from './expertContent';

interface ExpertBonusStackProps {
  bonuses: ExpertBonusItem[];
}

function formatUsd(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function ExpertBonusStack({ bonuses }: ExpertBonusStackProps) {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const offerTitle = DNA.copy.offerSummary.title.replace('{productName}', DNA.copy.productName);
  const ctaLabel = DNA.copy.offerSummary.ctaLabel.replace('{productName}', DNA.copy.productName);
  const ctaSubLabel = DNA.copy.offerSummary.ctaSubLabel.replace('{price}', DNA.prices.main);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1040px] rounded-[26px] bg-surface px-4 py-8 shadow-[0_26px_70px_rgba(17,17,17,0.08)] sm:px-8">
        
        <div className="text-center mb-8">
          <p className="expert-headline text-[1.35rem] font-semibold italic text-brand-accent sm:text-[1.65rem]">
            {DNA.copy.fastActionBonus.timeLimit}
          </p>
          <h2 className="expert-headline mt-2 text-[2rem] font-black uppercase leading-none text-text-main sm:text-[3rem]">
            {offerTitle}
          </h2>
        </div>

        <div 
          className="mb-8 mx-auto max-w-xl rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-center gap-4 border-2 shadow-sm animate-pulse"
          style={{ 
            borderColor: 'rgba(var(--color-brand-primary), 0.2)',
            backgroundColor: 'rgba(var(--color-brand-primary), 0.02)'
          }}
        >
          <div className="flex items-center gap-2 font-bold text-lg" style={{ color: 'rgb(var(--color-brand-primary))' }}>
            <Clock className="h-6 w-6 shrink-0" />
            <span>{DNA.copy.offerSummary.countdownLabel}</span>
          </div>
          <div 
            className="font-mono text-3xl font-black px-4 py-1 rounded-xl text-white tracking-widest shadow-inner"
            style={{ backgroundColor: 'rgb(var(--color-brand-primary))' }}
          >
            {formattedTime}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[18px] border border-surface-bump bg-surface-bump px-5 py-6 sm:px-8 sm:py-10">
          <img
            src={DNA.assets.bundleWideImage}
            alt={DNA.copy.offerSummary.bundleImageAlt}
            className="mx-auto w-full max-w-[760px]"
            loading="lazy"
          />

          <div className="mt-8 grid gap-4 rounded-[16px] bg-surface px-5 py-5 text-center shadow-[0_18px_50px_rgba(17,17,17,0.08)] sm:grid-cols-3 sm:text-left">
            <div>
              <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">{DNA.copy.offerSummary.totalValueLabel}</p>
              <p className="expert-headline mt-2 text-[2rem] font-extrabold text-brand-primary sm:text-[2.35rem]">
                <span className="line-through">${DNA.prices.totalValue}</span>
              </p>
            </div>
            <div>
              <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">{DNA.copy.offerSummary.todayPriceLabel}</p>
              <p className="expert-headline mt-2 text-[2rem] font-extrabold text-text-main sm:text-[2.35rem]">${DNA.prices.main}</p>
            </div>
            <div>
              <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">{DNA.copy.offerSummary.regularPriceLabel}</p>
              <p className="expert-headline mt-2 text-[1.3rem] font-extrabold leading-tight text-text-main sm:text-[1.55rem]">
                ${DNA.prices.regularPrice}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-5">
          {bonuses.map((bonus) => (
            <article
              key={bonus.id}
              className="grid gap-5 rounded-[18px] border border-border-subtle/20 bg-surface-muted p-5 shadow-[0_14px_30px_rgba(17,17,17,0.04)] sm:grid-cols-[220px_minmax(0,1fr)_145px] sm:items-center"
            >
              <div className="rounded-[16px] bg-surface p-4 shadow-[0_12px_24px_rgba(17,17,17,0.06)]">
                <img src={bonus.imageUrl} alt={bonus.imageAlt} className="mx-auto aspect-[4/3] w-full object-contain" loading="lazy" />
              </div>

              <div>
                <p className="expert-body inline-flex items-center gap-2 rounded-full bg-brand-accent/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">
                  <Check className="h-3.5 w-3.5" />
                  {DNA.copy.offerSummary.includedBadgeLabel}
                </p>
                <h3 className="expert-headline mt-3 text-[1.45rem] font-black leading-tight text-text-main sm:text-[1.7rem]">
                  {bonus.title}
                </h3>
                <p className="expert-body mt-3 text-[1.03rem] leading-7 text-text-main sm:text-[1.08rem]">{bonus.description}</p>
              </div>

              <div className="text-left sm:text-right">
                <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-brand-accent">{DNA.copy.offerSummary.realValueLabel}</p>
                <p className="expert-headline mt-2 text-[1.5rem] font-extrabold text-brand-primary sm:text-[1.8rem]">
                  {formatUsd(bonus.valueUSD)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-[680px]">
          <ExpertCtaButton
            href="#checkout"
            label={ctaLabel}
            subLabel={ctaSubLabel}
            fullWidth
          />
        </div>
      </div>
    </section>
  );
}

export default ExpertBonusStack;
