Pod::Spec.new do |spec|
  spec.name = "DigiBouquetAISiteKit"
  spec.version = "0.1.0"
  spec.summary = "Installable DigiBouquet AI digital gift link helpers."
  spec.description = <<-DESC
    DigiBouquetAISiteKit is a tiny Swift helper that exposes typed links for
    DigiBouquet AI, a web app for digital bouquets and AI gift cards.
  DESC
  spec.homepage = "https://digibouquetai.com"
  spec.license = { :type => "MIT", :file => "LICENSE" }
  spec.author = { "DigiBouquet AI" => "support@digibouquetai.com" }
  spec.source = {
    :git => "https://github.com/bbwdadfg/digibouquetai-site-kit.git",
    :tag => "cocoapods-v#{spec.version}"
  }
  spec.source_files = "Sources/DigiBouquetAISiteKit/**/*.swift"
  spec.swift_versions = ["5.9"]
  spec.ios.deployment_target = "13.0"
  spec.osx.deployment_target = "10.15"
  spec.social_media_url = "https://digibouquetai.com/create-bouquet"
end
