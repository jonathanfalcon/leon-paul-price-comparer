import { CountryCode } from '../../Common'

/**
 * Represents the basic structure of the context object on WebScrapingError.
 *
 * @property url - The URL associated with the error.
 * @property pageType - The type of page associated with the error.
 * @property country - The country code associated with the error.
 */
type BaseContext = {
    url: string
    pageType: 'product' | 'searchCatalog'
    country: CountryCode
}

/**
 * Represents the additional properties found when WebScrapingError name is `HttpError`.
 *
 * @property status - The HTTP status code associated with the error.
 */
type HttpErrorContext = {
    status: number
}

export type WebScrapingErrorName =
    | 'NetworkError'
    | 'TimeoutError'
    | 'HttpError'
    | 'MissingDataError'

export type WebScrapingErrorDetails = {
    [key in WebScrapingErrorName]: BaseContext &
        (key extends 'HttpError' ? HttpErrorContext : Record<string, never>)
}
