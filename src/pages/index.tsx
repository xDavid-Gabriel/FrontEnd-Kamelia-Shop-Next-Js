import { BasicLayout } from '../components/layouts'

import {
  SBanner,
  SCta,
  SHero,
  SOfertas,
  SProductosDestacados,
  STodosLosProductos,
} from '../views/home'
// Import Swiper styles
import 'swiper/css'
const IndexPage = () => {
  return (
    <BasicLayout>
      <SHero />
      <SOfertas />
      <SProductosDestacados />
      <SCta />
      <STodosLosProductos />
      <SBanner />
    </BasicLayout>
  )
}

export default IndexPage
