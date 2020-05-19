import initialState from '../initial'
import TYPES from '../types'

export default (state = initialState.hero, action) => {
  switch (action.type) {
    case TYPES.GET_HERO_PENDING:
      return {
        ...state,
        isHeroLoading: true,
        info: {}
      }

    case TYPES.GET_HERO_SUCCESS:
      return {
        ...state,
        isHeroLoading: false,
        info: action.payload.data
      }
    case TYPES.GET_HERO_FAIL:
      return {
        ...state,
        isHeroLoading: false,
        error: action.payload,
        info: {}
      }
    default:
      return state
  }
}
