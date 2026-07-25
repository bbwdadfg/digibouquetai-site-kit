export type DigiBouquetPage =
  | 'home'
  | 'createBouquet'
  | 'aiGiftCard'
  | 'examples'
  | 'guides'
  | 'pricing';

export interface DigiBouquetSiteMetadata {
  readonly name: 'DigiBouquet AI';
  readonly homepage: 'https://digibouquetai.com';
  readonly description: string;
  readonly canonicalPages: Readonly<Record<DigiBouquetPage, string>>;
  readonly tags: readonly string[];
}

export const siteMetadata: DigiBouquetSiteMetadata;
export function pageUrl(page?: DigiBouquetPage): string;
export function aiBouquetUrl(): string;
