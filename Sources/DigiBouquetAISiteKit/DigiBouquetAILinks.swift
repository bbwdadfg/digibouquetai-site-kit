import Foundation

public enum DigiBouquetAILinks {
    public static let home = URL(string: "https://digibouquetai.com")!
    public static let createBouquet = URL(string: "https://digibouquetai.com/create-bouquet")!
    public static let aiGiftCard = URL(string: "https://digibouquetai.com/ai-card")!
    public static let examples = URL(string: "https://digibouquetai.com/bouquet-examples")!
    public static let guides = URL(string: "https://digibouquetai.com/guides")!
    public static let pricing = URL(string: "https://digibouquetai.com/pricing")!
    public static let about = URL(string: "https://digibouquetai.com/about")!

    public static func page(_ slug: String) -> URL {
        let clean = slug.trimmingCharacters(in: CharacterSet(charactersIn: "/"))
        guard !clean.isEmpty else {
            return home
        }
        return URL(string: "https://digibouquetai.com/\(clean)")!
    }
}
