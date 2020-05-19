// import { handleFilterResults } from "../../utils";
import initial from "../initial";
import TYPES from "../types";

export default (state = initial.filter, action) => {
  switch (action.type) {
    case TYPES.SET_FILTERS:
      return {
        ...state,
        [action.payload.key]: action.payload.data,
      };
    case TYPES.FILTER_RESULTS_PENDING:
      return {
        ...state,
        isFiltering: true,
      };
    case TYPES.FILTER_RESULTS_SUCCESS:
      return {
        ...state,
        isFiltering: false,
        filteredList: handleFilterResults({
          power: state.power,
          speed: state.speed,
          results: action.payload,
        }),
      };
    case TYPES.FILTER_RESULTS_FAIL:
      return {
        ...state,
        isFiltering: false,
        filteredList: [],
        error: action.payload,
      };
    case TYPES.RESET_FILTERS:
      return {
        ...state,
        power: initial.power,
        speed: initial.speed,
      };
    default:
      return state;
  }
};

function handleFilterResults({ power = null, speed = null, results }) {
  const res = results
    .filter((item) => {
      const greaterThan = item.powerstats.speed >= speed[0];
      const lessThan = item.powerstats.speed <= speed[1];

      return greaterThan && lessThan;
    })
    .filter(
      (item) =>
        parseInt(item.powerstats.power) >= power[0] &&
        parseInt(item.powerstats.power) <= power[1]
    );
  return res;
}
