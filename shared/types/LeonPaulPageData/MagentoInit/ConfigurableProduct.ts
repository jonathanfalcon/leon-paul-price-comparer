import { z } from 'zod'
import { AttributesItemOptionSchema, AttributesItemSchema, AttributesSchema, OptionPricesSchema, IndexSchema, ConfigurableConfigSchema, OneOptionSetSchema, MultipleOptionSetSchema, ConfigurableProductSchema } from '@leon-paul-price-comparer/validation/LeonPaulPageData'

/**
 * Represents an option for an attribute item, e.g., standard, ice, or air padding for the attribute padding type.
 * @property id - The unique identifier for a given option.
 * @property label - The label for a given attribute option.
 */
export type AttributesItemOption = z.infer<typeof AttributesItemOptionSchema>

/**
 * Represents an attribute item for a product, e.g., padding type, size, and bib type for a foil mask.
 * @property id - The unique identifier for a given product attribute.
 * @property label - The label for a given product attribute.
 * @property options - An array of options for a given product attribute.
 */
export type AttributesItem = z.infer<typeof AttributesItemSchema>

/**
 * Represents a set of product attributes, which are key-value pairs describing various characteristics of a product.
 */
export type Attributes = z.infer<typeof AttributesSchema>

/**
 * Represents a collection of product configuration prices.
 *
 * It's a set of key-value pairs where each key corresponds to a product configuration's identifier (as found in the `Index`) and its associated price properties.
 */
export type OptionPrices = z.infer<typeof OptionPricesSchema>

/**
 * Represents a mapping of product configurations to their associated attributes and selected options.
 *
 * It's a set of key-value pairs where each key represents a product configuration's identifier, and the corresponding value is another set of key-value pairs representing attribute identifiers and the chosen option's identifier for that attribute.
 */
export type Index = z.infer<typeof IndexSchema>

/**
 * Represents the properties of a configurable product's JSON.
 * @property attributes - A set of product attributes for a given product.
 * @property optionPrices - A collection of product configuration prices.
 * @property index - A mapping of product configurations to their associated attributes and selected options.
 *
 * @see Attributes
 * @see OptionPrices
 * @see Index
 */
export type ConfigurableConfig = z.infer<typeof ConfigurableConfigSchema>

/**
 * Represents the structure of magento-init for a product with a single set of options.
 *
 * @see ConfigurableConfig
 */
export type OneOptionSet = z.infer<typeof OneOptionSetSchema>

/**
 * Represents the structure of magento-init for a product with multiple set of options.
 *
 * @see ConfigurableConfig
 */
export type MultipleOptionSet = z.infer<typeof MultipleOptionSetSchema>

/**
 * Represents the possible structures of magento-init for a product where `"product_type": "configurable"`.
 *
 * It can be either a `OneOptionSet` or a `MultipleOptionSet`.
 *
 * @see OneOptionSet
 * @see MultipleOptionSet
 */
export type ConfigurableProduct = z.infer<typeof ConfigurableProductSchema>
