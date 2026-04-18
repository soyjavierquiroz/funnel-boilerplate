import { PandaHeader } from './PandaHeader';
import { PandaHero } from './PandaHero';
import { PandaInsights } from './PandaInsights';
import { PandaTestimonials } from './PandaTestimonials';
import { PandaTrustLogos } from './PandaTrustLogos';

export function PandaTheme() {
  return (
    <div className="theme-panda relative min-h-screen overflow-x-hidden bg-[#04050c] text-white font-sans">
      <PandaHeader />
      <PandaHero />
      <PandaTrustLogos />
      <PandaTestimonials />
      <PandaInsights />
    </div>
  );
}

export default PandaTheme;
