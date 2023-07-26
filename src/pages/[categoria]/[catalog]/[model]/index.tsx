import { GetServerSideProps } from 'next'
import { ChevronRight } from '../../../../components/ui/Icons'
import { FilterLayout } from '../../../../components/layouts'
import * as uiComps from '../../../../components/ui'
import { Catalog, Category, Product } from '../../../../api'
import {
  ICategory,
  ICategoryDatum,
  IProduct,
  IProductData,
} from '../../../../interfaces'
import { useRouter } from 'next/router'
import tw from 'twin.macro'
import { SliderFilterName } from '../../../../components/layouts/FilterLayout/components'
import { useStateCartContext } from '../../../../context/cart'
import { useData } from '../../../../hooks'
import { ENV } from '../../../../utils'

interface Props {
  products: IProduct

  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

const ModelPage = ({ products, pagination }: Props) => {
  const router = useRouter()
  const { data: categoriesCatalogs, isLoading } = useData<ICategory>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}?populate[catalogs][populate][1]=models`,
  )
  const { data: priceMin } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?sort=price:asc&pagination[limit]=1&filters[model][slug][$eq]=${router.query.model}`,
  )

  const { data: priceMax } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?sort=price:desc&pagination[limit]=1&filters[model][slug][$eq]=${router.query.model}`,
  )

  //"categoriesCatalogs" de todas las categorias con catalogos traidas,vamos a usar el fing para solo traer el nombre segun la ruta donde estemos
  const categoryFind = categoriesCatalogs?.data.find(
    category => category.attributes.slug === router.query.categoria,
  )

  const categoria = categoryFind?.attributes.name

  //"catalogModels" tenemos aqui ya un catalogo con sus modelos en "catalog" ponemos nada mas el primer nombre
  // const catalog = catalogModels.attributes.name

  const catalogFind = categoryFind?.attributes.catalogs?.data.find(
    catalog => catalog.attributes.slug === router.query.catalog,
  )
  const catalog = catalogFind?.attributes.name

  //Aqui buscamos el modelo que estamos en la ruta
  const modelFind = catalogFind?.attributes.models?.data.find(
    model => model.attributes.slug === router.query.model,
  )

  //Y traemos el nombre del modelo encontrado segun la ruta
  const model = modelFind?.attributes.name

  return (
    <FilterLayout
      isLoading={isLoading}
      categoriesCatalogs={categoriesCatalogs?.data}
      priceMin={priceMin?.data[0]?.attributes.price}
      priceMax={priceMax?.data[0]?.attributes.price}
    >
      {/* Filtrados */}
      <div tw="w-full lg:w-[57%] xl:w-[66%] 2xl:w-[70%]">
        <div tw="bg-cornflower-blue flex gap-3 items-center rounded-[7px 7px 0 0] py-4 px-7 flex-col sm:flex-row">
          Categorias
          <div tw="rotate-[90deg] sm:rotate-0">
            <ChevronRight />
          </div>
          <span>{categoria}</span>
          <div tw="rotate-[90deg] sm:rotate-0">
            <ChevronRight />
          </div>
          <span>{catalog}</span>
          <div tw="rotate-[90deg] sm:rotate-0">
            <ChevronRight />
          </div>
          <span tw="text-dark-burgundy font-semibold">{model}</span>
        </div>

        <SliderFilterName
          data={catalogFind?.attributes.models?.data ?? []}
          generateHref={href =>
            `/${categoryFind?.attributes.slug}/${catalogFind?.attributes.slug}/${href.attributes.slug}`
          }
          styleLinkTw={model =>
            model.attributes.slug === router.query.model
              ? tw`bg-pink-raspberry text-snow-white`
              : ''
          }
          filterName={name => name.attributes.name}
          filterKey={key => key.id}
        />
        <div tw="flex flex-col gap-12">
          <div tw="flex flex-col gap-5">
            {/* Listaremos los productos */}
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

export const getServerSideProps: GetServerSideProps = async ({
  query,
  params,
}) => {
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

  // Extracción de los parámetros de la ruta
  // Extracción de los parámetros de la ruta
  const { catalog, model } = params as {
    catalog: string
    model: string
  }

  // Instanciación de los controladores necesarios
  const productCtrl = new Product() // Controlador de productos
  const catalogCtrl = new Catalog() // Controlador de catalogos

  //Obtención de los productos filtrados por catalogo y categoría trae la categoria pero es para hacer una validación que ese catalogo realmente pertenece a esa categoria, pero estamos trayecto todos los productos de el catalogo que se pida mediante la url
  const productsCatalogCategoryModel: IProduct =
    await productCtrl.getFilteredProducts({
      slug: model,
      page: pageNumber,
      sort: sortString,
      name: nameString,
      filterBy: 'model',
      envioGratis,
      minPrice,
      maxPrice,
    })

  // Verificación si el modelo pertenece a la catalogo indicado
  const modelBelongsToCatalog = productsCatalogCategoryModel.data.some(
    item => item.attributes.model?.data.attributes.slug === model,
  )

  // Si el modelo no pertenece al catalogo indicado y el array de productos no está vacío, devuelve notFound
  if (!modelBelongsToCatalog && productsCatalogCategoryModel.data.length > 0) {
    return {
      notFound: true,
    }
  }

  // Obtención de un catalogo y sus modelos según el slug del catalogo
  const getCatalogBySlugModels: ICategoryDatum[] =
    await catalogCtrl.getCatalogBySlugModels(catalog)

  // Obtención de los slugs de los modelos pertenecientes al catalogo
  const modelSlugs = getCatalogBySlugModels[0]?.attributes.models?.data.map(
    model => model.attributes.slug,
  )

  // Verificación si el slug del modelo existe en el catalogo correspondiente
  const modelSlugExists = modelSlugs?.includes(model)

  // Si el slug del catalogo no existe, devuelve notFound
  if (!modelSlugExists) {
    return {
      notFound: true,
    }
  }

  // Obtención del precio mínimo del producto según la categoría, catalogo y el modelo
  // const getPriceMin: IProduct = await productCtrl.getProductPriceMinMax({
  //   slug: model,
  //   filterBy: 'model',
  //   //asc: es el precio minimo y desc: es el precio maximo
  //   minMax: 'asc',
  // })
  // const priceMin =
  //   getPriceMin.data.length > 0 ? getPriceMin.data[0].attributes.price : null

  // // Obtención del precio máximo del producto según la categoría, catalogo y el modelo
  // const getPriceMax: IProduct = await productCtrl.getProductPriceMinMax({
  //   slug: model,
  //   filterBy: 'model',
  //   //asc: es el precio minimo y desc: es el precio maximo
  //   minMax: 'desc',
  // })
  // const priceMax =
  //   getPriceMax.data.length > 0 ? getPriceMax.data[0].attributes.price : null

  // Devuelve los datos necesarios para renderizar la página
  return {
    props: {
      //Precio minimo
      // priceMin,
      //Precio maximo
      // priceMax,
      //Los Productos
      products: productsCatalogCategoryModel,
      //La paginacion
      pagination: productsCatalogCategoryModel.meta.pagination,
    },
  }
}
export default ModelPage
