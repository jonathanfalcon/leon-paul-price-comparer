import { z } from 'zod'
import { PricesSchema } from '@leon-paul-price-comparer/validation/LeonPaulPageData'

/**
 * Represents a set of prices. Each property is an object with an amount property containing the numeric value.
 *
 * Differences only apply to UK price; USA prices are all equal.
 * @property basePrice.amount - The price before VAT.
 * @property finalPrice.amount - The price after VAT.
 */
export type Prices = z.infer<typeof PricesSchema>
