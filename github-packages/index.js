const BASE_URL = "https://digibouquetai.com";

function pageUrl(slug = "") {
  const clean = String(slug).replace(/^\/+|\/+$/g, "");
  return clean ? `${BASE_URL}/${clean}` : BASE_URL;
}

module.exports = {
  BASE_URL,
  metadata: {
    name: "DigiBouquet AI",
    homepage: BASE_URL,
    description: "Digital bouquet and AI gift card creator."
  },
  homeUrl: () => BASE_URL,
  createBouquetUrl: () => pageUrl("create-bouquet"),
  aiGiftCardUrl: () => pageUrl("ai-card"),
  examplesUrl: () => pageUrl("bouquet-examples"),
  guidesUrl: () => pageUrl("guides"),
  pricingUrl: () => pageUrl("pricing"),
  aboutUrl: () => pageUrl("about"),
  pageUrl
};
