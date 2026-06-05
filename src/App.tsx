import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { DNA, resolveDnaDocumentTheme } from './site/current';
import analytics from './core/services/analytics';
import { resolveCurrentAttribution } from './core/attribution';
import { getAdsRoutePrefix, withAdsRoutePrefix } from './core/routing/adsRoute';
import { ExpertTheme } from './components/themes/expert/ExpertTheme';
import { ExpertEventTheme } from './components/themes/expert/event/ExpertEventTheme';
import { ExpertOfferPage } from './components/themes/expert/offer/ExpertOfferPage';
import { Success } from './pages/Success';

const adsRoutePrefix = getAdsRoutePrefix();
const adsOfferPath = withAdsRoutePrefix('/oferta', adsRoutePrefix);
const adsConfirmationPath = withAdsRoutePrefix('/confirmacion', adsRoutePrefix);

function resolveHomeTheme() {
  if (DNA.theme === 'expert' && DNA.funnelType === 'event') {
    return <ExpertEventTheme />;
  }

  return <ExpertTheme />;
}

function RoutedApp() {
  const location = useLocation();
  const attribution = resolveCurrentAttribution(location);
  const trafficChannel = attribution.channel;
  const isSuccessRoute =
    location.pathname === '/confirmacion' || location.pathname === adsConfirmationPath;

  useEffect(() => {
    const documentTheme = resolveDnaDocumentTheme();
    const nextTitle = isSuccessRoute
      ? `${DNA.copy.productName} - ${DNA.copy.successPage.eyebrow}`
      : DNA.seo.title;

    document.documentElement.setAttribute('data-theme', documentTheme);
    document.title = nextTitle;

    if (attribution.shouldTrackAds) {
      void analytics.trackEvent('PageView', {
        source: 'AppLoad',
        theme: DNA.theme,
        funnel_type: DNA.funnelType,
        traffic_channel: trafficChannel,
      });
    }
  }, [attribution.shouldTrackAds, isSuccessRoute, location.pathname, location.search, trafficChannel]);

  return (
    <Routes>
      <Route path="/" element={resolveHomeTheme()} />
      <Route path={adsRoutePrefix} element={resolveHomeTheme()} />
      <Route path="/oferta" element={<ExpertOfferPage />} />
      <Route path={adsOfferPath} element={<ExpertOfferPage />} />
      <Route path="/confirmacion" element={<Success />} />
      <Route path={adsConfirmationPath} element={<Success />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return <RoutedApp />;
}

export default App;
