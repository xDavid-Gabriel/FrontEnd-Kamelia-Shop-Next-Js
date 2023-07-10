import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { CartContext, cartReducer } from './'
import { ICartItem } from '../../interfaces'
import { Cart } from '../../api'

export interface CartState {
  total: number
  cart: ICartItem[]
  isCartLoaded: boolean
  inTheCart: boolean
}

const CART_INITIAL_STATE: CartState = {
  total: 0,
  cart: [],
  isCartLoaded: false,
  inTheCart: false,
}

const cartCtrl = new Cart()

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  useEffect(() => {
    const response = cartCtrl.getAll()

    dispatch({ type: '[Cart] - Total', payload: cartCtrl.count() })
    dispatch({ type: '[Cart] - Add Product', payload: response })
  }, [])

  const addCart = useCallback((productId: number | string) => {
    cartCtrl.add(productId)
    refreshTotalCart()
  }, [])

  const refreshTotalCart = useCallback(() => {
    dispatch({ type: '[Cart] - Add Product', payload: cartCtrl.getAll() })
    dispatch({ type: '[Cart] - Total', payload: cartCtrl.count() })
  }, [])

  return (
    <CartContext.Provider value={{ ...state, addCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useStateCartContext = () => useContext(CartContext)
