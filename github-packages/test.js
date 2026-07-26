const assert = require("node:assert/strict");
const links = require("./index");
assert.equal(links.homeUrl(), "https://digibouquetai.com");
assert.equal(links.aiGiftCardUrl(), "https://digibouquetai.com/ai-card");
console.log("github-packages tests passed");
