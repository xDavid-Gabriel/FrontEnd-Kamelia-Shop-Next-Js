import { ENV } from '../utils'

export class Search {
  add(word: string) {
    const textsSearch: string[] = this.getAll()
    const objIndex = textsSearch.findIndex(text => text === word)

    let updatedTextsSearch: string[]

    if (objIndex < 0) {
      updatedTextsSearch = [...textsSearch, word]
    } else {
      updatedTextsSearch = textsSearch.map(text => {
        if (text === word) {
          return word // Aquí debes devolver el texto existente si ya se encuentra en el array
        }
        return text
      })
    }

    // Actualizar el localStorage con los nuevos datos
    localStorage.setItem(ENV.SEARCH, JSON.stringify(updatedTextsSearch))
  }

  getAll() {
    const response = localStorage.getItem(ENV.SEARCH)

    if (!response) {
      return []
    } else {
      return JSON.parse(response)
    }
  }

  removeItem(text: string) {
    const textsSearch: string[] = this.getAll()

    const updatedProducts = textsSearch.filter(term => term !== text)

    let noEncrypted = JSON.stringify(updatedProducts)
    localStorage.setItem(ENV.SEARCH, noEncrypted)
  }
}
