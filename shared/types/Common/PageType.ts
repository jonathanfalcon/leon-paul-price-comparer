/**
 * Represents all the possible page types when working with page data.
 *
 * - `product` - A Leon Paul product page, e.g., `https://www.leonpaul.com/mens-apex-fie-jacket.html`
 * - `catalogSearch` - A Leon Paul catalog search page, e.g., `https://www.leonpaul.com/catalogsearch/result/?q=326XM`
 * - `other` - A catchall type for both invalid pages and other pages like blog posts, FAQs, etc.
 */
export type PageType = 'product' | 'catalogSearch' | 'other'
