import { z } from 'zod'
import { ProductTypeEnum } from '@leon-paul-price-comparer/validation/Common'

/**
 * The product type of a given product. Can only be one of three values: `simple`, `configurable`, or `bundle`.
 */
export type ProductType = z.infer<typeof ProductTypeEnum>
