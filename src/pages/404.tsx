import * as uiComps from '../components/ui'
const ErrorPage = () => {
  return (
    <div>
      <uiComps.OptimizedPicture
        typeSrc="local"
        page="login"
        srcMobile="/login-bg-mobile.webp"
        srcTablet="/login-bg-tablet.webp"
        srcDesktop="/login-bg-desktop.webp"
        alt="Example"
        width={500}
        height={500}
      />

      <uiComps.OptimizedPicture
        typeSrc="external"
        srcMobile="https://img.freepik.com/vector-gratis/kawaii-comida-rapida-lindo-hot-dog-comida-rapida-hamburguesas-papas-fritas-bebida-ilustracion-salsa-tomate_24908-60601.jpg?w=2000"
        srcTablet="https://img.freepik.com/vector-gratis/kawaii-comida-rapida-lindo-hot-dog-comida-rapida-hamburguesas-papas-fritas-bebida-ilustracion-salsa-tomate_24908-60601.jpg?w=2000"
        srcDesktop="https://img.freepik.com/vector-gratis/kawaii-comida-rapida-lindo-hot-dog-comida-rapida-hamburguesas-papas-fritas-bebida-ilustracion-salsa-tomate_24908-60601.jpg?w=2000"
        alt="Example"
        width={500}
        height={500}
      />
    </div>
  )
}

export default ErrorPage
