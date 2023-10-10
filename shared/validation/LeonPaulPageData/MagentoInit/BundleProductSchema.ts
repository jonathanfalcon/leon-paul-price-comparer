import { PricesSchema } from '../Common/PricesSchema'
import { z } from 'zod'

/**
 * Zod schema for a selection inside in an option category.
 *
 * @see Selection
 */
export const SelectionSchema = z.object({
    optionId: z.string(),
    name: z.string(),
    prices: PricesSchema,
})

/**
 * Zod schema for a selection inside in an option category.
 *
 * @see Option
 */
export const OptionSchema = z.object({
    title: z.string(),
    selections: z.record(z.string(), SelectionSchema),
})

/**
 * Zod schema for the properties of a bundle product's JSON.
 *
 * @see BundleConfig
 */
export const BundleConfigSchema = z.object({
    options: z.record(z.string(), OptionSchema),
})

/**
 * Zod schema for the properties of a bundle product's JSON.
 *
 * @see BundleProduct
 */
export const BundleProductSchema = z.object({
    '#product_addtocart_form': z.object({
        priceBundle: z.object({
            optionConfig: BundleConfigSchema,
        }),
    }),
})
