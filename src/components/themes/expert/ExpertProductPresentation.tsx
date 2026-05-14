import { DNA } from '../../../dna.config';

export function ExpertProductPresentation() {
  return (
    <section 
      className="py-16 px-4 sm:px-6 text-center"
      style={{ backgroundColor: 'rgb(var(--color-page))' }}
    >
      <div className="mx-auto max-w-[1000px]">
        {/* Pre-Título */}
        <h2 
          className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-2"
          style={{ color: 'rgb(var(--color-text-muted))' }}
        >
          {DNA.copy.presentationPreTitle}
        </h2>
        
        {/* Título Principal Inyectado */}
        <h1 
          className="text-[2rem] md:text-[3.5rem] font-black mb-10 leading-tight uppercase" 
          style={{ 
            fontFamily: 'var(--font-sans)',
            color: 'rgb(var(--color-text-main))'
          }}
          dangerouslySetInnerHTML={{ __html: DNA.copy.presentationTitle }}
        />
        
        {/* Mockup del Producto */}
        <div className="relative mx-auto w-full max-w-[850px] mt-8">
          {/* Glow usando el color primario del DNA */}
          <div 
            className="absolute inset-0 blur-[100px] opacity-15 rounded-full"
            style={{ backgroundColor: 'rgb(var(--color-brand-primary))' }}
          ></div>
          <img 
            src="/assets/curso.webp" 
            alt={DNA.copy.productName}
            className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}