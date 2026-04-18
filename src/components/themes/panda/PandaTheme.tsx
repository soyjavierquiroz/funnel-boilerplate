import funnelConfig from '../../../core/config/funnel.config';
import { PandaBentoGrid } from './PandaBentoGrid';
import { PandaFeatures, pandaFeatureIcons } from './PandaFeatures';
import { PandaFooter } from './PandaFooter';
import { PandaHero } from './PandaHero';

const pandaFeatures = [
  {
    title: 'Player pages that stay calm under pressure',
    description:
      'A large-format video canvas, measured spacing, and fewer competing signals keep the session focused on the story.',
    icon: pandaFeatureIcons.workflow,
  },
  {
    title: 'Playback analytics without visual noise',
    description:
      'The interface keeps reporting close at hand while the page still feels editorial instead of dashboard-heavy.',
    icon: pandaFeatureIcons.analytics,
  },
  {
    title: 'Secure checkout transitions',
    description:
      'Every CTA and next step can be styled to feel native while maintaining the trust cues people expect.',
    icon: pandaFeatureIcons.security,
  },
  {
    title: 'Faster discovery for your media library',
    description:
      'Search, sorting, and taxonomy blocks slot into the system without breaking the quieter brand language.',
    icon: pandaFeatureIcons.search,
  },
  {
    title: 'Shared workspace for marketing and ops',
    description:
      'The components are designed to look credible in a launch page and equally useful in an internal content stack.',
    icon: pandaFeatureIcons.collaboration,
  },
  {
    title: 'A reusable visual language',
    description:
      'Rounded geometry, thin cyan accents, and soft glass depth can now coexist with the old Expert funnel.',
    icon: pandaFeatureIcons.library,
  },
];

const pandaTestimonials = [
  {
    quote:
      'The new hero feels more like a product page than a sales page. The video takes the lead and the rest of the interface supports it.',
    name: 'Camila Rojas',
    role: 'Growth Lead, Studio Norte',
  },
  {
    quote:
      'It looks premium on first load, but the important part is that the CTA rhythm stayed clear across desktop and mobile.',
    name: 'Diego Martinez',
    role: 'Performance Director, Atlas Media',
  },
  {
    quote:
      'The glass cards finally feel restrained. We kept proof visible without turning the page into a wall of widgets.',
    name: 'Paula Serrano',
    role: 'Brand Strategist, Casa Linear',
  },
  {
    quote:
      'This gives us a second visual DNA in the library without sacrificing the conversion-focused Expert stack we already use.',
    name: 'Martin Vega',
    role: 'Product Marketing, Horizon Labs',
  },
];

const pandaFooterGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Video Hosting', href: '#demo' },
      { label: 'Player Branding', href: '#features' },
      { label: 'Conversion Pages', href: '#stories' },
      { label: 'Analytics', href: '#footer' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Course Creators', href: '#features' },
      { label: 'Agencies', href: '#stories' },
      { label: 'Internal Enablement', href: '#footer' },
      { label: 'Launch Teams', href: '#demo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#features' },
      { label: 'Status', href: '#footer' },
      { label: 'Help Center', href: '#footer' },
      { label: 'Brand Assets', href: '#footer' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#footer' },
      { label: 'Privacy', href: '#footer' },
      { label: 'Terms', href: '#footer' },
      { label: 'Contact', href: `https://${funnelConfig.domain}` },
    ],
  },
];

export function PandaTheme() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-page text-text-main">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[46rem]"
          style={{
            background:
              'radial-gradient(circle at top, rgb(var(--color-accent) / 0.18), transparent 48%), radial-gradient(circle at 80% 10%, rgb(var(--color-primary) / 0.08), transparent 24%)',
          }}
        />

        <PandaHero
          brandName={funnelConfig.brandName}
          eyebrow="Panda Visual System"
          headline="A quieter video funnel with more product confidence and less performance theater."
          description={`A single Panda-style showcase page for ${funnelConfig.domain}, built to highlight large video, calmer hierarchy, and a more corporate conversion rhythm.`}
          ctaLabel="Explore the system"
          ctaHref="#features"
          secondaryLabel="Watch the player"
          secondaryHref="#demo"
          video={funnelConfig.media.heroVideo}
          highlights={['Rounded video canvas', 'Thin cyan accents', 'Multi-style component library']}
        />

        <PandaFeatures
          className="relative z-10"
          eyebrow="Why Panda"
          title="The system now has a second visual DNA built for a cleaner, lighter product story."
          description="These components are meant to feel calm, software-native, and reusable across pages where the video and the interface need to share authority."
          features={pandaFeatures}
        />

        <PandaBentoGrid
          className="relative z-10"
          eyebrow="Social proof"
          title="Refined proof blocks that support the story instead of hijacking it."
          description="The Panda testimonials live inside soft glass surfaces with more whitespace, less contrast noise, and typography that reads like product validation."
          testimonials={pandaTestimonials}
        />

        <PandaFooter
          className="relative z-10"
          brandName={funnelConfig.brandName}
          domain={funnelConfig.domain}
          summary="A corporate footer designed to close the page with product depth, navigation density, and enough confidence to feel production-ready."
          linkGroups={pandaFooterGroups}
        />
      </div>
    </main>
  );
}

export default PandaTheme;
