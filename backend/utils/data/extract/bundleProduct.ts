import {
    CountryCode,
    LeonPaulCartItemBundle,
    LeonPaulPageData,
} from '@leon-paul-price-comparer/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bundleProduct_Example: LeonPaulPageData = {
    url: 'someString',
    product: {
        id: '4665',
        sku: 'ELECSABRE',
        name: 'Custom Sabre Creator',
        product_type: 'bundle',
        image_url: 'https://www.leonpaul.com/media/catalog/product/e/l/elecsabre_2.jpg',
    },
    magentoInit: {
        '#product_addtocart_form': {
            priceBundle: {
                optionConfig: {
                    options: {
                        '17': {
                            title: 'Blade',
                            selections: {
                                '482': {
                                    optionId: '4865',
                                    name: 'LP - Etoile Sabre Blade',
                                    prices: {
                                        basePrice: { amount: 30 },
                                        finalPrice: { amount: 36.000001 },
                                    },
                                },
                                '1677': {
                                    optionId: '12366',
                                    name: 'Apex FIE Sabre Blade',
                                    prices: {
                                        basePrice: { amount: 84.5 },
                                        finalPrice: { amount: 101.400001 },
                                    },
                                },
                                '1787': {
                                    optionId: '12346',
                                    name: 'Apex FIE Sabre Blade',
                                    prices: {
                                        basePrice: { amount: 84.5 },
                                        finalPrice: { amount: 101.400001 },
                                    },
                                },
                            },
                        },
                        '18': {
                            title: 'Grip',
                            selections: {
                                '78': {
                                    optionId: '4257',
                                    name: 'Leather Sabre Handle ',
                                    prices: {
                                        basePrice: { amount: 9.67 },
                                        finalPrice: { amount: 11.604001 },
                                    },
                                },
                                '81': {
                                    optionId: '4262',
                                    name: 'Rubber Gunstock Handle ',
                                    prices: {
                                        basePrice: { amount: 20.17 },
                                        finalPrice: { amount: 24.204001 },
                                    },
                                },
                                '83': {
                                    optionId: '4259',
                                    name: 'Medium Tacktonite Rubber Sabre Handle',
                                    prices: {
                                        basePrice: { amount: 7.5 },
                                        finalPrice: { amount: 9.000001 },
                                    },
                                },
                                '84': {
                                    optionId: '4260',
                                    name: 'Large Tacktonite Rubber Sabre Handle',
                                    prices: {
                                        basePrice: { amount: 7.5 },
                                        finalPrice: { amount: 9.000001 },
                                    },
                                },
                            },
                        },
                        '20': {
                            title: 'Pommel',
                            selections: {
                                '91': {
                                    optionId: '4280',
                                    name: 'Insulated Sabre Pommel',
                                    prices: {
                                        basePrice: { amount: 4.42 },
                                        finalPrice: { amount: 5.304001 },
                                    },
                                },
                            },
                        },
                        '21': {
                            title: 'Socket',
                            selections: {
                                '94': {
                                    optionId: '4335',
                                    name: ' 2-Pin Sabre Socket',
                                    prices: {
                                        basePrice: { amount: 7.5 },
                                        finalPrice: { amount: 9.000001 },
                                    },
                                },
                            },
                        },
                        '240': {
                            title: 'Thumb Pad',
                            selections: {
                                '1029': {
                                    optionId: '4317',
                                    name: 'Electric Foil & Sabre Pad',
                                    prices: {
                                        basePrice: { amount: 1.33 },
                                        finalPrice: { amount: 1.596001 },
                                    },
                                },
                            },
                        },
                        '559': {
                            title: 'Guard',
                            selections: {
                                '1678': {
                                    optionId: '4898',
                                    name: 'Standard Electric Sabre Guard',
                                    prices: {
                                        basePrice: { amount: 19.08 },
                                        finalPrice: { amount: 22.896001 },
                                    },
                                },
                                '1679': {
                                    optionId: '12349',
                                    name: 'Zer0 Electric Sabre Guard',
                                    prices: {
                                        basePrice: { amount: 27.25 },
                                        finalPrice: { amount: 32.700001 },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}

export const bundleProduct = (
    pageData: LeonPaulPageData,
    countryCode: CountryCode,
): LeonPaulCartItemBundle<CountryCode> => {}
