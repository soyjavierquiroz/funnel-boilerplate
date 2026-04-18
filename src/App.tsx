import { useEffect } from 'react';
import funnelConfig from './core/config/funnel.config';
import analytics from './core/services/analytics';
import { ExpertTheme } from './components/themes/expert/ExpertTheme';
import { PandaTheme } from './components/themes/panda/PandaTheme';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', funnelConfig.theme);
    document.title = `${funnelConfig.brandName} | Get Your FREE Book!`;

    void analytics.trackEvent('ViewContent', {
      page_title: document.title,
      brand_name: funnelConfig.brandName,
      page_path: window.location.pathname,
      page_url: window.location.href,
    });
  }, []);

  return funnelConfig.theme === 'theme-panda' ? <PandaTheme /> : <ExpertTheme />;
}

export default App;
