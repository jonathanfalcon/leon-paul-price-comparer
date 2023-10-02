/**
 * Represents the price of a product, product configuration, or product option before and after tax.
 * @property beforeTax - The price before tax.
 * @property afterTax - The price after tax.
 */
export type Price = {
    beforeTax: number,
    afterTax: number,
}


/**
 * Represents a selection in a category of a product where `productType: 'bundle'`.
 *
 * For example, Mag-Tec Zer0 Pistol Grip in the grips option category of the "Custom Foil Creator" product.
 * @property selectionName - The name for a given selection.
 * @property selectionId - The unique identifier for a given selection.
 * @property price - The incremental price (before and after tax) of a given selection.
 * @property isChosen - Boolean value indicating whether this selection was chosen in the web app.
 */
export type CartItemOptionSelection = {
    selectionName: string,
    selectionId: string,
    price: Price,
    isChosen: boolean,
}


/**
 * Represents a category of a product where `productType: 'bundle'`.
 *
 * For example, the grips option category of the "Custom Foil Creator" product.
 * @property optionName - The name of a given option category.
 * @property selections - An array of the possible selections for a given option category.
 *
 * @see CartItemOptionSelection
 */
export type CartItemOption = {
    optionName: string,
    selections: CartItemOptionSelection[],
}



/**
 * Represents an option for an attribute item, e.g., standard, ice, or air padding for the attribute padding type.
 *
 * Only found when `productType: 'configurable'`.
 * @property optionName - The name for a given option.
 * @property optionId - The unique identifier for a given option.
 * @property isChosen - Boolean value indicating whether this option was chosen in the web app.
 */
export type CartItemAttributeOption = {
    optionName: string,
    optionId: string,
    isChosen: boolean,
}


/**
 * Represents an attribute item for a product, e.g., padding type, size, or bib type for a foil mask.
 *
 * Only found when `productType: 'configurable'`.
 * @property attributeName - The unique identifier for a given product attribute.
 * @property attributeId - The name of a given product attribute.
 * @property options - An array of options for a given product attribute.
 *
 * @see CartItemAttributeOption
 */
export type CartItemAttribute = {
    attributeName: string,
    attributeId: string,
    options: CartItemAttributeOption[],
}


/**
 * Represents a mapping of product configurations to their associated attributes and selected options.
 *
 * Only found when `productType: 'configurable'`.
 * @property productId - The unique identifier for a given product configuration.
 * @property optionSelection - An array of objects containing the unique identifier for an attribute, e.g., padding type and the unique identifier for that configuration's selected option, e.g., ice padding.
 * @property price - The total price (before and after tax) of a given product configuration.
 */
export type CartItemProduct = {
    productId: string,
    optionSelection: {
        attributeId: string,
        optionId: string,
    }[],
    price: Price,
}


/**
 * Represents the most basic, common structure of a Leon Paul Product.
 *
 * @property itemName - The name of a given product.
 * @property url - The URL to that product.
 * @property price - The total price (before and after tax) of a given product.
 */
export type LeonPaulBaseProduct = {
    itemName: string,
    url: string,
    price: Price,
}


/**
 * Represents an extension of the base product, where `productType: 'simple'`.
 *
 * @property productType - The product type of a given product. In this case, simple, because it lacks options or attributes to choose from.
 */
export type LeonPaulSimpleProduct = LeonPaulBaseProduct & {
    productType: 'simple',
}


/**
 * Represents an extension of the base product, where `productType: 'configurable'`.
 *
 * @property productType - The product type of a given product. In this case, configurable, because it has a set of attributes whose price is found inside products.
 * @property attributes - An array of attributes for a given product, e.g., padding type, size, and bib type for a foil mask.
 * @property products - An array of product configurations with their associated attributes and selected options and their prices.
 *
 * @see CartItemAttribute
 * @see CartItemProduct
 */
export type LeonPaulConfigurableProduct = LeonPaulBaseProduct & {
    productType: 'configurable',
    attributes: CartItemAttribute[],
    products: CartItemProduct[],
}


/**
 * Represents an extension of the base product, where `productType: 'bundle'`.
 *
 * @property productType - The product type of a given product. In this case, bundle, because it has a set of options whose price must be added up to find total price.
 * @property options - An array of options for a given product, .e.g, grip, blade, or guard for the "Custom Foil Creator" product.
 *
 * @see CartItemOption
 */
export type LeonPaulBundleProduct = LeonPaulBaseProduct & {
    productType: 'bundle',
    options: CartItemOption[],
}


/**
 * Represents a Leon Paul product, which can be a simple product, a configurable product, or a bundle product.
 *
 * @see LeonPaulSimpleProduct
 * @see LeonPaulConfigurableProduct
 * @see LeonPaulBundleProduct
 */
export type LeonPaulProduct = LeonPaulSimpleProduct | LeonPaulConfigurableProduct | LeonPaulBundleProduct