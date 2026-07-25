import { assertEquals } from "jsr:@std/assert@1";

import { aiBouquetUrl, pageUrl, siteMetadata } from "./mod.ts";

Deno.test("exports canonical DigiBouquet AI links", () => {
  assertEquals(siteMetadata.name, "DigiBouquet AI");
  assertEquals(siteMetadata.homepage, "https://digibouquetai.com");
  assertEquals(pageUrl("aiGiftCard"), "https://digibouquetai.com/ai-card");
  assertEquals(
    aiBouquetUrl(),
    "https://digibouquetai.com/create-bouquet?mode=ai",
  );
});
