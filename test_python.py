import unittest
import digibouquetai_site_kit as links


class DigiBouquetAISiteKitTest(unittest.TestCase):
    def test_urls(self):
        self.assertEqual(links.home_url(), "https://digibouquetai.com")
        self.assertEqual(links.create_bouquet_url(), "https://digibouquetai.com/create-bouquet")
        self.assertEqual(links.ai_gift_card_url(), "https://digibouquetai.com/ai-card")
        self.assertEqual(links.examples_url(), "https://digibouquetai.com/bouquet-examples")
        self.assertEqual(links.guides_url(), "https://digibouquetai.com/guides")
        self.assertEqual(links.pricing_url(), "https://digibouquetai.com/pricing")
        self.assertEqual(links.about_url(), "https://digibouquetai.com/about")
        self.assertEqual(links.page_url("/guides/"), "https://digibouquetai.com/guides")


if __name__ == "__main__":
    unittest.main()
