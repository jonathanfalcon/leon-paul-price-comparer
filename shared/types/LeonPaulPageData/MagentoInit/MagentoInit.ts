import { z } from 'zod'
import { MagentoInitSchema } from '@leon-paul-price-comparer/validation/LeonPaulPageData'

/**
 * Represents all the possible structures of magento-init.
 *
 * @see SimpleProduct
 * @see ConfigurableProduct
 * @see BundleProduct
 */
export type MagentoInit = z.infer<typeof MagentoInitSchema>
