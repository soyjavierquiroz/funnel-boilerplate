import { DNA } from '../../../dna.config';
import { ExpertCtaButton } from './ExpertCtaButton';

export function ExpertSalesLetter() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[800px]">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl md:p-12">
          <div
            className="absolute left-0 top-0 h-2 w-full"
            style={{ backgroundColor: 'rgb(var(--color-brand-accent))' }}
          ></div>

          <h2
            className="mb-8 text-center text-3xl font-black leading-tight md:text-4xl"
            style={{ color: 'rgb(var(--color-text-main))' }}
          >
            {DNA.copy.salesLetter.title}
          </h2>

          <div
            className="space-y-6 text-lg leading-relaxed md:text-xl"
            style={{ color: 'rgb(var(--color-text-muted))' }}
          >
            {DNA.copy.salesLetter.part1.map((paragraph, index) => (
              <p key={`p1-${index}`}>{paragraph}</p>
            ))}

            <p
              className="my-10 rounded-2xl p-6 text-center text-2xl font-black md:text-3xl"
              style={{
                color: 'rgb(var(--color-brand-primary))',
                backgroundColor: 'rgba(var(--color-brand-primary), 0.05)',
              }}
            >
              {DNA.copy.salesLetter.highlight}
            </p>

            {DNA.copy.salesLetter.part2.map((paragraph, index) => (
              <p key={`p2-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="mb-10 mt-12">
            <img
              src={DNA.copy.salesLetter.image}
              alt="Pame Flores"
              className="h-auto w-full rounded-2xl border-4 border-white shadow-lg"
            />
          </div>

          <div className="mt-10 text-center">
            <div className="mx-auto mb-4 max-w-md">
              <ExpertCtaButton
                href="#checkout"
                label={DNA.copy.salesLetter.ctaText}
                fullWidth={true}
              />
            </div>
            <div
              className="font-mono text-sm font-bold uppercase tracking-wide"
              style={{ color: 'rgb(var(--color-text-muted))' }}
            >
              {DNA.copy.specialOfferGuarantee}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertSalesLetter;
