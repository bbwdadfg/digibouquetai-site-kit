defmodule DigiBouquetAISiteKit.MixProject do
  use Mix.Project

  def project do
    [
      app: :digibouquetai_site_kit,
      version: "0.1.0",
      elixir: "~> 1.18",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      description: "Canonical URL helpers for DigiBouquet AI digital bouquets and AI gift cards.",
      package: package(),
      docs: [
        main: "DigiBouquetAISiteKit",
        source_url: "https://github.com/bbwdadfg/digibouquetai-site-kit"
      ]
    ]
  end

  def application do
    [extra_applications: [:logger]]
  end

  defp deps do
    [
      {:ex_doc, ">= 0.0.0", only: :dev, runtime: false}
    ]
  end

  defp package do
    [
      licenses: ["MIT"],
      links: %{
        "DigiBouquet AI" => "https://digibouquetai.com",
        "Bouquet builder" => "https://digibouquetai.com/create-bouquet",
        "AI gift card" => "https://digibouquetai.com/ai-card",
        "GitHub" => "https://github.com/bbwdadfg/digibouquetai-site-kit"
      },
      files: ["lib/digibouquetai_site_kit.ex", "mix.exs", "README.md", "LICENSE"]
    ]
  end
end
