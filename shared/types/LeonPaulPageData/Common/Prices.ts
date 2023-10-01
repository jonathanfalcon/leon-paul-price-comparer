/**
 * Represents a set of prices. Each property is an object with an amount property containing the numeric value.
 *
 * Differences only apply to UK price; USA prices are all equal.
 * @property basePrice - The price before VAT.
 * @property finalPrice - The price after VAT.
 */
export type Prices = {
    basePrice: {
        amount: number,
    },
    finalPrice: {
        amount: number,
    },
}