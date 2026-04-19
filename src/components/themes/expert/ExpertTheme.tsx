import type { CSSProperties } from 'react';
import { DNA, resolveDnaThemeStyle } from '../../../dna.config';
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
    <div className="theme-expert min-h-screen bg-page text-text-main" style={resolveDnaThemeStyle() as CSSProperties}>
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
            Activa Tu Acceso...
          </p>
          <p className="expert-headline mt-2 text-center text-[1.6rem] font-normal leading-tight text-[#2d2d2d] sm:text-[2.25rem]">
            Entra hoy a <span className="text-brand-primary">{DNA.copy.productName}</span> y desbloquea el stack completo sin rehacer el funnel.
          </p>
          <img src={expertBrandAssets.bundleUrl} alt="Expert Secrets bundle" className="mx-auto mt-8 w-full max-w-[733px]" loading="lazy" />
          <p className="expert-body mt-6 text-center text-[1.05rem] leading-8 text-[#2d2d2d] sm:text-[1.2rem]">
            El DNA del proyecto ya fija el video, el pricing y el copy principal para que este clon salga listo para producción desde el build estático.
          </p>
          <div className="mx-auto mt-6 max-w-[650px]">
            <ExpertCtaButton
              href="#checkout"
              label={`Sí, quiero activar ${DNA.copy.productName}`}
              subLabel={`Hoy por solo $${DNA.prices.main} con bump de $${DNA.prices.bump}`}
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
