import * as uiComps from '../../../components/ui'
import tw from 'twin.macro'
export const SCta = () => {
  return (
    <section tw="container pt-12">
      <div tw="[mask-border-slice:20_fill]  [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px]  [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)]   [-webkit-mask-box-image-width: 20px;] bg-[url(/img/home/desktop/cta.webp)] bg-no-repeat bg-center pl-4 sm:pl-32 pt-10 pb-7">
        <div tw="text-snow-white max-w-[531px]">
          <uiComps.H2>
            ¡Descubre la <strong tw="text-aqua-blue">mágia kawaii</strong> y{' '}
            <strong tw="text-aqua-blue">alegra</strong> alegra{' '}
            <strong tw="text-aqua-blue">tus días!</strong>
          </uiComps.H2>
          <p tw="mb-8">
            ¡No pierdas la oportunidad de lucir <strong>espectacular</strong>{' '}
            con <strong>nuestros productos de coreanos!</strong>
          </p>
          <uiComps.Button>Ver Productos Populares</uiComps.Button>
        </div>
      </div>
    </section>
  )
}
