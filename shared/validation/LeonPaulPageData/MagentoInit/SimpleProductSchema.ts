import { z } from 'zod'

/**
 * Zod schema for the pricing information for a given product.
 *
 * @see ItemPriceInfo
 */
export const ItemPriceInfoSchema = z.object({
    price_info: z.object({
        final_price: z.number(),
        extension_attributes: z.object({
            tax_adjustments: z.object({
                final_price: z.number(),
            }),
        }),
    }),
})

/**
 * Zod schema for the properties of a simple product's JSON.
 *
 * @see SimpleConfig
 */
export const SimpleConfigSchema = z.object({
    items: z.record(z.string(), ItemPriceInfoSchema),
})

/**
 * Zod schema for the properties of a simple product's JSON.
 *
 * @see SimpleConfig
 */
export const SimpleProductSchema = z.object({
    '*': z.object({
        'Magento_Catalog/js/product/view/provider': z.object({
            data: SimpleConfigSchema,
        }),
    }),
})
