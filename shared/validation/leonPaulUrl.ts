import URI from 'urijs'

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
    protocol: string,
    subdomain: string,
    domain: string,
    path: string,
    extension: string,
    query: string,
    anchor: string,
}


/**
 * Dissects a given URL into its main components. The URL is standardized it in the process by forcing protocol to `https` and suffix to `html`.
 * @param urlString A URL in string format.
 * @returns Returns an object with the protocol, subdomain, domain, path, extension, query params, and anchor tags. An absent component is represented by an empty string. An invalid url will return an object where all components are an empty string.
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
        const urlDirty = new URI(urlString)
            .protocol('https')
            .suffix('html')

        const url = new URI(urlDirty.readable())
        url.normalize()

        return {
            protocol: url.protocol() || '',
            subdomain: url.subdomain() || '',
            domain: url.domain() || '',
            path: url.path() || '',
            extension: url.suffix() || '',
            query: url.query() || '',
            anchor: url.hash() || '',
        }
    } catch(error) {
        return {
            protocol: '',
            subdomain: '',
            domain: '',
            path: '',
            extension: '',
            query: '',
            anchor: '',
        }
    }
}