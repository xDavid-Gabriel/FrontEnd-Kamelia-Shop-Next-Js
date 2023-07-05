import * as uiComps from '../../../components/ui'
import { Asegurada, Domicilio, Relampago } from '../../../components/ui/Icons'
import tw from 'twin.macro'
export const SBanner = () => {
  return (
    <section tw="bg-[url(/img/home/desktop/banner.webp)] bg-no-repeat bg-cover bg-center py-[40px] mt-[136.1px]">
      <div tw="container text-snow-white text-center  flex flex-col gap-[34px] relative">
        <header>
          <uiComps.H2>En Kamelia Shopee</uiComps.H2>
          <p>Nos aseguramos, priorizamos y contamos con:</p>
        </header>
        <div tw="flex flex-wrap justify-center gap-[21px] z-10">
          <div tw="flex flex-col gap-[21px] w-[191px] items-center">
            <div tw="w-[4rem] h-[4rem] bg-snow-white rounded-full grid place-content-center text-intense-pink">
              <Asegurada />
            </div>
            <div tw="flex flex-col gap-[12px]">
              <strong>Compra Asegurada</strong>
              <p>
                proteger la información personal y financiera del comprador
                durante todo el proceso de compra
              </p>
            </div>
          </div>
          <div tw="flex flex-col gap-[21px] w-[191px] items-center">
            <div tw="w-[4rem] h-[4rem] bg-snow-white rounded-full grid place-content-center text-intense-pink">
              <Relampago size={28} />
            </div>
            <div tw="flex flex-col gap-[12px]">
              <strong>Navegación Relámpago</strong>
              <p>
                Realizamos un transacción rápida y eficiente en la que el tú
                seleccionas y compra un producto en pocos minutos con ayuda de
                la navegación eficáz
              </p>
            </div>
          </div>
          <div tw="flex flex-col gap-[21px] w-[191px] items-center">
            <div tw="w-[4rem] h-[4rem] bg-snow-white rounded-full grid place-content-center text-intense-pink">
              <Domicilio size={30} />
            </div>
            <div tw="flex flex-col gap-[12px]">
              <strong>Entregas a Domicilio</strong>
              <p>
                Se entrega los productos adquiridos por el cliente directamente
                en la comodidad de su hogar
              </p>
            </div>
          </div>
        </div>
        <uiComps.OptimizedImage
          src="/img/home/desktop/credit-card.webp"
          alt="Tarjeta de Credito"
          stylesImg={tw`opacity-30  max-w-[201px] absolute left-0 bottom-[-40px] sm:bottom-[-69px] md:opacity-100 2xl:bottom-[-106px]  2xl:max-w-[443px]`}
          width={500}
          height={500}
        />
        <uiComps.OptimizedImage
          src="/img/home/desktop/safe-box.webp"
          alt="Caja Fuerte"
          stylesImg={tw`opacity-30 max-w-[278px] absolute right-0 bottom-[-40px] lg:opacity-100 2xl:max-w-[460px]`}
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}
