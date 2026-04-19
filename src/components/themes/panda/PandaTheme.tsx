import { PandaCaptureForm } from './PandaCaptureForm';
import { PandaHeader } from './PandaHeader';
import { PandaHero } from './PandaHero';
import { PandaInsights } from './PandaInsights';
import { PandaPricing } from './PandaPricing';
import { PandaTestimonials } from './PandaTestimonials';
import { PandaTrustLogos } from './PandaTrustLogos';

export function PandaTheme() {
  return (
    <div className="theme-panda relative min-h-screen overflow-x-hidden bg-page text-text-main font-sans">
      <PandaHeader />
      <PandaHero />
      <PandaTrustLogos />
      <PandaCaptureForm />
      <PandaInsights />
      <PandaTestimonials />
      <PandaPricing />
    </div>
  );
}

export default PandaTheme;
