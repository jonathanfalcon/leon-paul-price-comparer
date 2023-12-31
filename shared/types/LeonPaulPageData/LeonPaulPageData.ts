import { z } from 'zod'
import { LeonPaulPageDataSchema } from '@leon-paul-price-comparer/validation/LeonPaulPageData'

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
