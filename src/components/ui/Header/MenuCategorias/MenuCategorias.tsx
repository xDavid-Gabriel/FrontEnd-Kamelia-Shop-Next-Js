import { useEffect, useState } from 'react'
import { ChevronBoton, ChevronRight } from '../../Icons'
import tw from 'twin.macro'
import { Category } from '../../../../api'
import { ICategory, ICategoryDatum } from '../../../../interfaces'
import Link from 'next/link'
import React from 'react'
import { Collapse } from 'react-collapse'
import { source_code_pro } from '../../../../utils'
import { useAcordionToogle } from '../../../../hooks'
import styled from 'styled-components'

const categoryCtrl = new Category()
interface Props {
  toogleMegaMenu: () => void
}

const ContentCategory = styled.div`
  background-color: rgb(16 2 22 / 1);
  height: calc(100vh - 185px);
  overflow: auto;
  padding: 1.5rem 0;
  width: 100%;
  position: fixed;
  left: 0px;
  width: 100%;
  bottom: 102px;
  @media (min-width: 1536px) {
    bottom: initial;
    top: 187px;
    height: auto;
    padding-bottom: 5rem;
  }
  // Estilo del thumb (barra de desplazamiento)
  &::-webkit-scrollbar {
    width: 0;
  }
`
export const MenuCategorias = ({ toogleMegaMenu }: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(1)
  const [selectedCatalogId, setSelectedCatalogId] = useState<number | null>(
    null,
  )
  const [menuData, setMenuData] = useState<ICategoryDatum[]>([])

  const handleSelection = (
    id: number,
    selectionType: 'category' | 'catalog',
  ) => {
    if (selectionType === 'category') {
      setSelectedCategoryId(id)
      setSelectedCatalogId(null) // Restablecer el ID del catalogo seleccionado al cambiar de categoría
    } else if (selectionType === 'catalog') {
      setSelectedCatalogId(id)
    }
  }

  useEffect(() => {
    const getMenuData = async () => {
      const response: ICategory = await categoryCtrl.getMenuData()
      setMenuData(response.data)
    }
    getMenuData()
  }, [])

  const selectedCategory = menuData.find(
    category => category.id === selectedCategoryId,
  )

  const selectedCatalog = selectedCategory?.attributes.catalogs?.data.find(
    catalog => catalog.id === selectedCatalogId,
  )

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

  return (
    <ContentCategory>
      <div tw="container">
        <span tw="mb-5 block text-white">
          Conoce los Productos que ofrecemos
        </span>
        {/* Desktop */}
        <div tw="hidden 2xl:grid [grid-template-columns:30rem_1fr]">
          {/* Lista de categorias */}
          <ul tw="flex flex-col gap-3 text-white">
            {menuData.map(category => (
              <li key={category.id}>
                <Link
                  tw="cursor-pointer transition duration-300 flex justify-between font-bold py-2.5 px-6 hover:text-[#454545] hover:bg-white rounded-[7px] items-center"
                  className={source_code_pro.className}
                  href={`/${category.attributes.slug}`}
                  css={
                    selectedCategory?.id === category.id
                      ? tw`bg-white text-[#454545]`
                      : ''
                  }
                  onClick={toogleMegaMenu}
                  onMouseEnter={() => handleSelection(category.id, 'category')}
                >
                  {category.attributes.name}
                  <ChevronRight />
                </Link>
              </li>
            ))}
          </ul>
          <div tw="px-8 text-white">
            <div tw="grid gap-10 [grid-template-columns:20rem 1fr] items-center">
              {/* <!-- Categorias --> */}
              {selectedCategory && (
                <div>
                  <span tw="mb-8 block">
                    Catálogo <strong>{selectedCategory.attributes.name}</strong>
                  </span>
                  {/* <!-- Listas de los catalogos al selecionar una categoria--> */}
                  <ul>
                    {selectedCategory.attributes.catalogs?.data.map(catalog => (
                      <li key={catalog.id}>
                        <Link
                          href={`/${selectedCategory.attributes.slug}/${catalog.attributes.slug}`}
                          tw="flex items-center justify-between p-2 rounded-[5px] hover:bg-[#683B8C] cursor-pointer"
                          css={
                            selectedCatalog?.id === catalog.id
                              ? tw`bg-[#683B8C]`
                              : ''
                          }
                          onMouseEnter={() =>
                            handleSelection(catalog.id, 'catalog')
                          }
                          onClick={toogleMegaMenu}
                        >
                          <button tw="flex items-center gap-3">
                            <div tw="w-8 h-8 bg-white rounded-[11px]"></div>
                            {catalog.attributes.name}
                          </button>
                          <ChevronRight />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* <!-- Catalogos --> */}
              {selectedCatalog && (
                <div>
                  <strong tw="block mb-8">
                    Modelos del Catalogo {selectedCatalog.attributes.name}
                  </strong>
                  <ul tw="grid grid-cols-2 gap-x-20 gap-y-4 w-fit">
                    {/* Modelos */}
                    {selectedCatalog.attributes.models?.data.map(model => (
                      <li key={model.id}>
                        <Link
                          href={`/${selectedCategory?.attributes.slug}/${selectedCatalog.attributes.slug}/${model.attributes.slug}`}
                          tw="py-2 px-6 rounded-[5px] hover:bg-[#683B8C] cursor-pointer"
                          onClick={toogleMegaMenu}
                        >
                          {model.attributes.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div tw="2xl:hidden">
          {menuData.map(categorieCatalog => (
            <React.Fragment key={categorieCatalog.id}>
              <button
                className={source_code_pro.className}
                tw="text-snow-white text-[18px] mt-4  font-bold flex items-center gap-2 hover:bg-snow-white hover:text-dark-burgundy transition duration-300 py-2.5 px-6 rounded-[7px]"
                onClick={() => toggleCategory(categorieCatalog.id)}
                css={
                  openCategory === categorieCatalog.id
                    ? tw`bg-snow-white text-dark-burgundy`
                    : ''
                }
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
                    onClick={toogleMegaMenu}
                  >
                    Ver todo
                  </Link>
                  {categorieCatalog.attributes.catalogs?.data.map(catalog => (
                    <React.Fragment key={catalog.id}>
                      <li
                        tw="flex gap-5 items-center text-snow-white text-[18px] cursor-pointer w-fit hover:bg-snow-white hover:text-dark-burgundy transition duration-300 py-2 px-6 rounded-[7px]"
                        onClick={() => {
                          toggleCatalog(catalog.id)
                        }}
                        css={
                          openCatalog === catalog.id
                            ? tw`bg-snow-white text-dark-burgundy`
                            : ''
                        }
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
                            onClick={toogleMegaMenu}
                          >
                            Ver todo
                          </Link>
                          {catalog.attributes.models?.data.map(model => (
                            <li key={model.id}>
                              <Link
                                href={`/${categorieCatalog.attributes.slug}/${catalog.attributes.slug}/${model.attributes.slug}`}
                                tw="flex gap-3 items-center text-snow-white p-1 rounded-[7px] transition duration-300 hover:bg-pink-raspberry text-[18px] cursor-pointer w-fit"
                                onClick={toogleMegaMenu}
                              >
                                {model.attributes.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Collapse>
                    </React.Fragment>
                  ))}
                </ul>
              </Collapse>
            </React.Fragment>
          ))}
        </div>
      </div>
    </ContentCategory>
  )
}
