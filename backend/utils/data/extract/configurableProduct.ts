import {
    LeonPaulPageData,
    LeonPaulCartItemConfigurable,
    CountryCode,
    OneOptionSet,
    MultipleOptionSet,
} from '@leon-paul-price-comparer/types'
import { OneOptionSetSchema } from '@leon-paul-price-comparer/validation/LeonPaulPageData'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configurableProduct_Example_spConfig: LeonPaulPageData = {
    url: 'someString',
    product: {
        id: '12493',
        sku: 'F10AMA',
        name: 'LP - Apex FIE Foil Blade',
        product_type: 'configurable',
        image_url: 'https://www.leonpaul.com/media/catalog/product/f/1/f10ama-a-2.jpg',
    },
    magentoInit: {
        '#product_addtocart_form': {
            configurable: {
                spConfig: {
                    attributes: {
                        '157': {
                            id: '157',
                            label: 'Tang Length',
                            options: [
                                { id: '209', label: 'Long' },
                                { id: '208', label: 'Short' },
                            ],
                        },
                        '180': {
                            id: '180',
                            label: 'Size',
                            options: [
                                { id: '408', label: '5' },
                                { id: '407', label: '3' },
                            ],
                        },
                    },
                    optionPrices: {
                        '12494': {
                            basePrice: { amount: 107.92 },
                            finalPrice: { amount: 129.504001 },
                        },
                        '12495': {
                            basePrice: { amount: 107.92 },
                            finalPrice: { amount: 129.504001 },
                        },
                        '12496': {
                            basePrice: { amount: 107.92 },
                            finalPrice: { amount: 129.504001 },
                        },
                        '12497': {
                            basePrice: { amount: 107.92 },
                            finalPrice: { amount: 129.504001 },
                        },
                    },
                    index: {
                        '12494': { '157': '209', '180': '408' },
                        '12495': { '157': '208', '180': '408' },
                        '12496': { '157': '209', '180': '407' },
                        '12497': { '157': '208', '180': '407' },
                    },
                },
            },
        },
    },
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const configurableProduct_Example_jsonConfig: LeonPaulPageData = {
    url: 'someString',
    product: {
        id: '5731',
        sku: 'F280CX',
        name: 'X-Change FIE Contour Foil Mask',
        product_type: 'configurable',
        image_url: 'https://www.leonpaul.com/media/catalog/product/f/2/f280cx-n-1_1.jpg',
    },
    magentoInit: {
        '#product_addtocart_form': {
            configurable: {
                spConfig: {
                    attributes: {
                        '178': {
                            id: '178',
                            label: 'Size',
                            options: [
                                { id: '382', label: 'S' },
                                { id: '384', label: 'M' },
                                { id: '385', label: 'L' },
                                { id: '386', label: 'XL' },
                            ],
                        },
                        '252': {
                            id: '252',
                            label: 'Bib Type',
                            options: [
                                { id: '607', label: 'Classic ' },
                                { id: '606', label: 'Lightweight ' },
                            ],
                        },
                        '253': {
                            id: '253',
                            label: 'Padding Type',
                            options: [
                                { id: '608', label: 'Standard' },
                                { id: '609', label: 'Ice' },
                                { id: '688', label: 'Air' },
                            ],
                        },
                    },
                    optionPrices: {
                        '5715': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5716': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '5717': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5718': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '5719': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5720': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '5721': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5722': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '5723': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5724': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '5725': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5726': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '5727': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5728': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '5729': { basePrice: { amount: 218 }, finalPrice: { amount: 261.600001 } },
                        '5730': {
                            basePrice: { amount: 237.17 },
                            finalPrice: { amount: 284.604001 },
                        },
                        '7541': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                        '7542': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                        '7543': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                        '7544': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                        '7545': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                        '7546': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                        '7547': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                        '7548': {
                            basePrice: { amount: 239.17 },
                            finalPrice: { amount: 287.004001 },
                        },
                    },
                    index: {
                        '5715': { '178': '382', '252': '607', '253': '608' },
                        '5716': { '178': '382', '252': '606', '253': '609' },
                        '5717': { '178': '382', '252': '606', '253': '608' },
                        '5718': { '178': '382', '252': '607', '253': '609' },
                        '5719': { '178': '384', '252': '607', '253': '608' },
                        '5720': { '178': '384', '252': '606', '253': '609' },
                        '5721': { '178': '384', '252': '606', '253': '608' },
                        '5722': { '178': '384', '252': '607', '253': '609' },
                        '5723': { '178': '385', '252': '607', '253': '608' },
                        '5724': { '178': '385', '252': '606', '253': '609' },
                        '5725': { '178': '385', '252': '606', '253': '608' },
                        '5726': { '178': '385', '252': '607', '253': '609' },
                        '5727': { '178': '386', '252': '607', '253': '608' },
                        '5728': { '178': '386', '252': '606', '253': '609' },
                        '5729': { '178': '386', '252': '606', '253': '608' },
                        '5730': { '178': '386', '252': '607', '253': '609' },
                        '7541': { '178': '382', '252': '607', '253': '688' },
                        '7542': { '178': '382', '252': '606', '253': '688' },
                        '7543': { '178': '384', '252': '607', '253': '688' },
                        '7544': { '178': '384', '252': '606', '253': '688' },
                        '7545': { '178': '385', '252': '607', '253': '688' },
                        '7546': { '178': '385', '252': '606', '253': '688' },
                        '7547': { '178': '386', '252': '607', '253': '688' },
                        '7548': { '178': '386', '252': '606', '253': '688' },
                    },
                },
            },
        },
    },
}

const _spConfig = (magentoInit: OneOptionSet) => {
    return magentoInit['#product_addtocart_form'].configurable.spConfig
}

export const configurableProduct = (
    pageData: LeonPaulPageData,
    countryCode: CountryCode,
): LeonPaulCartItemConfigurable<CountryCode> => {}
