import { CurrencyApiResponse, CurrencyCode, ExchangeRate } from '@leon-paul-price-comparer/types'
import { ExchangeRateError } from '../../../exceptions'

const { CURRENCY_API_KEY } = process.env

/**
 * Fetches the exchange rate object from the currency api.
 *
 * @param url The url to fetch the exchange rate from.
 * @param baseCurrency The base currency to fetch the exchange rate for.
 *
 * @returns A promise that resolves to a `CurrencyApiResponse` object.
 *
 * @throws {ExchangeRateError} If the response status indicates an HTTP error.
 */
const fetchIndividualExchangeRate = async <Currency extends CurrencyCode[]>(
    url: string,
    baseCurrency: CurrencyCode,
): Promise<CurrencyApiResponse<Currency>> => {
    const controller = new AbortController()
    const signal = controller.signal

    setTimeout(() => {
        controller.abort()
    }, 8000)

    try {
        const response = await fetch(url, { signal })

        if (response.ok) {
            return await response.json()
        } else {
            throw new ExchangeRateError('HttpError', {
                currency: baseCurrency,
                status: response.status,
            })
        }
    } catch (error) {
        switch (error.name) {
            case 'NetworkError':
                throw new ExchangeRateError('NetworkError', { currency: baseCurrency })
            case 'AbortError':
                throw new ExchangeRateError('TimeoutError', { currency: baseCurrency })
            default:
                throw error
        }
    }
}

/**
 * Concurrently fetches all necessary exchange rates from the currency api.
 *
 * @returns A promise that resolves to an `ExchangeRate` object.
 *
 * @see ExchangeRate
 *
 * @throws {ExchangeRateError} If any errors occur during or after fetching of exchange rates.
 */
export const fetchExchangeRate = async (): Promise<ExchangeRate> => {
    const baseUrl = 'https://api.currencyapi.com/v3/latest?apikey='

    const currencyPairs = {
        AUD: ['CAD', 'EUR', 'GBP', 'UAH', 'USD'],
        CAD: ['EUR', 'GBP', 'UAH', 'USD'],
        EUR: ['GBP', 'UAH', 'USD'],
        GBP: ['UAH', 'USD'],
        UAH: ['USD'],
    }

    const urls = Object.keys(currencyPairs).map(currency => {
        const currencies = currencyPairs[currency].join()
        return (
            baseUrl +
            CURRENCY_API_KEY +
            `&currencies=${encodeURIComponent(currencies)}&base_currency=${currency}`
        )
    })

    try {
        const [response_AUD, response_CAD, response_EUR, response_GBP, response_UAH] =
            await Promise.all([
                fetchIndividualExchangeRate<['CAD', 'EUR', 'GBP', 'UAH', 'USD']>(urls[0], 'AUD'),
                fetchIndividualExchangeRate<['EUR', 'GBP', 'UAH', 'USD']>(urls[1], 'CAD'),
                fetchIndividualExchangeRate<['GBP', 'UAH', 'USD']>(urls[2], 'EUR'),
                fetchIndividualExchangeRate<['UAH', 'USD']>(urls[3], 'GBP'),
                fetchIndividualExchangeRate<['USD']>(urls[4], 'UAH'),
            ])

        return {
            exchangeRate: {
                AUD: {
                    AUD: 1,
                    CAD: response_AUD.data.CAD.value,
                    EUR: response_AUD.data.EUR.value,
                    GBP: response_AUD.data.GBP.value,
                    UAH: response_AUD.data.UAH.value,
                    USD: response_AUD.data.USD.value,
                },
                CAD: {
                    AUD: 1 / response_AUD.data.CAD.value,
                    CAD: 1,
                    EUR: response_CAD.data.EUR.value,
                    GBP: response_CAD.data.GBP.value,
                    UAH: response_CAD.data.UAH.value,
                    USD: response_CAD.data.USD.value,
                },
                EUR: {
                    AUD: 1 / response_AUD.data.EUR.value,
                    CAD: 1 / response_CAD.data.EUR.value,
                    EUR: 1,
                    GBP: response_EUR.data.GBP.value,
                    UAH: response_EUR.data.UAH.value,
                    USD: response_EUR.data.USD.value,
                },
                GBP: {
                    AUD: 1 / response_AUD.data.GBP.value,
                    CAD: 1 / response_CAD.data.GBP.value,
                    EUR: 1 / response_EUR.data.GBP.value,
                    GBP: 1,
                    UAH: response_GBP.data.UAH.value,
                    USD: response_GBP.data.USD.value,
                },
                UAH: {
                    AUD: 1 / response_AUD.data.UAH.value,
                    CAD: 1 / response_CAD.data.UAH.value,
                    EUR: 1 / response_EUR.data.UAH.value,
                    GBP: 1 / response_GBP.data.UAH.value,
                    UAH: 1,
                    USD: response_UAH.data.USD.value,
                },
                USD: {
                    AUD: 1 / response_AUD.data.USD.value,
                    CAD: 1 / response_CAD.data.USD.value,
                    EUR: 1 / response_EUR.data.USD.value,
                    GBP: 1 / response_GBP.data.USD.value,
                    UAH: 1 / response_UAH.data.USD.value,
                    USD: 1,
                },
            },
            lastFetch: Date.now(),
        }
    } catch (error) {
        throw new ExchangeRateError('MissingDataError', {})
    }
}
