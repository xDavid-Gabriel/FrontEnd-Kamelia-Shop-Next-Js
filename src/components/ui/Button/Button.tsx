import tw, { TwStyle, styled } from 'twin.macro'
import { ChevronLeft, ChevronRight } from '../Icons'
import { useSwiper } from 'swiper/react'
interface btnProps {
  variant?: 'primary' | 'secondary' | 'btn-pagar' | 'join'
}
export const Button = styled.button.attrs({ className: '' })(
  ({ variant = 'primary' }: btnProps) => [
    tw`transition duration-300 border-[1px] border-transparent font-medium inline-block py-3 px-7 rounded-full`,
    variant === 'primary' &&
      tw`bg-pink-raspberry text-snow-white py-3 px-7 hover:shadow-[0px 0px 65px #ffa0c5]`,
    variant === 'secondary' &&
      tw` border-snow-white text-snow-white hover:(bg-snow-white text-pink-raspberry)`,

    variant === 'btn-pagar' &&
      tw`w-full  hover:bg-pink-raspberry/90 text-center bg-pink-raspberry text-snow-white rounded-[0px 0px 7px 7px]`,

    variant === 'join' &&
      tw`py-[14px] !bg-dark-charcoa rounded-[7px] font-bold hover:!bg-dark-charcoa/80 text-pale-gray w-full`,
  ],
)

interface btnPrevProps {
  btnPrevStyle?: 'primary' | 'secondary'
  size?: number
  additionalStyles?: TwStyle
}
export const BtnPrev = ({
  btnPrevStyle,
  size = 17,
  additionalStyles,
}: btnPrevProps) => {
  const primary = tw`bg-pink-raspberry w-10 h-10 hover:bg-pink-raspberry/80 text-white left-0`

  const secondary = tw`w-[3.5rem] h-[3.5rem] hover:bg-pink-raspberry hover:text-snow-white text-pink-raspberry bg-snow-white border-[4px] border-pink-raspberry left-0`
  // xl:left-[-28px]

  const swiper = useSwiper()
  let buttonStyle

  if (btnPrevStyle === 'primary') {
    buttonStyle = primary
  } else if (btnPrevStyle === 'secondary') {
    buttonStyle = secondary
  } else {
    // Estilo por defecto en caso de que btnPrevStyle no coincida con ninguna opción
    buttonStyle = primary
  }
  return (
    <button
      tw="rounded-full grid place-content-center translate-y-[-50%]  transition duration-300  top-[50%] z-10 absolute left-0"
      onClick={() => swiper.slidePrev()}
      css={{ ...buttonStyle, ...additionalStyles }}
    >
      <ChevronLeft size={size} />
    </button>
  )
}

interface btnNextProps {
  btnNextStyle?: 'primary' | 'secondary'
  size?: number
  additionalStyles?: TwStyle
}
export const BtnNext = ({
  btnNextStyle,
  size = 17,
  additionalStyles,
}: btnNextProps) => {
  const primary = tw`bg-pink-raspberry w-10 h-10 hover:bg-pink-raspberry/80 text-white right-0`

  const secondary = tw`w-[3.5rem] h-[3.5rem] hover:bg-pink-raspberry hover:text-snow-white text-pink-raspberry bg-snow-white border-[4px] border-pink-raspberry right-0`
  const swiper = useSwiper()
  // xl:right-[-28px]

  let buttonStyle

  if (btnNextStyle === 'primary') {
    buttonStyle = primary
  } else if (btnNextStyle === 'secondary') {
    buttonStyle = secondary
  } else {
    // Estilo por defecto en caso de que btnNextStyle no coincida con ninguna opción
    buttonStyle = primary
  }
  return (
    <button
      tw="rounded-full grid place-content-center translate-y-[-50%] transition duration-300  top-[50%] z-10 absolute"
      onClick={() => swiper.slideNext()}
      css={{ ...buttonStyle, ...additionalStyles }}
    >
      <ChevronRight size={size} />
    </button>
  )
}
