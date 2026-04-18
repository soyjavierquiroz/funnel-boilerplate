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

export interface ExpertLetterSection {
  id: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  paragraphs: string[];
  bullets?: string[];
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
  logoUrl: 'https://statics.myclickfunnels.com/workspace/Jnbkrx/image/7882162/file/1e47b234006662e0cb8fde3631e17b81.svg',
  heroBackgroundUrl: 'https://statics.myclickfunnels.com/workspace/Jnbkrx/image/8565732/file/33f9b4e00ae24f5b8ce831abe9faa2f2.png',
  heroPosterUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Jnbkrx/image/15107832/file/6d106a40e8d451eb343b5d72732dbbfa.jpg',
  heroCoverUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Jnbkrx/image/7816172/file/63dbae99d6e263551c607022571e93f2.png',
  bundleUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=100/dc/e1fe2157c14702a24c7321c5ae9a4f/send-me-your-address-min.png',
  bundleWideUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Jnbkrx/image/11224689/file/60a032d6eca2036c7807edad220a283a.png',
  portraitUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Jnbkrx/image/15165218/file/1fb196013477925b89f6fdefa66bdf64.webp',
  logosUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=100/24/c168e0f5b24f2f8b64364680f8621a/as-seen-on-logos.jpg',
  audiobookUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Jnbkrx/image/7845761/file/091a43b3b68f415763419438451a7940.png',
  liveRecordingsUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Jnbkrx/image/7845937/file/9fb1e2da6d3044e27d27ddaeb1e9933a.png',
  trafficWhiteUrl:
    'https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=100/73/98dd6231434b3087da6967b6792aac/3-types-of-traffic_white.png',
};

export const expertFaqItems: ExpertFaqItem[] = [
  {
    question: 'What is "Expert Secrets," and who is it for?',
    answer:
      'Expert Secrets is a 355-page hardcover book that teaches you how to find your voice, build a tribe, and grow your business through storytelling, persuasion, and belief-building. It is designed for coaches, consultants, business owners, creators, and entrepreneurs in any niche.',
  },
  {
    question: 'Is the book really free? What is the catch?',
    answer:
      'Yes. The hardcover is free and you only cover shipping and handling. There are no hidden continuity charges, no trials, and no surprise subscriptions attached to this order.',
  },
  {
    question: 'What makes this different from other marketing books?',
    answer:
      'Instead of generic tactics, Expert Secrets focuses on the psychology of stories, movements, and offers that create belief. The goal is not just to sell once, but to build a tribe that stays with you.',
  },
  {
    question: 'How long will it take to receive my book?',
    answer:
      'U.S. orders usually arrive within 5 to 7 business days. International orders can take 2 to 3 weeks depending on destination and customs processing.',
  },
];

export const expertBonusItems: ExpertBonusItem[] = [
  {
    id: 'hardcover',
    title: 'Hardback Copy Of Expert Secrets',
    description:
      'The printed hardcover that maps how to turn your message, story, and expertise into a movement people gladly buy into.',
    valueUSD: 24.95,
    imageUrl: expertBrandAssets.heroCoverUrl,
    imageAlt: 'Hardcover Expert Secrets book cover',
  },
  {
    id: 'expert-evolution',
    title: 'Expert Evolution',
    description:
      'A guided training to help you package your voice, niche, and transformation so your offer feels inevitable.',
    valueUSD: 97,
    imageUrl: expertBrandAssets.audiobookUrl,
    imageAlt: 'Expert Evolution bonus mockup',
  },
  {
    id: 'hook-story-offer',
    title: 'Hook, Story, Offer',
    description:
      'A practical breakdown of the structure that keeps attention, deepens belief, and moves prospects to action.',
    valueUSD: 97,
    imageUrl: expertBrandAssets.liveRecordingsUrl,
    imageAlt: 'Hook Story Offer bonus mockup',
  },
  {
    id: 'perfect-webinar-slides',
    title: 'The Perfect Webinar Slides',
    description:
      'A done-for-you visual slide framework so your pitch flows with authority instead of feeling improvised.',
    valueUSD: 197,
    imageUrl: expertBrandAssets.bundleWideUrl,
    imageAlt: 'Perfect Webinar Slides bonus mockup',
  },
  {
    id: 'five-minute-webinar',
    title: 'The 5-Minute Perfect Webinar',
    description:
      'A rapid version of the Perfect Webinar framework to sharpen your pitch, webinar, or sales presentation fast.',
    valueUSD: 97,
    imageUrl: expertBrandAssets.trafficWhiteUrl,
    imageAlt: 'Five Minute Perfect Webinar bonus mockup',
  },
  {
    id: 'challenge',
    title: '30 Day Expert Secrets Challenge',
    description:
      'A momentum-building challenge to help you apply the message-to-market framework without losing focus.',
    valueUSD: 97,
    imageUrl: expertBrandAssets.bundleUrl,
    imageAlt: '30 Day Expert Secrets Challenge bonus mockup',
  },
];

export const expertLetterSections: ExpertLetterSection[] = [
  {
    id: 'intro',
    title: 'What If People Would Actually Pay You For Your Advice...?',
    subtitle: 'From: Russell Brunson\nBoise, Idaho',
    imageUrl: expertBrandAssets.portraitUrl,
    imageAlt: 'Portrait of Russell Brunson',
    paragraphs: [
      'Do you have a message you want to share with the world?',
      'Do you have specialized knowledge that could help change someone else’s life?',
      'Would you like to get paid for your advice?',
      'The impact that the right message can have on someone at the right time in their life is immeasurable. It can save marriages, repair families, change someone’s health, grow a company, and restore confidence where people feel stuck.',
      'Your message really can change someone’s life, but only if you know how to get it into the hands of the people you have been called to serve.',
    ],
  },
  {
    id: 'proof',
    paragraphs: [
      'That is the gap this book helps close. Expert Secrets shows you how to package your story, create belief, and move people from passive interest into committed action.',
      'This is the exact framework behind presentations, webinars, VSLs, books, and movements that turn knowledge into revenue.',
      'If you have ever struggled to explain what makes your offer matter, this gives you the structure for doing it clearly and repeatedly.',
    ],
    bullets: [
      'Find the message that people instantly understand',
      'Build a tribe around the belief behind your offer',
      'Turn stories into sales without sounding manipulative',
      'Create offers people feel compelled to buy now',
    ],
  },
  {
    id: 'authority',
    paragraphs: [
      'As you can see, this is not just another “marketing” book. It is a playbook for turning your expertise into a business asset that keeps working for you.',
      'Inside, I walk through the belief patterns, stories, and offer architecture that let ordinary experts create extraordinary momentum.',
      'When you understand how to lead belief, you stop trying to convince everyone and start attracting the right people naturally.',
    ],
  },
  {
    id: 'close',
    paragraphs: [
      'This is truly a limited offer, so claim your free copy now before the inventory for this run is gone.',
      'Thanks for taking the time to read this letter. I hope the book helps you clarify your message, serve more people, and build the movement you were meant to lead.',
      'Thanks,\nRussell Brunson',
    ],
  },
];

export const expertPostscript = [
  'In case you are one of those people who skips to the end of the letter, here is the deal:',
  'I am mailing you a hardcover copy of “Expert Secrets - The Underground Playbook For Converting Your Online Visitors Into Lifelong Customers” for FREE.',
  'There is no catch, no gimmick, and no continuity trap. You only cover shipping and handling: $9.95 in the U.S. or $19.95 internationally.',
  'If you do not love the book, I will even refund your shipping costs and you do not have to send the book back.',
  'Click the button below to reserve your free copy now.',
];

export const expertTestimonials: ExpertTestimonialItem[] = [
  {
    id: 'tanya',
    name: 'Tanya Alvarez',
    title: 'Coach & Course Creator',
    quote: 'This framework finally helped me explain my offer in a way people instantly understood.',
    thumbnailUrl: 'https://i.ytimg.com/vi/M7lc1UVf-VE/hqdefault.jpg',
    thumbnailAlt: 'Tanya testimonial video thumbnail',
    videoUrl: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
  },
  {
    id: 'marcus',
    name: 'Marcus Lee',
    title: 'Consultant & Speaker',
    quote: 'The stories inside Expert Secrets gave me the confidence to lead with belief instead of features.',
    thumbnailUrl: 'https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg',
    thumbnailAlt: 'Marcus testimonial video thumbnail',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 'jennifer',
    name: 'Jennifer Ortiz',
    title: 'Membership Founder',
    quote: 'After applying the messaging stack, our webinar felt sharper and conversions jumped almost immediately.',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    thumbnailAlt: 'Jennifer testimonial video thumbnail',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
