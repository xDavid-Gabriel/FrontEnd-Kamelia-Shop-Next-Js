import { Lato, Source_Code_Pro } from 'next/font/google'

export const source_code_pro = Source_Code_Pro({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-source_code_pro',
  display: 'swap',
})

export const roboto_mono = Lato({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto_mono',
  display: 'swap',
})
