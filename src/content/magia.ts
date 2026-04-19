import landingPreviewUrl from '../assets/magia/1.png';
import virtualPreviewUrl from '../assets/magia/2.png';
import presencialPreviewUrl from '../assets/magia/3.png';

export type EventMode = 'virtual' | 'presencial';

export interface EventOption {
  id: EventMode;
  label: string;
  schedule: string;
  location: string;
  amountBs: number;
  confirmationTitle: string;
  summary: string;
  preparationNote: string;
  qrTitle: string;
  previewUrl: string;
}

export interface RegistrationSnapshot {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  eventMode: EventMode;
  createdAt: string;
}

export const magiaBrand = {
  eyebrow: 'Ceremonia Blanca de activacion energetica',
  title: 'Magia de la Abundancia',
  subtitle:
    'Activa la energia del dinero, libera bloqueos y participa en un ritual guiado para abrir tu camino a la prosperidad.',
  preparationUrl: 'https://magiadelaabundancia.com/preparacion',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=BAFABO+Cochabamba',
} as const;

export const magiaAssets = {
  landingPreviewUrl,
  virtualPreviewUrl,
  presencialPreviewUrl,
} as const;

export const magiaEventOptions: EventOption[] = [
  {
    id: 'virtual',
    label: 'Virtual por Zoom',
    schedule: 'Domingo 5 de abril - Hrs 19:00',
    location: 'Zoom',
    amountBs: 50,
    confirmationTitle: 'Virtual por Zoom - Domingo 5 de abril - Hrs 19:00',
    summary: 'La ceremonia virtual se realizara por Zoom y los detalles se enviaran al grupo de WhatsApp de la Magia.',
    preparationNote: 'Desde el exterior puedes enviar el equivalente a USD 10 o usar Zelle y luego compartir tu comprobante.',
    qrTitle: 'QR de acceso / pago',
    previewUrl: virtualPreviewUrl,
  },
  {
    id: 'presencial',
    label: 'Presencial Cochabamba',
    schedule: 'Sabado 4 de abril - Hrs 17:00',
    location: 'BAFABO, Cochabamba',
    amountBs: 80,
    confirmationTitle: 'Presencial Cochabamba - Sabado 4 de abril - Hrs 17:00',
    summary: 'La ceremonia presencial se realizara en Cochabamba, en BAFABO, y todos los detalles se enviaran al grupo de WhatsApp de la Magia.',
    preparationNote: 'Presenta tu comprobante y sigue el mapa para llegar a tiempo al ritual presencial.',
    qrTitle: 'QR de entrada',
    previewUrl: presencialPreviewUrl,
  },
] as const;

export const magiaPayment = {
  accountNumber: '4025820674',
  accountType: 'Caja de ahorros en bolivianos',
  bank: 'Banco Mercantil Santa Cruz',
  holder: 'Janny Helguero Riera',
  ci: '2684490 LP',
  email: 'jannyhelguero@gmail.com',
  whatsapp: '+591 65387381',
} as const;

export const magiaBenefits = [
  'Liberar bloqueos energeticos y activar la abundancia en todas las areas de tu vida.',
  'Manifestar con afirmaciones, visualizacion guiada y un ritual grupal de alta intencion.',
  'Conectar con tu poder creador y con la energia femenina de la prosperidad.',
] as const;

export const magiaExperience = [
  'Aprenderas a manifestar con afirmaciones y visualizacion guiada.',
  'Realizaras un ritual con semillas, cuarzos, monedas y otros elementos sagrados.',
  'Activaras la energia del dinero y la prosperidad con un ejercicio guiado.',
  'Compartiras y recibiras energia en comunidad, reforzando tu intencion.',
] as const;

export const magiaDifferentiators = [
  'Facilitada por Janny Helguero Riera, terapeuta holistica con mas de 20 anos de experiencia.',
  'Basada en simbolos ancestrales, afirmaciones y activacion energetica.',
  'Cientos de mujeres han vivido esta experiencia con resultados sorprendentes.',
  'Garantia energetica: si no sientes un cambio profundo, puedes repetir el siguiente ritual sin costo.',
] as const;

export const magiaScheduleCards = [
  {
    title: 'Presencial en Cochabamba',
    schedule: 'Sabado 4 de abril',
    hour: '17:00',
    price: 'Bs. 80',
    imageUrl: presencialPreviewUrl,
  },
  {
    title: 'Virtual por Zoom',
    schedule: 'Domingo 5 de abril',
    hour: '19:00',
    price: 'Bs. 50',
    imageUrl: virtualPreviewUrl,
  },
] as const;

export const REGISTRATION_STORAGE_KEY = 'magia-abundancia-registration';

export function resolveEventOption(mode?: string | null) {
  return magiaEventOptions.find((option) => option.id === mode) ?? magiaEventOptions[0];
}

export function saveRegistrationSnapshot(snapshot: RegistrationSnapshot) {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(snapshot));
}

export function readRegistrationSnapshot(): RegistrationSnapshot | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(REGISTRATION_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as RegistrationSnapshot;
  } catch (error) {
    console.warn('[magia] could not parse registration snapshot', error);
    window.sessionStorage.removeItem(REGISTRATION_STORAGE_KEY);
    return null;
  }
}
