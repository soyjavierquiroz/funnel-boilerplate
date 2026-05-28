import { useEffect, useMemo, useState } from 'react';
import { resolvePricingProduct } from '../config/funnel.config';

type CatalogCountryPrice = {
  total: string;
  currency: string;
  taxRate: number | null;
};

type CheckoutCatalogResponse = Record<string, Record<string, CatalogCountryPrice>>;

export type PricingScrapedData = Record<string, { total: string; tax?: string }>;
export type PricingLoadStatus = 'loading' | 'ready' | 'error';

let checkoutCatalogPromise: Promise<CheckoutCatalogResponse> | null = null;

async function loadCheckoutCatalog() {
  const catalogUrl = import.meta.env.VITE_CHECKOUT_PRICES_API_URL;

  if (!catalogUrl) {
    throw new Error('Missing VITE_CHECKOUT_PRICES_API_URL environment variable.');
  }

  if (!checkoutCatalogPromise) {
    checkoutCatalogPromise = fetch(catalogUrl).then(async (response) => {
      if (!response.ok) {
        console.error('[useCheckoutPrices] checkout prices request failed', {
          url: catalogUrl,
          status: response.status,
          statusText: response.statusText,
        });
        throw new Error(`Checkout prices responded with ${response.status}`);
      }

      return response.json();
    });
  }

  return checkoutCatalogPromise;
}

export function useCheckoutPrices(productKey: string) {
  const [scrapedData, setScrapedData] = useState<PricingScrapedData>();
  const [isLoadingPrices, setIsLoadingPrices] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<PricingLoadStatus>('loading');
  const { product, requestedProductKey, resolvedProductKey, hasRequestedProduct } = useMemo(
    () => resolvePricingProduct(productKey),
    [productKey],
  );
  const checkoutProductId = product.checkoutProductId;

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
        const catalog = await loadCheckoutCatalog();
        const productCatalog = catalog[checkoutProductId];

        if (!productCatalog) {
          if (!isCancelled) {
            setError(new Error(`Checkout prices catalog is missing product "${checkoutProductId}".`));
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
          const nextError = error instanceof Error ? error : new Error('Unknown checkout pricing error.');
          console.error('[useCheckoutPrices] Failed to load checkout prices catalog', {
            url: import.meta.env.VITE_CHECKOUT_PRICES_API_URL,
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
  }, [hasRequestedProduct, checkoutProductId, requestedProductKey, resolvedProductKey]);

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
