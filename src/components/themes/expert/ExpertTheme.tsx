import { useCallback, useState, type CSSProperties } from 'react';
import { DNA, resolveDnaThemeStyle } from '../../../dna.config';
import funnelConfig from '../../../core/config/funnel.config';
import { ExpertCtaButton } from './ExpertCtaButton';
import { ExpertConfidenceBooster } from './ExpertConfidenceBooster';
import { ExpertFAQ } from './ExpertFAQ';
import { ExpertHero } from './ExpertHero';
import { ExpertOfferBreakdown } from './ExpertOfferBreakdown';
import { ExpertOfferStack } from './ExpertOfferStack';
import { ExpertPainPoints } from './ExpertPainPoints';
import { ExpertProductPresentation } from './ExpertProductPresentation';
import { ExpertSalesLetter } from './ExpertSalesLetter';
import { ExpertSpecialOffer } from './ExpertSpecialOffer';
import { ExpertTestimonials } from './ExpertTestimonials';

export function ExpertTheme() {
  const revealAtSeconds = funnelConfig.media.heroVideo.revealAtSeconds ?? 292;
  const shouldRevealImmediately = !funnelConfig.media.heroVideo.enabled || revealAtSeconds <= 0;
  const [isRevealed, setIsRevealed] = useState(shouldRevealImmediately);
  const handleReveal = useCallback(() => {
    setIsRevealed(true);
  }, []);

  return (
    <div
      className="theme-expert min-h-screen bg-page text-text-main"
      style={resolveDnaThemeStyle() as CSSProperties}
    >
      <ExpertHero onReveal={handleReveal} />

      {isRevealed ? (
        <>
          <div className="pb-28">
            <ExpertSpecialOffer />
            <ExpertProductPresentation />
            <ExpertOfferBreakdown />
            <ExpertConfidenceBooster />
            <ExpertPainPoints />
            <ExpertSalesLetter />
            <ExpertFAQ />
            <ExpertOfferStack />
            <ExpertTestimonials />

            <footer className="border-t border-border-subtle/20 bg-surface px-4 py-8 text-center sm:px-6">
              <p className="expert-body text-sm font-semibold uppercase tracking-[0.12em] text-text-muted">
                {DNA.copy.productName}
              </p>
            </footer>
          </div>

          <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-border-subtle/20 bg-surface p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <div className="mx-auto flex max-w-[850px] items-center justify-between gap-4">
              <div className="hidden sm:block">
                <p className="font-bold leading-tight text-text-main">{DNA.copy.offerSummary.offerAvailableLabel}</p>
                <p className="text-sm font-semibold text-brand-primary">
                  {DNA.copy.offerSummary.specialPriceLabel.replace('{price}', DNA.prices.main)}
                </p>
              </div>
              <div className="w-full flex-1 sm:w-auto sm:flex-none">
                <ExpertCtaButton
                  href="#checkout"
                  label={DNA.copy.ctaText}
                  fullWidth
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ExpertTheme;
