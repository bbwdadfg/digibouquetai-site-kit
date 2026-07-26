// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "DigiBouquetAISiteKit",
    platforms: [
        .iOS(.v13),
        .macOS(.v10_15)
    ],
    products: [
        .library(
            name: "DigiBouquetAISiteKit",
            targets: ["DigiBouquetAISiteKit"]
        )
    ],
    targets: [
        .target(name: "DigiBouquetAISiteKit"),
        .testTarget(
            name: "DigiBouquetAISiteKitTests",
            dependencies: ["DigiBouquetAISiteKit"]
        )
    ]
)
