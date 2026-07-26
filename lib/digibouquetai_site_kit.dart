const baseUrl = 'https://digibouquetai.com';

String homeUrl() => baseUrl;

String pageUrl(String slug) {
  final clean = slug.replaceAll(RegExp(r'^/+|/+$'), '');
  return clean.isEmpty ? baseUrl : '$baseUrl/$clean';
}

String createBouquetUrl() => pageUrl('create-bouquet');
String aiGiftCardUrl() => pageUrl('ai-card');
String examplesUrl() => pageUrl('bouquet-examples');
String guidesUrl() => pageUrl('guides');
String pricingUrl() => pageUrl('pricing');
String aboutUrl() => pageUrl('about');
