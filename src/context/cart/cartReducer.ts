import { CartState } from './'
import { ICartItem } from '../../interfaces'

type CartActionType =
  | {
      type: '[Cart] - Add Product'
      payload: ICartItem[]
    }
  | { type: '[Cart] - Total'; payload: number }
  | {
      type: '[Cart] - Set InTheCart'
      payload: { productId: number; inTheCart: boolean }
    }

export const cartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case '[Cart] - Add Product':
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      }
    case '[Cart] - Total':
      return {
        ...state,
        total: action.payload,
      }
    case '[Cart] - Set InTheCart':
      const { productId, inTheCart } = action.payload
      return {
        ...state,
        cart: state.cart.map(cart => {
          if (cart.id === productId) {
            return { ...cart, inTheCart: inTheCart }
          }
          return cart
        }),
        //aquiiiii
      }
    default:
      return state
  }
}
