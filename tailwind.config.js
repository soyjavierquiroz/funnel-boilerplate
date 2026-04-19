/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '!./src/**/node_modules/**/*'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        page: 'rgb(var(--color-page) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
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
        'border-subtle': 'rgb(var(--color-border-subtle) / <alpha-value>)',
        'text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
