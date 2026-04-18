import { Gift, Sparkles } from 'lucide-react';
import { useMemo } from 'react';
import type { BonusStackConfig } from '../../../config/funnel.config';
import { useVisitor } from '../../../context/VisitorContext';
import { useHotmartPrices } from '../../../hooks/useHotmartPrices';
import { getFriendlyCurrencyName } from '../../../utils/currency';
import { SectionWrapper } from '../SectionWrapper';

function formatCurrencyAmount(amount: number, currencyCode: string) {
  try {
    return new Intl.NumberFormat('es-419', {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: amount >= 1000 ? 0 : 2,
    }).format(amount);
  } catch {
    return `${amount.toFixed(2)} ${currencyCode}`;
  }
}

export interface BonusStackProps {
  content: BonusStackConfig;
  className?: string;
}

export function BonusStack({ content, className }: BonusStackProps) {
  const { visitorData } = useVisitor();
  const countryCode = visitorData?.country_code?.toUpperCase() ?? 'US';
  const currencyCode = visitorData?.currency?.toUpperCase() ?? 'USD';
  const { product, scrapedData, status } = useHotmartPrices(content.pricingSourceProductKey);

  const localizedReferencePrice = scrapedData?.[countryCode];
  const canEstimateLocalizedBonusValue =
    status === 'ready' &&
    Number.isFinite(Number(localizedReferencePrice?.total)) &&
    Number(localizedReferencePrice?.total) > 0 &&
    product.basePriceUSD > 0;
  const localizationRate = useMemo(() => {
    const localizedTotal = Number(localizedReferencePrice?.total);

    if (status !== 'ready' || !Number.isFinite(localizedTotal) || localizedTotal <= 0 || product.basePriceUSD <= 0) {
      return 1;
    }

    return localizedTotal / product.basePriceUSD;
  }, [localizedReferencePrice?.total, product.basePriceUSD, status]);

  const localizedCurrencyName = getFriendlyCurrencyName(currencyCode);

  return (
    <SectionWrapper variant="display" spacing="lg" className={className}>
      <div className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-border-subtle/20 bg-surface/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
            <Sparkles className="h-4 w-4" />
            {content.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-text-main sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-text-muted sm:text-lg">{content.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.bonuses.map((bonus) => {
            const localizedValue = bonus.valueUSD * localizationRate;

            return (
              <article key={bonus.id} className="glass-surface rounded-[1.5rem] p-6 sm:p-7">
                <div className="space-y-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/14 text-accent">
                    <Gift className="h-5 w-5" />
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">{bonus.eyebrow}</p>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text-main">{bonus.title}</h3>
                    <p className="text-sm leading-6 text-text-muted sm:text-base">{bonus.description}</p>
                  </div>

                  <div className="space-y-2 rounded-[1.25rem] border border-border-subtle/10 bg-page/40 p-4">
                    <p className="text-sm text-text-muted line-through">{formatCurrencyAmount(bonus.valueUSD, 'USD')}</p>
                    <p className="text-2xl font-semibold tracking-[-0.03em] text-accent sm:text-3xl">
                      {canEstimateLocalizedBonusValue
                        ? formatCurrencyAmount(localizedValue, currencyCode)
                        : formatCurrencyAmount(bonus.valueUSD, 'USD')}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
                      {canEstimateLocalizedBonusValue
                        ? `Valor estimado en ${localizedCurrencyName}`
                        : 'Valor base referencial en USD'}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default BonusStack;
