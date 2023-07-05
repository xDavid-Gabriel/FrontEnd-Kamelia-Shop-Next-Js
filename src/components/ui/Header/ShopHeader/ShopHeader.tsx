import { useStateUiContext } from '../../../../context'
import { ChevronBoton, Shop } from '../../Icons'
import { Cart } from '../components'

export const ShopHeader = () => {
  const { isModalCartOpen, toogleSideModalCart } = useStateUiContext()

  return (
    <div
      tw="relative h-[3.5rem] flex items-stretch"
      onClick={toogleSideModalCart}
    >
      <div tw="h-full relative bg-snow-white rounded-[7px_0_0_7px] w-[3.5rem] grid place-content-center cursor-pointer">
        <Shop size={25} tw="text-pink-raspberry" />
        <span tw="absolute bg-berry-crush grid place-content-center text-[11px] text-white font-bold rounded-full w-[18px] h-[18px] bottom-2 right-2">
          10
        </span>
      </div>
      {/* <!-- Flecha --> */}
      <div tw="bg-pink-raspberry px-[6px] grid place-content-center rounded-[0_7px_7px_0] text-white cursor-pointer">
        <ChevronBoton size={12} />
      </div>

      {/* <!-- Modal carrito de compras --> */}
      {isModalCartOpen && <Cart />}
    </div>
  )
}
