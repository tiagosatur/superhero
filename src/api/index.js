import factory from './factory'
import { SEARCH_URL } from './endpoints'
import { searchMiddleare } from './middlewares'

export default {
  get: {
    searchService: (term) =>
      factory
        .request(`${SEARCH_URL}${term}`)
        .get()
        .then((res) => searchMiddleare(res))
  }
}
