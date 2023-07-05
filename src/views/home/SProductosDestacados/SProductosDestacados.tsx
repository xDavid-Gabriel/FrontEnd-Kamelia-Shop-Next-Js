import tw from 'twin.macro'
import * as uiComps from '../../../components/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation } from 'swiper'
const products = Array.from({ length: 20 }, (e, index) => index + 1)
export const SProductosDestacados = () => {
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
        {products.map(product => (
          <SwiperSlide key={product}>
            <uiComps.Card />
          </SwiperSlide>
        ))}
        <uiComps.BtnPrev btnPrevStyle="secondary" />
        <uiComps.BtnNext btnNextStyle="secondary" />
      </Swiper>
    </section>
  )
}
