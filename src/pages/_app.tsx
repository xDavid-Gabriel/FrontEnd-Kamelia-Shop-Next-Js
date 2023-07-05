import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/GlobalStyles'
import { roboto_mono } from '../utils'
import '@etchteam/next-pagination/dist/index.css'
import { AuthProvider, UiProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UiProvider>
        <GlobalStyles />
        <div className={roboto_mono.className}>
          <Component {...pageProps} />
        </div>
      </UiProvider>
    </AuthProvider>
  )
}

export default MyApp
