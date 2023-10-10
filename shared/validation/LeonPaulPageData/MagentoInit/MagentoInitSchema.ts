import { SimpleProductSchema } from './SimpleProductSchema'
import { ConfigurableProductSchema } from './ConfigurableProductSchema'
import { BundleProductSchema } from './BundleProductSchema'
import { z } from 'zod'

/**
 * Zod schema for all the possible structures of magento-init.
 *
 * @see MagentoInit
 */
export const MagentoInitSchema = z.union([
    SimpleProductSchema,
    ConfigurableProductSchema,
    BundleProductSchema,
])
