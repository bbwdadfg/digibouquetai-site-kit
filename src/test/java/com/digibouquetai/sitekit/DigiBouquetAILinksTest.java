package com.digibouquetai.sitekit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class DigiBouquetAILinksTest {
    @Test
    void buildsUrls() {
        assertEquals("https://digibouquetai.com", DigiBouquetAILinks.homeUrl());
        assertEquals("https://digibouquetai.com/create-bouquet", DigiBouquetAILinks.createBouquetUrl());
        assertEquals("https://digibouquetai.com/ai-card", DigiBouquetAILinks.aiGiftCardUrl());
        assertEquals("https://digibouquetai.com/bouquet-examples", DigiBouquetAILinks.examplesUrl());
        assertEquals("https://digibouquetai.com/guides", DigiBouquetAILinks.guidesUrl());
        assertEquals("https://digibouquetai.com/pricing", DigiBouquetAILinks.pricingUrl());
        assertEquals("https://digibouquetai.com/about", DigiBouquetAILinks.aboutUrl());
        assertEquals("https://digibouquetai.com/guides", DigiBouquetAILinks.pageUrl("/guides/"));
    }
}
