import React, { useCallback } from 'react'
import * as uiComps from '../../../components/ui'
import { allProducts } from '../../../data'
import { useStateCartContext } from '../../../context/cart'

export const STodosLosProductos = () => {
  const { cart, addCart } = useStateCartContext()
  return (
    <section tw="container">
      <div tw="[mask-border-slice:20_fill] mt-12 mb-4 [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] bg-cornflower-blue py-6 px-7 text-snow-white">
        <uiComps.H2>Todos los Productos</uiComps.H2>
      </div>
      <div tw="grid max-w-[252px] mx-auto sm:max-w-[508px] md:max-w-[initial] md:mx-0 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {allProducts.map(allProduct => {
          const inTheCart = !!cart.find(
            item => item.id === allProduct.id && item.inTheCart,
          )
          const addCartWrapper = useCallback(() => {
            addCart(allProduct.id)
          }, [addCart, allProduct.id])
          return (
            <React.Fragment key={allProduct.id}>
              <uiComps.Card
                productId={allProduct.id}
                inTheCart={inTheCart}
                addCartWrapper={addCartWrapper}
              />
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}
