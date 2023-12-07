import { CountryCode, CurrencyCode, PageType } from '../../Common'

/**
 * Represents the basic structure of the input context object on WebFetchError.
 *
 * @property url - The URL associated with the error.
 */
type InputContext_WebScraping = {
    url: string
}

/**
 * Represents the basic structure of the context object on WebFetchError.
 *
 * @property url - The URL associated with the error.
 * @property pageType - The type of page associated with the error.
 * @property country - The country code associated with the error.
 */
type PublicContext_WebScraping = InputContext_WebScraping & {
    pageType: PageType
    country: CountryCode
}

/**
 * Represents the basic structure of the public context object on ExchangeRateError.
 *
 * @property currency - The currency code associated with the error.
 */
type PublicContext_ExchangeRate = {
    currency: CurrencyCode
}

/**
 * Represents the additional properties found when WebFetchError name is `HttpError`.
 *
 * @property status - The HTTP status code associated with the error.
 */
type HttpErrorContext = {
    status: number
}

/**
 * Represents all the possible error names when web scraping.
 */
export type WebScrapingErrorName =
    | 'NetworkError'
    | 'TimeoutError'
    | 'MissingDataError'
    | 'HttpError'

/**
 * Represents all the possible error names when fetching exchange rates.
 */
export type ExchangeRateErrorName = WebScrapingErrorName

/**
 * Represents the structure of the input context object when throwing a WebFetchError.
 */
export type WebScrapingErrorDetails_Input = {
    [key in WebScrapingErrorName]: InputContext_WebScraping &
        (key extends 'HttpError' ? HttpErrorContext : NonNullable<unknown>)
}

/**
 * Represents the structure of the public context object when catching a thrown WebFetchError.
 */
export type WebScrapingErrorDetails_Public = {
    [key in WebScrapingErrorName]: PublicContext_WebScraping &
        (key extends 'HttpError' ? HttpErrorContext : NonNullable<unknown>)
}

/**
 * Represents the structure of the public context object when catching a thrown ExchangeRateError.
 */
export type ExchangeRateErrorDetails_Public = {
    [key in ExchangeRateErrorName]: PublicContext_ExchangeRate &
        (key extends 'HttpError' ? HttpErrorContext : NonNullable<unknown>)
}
