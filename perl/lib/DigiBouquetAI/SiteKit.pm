package DigiBouquetAI::SiteKit;

use strict;
use warnings;
use Exporter 'import';

our $VERSION = '0.001';
our @EXPORT_OK = qw(
    base_url
    home_url
    page_url
    create_bouquet_url
    ai_gift_card_url
    examples_url
    guides_url
    pricing_url
    about_url
    metadata
);

sub base_url { return 'https://digibouquetai.com' }
sub home_url { return base_url() }

sub page_url {
    my ($slug) = @_;
    $slug = '' unless defined $slug;
    $slug =~ s{\A/+}{};
    $slug =~ s{/+\z}{};
    return base_url() if $slug eq '';
    return base_url() . '/' . $slug;
}

sub create_bouquet_url { return page_url('create-bouquet') }
sub ai_gift_card_url { return page_url('ai-card') }
sub examples_url { return page_url('bouquet-examples') }
sub guides_url { return page_url('guides') }
sub pricing_url { return page_url('pricing') }
sub about_url { return page_url('about') }

sub metadata {
    return {
        name => 'DigiBouquet AI',
        homepage => base_url(),
        description => 'Digital bouquet and AI gift card creator.',
        tags => [qw(digibouquetai digital-bouquet gift-card flowers)],
    };
}

1;
