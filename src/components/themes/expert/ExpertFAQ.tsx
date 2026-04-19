import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { ExpertFaqItem } from './expertContent';
import { ExpertCtaButton } from './ExpertCtaButton';

interface ExpertFAQProps {
  items: ExpertFaqItem[];
}

export function ExpertFAQ({ items }: ExpertFAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-brand-accent/10 px-4 py-6 sm:px-6 sm:py-9">
      <div className="mx-auto max-w-[935px]">
        <div className="mb-8 flex items-center gap-6">
          <h2 className="expert-headline text-[2rem] font-black leading-none tracking-[-0.05em] text-[#2d2d2d] sm:text-[2.5rem]">
            Frequently Asked Questions
          </h2>
          <div className="h-1 flex-1 bg-brand-accent" />
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-[5px] border-l-4 border-l-brand-accent bg-white px-4 py-4 shadow-[0_10px_25px_rgba(17,17,17,0.05)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="expert-headline text-[1.08rem] font-bold leading-6 text-[#141414] sm:text-[1.3rem]">
                    {item.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-brand-accent">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>

                {isOpen ? (
                  <p className="expert-body mt-3 pr-2 text-base leading-7 text-[#141414]">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-[599px]">
          <ExpertCtaButton
            href="#checkout"
            label="Yes! Reserve My Free Copy Now!"
            subLabel="You pay only $9.95 for shipping and handling in US ($19.95 intl)"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
}

export default ExpertFAQ;
