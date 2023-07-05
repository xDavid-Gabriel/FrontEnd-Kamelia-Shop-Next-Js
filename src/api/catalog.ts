import axios from 'axios'
import { ENV } from '../utils'

export class Catalog {
  //Traer un catalogo por el slug y con sus modelos nada mas
  async getCatalogBySlugModels(slug: string) {
    try {
      const filters = `filters[slug][$eq]=${slug}`
      const populate = 'populate[0]=models'
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATALOG}?${filters}&${populate}`
      const { data } = await axios.get(url)
      if (!data) {
        throw new Error('Data not found')
      }
      return data.data
    } catch (error) {
      throw error
    }
  }
}
