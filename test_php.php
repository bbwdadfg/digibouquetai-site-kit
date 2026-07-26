<?php

declare(strict_types=1);

require_once __DIR__ . '/src/DigiBouquetAILinks.php';

use DigiBouquetAI\SiteKit\DigiBouquetAILinks;

assert(DigiBouquetAILinks::homeUrl() === 'https://digibouquetai.com');
assert(DigiBouquetAILinks::createBouquetUrl() === 'https://digibouquetai.com/create-bouquet');
assert(DigiBouquetAILinks::aiGiftCardUrl() === 'https://digibouquetai.com/ai-card');
assert(DigiBouquetAILinks::examplesUrl() === 'https://digibouquetai.com/bouquet-examples');
assert(DigiBouquetAILinks::guidesUrl() === 'https://digibouquetai.com/guides');
assert(DigiBouquetAILinks::pricingUrl() === 'https://digibouquetai.com/pricing');
assert(DigiBouquetAILinks::aboutUrl() === 'https://digibouquetai.com/about');
assert(DigiBouquetAILinks::pageUrl('/guides/') === 'https://digibouquetai.com/guides');

echo "php tests passed\n";
