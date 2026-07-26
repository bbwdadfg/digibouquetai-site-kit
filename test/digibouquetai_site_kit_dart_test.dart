import 'package:test/test.dart';
import 'package:digibouquetai_site_kit/digibouquetai_site_kit.dart' as links;

void main() {
  test('builds DigiBouquet AI URLs', () {
    expect(links.homeUrl(), 'https://digibouquetai.com');
    expect(links.createBouquetUrl(), 'https://digibouquetai.com/create-bouquet');
    expect(links.aiGiftCardUrl(), 'https://digibouquetai.com/ai-card');
    expect(links.examplesUrl(), 'https://digibouquetai.com/bouquet-examples');
    expect(links.guidesUrl(), 'https://digibouquetai.com/guides');
    expect(links.pricingUrl(), 'https://digibouquetai.com/pricing');
    expect(links.aboutUrl(), 'https://digibouquetai.com/about');
    expect(links.pageUrl('/guides/'), 'https://digibouquetai.com/guides');
  });
}
