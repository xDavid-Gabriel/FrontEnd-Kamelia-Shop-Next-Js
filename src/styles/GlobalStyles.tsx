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
.swiper-pagination-bullet {
  ${tw`bg-pale-gray`}
}
.swiper-pagination-bullet-active{
  ${tw`bg-snow-white`}
}
.swiper-slide-thumb-active {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  opacity: 1
}
${{ ...(globalStyles as CSSObject) }}
`

export default GlobalStyles
