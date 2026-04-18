import funnelConfig from '../../../core/config/funnel.config';
import { AdvancedCaptureForm } from '../../common/forms/AdvancedCaptureForm';
import { SectionWrapper } from '../../common/layout/SectionWrapper';
import { BentoGrid } from './BentoGrid';
import { BonusStack } from './BonusStack';
import { MainVSL } from './MainVSL';

export function ExpertTheme() {
  const productCount = Object.keys(funnelConfig.pricing.products).length;

  return (
    <main className="min-h-screen overflow-x-hidden bg-page text-text-main">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[48rem]"
          style={{
            background:
              'radial-gradient(circle at top, rgb(var(--color-primary) / 0.2), transparent 34%), radial-gradient(circle at 82% 16%, rgb(var(--color-accent) / 0.12), transparent 24%)',
          }}
        />

        <MainVSL
          className="relative z-10"
          content={funnelConfig.content.mainVsl}
          video={funnelConfig.media.heroVideo}
        />

        <BentoGrid
          className="relative z-10"
          brandName={funnelConfig.brandName}
          domain={funnelConfig.domain}
          productCount={productCount}
        />

        <BonusStack className="relative z-10" content={funnelConfig.content.bonusStack} />

        {funnelConfig.forms.capture.enabled ? (
          <SectionWrapper id="pricing" variant="display" spacing="lg" className="relative z-10">
            <AdvancedCaptureForm />
          </SectionWrapper>
        ) : null}
      </div>
    </main>
  );
}

export default ExpertTheme;
