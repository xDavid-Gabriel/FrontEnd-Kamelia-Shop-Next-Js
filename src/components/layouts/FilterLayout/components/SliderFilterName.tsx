// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation } from 'swiper'
import Link from 'next/link'

import * as uiComps from '../../../../components/ui'
import { TwStyle } from 'twin.macro'
import { ICategoryDatum } from '../../../../interfaces'

type GenerateHrefFn = (item: ICategoryDatum) => string
type StyleLinkTwFn = (item: ICategoryDatum) => string | TwStyle
type FilterNameFn = (item: ICategoryDatum) => React.ReactNode
type FilterKeyFn = (item: ICategoryDatum) => React.Key

export const SliderFilterName = ({
  data,
  generateHref,
  styleLinkTw,
  filterName,
  filterKey,
}: {
  data: ICategoryDatum[]
  generateHref: GenerateHrefFn
  styleLinkTw?: StyleLinkTwFn
  filterName: FilterNameFn
  filterKey: FilterKeyFn
}) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        400: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      tw="my-7 sm:px-12"
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      {data.map(item => (
        <SwiperSlide key={filterKey(item)}>
          <Link
            href={generateHref(item)}
            tw="text-center rounded-full border-[1px] border-pink-raspberry px-4 py-2 text-pink-raspberry hover:bg-pink-raspberry w-full hover:text-snow-white transition duration-300 inline-block"
            css={styleLinkTw ? styleLinkTw(item) : undefined}
          >
            {filterName(item)}
          </Link>
        </SwiperSlide>
      ))}
      <uiComps.BtnPrev />
      <uiComps.BtnNext />
    </Swiper>
  )
}
// dataFilterName.attributes.name
