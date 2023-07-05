//Componentes de la ui
import tw from 'twin.macro'
import * as uiComps from '../../../'
import { source_code_pro } from '../../../../../utils'
export const Cart = ({
  overlay = true,
  twCartStyle = tw`translate-x-[-50%] absolute top-[7rem] translate-y-[22%] max-w-[350px]
  left-[50%] md:max-w-[650px] 2xl:right-0 2xl:left-[initial] 2xl:translate-x-[initial] w-[650px] z-20`,
  titleBg = true,
}) => {
  return (
    <>
      {overlay && <div tw="fixed inset-0 bg-black/0 z-10"></div>}

      {/* translate-x-[-50%] absolute top-[7rem] translate-y-[22%] */}
      <div
        tw="text-charcoal"
        onClick={e => e.stopPropagation()}
        css={twCartStyle}
      >
        {titleBg && (
          <strong
            className={source_code_pro.className}
            tw="rounded-[7px 7px 0px 0px] font-semibold py-5 px-12 bg-berry-crush relative block text-start text-white before:w-10 before:h-10 before:bg-berry-crush before:absolute before:top-[-10px] before:right-[20px] before:rotate-[45deg]"
          >
            Mis Productos
          </strong>
        )}

        {/* <!-- Lista de los productos Descripciones, cantidad, monto --> */}
        <ul tw="hidden grid-cols-3 text-center sm:grid">
          <li tw="bg-dark-charcoa py-1 px-6 text-white block">Descripción</li>
          <li tw="bg-gunmetal-gray py-1 px-6 text-white block">Cantidad</li>
          <li tw="bg-dark-charcoa py-1 px-6 text-white block">Monto</li>
        </ul>
        {/* <!-- Productos que se repetiran segun el usuario agrege --> */}
        <div tw="flex flex-col gap-7 py-4 px-3 bg-snow-white h-[340px] overflow-auto">
          {/* <!-- Producto 1 --> */}
          <div tw="grid gap-3 md:gap-0 md:grid-cols-3">
            {/* <!-- Descripción --> */}
            <div tw="justify-center flex gap-4 items-center md:justify-start">
              <img tw="w-12" src="/img/producto.webp" alt="producto" />
              <div tw="flex flex-col">
                <strong>Mochila Kuromi</strong>
                <a
                  href="#"
                  tw="p-1 transition duration-300 rounded-full text-center hover:text-white hover:bg-pink-raspberry"
                >
                  Ver Producto
                </a>
              </div>
            </div>

            {/* <!-- Cantidad --> */}
            <div tw="flex gap-4 items-center justify-center">
              <button tw="text-white bg-pink-raspberry w-7 h-7 rounded-[7px] font-bold text-xl">
                -
              </button>
              <span tw="bg-light-gray py-2 px-5 rounded-[7px]">1</span>
              <button tw="text-white bg-pink-raspberry w-7 h-7 rounded-[7px] font-bold text-xl">
                +
              </button>
            </div>
            {/* <!-- Monto --> */}
            <div tw="flex justify-center items-center font-semibold">
              <span>s/ 134.99</span>
            </div>
          </div>
        </div>
        {/* <!-- El total, proceso, descuento --> */}
        <ul tw="hidden grid-cols-3 text-center sm:grid">
          <li tw="bg-dark-charcoa py-1 px-6 text-white block">
            Tipo de Proceso
          </li>
          <li tw="bg-gunmetal-gray py-1 px-6 text-white block">Descuento</li>
          <li tw="bg-dark-charcoa py-1 px-6 text-white block">Precio Total</li>
        </ul>

        <div tw="grid py-5 bg-light-gray gap-3 sm:gap-0 sm:grid-cols-3">
          {/* <!-- Tipo de Proceso --> */}
          <div tw="flex flex-col justify-center items-center md:flex-row">
            <span tw="font-bold sm:hidden">Tipo de Proceso :</span>
            <span>Monto Total de Compra</span>
          </div>
          {/* <!-- Descuento --> */}
          <div tw="justify-center items-center flex flex-col md:flex-row">
            <span tw="font-bold sm:hidden">Descuento :</span>
            <span>s/ 134.99</span>
          </div>
          {/* <!-- Precio Total --> */}
          <div tw="justify-center items-center  flex flex-col sm:flex-row">
            <span tw="font-bold sm:hidden">Precio Total :</span>
            <span>s/ 134.99</span>
          </div>
        </div>
        {/* <!-- Boton de pagar --> */}
        <uiComps.Button variant="btn-pagar">Pagar</uiComps.Button>
      </div>
    </>
  )
}
