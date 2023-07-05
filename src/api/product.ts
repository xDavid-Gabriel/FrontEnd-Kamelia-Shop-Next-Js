import axios from 'axios'
import { ENV } from '../utils'

interface ProductFilters {
  slug: string
  page: string
  sort: string
  name: string
  filterBy: 'catalog' | 'category' | 'model'
  envioGratis?: boolean | string
  minPrice?: string
  maxPrice?: string
}
export class Product {
  //Traer productos filtrados que pertenecen a sus modelos y a la categoria principal
  async getFilteredProducts({
    slug,
    page,
    sort,
    name,
    filterBy,
    envioGratis,
    minPrice,
    maxPrice,
  }: ProductFilters) {
    try {
      // const sort="sort=name:asc"
      const sorts = `sort=${name}${sort}`
      const populate =
        'populate[0]=category&populate[1]=catalog&populate[2]=model'
      const filtersParam = `filters[${filterBy}][slug][$eq]=${slug}`
      const filtersPrice = `filters[price][$gte]=${minPrice}&filters[price][$lte]=${maxPrice}`
      const pagination = `pagination[page]=${page}&pagination[pageSize]=2`

      let filtersEnvioGratis = ''
      if (envioGratis === '') {
        filtersEnvioGratis = ''
      } else if (envioGratis) {
        filtersEnvioGratis = `&filters[envio_gratis][$eq]=${envioGratis}`
      }
      // filters[price][$gte]=1&filters[price][$lte]=5
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${sorts}${filtersEnvioGratis}&${populate}&${filtersParam}&${filtersPrice}&${pagination}`
      const { data } = await axios.get(url)
      if (!data) {
        throw new Error('Data not found')
      }
      return data
    } catch (error) {
      throw error
    }
  }

  //Traer de todos los productos un solo producto para traer el precio minimo y maximo de todos
  async getProductPriceMinMax({
    slug,
    filterBy,
    minMax,
  }: {
    slug: string
    filterBy: 'catalog' | 'category' | 'model'
    minMax: 'asc' | 'desc'
  }) {
    //asc: es el precio minimo, y desc: es el precio maximo
    const sort = `sort=price:${minMax}`
    const paginationLimit = 'pagination[limit]=1'
    const filtersParam = `filters[${filterBy}][slug][$eq]=${slug}`

    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${sort}&${paginationLimit}&${filtersParam}`
      const { data } = await axios.get(url)
      if (!data) {
        throw new Error('Data not found')
      }
      return data
    } catch (error) {
      throw error
    }
  }
}
