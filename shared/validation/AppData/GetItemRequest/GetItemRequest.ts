import { z } from 'zod'
import { validCountryCodes } from '@leon-paul-price-comparer/utils/objects'
import leonPaulUrl from '../../leonPaulUrl'

/**
 * Zod schema for Leon Paul URL input. Includes validation via `leonPaulUrl.validate`.
 */
export const UrlInputSchema = z.coerce
    .string()
    .refine(url => leonPaulUrl.validate(url), { message: 'URL is not a valid Leon Paul URL.' })

/**
 * Zod schema for Leon Paul URL input. Includes validation by checking if region is in `validCountryCodes` array.
 */
export const RegionSchema = z.coerce.string().refine(region => validCountryCodes.includes(region))

/**
 * Zod schema for a request to "get" an item by submitting a form with URL and including region codes from local storage.
 */
export const GetItemRequest = z.object({
    url: UrlInputSchema,
    baseRegion: RegionSchema,
    comparisonRegion: RegionSchema,
})
