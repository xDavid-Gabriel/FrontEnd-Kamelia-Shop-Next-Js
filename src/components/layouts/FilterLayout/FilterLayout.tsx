import Head from 'next/head'
import * as uiComps from '../../../components/ui'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { source_code_pro } from '../../../utils'
import { ChevronBoton, CloseCircle, Hamburguer } from '../../ui/Icons'
import tw from 'twin.macro'
import { ICategoryDatum } from '../../../interfaces'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Collapse } from 'react-collapse'
import { useAcordionToogle } from '../../../hooks'

// Import Swiper styles
import 'swiper/css'
import { useStateUiContext } from '../../../context'

interface Props {
  title?: string
  categoriesCatalogs?: ICategoryDatum[]
  priceMin?: number
  priceMax?: number
  isLoading?: boolean
  searchText?: string
}
const StyledFilters = styled.div`
  background-color: rgb(190 197 255 / 1);
  padding: 5rem 1rem;
  border-radius: 7px;
  overflow: auto;
  height: calc(100vh - 91.98px);
  position: fixed;
  right: 0;
  top: 91.98px;
  z-index: 10;
  transition: transform 0.3s ease;
  @media (min-width: 1024px) {
    position: initial;
    height: auto;
    top: initial;
    right: initial;
    padding-top: 1.25rem;
    width: 43%;
  }
  @media (min-width: 1280px) {
    width: 34%;
  }

  @media (min-width: 1536px) {
    width: 30%;
  }

  /* Estilos para la barra de desplazamiento en WebKit */
  &::-webkit-scrollbar {
    width: 0;
  }
`
const SearchList = styled.ul`
  display: flex;
  gap: 13px;
  overflow: auto;
  padding-bottom: 10px;
  // Estilo del thumb (barra de desplazamiento)
  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 100px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cc4478;
    border-radius: 100px;
  }
`
export const FilterLayout: FC<PropsWithChildren<Props>> = ({
  title = 'Filters',
  children,
  categoriesCatalogs,
  priceMin,
  priceMax,
  isLoading,
  searchText,
}) => {
  const { searchHistory, removeItem } = useStateUiContext()
  const router = useRouter()
  const categoria = router.query.categoria
  const catalogo = router.query.catalog
  const modelo = router.query.model
  const search = router.query.s
  const sort = router.query.sort
  const name = router.query.name
  const envioGratis = router.query.envio_gratis
  const minPrice = router.query.min_price
  const maxPrice = router.query.max_price

  const [isOpen, setIsOpen] = useState(false)
  const toogleFilters = () => setIsOpen(prevState => !prevState)

  const {
    open: openCategory,
    toggle: toggleCategory,
    setOpen: setOpenCategory,
  } = useAcordionToogle(false)

  const {
    open: openCatalog,
    toggle: toggleCatalog,
    setOpen: setOpenCatalog,
  } = useAcordionToogle(false)

  //const [open, setOpen] = useState<boolean | number>(false) // Inicializar con null en lugar de false

  // const toggle = (index: boolean | number) => {
  //   if (open === index) {
  //     setOpen(false) // Colapsar todos los acordeones
  //   } else {
  //     setOpen(index)
  //   }
  // }

  useEffect(() => {
    const foundCategory = categoriesCatalogs?.find(
      category => category.attributes.slug === categoria,
    )

    const foundCatalog = foundCategory?.attributes.catalogs?.data.find(
      catalog => catalog.attributes.slug === catalogo,
    )

    setOpenCategory(foundCategory?.id ?? false)
    setOpenCatalog(foundCatalog?.id ?? false)
  }, [categoriesCatalogs, categoria, catalogo])

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* seo && Schemas */}

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
      </Head>
      <uiComps.Header />
      <main tw="mt-10">
        {search && (
          <section tw="container">
            <strong tw="text-2xl flex flex-col text-center sm:flex-row sm:text-start gap-6 pb-4">
              Resultados de búsqueda para:{' '}
              <uiComps.H1>"{searchText}"</uiComps.H1>
            </strong>
          </section>
        )}

        <section tw="container lg:flex  gap-5">
          <div tw="flex flex-col gap-4 lg:w-[43%] xl:w-[34%] 2xl:w-[30%]">
            <span tw="text-center">
              Te mostramos resultados para <strong>OBJETO BUSCADO</strong>{' '}
            </span>
            <div tw="rounded-[23px] bg-red-400 px-3 py-4 bg-[url(/img/banner.webp)] bg-cover bg-no-repeat text-light-gray">
              <uiComps.H3>
                {' '}
                Productos <span tw="text-aqua-blue">Destacados</span>{' '}
              </uiComps.H3>
            </div>
          </div>

          <div tw="flex flex-col gap-4 mt-3 w-full lg:w-[57%] xl:w-[66%] 2xl:w-[70%]">
            <div tw="flex flex-col gap-5 justify-between items-center sm:flex-row">
              <span> Filtrado de Búsqueda :</span>
              <button
                tw="bg-pink-raspberry flex items-center gap-3 text-snow-white rounded-[7px] py-3 px-6 lg:hidden"
                onClick={toogleFilters}
              >
                Filtrar por
                <Hamburguer size={20} />
              </button>
            </div>
            {/* Historial de busqueda tabs */}
            {searchHistory.length === 0 ? (
              <span tw="font-bold">No tienes filtro de busquedas...</span>
            ) : (
              <SearchList>
                {searchHistory.map(text => (
                  <li key={text} tw="relative">
                    <button
                      onClick={() => router.push(`/search?s=${text}`)}
                      tw="bg-orchid text-snow-white py-1.5 pl-10 pr-3 rounded-full  cursor-pointer border-[2px] border-transparent relative"
                      css={text === search ? tw`border-[#FFFF00 ]` : ''}
                    >
                      {text}
                    </button>
                    <i
                      tw="absolute left-3 top-[50%] translate-y-[-50%] text-snow-white cursor-pointer"
                      onClick={() => removeItem(text)}
                    >
                      <CloseCircle size={20} />
                    </i>
                  </li>
                ))}
              </SearchList>
            )}
          </div>
        </section>
        {/* Filtrados */}
        <section tw="container flex gap-5 my-5">
          <StyledFilters
            css={
              isOpen
                ? tw`translate-x-0`
                : tw`translate-x-[100%] lg:translate-x-0`
            }
          >
            <button
              tw="bg-pink-raspberry mb-5 ml-auto flex items-center gap-3 text-snow-white rounded-[7px] py-3 px-6 lg:hidden"
              onClick={toogleFilters}
            >
              Cerrar
              <Hamburguer size={20} />
            </button>
            <uiComps.H3 tw="py-1.5 mx-[-1rem] text-dark-violet bg-baby-blue px-4">
              Filtrado de Parámetros
            </uiComps.H3>
            {/* Filtrar por */}
            <div tw="pt-4">
              <span
                className={source_code_pro.className}
                tw="text-dark-violet bg-baby-blue py-1.5 px-4 block font-bold text-xl rounded-[7px 7px 0 0]"
              >
                Filtrar por
              </span>
              <div tw="bg-cornflower-blue p-4 rounded-[0 0 7px 7px]">
                {/* Orden por Productos */}
                {(priceMin && priceMax) === null ? (
                  ''
                ) : (
                  <uiComps.FilterPrice
                    priceMin={priceMin ? priceMin : 0}
                    priceMax={priceMax ? priceMax : 0}
                  />
                )}

                <ul tw="flex flex-col gap-3 mt-5 px-6">
                  {/* <li tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer">
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7"></div>
                    Ofertas más valoradas
                  </li> */}
                  <li
                    tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer"
                    onClick={() => {
                      toogleFilters()
                      router.replace({
                        query: {
                          ...(categoria ? { categoria: categoria } : {}),
                          ...(modelo ? { model: modelo } : {}),
                          ...(catalogo ? { catalog: catalogo } : {}),
                          ...(search ? { s: search } : {}),
                          envio_gratis: 'false',
                          min_price: minPrice || priceMin,
                          max_price: maxPrice || priceMax,
                        },
                      })
                    }}
                  >
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7 grid place-content-center flex-none">
                      {envioGratis === 'false' && (
                        <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                      )}
                    </div>
                    Envío con costo
                  </li>
                  <li
                    tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer"
                    onClick={() => {
                      toogleFilters()
                      router.replace({
                        query: {
                          ...(categoria ? { categoria: categoria } : {}),
                          ...(modelo ? { model: modelo } : {}),
                          ...(catalogo ? { catalog: catalogo } : {}),
                          ...(search ? { s: search } : {}),
                          envio_gratis: 'true',
                          min_price: minPrice || priceMin,
                          max_price: maxPrice || priceMax,
                        },
                      })
                    }}
                  >
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7 grid place-content-center flex-none">
                      {envioGratis === 'true' && (
                        <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                      )}
                    </div>
                    Costo de envío gratis
                  </li>
                  {/* <li tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer">
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7"></div>
                    Productos menos destacados
                  </li> */}
                  <li
                    tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer"
                    onClick={() => {
                      toogleFilters()
                      router.replace({
                        query: {
                          ...(categoria ? { categoria: categoria } : {}),
                          ...(modelo ? { model: modelo } : {}),
                          ...(catalogo ? { catalog: catalogo } : {}),
                          ...(search ? { s: search } : {}),
                          sort: ':asc',
                          name: 'name',
                          min_price: minPrice || priceMin,
                          max_price: maxPrice || priceMax,
                        },
                      })
                    }}
                  >
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7 grid place-content-center flex-none">
                      {sort === ':asc' && name === 'name' && (
                        <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                      )}
                    </div>
                    Orden alfabetico ascendente
                  </li>
                  <li
                    tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer"
                    onClick={() => {
                      toogleFilters()

                      router.replace({
                        query: {
                          ...(categoria ? { categoria: categoria } : {}),
                          ...(modelo ? { model: modelo } : {}),
                          ...(catalogo ? { catalog: catalogo } : {}),
                          ...(search ? { s: search } : {}),
                          sort: ':desc',
                          name: 'name',
                          min_price: minPrice || priceMin,
                          max_price: maxPrice || priceMax,
                        },
                      })
                    }}
                  >
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7 grid place-content-center flex-none">
                      {sort === ':desc' && name === 'name' && (
                        <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                      )}
                    </div>
                    Orden alfabetico decreciente
                  </li>
                  <li
                    tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer"
                    onClick={() => {
                      toogleFilters()
                      router.replace({
                        query: {
                          ...(categoria ? { categoria: categoria } : {}),
                          ...(modelo ? { model: modelo } : {}),
                          ...(catalogo ? { catalog: catalogo } : {}),
                          ...(search ? { s: search } : {}),
                          sort: ':desc',
                          name: 'price',
                          min_price: minPrice || priceMin,
                          max_price: maxPrice || priceMax,
                        },
                      })
                    }}
                  >
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7 grid place-content-center flex-none">
                      {sort === ':desc' && name === 'price' && (
                        <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                      )}
                    </div>
                    Precio más alto
                  </li>
                  <li
                    tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer"
                    onClick={() => {
                      toogleFilters()
                      router.replace({
                        query: {
                          ...(categoria ? { categoria: categoria } : {}),
                          ...(modelo ? { model: modelo } : {}),
                          ...(catalogo ? { catalog: catalogo } : {}),
                          ...(search ? { s: search } : {}),
                          sort: ':asc',
                          name: 'price',
                          min_price: minPrice || priceMin,
                          max_price: maxPrice || priceMax,
                        },
                      })
                    }}
                  >
                    <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7 grid place-content-center flex-none">
                      {sort === ':asc' && name === 'price' && (
                        <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                      )}
                    </div>
                    Precio más bajo
                  </li>
                </ul>
              </div>
            </div>
            {/* Categorias */}
            <div tw="pt-4">
              <span
                className={source_code_pro.className}
                tw="text-dark-violet bg-baby-blue py-1.5 px-4 block font-bold text-xl rounded-[7px 7px 0 0]"
              >
                Categorías
              </span>
              <div tw="bg-cornflower-blue py-4 px-10 rounded-[0 0 7px 7px]">
                {isLoading ? (
                  <uiComps.BasicLoading />
                ) : (
                  categoriesCatalogs?.map(categorieCatalog => (
                    <React.Fragment key={categorieCatalog.id}>
                      <button
                        className={source_code_pro.className}
                        tw="text-dark-violet text-[18px] mt-4  font-bold flex items-center gap-2"
                        onClick={() => toggleCategory(categorieCatalog.id)}
                      >
                        {categorieCatalog.attributes.name}
                        <i
                          tw="transition duration-300"
                          css={
                            openCategory === categorieCatalog.id
                              ? tw`rotate-180`
                              : tw`rotate-0`
                          }
                        >
                          <ChevronBoton size={13} />
                        </i>
                      </button>

                      <Collapse isOpened={openCategory === categorieCatalog.id}>
                        <ul tw="flex flex-col gap-3 mt-5 ml-3">
                          <Link
                            tw="rounded-full px-2 py-1 text-snow-white bg-pink-raspberry w-fit"
                            href={`/${categorieCatalog.attributes.slug}`}
                            onClick={toogleFilters}
                          >
                            Ver todo
                          </Link>
                          {categorieCatalog.attributes.catalogs?.data.map(
                            catalog => (
                              <React.Fragment key={catalog.id}>
                                <li
                                  tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer w-fit"
                                  onClick={() => {
                                    toggleCatalog(catalog.id)
                                  }}
                                >
                                  {/* <Link
                                    href={`/${categorieCatalog.attributes.slug}/${catalog.attributes.slug}`}
                                    tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7 grid place-content-center"
                                    onClick={() => {
                                      toogleFilters
                                    }}
                                  >
                                    {catalogo === catalog.attributes.slug && (
                                      <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                                    )}
                                  </Link> */}
                                  {catalog.attributes.name}
                                  <i
                                    tw="transition duration-300"
                                    css={
                                      openCatalog === catalog.id
                                        ? tw`rotate-180`
                                        : tw`rotate-0`
                                    }
                                  >
                                    <ChevronBoton size={13} />
                                  </i>
                                </li>

                                <Collapse isOpened={openCatalog === catalog.id}>
                                  <ul tw="ml-3 flex flex-col gap-3">
                                    <Link
                                      tw="rounded-full px-2 py-1 text-snow-white bg-pink-raspberry w-fit"
                                      href={`/${categorieCatalog.attributes.slug}/${catalog.attributes.slug}`}
                                      onClick={toogleFilters}
                                    >
                                      Ver todo
                                    </Link>
                                    {catalog.attributes.models?.data.map(
                                      model => (
                                        <li key={model.id}>
                                          <Link
                                            href={`/${categorieCatalog.attributes.slug}/${catalog.attributes.slug}/${model.attributes.slug}`}
                                            tw="flex gap-3 items-center text-slate-blue text-[18px] cursor-pointer w-fit"
                                            onClick={toogleFilters}
                                          >
                                            <div tw="border-[2px] rounded-[7px] flex-none border-sky-blue w-7 h-7 grid place-content-center">
                                              {modelo ===
                                                model.attributes.slug && (
                                                <div tw="w-3.5 h-3.5 rounded-full bg-dark-violet"></div>
                                              )}
                                            </div>
                                            {model.attributes.name}
                                          </Link>
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                </Collapse>
                              </React.Fragment>
                            ),
                          )}
                        </ul>
                      </Collapse>
                    </React.Fragment>
                  ))
                )}
              </div>
            </div>
          </StyledFilters>
          {children}
        </section>
      </main>
      <uiComps.Footer />
    </>
  )
}
