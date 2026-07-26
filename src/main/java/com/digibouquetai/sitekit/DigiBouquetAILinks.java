package com.digibouquetai.sitekit;

/**
 * URL helpers for DigiBouquet AI.
 */
public final class DigiBouquetAILinks {
    /** DigiBouquet AI homepage. */
    public static final String BASE_URL = "https://digibouquetai.com";

    private DigiBouquetAILinks() {
    }

    /**
     * Returns the DigiBouquet AI homepage URL.
     *
     * @return homepage URL
     */
    public static String homeUrl() {
        return BASE_URL;
    }

    /**
     * Builds a DigiBouquet AI page URL from a path slug.
     *
     * @param slug page path slug
     * @return page URL
     */
    public static String pageUrl(String slug) {
        String clean = slug == null ? "" : slug.replaceAll("^/+|/+$", "");
        return clean.isEmpty() ? BASE_URL : BASE_URL + "/" + clean;
    }

    /** Returns the bouquet builder URL.
     * @return bouquet builder URL
     */
    public static String createBouquetUrl() {
        return pageUrl("create-bouquet");
    }

    /** Returns the AI gift-card URL.
     * @return AI gift-card URL
     */
    public static String aiGiftCardUrl() {
        return pageUrl("ai-card");
    }

    /** Returns the bouquet examples URL.
     * @return bouquet examples URL
     */
    public static String examplesUrl() {
        return pageUrl("bouquet-examples");
    }

    /** Returns the guides URL.
     * @return guides URL
     */
    public static String guidesUrl() {
        return pageUrl("guides");
    }

    /** Returns the pricing URL.
     * @return pricing URL
     */
    public static String pricingUrl() {
        return pageUrl("pricing");
    }

    /** Returns the about URL.
     * @return about URL
     */
    public static String aboutUrl() {
        return pageUrl("about");
    }
}
