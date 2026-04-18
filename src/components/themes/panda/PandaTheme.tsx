import { PandaHeader } from './PandaHeader';
import { PandaHero } from './PandaHero';
import { PandaInsights } from './PandaInsights';
import { PandaTestimonials } from './PandaTestimonials';
import { PandaTrustLogos } from './PandaTrustLogos';

export function PandaTheme() {
  return (
    <div className="theme-panda min-h-screen bg-[#04050c] text-white font-sans overflow-x-hidden">
      <PandaHeader />
      <PandaHero />
      <PandaTrustLogos />
      <PandaTestimonials />
      <PandaInsights />
    </div>
  );
}

export default PandaTheme;
