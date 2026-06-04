export function parseOfferPriceValue(price: string): number {
  const value = Number(price.replace(/[^\d.]/g, ''));
  return Number.isFinite(value) ? value : 0;
}

export function isOfferCheckoutConfigured(checkoutUrl: string): boolean {
  const normalizedUrl = checkoutUrl.trim();

  if (!normalizedUrl) {
    return false;
  }

  try {
    const baseUrl = typeof window === 'undefined' ? 'https://local.invalid' : window.location.origin;
    const parsedUrl = new URL(normalizedUrl, baseUrl);
    const isPlaceholderHost = parsedUrl.hostname === 'example.com';
    const isPlaceholderPath = parsedUrl.pathname.includes('replace-with-checkout-url');

    return !isPlaceholderHost && !isPlaceholderPath;
  } catch {
    return false;
  }
}

export function formatOfferPriceLine(template: string, offer: { price: string; regularPrice: string }) {
  return template.replace('{price}', offer.price).replace('{regularPrice}', offer.regularPrice);
}
