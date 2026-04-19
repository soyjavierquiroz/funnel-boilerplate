import { DNA } from './src/dna.config.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '!./src/**/node_modules/**/*'],
  theme: {
    extend: {
      colors: {
        primary: DNA.colors.primary,
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: DNA.colors.accent,
        page: 'rgb(var(--color-page) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          bump: DNA.colors.surface,
        },
        brand: {
          primary: DNA.colors.primary,
          accent: DNA.colors.accent,
        },
        cta: {
          DEFAULT: DNA.colors.cta,
          hover: DNA.colors.ctaHover,
        },
        'border-subtle': 'rgb(var(--color-border-subtle) / <alpha-value>)',
        'text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
