import { CartState } from './'
import { ICartItem } from '../../interfaces'

type CartActionType =
  | { type: '[Cart] - Add Product'; payload: ICartItem[] }
  | { type: '[Cart] - Total'; payload: number }
  | { type: '[Cart] - Fetch Cart'; payload: ICartItem[] }
  | {
      type: '[Cart] - Totals Dicount Original Price'
      payload: {
        original: number
        discount: number
        price: number
      }
    }

export const cartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case '[Cart] - Add Product':
      return {
        ...state,
        cart: [...action.payload],
      }
    case '[Cart] - Total':
      return {
        ...state,
        total: action.payload,
      }
    case '[Cart] - Totals Dicount Original Price':
      return {
        ...state,
        ...action.payload,
      }
    case '[Cart] - Fetch Cart':
      return {
        ...state,
        cartData: [...action.payload],
      }
    default:
      return state
  }
}
