export interface IProduct {
  data: IProductData[]
  meta: IMeta
}

export interface IProductData {
  id: number
  attributes: IProductAttributes
}

export interface IProductAttributes {
  name: string
  description: string
  price: number
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  slug: string
  category: ICustomCategory
  model: ICustomCategory
}

export interface ICustomCategory {
  data: ICustomCategoryData
}

export interface ICustomCategoryData {
  id: number
  attributes: ICustomCategoryAttributes
}

export interface ICustomCategoryAttributes {
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface IMeta {
  pagination: IPagination
}

export interface IPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
