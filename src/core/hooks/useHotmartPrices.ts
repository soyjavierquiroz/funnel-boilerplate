import { useEffect, useMemo, useState } from 'react';
import { resolvePricingProduct } from '../config/funnel.config';

type CatalogCountryPrice = {
  total: string;
  currency: string;
  taxRate: number | null;
};

type HotmartCatalogResponse = Record<string, Record<string, CatalogCountryPrice>>;

export type PricingScrapedData = Record<string, { total: string; tax?: string }>;
export type PricingLoadStatus = 'loading' | 'ready' | 'error';

let hotmartCatalogPromise: Promise<HotmartCatalogResponse> | null = null;

async function loadHotmartCatalog() {
  const catalogUrl = import.meta.env.VITE_HOTPRICES_API_URL;

  if (!catalogUrl) {
    throw new Error('Missing VITE_HOTPRICES_API_URL environment variable.');
  }

  if (!hotmartCatalogPromise) {
    hotmartCatalogPromise = fetch(catalogUrl).then(async (response) => {
      if (!response.ok) {
        console.error('[useHotmartPrices] HotPrices request failed', {
          url: catalogUrl,
          status: response.status,
          statusText: response.statusText,
        });
        throw new Error(`HotPrices responded with ${response.status}`);
      }

      return response.json();
    });
  }

  return hotmartCatalogPromise;
}

export function useHotmartPrices(productKey: string) {
  const [scrapedData, setScrapedData] = useState<PricingScrapedData>();
  const [isLoadingPrices, setIsLoadingPrices] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<PricingLoadStatus>('loading');
  const { product, requestedProductKey, resolvedProductKey, hasRequestedProduct } = useMemo(
    () => resolvePricingProduct(productKey),
    [productKey],
  );
  const hotmartProductId = product.hotmartProductId;

  useEffect(() => {
    let isCancelled = false;

    const loadPrices = async () => {
      setIsLoadingPrices(true);
      setStatus('loading');
      setError(null);
      setScrapedData(undefined);

      if (!hasRequestedProduct) {
        if (!isCancelled) {
          setError(
            new Error(
              `Pricing config is missing product "${requestedProductKey}". Falling back to "${resolvedProductKey}" base price.`,
            ),
          );
          setStatus('error');
          setIsLoadingPrices(false);
        }

        return;
      }

      try {
        const catalog = await loadHotmartCatalog();
        const productCatalog = catalog[hotmartProductId];

        if (!productCatalog) {
          if (!isCancelled) {
            setError(new Error(`HotPrices catalog is missing Hotmart product "${hotmartProductId}".`));
            setStatus('error');
            setIsLoadingPrices(false);
          }

          return;
        }

        const mappedData: PricingScrapedData = Object.fromEntries(
          Object.entries(productCatalog).map(([countryCode, price]) => [countryCode, { total: price.total }]),
        );

        if (!isCancelled) {
          setScrapedData(mappedData);
          setStatus('ready');
        }
      } catch (error) {
        if (!isCancelled) {
          const nextError = error instanceof Error ? error : new Error('Unknown Hotmart pricing error.');
          console.error('[useHotmartPrices] Failed to load HotPrices catalog', {
            url: import.meta.env.VITE_HOTPRICES_API_URL,
            message: nextError.message,
            likelyCorsOrNetwork: nextError instanceof TypeError,
          });
          setError(nextError);
          setStatus('error');
        }
      } finally {
        if (!isCancelled) {
          setIsLoadingPrices(false);
        }
      }
    };

    loadPrices();

    return () => {
      isCancelled = true;
    };
  }, [hasRequestedProduct, hotmartProductId, requestedProductKey, resolvedProductKey]);

  return {
    scrapedData,
    isLoadingPrices,
    error,
    status,
    requestedProductKey,
    resolvedProductKey,
    hasRequestedProduct,
    product,
  };
}
