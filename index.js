const HOMEPAGE = 'https://digibouquetai.com';

const paths = Object.freeze({
  home: '/',
  createBouquet: '/create-bouquet',
  aiGiftCard: '/ai-card',
  examples: '/bouquet-examples',
  guides: '/guides',
  pricing: '/pricing',
});

export const siteMetadata = Object.freeze({
  name: 'DigiBouquet AI',
  homepage: HOMEPAGE,
  description:
    'Create and share digital bouquets and AI-generated gift cards.',
  canonicalPages: Object.freeze(
    Object.fromEntries(
      Object.entries(paths).map(([name, path]) => [
        name,
        new URL(path, HOMEPAGE).href,
      ]),
    ),
  ),
  tags: Object.freeze([
    'digital-bouquet',
    'gift-card',
    'flower-gift',
    'site-kit',
  ]),
});

export function pageUrl(page = 'home') {
  const path = paths[page];
  if (path === undefined) {
    throw new RangeError(`Unknown DigiBouquet AI page: ${page}`);
  }

  return new URL(path, HOMEPAGE).href;
}

export function aiBouquetUrl() {
  const url = new URL(paths.createBouquet, HOMEPAGE);
  url.searchParams.set('mode', 'ai');
  return url.href;
}
