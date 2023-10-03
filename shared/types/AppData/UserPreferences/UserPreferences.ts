import { CountryCode, CurrencyCode } from '../..'

/**
 * Represents available user preferences in web app.
 * @property afterTax - Boolean value that decides if prices shown are before or after including tax. Some countries pricing may not be affected by this, e.g., the United States.
 * @property purchasingCurrency - The ISO currency code of the user's purchasing currency. For example, a user using a US credit to purchase from the UK site would use `USD`.
 * @property regions.baseRegion - The ISO country code of the user's selected region used as the base region for comparison.
 * @property regions.comparisonRegion - The ISO country code of the user's selected region that is compared against the base region.
 *
 * @see CurrencyCode
 * @see CountryCode
 */
export type UserPreferences = {
    afterTax: boolean
    purchasingCurrency: CurrencyCode
    regions: {
        baseRegion: CountryCode
        comparisonRegion: CountryCode
    }
}
