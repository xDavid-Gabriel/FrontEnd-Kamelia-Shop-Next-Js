import axios from 'axios'
import { ENV } from '../utils'

export class Model {
  // async getModelBySlugWithProducts(slug: string) {
  //   try {
  //     const filters = `filters[slug][$eq]=${slug}`
  //     const populate = 'populate[0]=category&populate[1]=products'
  //     const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MODEL}?${filters}&${populate}`
  //     const { data } = await axios.get(url)
  //     if (!data) {
  //       throw new Error('Data not found')
  //     }
  //     return data.data
  //   } catch (error) {
  //     throw error
  //   }
  // }
  // async getModelsCategory() {
  //   try {
  //     const populate = 'populate[category]=*'
  //     const url = `${ENV.API_URL}/${ENV.ENDPOINTS.MODEL}?${populate}`
  //     const { data } = await axios.get(url)
  //     if (!data) {
  //       throw new Error('Data not found')
  //     }
  //     return data.data
  //   } catch (error) {
  //     throw error
  //   }
  // }
}
