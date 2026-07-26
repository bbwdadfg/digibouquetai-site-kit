namespace DigiBouquetAISiteKit;

public static class SiteKit
{
    public const string BaseUrl = "https://digibouquetai.com";

    public static string HomeUrl() => BaseUrl;

    public static string PageUrl(string slug)
    {
        var clean = slug.Trim('/');
        return clean.Length == 0 ? BaseUrl : $"{BaseUrl}/{clean}";
    }

    public static string CreateBouquetUrl() => PageUrl("create-bouquet");
    public static string AiGiftCardUrl() => PageUrl("ai-card");
    public static string ExamplesUrl() => PageUrl("bouquet-examples");
    public static string GuidesUrl() => PageUrl("guides");
    public static string PricingUrl() => PageUrl("pricing");
    public static string AboutUrl() => PageUrl("about");
}
