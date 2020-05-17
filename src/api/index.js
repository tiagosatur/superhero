import factory from './factory'
import { SEARCH_URL, BASE_URL } from './endpoints'
import { searchMiddleare, getHeroMiddleware } from './middlewares'

export default {
  get: {
    searchService: (term) =>
      factory
        .request(`${SEARCH_URL}${term}`)
        .get()
        .then((res) => searchMiddleare(res)),
    getHeroService: (id) =>
      factory
        .request(`/${id}`)
        .get()
        .then((res) => getHeroMiddleware(res))
  }
}
