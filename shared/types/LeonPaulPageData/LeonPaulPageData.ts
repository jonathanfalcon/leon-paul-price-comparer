import { Product } from './Product/Product'
import { MagentoInit } from './MagentoInit/MagentoInit'

/**
 * Represents the data collected from scraping a Leon Paul product page.
 *
 * @property product - Contains all basic product information unrelated to pricing.
 * @property magentoInit - Contains all pricing information, as well as product attributes and options.
 *
 * @see Product
 * @see MagentoInit
 */
export type LeonPaulPageData = {
    product: Product
    magentoInit: MagentoInit
}
