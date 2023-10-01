/**
 * Represents the pricing information for a given product.
 *
 * @property price_info.final_price - The price after VAT.
 * @property price_info.extension_attributes.tax_adjustments.final_price - The price before VAT.
 */
export type ItemPriceInfo = {
    price_info: {
        final_price: number,
        extension_attributes: {
            tax_adjustments: {
                final_price: number,
            },
        },
    },
}



/**
 * Represents the properties of a simple product's JSON.
 *
 * @property items - An object containing key-value pairs, where each key represents a product identifier, and each value is an `ItemPriceInfo` object containing information a product's pricing.
 *
 * @see ItemPriceInfo
 */
export type SimpleConfig = {
    items: Record<string, ItemPriceInfo>,
}



/**
 * Represents the structure of magento-init for a product where `"product_type": "simple"`.
 *
 * @see SimpleConfig
 */
export type SimpleProduct = {
    '*': {
        'Magento_Catalog/js/product/view/provider': {
            data: SimpleConfig,
        },
    },
}