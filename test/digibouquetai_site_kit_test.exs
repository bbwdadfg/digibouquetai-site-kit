defmodule DigiBouquetAISiteKitTest do
  use ExUnit.Case

  test "builds DigiBouquet AI URLs" do
    assert DigiBouquetAISiteKit.home_url() == "https://digibouquetai.com"
    assert DigiBouquetAISiteKit.create_bouquet_url() == "https://digibouquetai.com/create-bouquet"
    assert DigiBouquetAISiteKit.ai_gift_card_url() == "https://digibouquetai.com/ai-card"
    assert DigiBouquetAISiteKit.examples_url() == "https://digibouquetai.com/bouquet-examples"
    assert DigiBouquetAISiteKit.guides_url() == "https://digibouquetai.com/guides"
    assert DigiBouquetAISiteKit.pricing_url() == "https://digibouquetai.com/pricing"
    assert DigiBouquetAISiteKit.about_url() == "https://digibouquetai.com/about"
    assert DigiBouquetAISiteKit.page_url("/guides/") == "https://digibouquetai.com/guides"
  end
end
