import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const defaultHtmlEnv = {
  VITE_DOMAIN: 'aprendermotores.com',
  VITE_SITE_TITLE: 'Aprender Motores | Funnel VSL',
  VITE_SITE_DESCRIPTION:
    'Boilerplate VSL configurable para presentar una oferta, reproducir el video y enviar el trafico al checkout definido.',
  VITE_SOCIAL_IMAGE: 'https://aprendermotores.com/assets/funnel-placeholder.svg',
};

function htmlEnvPlugin(mode: string) {
  const env: Record<string, string> = { ...defaultHtmlEnv, ...loadEnv(mode, process.cwd(), 'VITE_') };

  return {
    name: 'html-env-defaults',
    transformIndexHtml(html: string) {
      return html.replace(/__VITE_[A-Z0-9_]+__/g, (token) => {
        const key = token.slice(2, -2);
        return env[key] ?? '';
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), htmlEnvPlugin(mode)],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
