import { WebScrapingError } from '../../../exceptions'
import { CountryCode, MagentoInit } from '@leon-paul-price-comparer/types'
import { fetchWithTimeout } from './fetchWithTimeout'
import {
    LeonPaulPageData,
    MagentoInitSchema,
    ProductSchema,
} from '@leon-paul-price-comparer/validation/LeonPaulPageData'
import { Product } from '@leon-paul-price-comparer/types'
import { countryCodeDomainCurrencyArray } from '@leon-paul-price-comparer/utils/objects'
import * as cheerio from 'cheerio'

/**
 * Extracts product data from a page source.
 *
 * @param pageSource The cheerio root object of the page source.
 *
 * @returns A Product object parsed from the product match in the page source.
 */
const _product = (pageSource: cheerio.Root): Product => {
    const script = pageSource('html > head').find('script[type="text/javascript"]').text()

    const productMatch = script
        .match(/window\.dataLayer\.push\((\{.*?"event":"productPage".*?"product":(\{.*?})})\);\s*/)!
        .pop()

    return ProductSchema.parse(JSON.parse(productMatch!))
}

/**
 * Extracts Magento initialization data from a page source.
 *
 * @param pageSource The cheerio root object of the page source.
 *
 * @returns A MagentoInit object parsed from the script in the page source.
 */
const _magentoInit = (pageSource: cheerio.Root): MagentoInit => {
    const configurableBundleProductScript = pageSource(
        'form#product_addtocart_form[data-product-sku]',
    )
        .find('script[type="text/x-magento-init"]')
        .not(':contains("Magento_Catalog")')
        .first()
        .text()

    const simpleProductScript = pageSource('.columns .column.main')
        .find(
            'script[type="text/x-magento-init"]:contains("Magento_Catalog/js/product/view/provider")',
        )
        .text()

    return MagentoInitSchema.parse(
        JSON.parse(
            configurableBundleProductScript.length > 20
                ? configurableBundleProductScript
                : simpleProductScript,
        ),
    )
}

/**
 * Fetches and parses product and Magento initialization data from a given URL.
 *
 * @param url The URL of the page to fetch and parse.
 *
 * @returns A promise that resolves to an object containing the parsed product and Magento initialization data.
 *
 * @throws {WebScrapingError} If there's an error during the web scraping or parsing process.
 */
const product = async (url: string): Promise<LeonPaulPageData> => {
    const pageSource = await fetchWithTimeout(url)

    try {
        const product = _product(pageSource)
        const magentoInit = _magentoInit(pageSource)

        return {
            product,
            magentoInit,
            url,
        }
    } catch (error) {
        throw new WebScrapingError('MissingDataError', { url })
    }
}

/**
 * Searches for product links on the regional Leon Paul search page.
 *
 * @param sku The SKU of the product to search for.
 * @param country The country code of the regional site to search.
 * @param [maxLinks = 2] The maximum number of links to return.
 *
 * @returns A promise that resolves to an array of product links.
 *
 * @throws {WebScrapingError} If no links are found or if there's an error during the web scraping process.
 */
const catalogSearch = async (
    sku: string,
    country: CountryCode,
    maxLinks: number = 2,
): Promise<string[]> => {
    const domain = countryCodeDomainCurrencyArray.find(region => region.country === country)?.domain
    const url = encodeURI(`https://www.${domain}/catalogsearch/result/?q=${sku}`)

    const pageSource = await fetchWithTimeout(url)

    try {
        const searchListLinks = pageSource('ol.products.list.items.product-items')
            .find('.product-item-info .product-item-details .product-item-link')
            .toArray()
            .map(listItem => pageSource(listItem).attr('href')) as string[]

        return searchListLinks.slice(
            0,
            maxLinks >= searchListLinks.length ? searchListLinks.length : maxLinks,
        )
    } catch (error) {
        throw new WebScrapingError('MissingDataError', { url })
    }
}

/**
 * Object containing functions for fetching and parsing product data and search results.
 *
 * @property product Function for fetching and parsing product and Magento initialization data from a given URL.
 * @property catalogSearch Function for searching for product links on a regional Leon Paul search page.
 */
export const fetchPage = {
    product,
    catalogSearch,
}
