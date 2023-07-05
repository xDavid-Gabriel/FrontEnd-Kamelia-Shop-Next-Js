import { BasicLayout } from '../../components/layouts'
import * as uiComps from '../../components/ui'
import { CloseCircle } from '../../components/ui/Icons'
import { source_code_pro } from '../../utils'
const OfertasPage = () => {
  return (
    <BasicLayout>
      <section tw="container grid [grid-template-columns:28rem 1fr] gap-10">
        <div tw="flex flex-col gap-4">
          <span tw="text-center">
            Te mostramos resultados para <strong>OBJETO BUSCADO</strong>{' '}
          </span>
          <div tw="rounded-[23px] bg-red-400 px-3 py-4 bg-[url(/img/banner.webp)] bg-cover bg-no-repeat text-light-gray">
            <uiComps.H3>
              {' '}
              Productos <span tw="text-aqua-blue">Destacados</span>{' '}
            </uiComps.H3>
          </div>
        </div>
        <div tw="flex flex-col gap-4 mt-3">
          <span>Filtrado de Búsqueda</span>
          <div tw="flex gap-3">
            <div tw="bg-orchid text-snow-white py-1.5 px-3 rounded-full flex gap-2 items-center cursor-pointer">
              <CloseCircle size={20} />
              Mochila
            </div>
            <div tw="bg-orchid text-snow-white py-1.5 px-3 rounded-full flex gap-2 items-center cursor-pointer">
              <CloseCircle size={20} />
              Mochila
            </div>
          </div>
        </div>
      </section>
      {/* Filtrados */}
      <section tw="container grid [grid-template-columns:28rem 1fr] gap-10 mt-5">
        <div tw="bg-sky-blue px-4 py-5 rounded-[7px]">
          <uiComps.H3 tw="py-1.5 mx-[-1rem] text-dark-violet bg-baby-blue px-4">
            Filtrado de Parámetros
          </uiComps.H3>
          {/* Filtrar por */}
          <div tw="pt-4">
            <span
              className={source_code_pro.className}
              tw="text-dark-violet bg-baby-blue py-1.5 px-4 block font-bold text-xl rounded-[7px 7px 0 0]"
            >
              Filtrar por
            </span>
            <div tw="bg-cornflower-blue p-4 rounded-[0 0 7px 7px]">
              {/* Orden por Productos */}
              <div tw="bg-sky-blue  rounded-[23px] text-dark-violet py-3 px-7 flex flex-col gap-3">
                <span tw="font-semibold text-xl ">Orden por Productos</span>
                <div tw="h-[20px] rounded-full bg-[linear-gradient(270deg, #CC4478 0%, #8831CC 100%);]"></div>
                <span tw="text-center text-xl">Menor de s/ 15.00</span>
              </div>
              <ul tw="flex flex-col gap-3 mt-5 px-6">
                <li tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer">
                  <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7"></div>
                  Ofertas más Valoradas
                </li>
                <li tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer">
                  <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7"></div>
                  Costo de envío gratis
                </li>
                <li tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer">
                  <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7"></div>
                  Productos menos destacados
                </li>
              </ul>
            </div>
          </div>
          {/* Categorias */}
          <div tw="pt-4">
            <span
              className={source_code_pro.className}
              tw="text-dark-violet bg-baby-blue py-1.5 px-4 block font-bold text-xl rounded-[7px 7px 0 0]"
            >
              Categorías
            </span>
            <div tw="bg-cornflower-blue py-4 px-10 rounded-[0 0 7px 7px]">
              <strong
                className={source_code_pro.className}
                tw="text-dark-violet text-xl"
              >
                Mochilas Coreanas
              </strong>
              <ul tw="flex flex-col gap-3 mt-5">
                <li tw="flex gap-5 items-center text-slate-blue text-[18px] cursor-pointer">
                  <div tw="border-[2px] rounded-[7px] border-sky-blue w-7 h-7"></div>
                  Mochilas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </BasicLayout>
  )
}

export default OfertasPage
