import { createGlobalStyle, CSSObject } from 'styled-components'
import tw, { theme, globalStyles } from 'twin.macro'

const GlobalStyles = createGlobalStyle`
  body{
    ${tw`text-[#323232] bg-baby-blue`}
  }
  img{
    ${tw`w-full h-full object-cover`}
  }

  /* Animación General para el acordeon*/
  .ReactCollapse--collapse {
  transition: height 500ms;
}
${{ ...(globalStyles as CSSObject) }}
`

export default GlobalStyles
