pub const BASE_URL: &str = "https://digibouquetai.com";

pub fn home_url() -> &'static str {
    BASE_URL
}

pub fn page_url(slug: &str) -> String {
    let clean = slug.trim_matches('/');
    if clean.is_empty() {
        BASE_URL.to_string()
    } else {
        format!("{BASE_URL}/{clean}")
    }
}

pub fn create_bouquet_url() -> String { page_url("create-bouquet") }
pub fn ai_gift_card_url() -> String { page_url("ai-card") }
pub fn examples_url() -> String { page_url("bouquet-examples") }
pub fn guides_url() -> String { page_url("guides") }
pub fn pricing_url() -> String { page_url("pricing") }
pub fn about_url() -> String { page_url("about") }

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn builds_links() {
        assert_eq!(home_url(), "https://digibouquetai.com");
        assert_eq!(create_bouquet_url(), "https://digibouquetai.com/create-bouquet");
        assert_eq!(ai_gift_card_url(), "https://digibouquetai.com/ai-card");
        assert_eq!(examples_url(), "https://digibouquetai.com/bouquet-examples");
        assert_eq!(guides_url(), "https://digibouquetai.com/guides");
        assert_eq!(pricing_url(), "https://digibouquetai.com/pricing");
        assert_eq!(about_url(), "https://digibouquetai.com/about");
        assert_eq!(page_url("/guides/"), "https://digibouquetai.com/guides");
    }
}
