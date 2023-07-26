import React, { useEffect, useState } from 'react'
import { Search } from '../../Icons'
import { Product } from '../../../../api'
import { useData } from '../../../../hooks'
import { IProduct } from '../../../../interfaces'
import { ENV } from '../../../../utils'
import * as uiComps from '../../'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStateUiContext } from '../../../../context'

export const SearchModal = () => {
  const router = useRouter()
  const { addToSearchHistory } = useStateUiContext()
  const [searchText, setSearchText] = useState('')
  const [openSearch, setOpenSearch] = useState(false)

  useEffect(() => {
    setSearchText(router.query.s?.toString() || '')
  }, [])

  const onSearch = (text: string) => {
    setSearchText(text)
    setOpenSearch(true)
  }

  const filters = `filters[name][$contains]=${searchText}`
  const pagination = `pagination[limit]=3`
  const populate = 'populate[0]=cover'
  const urlParams = `${filters}&${pagination}&${populate}`
  const { data: searchProducts, isLoading } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`,
  )

  return (
    <>
      {openSearch && (
        <div
          tw="fixed inset-0 bg-black/20"
          onClick={() => setOpenSearch(false)}
        />
      )}

      <form
        tw="relative col-span-2 lg:w-[50%] "
        onSubmit={e => {
          e.preventDefault()
          if (searchText.trim().length > 0) {
            router.push(`/search?s=${searchText}`)
            setOpenSearch(false)
            addToSearchHistory(searchText.trim())
          } else {
            return
          }
        }}
      >
        <input
          tw="w-full h-full outline-none p-4 rounded-[7px] placeholder:text-pale-gray text-pale-gray"
          type="text"
          placeholder="Buscar en Kamelia Shoppe..."
          value={searchText}
          onChange={e => onSearch(e.target.value)}
          onFocus={() => setOpenSearch(true)}
        />
        <button
          tw="cursor-pointer rounded-[0_7px_7px_0] h-full grid place-content-center !bg-light-gray px-6 py-4 absolute right-0 top-[0]"
          type="submit"
        >
          <Search size={25} />
        </button>

        {openSearch && (
          <>
            <div tw="absolute  w-full h-full before:w-10 before:h-10 before:bg-snow-white before:absolute before:top-[15px] before:translate-x-[-50%] before:left-[50%] before:right-[20px] before:rotate-[45deg] z-[61]" />
            <div tw="z-[70] absolute w-full bg-snow-white h-[400px] rounded-[7px] top-[80px] px-4 overflow-auto flex flex-col">
              <h3 tw="font-bold py-3 border-b-[1px] border-gray-400">
                Resultados de búsqueda
              </h3>
              <div tw="grid sm:grid-cols-2 pt-4 gap-y-4">
                {searchText.length === 0 ? (
                  <span tw="text-center sm:col-span-2">
                    Por favor haga una búsqueda...😁
                  </span>
                ) : (
                  <>
                    {isLoading ? (
                      <div tw="sm:col-span-2 flex flex-col items-center gap-5">
                        <uiComps.BasicLoading />
                        <p>Cargando los mejores productos para ti</p>
                      </div>
                    ) : searchProducts?.data?.length === 0 ? (
                      // Validación adicional para cuando no hay resultados
                      <span tw="text-center sm:col-span-2">
                        No se encontraron resultados. 😢
                      </span>
                    ) : (
                      searchProducts?.data?.map(product => (
                        <div tw="flex gap-2" key={product.id}>
                          <img
                            src={product.attributes.cover.data.attributes.url}
                            alt={product.attributes.name}
                            tw="w-[50px] h-[50px] rounded-[7px]"
                          />
                          <div>
                            <h4 tw="text-[14px]">{product.attributes.name}</h4>
                            <strong tw="text-pink-raspberry">
                              S/ {product.attributes.price.toFixed(2)}
                            </strong>
                            <Link
                              href={`/producto/${product.attributes.slug}`}
                              tw="block mt-4 border-[2px] border-pink-raspberry text-pink-raspberry py-1 px-4 rounded-full w-fit hover:bg-pink-raspberry hover:text-snow-white transition duration-300"
                            >
                              Ver Producto
                            </Link>
                          </div>
                        </div>
                      ))
                    )}
                  </>
                )}
              </div>

              {searchText.length === 0 || searchProducts?.data.length === 0 ? (
                ''
              ) : (
                <Link
                  href={`/search?s=${searchText}`}
                  tw="font-bold text-intense-pink py-4 text-center block mt-auto"
                  onClick={() => setOpenSearch(false)}
                >
                  Ver más resultados
                </Link>
              )}
            </div>
          </>
        )}
      </form>
    </>
  )
}
