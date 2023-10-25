import { z } from 'zod'
import { validCountryCodes } from '@leon-paul-price-comparer/utils/objects'
import { leonPaulUrl, extractUrlComponents } from '../../leonPaulUrl'

/**
 * Zod schema for Leon Paul URL input. Includes validation via `leonPaulUrl.validate`.
 */
export const UrlInputSchema = z.coerce
    .string()
    .superRefine((value, ctx) => {
        const { domain, path } = extractUrlComponents(value)

        if (!domain || !path) {
            ctx.addIssue({
                code: z.ZodIssueCode.invalid_string,
                validation: 'url',
                fatal: true,
            })

            return z.NEVER
        }
    })
    .transform((value, ctx) => {
        const url = leonPaulUrl.clean(value)

        const validDomain = leonPaulUrl.validate.domain(url)
        const validPath = leonPaulUrl.validate.path(url)

        if (!validDomain || !validPath) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                params: {
                    validDomain,
                    validPath,
                },
            })
        }
    })

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
