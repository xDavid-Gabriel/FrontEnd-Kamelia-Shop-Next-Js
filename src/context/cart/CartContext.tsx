import { createContext } from 'react'
import { ICartItem } from '../../interfaces'

interface ContextProps {
  // addCart: (productId: number | string) => void
  addCart: (productId: number | string, quantity?: number) => void
  total: number
  original: number
  discount: number
  price: number
  cart: ICartItem[]
  cartData: ICartItem[]
  isCartLoaded: boolean
  inTheCart: boolean
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  removeItem: (productId: number) => void
  deleteAllItems?: () => void
}
export const CartContext = createContext({} as ContextProps)
