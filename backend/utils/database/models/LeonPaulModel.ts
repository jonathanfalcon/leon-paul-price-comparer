import {
    Price,
    CartItemOptionSelection,
    CartItemOption,
    CartItemAttributeOption,
    CartItemAttribute,
    CartItemProduct,
    LeonPaulSimpleProduct,
    LeonPaulConfigurableProduct,
    LeonPaulBundleProduct,
    LeonPaulCartItem,
    LeonPaulCartItemSimple,
    LeonPaulCartItemConfigurable,
    LeonPaulCartItemBundle,
} from '@leon-paul-price-comparer/types'
import { Schema, model } from 'mongoose'

/**
 * Schema for Price.
 * @see Price
 */
const priceSchema = new Schema<Price>({
    afterTax: { type: Number, required: true },
    beforeTax: { type: Number, required: true },
})

/**
 * Schema for CartItemOptionSelection.
 * @see CartItemOptionSelection
 */
const cartItemOptionSelectionSchema = new Schema<CartItemOptionSelection>({
    selectionName: { type: String, required: true },
    selectionId: { type: String, required: true },
    price: { type: priceSchema, required: true },
    isChosen: { type: Boolean, required: true },
})

/**
 * Schema for CartItemOption.
 * @see CartItemOption
 */
const cartItemOptionSchema = new Schema<CartItemOption>({
    optionName: { type: String, required: true },
    selections: { type: [cartItemOptionSelectionSchema], required: true },
})

/**
 * Schema for CartItemAttributeOption.
 * @see CartItemAttributeOption
 */
const cartItemAttributeOptionSchema = new Schema<CartItemAttributeOption>({
    optionName: { type: String, required: true },
    optionId: { type: String, required: true },
    isChosen: { type: Boolean, required: true },
})

/**
 * Schema for CartItemAttribute.
 * @see CartItemAttribute
 */
const cartItemAttributeSchema = new Schema<CartItemAttribute>({
    attributeName: { type: String, required: true },
    attributeId: { type: String, required: true },
    options: { type: [cartItemAttributeOptionSchema], required: true },
})

/**
 * Schema for CartItemProduct.
 * @see CartItemProduct
 */
const cartItemProductSchema = new Schema<CartItemProduct>({
    productId: { type: String, required: true },
    optionSelection: { type: [cartItemOptionSelectionSchema], required: true },
    price: { type: priceSchema, required: true },
})

/**
 * Schema for LeonPaulSimpleProduct.
 * @see LeonPaulSimpleProduct
 */
const leonPaulSimpleProductSchema = new Schema<LeonPaulSimpleProduct>({
    itemName: { type: String, required: true },
    url: { type: String, required: true },
    price: { type: priceSchema, required: true },
})

/**
 * Schema for LeonPaulConfigurableProduct.
 * @see LeonPaulConfigurableProduct
 */
const leonPaulConfigurableProductSchema = new Schema<LeonPaulConfigurableProduct>({
    attributes: { type: [cartItemAttributeSchema], required: true },
    products: { type: [cartItemProductSchema], required: true },
}).add(leonPaulSimpleProductSchema)

/**
 * Schema for LeonPaulBundleProduct.
 * @see LeonPaulBundleProduct
 */
const leonPaulBundleProductSchema = new Schema<LeonPaulBundleProduct>({
    options: { type: [cartItemOptionSchema], required: true },
}).add(leonPaulSimpleProductSchema)

/**
 * Schema for base LeonPaulCartItem.
 */
const leonPaulCartItemBaseSchema = new Schema<LeonPaulCartItem>(
    {
        sku: { type: String, required: true },
        imageUrl: { type: String, required: true },
        quantity: { type: Number, required: true },
        lastFetch: { type: Number, required: true },
        index: { type: Number, required: true },
    },
    {
        discriminatorKey: 'productType',
        collection: 'leonPaulItems',
    },
)

/**
 * Model for base LeonPaulCartItem.
 */
const LeonPaulCartItemBaseModel = model<LeonPaulCartItem>(
    'LeonPaulCartItemBase',
    leonPaulCartItemBaseSchema,
)

/**
 * Schema for LeonPaulCartItemSimple.
 * @see LeonPaulCartItemSimple
 */
const leonPaulCartItemSimpleSchema = new Schema<LeonPaulCartItemSimple>({
    AUS: { type: leonPaulSimpleProductSchema, required: true },
    CAN: { type: leonPaulSimpleProductSchema, required: true },
    DEU: { type: leonPaulSimpleProductSchema, required: true },
    FRA: { type: leonPaulSimpleProductSchema, required: true },
    GBR: { type: leonPaulSimpleProductSchema, required: true },
    ITA: { type: leonPaulSimpleProductSchema, required: true },
    UKR: { type: leonPaulSimpleProductSchema, required: true },
    USA: { type: leonPaulSimpleProductSchema, required: true },
})

/**
 * Schema for LeonPaulCartItemConfigurable.
 * @see LeonPaulCartItemConfigurable
 */
const leonPaulCartItemConfigurableSchema = new Schema<LeonPaulCartItemConfigurable>({
    AUS: { type: leonPaulConfigurableProductSchema, required: true },
    CAN: { type: leonPaulConfigurableProductSchema, required: true },
    DEU: { type: leonPaulConfigurableProductSchema, required: true },
    FRA: { type: leonPaulConfigurableProductSchema, required: true },
    GBR: { type: leonPaulConfigurableProductSchema, required: true },
    ITA: { type: leonPaulConfigurableProductSchema, required: true },
    UKR: { type: leonPaulConfigurableProductSchema, required: true },
    USA: { type: leonPaulConfigurableProductSchema, required: true },
})

/**
 * Schema for LeonPaulCartItemBundle.
 * @see LeonPaulCartItemBundle
 */
const leonPaulCartItemBundleSchema = new Schema<LeonPaulCartItemBundle>({
    AUS: { type: leonPaulBundleProductSchema, required: true },
    CAN: { type: leonPaulBundleProductSchema, required: true },
    DEU: { type: leonPaulBundleProductSchema, required: true },
    FRA: { type: leonPaulBundleProductSchema, required: true },
    GBR: { type: leonPaulBundleProductSchema, required: true },
    ITA: { type: leonPaulBundleProductSchema, required: true },
    UKR: { type: leonPaulBundleProductSchema, required: true },
    USA: { type: leonPaulBundleProductSchema, required: true },
})

/**
 * Model for LeonPaulCartItemSimple.
 * @see LeonPaulCartItemSimple
 */
export const LeonPaulCartItemSimpleModel = LeonPaulCartItemBaseModel.discriminator(
    'simple',
    leonPaulCartItemSimpleSchema,
)

/**
 * Model for LeonPaulCartItemConfigurable.
 * @see LeonPaulCartItemConfigurable
 */
export const LeonPaulCartItemConfigurableModel = LeonPaulCartItemBaseModel.discriminator(
    'configurable',
    leonPaulCartItemConfigurableSchema,
)

/**
 * Model for LeonPaulCartItemBundle.
 * @see LeonPaulCartItemBundle
 */
export const LeonPaulCartItemBundleModel = LeonPaulCartItemBaseModel.discriminator(
    'bundle',
    leonPaulCartItemBundleSchema,
)
