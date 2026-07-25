// Package digibouquetai provides canonical DigiBouquet AI site metadata and
// URL helpers. It performs no network requests.
package digibouquetai

import (
	"fmt"
	"net/url"
)

const (
	// Name is the public product name.
	Name = "DigiBouquet AI"
	// Homepage is the canonical public website.
	Homepage = "https://digibouquetai.com"
)

var pages = map[string]string{
	"home":          "/",
	"createBouquet": "/create-bouquet",
	"aiGiftCard":    "/ai-card",
	"examples":      "/bouquet-examples",
	"guides":        "/guides",
	"pricing":       "/pricing",
}

// PageURL returns the canonical URL for a named DigiBouquet AI page.
func PageURL(page string) (string, error) {
	path, ok := pages[page]
	if !ok {
		return "", fmt.Errorf("unknown DigiBouquet AI page: %s", page)
	}

	base, err := url.Parse(Homepage)
	if err != nil {
		return "", err
	}

	return base.ResolveReference(&url.URL{Path: path}).String(), nil
}

// AIBouquetURL returns the bouquet builder URL with AI mode enabled.
func AIBouquetURL() string {
	target, _ := url.Parse(Homepage + pages["createBouquet"])
	query := target.Query()
	query.Set("mode", "ai")
	target.RawQuery = query.Encode()
	return target.String()
}
