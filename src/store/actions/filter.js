import TYPES from '../types'
import mutations from '../mutations'

export const setFilters = (value) => (dispatch) => {
  return dispatch(mutations[TYPES.SET_FILTERS](value))
}

export const resetFilters = () => (dispatch) => {
  return dispatch(mutations[TYPES.RESET_FILTERS]())
}

export const filterResults = () => (dispatch, getState) => {
  const data = getState().search.results
  dispatch(mutations[TYPES.FILTER_RESULTS_PENDING]())
  setTimeout(() => {
    dispatch(mutations[TYPES.FILTER_RESULTS_SUCCESS](data))
  }, 500)
}
