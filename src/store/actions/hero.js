import TYPES from '../types'
import mutations from '../mutations'
import api from '../../api'

export const getHero = (id) => (dispatch) => {
  dispatch(mutations[TYPES.GET_HERO_PENDING]())
  return api.get
    .getHeroService(id)
    .then((res) => {
      if (res.status < 200 || res.status > 299) Promise.reject(res)
      dispatch(mutations[TYPES.GET_HERO_SUCCESS](res))
      return res
    })
    .catch((e) => {
      dispatch(mutations[TYPES.GET_HERO_FAIL](e))
    })
}
