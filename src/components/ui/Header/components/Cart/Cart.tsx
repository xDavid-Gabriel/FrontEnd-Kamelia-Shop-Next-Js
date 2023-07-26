//Componentes de la ui
import tw from 'twin.macro'
import * as uiComps from '../../../'
import { source_code_pro } from '../../../../../utils'
import { useStateCartContext } from '../../../../../context/cart'
import { fn } from '../../../../../utils/functions'
import { Trash } from '../../../Icons'
import Link from 'next/link'
interface Total {
  original: number
  discount: number
  price: number
}
export const Cart = ({
  overlay = true,
  twCartStyle = tw`translate-x-[-50%] absolute top-[7rem] translate-y-[22%] max-w-[350px]
  left-[50%] md:max-w-[650px] 2xl:right-0 2xl:left-[initial] 2xl:translate-x-[initial] w-[650px] z-20`,
  titleBg = true,
}) => {
  const {
    cartData,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    price,
    discount,
  } = useStateCartContext()

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
          {cartData.length === 0 ? (
            <span tw="text-center">
              No tienes productos en tu carrito... 😪🩳
            </span>
          ) : (
            cartData.map(cart => (
              // {/* <!-- Producto 1 --> */}
              <div tw="grid gap-3 md:gap-0 md:grid-cols-3" key={cart.id}>
                <div tw="justify-center flex gap-4 items-center md:justify-start">
                  <uiComps.OptimizedPicture
                    stylesPicture={tw`w-[3rem] h-[48px] rounded-[12px] overflow-hidden flex-none`}
                    typeSrc="external"
                    srcMobile={
                      cart.attributes?.cover.data.attributes.formats.small.url!
                    }
                    srcTablet={
                      cart.attributes?.cover.data.attributes.formats.medium.url!
                    }
                    srcDesktop={cart.attributes?.cover.data.attributes.url!}
                    alt={cart.attributes?.name!}
                    width={cart.attributes?.cover.data.attributes.width ?? 500}
                    height={
                      cart.attributes?.cover.data.attributes.height ?? 500
                    }
                  />
                  <div tw="flex flex-col">
                    <strong>{cart?.attributes?.name}</strong>
                    <Link
                      href={`/producto/${cart.attributes?.slug}`}
                      tw="p-1 transition duration-300 rounded-full text-center hover:text-white hover:bg-pink-raspberry"
                    >
                      Ver Producto
                    </Link>
                  </div>
                  <button onClick={() => removeItem(+cart.id)}>
                    <Trash tw="text-intense-pink" />
                  </button>
                </div>

                {/* <!-- Cantidad --> */}
                <div tw="flex gap-4 items-center justify-center">
                  <button
                    tw="text-white bg-pink-raspberry w-7 h-7 rounded-[7px] font-bold text-xl"
                    onClick={() => decreaseQuantity(+cart.id)}
                  >
                    -
                  </button>
                  <span tw="bg-light-gray py-2 px-5 rounded-[7px]">
                    {cart.quantity}
                  </span>
                  <button
                    tw="text-white bg-pink-raspberry w-7 h-7 rounded-[7px] font-bold text-xl"
                    onClick={() => increaseQuantity(+cart.id)}
                  >
                    +
                  </button>
                </div>
                {/* <!-- Monto --> */}
                <div tw="flex justify-center items-center font-semibold">
                  <div tw="flex gap-3 items-center">
                    <span tw="text-[14px] text-gray-400 font-normal line-through">
                      s/ {cart.attributes?.price.toFixed(2)}
                    </span>
                    <span>
                      s/{' '}
                      {fn.calcDiscountedPrice(
                        cart?.attributes?.price!,
                        cart.attributes?.discount!,
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
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
            <span>s/ {discount.toFixed(2)}</span>
          </div>
          {/* <!-- Precio Total --> */}
          <div tw="justify-center items-center  flex flex-col sm:flex-row">
            <span tw="font-bold sm:hidden">Precio Total :</span>
            <span>s/ {price.toFixed(2)}</span>
          </div>
        </div>
        {/* <!-- Boton de pagar --> */}
        <uiComps.Button variant="btn-pagar">Pagar</uiComps.Button>
      </div>
    </>
  )
}
