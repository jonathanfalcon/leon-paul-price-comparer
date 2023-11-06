import { CountryCode, PageType } from '../../Common'

/**
 * Represents the basic structure of the input context object on WebScrapingError.
 *
 * @property url - The URL associated with the error.
 * @property pageType - The type of page associated with the error.
 * @property country - The country code associated with the error.
 */
type InputContext = {
    url: string
}

/**
 * Represents the basic structure of the context object on WebScrapingError.
 *
 * @property url - The URL associated with the error.
 * @property pageType - The type of page associated with the error.
 * @property country - The country code associated with the error.
 */
type PublicContext = InputContext & {
    pageType: PageType
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

/**
 * Represents all the possible error names when web scraping.
 */
export type WebScrapingErrorName =
    | 'NetworkError'
    | 'TimeoutError'
    | 'MissingDataError'
    | 'HttpError'

/**
 * Represents the structure of the input context object when throwing a WebScrapingError.
 */
export type WebScrapingErrorDetails_Input = {
    [key in WebScrapingErrorName]: InputContext &
        (key extends 'HttpError' ? HttpErrorContext : NonNullable<unknown>)
}

/**
 * Represents the structure of the public context object when catching a thrown WebScrapingError.
 */
export type WebScrapingErrorDetails_Public = {
    [key in WebScrapingErrorName]: PublicContext &
        (key extends 'HttpError' ? HttpErrorContext : NonNullable<unknown>)
}
