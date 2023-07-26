import React, { useState } from 'react'
import {
  Ayuda,
  Categorias,
  ChevronBoton,
  Empresa,
  Hamburguer,
  Inicio,
  Ofertas,
} from '../../Icons'
import { MenuCategorias } from '../MenuCategorias/MenuCategorias'
import Link from 'next/link'
import tw from 'twin.macro'
import { useRouter } from 'next/router'
import * as uiComps from '../../'
import styled from 'styled-components'
import { User } from '../components'
import { useStateAuthContext } from '../../../../context'

const ListaEnlace = styled.ul`
  visibility: visible;
  display: flex;
  z-index: 30;
  justify-content: space-between;
  left: 0;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem;
  background-color: #683b8c;
  position: fixed;
  width: 100%;
  bottom: 0;
  font-weight: normal;
  color: #fff;
  z-index: 0;

  @media (min-width: 640px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    gap: 5rem;
  }

  @media (min-width: 1536px) {
    gap: 0.25rem;
    position: initial;
    justify-content: flex-start;
  }
  // Estilo del thumb (barra de desplazamiento)
  &::-webkit-scrollbar {
    width: 0;
    border-radius: 100px;
    height: 0;
  }

  /* &::-webkit-scrollbar-thumb {
    background-color: #cc4478;
    border-radius: 100px;
  } */
`

export const MenuEnlaces = () => {
  const { user } = useStateAuthContext()
  const [isOpen, setIopen] = useState(false)
  const [isUser, setIsUser] = useState(false)

  const toogleMegaMenu = () => setIopen(prevState => !prevState)

  const toogleIsUser = () => setIsUser(prevState => !prevState)

  const router = useRouter()

  return (
    <>
      <ListaEnlace>
        <li
          tw="flex-col flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Inicio tw="flex-none 2xl:hidden" />
          <Link
            href="/"
            tw="flex gap-1 flex-col 2xl:gap-3 items-center px-3 py-1.5 rounded-full hover:bg-pink-raspberry 2xl:flex-row"
            css={router.pathname === '/' ? tw`bg-pink-raspberry` : ''}
          >
            <Inicio tw="flex-none hidden 2xl:block" />
            Inicio
          </Link>
        </li>
        <li tw="flex-col flex items-center gap-2 cursor-pointer">
          <Categorias tw="flex-none 2xl:hidden" />
          <button
            tw="flex gap-1 items-center px-3 py-1.5 rounded-full hover:bg-pink-raspberry flex-col 2xl:gap-3 2xl:flex-row"
            css={isOpen ? tw`bg-pink-raspberry` : ''}
            onClick={toogleMegaMenu}
          >
            <Categorias tw="flex-none hidden 2xl:block" />
            <div tw="flex gap-3 items-center">
              Categoría
              <ChevronBoton size={13} tw="flex-none" />
            </div>
          </button>
          {isOpen && <MenuCategorias toogleMegaMenu={toogleMegaMenu} />}
        </li>
        <li
          tw="flex-col flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/ofertas')}
        >
          <Ofertas tw="flex-none 2xl:hidden" />
          <Link
            href="/ofertas"
            tw="flex gap-1 items-center px-3 py-1.5 rounded-full hover:bg-pink-raspberry flex-col 2xl:gap-3 2xl:flex-row"
            css={
              router.asPath.startsWith('/ofertas') ? tw`bg-pink-raspberry` : ''
            }
          >
            <Ofertas tw="flex-none hidden 2xl:block" />
            Ofertas
          </Link>
        </li>
        <li
          tw="flex-col flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/empresa')}
        >
          <Empresa tw="flex-none 2xl:hidden" />
          <Link
            href="/empresa"
            tw="flex gap-1 items-center px-3 py-1.5 rounded-full hover:bg-pink-raspberry flex-col 2xl:gap-3 2xl:flex-row"
            css={
              router.asPath.startsWith('/empresa') ? tw`bg-pink-raspberry` : ''
            }
          >
            <Empresa tw="flex-none hidden 2xl:block" />
            Empresa
          </Link>
        </li>
        <li tw="hidden 2xl:block">
          <Link
            href="/ayuda"
            tw="flex gap-3 items-center px-3 py-1.5 rounded-full hover:bg-pink-raspberry"
            css={
              router.asPath.startsWith('/ayuda') ? tw`bg-pink-raspberry` : ''
            }
          >
            <Ayuda tw="flex-none" />
            Ayuda
          </Link>
        </li>
        {Object.keys(user).length === 0 ? (
          ''
        ) : (
          <li tw="2xl:hidden">
            <button tw="w-[4rem] h-[4rem] relative" onClick={toogleIsUser}>
              <uiComps.OptimizedImage
                src="/img/user.webp"
                alt="User"
                width={100}
                height={100}
              />
              <span tw="bg-pink-raspberry px-3 absolute bottom-0 right-0 py-1 rounded-full block w-fit">
                <Hamburguer size={13} />
              </span>
            </button>
          </li>
        )}
      </ListaEnlace>
      {isUser && Object.keys(user).length !== 0 && (
        <User
          twUserStyle={tw`visible h-[calc(100vh - 255px)] lg:h-[calc(100vh - 182px)] top-[153px] bg-white lg:top-[83px] w-full right-0 max-w-[600px] fixed z-20 2xl:hidden `}
          overlay={false}
        />
      )}
    </>
  )
}
