// export interface ICategory {
//   data: ICategoryDatum[]
//   meta: Meta
// }

// export interface Models {
//   data: ICategoryDatum[]
// }

// export interface PurpleAttributes {
//   name: string
//   slug: string
//   createdAt: Date
//   updatedAt: Date
//   publishedAt: Date
//   models?: Models
//   products?: Products
// }

// export interface ICategoryDatum {
//   id: number
//   attributes: PurpleAttributes
// }

// export interface Products {
//   data: ProductsDatum[]
// }

// export interface ProductsDatum {
//   id: number
//   attributes: FluffyAttributes
// }

// export interface FluffyAttributes {
//   name: string
//   descripcion?: string
//   price: number
//   createdAt: Date
//   updatedAt: Date
//   publishedAt: Date
//   slug: string
// }

// export interface Meta {
//   pagination: Pagination
// }

// export interface Pagination {
//   page: number
//   pageSize: number
//   pageCount: number
//   total: number
// }

export interface ICategory {
  data: ICategoryDatum[]
}

export interface ICategoryDatum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  catalogs?: ICategory
  models?: ICategory
}
