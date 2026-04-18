import { PandaHero } from './PandaHero';
import { PandaInsights } from './PandaInsights';
import { PandaTestimonials } from './PandaTestimonials';

export function PandaTheme() {
  return (
    <div className="theme-panda min-h-screen bg-[#04050c] text-white font-sans overflow-x-hidden">
      <PandaHero />
      <PandaTestimonials />
      <PandaInsights />
    </div>
  );
}

export default PandaTheme;
