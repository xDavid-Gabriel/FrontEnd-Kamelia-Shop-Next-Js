// export interface IProduct {
//   data: IProductData[]
//   meta: IMeta
// }

// export interface IProductData {
//   id: number
//   attributes: IProductAttributes
// }

// export interface IProductAttributes {
//   name: string
//   description: string
//   price: number
//   discount: number
//   createdAt: Date
//   updatedAt: Date
//   publishedAt: Date
//   slug: string
//   category: ICustomCategory
//   model: ICustomCategory
// }

// export interface ICustomCategory {
//   data: ICustomCategoryData
// }

// export interface ICustomCategoryData {
//   id: number
//   attributes: ICustomCategoryAttributes
// }

// export interface ICustomCategoryAttributes {
//   name: string
//   slug: string
//   createdAt: Date
//   updatedAt: Date
//   publishedAt: Date
// }

// export interface IMeta {
//   pagination: IPagination
// }

// export interface IPagination {
//   page: number
//   pageSize: number
//   pageCount: number
//   total: number
// }

// export interface IProduct {
//   data: IProductData[]
//   meta: IMeta
// }

// export interface IProductData {
//   id: number
//   attributes: IProductAttributes
// }

// export interface IProductAttributes {
//   name: string
//   description: string
//   price: number
//   discount: number
//   createdAt: Date
//   updatedAt: Date
//   publishedAt: Date
//   slug: string
//   envio_gratis: boolean
//   stock: number
//   category: ICustomCategory
//   catalog: ICustomCategory
//   images: IImages
//   cover: ICover
//   model: ICustomCategory
// }

// export interface ICustomCategory {
//   data: ICustomCategoryData
// }

// export interface ICustomCategoryData {
//   id: number
//   attributes: ICustomCategoryAttributes
// }

// export interface ICustomCategoryAttributes {
//   name: string
//   slug: string
//   createdAt: Date
//   updatedAt: Date
//   publishedAt: Date
// }

// export interface IImages {
//   data: IImageData[]
// }

// export interface IImageData {
//   id: number
//   attributes: IImageAttributes
// }

// export interface IImageAttributes {
//   name: string
//   alternativeText: null
//   caption: null
//   width: number
//   height: number
//   formats: IFormats
//   hash: string
//   ext: string
//   mime: string
//   size: number
//   url: string
//   previewUrl: null
//   provider: string
//   provider_metadata: IProviderMetadata
//   createdAt: Date
//   updatedAt: Date
// }

// export interface IFormats {
//   thumbnail: IThumbnail
// }

// export interface IThumbnail {
//   name: string
//   hash: string
//   ext: string
//   mime: string
//   path: null
//   width: number
//   height: number
//   size: number
//   url: string
//   provider_metadata: IProviderMetadata
// }

// export interface IProviderMetadata {
//   public_id: string
//   resource_type: ResourceType
// }

// export enum ResourceType {
//   Image = 'image',
// }

// export interface ICover {
//   data: IDAT
// }

// export interface IDAT {
//   id: number
//   attributes: ITentacledAttributes
// }

// export interface ITentacledAttributes {
//   name: string
//   alternativeText: null
//   caption: null
//   width: number
//   height: number
//   formats: IFormats
//   hash: string
//   ext: string
//   mime: string
//   size: number
//   url: string
//   previewUrl: null
//   provider: string
//   provider_metadata: IProviderMetadata
//   createdAt: Date
//   updatedAt: Date
// }

// export interface IMeta {
//   pagination: IPagination
// }

// export interface IPagination {
//   page: number
//   pageSize: number
//   pageCount: number
//   total: number
// }

export interface IProduct {
  data: IProductData[]
  meta: Meta
}

export interface IProductData {
  id: number
  attributes: IProductAttributes
}

export interface IProductAttributes {
  name: string
  descripcion: string // Cambio de "descripcion" a "description"
  price: number
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  slug: string
  envio_gratis: boolean
  discount: number
  stock: number
  category: Cat
  catalog: Cat
  images: Images
  cover: Cover
  model: Cat // Cambio de "model" a "model" con tipo "Cat"
  measures: Measures
  additional: Additional
}

export interface Additional {
  id: number
  brand: string
  model: string
  line: string
  size: string
  warranty: string
  hypoallergenic: boolean
}

export interface Cat {
  data: CatalogData
}

export interface CatalogData {
  id: number
  attributes: FluffyAttributes
}

export interface FluffyAttributes {
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface Cover {
  data: CoverData
}

export interface CoverData {
  id: number
  attributes: TentacledAttributes
}

export interface TentacledAttributes {
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: PurpleFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface PurpleFormats {
  small: Large
  thumbnail: Large
  medium: Large
  large: Large
}

export interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  url: string
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: ResourceType
}

export enum ResourceType {
  Image = 'image',
}

export interface Images {
  data: ImagesDatum[]
}

export interface ImagesDatum {
  id: number
  attributes: StickyAttributes
}

export interface StickyAttributes {
  name: string
  alternativeText: null
  caption: null
  width: number
  height: number
  formats: FluffyFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: Date
  updatedAt: Date
}

export interface FluffyFormats {
  thumbnail: Large
  small: Large
  medium: Large
  large: Large
}

export interface Measures {
  id: number
  height: number
  width: number
  depth: number
  weight: number
  lock: boolean
  pockets: number
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
