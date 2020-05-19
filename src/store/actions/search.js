import TYPES from '../types'
import mutations from '../mutations'
import api from '../../api'

export const searchHeroes = (term) => (dispatch) => {
  dispatch(mutations[TYPES.SEARCH_HEROES_PENDING]())
  return api.get
    .searchService(term)
    .then((res) => {
      if (res.status < 200 || res.status > 299) Promise.reject(res)
      dispatch(mutations[TYPES.SEARCH_HEROES_SUCCESS](res))
      return res
    })
    .catch((e) => {
      dispatch(mutations[TYPES.SEARCH_HEROES_FAIL](e))
    })
}
