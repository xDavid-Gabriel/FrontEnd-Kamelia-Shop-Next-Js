import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { roboto_mono } from '../utils'
import '@etchteam/next-pagination/dist/index.css'
import { AuthProvider, UiProvider } from '../context'
import { CartProvider } from '../context/cart'
import { SWRConfig } from 'swr'
import Router from 'next/router'
import { useState } from 'react'
import { BasicLoading } from '../components/ui'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', url => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', url => {
    setLoading(false)
  })
  return (
    <>
      {loading && (
        <div tw="min-h-[100vh] grid place-content-center fixed inset-0 bg-baby-blue z-[100]">
          <BasicLoading />
          <strong tw="mt-7 text-xl sm:text-2xl md:text-3xl">Cargando...</strong>
        </div>
      )}
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then(res => res.json()),
        }}
      >
        <AuthProvider>
          <CartProvider>
            <UiProvider>
              <GlobalStyles />
              <div className={roboto_mono.className}>
                <Component {...pageProps} />
              </div>
            </UiProvider>
          </CartProvider>
        </AuthProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
