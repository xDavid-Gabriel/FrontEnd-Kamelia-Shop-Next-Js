import tw from 'twin.macro'
import * as uiComps from '../../../components/ui'
import { source_code_pro } from '../../../utils/fonts'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation } from 'swiper'
import { heroProducts } from '../../../data'
import { useStateCartContext } from '../../../context/cart'
import React, { useCallback } from 'react'

export const SHero = () => {
  const { cart, addCart } = useStateCartContext()
  return (
    <section>
      <header tw="bg-[url('/img/home/mobile/hero.webp')] lg:bg-[url('/img/home/desktop/hero.webp')] bg-no-repeat bg-cover bg-center py-[6.5rem]">
        <div tw="grid gap-10 xl:grid-cols-2 container">
          {/* <!-- Primera cara --> */}
          <div tw="flex flex-col gap-10">
            <div tw="flex flex-col gap-3">
              <uiComps.H1 css={tw`text-snow-white`}>
                Dale un toque <strong tw="text-aqua-blue">kawaii</strong> a
                <b tw="block">tu vida </b>
              </uiComps.H1>
              <strong
                tw="font-bold text-[20px] text-snow-white"
                className={source_code_pro.className}
              >
                ¡Convierte tu día en un festival kawaii con nuestros
                <strong tw="text-aqua-blue block">productos exclusivos!</strong>
              </strong>
              <p tw="text-white max-w-[619px]">
                <strong tw="font-bold">
                  ¡Descubre la dulzura de Corea con nuestros objetos kawaii!{' '}
                </strong>
                En Kamelia.Shopee, nuestro nuevo e-commerce encontrarás una
                amplia selección de productos que alegrarán tu día.
              </p>
            </div>
            <div>
              <uiComps.Button>Explorar Catálogo</uiComps.Button>
            </div>
          </div>
          {/* <!-- Catalogo de productos--> */}
          <div tw="lg:max-w-[508px] lg:mx-auto lg:relative">
            <strong tw="text-2xl mb-5 block text-white">
              Productos hechos con Mágia ~✨
            </strong>
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
              }}
              tw="max-w-[252px] sm:max-w-[508px]  lg:[position: initial]"
            >
              {heroProducts.map(heroproduct => {
                const inTheCart = !!cart.find(
                  item => item.id === heroproduct.id && item.inTheCart,
                )
                const addCartWrapper = useCallback(() => {
                  addCart(heroproduct.id)
                }, [addCart, heroproduct.id])
                return (
                  <SwiperSlide key={heroproduct.id}>
                    <uiComps.Card
                      productId={heroproduct.id}
                      inTheCart={inTheCart}
                      addCartWrapper={addCartWrapper}
                    />
                  </SwiperSlide>
                )
              })}

              <uiComps.BtnPrev
                btnPrevStyle="secondary"
                size={22}
                additionalStyles={tw`xl:left-[-28px]`}
              />
              <uiComps.BtnNext
                btnNextStyle="secondary"
                size={22}
                additionalStyles={tw`xl:right-[-28px]`}
              />
            </Swiper>
          </div>
        </div>
      </header>
      {/* <!-- Contacto info --> */}
      <uiComps.ContactInfo />
    </section>
  )
}
