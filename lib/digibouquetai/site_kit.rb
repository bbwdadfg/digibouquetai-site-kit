module DigiBouquetAI
  module SiteKit
    BASE_URL = "https://digibouquetai.com"

    module_function

    def home_url
      BASE_URL
    end

    def page_url(slug = "")
      clean = slug.to_s.gsub(%r{\A/+|/+\z}, "")
      clean.empty? ? BASE_URL : "#{BASE_URL}/#{clean}"
    end

    def create_bouquet_url
      page_url("create-bouquet")
    end

    def ai_gift_card_url
      page_url("ai-card")
    end

    def examples_url
      page_url("bouquet-examples")
    end

    def guides_url
      page_url("guides")
    end

    def pricing_url
      page_url("pricing")
    end

    def about_url
      page_url("about")
    end
  end
end
