import { WebScrapingError } from '../../exceptions'
import * as cheerio from 'cheerio'

/**
 * Fetches a resource from the specified URL with an optional timeout.
 *
 * @param url The URL to be fetched.
 * @param [timeout = 8000] Amount of time in milliseconds before fetch request times out.
 *
 * @returns A promise that resolves to the response body as a Cheerio root object if the request is successful.
 *
 * @throws {WebScrapingError} If the response status indicates an HTTP error.
 */
export const fetchWithTimeout = async (
    url: string,
    timeout: number = 8000,
): Promise<cheerio.Root> => {
    const controller = new AbortController()
    const signal = controller.signal

    setTimeout(() => {
        controller.abort()
    }, timeout)

    try {
        const response = await fetch(url, { signal })

        if (response.ok) {
            return cheerio.load(await response.text())
        } else {
            throw new WebScrapingError('HttpError', { url, status: response.status })
        }
    } catch (error) {
        switch (error.name) {
            case 'NetworkError':
                throw new WebScrapingError('NetworkError', { url })
            case 'AbortError':
                throw new WebScrapingError('TimeoutError', { url })
            default:
                throw error
        }
    }
}
