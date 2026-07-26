defmodule DigiBouquetAISiteKit do
  @moduledoc """
  Small URL helpers for [DigiBouquet AI](https://digibouquetai.com).
  """

  @base_url "https://digibouquetai.com"

  def home_url, do: @base_url

  def page_url(slug) when is_binary(slug) do
    clean = String.trim(slug, "/")
    if clean == "", do: @base_url, else: @base_url <> "/" <> clean
  end

  def create_bouquet_url, do: page_url("create-bouquet")
  def ai_gift_card_url, do: page_url("ai-card")
  def examples_url, do: page_url("bouquet-examples")
  def guides_url, do: page_url("guides")
  def pricing_url, do: page_url("pricing")
  def about_url, do: page_url("about")
end
