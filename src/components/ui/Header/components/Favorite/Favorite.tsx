import { HeartBroken, HeartFill } from '../../../Icons'
import * as uiComps from '../../../'
import { source_code_pro } from '../../../../../utils'
import tw from 'twin.macro'
export const Favorite = ({
  overlay = true,
  twFavoriteStyle = tw`absolute top-[7rem] right-0 w-[400px] [filter:drop-shadow(0px 0px 65px rgba(171,171,171,0.4))] z-20`,
  titleBg = true,
}) => {
  return (
    <>
      {overlay && <div tw="fixed inset-0 bg-black/0 z-10"></div>}
      <div onClick={e => e.stopPropagation()} css={twFavoriteStyle}>
        {titleBg && (
          <strong
            className={source_code_pro.className}
            tw="rounded-[7px 7px 0px 0px] font-semibold py-3 px-6 bg-berry-crush relative block text-start text-white before:w-10 before:h-10 before:bg-berry-crush before:absolute before:top-[-10px] before:right-[20px] before:rotate-[45deg]"
          >
            Tus Favoritos
          </strong>
        )}

        {/* <!-- Lista o items de favoritos que se recorreran mediante cada usuario agrege a favoritos --> */}
        <div tw="grid [grid-template-columns:1fr 5rem] bg-white border-b-[1px] border-charcoal">
          <div tw="hover:bg-[#FFD2D2] text-charcoal justify-center px-4 py-2 flex gap-4 items-center md:justify-start">
            <img tw="w-12" src="/img/producto.webp" alt="producto" />
            <div tw="flex flex-col">
              <strong>Mochila Kuromi</strong>
              <a
                href="#"
                tw="p-1 rounded-full text-center hover:text-white hover:bg-pink-raspberry"
              >
                Ver Producto
              </a>
            </div>
          </div>
          <div
            tw="text-center text-berry-crush/50 hover:text-white hover:bg-pink-raspberry grid place-content-center cursor-pointer"
            className="group"
          >
            <div tw="group-hover:hidden flex flex-col items-center gap-1">
              {/* <i tw="bfs-heart-fill"></i> */}
              <HeartFill />
              <p>Añadido</p>
            </div>
            <div tw="hidden group-hover:flex  flex-col items-center gap-1">
              {/* <i tw="bfs-heart-broken"></i> */}
              <HeartBroken />
              <p>Eliminar</p>
            </div>
          </div>
        </div>
        <div tw="grid [grid-template-columns:1fr 5rem] bg-white border-b-[1px] border-charcoal">
          <div tw="hover:bg-[#FFD2D2] text-charcoal justify-center px-4 py-2 flex gap-4 items-center md:justify-start">
            <img tw="w-12" src="/img/producto.webp" alt="producto" />
            <div tw="flex flex-col">
              <strong>Mochila Kuromi</strong>
              <a
                href="#"
                tw="p-1 rounded-full text-center hover:text-white hover:bg-pink-raspberry"
              >
                Ver Producto
              </a>
            </div>
          </div>
          <div
            tw="text-center text-berry-crush/50 hover:text-white hover:bg-pink-raspberry grid place-content-center  cursor-pointer"
            className="group"
          >
            <div tw="group-hover:hidden flex flex-col items-center gap-1">
              {/* <i tw="bfs-heart-fill"></i> */}
              <HeartFill />
              <p>Añadido</p>
            </div>
            <div tw="hidden group-hover:flex  flex-col items-center gap-1">
              {/* <i tw="bfs-heart-broken"></i> */}
              <HeartBroken />
              <p>Eliminar</p>
            </div>
          </div>
        </div>
        <uiComps.Button variant="btn-pagar">
          Ver todos mis favoritos
        </uiComps.Button>
      </div>
    </>
  )
}
