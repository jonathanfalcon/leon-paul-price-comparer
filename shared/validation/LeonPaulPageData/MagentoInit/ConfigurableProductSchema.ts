import { PricesSchema } from '../Common/PricesSchema'
import { z } from 'zod'

/**
 * Zod schema for an option for an attribute item.
 *
 * @see AttributesItemOption
 */
export const AttributesItemOptionSchema = z.object({
    id: z.string(),
    label: z.string(),
})

/**
 * Zod schema for an attribute item for a product.
 *
 * @see AttributesItem
 */
export const AttributesItemSchema = z.object({
    id: z.string(),
    label: z.string(),
    options: z.array(AttributesItemOptionSchema),
})

/**
 * Zod schema for a set of product attributes.
 *
 * @see Attributes
 */
export const AttributesSchema = z.record(z.string(), AttributesItemSchema)

/**
 * Zod schema for a collection of product configuration prices.
 *
 * @see OptionPrices
 */
export const OptionPricesSchema = z.record(z.string(), PricesSchema)

/**
 * Zod schema for a mapping of product configurations to their associated attributes and selected options.
 *
 * @see Index
 */
export const IndexSchema = z.record(z.string(), z.record(z.string(), z.string()))

/**
 * Zod schema for properties of a configurable product's JSON.
 *
 * @see ConfigurableConfig
 */
export const ConfigurableConfigSchema = z.object({
    attributes: AttributesSchema,
    optionPrices: OptionPricesSchema,
    index: IndexSchema,
})

/**
 * Zod schema for the structure of magento-init for a product with a single set of options.
 *
 * @see OneOptionSet
 */
export const OneOptionSetSchema = z.object({
    '#product_addtocart_form': z.object({
        configurable: z.object({
            spConfig: ConfigurableConfigSchema,
        }),
    }),
})

/**
 * Zod schema for the structure of magento-init for a product with multiple set of options.
 *
 * @see MultipleOptionSet
 */
export const MultipleOptionSetSchema = z.object({
    '[data-role=swatch-options]': z.object({
        'Magento_Swatches/js/swatch-renderer': z.object({
            jsonConfig: ConfigurableConfigSchema,
        }),
    }),
})

/**
 * Zod schema for the possible structures of magento-init for a product where `"product_type": "configurable"`.
 *
 * @see ConfigurableProduct
 */
export const ConfigurableProductSchema = z.union([OneOptionSetSchema, MultipleOptionSetSchema])
