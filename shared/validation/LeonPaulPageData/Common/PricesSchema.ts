import { z } from 'zod'

/**
 * Zod schema for a set of prices.
 *
 * @see Prices
 */
export const PricesSchema = z.object({
    basePrice: z.object({
        amount: z.number(),
    }),
    finalPrice: z.object({
        amount: z.number(),
    }),
})
