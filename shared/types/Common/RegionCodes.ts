/**
 * Represents mapping of ISO country codes and their respective Leon Paul regional sites and ISO currency codes.
 */
export type CountryCodeDomainCurrencyArray = [
    {
        country: 'AUS'
        domain: 'leonpaulaustralia.com'
        currency: 'AUD'
    },
    {
        country: 'CAN'
        domain: 'leonpaulcanada.com'
        currency: 'CAD'
    },
    {
        country: 'DEU'
        domain: 'leonpaulgermany.com'
        currency: 'EUR'
    },
    {
        country: 'FRA'
        domain: 'leonpaulfrance.com'
        currency: 'EUR'
    },
    {
        country: 'ITA'
        domain: 'leonpaulitaly.com'
        currency: 'EUR'
    },
    {
        country: 'GBR'
        domain: 'leonpaul.com'
        currency: 'GBP'
    },
    {
        country: 'UKR'
        domain: 'leonpaulukraine.com'
        currency: 'UAH'
    },
    {
        country: 'USA'
        domain: 'leonpaulusa.com'
        currency: 'USD'
    },
]

/**
 * Represents all the possible Leon Paul regional sites.
 *
 * - `leonpaulaustralia.com` - Australia
 * - `leonpaulcanada.com` - Canada
 * - `leonpaulgermany.com` - Germany
 * - `leonpaulfrance.com` - France
 * - `leonpaulitaly.com` - Italy
 * - `leonpaul.com` - United Kingdom
 * - `leonpaulukraine.com` - Ukraine
 * - `leonpaulusa.com` - United States
 */
export type CountryDomain = CountryCodeDomainCurrencyArray[number]['domain']

/**
 * Represents all the possible Leon Paul regional sites and their corresponding ISO country codes.
 *
 * - `AUS` (Australia) - leonpaulaustralia.com
 * - `CAN` (Canada) - leonpaulcanada.com
 * - `DEU` (Germany) - leonpaulgermany.com
 * - `FRA` (France) - leonpaulfrance.com
 * - `ITA` (Italy) - leonpaulitaly.com
 * - `GBR` (United Kingdom) - leonpaul.com
 * - `UKR` (Ukraine) - leonpaulukraine.com
 * - `USA` (United States) - leonpaulusa.com
 */
export type CountryCode = CountryCodeDomainCurrencyArray[number]['country']

/**
 * Represents all the possible currencies found on Leon Paul's websites.
 *
 * - `AUD` (Australian Dollar) - Used on leonpaulaustralia.com
 * - `CAD` (Canadian Dollar) - Used on leonpaulcanada.com
 * - `EUR` (Euro) - Used on leonpaulgermany.com, leonpaulfrance.com, and leonpaulitaly.com
 * - `GBP` (British Pound Sterling) - Used on leonpaul.com
 * - `UAH` (Ukrainian Hryvnia) - Used on leonpaulukraine.com
 * - `USD` (US Dollar) - Used on leonpaulusa.com
 */
export type CurrencyCode = CountryCodeDomainCurrencyArray[number]['currency']
