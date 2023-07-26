import { IProductAttributes } from './product'

export interface ICartItem {
  id: number | string
  quantity: number
  inTheCart: boolean
  attributes?: IProductAttributes
}
