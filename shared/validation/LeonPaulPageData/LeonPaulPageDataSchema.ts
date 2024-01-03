import { ProductSchema } from './Product/ProductSchema'
import { MagentoInitSchema } from './MagentoInit/MagentoInitSchema'
import { z } from 'zod'

/**
 * Zod schema for data collected from scraping a Leon Paul product page.
 *
 * @see LeonPaulPageData
 */
export const LeonPaulPageDataSchema = z.object({
    product: ProductSchema,
    magentoInit: MagentoInitSchema,
    url: z.string(),
})

/**
 * Represents the data collected from scraping a Leon Paul product page.
 *
 * @property product - Contains all basic product information unrelated to pricing.
 * @property magentoInit - Contains all pricing information, as well as product attributes and options.
 *
 * @see Product
 * @see MagentoInit
 */
export type LeonPaulPageData = z.infer<typeof LeonPaulPageDataSchema>
