import tw, { TwStyle } from 'twin.macro'
import styled from 'styled-components'
import Image from 'next/image'

interface PropsPicture {
  alt: string
  srcMobile: string
  srcTablet: string
  srcDesktop: string
  width: number
  height: number
  typeSrc: 'local' | 'external'
  stylesPicture?: TwStyle
  stylesImg?: TwStyle
  mediaTablet?: number
  mediaDesktop?: number
  page?: string
  loading?: 'lazy' | 'eager' | undefined
}
export const OptimizedPicture = ({
  srcMobile,
  srcTablet,
  srcDesktop,
  typeSrc,
  alt,
  stylesPicture,
  stylesImg,
  mediaTablet = 768,
  mediaDesktop = 1280,
  width,
  height,
  page,
  loading = 'lazy',
}: PropsPicture) => {
  const imgSrc = {
    mobile: typeSrc === 'local' ? `/img/${page}/mobile${srcMobile}` : srcMobile,
    tablet: typeSrc === 'local' ? `/img/${page}/tablet${srcTablet}` : srcTablet,
    desktop:
      typeSrc === 'local' ? `/img/${page}/desktop${srcDesktop}` : srcDesktop,
  }

  return (
    <picture css={stylesPicture}>
      <source
        srcSet={imgSrc.desktop}
        media={`(min-width: ${mediaDesktop}px)`}
      />
      <source srcSet={imgSrc.tablet} media={`(min-width: ${mediaTablet}px)`} />
      <img
        loading={loading}
        src={imgSrc.mobile}
        alt={alt}
        width={width}
        height={height}
        css={{ ...tw`w-full h-full`, ...stylesImg }}
      />
    </picture>
  )
}

interface Props {
  src: string
  alt: string
  width: number
  height: number
  stylesImg?: TwStyle
  priority?: boolean
}
export const OptimizedImage = ({
  src,
  width,
  height,
  alt,
  stylesImg,
  priority = false,
}: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      css={stylesImg}
      priority={priority}
    />
  )
}

interface OptimizedBgProps {
  src: string
}
export const OptimizedBg = styled.section<OptimizedBgProps>`
  background-repeat: no-repeat; /* Evita que se repita la imagen */
  background-size: cover; /* Ajusta la imagen al tamaño del componente */
  background-position: center;
  /* Imagen para mobile */
  background-image: url(${props => `${props.src}`});
`
/* Imagen para tablets */
//@media (min-width: 768px) {
// background-image: url(${props => `/img/tablet${props.srcTablet}`});
// }

/* Imagen para desktops */
// @media (min-width: 1280px) {
// background-image: url(${props => `/img/desktop${props.srcDesktop}`});
//}
