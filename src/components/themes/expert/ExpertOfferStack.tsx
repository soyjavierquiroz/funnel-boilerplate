import { Check, CreditCard, Lock, ShieldCheck } from 'lucide-react';

const offerItems = [
  { id: 'kurukin-core', name: 'Sistema Kurukin Core', value: '$1,997' },
  { id: 'autonomous-prospecting', name: 'El Sistema Autónomo de Prospección', value: '$997' },
  { id: 'team-duplication', name: 'Plantillas de Duplicación de Equipo', value: '$497' },
  { id: 'closing-masterclass', name: 'Masterclass: Cierre Sin Resistencia', value: '$297' },
] as const;

const certaintyItems = [
  { id: 'secure-payment', label: 'Pago 100% Seguro', icon: Lock },
  { id: 'guarantee', label: 'Garantía de 30 Días', icon: ShieldCheck },
  { id: 'ssl', label: 'Encriptación SSL 256-bit', icon: CreditCard },
] as const;

export function ExpertOfferStack() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-4xl mx-auto rounded-xl border-4 border-dashed border-[#e01921] bg-white p-8 shadow-2xl md:p-12">
        <h2 className="mb-8 text-center text-4xl font-black uppercase text-gray-900">
          LO QUE TE LLEVAS HOY...
        </h2>

        <ul className="space-y-4">
          {offerItems.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-4 shadow-sm sm:items-center"
            >
              <Check className="mt-1 h-6 w-6 shrink-0 text-green-500 sm:mt-0" strokeWidth={3} aria-hidden="true" />
              <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-lg font-extrabold text-gray-900 sm:text-xl">{item.name}</span>
                <span className="text-lg font-extrabold text-gray-700 sm:text-right sm:text-xl">
                  Valor: <span className="text-red-500 line-through">{item.value}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <hr className="my-6 border-2 border-gray-300" />

        <div className="space-y-3">
          <p className="text-center text-2xl font-bold text-gray-900">Valor Total: $3,788</p>
          <p className="text-center text-xl text-gray-500 line-through">Precio Regular: $997</p>
          <p className="my-4 text-center text-5xl font-black text-[#e01921] animate-pulse">¡HOY SOLO $97!</p>
        </div>

        <div className="mt-8">
          <a
            href="#checkout"
            className="block w-full rounded bg-yellow-400 py-6 text-center text-2xl font-black uppercase text-black shadow-[0_5px_0_rgb(202,138,4)] transition-all transform hover:translate-y-1 hover:bg-yellow-500 hover:shadow-none"
          >
            ¡SÍ, QUIERO MI ACCESO AHORA!
          </a>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-gray-600">
            {certaintyItems.map(({ id, label, icon: Icon }) => (
              <div key={id} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#4875b9]" strokeWidth={2.25} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertOfferStack;
