import { z } from 'zod'

/**
 * Zod enum for product type.
 *
 * @see ProductType
 */
export const ProductTypeEnum = z.enum(['simple', 'configurable', 'bundle'])

/**
 * The product type of a given product. Can only be one of three values: `simple`, `configurable`, or `bundle`.
 */
export type ProductType = z.infer<typeof ProductTypeEnum>
