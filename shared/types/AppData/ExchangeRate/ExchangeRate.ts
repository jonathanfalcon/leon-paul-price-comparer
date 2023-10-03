import { CurrencyCode } from '../..'

/**
 * Represents an object containing all valid exchange rates between defined currency codes.
 *
 * This also type ensures that exchange rates between the same currency are equal to 1.
 *
 *  @see CurrencyCode
 */
type ExchangeRateMap = {
    [base in CurrencyCode]: {
        [target in CurrencyCode]: base extends target ? 1 : number
    }
}

/**
 * Represents the exchange rate object inside the web app.
 *
 * @property exchangeRate - An object that contains exchange rates between different currencies.
 * @property lastFetch - A timestamp indicating when the exchange rate data was last fetched and updated. It is generated and stored in Coordinated Universal Time (UTC).
 *
 * @see ExchangeRates
 */
export type ExchangeRate = {
    exchangeRate: ExchangeRateMap
    lastFetch: number
}
