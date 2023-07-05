import { IProductData } from '../../../interfaces'
import { Carrito, Domicilio, Heart } from '../Icons'
import * as uiComps from '../'
import tw from 'twin.macro'

interface Props {
  showAs?: 'filter'
  product?: IProductData
}
export const Card = ({ product, showAs }: Props) => {
  if (showAs === 'filter') {
    return (
      <div tw="relative max-w-[320px] mx-auto  bg-sky-blue grid [grid-template-columns: 1fr 1fr]  gap-4 [mask-border-slice:20 fill] [mask-border-source: url(/img/filter-card-mask.svg)] [mask-border-width: 20px] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/filter-card-mask.svg)] [-webkit-mask-box-image-width: 20px;] sm:mx-0 sm:max-w-[initial] sm:pr-4 sm:grid-cols-4 xl:[grid-template-columns: 1fr 1fr 190px 1fr 1fr 1fr] 2xl:[grid-template-columns: 1fr 210px 145px 185px 1fr] 2xl:gap-y-0">
        <figure tw="col-span-2 relative sm:row-span-5 xl:row-span-3 2xl:col-span-1 2xl:(h-[228px]  row-span-2)">
          <uiComps.OptimizedImage
            src="/img/tarjeta-producto.webp"
            width={400}
            height={400}
            stylesImg={tw`h-full`}
            alt="producto"
          />
          <span tw="absolute bg-dark-purple top-5 text-[13px] rounded-[0 3px 3px 0] text-white p-1 font-medium">
            {product?.attributes.model.data.attributes.name}
          </span>
        </figure>
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
          <strong tw="font-semibold">Descuento</strong>
          <span tw="font-bold text-snow-white rounded-[7px] block py-1.5 px-3 text-xl w-fit bg-intense-pink">
            -99%
          </span>
        </div>
        {/* Agregar cantidad */}
        <div tw="pl-2 sm:pl-0 xl:col-[3/4] xl:row-[2] xl:self-center 2xl:col-[4/5] 2xl:pb-4 2xl:self-end ">
          <strong>Agregar Cantidad</strong>
          <div tw="flex gap-4 items-center">
            <button tw="bg-pink-raspberry w-7 h-7 text-snow-white font-bold rounded-[7px]">
              -
            </button>
            <span tw="bg-snow-white block py-2 px-6 rounded-[7px]">1</span>{' '}
            <button tw="bg-pink-raspberry w-7 h-7 text-snow-white font-bold rounded-[7px]">
              +
            </button>
          </div>
        </div>
        {/* Precio de anterior */}
        <div tw="flex flex-col gap-2 justify-self-end pr-2 sm:pr-0  xl:col-[4/6] xl:justify-self-start xl:row-[3] 2xl:col-[3/4] 2xl:row-[2] 2xl:pb-4">
          <strong tw="font-semibold">Precio Anterior</strong>
          <span tw="text-snow-white rounded-[8px] bg-dark-purple  py-1 px-3 font-bold block w-fit">
            Antes
            <p tw="text-aqua-blue line-through">s/ 9999.99</p>
          </span>
        </div>
        {/* Precio actual, boton carrito */}
        <div tw="col-span-2 flex justify-center pb-5 sm:pb-10 xl:col-[3/4] xl:flex xl:flex-col gap-2 xl:pb-0 2xl:(col-[2/3] row-[2]) 2xl:pb-4">
          <strong tw="hidden xl:block">Precio Actual</strong>
          <button
            tw="overflow-hidden border-[2px] border-[#B43566] py-2 w-full pl-7 pr-12 text-[#B43566] rounded-full relative max-w-[190px] "
            className="group"
          >
            s/ {product?.attributes.price}
            <div tw="translate-x-[75%] group-hover:translate-x-0 absolute top-1/2 transform -translate-y-1/2 right-0 w-full rounded-full h-[44px] bg-[#B43566] group-hover:w-[98%] group-hover:h-[36px] group-hover:mr-[2px] transition-[width_height_margin-right] duration-500 flex items-center">
              <div tw="flex gap-3.5 text-white text-[13px] translate-x-[12%] transition duration-500 group-hover:translate-x-[23%]">
                <div tw="transition duration-500 group-hover:rotate-[-45deg]">
                  <Carrito size={18} />
                </div>
                <span> Añadir al carrito </span>
              </div>
            </div>
          </button>
        </div>

        {/* Delivery a domicilio */}
        <button tw="hidden border-[2px] items-center gap-5  rounded-full border-dark-violet bg-cornflower-blue py-1.5 px-7 w-full sm:flex  sm:col-[3/5] sm:row-[1] sm:mt-4 xl:col-[4/7] h-fit 2xl:col-[5/7]">
          <div tw="w-9 flex-none h-9 grid place-content-center bg-dark-violet rounded-full text-snow-white">
            <Domicilio size={18} />
          </div>
          <div>
            <strong>Delivery a Domicilio</strong>
            <span tw="text-dark-violet block">Ver más Detalles</span>
          </div>
        </button>

        {/* Detalle producto */}
        <button tw="hidden justify-end  xl:(block absolute bottom-0 right-4 pb-[10px]) 2xl:pb-4">
          Ver Detalle de Producto
        </button>
      </div>
    )
  }
  return (
    <div tw="[mask-border-slice:20 fill] [mask-border-source:url(/img/tarjeta-producto-mask.svg)] [mask-border-width:20px] [-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/tarjeta-producto-mask.svg)] [-webkit-mask-box-image-width: 20px;] ">
      {/* mx-auto max-w-[252px] sm:mx-0 sm:max-w-[initial] */}
      {/* <!-- Imagen y todo lo que lleva --> */}
      <div tw="relative overflow-hidden" className="group">
        <img src="/img/tarjeta-producto.webp" alt="Producto" />
        {/* <!-- categoria --> */}
        <span tw="bg-dark-purple font-semibold text-snow-white rounded-[0_5px_5px_0] py-1 px-3 absolute top-2 group-hover:text-[12px] transition-[font-size] duration-500">
          Mochilas
        </span>
        {/* <!-- Descuento --> */}
        <span tw="rounded-[7px_0_0_7px] bg-intense-pink text-snow-white font-bold py-1.5 px-3 text-2xl absolute top-[0px] right-0">
          -99%
        </span>
        {/* <!-- Precio de antes --> */}
        <span tw="text-snow-white rounded-[8px_0_0_8px] bg-dark-purple block absolute py-1 px-3 font-bold top-[3rem] right-0 group-hover:opacity-0 transition duration-500">
          Antes
          <p tw="text-aqua-blue line-through">s/ 9999.99</p>
        </span>
        {/* <!-- Fondo al hacer hover se mostrara el boton para ir al detalle del producto --> */}
        <div tw="absolute inset-0 flex items-end justify-center bg-[linear-gradient(180deg,rgba(86,96,175,0)_35.73%,rgba(34,40,80,0.7)_89.37%)] translate-y-[100%] group-hover:translate-y-0 transition duration-500">
          <a
            href="#"
            tw="text-snow-white bg-pink-raspberry py-1.5 rounded-full px-4 mb-3 hover:bg-pink-raspberry/90"
          >
            Ver Producto
          </a>
        </div>
      </div>
      {/* <!-- Card Body --> */}
      <div tw="bg-sky-blue pt-5 px-4 pb-3">
        <strong tw="text-charcoal text-xl">Mochila Kuromi</strong>
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
        <button
          tw="overflow-hidden border-[2px] border-berry-crush py-2 w-full pl-7 pr-12 text-berry-crush rounded-full relative"
          className="group"
        >
          s/ 9999.99
          <div tw="translate-x-[79%] group-hover:translate-x-0 absolute top-1/2 transform -translate-y-1/2 right-0 w-full rounded-full h-[44px] bg-berry-crush group-hover:w-[98%] group-hover:h-[36px] group-hover:mr-[2px] transition-[width_height_margin-right] duration-500 flex items-center">
            <div tw="flex gap-3.5 text-snow-white text-[13px] translate-x-[12%] transition duration-500 group-hover:translate-x-[33%]">
              <i tw="flex-none transition duration-500 group-hover:rotate-[-45deg]">
                <Carrito size={17} />
              </i>
              <span> Añadir al carrito </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
