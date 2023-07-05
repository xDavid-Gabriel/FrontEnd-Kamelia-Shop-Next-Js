import Head from 'next/head'
import * as uiComps from '../../../components/ui'
import { FC, PropsWithChildren } from 'react'

interface Props {
  title?: string
}
export const BasicLayout: FC<PropsWithChildren<Props>> = ({
  title = 'Inicio',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* seo && Schemas */}

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
      </Head>
      <uiComps.Header />
      <main>{children}</main>
      <uiComps.Footer />
    </>
  )
}
