package digibouquetai

import (
	"net/url"
	"testing"
)

func TestMetadata(t *testing.T) {
	t.Helper()
	if Name != "DigiBouquet AI" {
		t.Fatalf("unexpected name: %s", Name)
	}
	parsed, err := url.Parse(Homepage)
	if err != nil || parsed.Scheme != "https" {
		t.Fatalf("homepage must be HTTPS: %s", Homepage)
	}
}

func TestPageURL(t *testing.T) {
	target, err := PageURL("aiGiftCard")
	if err != nil {
		t.Fatal(err)
	}
	if target != "https://digibouquetai.com/ai-card" {
		t.Fatalf("unexpected URL: %s", target)
	}

	if _, err := PageURL("missing"); err == nil {
		t.Fatal("expected unknown page error")
	}
}

func TestAIBouquetURL(t *testing.T) {
	target, err := url.Parse(AIBouquetURL())
	if err != nil {
		t.Fatal(err)
	}
	if target.Path != "/create-bouquet" || target.Query().Get("mode") != "ai" {
		t.Fatalf("unexpected AI bouquet URL: %s", target)
	}
}
