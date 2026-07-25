# DigiBouquet AI Site Kit

A small, dependency-free JavaScript helper for projects that link to
[DigiBouquet AI](https://digibouquetai.com). It exports factual site metadata
and canonical URLs for the bouquet builder, AI gift-card creator, examples,
guides, and pricing pages.

This is a site integration helper, not an official API SDK. It makes no network
requests.

## Install

```sh
npm install digibouquetai-site-kit
```

## Usage

```js
import {
  aiBouquetUrl,
  pageUrl,
  siteMetadata,
} from 'digibouquetai-site-kit';

console.log(siteMetadata.homepage);
console.log(pageUrl('aiGiftCard'));
console.log(aiBouquetUrl());
```

Useful DigiBouquet AI pages:

- [Create a digital bouquet](https://digibouquetai.com/create-bouquet)
- [Create an AI gift card](https://digibouquetai.com/ai-card)
- [Bouquet examples](https://digibouquetai.com/bouquet-examples)
- [Guides](https://digibouquetai.com/guides)
- [Pricing](https://digibouquetai.com/pricing)

## Source and license

Source: [bbwdadfg/digibouquetai-site-kit](https://github.com/bbwdadfg/digibouquetai-site-kit)

The repository also contains the equivalent Go module and JSR TypeScript
source, so consumers can use the same canonical link vocabulary across those
ecosystems without adding network calls.

MIT licensed.
