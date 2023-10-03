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
export type CountryDomain =
    | 'leonpaulaustralia.com'
    | 'leonpaulcanada.com'
    | 'leonpaulgermany.com'
    | 'leonpaulfrance.com'
    | 'leonpaulitaly.com'
    | 'leonpaul.com'
    | 'leonpaulukraine.com'
    | 'leonpaulusa.com'

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
export type CountryCode = 'AUS' | 'CAN' | 'DEU' | 'FRA' | 'ITA' | 'GBR' | 'UKR' | 'USA'

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
export type CurrencyCode = 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'UAH' | 'USD'
