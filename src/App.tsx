import { useEffect } from 'react';
import { DNA, resolveDnaDocumentTheme } from './dna.config';
import analytics from './core/services/analytics';
import { ExpertTheme } from './components/themes/expert/ExpertTheme';
import { PandaTheme } from './components/themes/panda/PandaTheme';

function App() {
  useEffect(() => {
    const documentTheme = resolveDnaDocumentTheme();
    const nextTitle = `${DNA.copy.productName} - ${DNA.theme === 'expert' ? 'Expert Theme' : 'Panda Theme'}`;

    document.documentElement.setAttribute('data-theme', documentTheme);
    document.title = nextTitle;

    void analytics.trackEvent('ThemeView', {
      active_theme: DNA.theme,
      page_title: nextTitle,
      brand_name: DNA.copy.productName,
      page_path: window.location.pathname,
      page_url: window.location.href,
    });
  }, []);

  return DNA.theme === 'expert' ? <ExpertTheme /> : <PandaTheme />;
}

export default App;
