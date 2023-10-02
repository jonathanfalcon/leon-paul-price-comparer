import {CountryCode} from '../..'
import {LeonPaulProduct} from './LeonPaulProduct'

/**
 * Represents all the regional product data.
 *
 * @see CountryCode
 * @see LeonPaulProduct
 */
export type LeonPaulRegionalProductCollection = {
    [country in CountryCode]: LeonPaulProduct
}


/**
 * Represents an item found in the web app's Leon Paul cart. Contains general product information and regional product information.
 * @property sku - The SKU of a given product. This is valid for search on Leon Paul's website.
 * @property imageUrl - The url for a given product's image.
 * @property quantity - The quantity of this item in the cart.
 * @property lastFetch - A timestamp indicating when the product data was last fetched and updated. It is generated and stored in Coordinated Universal Time (UTC).
 * @property index - Indicates the position of this item in the cart. Used for repositioning and keeping track of order.
 *
 * @see LeonPaulRegionalProductCollection
 */
export type LeonPaulCartItem = {
    sku: string,
    imageUrl: string,
    quantity: number,
    lastFetch: number,
    index: number,
} & LeonPaulRegionalProductCollection


/**
 * Represents a collection of Leon Paul cart items.
 *
 * @see LeonPaulCartItem
 */
export type LeonPaulCart = LeonPaulCartItem[]