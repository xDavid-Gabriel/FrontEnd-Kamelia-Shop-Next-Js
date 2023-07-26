import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { CartContext, cartReducer } from './'
import { ICartItem } from '../../interfaces'
import { Cart, Product } from '../../api'
import { fn } from '../../utils/functions'

export interface CartState {
  total: number
  original: number
  discount: number
  price: number
  cart: ICartItem[]
  cartData: ICartItem[]
  isCartLoaded: boolean
  inTheCart: boolean
}

const CART_INITIAL_STATE: CartState = {
  total: 0,
  original: 0,
  discount: 0,
  price: 0,
  cart: [],
  cartData: [],
  isCartLoaded: false,
  inTheCart: false,
}

const cartCtrl = new Cart()
const productCtrl = new Product()

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)
  const [isCartUpdated, setIsCartUpdated] = useState(false)

  const getCart = async () => {
    const cartItem: ICartItem[] = cartCtrl.getAll() || '[]'

    const cartDataPromise = cartItem.map(async cart => {
      try {
        const products = await productCtrl.getProductById(cart.id)
        return {
          ...cart,
          ...products.data,
        }
      } catch (error) {
        console.error(`Error al obtener el producto`, error)
        return null // Devolver null para indicar que el producto no existe
      }
    })
    const cartData = await Promise.all(cartDataPromise)

    // Filtrar los productos válidos (diferentes de null)
    const validCartData = cartData.filter(item => item !== null)

    dispatch({ type: '[Cart] - Fetch Cart', payload: validCartData })
  }

  useEffect(() => {
    refreshTotalCart()
    getCart()
  }, [])

  useEffect(() => {
    if (isCartUpdated) {
      getCart()
      setIsCartUpdated(false)
    }
  }, [isCartUpdated])

  useEffect(() => {
    let totals = {
      original: 0,
      discount: 0,
      price: 0,
    }

    state.cartData.forEach(product => {
      const price = fn.calcDiscountedPrice(
        product.attributes?.price!,
        product.attributes?.discount!,
      )
      totals = {
        original:
          totals.original + product.attributes?.price! * product.quantity,
        discount:
          totals.discount +
          (product.attributes?.price! - +price) * product.quantity,
        price: totals.price + +price * product.quantity,
      }
    })

    dispatch({
      type: '[Cart] - Totals Dicount Original Price',
      payload: totals,
    })
  }, [state.cartData])

  // const addCart = useCallback(
  //   (productId: number | string, quantity?: number) => {
  //     cartCtrl.add(+productId, quantity)
  //     setIsCartUpdated(true)
  //     refreshTotalCart()
  //   },
  //   [],
  // )
  const addCart = (productId: number | string, quantity?: number) => {
    cartCtrl.add(+productId, quantity)
    setIsCartUpdated(true)
    refreshTotalCart()
  }

  const increaseQuantity = (productId: number) => {
    cartCtrl.increaseQuantity(productId)
    refreshTotalCart()
  }

  const decreaseQuantity = (productId: number) => {
    cartCtrl.decreaseQuantity(productId)
    refreshTotalCart()
  }

  const removeItem = (gameId: number) => {
    cartCtrl.removeItem(gameId)
    refreshTotalCart()
  }

  // const refreshTotalCart = useCallback(() => {
  //   setIsCartUpdated(true)
  //   dispatch({ type: '[Cart] - Add Product', payload: cartCtrl.getAll() })
  //   dispatch({ type: '[Cart] - Total', payload: cartCtrl.count() })
  // }, [])

  const refreshTotalCart = () => {
    setIsCartUpdated(true)
    dispatch({ type: '[Cart] - Add Product', payload: cartCtrl.getAll() })
    dispatch({ type: '[Cart] - Total', payload: cartCtrl.count() })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useStateCartContext = () => useContext(CartContext)
