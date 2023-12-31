import { GetServerSideProps } from 'next'
import { FilterLayout } from '../../components/layouts'
import { Product } from '../../api'
import { ICategory, IProduct } from '../../interfaces'
import { ENV } from '../../utils'
import { useData } from '../../hooks'
import { useRouter } from 'next/router'
import * as uiComps from '../../components/ui'

interface Props {
  products: IProduct
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}
const OfertasPage = ({ products, pagination }: Props) => {
  //Las categorias, catalogos y modelos para el FilterLayout
  const { data: categoriesCatalogs, isLoading } = useData<ICategory>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}?populate[catalogs][populate][1]=models`,
  )

  const { data: priceMin } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?sort=price:asc&pagination[limit]=1&filters[discount][$ne]=0`,
  )

  const { data: priceMax } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?sort=price:desc&pagination[limit]=1&filters[discount][$ne]=0`,
  )
  return (
    <FilterLayout
      isLoading={isLoading}
      categoriesCatalogs={categoriesCatalogs?.data}
      priceMin={priceMin?.data[0]?.attributes.price}
      priceMax={priceMax?.data[0]?.attributes.price}
    >
      <div tw="w-full lg:w-[57%] xl:w-[66%] 2xl:w-[70%]">
        <div tw="flex flex-col gap-12">
          <div tw="flex flex-col gap-5">
            {products.data.length === 0 ? (
              <span tw="text-gray-500 text-center">
                No hay productos para este filtro 🙁
              </span>
            ) : (
              <uiComps.CardList showAs="filter" products={products} />
            )}
          </div>

          <uiComps.Pagination pagination={pagination} />
        </div>
      </div>
    </FilterLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Extracción de los parámetros de la consulta
  const {
    page = 1,
    sort = ':asc',
    name = 'name',
    envio_gratis = '',
    min_price = 1,
    max_price = 9999999,
  } = query

  // Conversión de los parámetros a cadenas de texto
  const pageNumber = page.toString()
  const sortString = sort.toString()
  const nameString = name.toString()
  const envioGratis = envio_gratis.toString()
  const minPrice = min_price.toString()
  const maxPrice = max_price.toString()

  // Instanciación de los controladores necesarios
  const productCtrl = new Product() // Controlador de productos

  //Traeremos todos los productos con los catalogos que pertenecen, y a las categoria que pertencen
  const productsCatalogCategoryModel: IProduct =
    await productCtrl.getFilteredProducsOfertas({
      page: pageNumber,
      sort: sortString,
      name: nameString,
      envioGratis,
      minPrice,
      maxPrice,
    })

  return {
    props: {
      products: productsCatalogCategoryModel,
      //La paginacion
      pagination: productsCatalogCategoryModel.meta.pagination,
    },
  }
}
export default OfertasPage
