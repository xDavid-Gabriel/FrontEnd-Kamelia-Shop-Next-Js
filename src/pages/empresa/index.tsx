import tw from 'twin.macro'
import { BasicLayout } from '../../components/layouts'
import * as uiComps from '../../components/ui'
import { source_code_pro } from '../../utils'
import { Asegurada, Domicilio, Relampago } from '../../components/ui/Icons'

const EmpresaPage = () => {
  return (
    <BasicLayout title="Empresa">
      {/* <!-- Hero --> */}
      <section tw="bg-cover pt-12 pb-32 bg-no-repeat bg-[url(/img/empresas/desktop/hero-empresas.webp)]">
        <div tw="container">
          <div tw="text-snow-white text-center max-w-[606px] mx-auto">
            <span tw="font-bold" className={source_code_pro.className}>
              Nosotros Somos
            </span>
            <uiComps.H1 css={tw` text-aqua-blue break-all`}>
              Kamelia.Shopee
            </uiComps.H1>
            <span tw="mb-3 block">
              Nuestro Nuevo <strong>e-commerce</strong>
            </span>
            <p>
              Bienvenidxs a <strong> nuestra tienda virtual</strong> de
              <strong>productos coreanos</strong>, donde podrás encontrar las
              últimas tendencias en moda de
              <strong>Corea del Sur.</strong> En nuestra tienda,
              <strong>ofrecemos</strong>
              una amplia variedad de
              <strong>Objetos, Útiles, Accesorios y más,</strong> para que
              puedas tener el mood perfecto para cada ocasión.
            </p>

            <div tw="flex flex-col items-center gap-5 justify-center mt-10 sm:flex-row">
              <uiComps.Button>Conócenos más</uiComps.Button>
              <uiComps.Button variant="secondary">
                Explorar Destacados
              </uiComps.Button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sección contacto --> */}
      <section tw="bg-dark-violet py-4 text-snow-white text-center my-4">
        Contactanos o Escríbenos <strong>para cualquier consulta</strong>
        <a href="tel:+51999999999">
          (+51) <strong>999 999 999</strong>{' '}
        </a>
      </section>

      {/* <!-- Sección de Marcas --> */}
      <section tw="relative before:absolute before:w-[30%] before:z-[-1] before:h-full lg:before:bg-dark-purple before:left-0 after:absolute after:w-[30%] after:z-[-1] after:h-full lg:after:bg-dark-purple after:top-0 after:right-0">
        <div tw="px-4 grid lg:grid-cols-2 gap-4 lg:container">
          <div tw="text-snow-white flex flex-col rounded-[7px] justify-center bg-dark-purple py-7 px-4 items-center text-center lg:rounded-[0px_7px_7px_0px] lg:text-start lg:items-start lg:pl-0 lg:pr-10">
            <uiComps.H2 css={tw`text-[37px]`}>História de Marca</uiComps.H2>
            <p tw="max-w-[540px]">
              <strong>Kamelia.Shopee es una marca coreana de productos</strong>
              que se enfoca en ofrecer a sus clientes una amplia variedad de
              <strong>
                mochilas, accesorios, vestimentas y útiles de alta calidad y a
                precios accesibles.
              </strong>
              La marca se inspira en la
              <strong>belleza de la naturaleza y la cultura coreana</strong>
              para crear diseños únicos y elegantes que reflejan la esencia de
              la marca.
            </p>
          </div>

          <div tw="bg-dark-purple pt-4 pb-6 px-4 rounded-[7px] lg:rounded-[7px_0px_0px_7px] lg:py-4">
            <uiComps.H3 css={tw`text-snow-white text-center mb-5 lg:hidden`}>
              Te presentamos
            </uiComps.H3>
            <div tw="grid grid-cols-2 gap-3 grid-rows-4 max-w-[400px] h-[534px] mx-auto lg:grid-cols-4 lg:grid-rows-2 lg:mx-0 lg:max-w-[initial] lg:h-auto">
              <div tw="text-center row-span-2 lg:flex lg:flex-col lg:gap-3">
                <uiComps.H3 css={tw`text-snow-white hidden lg:block`}>
                  Te presentamos
                </uiComps.H3>
                <div tw="relative h-full">
                  <uiComps.OptimizedImage
                    width={300}
                    height={300}
                    stylesImg={tw`rounded-[25px] h-full`}
                    src="/img/empresas/desktop/utiles.webp"
                    alt="Utiles"
                  />
                  <span tw="absolute text-snow-white bottom-4 left-[10px] xl:left-[20px] font-semibold">
                    Útiles
                  </span>
                </div>
              </div>
              <div tw="relative row-span-2">
                <uiComps.OptimizedImage
                  width={300}
                  height={300}
                  stylesImg={tw`rounded-[25px] h-full`}
                  src="/img/empresas/desktop/vestimenta.webp"
                  alt="Utiles"
                />
                <span tw="absolute text-snow-white bottom-4 left-[10px] xl:left-[20px] font-semibold">
                  Vestimentas
                </span>
              </div>
              <div tw="relative col-span-2">
                <uiComps.OptimizedImage
                  width={300}
                  height={300}
                  stylesImg={tw`rounded-[25px] h-full`}
                  src="/img/empresas/desktop/accesorios.webp"
                  alt="Utiles"
                />
                <span tw="absolute text-snow-white bottom-4 left-[10px] xl:left-[20px] font-semibold">
                  Accesorios
                </span>
              </div>
              <div tw="relative col-span-2">
                <uiComps.OptimizedImage
                  width={300}
                  height={300}
                  stylesImg={tw`rounded-[25px] h-full`}
                  src="/img/empresas/desktop/mochilas.webp"
                  alt="Utiles"
                />
                <span tw="absolute text-snow-white bottom-4 left-[10px] xl:left-[20px] font-semibold">
                  Mochilas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sección Pilares --> */}
      <section tw="bg-[url(/img/empresas/desktop/pilares.webp)] bg-cover bg-no-repeat my-4 py-6 text-snow-white text-center">
        <span tw=" font-bold" className={source_code_pro.className}>
          Te presentamos{' '}
        </span>
        <uiComps.H2 css={tw`text-[37px]`}>Nuestros Pilares</uiComps.H2>
        <p>De fidelidad y objetivo de marca</p>
      </section>
      {/* <!-- Seccion entrega --> */}
      <section tw="px-4 lg:px-0 grid gap-4">
        {/* <!-- 1 --> */}
        <div tw="grid lg:grid-cols-2 gap-4 relative">
          {/* <!-- El primer contenido para mobile --> */}
          <div tw="bg-[url(/img/empresas/desktop/prioridades-de-marca-left.webp)] bg-no-repeat bg-cover px-4 py-8 rounded-[7px] sm:py-[4rem] lg:rounded-[0_7px_7px_0] lg:py-0 lg:px-0">
            {/* <!-- Esta contenido se ocultara en "lg" ya que se mostrara otro diseño para que se vea acorder al figma --> */}
            <div tw="text-snow-white mx-auto max-w-[342px] lg:hidden">
              <div tw="w-[3.5rem] h-[3.5rem] rounded-full bg-light-gray mb-3 grid place-content-center text-intense-pink">
                <Domicilio />
              </div>
              <strong>Entregas a Domicilio</strong>
              <p>
                Es una opción conveniente y práctica para aquellas personas que
                no pueden o no desean salir de casa, ya sea por cuestiones de
                tiempo o de salud. El proceso de delivery suele ser fácil y
                sencillo: el cliente realiza un pedido en línea o por teléfono,
                indica su dirección y forma de pago, y espera la llegada del
                repartidor en la comodidad de su hogar.
              </p>
            </div>
          </div>
          {/* <!-- tw="col-start-1 row-start-1 w-[calc(50%-8px)] ml-auto" --> */}

          <uiComps.OptimizedImage
            width={800}
            height={800}
            src="/img/empresas/desktop/entrega.webp"
            alt="Entrega"
            stylesImg={tw`h-full rounded-[7px] lg:rounded-[7px_0_0_7px] lg:h-[429.97px]`}
          />
          {/* <!-- Se mostrara el contendio en "lg" para que el diseño sea acorde al figma --> */}
          <div tw="hidden container items-center absolute gap-4 w-full left-0 right-0 z-10 lg:top-[50%] lg:translate-y-[-50%] grid-cols-2 lg:grid">
            <div tw="text-snow-white h-fit lg:max-w-[417px] 2xl:max-w-[637px]">
              <div tw="w-12 h-12 rounded-full bg-light-gray grid place-content-center text-intense-pink">
                <Domicilio size={27} />
              </div>
              <strong tw="my-3.5 block">Entregas a Domicilio</strong>
              <p>
                Es una opción conveniente y práctica para aquellas personas que
                no pueden o no desean salir de casa, ya sea por cuestiones de
                tiempo o de salud. El proceso de delivery suele ser fácil y
                sencillo: el cliente realiza un pedido en línea o por teléfono,
                indica su dirección y forma de pago, y espera la llegada del
                repartidor en la comodidad de su hogar.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- 2 --> */}
        <div tw="grid lg:grid-cols-2 gap-4 relative">
          {/* <!-- El primer contenido para mobile --> */}
          <div tw="bg-[url(/img/empresas/desktop/prioridades-de-marca-right.webp)] bg-no-repeat bg-cover bg-right px-4 py-8 rounded-[7px] sm:py-[4rem] lg:rounded-[7px_0_0_7px] lg:py-0 lg:px-0 lg:order-2">
            {/* <!-- Esta contenido se ocultara en "lg" ya que se mostrara otro diseño para que se vea acorder al figma --> */}
            <div tw="text-snow-white mx-auto max-w-[342px] lg:hidden">
              <div tw="w-[3.5rem] h-[3.5rem] rounded-full bg-light-gray mb-3 grid place-content-center text-intense-pink">
                <Asegurada />
              </div>
              <strong>Compra Asegurada</strong>
              <p>
                Una compra asegurada en un e-commerce es una opción que brinda
                tranquilidad y confianza al cliente durante el proceso de compra
                en línea. Esta opción suele ofrecer una garantía de devolución
                de dinero en caso de que el producto entregado no cumpla con las
                expectativas del cliente o presente algún tipo de problema.
              </p>
            </div>
          </div>

          {/* <!-- tw="col-start-1 row-start-1 w-[calc(50%-8px)] ml-auto" --> */}
          <uiComps.OptimizedImage
            width={800}
            stylesImg={tw`h-full rounded-[7px] lg:rounded-[0_7px_7px_0] lg:h-[429.97px]`}
            height={800}
            src="/img/empresas/desktop/asegurada.webp"
            alt="Asegurada"
          />
          {/* <!-- Se mostrara el contendio en "lg" para que el diseño sea acorde al figma --> */}
          <div tw="hidden container items-center absolute gap-4 w-full left-0 right-0 z-10 lg:top-[50%] lg:translate-y-[-50%] grid-cols-2 lg:grid">
            <div tw="text-snow-white h-fit lg:max-w-[417px] 2xl:max-w-[637px] order-2 ml-auto text-right">
              <div tw="w-12 h-12 rounded-full bg-light-gray ml-auto grid place-content-center text-intense-pink">
                <Asegurada />
              </div>
              <strong tw="my-3.5 block">Compra Asegurada</strong>
              <p>
                Una compra asegurada en un e-commerce es una opción que brinda
                tranquilidad y confianza al cliente durante el proceso de compra
                en línea. Esta opción suele ofrecer una garantía de devolución
                de dinero en caso de que el producto entregado no cumpla con las
                expectativas del cliente o presente algún tipo de problema.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        {/* <!-- 3 --> */}
        <div tw="grid lg:grid-cols-2 gap-4 relative">
          {/* <!-- El primer contenido para mobile --> */}
          <div tw="bg-[url(/img/empresas/desktop/prioridades-de-marca-left.webp)] bg-no-repeat bg-cover px-4 py-8 rounded-[7px] sm:py-[4rem] lg:rounded-[0_7px_7px_0] lg:py-0 lg:px-0">
            {/* <!-- Esta contenido se ocultara en "lg" ya que se mostrara otro diseño para que se vea acorder al figma --> */}
            <div tw="text-snow-white mx-auto max-w-[342px] lg:hidden">
              <div tw="w-[3.5rem] h-[3.5rem] rounded-full bg-light-gray mb-3 grid place-content-center text-intense-pink">
                <Relampago />
              </div>
              <strong>Navegación Relámpago</strong>
              <p>
                Nosotros buscamos acelerar el proceso de navegación en un sitio
                web. Esta técnica se logra a través de la implementación de una
                estructura de navegación simple y clara, con la finalidad de que
                el usuario pueda encontrar fácilmente lo que está buscando y
                realizar acciones en el sitio de manera rápida y eficiente.
              </p>
            </div>
          </div>

          {/* <!-- tw="col-start-1 row-start-1 w-[calc(50%-8px)] ml-auto" --> */}
          <uiComps.OptimizedImage
            stylesImg={tw`h-full rounded-[7px] lg:rounded-[7px_0_0_7px] lg:h-[429.97px]`}
            width={800}
            height={800}
            src="/img/empresas/desktop/relampago.webp"
            alt="Relampago"
          />
          {/* <!-- Se mostrara el contendio en "lg" para que el diseño sea acorde al figma --> */}
          <div tw="hidden container items-center absolute gap-4 w-full left-0 right-0 z-10 lg:top-[50%] lg:translate-y-[-50%] grid-cols-2 lg:grid">
            <div tw="text-snow-white h-fit lg:max-w-[417px] 2xl:max-w-[637px]">
              <div tw="w-12 h-12 rounded-full bg-light-gray grid place-content-center text-intense-pink">
                <Relampago />
              </div>
              <strong tw="my-3.5 block">Navegación Relámpago</strong>
              <p>
                Nosotros buscamos acelerar el proceso de navegación en un sitio
                web. Esta técnica se logra a través de la implementación de una
                estructura de navegación simple y clara, con la finalidad de que
                el usuario pueda encontrar fácilmente lo que está buscando y
                realizar acciones en el sitio de manera rápida y eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Sección contacto --> */}
      <section tw="bg-dark-violet py-4 text-snow-white text-center my-4">
        Contactanos o Escríbenos <strong>para cualquier consulta</strong>
        <a href="tel:+51999999999">
          (+51) <strong>999 999 999</strong>{' '}
        </a>
      </section>
    </BasicLayout>
  )
}

export default EmpresaPage
