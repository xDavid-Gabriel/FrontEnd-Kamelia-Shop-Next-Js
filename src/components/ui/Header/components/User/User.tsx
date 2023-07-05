import tw from 'twin.macro'
import { Carrito, Heart, Ofertas, Shop } from '../../../Icons'

export const User = ({
  overlay = true,
  twUserStyle = tw`translate-y-[98%] bottom-0 w-full absolute z-20`,
}) => {
  return (
    <>
      {overlay && <div tw="fixed inset-0 bg-black/0 z-10"></div>}
      <div css={twUserStyle} onClick={e => e.stopPropagation()}>
        <ul tw="bg-white pb-4 rounded-[0 0 12px 12px]">
          <li tw="grid gap-3 items-center [grid-template-columns:max-content 1fr max-content] bg-[linear-gradient(130.65deg,#EFF6FF -1.28%,#C8D4FF -1.27%,#B3AAEE 98.97%)] py-7 px-5">
            <div tw="w-9 h-9 rounded-full bg-white grid place-content-center">
              <Carrito tw="text-pink-raspberry" size={18} />
            </div>
            <div tw="text-charcoal flex flex-col gap-2">
              <span tw="text-sm">En el Carrito de Compra</span>
              <span tw="font-bold">s/ 9999.99</span>
            </div>
            <a
              href="#"
              tw="text-dark-charcoa text-sm p-2 self-center rounded-full hover:text-white hover:bg-pink-raspberry"
            >
              Ver Carrito
            </a>
          </li>
          <li tw="cursor-pointer p-5 bg-[linear-gradient(270deg,#CC4478 0%, #8831CC 100%)] flex justify-between items-center">
            <div tw="flex items-center gap-3 text-white">
              <div tw="w-9 h-9 rounded-full bg-white grid place-content-center">
                <Ofertas size={18} tw="text-pink-raspberry" />
              </div>
              <p>Novedades</p>
            </div>
            <a href="#" tw="text-dark-charcoa py-1 px-2 rounded-full bg-white">
              Nuevo
            </a>
          </li>
          <li tw="p-5 flex justify-between items-center cursor-pointer hover:bg-sky-blue">
            <div tw="flex items-center gap-3">
              <div tw="w-9 h-9 rounded-full bg-white grid place-content-center">
                <Heart size={18} tw="text-pink-raspberry" />
              </div>
              <p tw="text-dark-charcoa">Mis Favoritos</p>
            </div>
          </li>
          <li tw="p-5 flex justify-between items-center cursor-pointer hover:bg-sky-blue">
            <div tw="flex items-center gap-3">
              <div tw="w-9 h-9 rounded-full bg-white grid place-content-center">
                {/* <i tw="bfs-shop text-pink-raspberry"></i> */}
                <Shop size={18} tw="text-pink-raspberry" />
              </div>
              <p tw="text-dark-charcoa">Mi Cuenta</p>
            </div>
          </li>
          <li tw="py-4 pl-20 text-pale-gray pr-5 cursor-pointer hover:text-black hover:bg-sky-blue">
            Salir
          </li>
        </ul>
      </div>
    </>
  )
}
