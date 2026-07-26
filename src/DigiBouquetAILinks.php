<?php

declare(strict_types=1);

namespace DigiBouquetAI\SiteKit;

final class DigiBouquetAILinks
{
    public const BASE_URL = 'https://digibouquetai.com';

    public static function homeUrl(): string
    {
        return self::BASE_URL;
    }

    public static function pageUrl(string $slug = ''): string
    {
        $clean = trim($slug, '/');
        return $clean === '' ? self::BASE_URL : self::BASE_URL . '/' . $clean;
    }

    public static function createBouquetUrl(): string
    {
        return self::pageUrl('create-bouquet');
    }

    public static function aiGiftCardUrl(): string
    {
        return self::pageUrl('ai-card');
    }

    public static function examplesUrl(): string
    {
        return self::pageUrl('bouquet-examples');
    }

    public static function guidesUrl(): string
    {
        return self::pageUrl('guides');
    }

    public static function pricingUrl(): string
    {
        return self::pageUrl('pricing');
    }

    public static function aboutUrl(): string
    {
        return self::pageUrl('about');
    }
}
