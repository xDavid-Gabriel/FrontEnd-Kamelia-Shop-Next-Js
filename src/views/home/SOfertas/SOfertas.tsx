import * as uiComps from '../../../components/ui'
import tw from 'twin.macro'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Navigation } from 'swiper'
import { ofertaProducts } from '../../../data'
import { useStateCartContext } from '../../../context/cart'
import { useCallback } from 'react'

export const SOfertas = () => {
  const { cart, addCart } = useStateCartContext()
  return (
    <section tw="container">
      <header tw="[mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] my-4 py-5 bg-[url(/img/banner.webp)] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] bg-center bg-cover px-7 flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center">
        <uiComps.H2 css={tw`text-snow-white`}>
          Eso que piensas tener y{' '}
          <strong tw="text-aqua-blue">está en oferta</strong>
        </uiComps.H2>
        <uiComps.Button css={tw`flex-none`}>
          Ver Todos los Productos
        </uiComps.Button>
      </header>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 6,
          },
        }}
        tw="max-w-[252px] mx-auto sm:max-w-[508px] md:max-w-[initial] md:mx-0"
      >
        {ofertaProducts.map(ofertaProduct => {
          const inTheCart = !!cart.find(
            item => item.id === ofertaProduct.id && item.inTheCart,
          )
          const addCartWrapper = useCallback(() => {
            addCart(ofertaProduct.id)
          }, [addCart, ofertaProduct.id])

          return (
            <SwiperSlide key={ofertaProduct.id}>
              <uiComps.Card
                productId={ofertaProduct.id}
                inTheCart={inTheCart}
                addCartWrapper={addCartWrapper}
              />
            </SwiperSlide>
          )
        })}
        <uiComps.BtnPrev btnPrevStyle="secondary" />
        <uiComps.BtnNext btnNextStyle="secondary" />
      </Swiper>
    </section>
  )
}
