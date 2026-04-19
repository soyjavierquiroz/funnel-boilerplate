import type { CSSProperties } from 'react';
import { ExternalLink, MapPin, MessageCircleMore, QrCode, Sparkles } from 'lucide-react';
import { DNA, resolveDnaThemeStyle } from '../dna.config';
import {
  magiaBrand,
  magiaPayment,
  readRegistrationSnapshot,
  resolveEventOption,
} from '../content/magia';

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/10 py-3 last:border-b-0">
      <p className="expert-body text-xs uppercase tracking-[0.22em] text-white/58">{label}</p>
      <p className="expert-body mt-1 text-sm leading-6 text-white/90">{value}</p>
    </div>
  );
}

export function Success() {
  const searchParams = new URLSearchParams(window.location.search);
  const storedRegistration = readRegistrationSnapshot();
  const firstName = searchParams.get('pname') || storedRegistration?.firstName || 'Tu registro';
  const eventMode = searchParams.get('sesion') || storedRegistration?.eventMode || 'virtual';
  const event = resolveEventOption(eventMode);
  const isVirtual = event.id === 'virtual';

  return (
    <div
      className="theme-expert min-h-screen bg-[radial-gradient(circle_at_top,#44305a_0%,#1a1221_45%,#0d0910_100%)] text-white"
      style={resolveDnaThemeStyle() as CSSProperties}
    >
      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-[1160px]">
          <a href="/" className="expert-body inline-flex items-center gap-2 text-sm font-semibold text-white/76 transition hover:text-white">
            <Sparkles className="h-4 w-4 text-[#ffe8cf]" />
            Volver a la pagina principal
          </a>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="expert-body text-xs uppercase tracking-[0.24em] text-[#ffe8cf]">Paso 2. Efectuar el pago</p>
              <h1 className="expert-headline mt-4 text-[2.8rem] leading-[0.94] tracking-[-0.05em] text-white sm:text-[4.3rem]">
                {firstName} tu registro a la Magia {isVirtual ? 'virtual' : 'presencial'} esta casi completo
              </h1>
              <p className="expert-body mt-5 max-w-[720px] text-[1.03rem] leading-8 text-white/76 sm:text-[1.12rem]">
                Tu modalidad seleccionada es <strong>{event.confirmationTitle}</strong>. Completa el pago dentro de las
                proximas 48 horas y envia el comprobante a WhatsApp para asegurar tu acceso.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur">
                  <p className="expert-headline text-[1.5rem] leading-none text-white">Datos de pago</p>
                  <div className="mt-4">
                    <DetailRow label="Monto" value={`Bs ${event.amountBs}`} />
                    <DetailRow label="Cuenta" value={magiaPayment.accountNumber} />
                    <DetailRow label="Tipo" value={magiaPayment.accountType} />
                    <DetailRow label="Banco" value={magiaPayment.bank} />
                    <DetailRow label="Titular" value={magiaPayment.holder} />
                    <DetailRow label="CI" value={magiaPayment.ci} />
                    <DetailRow label="Correo" value={magiaPayment.email} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <QrCode className="h-7 w-7 text-[#ffe8cf]" />
                    <p className="expert-headline text-[1.45rem] leading-none text-white">{event.qrTitle}</p>
                  </div>
                  <div className="mt-5 grid min-h-[230px] place-items-center rounded-[24px] border border-dashed border-white/28 bg-black/18 px-6 text-center">
                    <div>
                      <p className="expert-headline text-[1.1rem] text-[#ffe8cf]">Espacio reservado para QR</p>
                      <p className="expert-body mt-2 text-sm leading-6 text-white/68">
                        Inserta aqui el QR final de pago, acceso por Zoom o entrada presencial segun la modalidad.
                      </p>
                    </div>
                  </div>
                  {isVirtual ? (
                    <div className="mt-4 rounded-[20px] bg-white/8 px-4 py-4">
                      <p className="expert-body text-sm leading-6 text-white/74">
                        Desde el exterior puedes enviar el equivalente a <strong>USD 10</strong> o usar Zelle antes de
                        mandar el comprobante.
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur">
                <div className="flex items-start gap-3">
                  <MessageCircleMore className="mt-1 h-6 w-6 shrink-0 text-[#ffe8cf]" />
                  <div>
                    <p className="expert-headline text-[1.25rem] leading-none text-white">Siguiente paso</p>
                    <p className="expert-body mt-2 text-sm leading-7 text-white/74">
                      Envia tu comprobante al <strong>WhatsApp {magiaPayment.whatsapp}</strong>. Luego recibirás todos
                      los detalles en el grupo oficial de la Magia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur">
                  <p className="expert-headline text-[1.25rem] leading-none text-white">Tu modalidad</p>
                  <p className="expert-body mt-3 text-sm leading-7 text-white/74">
                    {event.confirmationTitle}
                    <br />
                    {event.summary}
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur">
                  <p className="expert-headline text-[1.25rem] leading-none text-white">
                    {isVirtual ? 'Preparacion previa' : 'Direccion y acceso'}
                  </p>
                  {isVirtual ? (
                    <a
                      href={magiaBrand.preparationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--color-brand-primary))] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Ver videos de preparacion
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={magiaBrand.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--color-brand-primary))] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Abrir mapa de BAFABO
                      <MapPin className="h-4 w-4" />
                    </a>
                  )}
                  <p className="expert-body mt-4 text-sm leading-7 text-white/74">{event.preparationNote}</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[32px] border border-white/12 bg-white/8 backdrop-blur">
                <img
                  src={event.previewUrl}
                  alt={event.confirmationTitle}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] px-6 py-6 backdrop-blur">
                <p className="expert-headline text-[1.5rem] leading-none text-white">{DNA.copy.productName}</p>
                <p className="expert-body mt-3 text-sm leading-7 text-white/74">
                  Esta pantalla adapta el contenido de confirmacion segun la modalidad elegida para que el sabado y el
                  domingo tengan instrucciones claras desde el primer momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Success;
