import { DNA } from '../../../dna.config';

export interface ExpertFaqItem {
  question: string;
  answer: string;
}

export interface ExpertBonusItem {
  id: string;
  title: string;
  description: string;
  valueUSD: number;
  imageUrl: string;
  imageAlt: string;
}

export interface ExpertTestimonialItem {
  id: string;
  name: string;
  title: string;
  quote: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  videoUrl: string;
}

export const expertBrandAssets = {
  logoUrl: DNA.assets.productImage,
  heroBackgroundUrl: DNA.assets.productImage,
  heroPosterUrl: DNA.assets.productImage,
  heroCoverUrl: DNA.assets.productImage,
  bundleUrl: DNA.assets.bonusImage,
  bundleWideUrl: DNA.assets.bundleWideImage,
  logosUrl: DNA.assets.productImage,
  audiobookUrl: DNA.assets.bonusImage,
  liveRecordingsUrl: DNA.assets.bonusImage,
  trafficWhiteUrl: DNA.assets.bonusImage,
};

export const expertFaqItems: ExpertFaqItem[] = DNA.copy.faq.items.map((item) => ({
  question: item.question,
  answer: item.answer,
}));

export const expertBonusItems: ExpertBonusItem[] = DNA.copy.modules.map((module, index) => ({
  id: `module_${index + 1}`,
  title: module.title,
  description: module.description,
  valueUSD: Number(module.value.replace(/[^\d.]/g, '')) || 0,
  imageUrl: module.image,
  imageAlt: module.title,
}));

export const expertTestimonials: ExpertTestimonialItem[] = DNA.copy.testimonials.items.map((testimonial, index) => ({
  id: `testimonial_${index + 1}`,
  name: testimonial.name,
  title: DNA.copy.testimonials.headline,
  quote: testimonial.quote,
  thumbnailUrl: testimonial.image,
  thumbnailAlt: testimonial.name,
  videoUrl: '',
}));
