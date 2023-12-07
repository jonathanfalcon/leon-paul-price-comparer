import { CurrencyApiResponse, CurrencyCode, ExchangeRateMap } from '@leon-paul-price-comparer/types'
import { ExchangeRateError } from '../../exceptions'

const { CURRENCY_API_KEY } = process.env

const fetchExchangeRate = async () => {
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
        const responses = await Promise.all(urls.map(url => fetch(url)))
        const data = await Promise.all(responses.map(response => response.json()))

        const [response_AUD, response_CAD, response_EUR, response_GBP, response_UAH, response_USD] =
            data



    } catch (error) {}
}