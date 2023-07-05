export interface IModels {
  data: IModelsDatum[]
}

export interface IModelsDatum {
  id: number
  attributes: ModelAttributes
}

export interface ModelAttributes {
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  category: Category
  products: ModelProducts
}

export interface Category {
  data: CategoryData
}

export interface CategoryData {
  id: number
  attributes: CategoryAttributes
}

export interface CategoryAttributes {
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
}

export interface ModelProducts {
  data: ModelProductsDatum[]
}

export interface ModelProductsDatum {
  id: number
  attributes: ProductAttributes
}

export interface ProductAttributes {
  name: string
  description: string
  price: number
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  slug: string
}
