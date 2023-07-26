import { IProductData } from '../../../interfaces'
import { Carrito, Domicilio, Heart } from '../Icons'
import * as uiComps from '../'
import tw from 'twin.macro'
import React, { useState } from 'react'
import { fn } from '../../../utils/functions'
import Link from 'next/link'

interface Props {
  showAs?: 'filter'
  product?: IProductData
  productId?: number | string
  inTheCart: boolean
  addCartWrapper: (quantity: number) => void
  quantity?: number
  increaseQuantity?: (productId: number) => void
  decreaseQuantity?: (productId: number) => void
}

export const Card = React.memo(
  ({
    product,
    showAs,
    productId,
    inTheCart,
    addCartWrapper,
    quantity,
    increaseQuantity,
    decreaseQuantity,
  }: Props) => {
    const [quantityState, setQuantityState] = useState(1)
    const modelText = product?.attributes.model.data.attributes.name
    const caracteresDeseados = 10

    const modelSubstring =
      modelText?.length! > caracteresDeseados
        ? modelText?.substring(0, caracteresDeseados) + '...'
        : modelText

    if (showAs === 'filter') {
      return (
        <div tw="relative max-w-[320px] mx-auto  bg-sky-blue grid [grid-template-columns: 1fr 1fr]  gap-4 [mask-border-slice:20 fill] [mask-border-source: url(/img/filter-card-mask.svg)] [mask-border-width: 20px] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/filter-card-mask.svg)] [-webkit-mask-box-image-width: 20px;] sm:mx-0 sm:max-w-[initial] sm:pr-4 sm:grid-cols-4 xl:[grid-template-columns: 1fr 1fr 220px 1fr 1fr 1fr] 2xl:[grid-template-columns: 1fr 210px 145px 185px 1fr] 2xl:gap-y-0">
          <div tw="col-span-2 relative sm:row-span-5 xl:row-span-3 2xl:col-span-1 2xl:(h-[228px]  row-span-2)">
            {/* <uiComps.OptimizedImage
              src="/img/tarjeta-producto.webp"
              width={400}
              height={400}
              stylesImg={tw`h-full`}
              alt="producto"
            /> */}
            <Link href={`/producto/${product?.attributes.slug}`}>
              <uiComps.OptimizedPicture
                srcMobile={
                  product?.attributes.cover?.data !== null
                    ? product?.attributes.cover?.data?.attributes.formats.small
                        .url!
                    : '/img/tarjeta-producto.webp'
                }
                typeSrc="external"
                srcTablet={
                  product?.attributes.cover?.data !== null
                    ? product?.attributes.cover?.data?.attributes.formats.medium
                        .url!
                    : '/img/tarjeta-producto.webp'
                }
                srcDesktop={
                  product?.attributes.cover?.data !== null
                    ? product?.attributes.cover?.data?.attributes.url!
                    : '/img/tarjeta-producto.webp'
                }
                alt={product?.attributes.name!}
                width={product?.attributes.cover?.data?.attributes.width ?? 500}
                height={
                  product?.attributes.cover?.data?.attributes.height ?? 500
                }
              />
            </Link>
            <span tw="absolute bg-dark-purple top-5 text-[13px] rounded-[0 3px 3px 0] text-white p-1 font-medium">
              {product?.attributes.model.data.attributes.name}
            </span>
          </div>
          {/* Titulo generico y valoración */}
          <div tw="pt-4 pl-2 sm:pl-0">
            <strong tw="text-[19px]">{product?.attributes.name}</strong>
            <span tw="block">Genérico</span>
            <img tw="w-[7rem]" src="/img/valoracion.svg" alt="valoración" />
          </div>
          {/* Añadir a Favoritos */}
          <div tw="flex flex-col gap-3 items-end pr-2 sm:pr-0 sm:self-end xl:col-[6/7] xl:self-start">
            <strong tw="text-[13px]">Añadir a Favoritos</strong>
            <Heart tw="text-pink-raspberry cursor-pointer" />
          </div>
          {/* Colores disponibles */}
          <div tw="pl-2 sm:pl-0 xl:col-[4/6] xl:row-[2] 2xl:row-[1] 2xl:pt-4 2xl:col-[4/5]">
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
          {/* Precio de Descuento */}

          <div tw="flex flex-col gap-2 justify-self-end pr-2 sm:pr-0  xl:col-[5/7] xl:row-[3] xl:pb-[40px] 2xl:col-[3/4] 2xl:row-[1] 2xl:justify-self-start 2xl:pb-0 2xl:pt-4">
            {product?.attributes.discount === 0 ? (
              ''
            ) : (
              <>
                <strong tw="font-semibold">Descuento</strong>
                <span tw="font-bold text-snow-white rounded-[7px] block py-1.5 px-3 text-xl w-fit bg-intense-pink">
                  -{product?.attributes.discount}%
                </span>
              </>
            )}
          </div>
          {/* Agregar cantidad */}
          <div tw="pl-2 sm:pl-0 xl:col-[3/4] xl:row-[2] xl:self-center 2xl:col-[4/5] 2xl:pb-4 2xl:self-end ">
            <strong>Agregar Cantidad</strong>
            <div tw="flex gap-4 items-center">
              <button
                tw="bg-pink-raspberry w-7 h-7 text-snow-white font-bold rounded-[7px] flex-none"
                onClick={() => {
                  if (quantityState <= 1 && !inTheCart) {
                    return
                  }
                  if (inTheCart && decreaseQuantity) {
                    decreaseQuantity(+productId!)
                  } else {
                    setQuantityState(quantityState - 1)
                  }
                }}
              >
                -
              </button>
              <span tw="bg-snow-white block py-2 px-6 rounded-[7px]">
                {quantity ? quantity : quantityState}
              </span>{' '}
              <button
                tw="bg-pink-raspberry w-7 h-7 text-snow-white font-bold rounded-[7px] flex-none"
                onClick={() => {
                  if (inTheCart && increaseQuantity) {
                    increaseQuantity(+productId!)
                  } else {
                    setQuantityState(quantityState + 1)
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          {/* Precio de anterior */}
          <div tw="flex flex-col gap-2 justify-self-end pr-2 sm:pr-0  xl:col-[4/6] xl:justify-self-start xl:row-[3] 2xl:col-[3/4] 2xl:row-[2] 2xl:pb-4">
            {product?.attributes.discount === 0 ? (
              ''
            ) : (
              <>
                <strong tw="font-semibold">Precio Anterior</strong>
                <span tw="text-snow-white rounded-[8px] bg-dark-purple  py-1 px-3 font-bold block w-fit">
                  Antes
                  <p tw="text-aqua-blue line-through">
                    s/ {product?.attributes.price}
                  </p>
                </span>
              </>
            )}
          </div>
          {/* Precio actual, boton carrito*/}
          <div tw="col-span-2 flex justify-center pb-5 sm:pb-10 xl:col-[3/4] xl:flex xl:flex-col gap-2 xl:pb-0 2xl:(col-[2/3] row-[2]) 2xl:pb-4">
            <strong tw="hidden xl:block">Precio Actual</strong>
            {inTheCart ? (
              <button
                tw="overflow-hidden border-[2px] border-aqua-blue py-2 w-full pl-7 pr-12 text-charcoal rounded-full relative max-w-[220px]"
                className="group"
                onClick={() => alert('Ya agregaste este producto al carrito')}
              >
                s/{' '}
                {fn.calcDiscountedPrice(
                  product?.attributes.price!,
                  product?.attributes.discount!,
                )}
                <div tw="translate-x-0 absolute top-1/2 transform -translate-y-1/2 right-0 rounded-full bg-aqua-blue w-[98%] h-[36px] mr-[2px] transition-[width_height_margin-right] duration-500 flex items-center">
                  <div tw="flex gap-3.5 text-charcoal text-[13px] font-semibold  transition duration-500 translate-x-[50%]">
                    <i tw="flex-none transition duration-500">
                      <Carrito size={17} />
                    </i>
                    <span> En el Carrito </span>
                  </div>
                </div>
              </button>
            ) : (
              <button
                tw="overflow-hidden border-[2px] border-berry-crush py-2 w-full pl-7 pr-12 text-berry-crush rounded-full relative max-w-[220px]"
                css={
                  product?.attributes.discount === 0
                    ? tw`xl:mb-[20px] 2xl:mb-0`
                    : ''
                }
                className="group"
                onClick={() => addCartWrapper(quantityState)}
              >
                s/{' '}
                {fn.calcDiscountedPrice(
                  product?.attributes.price!,
                  product?.attributes.discount!,
                )}
                <div tw="translate-x-[79%] group-hover:translate-x-0 absolute top-1/2 transform -translate-y-1/2 right-0 w-full rounded-full h-[44px] bg-berry-crush group-hover:w-[98%] group-hover:h-[36px] group-hover:mr-[2px] transition-[width_height_margin-right] duration-500 flex items-center">
                  <div tw="flex gap-3.5 text-snow-white text-[13px] translate-x-[12%] transition duration-500 group-hover:translate-x-[33%]">
                    <i tw="flex-none transition duration-500 group-hover:rotate-[-45deg]">
                      <Carrito size={17} />
                    </i>
                    <span> Añadir al carrito </span>
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* Delivery a domicilio */}
          <button tw="hidden items-center gap-5 border-dark-violet bg-cornflower-blue border-[2px]  rounded-full py-1.5 px-7 w-full sm:flex  sm:col-[3/5] sm:row-[1] sm:mt-4 xl:col-[4/7] h-fit 2xl:col-[5/7]">
            <div tw="w-9 flex-none h-9 grid place-content-center bg-dark-violet rounded-full text-snow-white">
              <Domicilio size={18} />
            </div>
            <div>
              <strong>Delivery a Domicilio</strong>
              <Link
                href={`/producto/${product?.attributes.slug}`}
                tw="text-dark-violet block"
              >
                Ver más Detalles
              </Link>
            </div>
          </button>

          {/* Detalle producto */}
          <Link
            tw="hidden justify-end  xl:(block absolute bottom-0 right-4 pb-[10px]) 2xl:pb-4"
            href={`/producto/${product?.attributes.slug}`}
          >
            Ver Detalle de Producto
          </Link>
        </div>
      )
    }

    return (
      <div tw="[mask-border-slice:20 fill] [mask-border-source:url(/img/tarjeta-producto-mask.svg)] [mask-border-width:20px] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/tarjeta-producto-mask.svg)] [-webkit-mask-box-image-width: 20px;] ">
        {/* mx-auto max-w-[252px] sm:mx-0 sm:max-w-[initial] */}
        {/* <!-- Imagen y todo lo que lleva --> */}
        <div tw="relative overflow-hidden" className="group">
          {/* <img src="/img/tarjeta-producto.webp" alt="" /> */}
          <uiComps.OptimizedPicture
            srcMobile={
              product?.attributes.cover?.data !== null
                ? product?.attributes.cover?.data?.attributes.formats.small.url!
                : '/img/tarjeta-producto.webp'
            }
            typeSrc="external"
            srcTablet={
              product?.attributes.cover?.data !== null
                ? product?.attributes.cover?.data?.attributes.formats.medium
                    .url!
                : '/img/tarjeta-producto.webp'
            }
            srcDesktop={
              product?.attributes.cover?.data !== null
                ? product?.attributes.cover?.data?.attributes.url!
                : '/img/tarjeta-producto.webp'
            }
            alt={product?.attributes.name!}
            width={product?.attributes.cover?.data?.attributes.width ?? 500}
            height={product?.attributes.cover?.data?.attributes.height ?? 500}
            stylesImg={tw`h-[198.44px]`}
          />
          {/* <!-- categoria --> */}
          <span tw="bg-dark-purple font-semibold text-snow-white rounded-[0_5px_5px_0] py-1 px-3 absolute top-2 group-hover:text-[12px] transition-[font-size] duration-500">
            {modelSubstring}
          </span>
          {/* <!-- Descuento --> */}
          {product?.attributes.discount === 0 ? (
            ''
          ) : (
            <span tw="rounded-[7px_0_0_7px] bg-intense-pink text-snow-white font-bold py-1.5 px-3 text-2xl absolute top-[0px] right-0">
              -{product?.attributes.discount}%
            </span>
          )}

          {/* <!-- Precio de antes --> */}
          {product?.attributes.discount === 0 ? (
            ''
          ) : (
            <span tw="text-snow-white rounded-[8px_0_0_8px] bg-dark-purple block absolute py-1 px-3 font-bold top-[3rem] right-0 group-hover:opacity-0 transition duration-500">
              Antes
              <p tw="text-aqua-blue line-through">
                s/ {product?.attributes.price}
              </p>
            </span>
          )}

          {/* <!-- Fondo al hacer hover se mostrara el boton para ir al detalle del producto --> */}
          <div tw="absolute inset-0 flex items-end justify-center bg-[linear-gradient(180deg,rgba(86,96,175,0)_35.73%,rgba(34,40,80,0.7)_89.37%)] translate-y-[100%] group-hover:translate-y-0 transition duration-500">
            <Link
              href={`/producto/${product?.attributes.slug}`}
              tw="text-snow-white bg-pink-raspberry py-1.5 rounded-full px-4 mb-3 hover:bg-pink-raspberry/90"
            >
              Ver Producto
            </Link>
          </div>
        </div>
        {/* <!-- Card Body --> */}
        <div tw="bg-sky-blue pt-5 px-4 pb-3 h-full">
          <strong tw="text-charcoal text-xl h-[52px] block">
            {product?.attributes.name}
          </strong>
          {/* <!-- Tipo y favoritos --> */}
          <div tw="text-dark-charcoa flex justify-between">
            <div>
              <span tw="font-normal">Genérico</span>
              <img tw="mt-2" src="/img/valoracion.svg" alt="Valoración" />
            </div>
            <div>
              <span tw="font-bold text-[14px]">Añadir a Favoritos</span>
              <Heart size={20} tw="ml-auto text-pink-raspberry" />
            </div>
          </div>
          {/* <!-- Colores --> */}
          <ul tw="border-[1px] border-cornflower-blue rounded-full py-2 px-3 bg-black/10 w-fit my-2 flex gap-1 [backdrop-filter:blur(67.957px)] [background-blend-mode:overlay]">
            <li tw="block w-5 h-5 rounded-full bg-[#242328]"></li>
            <li tw="block w-5 h-5 rounded-full bg-[#E03737]"></li>
            <li tw="block w-5 h-5 rounded-full bg-[#345AE0]"></li>
            <li tw="block w-5 h-5 rounded-full bg-[#CC4478]"></li>
            <li tw="block w-5 h-5 rounded-full bg-[#6B3711]"></li>
          </ul>
          {/* <!-- Boton agregar al carrito --> */}
          {inTheCart ? (
            <button
              tw="overflow-hidden border-[2px] border-aqua-blue py-2 w-full pl-7 pr-12 text-charcoal rounded-full relative"
              className="group"
              onClick={() => alert('Ya agregaste este producto al carrito')}
            >
              s/{' '}
              {fn.calcDiscountedPrice(
                product?.attributes.price!,
                product?.attributes.discount!,
              )}
              <div tw="translate-x-0 absolute top-1/2 transform -translate-y-1/2 right-0 rounded-full bg-aqua-blue w-[98%] h-[36px] mr-[2px] transition-[width_height_margin-right] duration-500 flex items-center">
                <div tw="flex gap-3.5 text-charcoal text-[13px] font-semibold  transition duration-500 translate-x-[50%]">
                  <i tw="flex-none transition duration-500">
                    <Carrito size={17} />
                  </i>
                  <span> En el Carrito </span>
                </div>
              </div>
            </button>
          ) : (
            <button
              tw="overflow-hidden border-[2px] border-berry-crush py-2 w-full pl-7 pr-12 text-berry-crush rounded-full relative"
              className="group"
              onClick={() => addCartWrapper(1)}
            >
              s/{' '}
              {fn.calcDiscountedPrice(
                product?.attributes.price!,
                product?.attributes.discount!,
              )}
              <div tw="translate-x-[79%] group-hover:translate-x-0 absolute top-1/2 transform -translate-y-1/2 right-0 w-full rounded-full h-[44px] bg-berry-crush group-hover:w-[98%] group-hover:h-[36px] group-hover:mr-[2px] transition-[width_height_margin-right] duration-500 flex items-center">
                <div tw="flex gap-3.5 text-snow-white text-[13px] translate-x-[12%] transition duration-500 group-hover:translate-x-[33%]">
                  <i tw="flex-none transition duration-500 group-hover:rotate-[-45deg]">
                    <Carrito size={17} />
                  </i>
                  <span> Añadir al carrito </span>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    )
  },
)
