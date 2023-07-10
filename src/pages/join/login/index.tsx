import { BasicLayout } from '../../../components/layouts'

import * as uiComps from '../../../components/ui'
import Link from 'next/link'
//Register yup Form
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { Auth } from '../../../api'
import { useState } from 'react'
import tw from 'twin.macro'
import { useStateAuthContext } from '../../../context'
export const initialValues = () => {
  return {
    identifier: '',
    password: '',
  }
}

export const validationSchema = () => {
  return Yup.object({
    identifier: Yup.string().required(
      'Su nombre de usuario o correo es requerido',
    ),

    password: Yup.string().required('Su contraseña es requerida'),
  })
}

const authCtrl = new Auth()
const LoginPage = () => {
  const { login } = useStateAuthContext()

  const [notification, setNotification] = useState(false)
  const router = useRouter()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { data } = await authCtrl.login(values)

        login(data.jwt)
        // Después de manejar el envío, puedes limpiar el formulario utilizando resetForm()
        resetForm()
        router.push('/')
      } catch (error) {
        if (error) {
          setNotification(true)
          setTimeout(() => {
            setNotification(false)
          }, 3000)
        }
        console.log('Error', error)
      }
    },
  })
  return (
    <BasicLayout title="Logeate">
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
            <form action="#" onSubmit={formik.handleSubmit}>
              {notification && (
                <p tw="p-4 rounded-[7px] bg-red-400 font-semibold mb-3 text-center">
                  Esta cuenta no existe 🙁
                </p>
              )}
              <div tw="flex flex-col gap-[12px]">
                <label htmlFor="#">Ingresa tu Usuario</label>
                <div>
                  <input
                    type="text"
                    name="identifier"
                    tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none w-full"
                    autoComplete="name"
                    value={formik.values.identifier}
                    onChange={formik.handleChange}
                    css={formik.errors.identifier ? tw`border-red-400` : tw``}
                    placeholder="Ingresa tu Nombre de Usuario"
                  />
                  {formik.errors.identifier && (
                    <p tw="text-red-400">{formik.errors.identifier}</p>
                  )}
                </div>
              </div>
              <div tw="flex flex-col gap-[12px] mt-[12px] mb-[21.5px]">
                <label htmlFor="#">Contraseña</label>
                <div>
                  <input
                    type="password"
                    tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none w-full"
                    autoComplete="current-password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    css={formik.errors.password ? tw`border-red-400` : tw``}
                    placeholder="Ingresa tu contraseña"
                  />
                  {formik.errors.password && (
                    <p tw="text-red-400">{formik.errors.password}</p>
                  )}
                </div>
              </div>

              {notification ? (
                ''
              ) : (
                <uiComps.Button type="submit" variant="join">
                  Iniciar Sesión
                </uiComps.Button>
              )}
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
