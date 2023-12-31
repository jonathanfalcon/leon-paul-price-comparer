import { ProductTypeEnum } from '../../Common'
import { z } from 'zod'

/**
 * Zod schema for product object in `window.dataLayer`.
 *
 * @see ProductType
 */
export const ProductSchema = z.object({
    id: z.string(),
    sku: z.string(),
    name: z.string(),
    product_type: ProductTypeEnum,
    image_url: z.string(),
})

/**
 * Represents the structure of product object in `window.dataLayer`.
 *
 * @property id - The unique identifier for a given product.
 * @property sku - The SKU of a given product. This will differ from `id`, and is valid for search on Leon Paul's website, unlike `id`.
 * @property name - The name of a given product.
 * @property product_type - The product type of a given product. Can only be one of three values: `simple`, `configurable`, or `bundle`.
 * @property image_url - The url for a given product's image.
 */
export type Product = z.infer<typeof ProductSchema>
