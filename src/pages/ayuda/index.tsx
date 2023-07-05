import tw from 'twin.macro'
import { BasicLayout } from '../../components/layouts'
import * as uiComps from '../../components/ui'
import {
  Facebook,
  Instagram,
  Linkedin,
  Tiktok,
  Whatsapp,
} from '../../components/ui/Icons'
import { source_code_pro } from '../../utils'
const AyudaPage = () => {
  return (
    <BasicLayout title="Ayuda">
      {/* <!-- Sección Hero --> */}
      <section tw="bg-cover pt-[4rem] pb-[10rem] bg-no-repeat bg-[url(/img/ayuda/desktop/hero-ayuda.webp)] md:pt-[12rem] md:pb-[21rem] xl:py-[15rem]">
        <div tw="container text-snow-white flex flex-col gap-4 text-center items-center">
          <div>
            <span
              tw="text-aqua-blue font-bold "
              className={source_code_pro.className}
            >
              Ayuda y Atención al Consumidor
            </span>
            <h1 tw="text-[45px] font-bold break-all">Kamelia.Shopee</h1>
          </div>
          <p tw="max-w-[640px]">
            Nos aseguramos de que tengas una buena expencia al momento de tus
            compras, debido a ello te mostramos las preguntas más frecuentes que
            se pueden hacer las personas al momento de que requieran hacer una
            compra dentro de este sitio web.
          </p>
          <uiComps.Button css={tw`mt-20 md:mt-0`}>Conócenos más</uiComps.Button>
        </div>
      </section>
      {/* <!-- Sección contacto --> */}
      <section tw="bg-dark-violet py-4 text-snow-white  text-center my-4">
        Contactanos o Escríbenos <strong>para cualquier consulta</strong>
        <a href="tel:+51999999999">
          (+51) <strong>999 999 999</strong>{' '}
        </a>
      </section>
      {/* <!-- Sección Info --> */}
      <section tw="container grid lg:[grid-template-columns:24rem_1fr] gap-6">
        <div>
          {/* <!-- Preguntas Redes sociales --> */}
          <div tw="bg-[linear-gradient(270deg,#CC4478_0%,#8831CC_100%);] rounded-[40px] text-snow-white py-8 px-4 sm:px-12">
            <p tw="max-w-[253px] mx-auto lg:mx-0">
              <strong>Preguntanos</strong> Directamente
              <strong>a</strong> nuestras <strong>Redes Sociales</strong> por
              nuestro
              <strong>Mensaje Directo</strong>
            </p>
            {/* <!-- Redes sociales --> */}
            <ul tw="flex gap-2 mt-4 flex-wrap justify-center lg:justify-start text-pink-raspberry">
              <li>
                <a
                  href="#"
                  tw="w-9 h-9 rounded-[7px] bg-white grid place-content-center"
                >
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  tw="w-9 h-9 rounded-[7px] bg-white grid place-content-center"
                >
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  tw="w-9 h-9 rounded-[7px] bg-white grid place-content-center"
                >
                  <Tiktok size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  tw="w-9 h-9 rounded-[7px] bg-white grid place-content-center"
                >
                  <Linkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  tw="w-9 h-9 rounded-[7px] bg-white grid place-content-center"
                >
                  <Whatsapp size={20} />
                </a>
              </li>
            </ul>
          </div>
          <div tw="mt-[8rem] bg-cover bg-no-repeat bg-[url(/img/ayuda/desktop/faq.webp)] text-snow-white flex-col gap-1 py-8 px-4 sm:px-12 rounded-[40px] relative hidden lg:flex">
            {/* <!-- Nota --> */}
            <div tw="text-[#545454] left-3 py-2 px-4 leading-[18px] right-3 absolute top-[-5.7rem] rounded-[7px] bg-[#E0BBE6]">
              Al <strong>usar el botón </strong> de Whatsapp te redirigiremos a
              un <strong> chat directo</strong> para que podamos
              <strong>ayudarte</strong> a resolver tus dudas en
              <strong>Kamelia.Shopee</strong>
            </div>
            <span>Conóce nuestras</span>
            <uiComps.H2 css={tw`text-[35px] leading-[30px]`}>
              Preguntas Frecuentes
            </uiComps.H2>
            <p>
              Al momento de hacer todo tipo de interacción
              <strong> con nuestro sitio web</strong>
            </p>
            <p tw="mt-2">
              Kamelia Shopee te brindan unas
              <strong> preguntas y respuestas frecuentes</strong>
              que los usuarios se podrían tener. <br />
              Si tienes algun otro tipo de duda o consulta puedes
              <strong> llamarnos o escribirnos vía whatsapp</strong> para tener
              un contacto más eficiente. ¡Gracias por Elegirnos!
            </p>

            <button tw="rounded-full bg-[#5CE862] hover:bg-[#70ec76] text-black py-3 px-7 mt-5 flex gap-2 items-center justify-center">
              Ir a Whatsapp
              <Whatsapp size={20} />
            </button>
          </div>
        </div>
        {/* <!-- Pasos enumerados --> */}
        <div>
          {/* <!-- Paso 1 --> */}
          <div>
            <div tw="[-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] [mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] py-8 bg-[url(/img/banner.webp)] bg-center bg-cover px-4 sm:px-12">
              <uiComps.H2 css={tw`text-xl text-snow-white`}>
                1. ¿Cómo puedo comprar productos en Kamelia.Shopee?
              </uiComps.H2>
            </div>
            <p tw="bg-cornflower-blue rounded-[40px_40px_38px_38px] pt-[7rem] px-10 sm:px-20 pb-[3rem] translate-y-[-5rem] z-[-1] relative">
              Para comprar productos en nuestra tienda virtual, simplemente
              debes buscar el producto que te interesa, agregarlo a tu carrito
              de compras y completar el proceso de pago siguiendo las
              instrucciones en pantalla.
            </p>
          </div>
          {/* <!-- Paso 2 --> */}
          <div tw="translate-y-[-3.5rem]">
            <div tw="[-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] [mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] py-8 bg-[url(/img/banner.webp)] bg-center bg-cover px-4 sm:px-12">
              <uiComps.H2 css={tw`text-xl text-snow-white`}>
                2. ¿Cómo puedo estar seguro de que los productos que venden son
                auténticos?
              </uiComps.H2>
            </div>
            <p tw="bg-[#99A2EA] rounded-[40px_40px_38px_38px] pt-[7rem] px-10 sm:px-20 pb-[3rem] translate-y-[-5rem] z-[-1] relative">
              Todos nuestros productos son auténticos y de alta calidad.
              Trabajamos directamente con proveedores confiables en Corea del
              Sur para ofrecer a nuestros clientes productos genuinos y de la
              mejor calidad.
            </p>
          </div>

          {/* <!-- Paso 3 --> */}

          <div tw="translate-y-[-6.5rem]">
            <div tw="[-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] [mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] py-8 bg-[url(/img/banner.webp)] bg-center bg-cover px-4 sm:px-12">
              <uiComps.H2 css={tw`text-xl text-snow-white`}>
                3. ¿Cuánto tiempo tarda en llegar mi pedido?
              </uiComps.H2>
            </div>
            <p tw="bg-cornflower-blue rounded-[40px_40px_38px_38px] pt-[7rem] px-10 sm:px-20 pb-[3rem] translate-y-[-5rem] z-[-1] relative">
              El tiempo de entrega depende del lugar donde te encuentres. En
              general, el tiempo de entrega para pedidos nacionales es de 3 a 5
              días hábiles, mientras que los pedidos internacionales pueden
              tardar de 7 a 21 días hábiles, dependiendo del destino.
            </p>
          </div>

          {/* <!-- Paso 4 --> */}

          <div tw="translate-y-[-9.5rem]">
            <div tw="[-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] [mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] py-8 bg-[url(/img/banner.webp)] bg-center bg-cover px-4 sm:px-12">
              <uiComps.H2 css={tw`text-xl text-snow-white`}>
                4. ¿Qué métodos de pago aceptan?
              </uiComps.H2>
            </div>
            <p tw="bg-cornflower-blue rounded-[40px_40px_38px_38px] pt-[7rem] px-10 sm:px-20 pb-[3rem] translate-y-[-5rem] z-[-1] relative">
              Aceptamos diferentes métodos de pago, como Visa/MasterCard
              ,Pagoefectivo, MercadoPago, Yape, PLIN, Contraentrega (Sólo
              <strong>Lima y Callao )</strong>
            </p>
          </div>

          {/* <!-- Paso 5 --> */}

          <div tw="translate-y-[-12.5rem]">
            <div tw="[-webkit-mask-box-image-slice:20 fill] [-webkit-mask-box-image-source: url(/img/banner-mask.svg)] [-webkit-mask-box-image-width: 20px;] [mask-border-slice:20_fill] [mask-border-source:url(/img/banner-mask.svg)] [mask-border-width:20px] py-8 bg-[url(/img/banner.webp)] bg-center bg-cover px-4 sm:px-12">
              <uiComps.H2 css={tw`text-xl text-snow-white`}>
                5. ¿Qué pasa si recibo un producto dañado o incorrecto?
              </uiComps.H2>
            </div>
            <p tw="bg-cornflower-blue rounded-[40px_40px_38px_38px] pt-[7rem] px-10 sm:px-20 pb-[3rem] translate-y-[-5rem] z-[-1] relative">
              Si recibes un producto dañado o incorrecto, por favor contáctanos
              lo antes posible para que podamos resolver el problema. Nos
              esforzamos por ofrecer un excelente servicio al cliente y
              trabajaremos contigo para encontrar una solución satisfactoria.
              Espero que esto sea de ayuda para ti y para tus usuarios.
            </p>
          </div>
        </div>
      </section>
    </BasicLayout>
  )
}

export default AyudaPage
