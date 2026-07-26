import XCTest
@testable import DigiBouquetAISiteKit

final class DigiBouquetAILinksTests: XCTestCase {
    func testUrls() {
        XCTAssertEqual(DigiBouquetAILinks.home.absoluteString, "https://digibouquetai.com")
        XCTAssertEqual(DigiBouquetAILinks.createBouquet.absoluteString, "https://digibouquetai.com/create-bouquet")
        XCTAssertEqual(DigiBouquetAILinks.aiGiftCard.absoluteString, "https://digibouquetai.com/ai-card")
        XCTAssertEqual(DigiBouquetAILinks.examples.absoluteString, "https://digibouquetai.com/bouquet-examples")
        XCTAssertEqual(DigiBouquetAILinks.guides.absoluteString, "https://digibouquetai.com/guides")
        XCTAssertEqual(DigiBouquetAILinks.pricing.absoluteString, "https://digibouquetai.com/pricing")
        XCTAssertEqual(DigiBouquetAILinks.about.absoluteString, "https://digibouquetai.com/about")
        XCTAssertEqual(DigiBouquetAILinks.page("/guides/").absoluteString, "https://digibouquetai.com/guides")
    }
}
