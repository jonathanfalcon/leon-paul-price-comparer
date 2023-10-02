/**
 * Exports all the types used in the Leon Paul Price Comparer project.
 */

// App Types
export * from './AppData/ExchangeRate/ExchangeRate'
export * from './AppData/LeonPaulCart/LeonPaulCart'
export * from './AppData/LeonPaulCart/LeonPaulProduct'
export * from './AppData/UserPreferences/UserPreferences'

// Web Scraping Types
export * from './LeonPaulPageData/LeonPaulPageData'

// Web Scraping Types - MagentoInit
export * from './LeonPaulPageData/MagentoInit/MagentoInit'
export * from './LeonPaulPageData/MagentoInit/SimpleProduct'
export * from './LeonPaulPageData/MagentoInit/ConfigurableProduct'
export * from './LeonPaulPageData/MagentoInit/BundleProduct'

// Web Scraping Types - Product
export * from './LeonPaulPageData/Product/Product'

// Web Scraping Types - Common
export * from './LeonPaulPageData/Common/Prices'

// Common Types (used in multiple workspaces or lack a distinct grouping)
export * from './Common/RegionCodes'