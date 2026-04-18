import type { ExpertLetterSection } from './expertContent';

interface ExpertSalesLetterProps {
  sections: ExpertLetterSection[];
  postscript: string[];
}

export function ExpertSalesLetter({ sections, postscript }: ExpertSalesLetterProps) {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-[1080px]">
        <div className="rounded-[26px] bg-white px-5 py-8 shadow-[0_30px_80px_rgba(17,17,17,0.08)] sm:px-9 sm:py-10">
          {sections.map((section, index) => (
            <article key={section.id} className={index === 0 ? 'border-b border-[#edf1f6] pb-10' : 'pt-10'}>
              <div className={section.imageUrl ? 'grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start' : ''}>
                <div>
                  {section.title ? (
                    <h2 className="expert-headline text-[1.95rem] font-black leading-none tracking-[-0.05em] text-[#2d2d2d] sm:text-[2.5rem]">
                      {section.title}
                    </h2>
                  ) : null}

                  {section.subtitle ? (
                    <p className="expert-body mt-4 whitespace-pre-line text-[1.1rem] font-semibold leading-8 text-[#2d2d2d]">
                      {section.subtitle}
                    </p>
                  ) : null}

                  <div className="expert-body mt-5 space-y-5 text-[1.12rem] leading-9 text-[#2d2d2d] sm:text-[1.18rem]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets ? (
                    <ul className="expert-body mt-6 space-y-3 text-[1.08rem] leading-8 text-[#2d2d2d] sm:text-[1.14rem]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#e01921]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {section.imageUrl ? (
                  <div className="overflow-hidden rounded-[22px] bg-[#f4f8ff] p-4 shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
                    <img src={section.imageUrl} alt={section.imageAlt ?? section.title ?? 'Expert Secrets'} className="w-full object-cover" loading="lazy" />
                  </div>
                ) : null}
              </div>
            </article>
          ))}

          <div className="mt-10 rounded-[20px] border border-[#efe7bf] bg-[#fcf8e3] px-5 py-6 sm:px-7">
            <p className="expert-body text-[1.12rem] leading-9 text-[#2d2d2d] sm:text-[1.18rem]">
              <strong className="expert-headline font-extrabold text-[#e01921]">P.S.</strong>{' '}
              {postscript[0]}
            </p>
            <div className="expert-body mt-4 space-y-4 text-[1.08rem] leading-8 text-[#2d2d2d] sm:text-[1.12rem]">
              {postscript.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertSalesLetter;
