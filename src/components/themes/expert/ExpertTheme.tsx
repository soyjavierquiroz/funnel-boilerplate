import { ExpertBonusStack } from './ExpertBonusStack';
import { ExpertFAQ } from './ExpertFAQ';
import { ExpertHero } from './ExpertHero';
import { ExpertOfferStack } from './ExpertOfferStack';
import { ExpertOrderForm } from './ExpertOrderForm';
import { ExpertSalesLetter } from './ExpertSalesLetter';
import { ExpertTestimonials } from './ExpertTestimonials';
import {
  expertBonusItems,
  expertBrandAssets,
  expertFaqItems,
  expertLetterSections,
  expertPostscript,
  expertTestimonials,
} from './expertContent';
import { ExpertCtaButton } from './ExpertCtaButton';

export function ExpertTheme() {
  return (
    <div className="theme-expert min-h-screen bg-page text-text-main">
      <ExpertHero aside={<ExpertOrderForm />} />

      <section className="px-4 pt-8 sm:px-6">
        <div className="mx-auto max-w-[980px]">
          <img
            src={expertBrandAssets.logosUrl}
            alt="As seen on Forbes, Entrepreneur, ABC, CBS, Inc. 500, and The Profit"
            className="mx-auto w-full max-w-[900px]"
            loading="lazy"
          />
        </div>
      </section>

      <ExpertSalesLetter sections={expertLetterSections} postscript={expertPostscript} />
      <ExpertTestimonials items={expertTestimonials} />

      <section className="px-4 pb-4 sm:px-6">
        <div className="mx-auto max-w-[819px] rounded-[4px] border border-surface-bump bg-surface-bump px-5 py-8 shadow-[0_18px_40px_rgba(17,17,17,0.06)] sm:px-10 sm:py-10">
          <p className="expert-headline text-center text-[2.3rem] font-normal leading-none tracking-[-0.04em] text-[#2d2d2d] sm:text-[3.35rem]">
            Send Me Your Address...
          </p>
          <p className="expert-headline mt-2 text-center text-[1.6rem] font-normal leading-tight text-[#2d2d2d] sm:text-[2.25rem]">
            I&apos;d like to rush a <span className="text-brand-primary">FREE</span> copy of my brand new hardcover book to your doorstep, ASAP!
          </p>
          <img src={expertBrandAssets.bundleUrl} alt="Expert Secrets bundle" className="mx-auto mt-8 w-full max-w-[733px]" loading="lazy" />
          <p className="expert-body mt-6 text-center text-[1.05rem] leading-8 text-[#2d2d2d] sm:text-[1.2rem]">
            Like I mentioned before, this book is free. I&apos;ll pay for the book and all I ask is that you help cover the
            shipping and handling cost. We&apos;ll send it anywhere in the world.
          </p>
          <div className="mx-auto mt-6 max-w-[650px]">
            <ExpertCtaButton
              href="#checkout"
              label="Yes! Reserve My Free Copy Now!"
              subLabel="You pay only $9.95 for shipping and handling in US ($19.95 intl)"
              fullWidth
            />
          </div>
        </div>
      </section>

      <ExpertBonusStack bonuses={expertBonusItems} />
      <ExpertOfferStack />
      <ExpertFAQ items={expertFaqItems} />

      <footer className="border-t-[10px] border-t-brand-accent bg-[#242424] px-4 py-10 text-center text-white sm:px-6">
        <div className="mx-auto max-w-[1170px]">
          <img src={expertBrandAssets.logoUrl} alt="Expert Secrets" className="mx-auto h-8 w-auto sm:h-9" />
          <p className="expert-body mx-auto mt-8 max-w-[780px] text-sm leading-7 text-white/78">
            Prime Mover, LLC © 2026. All Rights Reserved. 3443 W Bavaria St Eagle, ID 83616.
            {' '}
            <a href="https://marketingsecrets.com/terms" className="text-white underline underline-offset-4">Terms</a>
            {' '} - {' '}
            <a href="https://marketingsecrets.com/privacy" className="text-white underline underline-offset-4">Privacy</a>
            {' '} - {' '}
            <a href="mailto:support@marketingsecrets.com" className="text-white underline underline-offset-4">Support</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ExpertTheme;
