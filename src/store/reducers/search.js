import initialState from '../initial'
import TYPES from '../types'

export default (state = initialState.search, action) => {
  switch (action.type) {
    case TYPES.SEARCH_HEROES_PENDING:
      return {
        ...state,
        isSearchLoading: true
      }

    case TYPES.SEARCH_HEROES_SUCCESS:
      return {
        ...state,
        isSearchLoading: false,
        total: action.payload.results.length,
        results: action.payload.results,
        term: action.payload.term
      }
    case TYPES.SEARCH_HEROES_FAIL:
      return {
        ...state,
        isSearchLoading: false,
        error: action.payload,
        total: 0,
        results: [],
        term: ''
      }
    default:
      return state
  }
}
