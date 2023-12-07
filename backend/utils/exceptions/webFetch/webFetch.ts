import {
    WebScrapingErrorName,
    WebScrapingErrorDetails_Input,
    WebScrapingErrorDetails_Public,
    ExchangeRateErrorName,
    ExchangeRateErrorDetails_Public,
} from '@leon-paul-price-comparer/types/Error'
import { leonPaulUrl } from '@leon-paul-price-comparer/validation/leonPaulUrl'

/**
 * Abstract class for custom errors related to fetching web resources.
 */
abstract class WebFetchError extends Error {}

/**
 * Base class for custom errors related to web scraping.
 *
 * @param name The name of the error.
 * @param context An object containing additional information about error.
 *
 * @extends Error
 *
 * @see WebScrapingErrorName
 * @see WebScrapingErrorDetails_Public
 * @see WebScrapingErrorDetails_Input
 */
export class WebScrapingError<Name extends WebScrapingErrorName> extends WebFetchError {
    public context: WebScrapingErrorDetails_Public[Name]

    constructor(name: Name, _context: WebScrapingErrorDetails_Input[Name]) {
        super(name)
        this.context = {
            ..._context,
            country: leonPaulUrl.region(_context.url),
            pageType: leonPaulUrl.pageType(_context.url),
        } as WebScrapingErrorDetails_Public[Name]
    }
}

/**
 * Base class for custom errors related to fetching exchange rates.
 *
 * @param name The name of the error.
 * @param context An object containing additional information about error.
 *
 * @extends Error
 *
 * @see ExchangeRateErrorName
 * @see ExchangeRateErrorDetails_Public
 */
export class ExchangeRateError<Name extends ExchangeRateErrorName> extends WebFetchError {
    public context: ExchangeRateErrorDetails_Public[Name]

    constructor(name: Name, context: ExchangeRateErrorDetails_Public[Name]) {
        super(name)
        this.context = context
    }
}
