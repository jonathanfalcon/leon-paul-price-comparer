/**
 * Base class for custom errors related to web scraping.
 * @param url The URL associated with the error.
 * @extends Error
 */
export abstract class WebScrapingError extends Error {
    public url: string

    protected constructor(url: string) {
        super()
        this.url = url
    }
}

/**
 * Represents an error related to a timeout during web scraping.
 * @param url The URL associated with the error.
 * @extends WebScrapingError
 */
export class TimeoutError extends WebScrapingError {
    constructor(url: string) {
        super(url)
        this.name = 'TimeoutError'
        this.message = `Connection to ${url} timed out.`
    }
}

/**
 * Represents a network-related error during web scraping.
 * @param message A descriptive error message.
 * @param url The URL associated with the error.
 * @extends WebScrapingError
 */
export class NetworkError extends WebScrapingError {
    constructor(url: string) {
        super(url)
        this.name = 'NetworkError'
        this.message = `Could not connect to ${url}.`
    }
}

/**
 * Represents an HTTP-related error during web scraping.
 * @param url The URL associated with the error.
 * @param status The HTTP status code associated with the error.
 * @extends WebScrapingError
 */
export class HttpError extends WebScrapingError {
    public status: number

    constructor(url: string, status: number) {
        super(url)
        this.name = 'HttpError'
        this.message = `Received status code ${status} at ${url}.`
        this.status = status
    }
}
