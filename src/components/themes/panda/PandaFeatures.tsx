import {
  Gauge,
  Layers3,
  type LucideIcon,
  LockKeyhole,
  MessagesSquare,
  ScanSearch,
  Workflow,
} from 'lucide-react';
import { SectionWrapper } from '../../common/layout/SectionWrapper';

type FeatureIcon = LucideIcon;

export interface PandaFeatureItem {
  title: string;
  description: string;
  icon: FeatureIcon;
}

export interface PandaFeaturesProps {
  eyebrow: string;
  title: string;
  description: string;
  features: PandaFeatureItem[];
  className?: string;
}

export const pandaFeatureIcons = {
  workflow: Workflow,
  analytics: Gauge,
  security: LockKeyhole,
  search: ScanSearch,
  collaboration: MessagesSquare,
  library: Layers3,
} as const;

export function PandaFeatures({ eyebrow, title, description, features, className }: PandaFeaturesProps) {
  return (
    <SectionWrapper id="features" variant="display" spacing="lg" className={className}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)]">
        <div className="max-w-lg space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-text-main sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="text-base leading-7 text-text-muted sm:text-lg">{description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-[1.7rem] border border-border-subtle/45 bg-surface/72 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.45} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-text-main">{feature.title}</h3>
                    <p className="text-sm leading-6 text-text-muted sm:text-base">{feature.description}</p>
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

export default PandaFeatures;
