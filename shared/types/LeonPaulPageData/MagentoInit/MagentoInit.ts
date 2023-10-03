import { SimpleProduct } from './SimpleProduct'
import { ConfigurableProduct } from './ConfigurableProduct'
import { BundleProduct } from './BundleProduct'

/**
 * Represents all the possible structures of magento-init.
 *
 * @see SimpleProduct
 * @see ConfigurableProduct
 * @see BundleProduct
 */
export type MagentoInit = SimpleProduct | ConfigurableProduct | BundleProduct
