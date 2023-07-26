import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Navigation } from 'swiper'
import * as uiComps from '../../../components/ui'
import { FC, PropsWithChildren, useCallback } from 'react'
import { useStateCartContext } from '../../../context/cart'
import tw, { TwStyle } from 'twin.macro'
import { IProduct } from '../../../interfaces'

interface Props {
  products?: IProduct
  stylesTw?: TwStyle
  breakpoints?: { [key: string]: { slidesPerView: number } }
  showAs?: 'swiper' | 'filter'
}
export const CardList: FC<PropsWithChildren<Props>> = ({
  products,
  stylesTw,
  breakpoints,
  children,
  showAs,
}) => {
  const { cart, addCart, increaseQuantity, decreaseQuantity } =
    useStateCartContext()
  if (showAs === 'swiper') {
    return (
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={breakpoints}
        css={stylesTw}
      >
        {products?.data.map(product => {
          const inTheCart = !!cart.find(
            item => item.id === product.id && item.inTheCart,
          )
          // const addCartWrapper = useCallback(() => {
          //   addCart(product.id)
          // }, [addCart, product.id])
          const addCartWrapper = () => {
            addCart(product.id)
          }

          return (
            <SwiperSlide key={product.id}>
              <uiComps.Card
                inTheCart={inTheCart}
                addCartWrapper={addCartWrapper}
                productId={product.id}
                product={product}
              />
            </SwiperSlide>
          )
        })}
        {children}
      </Swiper>
    )
  }
  if (showAs === 'filter') {
    return (
      <>
        {products?.data.map(product => {
          const inTheCart = !!cart.find(
            item => item.id === product.id && item.inTheCart,
          )
          const quantity = cart.find(item => item.id === product.id)

          const addCartWrapper = (quantity: number) => {
            addCart(product.id, quantity)
          }

          return (
            <uiComps.Card
              showAs="filter"
              key={product.id}
              product={product}
              productId={product.id}
              inTheCart={inTheCart}
              quantity={quantity?.quantity}
              addCartWrapper={addCartWrapper}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          )
        })}
      </>
    )
  }
  return (
    <>
      {products?.data.map(product => {
        const inTheCart = !!cart.find(
          item => item.id === product.id && item.inTheCart,
        )
        // const addCartWrapper = useCallback(() => {
        //   addCart(product.id)
        // }, [addCart, product.id])

        const addCartWrapper = () => {
          addCart(product.id)
        }

        return (
          <uiComps.Card
            key={product.id}
            inTheCart={inTheCart}
            addCartWrapper={addCartWrapper}
            productId={product.id}
            product={product}
          />
        )
      })}
    </>
  )
}
