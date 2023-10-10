import { z } from 'zod'
import {
    ItemPriceInfoSchema,
    SimpleConfigSchema,
    SimpleProductSchema,
} from '@leon-paul-price-comparer/validation/LeonPaulPageData'

/**
 * Represents the pricing information for a given product.
 *
 * @property price_info.final_price - The price after VAT.
 * @property price_info.extension_attributes.tax_adjustments.final_price - The price before VAT.
 */
export type ItemPriceInfo = z.infer<typeof ItemPriceInfoSchema>

/**
 * Represents the properties of a simple product's JSON.
 *
 * @property items - An object containing key-value pairs, where each key represents a product identifier, and each value is an `ItemPriceInfo` object containing information a product's pricing.
 *
 * @see ItemPriceInfo
 */
export type SimpleConfig = z.infer<typeof SimpleConfigSchema>

/**
 * Represents the structure of magento-init for a product where `"product_type": "simple"`.
 *
 * @see SimpleConfig
 */
export type SimpleProduct = z.infer<typeof SimpleProductSchema>
