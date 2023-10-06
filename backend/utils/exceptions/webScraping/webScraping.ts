import {
    WebScrapingErrorName,
    WebScrapingErrorDetails,
} from '@leon-paul-price-comparer/types/Error'

/**
 * Base class for custom errors related to web scraping.
 *
 * @param name The name of the error.
 * @param context An object containing additional information about error.
 *
 * @extends Error
 *
 * @see WebScrapingErrorName
 * @see WebScrapingErrorDetails
 */
export class WebScrapingError<Name extends WebScrapingErrorName> extends Error {
    public context: WebScrapingErrorDetails[Name]

    constructor(name: Name, context: WebScrapingErrorDetails[Name]) {
        super(name)
        this.context = context
    }
}
