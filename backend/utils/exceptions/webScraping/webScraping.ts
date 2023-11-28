import {
    WebScrapingErrorName,
    WebScrapingErrorDetails_Input,
    WebScrapingErrorDetails_Public,
} from '@leon-paul-price-comparer/types/Error'
import { leonPaulUrl } from '@leon-paul-price-comparer/validation/leonPaulUrl'

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
export class WebScrapingError<Name extends WebScrapingErrorName> extends Error {
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
