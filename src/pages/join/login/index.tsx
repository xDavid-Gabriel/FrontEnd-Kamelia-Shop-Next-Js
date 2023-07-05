import { BasicLayout } from '../../../components/layouts'

import * as uiComps from '../../../components/ui'
import Link from 'next/link'
const LoginPage = () => {
  return (
    <BasicLayout title="Crear Cuenta">
      <div tw="grid lg:grid-cols-2 bg-[url(/img/login/desktop/login-bg.webp)] bg-center bg-no-repeat bg-cover">
        <div></div>
        <div tw="text-snow-white rounded-[23px 0px 0px 23px] bg-black/30 [background-blend-mode: overlay] px-4 [backdrop-filter: blur(67.95704650878906px);] p-[173px  0]">
          <div tw="flex flex-col gap-[26px] max-w-[403px] mx-auto ">
            <header tw="text-center">
              <h1 tw="text-[30px] font-bold">Inicia Sesión</h1>
              <p tw="mt-[12px]">
                Nos alegramos que hayas vuelto a <strong>Kamelia.Shopee</strong>{' '}
              </p>
            </header>
            <form action="#">
              <div tw="flex flex-col gap-[12px]">
                <label htmlFor="#">Ingresa tu Usuario</label>
                <input
                  type="text"
                  tw="text-dark-charcoa/40 p-[12px 10px] rounded-[7px] bg-snow-white outline-none"
                  placeholder="Ingresa tu Nombre de Usuario"
                />
              </div>
              <div tw="flex flex-col gap-[12px] mt-[12px] mb-[21.5px]">
                <label htmlFor="#">Contraseña</label>
                <input
                  type="password"
                  tw="text-dark-charcoa/40 p-[12px 10px] rounded-[7px] bg-snow-white outline-none"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
              <uiComps.Button variant="join">Iniciar Sesión</uiComps.Button>
            </form>
            <p tw="text-center">¿Olvidaste tu Contraseña?</p>
            <p tw="text-center">
              ¿No tienes cuenta?{' '}
              <Link href="/join/register" tw="font-bold">
                Registrate
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default LoginPage
