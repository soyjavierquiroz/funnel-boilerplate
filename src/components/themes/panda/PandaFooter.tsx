import { ArrowUpRight } from 'lucide-react';
import { SectionWrapper } from '../../common/layout/SectionWrapper';

export interface PandaFooterLinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface PandaFooterProps {
  brandName: string;
  domain: string;
  summary: string;
  linkGroups: PandaFooterLinkGroup[];
  className?: string;
}

export function PandaFooter({ brandName, domain, summary, linkGroups, className }: PandaFooterProps) {
  return (
    <SectionWrapper as="footer" variant="display" spacing="lg" className={className}>
      <div id="footer" className="glass-surface overflow-hidden rounded-[2.2rem]">
        <div className="grid gap-10 border-b border-border-subtle/35 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-10 lg:py-10">
          <div className="max-w-md space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">Enterprise Footer</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-text-main sm:text-4xl">{brandName}</h2>
            <p className="text-base leading-7 text-text-muted">{summary}</p>
            <a
              href={`https://${domain}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-text-main transition hover:text-accent"
            >
              Visit {domain}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {linkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text-main">{group.title}</h3>
                <ul className="space-y-3 text-sm text-text-muted">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition hover:text-accent">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6 py-5 text-sm text-text-muted sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>{brandName} system showcase for {domain}.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Privacy-first analytics</span>
            <span>99.9% playback uptime target</span>
            <span>Support in Spanish and English</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default PandaFooter;
