import * as uiComps from '../../components/ui'
import { GetStaticPaths, GetStaticProps } from 'next'
import { BasicLayout } from '../../components/layouts'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Autoplay,
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import {
  Carrito,
  ChevronLeft,
  ChevronRight,
  Domicilio,
  Heart,
} from '../../components/ui/Icons'
import { useState } from 'react'
import tw from 'twin.macro'
import { IProduct, IProductData } from '../../interfaces'
import { useData } from '../../hooks'
import { ENV } from '../../utils'
import { fn } from '../../utils/functions'
import { Product } from '../../api'
import { useStateCartContext } from '../../context/cart'
import Link from 'next/link'
const productCtrl = new Product()
const productDetail = {
  id: 20,
  attributes: {
    name: 'Mochila morral fashion',
    descripcion:
      'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.',
    price: 90,
    createdAt: '2023-06-28T22:30:52.557Z',
    updatedAt: '2023-07-17T15:42:47.558Z',
    publishedAt: '2023-06-28T22:31:06.837Z',
    slug: 'mochila-morral-fashion',
    envio_gratis: true,
    discount: 15,
    stock: 50,
    images: {
      data: [
        {
          id: 31,
          attributes: {
            name: 'product-1-2.webp',
            alternativeText: null,
            caption: null,
            width: 485,
            height: 485,
            formats: {
              small: {
                name: 'small_product-1-2.webp',
                hash: 'small_product_1_2_d1dd10e038',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 500,
                height: 500,
                size: 15.4,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/small_product_1_2_d1dd10e038.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/small_product_1_2_d1dd10e038',
                  resource_type: 'image',
                },
              },
              medium: {
                name: 'medium_product-1-2.webp',
                hash: 'medium_product_1_2_d1dd10e038',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 750,
                height: 750,
                size: 23.59,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/medium_product_1_2_d1dd10e038.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/medium_product_1_2_d1dd10e038',
                  resource_type: 'image',
                },
              },
            },
            hash: 'product_1_2_d1dd10e038',
            ext: '.webp',
            mime: 'image/webp',
            size: 16.13,
            url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/product_1_2_d1dd10e038.webp',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'Ecommerce-Kamelia-Shop/product_1_2_d1dd10e038',
              resource_type: 'image',
            },
            createdAt: '2023-07-20T23:07:27.409Z',
            updatedAt: '2023-07-20T23:07:27.409Z',
          },
        },
        {
          id: 30,
          attributes: {
            name: 'product-1-3.webp',
            alternativeText: null,
            caption: null,
            width: 485,
            height: 485,
            formats: {
              small: {
                name: 'small_product-1-3.webp',
                hash: 'small_product_1_3_484d5e343f',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 500,
                height: 500,
                size: 10.96,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/small_product_1_3_484d5e343f.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/small_product_1_3_484d5e343f',
                  resource_type: 'image',
                },
              },
              medium: {
                name: 'medium_product-1-3.webp',
                hash: 'medium_product_1_3_484d5e343f',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 750,
                height: 750,
                size: 16.89,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/medium_product_1_3_484d5e343f.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/medium_product_1_3_484d5e343f',
                  resource_type: 'image',
                },
              },
            },
            hash: 'product_1_3_484d5e343f',
            ext: '.webp',
            mime: 'image/webp',
            size: 11.69,
            url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/product_1_3_484d5e343f.webp',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'Ecommerce-Kamelia-Shop/product_1_3_484d5e343f',
              resource_type: 'image',
            },
            createdAt: '2023-07-20T23:07:27.357Z',
            updatedAt: '2023-07-20T23:07:27.357Z',
          },
        },
        {
          id: 29,
          attributes: {
            name: 'product-1-4.webp',
            alternativeText: null,
            caption: null,
            width: 485,
            height: 485,
            formats: {
              small: {
                name: 'small_product-1-4.webp',
                hash: 'small_product_1_4_85b3a3b90c',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 500,
                height: 500,
                size: 20.15,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/small_product_1_4_85b3a3b90c.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/small_product_1_4_85b3a3b90c',
                  resource_type: 'image',
                },
              },
              medium: {
                name: 'medium_product-1-4.webp',
                hash: 'medium_product_1_4_85b3a3b90c',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 750,
                height: 750,
                size: 31.16,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/medium_product_1_4_85b3a3b90c.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/medium_product_1_4_85b3a3b90c',
                  resource_type: 'image',
                },
              },
            },
            hash: 'product_1_4_85b3a3b90c',
            ext: '.webp',
            mime: 'image/webp',
            size: 22.07,
            url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/product_1_4_85b3a3b90c.webp',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'Ecommerce-Kamelia-Shop/product_1_4_85b3a3b90c',
              resource_type: 'image',
            },
            createdAt: '2023-07-20T23:07:27.200Z',
            updatedAt: '2023-07-20T23:07:27.200Z',
          },
        },
        {
          id: 28,
          attributes: {
            name: 'product-1-5.webp',
            alternativeText: null,
            caption: null,
            width: 485,
            height: 485,
            formats: {
              small: {
                name: 'small_product-1-5.webp',
                hash: 'small_product_1_5_198365034a',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 500,
                height: 500,
                size: 10.19,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/small_product_1_5_198365034a.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/small_product_1_5_198365034a',
                  resource_type: 'image',
                },
              },
              medium: {
                name: 'medium_product-1-5.webp',
                hash: 'medium_product_1_5_198365034a',
                ext: '.webp',
                mime: 'image/webp',
                path: null,
                width: 750,
                height: 750,
                size: 15.73,
                url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/medium_product_1_5_198365034a.webp',
                provider_metadata: {
                  public_id:
                    'Ecommerce-Kamelia-Shop/medium_product_1_5_198365034a',
                  resource_type: 'image',
                },
              },
            },
            hash: 'product_1_5_198365034a',
            ext: '.webp',
            mime: 'image/webp',
            size: 11.48,
            url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689894446/Ecommerce-Kamelia-Shop/product_1_5_198365034a.webp',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'Ecommerce-Kamelia-Shop/product_1_5_198365034a',
              resource_type: 'image',
            },
            createdAt: '2023-07-20T23:07:27.196Z',
            updatedAt: '2023-07-20T23:07:27.196Z',
          },
        },
      ],
    },
    cover: {
      data: {
        id: 27,
        attributes: {
          name: 'product-1-1.webp',
          alternativeText: null,
          caption: null,
          width: 1020,
          height: 1020,
          formats: {
            small: {
              name: 'small_product-1-1.webp',
              hash: 'small_product_1_1_a5e31c0b11',
              ext: '.webp',
              mime: 'image/webp',
              path: null,
              width: 500,
              height: 500,
              size: 13.2,
              url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689893865/Ecommerce-Kamelia-Shop/small_product_1_1_a5e31c0b11.webp',
              provider_metadata: {
                public_id:
                  'Ecommerce-Kamelia-Shop/small_product_1_1_a5e31c0b11',
                resource_type: 'image',
              },
            },
            medium: {
              name: 'medium_product-1-1.webp',
              hash: 'medium_product_1_1_a5e31c0b11',
              ext: '.webp',
              mime: 'image/webp',
              path: null,
              width: 750,
              height: 750,
              size: 21.61,
              url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689893865/Ecommerce-Kamelia-Shop/medium_product_1_1_a5e31c0b11.webp',
              provider_metadata: {
                public_id:
                  'Ecommerce-Kamelia-Shop/medium_product_1_1_a5e31c0b11',
                resource_type: 'image',
              },
            },
          },
          hash: 'product_1_1_a5e31c0b11',
          ext: '.webp',
          mime: 'image/webp',
          size: 35.96,
          url: 'https://res.cloudinary.com/dx5lovb1w/image/upload/v1689893865/Ecommerce-Kamelia-Shop/product_1_1_a5e31c0b11.webp',
          previewUrl: null,
          provider: 'cloudinary',
          provider_metadata: {
            public_id: 'Ecommerce-Kamelia-Shop/product_1_1_a5e31c0b11',
            resource_type: 'image',
          },
          createdAt: '2023-07-20T22:57:45.893Z',
          updatedAt: '2023-07-20T23:10:00.366Z',
        },
      },
    },
    // imagenes: [
    //   '/img/tarjeta-producto.webp',
    //   '/img/tarjeta-producto.webp',
    //   '/img/tarjeta-producto.webp',
    //   '/img/tarjeta-producto.webp',
    //   '/img/tarjeta-producto.webp',
    //   '/img/tarjeta-producto.webp',
    //   '/img/tarjeta-producto.webp',
    // ],

    category: {
      data: {
        id: 2,
        attributes: {
          name: 'Mochilas Coreanas',
          slug: 'mochilas-coreanas',
          createdAt: '2023-06-07T22:47:02.073Z',
          updatedAt: '2023-06-08T03:04:28.594Z',
          publishedAt: '2023-06-07T22:47:09.679Z',
        },
      },
    },
    catalog: {
      data: {
        id: 1,
        attributes: {
          name: 'Mochilas',
          slug: 'mochilas',
          createdAt: '2023-06-28T20:12:19.540Z',
          updatedAt: '2023-06-28T22:11:27.943Z',
          publishedAt: '2023-06-28T20:12:20.505Z',
        },
      },
    },
    measures: {
      id: 1,
      height: 35,
      width: 20,
      depth: 15,
      weight: 2,
      lock: false,
      pockets: 5,
    },
    additional: {
      id: 1,
      brand: 'Marca',
      model: 'Modelo',
      line: 'Línea',
      size: 'Mediano',
      warranty: '7 Días',
      hypoallergenic: true,
    },
  },
}
/*"measures":


{
"id": 1,
"height": 35,
"width": 20,
"depth": 15,
"weight": 2,
"lock": false,
"pockets": 5
}

additional
{
  "id": 1,
  "brand": "Marca",
  "model": "Modelo",
  "line": "Línea",
  "size": "Mediano",
  "warranty": "7 Días",
  "hypoallergenic": true
}
*/

interface Props {
  productDetail: IProductData
}
const ProductPage = ({ productDetail }: Props) => {
  const { addCart } = useStateCartContext()
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
  const categorySlug = productDetail.attributes.category.data.attributes.slug
  const { data: productsRelated, isLoading } = useData<IProduct>(
    `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?populate[0]=category&populate[1]=model&populate[2]=cover&filters[category][slug][$eq]=${categorySlug}&pagination[start]=0&pagination[limit]=10`,
  )
  const [quantityState, setQuantityState] = useState(1)

  const coverDesktop = productDetail.attributes.cover.data.attributes.url
  const coverTablet =
    productDetail.attributes.cover.data.attributes.formats.medium.url
  const coverMobile =
    productDetail.attributes.cover.data.attributes.formats.small.url
  const coverWidth = productDetail.attributes.cover.data.attributes.width
  const coverHeight = productDetail.attributes.cover.data.attributes.height

  return (
    <BasicLayout title={productDetail.attributes.name}>
      <section tw="container mt-[12px] xl:mt-[59px] 2xl:mt-[25px]">
        <div tw="xl:bg-cornflower-blue rounded-[23px 23px 0 0] xl:p-[21px]">
          {/* Indicadores de navegación */}
          <div tw="flex gap-[10px] sm:(gap-[12px] items-center) rounded-tl-[7px] rounded-tr-[7px]  bg-cornflower-blue xl:(m-[-22px 0 0 -22px] rounded-tr-[23px]) xl:rounded-tl-[23px]">
            {/* Boton de retroceso */}
            <button tw="bg-sky-blue text-dark-charcoa grid rounded-[7px 0 0 0] place-content-center w-[34px] sm:(w-[64px] h-[64px])  xl:rounded-[23px 0 0 0]  xl:(w-[64px] h-[78px]) flex-none">
              <ChevronLeft tw="sm:(w-[16px] h-[16px])" />
            </button>
            {/* Informacón de donde pertenece el producto */}
            <div tw="py-[4px]">
              <span tw="font-medium text-dark-burgundy text-[13px] sm:text-[18px] xl:text-[20px]">
                Este Producto está en la categoría de:
              </span>
              <ul tw="flex gap-2 items-center text-[13px] sm:text-[18px]">
                <li tw="text-dark-charcoa">
                  {productDetail.attributes.category.data.attributes.name}
                </li>
                <li>
                  <ChevronRight size={10} />
                </li>
                <li tw="text-dark-burgundy font-medium">
                  {' '}
                  {productDetail.attributes.catalog.data.attributes.name}
                </li>
              </ul>
            </div>
          </div>
          {/* Slider y añadir al carrito */}
          <div tw="flex flex-col xl:pt-[15px] xl:flex-row 2xl:[grid-template-columns: 1fr 593px] gap-[37px] xl:gap-[21px] 2xl:pt-[46px] 2xl:gap-[39px]">
            <div tw="max-w-[700px] w-full mt-[16px] mx-auto flex flex-col-reverse gap-[17px] items-start xl:w-[50%] xl:h-[605.5px] xl:mt-0 xl:mx-0 xl:max-w-[initial] xl:gap-0 xl:flex-row 2xl:w-[55%]">
              <div tw="w-full xl:w-[20%] xl:mr-[12px] 2xl:w-[15%]">
                <div tw="h-[calc(230px - 96px)] xl:h-[calc(660px - 96px)]">
                  <Swiper
                    tw="w-full h-full"
                    grabCursor={true}
                    direction="vertical"
                    onSwiper={setThumbsSwiper}
                    spaceBetween={23}
                    slidesPerView={2}
                    breakpoints={{
                      0: {
                        direction: 'horizontal',
                        slidesPerView: 2,
                      },
                      420: {
                        slidesPerView: 3,
                        direction: 'horizontal',
                      },
                      768: {
                        slidesPerView: 4,
                        direction: 'horizontal',
                      },
                      1020: {
                        slidesPerView: 5,
                        direction: 'horizontal',
                      },
                      1280: {
                        direction: 'vertical',
                        slidesPerView: 5,
                      },
                    }}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                  >
                    <SwiperSlide tw="transition duration-500 [filter: grayscale(100%)] opacity-50 hover:opacity-100 hover:[filter: grayscale(0%)]">
                      <uiComps.OptimizedPicture
                        typeSrc="external"
                        alt={productDetail.attributes.name}
                        srcMobile={coverMobile}
                        srcTablet={coverTablet}
                        srcDesktop={coverDesktop}
                        width={coverWidth}
                        height={coverHeight}
                        stylesImg={tw`rounded-[11px]`}
                      />
                    </SwiperSlide>
                    {productDetail.attributes.images.data.map(img => (
                      <SwiperSlide
                        key={img.id}
                        tw="transition duration-500 [filter: grayscale(100%)] opacity-50 hover:opacity-100 hover:[filter: grayscale(0%)]"
                      >
                        <uiComps.OptimizedPicture
                          typeSrc="external"
                          alt={productDetail.attributes.name}
                          srcMobile={img.attributes.formats.small.url}
                          srcTablet={img.attributes.formats.medium.url}
                          srcDesktop={img.attributes.url}
                          width={img.attributes.width}
                          height={img.attributes.height}
                          stylesImg={tw`rounded-[11px]`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div tw="w-full h-full xl:w-[80%] 2xl:w-[85%]">
                <Swiper
                  direction="horizontal"
                  tw="h-full w-full"
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  spaceBetween={32}
                  mousewheel={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  breakpoints={{
                    0: {
                      direction: 'horizontal',
                    },
                    1280: {
                      direction: 'horizontal',
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[
                    Navigation,
                    Thumbs,
                    Autoplay,
                    Mousewheel,
                    Pagination,
                  ]}
                >
                  <SwiperSlide>
                    <figure tw="relative w-full h-full">
                      <uiComps.OptimizedPicture
                        typeSrc="external"
                        alt={productDetail.attributes.name}
                        srcMobile={coverMobile}
                        srcTablet={coverTablet}
                        srcDesktop={coverDesktop}
                        width={coverWidth}
                        height={coverHeight}
                        stylesImg={tw`rounded-[11px]`}
                      />
                      <div
                        tw="rounded-[11px] absolute z-10 inset-0 bg-[linear-gradient(180deg, rgba(104, 59, 140, 0.00) 56.53%, #683B8C 100%);
                      ]"
                      ></div>
                    </figure>
                  </SwiperSlide>
                  {productDetail.attributes.images.data.map(img => (
                    <SwiperSlide key={img.id} tw="h-auto">
                      <figure tw="relative w-full h-full">
                        <uiComps.OptimizedPicture
                          typeSrc="external"
                          alt={productDetail.attributes.name}
                          srcMobile={img.attributes.formats.small.url}
                          srcTablet={img.attributes.formats.medium.url}
                          srcDesktop={img.attributes.url}
                          width={img.attributes.width}
                          height={img.attributes.height}
                          stylesImg={tw`rounded-[11px]`}
                        />

                        <div
                          tw="rounded-[11px] absolute z-10 inset-0 bg-[linear-gradient(180deg, rgba(104, 59, 140, 0.00) 56.53%, #683B8C 100%);
                      ]"
                        ></div>
                      </figure>
                    </SwiperSlide>
                  ))}

                  <uiComps.BtnPrev
                    additionalStyles={tw`bg-snow-white text-dark-charcoa hover:bg-snow-white/80 left-[10px] xl:w-[48px] xl:h-[68px] xl:rounded-[0 23px 23px 0] xl:left-0`}
                  />
                  <uiComps.BtnNext
                    additionalStyles={tw`bg-snow-white text-dark-charcoa hover:bg-snow-white/80 right-[10px] xl:w-[48px] xl:h-[68px] xl:rounded-[ 23px 0 0 23px] xl:right-0`}
                  />
                </Swiper>
              </div>
            </div>
            <div tw="p-[21px] xl:bg-baby-blue grid grid-cols-4 gap-y-[12px] max-w-[501px] mx-auto w-full xl:max-w-[initial] xl:mx-0 xl:gap-y-[21px] xl:p-[49px 21px 24.5px 21px] 2xl:p-[49px 41px 24.5px 41px] rounded-[11px] xl:w-[50%] 2xl:w-[45%]">
              {/* Nombre y precio */}
              <div tw="flex flex-col gap-[8px] col-span-3 row-span-3 sm:col-span-2">
                <span tw="bg-intense-pink py-[3px] rounded-full px-[18px] text-snow-white text-[13px] w-fit">
                  Producto Nuevo
                </span>
                <h1 tw="text-[20px] md:text-[25px] xl:text-[30px] font-bold">
                  {productDetail.attributes.name}
                </h1>
                <span tw="xl:text-[18px]">Genérico</span>
                <img tw="w-[80px]" src="/img/valoracion.svg" alt="Valoración" />
                <div tw="flex flex-col gap-[3px] 2xl:gap-[21px]">
                  <strong tw="text-dark-violet">Precio por Unidad</strong>
                  <strong tw="text-[20px]">
                    s/{' '}
                    {fn.calcDiscountedPrice(
                      productDetail.attributes.price,
                      productDetail.attributes.discount,
                    )}
                  </strong>
                </div>
              </div>
              {/* Añadir a favoritos */}
              <div tw="sm:col-span-2 sm:justify-self-end xl:col-span-1">
                <span tw="font-bold text-[14px]">Añadir a Favoritos</span>
                <Heart size={20} tw="ml-auto text-pink-raspberry" />
              </div>
              {/* Precio de Descuento */}
              <div tw="sm:col-span-2 sm:ml-[-25px] xl:ml-0 xl:col-[3/4] xl:row-[1]">
                {productDetail.attributes.discount === 0 ? (
                  ''
                ) : (
                  <span tw="font-bold text-snow-white rounded-[7px] block py-1.5 px-3 text-xl w-fit bg-intense-pink">
                    -{productDetail.attributes.discount}%
                  </span>
                )}
              </div>
              {/* Precio de anterior */}
              <div tw="flex flex-col gap-2 col-[3/5]  xl:col-[3/4] xl:row-[3]">
                {productDetail.attributes.discount === 0 ? (
                  ''
                ) : (
                  <>
                    <strong tw="font-semibold">Precio Anterior</strong>
                    <span tw="text-snow-white rounded-[8px] bg-dark-purple  py-1 px-3 font-bold block w-fit">
                      Antes
                      <p tw="text-aqua-blue line-through">
                        s/ {productDetail.attributes.price}
                      </p>
                    </span>
                  </>
                )}
              </div>

              {/* Agregar cantidad */}
              <div tw="col-span-4 xl:col-[4/5] xl:row-[3]">
                <strong>Agregar Cantidad</strong>
                <div tw="flex gap-4 items-center xl:justify-between">
                  <button
                    tw="bg-pink-raspberry w-7 h-7 text-snow-white font-bold rounded-[7px] flex-none"
                    onClick={() => {
                      if (quantityState <= 1) {
                        return
                      }
                      setQuantityState(quantityState - 1)
                    }}
                  >
                    -
                  </button>
                  <span tw="bg-snow-white block py-2 px-6 rounded-[7px]">
                    {quantityState}
                  </span>{' '}
                  <button
                    tw="bg-pink-raspberry w-7 h-7 text-snow-white font-bold rounded-[7px] flex-none"
                    onClick={() => setQuantityState(quantityState + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Colores disponibles */}
              <div tw="col-span-4">
                <strong>Colores Disponibles</strong>
                {/* <!-- Colores --> */}
                <ul tw="border-[1px] border-cornflower-blue rounded-full py-2 px-3 bg-black/10 w-fit my-2 flex gap-1 [backdrop-filter:blur(67.957px)] [background-blend-mode:overlay]">
                  <li tw="block w-5 h-5 rounded-full bg-[#242328]"></li>
                  <li tw="block w-5 h-5 rounded-full bg-[#E03737]"></li>
                  <li tw="block w-5 h-5 rounded-full bg-[#345AE0]"></li>
                  <li tw="block w-5 h-5 rounded-full bg-[#CC4478]"></li>
                  <li tw="block w-5 h-5 rounded-full bg-[#6B3711]"></li>
                </ul>
              </div>

              {/* Delivery a domicilio */}

              <button tw="border-[2px] items-center gap-5 rounded-full border-dark-violet bg-cornflower-blue py-1.5 px-5 sm:px-[55px] flex cursor-default col-span-4 max-w-[300px]">
                <div tw="w-9 flex-none h-9 grid place-content-center bg-dark-violet rounded-full text-snow-white">
                  <Domicilio size={18} />
                </div>
                <div tw="text-start leading-[20px]">
                  <strong>Despacho a envío</strong>
                  <span tw="text-dark-violet block">
                    {productDetail.attributes.envio_gratis
                      ? 'Disponible'
                      : 'No Disponible'}
                  </span>
                </div>
              </button>

              {/* <!-- Boton agregar al carrito --> */}
              <button
                tw="overflow-hidden  h-[38px] sm:h-[50px] w-full pl-7 pr-12 text-snow-white rounded-full bg-pink-raspberry relative col-span-4"
                className="group"
                onClick={() => addCart(productDetail.id, quantityState)}
              >
                Añadir al Carrito
                <div tw="bg-snow-white transition-[transform height] group-hover:scale-0 duration-500 rounded-full absolute top-[50%] translate-y-[-50%] right-0 grid place-content-center  w-[38px]  sm:w-[50px] h-[38px] group-hover:h-[34px] sm:h-[50px] sm:group-hover:h-[46px]">
                  <i tw="text-pink-raspberry transition duration-500 group-hover:rotate-[-45deg]">
                    <Carrito size={17} />
                  </i>
                </div>
                <div tw="group-hover:translate-x-[2px] translate-x-[100%] transition-[transform height] duration-500 left-0 bg-snow-white text-pink-raspberry rounded-full absolute top-[50%] translate-y-[-50%] grid place-content-center h-[38px] w-[calc(100% - 4px)] group-hover:h-[34px] sm:h-[50px] sm:group-hover:h-[46px]">
                  <div tw="flex gap-3.5 items-center ">
                    <i tw="text-pink-raspberry transition duration-500 group-hover:rotate-[-45deg]">
                      <Carrito size={17} />
                    </i>

                    <span>!Quiero este producto¡</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Descripcion y informacion adicional del producto */}
      <section tw="container">
        <div tw="xl:bg-cornflower-blue  xl:p-[21px]">
          <div tw="bg-[linear-gradient(134deg, #EFF6FF 0%, #C8D4FF 0.01%, #B3AAEE 98.10%)] p-[20px 13px] rounded-[23px] xl:p-[16px 27.41px  16px 14.04px] 2xl:p-[16px 41px 16px 21px] grid gap-[21px] xl:gap-x-[26.08px] xl:gap-y-[36px] xl:grid-cols-12 2xl:gap-x-[39px] 2xl:gap-y-[36px]">
            {/* Descripción */}
            {/* 2xl:max-w-[514px] */}
            <div tw="bg-baby-blue p-[20px 12px] rounded-[23px] flex flex-col gap-[12px] text-center max-w-[341px] mx-auto xl:text-start xl:col-span-4 xl:row-span-2 xl:mx-0 xl:p-[30px 41.71px 31px 42px] xl:max-w-[initial]">
              <div>
                <span tw="text-dark-violet">Descripción </span>
                <uiComps.H2 css={tw`text-pink-raspberry`}>
                  {productDetail.attributes.name}
                </uiComps.H2>
              </div>
              <p>{productDetail.attributes.descripcion}</p>
            </div>
            {/* Descripción Medidas */}
            <div tw="bg-baby-blue p-[10px 9px] rounded-[23px] w-full max-w-[341px] mx-auto flex text-center flex-col gap-[21px] xl:gap-[41px] xl:col-span-8 xl:mx-0 xl:flex-row  xl:p-[30px 26.08px 28.5px 42px] xl:max-w-[initial] xl:text-start 2xl:gap-[126px]">
              <div>
                <span tw="text-dark-violet">Descripción </span>
                <uiComps.H2 css={tw`text-pink-raspberry`}>Medidas</uiComps.H2>
                <p>y cantidades</p>
              </div>
              {/* Medidas */}
              <ul tw="grid grid-cols-2 gap-x-[11px] w-full gap-y-[21px] xl:grid-cols-3">
                <li tw="flex flex-col gap-[6px] rounded-[11px] bg-snow-white items-center p-[12px 0 13px 0]">
                  <span tw="text-pink-raspberry ">Altura</span>
                  <p>{productDetail.attributes.measures.height}cm</p>
                </li>
                <li tw="flex flex-col gap-[6px] rounded-[11px] bg-snow-white items-center p-[12px 0 13px 0]">
                  <span tw="text-pink-raspberry ">Anchura</span>
                  <p>{productDetail.attributes.measures.width}cm</p>
                </li>
                <li tw="flex flex-col gap-[6px] rounded-[11px] bg-snow-white items-center p-[12px 0 13px 0]">
                  <span tw="text-pink-raspberry ">Profundidad</span>
                  <p>{productDetail.attributes.measures.depth}cm</p>
                </li>

                <li tw="flex flex-col gap-[6px] rounded-[11px] bg-snow-white items-center p-[12px 0 13px 0]">
                  <span tw="text-pink-raspberry ">Peso</span>
                  <p>{productDetail.attributes.measures.weight}kg</p>
                </li>
                <li tw="flex flex-col gap-[6px] rounded-[11px] bg-snow-white items-center p-[12px 0 13px 0]">
                  <span tw="text-pink-raspberry ">Candado</span>
                  <p>{productDetail.attributes.measures.lock ? 'Si' : 'No'}</p>
                </li>
                <li tw="flex flex-col gap-[6px] rounded-[11px] bg-snow-white items-center p-[12px 0 13px 0]">
                  <span tw="text-pink-raspberry ">Bolsillos</span>
                  <p>{productDetail.attributes.measures.pockets}</p>
                </li>
              </ul>
            </div>
            {/* Información Adicional */}
            <div tw="bg-baby-blue pt-[10px] w-full rounded-[23px 23px 8px 8px] max-w-[341px] mx-auto flex text-center flex-col gap-[21px] xl:rounded-[23px] xl:col-span-8 xl:text-start xl:mx-0 xl:flex-row  xl:p-[0 0 0 42px] xl:max-w-[initial]">
              <div tw="xl:pt-[30px]">
                <span tw="text-dark-violet">Información</span>
                <uiComps.H2 css={tw`text-pink-raspberry`}>Adicional</uiComps.H2>
                <p>Sobre el Producto seleccionado</p>
              </div>
              {/* Lista de información adicional 
             
              */}
              <ul tw="grid xl:grid-cols-2 w-full rounded-[8px] xl:rounded-[0 23px 23px 0] overflow-hidden">
                <li tw="flex justify-between p-[7px 8px] bg-snow-white">
                  <span tw="text-dark-violet">Marca</span>
                  <p>{productDetail.attributes.additional.brand}</p>
                </li>
                <li tw="flex justify-between p-[7px 8px] bg-light-gray">
                  <span tw="text-dark-violet">Garantía</span>
                  <p>{productDetail.attributes.additional.warranty}</p>
                </li>

                <li tw="flex justify-between p-[7px 8px] bg-snow-white xl:bg-light-gray">
                  <span tw="text-dark-violet">Línea</span>
                  <p>{productDetail.attributes.additional.line}</p>
                </li>

                <li tw="flex justify-between p-[7px 8px] bg-light-gray xl:bg-snow-white">
                  <span tw="text-dark-violet">Modelo</span>
                  <p>{productDetail.attributes.additional.model}</p>
                </li>

                <li tw="flex justify-between p-[7px 8px] bg-snow-white">
                  <span tw="text-dark-violet">Tamaño</span>
                  <p>{productDetail.attributes.additional.size}</p>
                </li>
                <li tw="flex justify-between p-[7px 8px] bg-light-gray">
                  <span tw="text-dark-violet">Hipoalergénico</span>
                  <p>
                    {productDetail.attributes.additional.hypoallergenic
                      ? 'Sí'
                      : 'No'}
                  </p>
                </li>

                <li tw="flex justify-between p-[7px 8px] bg-snow-white xl:bg-light-gray">
                  <span tw="text-dark-violet">Cantidad Incluida</span>
                  <p>{productDetail.attributes.stock}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Productos relacionados */}
      <section tw="container">
        <div tw="xl:bg-cornflower-blue pb-[75px] xl:mb-[34px] 2xl:mb-[55px] xl:rounded-[0 0 23px 23px] xl:p-[21px 21px 50px 21px] 2xl:pb-[89px]">
          <header tw="[mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] my-4 py-5 bg-[url(/img/banner.webp)] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] bg-center bg-cover px-4 sm:px-7 flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center">
            <uiComps.H2 css={tw`text-snow-white`}>
              Productos <strong tw="text-aqua-blue">Relacionados</strong>
            </uiComps.H2>
            <Link href={`/${categorySlug}`}>
              <uiComps.Button css={tw`flex-none`}>
                Ver Todos los Productos
              </uiComps.Button>
            </Link>
          </header>
          {isLoading ? (
            <uiComps.BasicLoading />
          ) : (
            <uiComps.CardList
              showAs="swiper"
              products={productsRelated}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
                1536: {
                  slidesPerView: 6,
                },
              }}
              stylesTw={tw`max-w-[252px] mx-auto sm:max-w-[508px] md:max-w-[initial] md:mx-0`}
            >
              {' '}
              <uiComps.BtnPrev btnPrevStyle="secondary" size={22} />
              <uiComps.BtnNext btnNextStyle="secondary" size={22} />
            </uiComps.CardList>
          )}
        </div>
      </section>
    </BasicLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await productCtrl.getProductsSlugs()

  const productSlugs: string[] = data?.map(
    (slug: IProductData) => slug.attributes.slug,
  )

  return {
    paths: productSlugs?.map(slug => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { data } = await productCtrl.getProductBySlug(slug)

  const productDetail: IProductData[] = data

  if (productDetail.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      revalidate: 10,
    }
  }

  return {
    props: {
      productDetail: productDetail[0],
    },
    revalidate: 10,
  }
}
export default ProductPage
