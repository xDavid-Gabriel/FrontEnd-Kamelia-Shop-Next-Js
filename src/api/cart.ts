import { ICartItem, IUser } from '../interfaces'
import { authFetch, ENV } from '../utils'
import Cookie from 'js-cookie'
import { AES, enc } from 'crypto-js'
const secret = process.env.NEXT_PUBLIC_CART_SECRET?.toString()!
export class Cart {
  add(productId: number | string) {
    const products: ICartItem[] = this.getAll()
    //Trae solamente si existe por medio del id, si no trae "-1" si no existe
    const objIndex = products.findIndex(product => product.id === productId)

    let updatedProducts: ICartItem[]

    //Si este es menor a 0, significa que no existe por ende es "-1" y agrega al carrito
    if (objIndex < 0) {
      //la variable "updatedProducts" traera todo lo que hay en el array "products" si no hay nada igual, pondra el "id" y el "quantity"  por defecto el "quantity" en 1 para decir que agrego un producto al carrito
      updatedProducts = [
        ...products,
        { id: productId, quantity: 1, inTheCart: true },
      ]
    } else {
      updatedProducts = products.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 }
        }

        return product
      })
    }
    //Encriptamos en las cookies
    let encrypted = AES.encrypt(
      JSON.stringify(updatedProducts),
      secret,
    ).toString()
    let noEncrypted = JSON.stringify(updatedProducts)
    localStorage.setItem(ENV.CART, noEncrypted)
  }

  getAll() {
    // Traemos la informacion encriptada
    const response = localStorage.getItem(ENV.CART)
    // Desencriptamos la informacion
    // const bytes = AES.decrypt(response || '[]', secret)
    // Convertimos la informacion a string
    // const data = bytes.toString(enc.Utf8)
    // Si no hay informacion, retornamos un array vacio

    if (!response) {
      // Cookie.remove(ENV.CART)
      return []
    } else {
      // Si hay informacion, Parseamos la informacion
      return JSON.parse(response)
    }
  }

  count() {
    const response: ICartItem[] = this.getAll()

    const count = response.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0,
    )
    return count
  }

  // increaseQuantity(productId: number) {
  //   const products: ICartItem[] = this.getAll()

  //   const updatedProducts = products.map(product => {
  //     if (product.id === productId) {
  //       return { ...product, quantity: product.quantity + 1 }
  //     }

  //     return product
  //   })

  //   // Cookie.set(ENV.CART, JSON.stringify(updatedProducts))
  //   //Encriptamos en las cookies
  //   let encrypted = AES.encrypt(JSON.stringify(updatedProducts), secret).toString()
  //   localStorage.setItem(ENV.CART, encrypted)
  // }

  // decreaseQuantity(productId: number) {
  //   const products: ICartItem[] = this.getAll()

  //   const updatedProducts = products.map(product => {
  //     if (product.id === productId && product.quantity > 1) {
  //       return { ...product, quantity: product.quantity - 1 }
  //     }

  //     return product
  //   })

  //   // Cookie.set(ENV.CART, JSON.stringify(updatedProducts))
  //   //Encriptamos en las cookies
  //   let encrypted = AES.encrypt(JSON.stringify(updatedProducts), secret).toString()
  //   localStorage.setItem(ENV.CART, encrypted)
  // }

  // removeItem(productId: number) {
  //   const products: ICartItem[] = this.getAll()

  //   const updatedProducts = products.filter(product => product.id !== productId)

  //   // Cookie.set(ENV.CART, JSON.stringify(updatedProducts))
  //   //Encriptamos en las cookies o localstorage
  //   let encrypted = AES.encrypt(JSON.stringify(updatedProducts), secret).toString()
  //   localStorage.setItem(ENV.CART, encrypted)
  // }
  // deleteAll() {
  //   localStorage.removeItem(ENV.CART)
  // }
}
