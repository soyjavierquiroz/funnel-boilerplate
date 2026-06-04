import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { DNA, resolveDnaDocumentTheme } from './dna.config';
import analytics from './core/services/analytics';
import funnelConfig from './core/config/funnel.config';
import { getTrafficChannel } from './core/routing/channel';
import { ExpertTheme } from './components/themes/expert/ExpertTheme';
import { ExpertEventTheme } from './components/themes/expert/event/ExpertEventTheme';
import { ExpertOfferPage } from './components/themes/expert/offer/ExpertOfferPage';
import { Success } from './pages/Success';

function resolveHomeTheme() {
  if (DNA.theme === 'expert' && DNA.funnelType === 'event') {
    return <ExpertEventTheme />;
  }

  return <ExpertTheme />;
}

function RoutedApp() {
  const location = useLocation();
  const trafficChannel = getTrafficChannel(location.pathname);
  const channelConfig = funnelConfig.trafficChannels[trafficChannel];
  const isSuccessRoute =
    location.pathname === '/confirmacion' || location.pathname === '/a/confirmacion';

  useEffect(() => {
    const documentTheme = resolveDnaDocumentTheme();
    const nextTitle = isSuccessRoute
      ? `${DNA.copy.productName} - ${DNA.copy.successPage.eyebrow}`
      : DNA.seo.title;

    document.documentElement.setAttribute('data-theme', documentTheme);
    document.title = nextTitle;

    if (channelConfig.trackingEnabled) {
      void analytics.trackEvent('PageView', {
        source: 'AppLoad',
        theme: DNA.theme,
        funnel_type: DNA.funnelType,
        traffic_channel: trafficChannel,
      });
    }
  }, [channelConfig.trackingEnabled, isSuccessRoute, location.pathname, trafficChannel]);

  return (
    <Routes>
      <Route path="/" element={resolveHomeTheme()} />
      <Route path="/a" element={resolveHomeTheme()} />
      <Route path="/oferta" element={<ExpertOfferPage />} />
      <Route path="/a/oferta" element={<ExpertOfferPage />} />
      <Route path="/confirmacion" element={<Success />} />
      <Route path="/a/confirmacion" element={<Success />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return <RoutedApp />;
}

export default App;
