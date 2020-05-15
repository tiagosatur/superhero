import TYPES from '../types'

export default {
  [TYPES.SEARCH_HEROES_PENDING]: () => ({
    type: TYPES.SEARCH_HEROES_PENDING
  }),
  [TYPES.SEARCH_HEROES_SUCCESS]: (data) => ({
    type: TYPES.SEARCH_HEROES_SUCCESS,
    payload: data
  }),
  [TYPES.SEARCH_HEROES_FAIL]: (error) => ({
    type: TYPES.SEARCH_HEROES_FAIL,
    payload: error
  })
}
