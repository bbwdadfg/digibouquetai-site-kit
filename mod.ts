const homepage = "https://digibouquetai.com";

export interface DigiBouquetSiteMetadata {
  readonly name: string;
  readonly homepage: string;
  readonly description: string;
  readonly canonicalPages: Readonly<{
    home: string;
    createBouquet: string;
    aiGiftCard: string;
    examples: string;
    guides: string;
    pricing: string;
  }>;
  readonly tags: readonly string[];
}

export const siteMetadata: DigiBouquetSiteMetadata = Object.freeze({
  name: "DigiBouquet AI",
  homepage,
  description:
    "Create and share digital bouquets and AI-generated gift cards.",
  canonicalPages: Object.freeze({
    home: `${homepage}/`,
    createBouquet: `${homepage}/create-bouquet`,
    aiGiftCard: `${homepage}/ai-card`,
    examples: `${homepage}/bouquet-examples`,
    guides: `${homepage}/guides`,
    pricing: `${homepage}/pricing`,
  }),
  tags: Object.freeze([
    "digital-bouquet",
    "gift-card",
    "flower-gift",
    "site-kit",
  ]),
});

export type DigiBouquetPage = keyof typeof siteMetadata.canonicalPages;

export function pageUrl(page: DigiBouquetPage = "home"): string {
  return siteMetadata.canonicalPages[page];
}

export function aiBouquetUrl(): string {
  const url = new URL(siteMetadata.canonicalPages.createBouquet);
  url.searchParams.set("mode", "ai");
  return url.href;
}
