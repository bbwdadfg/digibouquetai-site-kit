import assert from 'node:assert/strict';
import test from 'node:test';

import { aiBouquetUrl, pageUrl, siteMetadata } from './index.js';

test('exports honest DigiBouquet AI metadata', () => {
  assert.equal(siteMetadata.name, 'DigiBouquet AI');
  assert.equal(siteMetadata.homepage, 'https://digibouquetai.com');
  assert.match(siteMetadata.description, /digital bouquets/i);
  assert.ok(siteMetadata.tags.includes('site-kit'));
  assert.ok(Object.isFrozen(siteMetadata));
  assert.ok(Object.isFrozen(siteMetadata.canonicalPages));
});

test('builds canonical HTTPS page URLs', () => {
  assert.equal(pageUrl(), 'https://digibouquetai.com/');
  assert.equal(
    pageUrl('aiGiftCard'),
    'https://digibouquetai.com/ai-card',
  );

  for (const url of Object.values(siteMetadata.canonicalPages)) {
    assert.equal(new URL(url).protocol, 'https:');
  }
});

test('builds the AI bouquet mode URL without malformed query strings', () => {
  const url = new URL(aiBouquetUrl());
  assert.equal(url.pathname, '/create-bouquet');
  assert.equal(url.searchParams.get('mode'), 'ai');
});

test('rejects unknown page names', () => {
  assert.throws(() => pageUrl('missing'), {
    name: 'RangeError',
    message: 'Unknown DigiBouquet AI page: missing',
  });
});
