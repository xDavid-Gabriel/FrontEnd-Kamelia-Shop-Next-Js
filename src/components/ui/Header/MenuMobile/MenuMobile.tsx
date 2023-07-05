import tw from 'twin.macro'
import {
  ChevronBoton,
  ChevronTop,
  Heart,
  HeartFill,
  Shop,
  Ubicacion,
} from '../../Icons'
import { Cart } from '../components'
import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { Favorite } from '../components/Favorite/Favorite'
import { useStateUiContext } from '../../../../context'
import { useAcordionToogle } from '../../../../hooks'

export const MenuMobile = () => {
  const { open: openMenuMobile, toggle: toggleMenuMobile } =
    useAcordionToogle(false)

  const { toogleSideMenu } = useStateUiContext()

  return (
    // El overlay
    <div
      tw="bg-dark-burgundy/20 fixed inset-0 z-[60] h-[calc(100vh - 152.75px)] py-10 top-[152.75px] lg:top-[83px] lg:h-[calc(100vh - 83px)]
    2xl:hidden"
      onClick={toogleSideMenu}
    >
      <div
        tw="bg-dark-burgundy text-white fixed w-full max-w-[700px] right-0 h-[calc(100vh - 152.75px)] py-10 top-[152.75px] lg:top-[83px] lg:h-[calc(100vh - 83px)] 2xl:hidden overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <ul tw="flex flex-col gap-5">
          <li>
            <button
              tw="text-white flex items-center justify-between py-4 transition duration-300 hover:bg-pink-raspberry px-12 cursor-pointer w-full"
              css={1 === openMenuMobile ? tw`bg-pink-raspberry` : ''}
              className="group"
              onClick={() => toggleMenuMobile(1)}
            >
              <div tw="flex gap-5 items-center">
                <div tw="relative">
                  <i
                    tw="text-pink-raspberry text-[28px] transition duration-300 group-hover:text-white"
                    css={1 === openMenuMobile ? tw`text-white` : ''}
                  >
                    <Shop size={28} />
                  </i>
                  <span
                    tw="w-5 transition duration-300 group-hover:bg-white group-hover:text-pink-raspberry top-4 right-[-7px] absolute h-5 rounded-full bg-pink-raspberry grid place-content-center"
                    css={
                      1 === openMenuMobile
                        ? tw`bg-white text-pink-raspberry`
                        : ''
                    }
                  >
                    1
                  </span>
                </div>
                <h3 tw="font-bold">Mis Productos</h3>
              </div>
              <i
                tw="flex-none transition duration-300 "
                css={1 === openMenuMobile ? tw`rotate-[180deg]` : ''}
              >
                <ChevronBoton size={12} />
              </i>
            </button>
            <Collapse isOpened={1 === openMenuMobile}>
              <Cart twCartStyle={tw``} overlay={false} titleBg={false} />
            </Collapse>
          </li>
          <li>
            <button
              tw="text-white flex items-center justify-between py-4 hover:bg-pink-raspberry px-12 cursor-pointer transition duration-300 w-full"
              css={2 === openMenuMobile ? tw`bg-pink-raspberry` : ''}
              className="group"
              onClick={() => toggleMenuMobile(2)}
            >
              <div tw="flex gap-5 items-center">
                {2 === openMenuMobile ? (
                  <i
                    tw="text-pink-raspberry text-[28px] transition duration-300 group-hover:text-white"
                    css={2 === openMenuMobile ? tw`text-white` : ''}
                  >
                    <HeartFill size={28} />
                  </i>
                ) : (
                  <Heart
                    size={28}
                    tw="text-pink-raspberry text-[28px] transition duration-300 group-hover:text-white"
                  />
                )}

                <h3 tw="font-bold">Mis Favoritos</h3>
              </div>
              <i
                tw="flex-none transition duration-300"
                css={2 === openMenuMobile ? tw`rotate-[180deg]` : ''}
              >
                <ChevronBoton size={12} />
              </i>
            </button>
            <Collapse isOpened={2 === openMenuMobile}>
              <Favorite
                twFavoriteStyle={tw``}
                overlay={false}
                titleBg={false}
              />
            </Collapse>
          </li>
          <li
            tw="text-white transition duration-300 py-4 hover:bg-pink-raspberry px-12 cursor-pointer"
            className="group"
          >
            <div tw="flex gap-5 items-center">
              <Ubicacion
                size={28}
                tw="text-pink-raspberry transition duration-300 text-[28px] group-hover:text-white"
              />
              <h3 tw="font-bold">Editar mi Ubicación</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
