import { CountryCodeDomainCurrencyArray } from '@leon-paul-price-comparer/types/Common'

/**
 * Array mapping relation between ISO country code, Leon Paul domain, and ISO currency code.
 *
 * @see CountryCodeDomainCurrencyArray
 */
export const countryCodeDomainCurrencyArray: CountryCodeDomainCurrencyArray = [
    {
        country: 'AUS',
        domain: 'leonpaulaustralia.com',
        currency: 'AUD',
    },
    {
        country: 'CAN',
        domain: 'leonpaulcanada.com',
        currency: 'CAD',
    },
    {
        country: 'DEU',
        domain: 'leonpaulgermany.com',
        currency: 'EUR',
    },
    {
        country: 'FRA',
        domain: 'leonpaulfrance.com',
        currency: 'EUR',
    },
    {
        country: 'ITA',
        domain: 'leonpaulitaly.com',
        currency: 'EUR',
    },
    {
        country: 'GBR',
        domain: 'leonpaul.com',
        currency: 'GBP',
    },
    {
        country: 'UKR',
        domain: 'leonpaulukraine.com',
        currency: 'UAH',
    },
    {
        country: 'USA',
        domain: 'leonpaulusa.com',
        currency: 'USD',
    },
]

/**
 * Array of all valid ISO country codes, Leon Paul domain, and ISO currency code.
 *
 * @see CountryCode
 */
export const validCountryCodes = countryCodeDomainCurrencyArray.map(country => country.country)

/**
 * Array of all valid Leon Paul domains.
 *
 * @see CountryDomain
 */
export const validCountryDomains = countryCodeDomainCurrencyArray.map(country => country.domain)

/**
 * Array of all valid ISO currency codes.
 *
 * @see CurrencyCode
 */
export const validCurrencyCodes = countryCodeDomainCurrencyArray.map(country => country.currency)
