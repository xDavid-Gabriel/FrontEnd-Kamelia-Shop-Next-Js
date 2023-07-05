import React, { useEffect, useState } from 'react'
import Slider from 'react-slider'
import styles from './filter-price.module.css'
import { useRouter } from 'next/router'

interface Props {
  priceMin: number
  priceMax: number
}

export const FilterPrice = ({ priceMin, priceMax }: Props) => {
  const [values, setValues] = useState([priceMin, priceMax])
  const router = useRouter()

  const handlePriceAfterChange = (values: number[]) => {
    const minPrice = values[0]
    const maxPrice = values[1]

    router.replace({
      query: {
        ...router.query,
        min_price: minPrice.toString(),
        max_price: maxPrice.toString(),
      },
    })
  }

  //Para que cambie cada que vallamos a otra categoria o pagina los precios de menor a myor se actualizen, este useEffect escucha los precios menor a mayor cada  que se cambie de pagina
  useEffect(() => {
    setValues([priceMin, priceMax])
  }, [priceMin, priceMax])

  //Para que se guarden los precios menor a mayor mediante la query de esa forma al recargar la pagina no se pierdan los datos donde el usuario haya movido el rango de precio, de esta manera el useEffect solamente escucha en base a la url
  useEffect(() => {
    const queryMinPrice = parseFloat(router.query.min_price as string)
    const queryMaxPrice = parseFloat(router.query.max_price as string)

    if (!isNaN(queryMinPrice) && !isNaN(queryMaxPrice)) {
      setValues([queryMinPrice, queryMaxPrice])
    }
  }, [router.asPath])

  return (
    <div tw="bg-sky-blue  rounded-[23px] text-dark-violet py-3 px-7 flex flex-col gap-3">
      <span tw="font-semibold text-xl ">Orden por Productos</span>
      {/* <div tw="h-[20px] rounded-full bg-[linear-gradient(270deg, #CC4478 0%, #8831CC 100%);]"></div> */}
      <Slider
        value={values}
        onChange={setValues}
        onAfterChange={handlePriceAfterChange}
        className={styles.slider}
        thumbClassName={styles.slider__thumb}
        min={priceMin}
        max={priceMax}
      />

      <div tw="flex justify-between">
        <span>s/ {values[0] !== null ? values[0]?.toFixed(2) : 0}</span>
        <span>s/ {values[1] !== null ? values[1]?.toFixed(2) : 0}</span>
      </div>
    </div>
  )
}
