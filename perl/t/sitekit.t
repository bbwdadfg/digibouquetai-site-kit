use strict;
use warnings;
use Test::More tests => 7;
use lib 'lib';
use DigiBouquetAI::SiteKit qw(
  home_url create_bouquet_url ai_gift_card_url examples_url
  guides_url pricing_url about_url
);

is(home_url(), 'https://digibouquetai.com');
is(create_bouquet_url(), 'https://digibouquetai.com/create-bouquet');
is(ai_gift_card_url(), 'https://digibouquetai.com/ai-card');
is(examples_url(), 'https://digibouquetai.com/bouquet-examples');
is(guides_url(), 'https://digibouquetai.com/guides');
is(pricing_url(), 'https://digibouquetai.com/pricing');
is(about_url(), 'https://digibouquetai.com/about');
