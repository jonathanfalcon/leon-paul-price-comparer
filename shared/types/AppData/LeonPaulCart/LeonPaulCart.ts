import { CountryCode, ProductType } from '../..'
import {
    LeonPaulProduct,
    LeonPaulSimpleProduct,
    LeonPaulConfigurableProduct,
    LeonPaulBundleProduct,
} from './LeonPaulProduct'

/**
 * Represents all the regional product data.
 *
 * @see CountryCode
 * @see LeonPaulProduct
 */
export type LeonPaulRegionalProductCollection<Product extends LeonPaulProduct> = {
    [country in CountryCode]: Product
}

/**
 * Represents the common structure of an item found in the web app's Leon Paul cart. Contains general product information and regional product information.
 * @property sku - The SKU of a given product. This is valid for search on Leon Paul's website.
 * @property imageUrl - The url for a given product's image.
 * @property quantity - The quantity of this item in the cart.
 * @property lastFetch - A timestamp indicating when the product data was last fetched and updated. It is generated and stored in Coordinated Universal Time (UTC) as seconds.
 * @property index - Indicates the position of this item in the cart. Used for repositioning and keeping track of order.
 * @property productType - The product type of a given product. Can only be one of three values: `simple`, `configurable`, or `bundle`.
 */
export type LeonPaulCartItemBase<ProductTypeString extends ProductType> = {
    sku: string
    imageUrl: string
    quantity: number
    lastFetch: number
    index: number
    productType: ProductTypeString
}

/**
 * Represents a simple item found in the web app's Leon Paul cart, where `productType: 'simple'`.
 *
 * @see LeonPaulCartItemBase
 * @see LeonPaulRegionalProductCollection
 */
export type LeonPaulCartItemSimple = LeonPaulCartItemBase<'simple'> &
    LeonPaulRegionalProductCollection<LeonPaulSimpleProduct>

/**
 * Represents a configurable item found in the web app's Leon Paul cart, where `productType: 'configurable'`.
 *
 * @see LeonPaulCartItemBase
 * @see LeonPaulRegionalProductCollection
 */
export type LeonPaulCartItemConfigurable = LeonPaulCartItemBase<'configurable'> &
    LeonPaulRegionalProductCollection<LeonPaulConfigurableProduct>

/**
 * Represents a bundle item found in the web app's Leon Paul cart, where `productType: 'bundle'`.
 *
 * @see LeonPaulCartItemBase
 * @see LeonPaulRegionalProductCollection
 */
export type LeonPaulCartItemBundle = LeonPaulCartItemBase<'bundle'> &
    LeonPaulRegionalProductCollection<LeonPaulBundleProduct>

/**
 * Represents all the possible cart items.
 *
 * @see LeonPaulCartItemSimple
 * @see LeonPaulCartItemConfigurable
 * @see LeonPaulCartItemBundle
 */
export type LeonPaulCartItem =
    | LeonPaulCartItemSimple
    | LeonPaulCartItemConfigurable
    | LeonPaulCartItemBundle

/**
 * Represents a collection of Leon Paul cart items.
 *
 * @see LeonPaulCartItem
 */
export type LeonPaulCart = LeonPaulCartItem[]
