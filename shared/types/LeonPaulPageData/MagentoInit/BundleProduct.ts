import { Prices } from '../Common/Prices'

/**
 * Represents a selection inside in an option category, .e.g., Mag-Tec Zer0 Pistol Grip in the grips option category.
 *
 * @property optionId - The unique identifier for a given selection.
 * @property name - The name for a given selection.
 * @property prices - A collection of price properties for a given selection.
*/
export type Selection = {
    optionId: string,
    name: string,
    prices: Prices,
}


/**
 * Represents an option category inside a product bundle, .e.g, grip, blade, or guard for the "Custom Foil Creator" product.
 *
 * @property title - The name of a given option category.
 * @property selections - A collection of the possible selection for a given option category.
 *
 * @see Selection
 */
export type Option = {
    title: string,
    selections: Record<string, Selection>
}


/**
 * Represents the properties of a bundle product's JSON.
 *
 * @property options - An object containing key-value pairs, where each key represents a unique option category (e.g., grip) identifier, and each value is an `Option` object representing a category.
 *
 * @see Option
 */
export type BundleConfig = {
    options: Record<string, Option>,
}


/**
 * Represents the structure of magento-init for a product where `"product_type": "bundle"`.
 *
 * @see BundleConfig
 */
export type BundleProduct = {
    '#product_addtocart_form': {
        priceBundle: {
            optionConfig: BundleConfig,
        },
    },
}