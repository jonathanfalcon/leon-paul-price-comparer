import {
    LeonPaulPageData,
    LeonPaulCartItemSimple,
    CountryCode,
} from '@leon-paul-price-comparer/types'

/**
 * Extracts product data from a page source where product type is `simple`.
 * @param pageData The page data to extract from.
 * @param country The country code where page data is from.
 */
export const simpleProduct = async (
    pageData: LeonPaulPageData,
    country: CountryCode,
): Promise<LeonPaulCartItemSimple<CountryCode>> => {
    return {
        sku: pageData.product.sku,
        imageUrl: pageData.product.image_url,
        quantity: 1,
        index: 1,
        lastFetch: Date.now(),
        productType: 'simple',
        [country]: {
            itemName: pageData.product.name,
            url: pageData.url,
            price: pageData.magentoInit['*']['Magento_Catalog/js/product/view/provider'].data.items[
                pageData.product.id
            ].price_info.final_price,
        },
    } as LeonPaulCartItemSimple<CountryCode>
}
