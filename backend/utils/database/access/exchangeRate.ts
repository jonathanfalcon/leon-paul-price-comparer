import { ExchangeRateModel } from '../models/ExchangeRateModel'
import { ExchangeRateMap } from '@leon-paul-price-comparer/types'

const { CURRENCY_API_KEY } = process.env

const fetchExchangeRate = async () => {
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
