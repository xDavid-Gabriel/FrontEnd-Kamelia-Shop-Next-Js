import axios from 'axios'
import { ENV, ENV_DIEGO } from '../utils'

export class Category {
  //Traer todas las categorias con sus catalogos y modelos
  async getMenuData() {
    try {
      const url = `${ENV_DIEGO.API_DIEGO_URL}/${ENV_DIEGO.ENDPOINTS.COLLECTION}`
      const { data } = await axios.get(url)
      if (!data) {
        throw new Error('Data not found')
      }
      return data
    } catch (error) {
      throw error
    }
  }

  //Para poder validar y si no hay es slug un not Found podemos usar la funcion para un GetStaticPaths
  // async getCategoryBySlug(slug: string) {
  //   try {
  //     const filters = `filters[slug][$eq]=${slug}`
  //     const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}?${filters}`

  //     const { data } = await axios.get(url)

  //     if (!data) {
  //       throw new Error('Data not found')
  //     }
  //     return data.data
  //   } catch (error) {
  //     throw error
  //   }
  // }
  //Traer todas las categorias
  async getCategories() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}`
      const { data } = await axios.get(url)
      if (!data) {
        throw new Error('Data not found')
      }
      return data.data
    } catch (error) {
      throw error
    }
  }

  /*
  TODO:Ver si borrar despues
  Traer una categoria por el slug con sus modelos y productos
  async getCategoryWithModelsAndProducts(slug: string) {
    try {
      //categories?filters[slug][$eq]=mochilas-coreanas&populate[models][populate][0]=products
      const filters = `filters[slug][$eq]=${slug}`
      const populate = 'populate[models][populate][0]=products'
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}?${filters}&${populate}`
      const { data } = await axios.get(url)
      if (!data) {
        throw new Error('Data not found')
      }
      return data.data
    } catch (error) {
      throw error
    }
  }
  */

  //Traer todas las categorias con sus catalogos y modelos
  async getCategoriesCatalogs() {
    try {
      const populate = 'populate[catalogs][populate][1]=models'
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}?${populate}`
      const { data } = await axios.get(url)
      if (!data) {
        throw new Error('Data not found')
      }
      return data.data
    } catch (error) {
      throw error
    }
  }

  //Traer una categoria por el slug y con sus catalogos nada mas
  async getCategoryBySlugCatalogs(slug: string) {
    try {
      const filters = `filters[slug][$eq]=${slug}`
      const populate = 'populate[0]=catalogs'
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CATEGORY}?${filters}&${populate}`
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
