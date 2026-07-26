using DigiBouquetAISiteKit;
using Xunit;

namespace DigiBouquetAISiteKitTests;

public sealed class SiteKitTests
{
    [Fact]
    public void ExposesStableProductUrls()
    {
        Assert.Equal("https://digibouquetai.com", SiteKit.HomeUrl());
        Assert.Equal("https://digibouquetai.com/create-bouquet", SiteKit.CreateBouquetUrl());
        Assert.Equal("https://digibouquetai.com/ai-card", SiteKit.AiGiftCardUrl());
        Assert.Equal("https://digibouquetai.com/bouquet-examples", SiteKit.ExamplesUrl());
        Assert.Equal("https://digibouquetai.com/guides", SiteKit.GuidesUrl());
        Assert.Equal("https://digibouquetai.com/pricing", SiteKit.PricingUrl());
        Assert.Equal("https://digibouquetai.com/about", SiteKit.AboutUrl());
    }

    [Fact]
    public void TrimsPageSlugs()
    {
        Assert.Equal("https://digibouquetai.com/guides", SiteKit.PageUrl("/guides/"));
    }
}
