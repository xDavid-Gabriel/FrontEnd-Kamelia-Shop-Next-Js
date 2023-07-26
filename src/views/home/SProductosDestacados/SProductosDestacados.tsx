import tw from 'twin.macro'
import * as uiComps from '../../../components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation } from 'swiper'
import { destacadosProducts } from '../../../data'
import { useStateCartContext } from '../../../context/cart'
import { useCallback } from 'react'
import { IProduct } from '../../../interfaces'
import { useData } from '../../../hooks'
import { ENV } from '../../../utils'

export const SProductosDestacados = () => {
  const {
    data: productsDestacados,
    isLoading,
    isError,
  } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?pagination[start]=14&pagination[limit]=13&populate[1]=model&populate[2]=cover`,
  )
  return (
    <section tw="container">
      <header tw="[mask-border-slice:20_fill] my-4 [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] p-[1px] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] bg-red-400">
        <div tw="[-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] [mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] bg-[#DCE0FF] py-4 px-7 flex justify-between items-center  flex-col gap-4 md:flex-row md:gap-0">
          <uiComps.H2 css={tw`text-dark-charcoa`}>
            Productos <strong tw="text-pink-raspberry">Destacados</strong>
          </uiComps.H2>
          <uiComps.Button>Ver Todos los Productos</uiComps.Button>
        </div>
      </header>
      {isLoading ? (
        <uiComps.BasicLoading />
      ) : (
        <uiComps.CardList
          showAs="swiper"
          products={productsDestacados}
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
          stylesTw={tw`max-w-[252px] mx-auto sm:max-w-[508px] md:max-w-[initial] md:mx-0`}
        >
          {' '}
          <uiComps.BtnPrev btnPrevStyle="secondary" size={22} />
          <uiComps.BtnNext btnNextStyle="secondary" size={22} />
        </uiComps.CardList>
      )}
    </section>
  )
}
