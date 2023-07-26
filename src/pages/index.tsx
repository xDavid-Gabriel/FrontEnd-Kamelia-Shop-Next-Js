import { BasicLayout } from '../components/layouts'

import {
  SBanner,
  SCta,
  SHero,
  SOfertas,
  SProductosDestacados,
  STodosLosProductos,
} from '../views/home'

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

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetStaticProps } from 'next'
import { IProductData } from '../interfaces'
import { Product } from '../api'
const productCtrl = new Product()
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { slug } = params as { slug: string }
  const { data } = await productCtrl.getProductBySlug('mochila-morral-fashion')

  const productDetail: IProductData[] = data

  if (productDetail.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: productDetail[0],
  }
}
export default IndexPage
