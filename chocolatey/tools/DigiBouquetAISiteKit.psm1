function Get-DigiBouquetAISiteKit {
    [CmdletBinding()]
    param()

    [PSCustomObject]@{
        Name = "DigiBouquet AI"
        Homepage = "https://digibouquetai.com"
        CreateBouquet = "https://digibouquetai.com/create-bouquet"
        AIGiftCard = "https://digibouquetai.com/ai-card"
        Examples = "https://digibouquetai.com/bouquet-examples"
        Guides = "https://digibouquetai.com/guides"
        Pricing = "https://digibouquetai.com/pricing"
        About = "https://digibouquetai.com/about"
    }
}

Export-ModuleMember -Function Get-DigiBouquetAISiteKit
