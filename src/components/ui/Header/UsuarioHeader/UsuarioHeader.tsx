import { ChevronBoton } from '../../Icons'
import { User } from '../components'
import { useStateUiContext } from '../../../../context/ui/UiProvider'
import { useStateAuthContext } from '../../../../context'

export const UsuarioHeader = () => {
  const { isModalUserOpen, toogleSideModalUser } = useStateUiContext()
  const { user } = useStateAuthContext()
  return (
    <div tw="items-stretch flex relative" onClick={toogleSideModalUser}>
      <div tw="flex gap-4 bg-snow-white py-2 px-4 rounded-[7px 0 0 7px] cursor-pointer">
        <img tw="w-[50px] h-[50px]" src="/img/user.webp" alt="User" />
        <p tw="flex flex-col text-berry-crush text-start">
          Bienvenid(a) a Kamelia.Shoppe
          <span tw="font-bold text-dark-charcoa">{user.name}</span>
        </p>
      </div>
      {/* <!-- Flecha --> */}
      <div tw="bg-pink-raspberry px-[6px] grid place-content-center rounded-[0 7px 7px 0] text-white cursor-pointer">
        <ChevronBoton size={12} />
      </div>
      {/* <!-- Modal Usuario --> */}
      {isModalUserOpen && <User />}
    </div>
  )
}
