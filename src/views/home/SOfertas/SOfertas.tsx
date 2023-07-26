import * as uiComps from '../../../components/ui'
import tw from 'twin.macro'
import { IProduct } from '../../../interfaces'
import { ENV } from '../../../utils'
import { useData } from '../../../hooks'
import Link from 'next/link'

export const SOfertas = () => {
  const { data: productsOfertas, isLoading } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?pagination[start]=4&pagination[limit]=10&populate[1]=model&populate[2]=cover`,
  )
  return (
    <section tw="container">
      <header tw="[mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] my-4 py-5 bg-[url(/img/banner.webp)] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] bg-center bg-cover px-7 flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center">
        <uiComps.H2 css={tw`text-snow-white`}>
          Eso que piensas tener y{' '}
          <strong tw="text-aqua-blue">está en oferta</strong>
        </uiComps.H2>
        <Link href="/ofertas">
          <uiComps.Button css={tw`flex-none`}>
            Ver Todos los Productos
          </uiComps.Button>
        </Link>
      </header>
      {isLoading ? (
        <uiComps.BasicLoading />
      ) : (
        <uiComps.CardList
          showAs="swiper"
          products={productsOfertas}
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
