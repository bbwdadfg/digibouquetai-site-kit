local site = {}

site.base_url = "https://digibouquetai.com"

site.metadata = {
  name = "DigiBouquet AI",
  homepage = site.base_url,
  description = "Digital bouquet and AI gift card creator.",
  tags = { "digibouquetai", "digital-bouquet", "gift-card", "flowers" }
}

function site.home_url()
  return site.base_url
end

function site.page_url(slug)
  local clean = tostring(slug or ""):gsub("^/+", ""):gsub("/+$", "")
  if clean == "" then
    return site.base_url
  end
  return site.base_url .. "/" .. clean
end

function site.create_bouquet_url()
  return site.page_url("create-bouquet")
end

function site.ai_gift_card_url()
  return site.page_url("ai-card")
end

function site.examples_url()
  return site.page_url("bouquet-examples")
end

function site.guides_url()
  return site.page_url("guides")
end

function site.pricing_url()
  return site.page_url("pricing")
end

function site.about_url()
  return site.page_url("about")
end

return site
