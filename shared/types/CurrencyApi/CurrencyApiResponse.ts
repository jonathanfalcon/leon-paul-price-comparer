import { CurrencyCode } from '../Common'

/**
 * Represents the data returned from the currency API per currency code.
 * @param code The currency code.
 * @property value The exchange rate of the base currency to given currency code
 */
type CurrencyData<Currency extends CurrencyCode> = {
    code: Currency
    value: number
}

/**
 * Represents the data returned from the currency API.
 * @param meta The metadata of the response.
 * @param data The data of the response.
 *
 * @see CurrencyData
 */
export type CurrencyApiResponse<Currency extends CurrencyCode[]> = {
    meta: {
        last_updated_at: string
    }
    data: Record<Currency[number], CurrencyData<Currency[number]>>
}
