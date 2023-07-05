import tw, { styled } from 'twin.macro'
import { source_code_pro } from '../../../utils/fonts'

interface H1Props {
  variant?: 'primary'
}
export const H1 = styled.h1.attrs({ className: source_code_pro.className })(
  ({ variant = 'primary' }: H1Props) => [
    tw`font-bold`,
    variant === 'primary' && tw`text-[24px] md:text-[35px] xl:text-[45px]`,
  ],
)
interface H2Props {
  variant?: 'primary'
}
export const H2 = styled.h2.attrs({
  className: source_code_pro.className,
})(({ variant = 'primary' }: H2Props) => [
  tw`font-bold`,
  variant === 'primary' &&
    tw`text-[19px] md:text-[23px] 
  `,
])

interface H3Props {
  variant?: 'primary'
}
export const H3 = styled.h3.attrs({
  className: source_code_pro.className,
})(({ variant = 'primary' }: H3Props) => [
  tw`font-bold`,
  variant === 'primary' && tw`text-[16px] `,
])
