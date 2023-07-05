import { FilterLayout } from '../../components/layouts'
import { GetServerSideProps } from 'next'
import * as uiComps from '../../components/ui'
import { ChevronRight } from '../../components/ui/Icons'
import { Category, Product } from '../../api'
import { ICategoryDatum } from '../../interfaces'

import { IProduct, IProductData } from '../../interfaces/product'
import { useRouter } from 'next/router'
import { SliderFilterName } from '../../components/layouts/FilterLayout/components'

interface Props {
  // categoryModelsProducts: ICategoryDatum
  products: IProductData[]
  categoriesCatalogs: ICategoryDatum[]
  priceMin: number
  priceMax: number
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}
const CategoriaPage = ({
  products,
  categoriesCatalogs,
  pagination,
  priceMin,
  priceMax,
}: Props) => {
  const router = useRouter()
  const categoriaFind = categoriesCatalogs.find(
    category => category.attributes.slug === router.query.categoria,
  )
  const categoria = categoriaFind?.attributes.name

  return (
    <FilterLayout
      categoriesCatalogs={categoriesCatalogs}
      priceMin={priceMin}
      priceMax={priceMax}
    >
      {/* Filtrados */}
      <div tw="w-full lg:w-[57%] xl:w-[66%] 2xl:w-[70%]">
        <div tw="bg-cornflower-blue flex gap-3 items-center rounded-[7px 7px 0 0] py-4 px-7">
          Categorias <ChevronRight />{' '}
          <span tw="text-dark-burgundy font-semibold">{categoria}</span>
        </div>

        {/* <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          tw="my-7 sm:px-12"
        >
          {categoriaFind?.attributes.catalogs?.data.map(catalog => (
            <SwiperSlide key={catalog.id}>
              <Link
                href={`/${categoriaFind.attributes.slug}/${catalog.attributes.slug}`}
                tw="text-center rounded-full border-[1px] border-pink-raspberry px-4 py-2 text-pink-raspberry hover:bg-pink-raspberry w-full hover:text-snow-white transition duration-300 inline-block"
              >
                {catalog.attributes.name}
              </Link>
            </SwiperSlide>
          ))}
          <uiComps.BtnPrev />
          <uiComps.BtnNext />
        </Swiper> */}
        <SliderFilterName
          data={categoriaFind?.attributes.catalogs?.data ?? []}
          generateHref={href =>
            `/${categoriaFind?.attributes.slug}/${href.attributes.slug}`
          }
          filterKey={key => key.id}
          filterName={name => name.attributes.name}
        />
        <div tw="flex flex-col gap-12">
          <div tw="flex flex-col gap-5">
            {products.length === 0 ? (
              <span tw="text-gray-500 text-center">
                No hay productos para este filtro 🙁
              </span>
            ) : (
              products.map(product => (
                <uiComps.Card
                  showAs="filter"
                  key={product.id}
                  product={product}
                />
              ))
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

  // Extracción del parámetro de la ruta
  const { categoria } = params as { categoria: string }

  // Instanciación de los controladores necesarios
  const categoriaCtrl = new Category() // Controlador de categorías
  const productCtrl = new Product() // Controlador de productos

  //Traeremos una categoria con sus respectivos modelos y productos

  // const categoryModelsProducts: ICategoryDatum[] =
  //   await categoriaCtrl.getCategoryWithModelsAndProducts(categoria)
  // //Si es que no hay esa categoria se le manda a un notFound
  // if (categoryModelsProducts.length === 0) {
  //   return {
  //     notFound: true,
  //   }
  // }

  //Traeremos todos los productos con los catalogos que pertenecen, y a las categoria que pertencen
  const productsCatalogCategoryModel: IProduct =
    await productCtrl.getFilteredProducts({
      slug: categoria,
      page: pageNumber,
      sort: sortString,
      name: nameString,
      filterBy: 'category',
      envioGratis,
      minPrice,
      maxPrice,
    })

  // Obtención de todas las categorías
  const getCategories: ICategoryDatum[] = await categoriaCtrl.getCategories()

  // Obtención de los slugs de las categorías
  const categoriesSlug = getCategories.map(category => category.attributes.slug)
  const categorySlugExists = categoriesSlug?.includes(categoria)

  // Si el slug de la categoría no existe, devuelve notFound
  if (!categorySlugExists) {
    return {
      notFound: true,
    }
  }

  // Obtención de todas las categorías con sus catalogos
  const categoriesCatalogs: ICategoryDatum[] =
    await categoriaCtrl.getCategoriesCatalogs()

  // Obtención del precio mínimo del producto según la categoría
  const getPriceMin: IProduct = await productCtrl.getProductPriceMinMax({
    slug: categoria,
    filterBy: 'category',
    //asc: es el precio minimo y desc: es el precio maximo
    minMax: 'asc',
  })
  const priceMin =
    getPriceMin.data.length > 0 ? getPriceMin.data[0].attributes.price : null

  // Obtención del precio máximo del producto según la categoría
  const getPriceMax: IProduct = await productCtrl.getProductPriceMinMax({
    slug: categoria,
    filterBy: 'category',
    //asc: es el precio minimo y desc: es el precio maximo
    minMax: 'desc',
  })
  const priceMax =
    getPriceMax.data.length > 0 ? getPriceMax.data[0].attributes.price : null
  return {
    props: {
      //Precio minimo
      priceMin,
      //Precio maximo
      priceMax,
      //Los Productos
      products: productsCatalogCategoryModel.data,
      //Las categorias para el FilterLayout
      categoriesCatalogs,
      //La paginacion
      pagination: productsCatalogCategoryModel.meta.pagination,
    },
  }
}
export default CategoriaPage
