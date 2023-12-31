import * as uiComps from '../'
import tw from 'twin.macro'
import { ChevronBoton, Hamburguer, Heart, Search, Ubicacion } from '../Icons'
import { MenuEnlaces } from './MenuEnlaces/MenuEnlaces'
import Link from 'next/link'
import { ShopHeader } from './ShopHeader/ShopHeader'
import { UsuarioHeader } from './UsuarioHeader/UsuarioHeader'
import { FavoriteHeader } from './FavoriteHeader/FavoriteHeader'
import { MenuMobile } from './MenuMobile/MenuMobile'
import { SearchModal } from './SearchModal/SearchModal'
import { useStateAuthContext, useStateUiContext } from '../../../context'

export const Header = () => {
  const { isMenuOpen, toogleSideMenu } = useStateUiContext()
  const { user } = useStateAuthContext()
  return (
    <header tw="sticky top-0 z-20 h-[153px] lg:h-[83px] 2xl:h-auto 2xl:[overflow:initial]">
      <div tw="bg-dark-violet py-4">
        {/* <!-- Logo y buscador --> */}
        <div tw="container grid grid-cols-2 gap-5 items-center justify-between lg:flex 2xl:justify-start 2xl:gap-20 ">
          <Link href="/">
            <img
              tw="w-[150px] h-[50px] object-contain lg:w-[200px]"
              src="/img/logo.svg"
              alt="logo"
            />
          </Link>

          {/* <!-- favoritos --> */}
          <button
            tw="justify-self-end lg:order-3 2xl:hidden"
            onClick={toogleSideMenu}
          >
            <Hamburguer size={35} tw="text-snow-white" />
          </button>
          <SearchModal />
          {/* <!-- Iniciar sesion / registrarse --> */}
          {Object.keys(user).length === 0 ? (
            <div tw="items-center gap-3 hidden 2xl:flex">
              <Link href="/join/login">
                <uiComps.Button>Iniciar Sesión</uiComps.Button>
              </Link>
              <Link href="/join/register">
                <uiComps.Button variant="secondary">Registrarse</uiComps.Button>
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* <!-- Menu, direcciones, carrito --> */}
      <div tw="bg-dark-purple py-4  invisible 2xl:visible">
        <div tw="flex items-center justify-between container">
          {/* <!-- Direccion y menu --> */}
          <div tw="items-center gap-8 flex">
            {/* <!-- Direcciones --> */}
            {Object.keys(user).length === 0 ? (
              ''
            ) : (
              <div tw="hidden 2xl:flex flex-none items-center gap-4 bg-white rounded-[7px] pr-[1rem]">
                <button tw="py-3 px-6 rounded-[7px_0_0_7px] bg-pink-raspberry text-white flex flex-col gap-1 items-center">
                  <Ubicacion />
                  <p>Editar</p>
                </button>
                <div tw="text-dark-charcoa">
                  <p>Llegará mi pedido en:</p>
                  <strong>Av.Jorge Chavez 256</strong>
                </div>
              </div>
            )}

            {/* <!-- Menu --> */}
            <MenuEnlaces />
          </div>
          {/* <!-- Usuario, shop, favoritos --> */}
          <div tw="hidden gap-4 items-center 2xl:flex">
            {/* <!-- Usuario --> */}

            {Object.keys(user).length === 0 ? '' : <UsuarioHeader />}

            {/* <!-- shop --> */}
            <ShopHeader />

            {/* <!-- favoritos -->
            <!-- Boton favoritos --> */}
            <FavoriteHeader />
          </div>
        </div>
      </div>
      {isMenuOpen && <MenuMobile />}
      {/* <div tw="2xl:hidden">
        <MenuEnlaces />
      </div> */}
    </header>
  )
}
