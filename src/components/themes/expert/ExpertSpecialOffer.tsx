import { CheckCircle2 } from 'lucide-react';
import { DNA } from '../../../dna.config';
import { ExpertCtaButton } from './ExpertCtaButton';

export function ExpertSpecialOffer() {
  return (
    <section className="bg-brand-primary px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl border-none shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col lg:flex-row">
          
          <div className="flex flex-1 flex-col justify-center bg-brand-primary p-8 md:p-12 lg:p-16">
            
            <div 
              className="mb-4 text-xl font-black uppercase tracking-widest md:text-2xl"
              style={{ color: 'rgb(var(--color-highlight))' }}
            >
              {DNA.copy.specialOfferTitle}
            </div>

            <p 
              className="mb-8 text-xl leading-relaxed text-white md:text-2xl"
              dangerouslySetInnerHTML={{ __html: DNA.copy.specialOfferSubtitle }}
            />

            <ul className="mb-10 space-y-4">
              {DNA.copy.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-lg text-white">
                  <CheckCircle2 
                    className="mt-0.5 h-6 w-6 shrink-0" 
                    style={{ color: 'rgb(var(--color-highlight))' }} 
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mb-8">
              <span className="mb-1 block text-lg text-gray-300 line-through">
                {DNA.copy.offerSummary.originalPriceLabel} US${DNA.prices.regular}
              </span>
              <div className="text-3xl font-bold text-white">
                {DNA.copy.offerSummary.todayOnlyLabel}{' '}
                <span className="text-4xl font-black" style={{ color: 'rgb(var(--color-highlight))' }}>
                  US${DNA.prices.main}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <ExpertCtaButton
                href="#checkout"
                label={DNA.copy.ctaText}
                fullWidth={false}
              />
            </div>

            <div className="font-mono text-sm uppercase tracking-wide text-gray-300">
              {DNA.copy.specialOfferGuarantee}
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center bg-brand-primary p-8 lg:p-16">
            <div className="flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-transparent shadow-2xl">
              {DNA.copy.specialOfferImage ? (
                <img
                  src={DNA.copy.specialOfferImage}
                  alt={DNA.copy.productName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-white/50">[{DNA.copy.productName} Image]</span>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
