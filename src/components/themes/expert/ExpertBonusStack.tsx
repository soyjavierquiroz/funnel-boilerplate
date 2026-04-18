import { Check } from 'lucide-react';
import { pricingProductKeys } from '../../../core/config/funnel.config';
import { useHotmartPrices } from '../../../core/hooks/useHotmartPrices';
import { ExpertCtaButton } from './ExpertCtaButton';
import type { ExpertBonusItem } from './expertContent';
import { expertBrandAssets } from './expertContent';

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
  const { product } = useHotmartPrices(pricingProductKeys.ofertaPrincipal);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-[1040px] rounded-[26px] bg-white px-4 py-8 shadow-[0_26px_70px_rgba(17,17,17,0.08)] sm:px-8">
        <div className="text-center">
          <p className="expert-headline text-[1.35rem] font-semibold italic text-[#4875b9] sm:text-[1.65rem]">
            Let Me Show You EVERYTHING
          </p>
          <h2 className="expert-headline mt-2 text-[2rem] font-black uppercase leading-none tracking-[-0.05em] text-[#2d2d2d] sm:text-[3rem]">
            You Get When You Order "Expert Secrets" Today!
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-[18px] border border-[#eae5d0] bg-[#fcf8e3] px-5 py-6 sm:px-8 sm:py-10">
          <img
            src={expertBrandAssets.bundleWideUrl}
            alt="Expert Secrets bundle with bonuses"
            className="mx-auto w-full max-w-[760px]"
            loading="lazy"
          />

          <div className="mt-8 grid gap-4 rounded-[16px] bg-white px-5 py-5 text-center shadow-[0_18px_50px_rgba(17,17,17,0.08)] sm:grid-cols-3 sm:text-left">
            <div>
              <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-[#4875b9]">Total Value</p>
              <p className="expert-headline mt-2 text-[2rem] font-extrabold text-[#e01921] sm:text-[2.35rem]">
                <span className="line-through">{formatUsd(product.basePriceUSD)}</span>
              </p>
            </div>
            <div>
              <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-[#4875b9]">Today</p>
              <p className="expert-headline mt-2 text-[2rem] font-extrabold text-[#2d2d2d] sm:text-[2.35rem]">FREE!</p>
            </div>
            <div>
              <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-[#4875b9]">Just Cover</p>
              <p className="expert-headline mt-2 text-[1.3rem] font-extrabold leading-tight text-[#2d2d2d] sm:text-[1.55rem]">
                Shipping On The Book
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-5">
          {bonuses.map((bonus) => (
            <article
              key={bonus.id}
              className="grid gap-5 rounded-[18px] border border-[#edf1f6] bg-[#fbfdff] p-5 shadow-[0_14px_30px_rgba(17,17,17,0.04)] sm:grid-cols-[220px_minmax(0,1fr)_145px] sm:items-center"
            >
              <div className="rounded-[16px] bg-white p-4 shadow-[0_12px_24px_rgba(17,17,17,0.06)]">
                <img src={bonus.imageUrl} alt={bonus.imageAlt} className="mx-auto aspect-[4/3] w-full object-contain" loading="lazy" />
              </div>

              <div>
                <p className="expert-body inline-flex items-center gap-2 rounded-full bg-[#e7f5ff] px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#4875b9]">
                  <Check className="h-3.5 w-3.5" />
                  Included Free
                </p>
                <h3 className="expert-headline mt-3 text-[1.45rem] font-black leading-tight text-[#2d2d2d] sm:text-[1.7rem]">
                  {bonus.title}
                </h3>
                <p className="expert-body mt-3 text-[1.03rem] leading-7 text-[#222] sm:text-[1.08rem]">{bonus.description}</p>
              </div>

              <div className="text-left sm:text-right">
                <p className="expert-body text-xs font-bold uppercase tracking-[0.24em] text-[#4875b9]">Value</p>
                <p className="expert-headline mt-2 text-[1.5rem] font-extrabold text-[#e01921] sm:text-[1.8rem]">
                  {formatUsd(bonus.valueUSD)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-[680px]">
          <ExpertCtaButton
            href="#checkout"
            label="Yes! Reserve My Free Copy Now!"
            subLabel="You pay only $9.95 for shipping and handling in US ($19.95 intl)"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
}

export default ExpertBonusStack;
