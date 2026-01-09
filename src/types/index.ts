export type AuthPayload = {
    token: string
    expires_at: string
}

export type ListResp<T extends object> = {
    items: T[]
    total_count: number
    page: number
}

export interface Product {
    id: number
    taxable: boolean
    shippable: boolean
    countable: boolean
    cookable: boolean
    composite: boolean
    scalable: boolean
    tracking: boolean
    sellable: boolean
    vatPercent: null | number
    name: string
    technicalCardId: null | number
    writeOffMethod: number
    countInBox: number | null
    zone: number
    unit: string
    properties: Property[]
    videos: any[]
    productProperties: ProductProperty[]
    barcode: string
    showMarket: boolean
    lastUpdateTime: string
    technicalCard: boolean
    baseUnitRatio: any[]
    extraData: any[]
    product: number
    sku: string
    crossSellTags: any
    category: number
    supplier: string
    supplierId: number
    productName: string
    brand: number
    description: string
    importProperties: any[]
    recSellPrice: any
    recSupplierPrice: any
    correctionType: number
    shortDescription: string
    stocks: Stock[]
    images: Image[]
    analogs: any[]
    modifiers: any[]
    tags: any[]
}

export interface Property {
    name: string
    value: string
}

export interface ProductProperty {
    name: string
    value: string
}

export interface Stock {
    id: string
    tracking: boolean
    countable: boolean
    composite: boolean
    properties: any[]
    sellPrice: SellPrice
    supplyPrice: SupplyPrice
    imported: string
    impport: number
    originalImport: number
    transfer: any
    importCount: string
    transferCount: string
    originalImportCount: string
    supplier: number
    count: number
    location: number
    expirationDate: any
}

export interface SellPrice {
    UZS: number
    USD: number
    ratio: Ratio
    first: string
}

export interface Ratio {
    "UZS/USD": number
}

export interface SupplyPrice {
    UZS: number
    USD: number
    ratio: Ratio2
    first: string
}

export interface Ratio2 {
    "USD/UZS": number
}

export interface Image {
    id: number
    brand: number
    zone: number
    originalName: string
    name: string
    extension: string
    mimeType: string
    createdAt: string
    updatedAt: string
    sort: number
    urls: Urls
}

export interface Urls {
    "50x_": any
    "100x_": any
    "150x_": any
    "300x_": any
    "500x_": any
    "800x_": any
    original: any
}
