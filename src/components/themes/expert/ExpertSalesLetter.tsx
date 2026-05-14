import { DNA } from '../../../dna.config';

export function ExpertSalesLetter() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-[1080px]">
        <div className="rounded-sm border border-[#d7d7d7] bg-white px-5 py-8 shadow-[0_16px_35px_rgba(17,17,17,0.08)] sm:px-9 sm:py-10">
          <h2 className="expert-headline text-[1.95rem] font-black leading-none tracking-[-0.05em] text-[#2d2d2d] sm:text-[2.5rem]">
            {DNA.copy.salesLetterTitle}
          </h2>

          <div className="expert-body mt-5 space-y-5 text-[1.08rem] leading-8 text-[#2d2d2d] sm:text-[1.12rem]">
            {DNA.copy.salesLetterParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertSalesLetter;
