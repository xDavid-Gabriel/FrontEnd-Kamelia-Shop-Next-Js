import { useRouter } from 'next/router'
import { Auth } from '../../../api'
import { BasicLayout } from '../../../components/layouts'
import * as uiComps from '../../../components/ui'
import Link from 'next/link'
//Register yup Form
import * as Yup from 'yup'
import { useFormik } from 'formik'
import tw from 'twin.macro'
import { useState } from 'react'
import { useStateAuthContext } from '../../../context'

const ages = Array.from({ length: 120 }, (e, i) => i + 1)
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]
const currentYear = new Date().getFullYear()

export const initialValues = () => {
  return {
    email: '',
    username: '',
    name: '',
    password: '',
    age: null,
    month: null,
    year: null,
  }
}

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email('Ingrese un correo valido')
      .required('Su correo es requerido'),
    username: Yup.string().required('Su nombre de usuario es requerido'),
    name: Yup.string().required('Su nombre es requerido'),
    password: Yup.string().required('Su contraseña es requerida'),
    age: Yup.string()
      .typeError('Debe ser un número válido')
      .required('Su edad es requerida')
      .oneOf(
        ages.map(age => age.toString().padStart(2, '0')),
        'Seleccione un año válido',
      )
      .min(1, 'Seleccione un mes válido'),
    month: Yup.string()
      .required('Su mes es requerido')
      .oneOf(
        months.map(age => age),
        'Seleccione un mes válido',
      ),
    year: Yup.number()
      .required('Su año es requerido')
      .positive('El año debe ser un número positivo')
      .min(1900, 'Ingrese un año válido')
      .test('year', 'El año debe ser menor o igual al actual', value => {
        return value <= currentYear
      }),
  })
}
const authCtrl = new Auth()

const RegisterPage = () => {
  const [notification, setNotification] = useState(false)
  const { login } = useStateAuthContext()
  const router = useRouter()
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { data } = await authCtrl.register(values)

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
    <BasicLayout title="Registrate">
      <div tw="grid lg:grid-cols-2 bg-[url(/img/login/desktop/login-bg.webp)] bg-center bg-no-repeat bg-cover">
        <div tw="text-snow-white rounded-[0px 23px  23px 0px] bg-black/30 [background-blend-mode: overlay] px-4 [backdrop-filter: blur(67.95704650878906px);] p-[173px  0]">
          <div tw="flex flex-col gap-[26px] max-w-[403px] mx-auto ">
            <header tw="text-center">
              <h1 tw="text-[30px] font-bold">Registrate</h1>
              <p tw="mt-[12px]">
                Te damos la Bienvenida a <strong>Kamelia.Shopee</strong>{' '}
              </p>
            </header>
            <form onSubmit={formik.handleSubmit}>
              {notification && (
                <p tw="p-4 rounded-[7px] bg-red-400 font-semibold mb-3 text-center">
                  El usuario o el correo ya existen 🙁
                </p>
              )}
              <div tw="flex flex-col gap-[12px]">
                <label htmlFor="#">Crea un Usuario</label>
                <div>
                  <input
                    type="text"
                    name="username"
                    tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none w-full"
                    autoComplete="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    css={formik.errors.username ? tw`border-red-400` : tw``}
                    placeholder="Ingresa tu Nombre de Usuario"
                  />
                  {formik.errors.username && (
                    <p tw="text-red-400">{formik.errors.username}</p>
                  )}
                </div>
              </div>
              <div tw="flex flex-col gap-[12px] mt-[12px]">
                <label htmlFor="#">Nombre y Apellido</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none w-full"
                    autoComplete="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    css={formik.errors.name ? tw`border-red-400` : tw``}
                    placeholder="Ingresa su Nombre y Apellido"
                  />
                  {formik.errors.name && (
                    <p tw="text-red-400">{formik.errors.name}</p>
                  )}
                </div>
              </div>
              <div tw="flex flex-col gap-[12px] mt-[12px]">
                <label htmlFor="#">Contraseña</label>
                <div>
                  <input
                    type="password"
                    tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none w-full"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    autoComplete="current-password" // Agrega este atributo
                    css={formik.errors.password ? tw`border-red-400` : tw``}
                    placeholder="Ingresa tu contraseña"
                  />
                  {formik.errors.password && (
                    <p tw="text-red-400">{formik.errors.password}</p>
                  )}
                </div>
              </div>
              <div tw="flex flex-col gap-[12px] mt-[12px]">
                <label htmlFor="#">Correo Electrónico</label>
                <div>
                  <input
                    name="email"
                    type="email"
                    tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none w-full"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    css={formik.errors.email ? tw`border-red-400` : tw``}
                    placeholder="tucorreo@ejemplo.com"
                  />
                  {formik.errors.email && (
                    <p tw="text-red-400">{formik.errors.email}</p>
                  )}
                </div>
              </div>
              <div tw="flex gap-[12px] mt-[12px] mb-[21.5px]">
                <div tw="flex flex-col gap-[12px]">
                  <label htmlFor="#">Edad</label>
                  <div>
                    {/* <input
                      name="age"
                      type="number"
                      tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none w-full"
                      value={formik.values.age ?? 0}
                      onChange={formik.handleChange}
                      css={formik.errors.age ? tw`border-red-400` : tw``}
                      placeholder="0"
                      maxLength={3}
                    />
                    {formik.errors.age && (
                      <p tw="text-red-400">{formik.errors.age}</p>
                    )} */}
                    <select
                      name="age"
                      tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none h-[52px] w-full"
                      value={formik.values.age ?? 0}
                      onChange={formik.handleChange}
                      css={formik.errors.age ? tw`border-red-400` : tw``}
                    >
                      <option value="">Seleccione una edad</option>
                      {ages.map(age => (
                        <option
                          value={age.toString().padStart(2, '0')}
                          key={age}
                        >
                          {age.toString().padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                    {formik.errors.age && (
                      <p tw="text-red-400">{formik.errors.age}</p>
                    )}
                  </div>
                </div>
                <div tw="flex flex-col gap-[12px]">
                  <label htmlFor="#">Mes</label>
                  <div>
                    {/* <input
                      name="month"
                      type="number"
                      tw="text-dark-charcoa/80 p-[12px 10px] border-[2px] border-transparent rounded-[7px] bg-snow-white outline-none w-full "
                      value={formik.values.month ?? 0}
                      onChange={formik.handleChange}
                      css={formik.errors.month ? tw`border-red-400` : tw``}
                      placeholder="0"
                    />
                    {formik.errors.month && (
                      <p tw="text-red-400">{formik.errors.month}</p>
                    )} */}
                    <select
                      name="month"
                      tw="text-dark-charcoa/80 border-[2px] border-transparent p-[12px 10px] rounded-[7px] bg-snow-white outline-none h-[52px] w-full"
                      value={formik.values.month ?? 0}
                      onChange={formik.handleChange}
                      css={formik.errors.month ? tw`border-red-400` : tw``}
                    >
                      <option value="">Seleccione un mes</option>
                      {months.map(month => (
                        <option value={month} key={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    {formik.errors.month && (
                      <p tw="text-red-400">{formik.errors.month}</p>
                    )}
                  </div>
                </div>
                <div tw="flex flex-col gap-[12px]">
                  <label htmlFor="#">Año</label>
                  <div>
                    <input
                      type="number"
                      tw="text-dark-charcoa/80 p-[12px 10px] border-[2px] border-transparent rounded-[7px] bg-snow-white outline-none w-full"
                      value={formik.values.year ?? 0}
                      onChange={formik.handleChange}
                      name="year"
                      css={formik.errors.year ? tw`border-red-400` : tw``}
                      placeholder="0"
                    />

                    {formik.errors.year && (
                      <p tw="text-red-400">{formik.errors.year}</p>
                    )}
                  </div>
                </div>
              </div>
              {notification ? (
                ''
              ) : (
                <uiComps.Button type="submit" variant="join">
                  Crear Cuenta
                </uiComps.Button>
              )}
            </form>

            <p tw="text-center">
              ¿Ya estas Registrado?{' '}
              <Link href="/join/login" tw="font-bold">
                Inicia Sesión
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </BasicLayout>
  )
}

export default RegisterPage
