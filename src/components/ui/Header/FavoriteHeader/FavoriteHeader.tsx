import { useStateUiContext } from '../../../../context'
import { ChevronBoton, Heart, HeartFill } from '../../Icons'
import { Favorite } from '../components/Favorite/Favorite'

export const FavoriteHeader = () => {
  const { isModalFavoriteOpen, toogleSideModalFavorite } = useStateUiContext()
  return (
    <div
      tw="relative h-[3.5rem] flex items-stretch"
      onClick={toogleSideModalFavorite}
    >
      <div tw="h-full bg-snow-white rounded-[7px 0 0 7px] w-[3.5rem] grid place-content-center cursor-pointer">
        {isModalFavoriteOpen ? (
          <HeartFill size={25} tw="text-pink-raspberry" />
        ) : (
          <Heart size={25} tw="text-pink-raspberry" />
        )}
      </div>
      {/* <!-- Flecha --> */}
      <div tw="cursor-pointer bg-pink-raspberry px-[6px] grid place-content-center rounded-[0 7px 7px 0] text-white">
        {/* <i className="bfs-chevron-boton text-[7px]"></i> */}
        <ChevronBoton size={12} />
      </div>

      {/* <!-- Modal Favoritos --> */}
      {isModalFavoriteOpen && <Favorite />}
    </div>
  )
}
