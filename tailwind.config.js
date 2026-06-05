import { DNA } from './src/site/current.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '!./src/**/node_modules/**/*'],
  theme: {
    extend: {
      fontFamily: {
        sans: [DNA.fonts.sans, 'sans-serif'],
        body: [DNA.fonts.body, 'sans-serif'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        page: 'rgb(var(--color-page) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          muted: 'rgb(var(--color-surface-muted) / <alpha-value>)',
          bump: 'rgb(var(--color-surface-bump) / <alpha-value>)',
        },
        brand: {
          primary: 'rgb(var(--color-brand-primary) / <alpha-value>)',
          accent: 'rgb(var(--color-brand-accent) / <alpha-value>)',
        },
        cta: {
          DEFAULT: 'rgb(var(--color-cta-base) / <alpha-value>)',
          hover: 'rgb(var(--color-cta-hover) / <alpha-value>)',
        },
        event: {
          page: 'rgb(var(--color-event-page) / <alpha-value>)',
          surface: 'rgb(var(--color-event-surface) / <alpha-value>)',
          soft: 'rgb(var(--color-event-surface-soft) / <alpha-value>)',
          card: 'rgb(var(--color-event-card) / <alpha-value>)',
          ink: 'rgb(var(--color-event-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-event-muted) / <alpha-value>)',
          navy: 'rgb(var(--color-event-navy) / <alpha-value>)',
          sky: 'rgb(var(--color-event-sky) / <alpha-value>)',
          coral: 'rgb(var(--color-event-coral) / <alpha-value>)',
          highlight: 'rgb(var(--color-event-highlight) / <alpha-value>)',
        },
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        'border-subtle': 'rgb(var(--color-border-subtle) / <alpha-value>)',
        'text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-subtle': 'rgb(var(--color-text-subtle) / <alpha-value>)',
        'text-inverse': 'rgb(var(--color-text-inverse) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
