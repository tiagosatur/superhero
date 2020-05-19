import TYPES from "../types";

export default {
  [TYPES.SEARCH_HEROES_PENDING]: () => ({
    type: TYPES.SEARCH_HEROES_PENDING,
  }),
  [TYPES.SEARCH_HEROES_SUCCESS]: (data) => ({
    type: TYPES.SEARCH_HEROES_SUCCESS,
    payload: data,
  }),
  [TYPES.SEARCH_HEROES_FAIL]: (error) => ({
    type: TYPES.SEARCH_HEROES_FAIL,
    payload: error,
  }),
  [TYPES.GET_HERO_PENDING]: () => ({
    type: TYPES.GET_HERO_PENDING,
  }),
  [TYPES.GET_HERO_SUCCESS]: (data) => ({
    type: TYPES.GET_HERO_SUCCESS,
    payload: data,
  }),
  [TYPES.GET_HERO_FAIL]: (error) => ({
    type: TYPES.GET_HERO_FAIL,
    payload: error,
  }),

  [TYPES.FILTER_RESULTS_PENDING]: () => ({
    type: TYPES.FILTER_RESULTS_PENDING,
  }),
  [TYPES.FILTER_RESULTS_SUCCESS]: (data) => ({
    type: TYPES.FILTER_RESULTS_SUCCESS,
    payload: data,
  }),
  [TYPES.FILTER_RESULTS_FAIL]: (error) => ({
    type: TYPES.FILTER_RESULTS_FAIL,
    payload: error,
  }),

  [TYPES.SET_FILTERS]: (value) => ({
    type: TYPES.SET_FILTERS,
    payload: value,
  }),
  [TYPES.RESET_FILTERS]: () => ({
    type: TYPES.RESET_FILTERS,
  }),
};
