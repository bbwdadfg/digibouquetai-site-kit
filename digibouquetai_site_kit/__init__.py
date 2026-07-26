BASE_URL = "https://digibouquetai.com"


def home_url() -> str:
    return BASE_URL


def page_url(slug: str = "") -> str:
    clean = (slug or "").strip("/")
    return BASE_URL if clean == "" else f"{BASE_URL}/{clean}"


def create_bouquet_url() -> str:
    return page_url("create-bouquet")


def ai_gift_card_url() -> str:
    return page_url("ai-card")


def examples_url() -> str:
    return page_url("bouquet-examples")


def guides_url() -> str:
    return page_url("guides")


def pricing_url() -> str:
    return page_url("pricing")


def about_url() -> str:
    return page_url("about")
