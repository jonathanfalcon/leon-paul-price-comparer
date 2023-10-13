import URI from 'urijs'
import { CountryCode, PageType } from '@leon-paul-price-comparer/types/Common'
import {
    countryCodeDomainCurrencyArray,
    validCountryDomains,
} from '@leon-paul-price-comparer/utils/objects'

/**
 * A regular expression that matches product page paths. It ensures that a URL path must:
 *
 * 1. Be in the root directory: `^\/`
 * 2. Contain zero or more groups, separated only a single hyphen, of at least one or more valid URL characters: `([A-Za-z0-9]+-)*`
 * 3. Contain one or more valid URL characters in addition to the prior condition: `[A-Za-z0-9]+`
 * 4. End with `.html`: `\.html$`
 */
const productPathRegex = /^\/([A-Za-z0-9]+-)*[A-Za-z0-9]+\.html$/

/**
 * Represents the components of a URL.
 * @property protocol - The URL protocol (e.g., `http` or `https`).
 * @property subdomain - The URL subdomain (e.g., `app` for `app.example.com`).
 * @property domain - The URL domain (e.g., `example.com`).
 * @property path - The URL path (e.g., `/path/to/resource`).
 * @property extension - The URL extension (e.g., `html` or `png`).
 * @property query - The URL query string (e.g., `?id=123&search=keyword`).
 * @property anchor - The URL anchor (e.g., fragment identifier, `#section`).
 */
type UrlComponents = {
    protocol: string | null
    subdomain: string | null
    domain: string | null
    path: string | null
    extension: string | null
    query: string | null
    anchor: string | null
}

/**
 * Dissects a given URL into its main components. The URL is standardized it in the process by forcing protocol to `https` and suffix to `html`.
 * @param urlString A URL in string format.
 * @returns Returns an object with the protocol, subdomain, domain, path, extension, query params, and anchor tags. An absent component is represented by a null value. An invalid url will return an object where all components are null values.
 *
 * @example
 * const url = 'http://www.leonpaul.com/project-zero-foil?utm_medium=email#specs'
 * console.log(extractUrlComponents(url))
 *
 * // This will be logged to the console:
 * {
 *    protocol: 'https',
 *    subdomain: 'www',
 *    domain: 'leonpaul.com',
 *    path: '/project-zero-foil.html',
 *    extension: 'html',
 *    query: 'utm_medium=email',
 *    anchor: '#specs'
 * }
 */
const extractUrlComponents = (urlString: string): UrlComponents => {
    try {
        const urlDirty = new URI(urlString).protocol('https').suffix('html')

        const url = new URI(urlDirty.readable())
        url.normalize()

        const protocol = url.protocol().length > 0 ? url.protocol() : null
        const subdomain = url.subdomain().length > 0 ? url.subdomain() : null
        const domain = url.domain().length > 0 ? url.domain() : null
        const path = url.path().length > 0 ? url.path() : null
        const extension = url.suffix().length > 0 ? url.suffix() : null
        const query = url.query().length > 0 ? url.query() : null
        const anchor = url.hash().length > 0 ? url.hash() : null

        return {
            protocol,
            subdomain,
            domain,
            path,
            extension,
            query,
            anchor,
        }
    } catch (error) {
        return {
            protocol: null,
            subdomain: null,
            domain: null,
            path: null,
            extension: null,
            query: null,
            anchor: null,
        }
    }
}

/**
 * Validates that a given URL is a Leon Paul URL.
 * @param url A URL in string format.
 * @returns Returns `true` if the url domain matched a Leon Paul domain; `false` if otherwise.
 */
const validate = (url: string): boolean => {
    const { domain } = extractUrlComponents(url)

    if (domain) {
        return validCountryDomains.includes(domain)
    }

    return false
}

/**
 * Cleans and formats a Leon Paul URL, preserving only the domain and path.
 * @param url A URL in string format.
 * @returns Returns either the cleaned and formatted URL or an empty string (a falsy value).
 */
const clean = (url: string): string => {
    const { domain, path } = extractUrlComponents(url)
    return `https://www.${domain}${path}`
}

/**
 * Identifies which regional site a Leon Paul URL belongs to.
 * @param url A Leon Paul URL in string format.
 * @returns Returns the ISO country code the URL belongs to.
 * @throws {Error} Throws an error if the given URL is not a valid Leon Paul URL.
 * @example
 * console.log(region('https://www.leonpaul.com/mens-apex-fie-jacket.html'))
 *
 * // This will be logged the console:
 * 'GBR'
 */
const region = (url: string): CountryCode => {
    const { domain } = extractUrlComponents(url)

    const region = countryCodeDomainCurrencyArray.find(country => country.domain === domain)
        ?.country

    if (region) {
        return region
    } else {
        throw new Error('Given URL is not a valid Leon Paul URL.')
    }
}

/**
 * Identifies which page type a Leon Paul URL is.
 * @param url A Leon Paul URL in string format.
 * @returns Returns a string containing the page type. Returns `other` if page type does not match `product` or `catalogSearch` or if an error is thrown.
 * @example
 * console.log(pageType('https://www.leonpaul.com/mens-apex-fie-jacket.html'))
 *
 * // This will be logged the console:
 * 'product'
 */
const pageType = (url: string): PageType => {
    try {
        const { path } = extractUrlComponents(url)

        if (path) {
            if (path.includes('catalogsearch/result/')) {
                return 'catalogSearch'
            } else if (productPathRegex.test(path)) {
                return 'product'
            }
        }

        return 'other'
    } catch (error) {
        return 'other'
    }
}

/**
 * An object containing functions for working with Leon Paul URLs.
 * @property clean - Cleans and formats a Leon Paul URL, preserving only the domain and path.
 * @property validate - Validates that a given URL is a Leon Paul URL.
 * @property region - Identifies which regional site a Leon Paul URL belongs to.
 * @property pageType - Identifies which page type a Leon Paul URL is
 * @see clean
 * @see validate
 * @see country
 * @see pageType
 */
const leonPaulUrl = {
    clean,
    validate,
    region,
    pageType
}

export default leonPaulUrl
