import { useDispatch } from "react-redux";

import {
  searchHeroes,
  getHero,
  setFilters,
  resetFilters,
  filterResults,
} from "../../store/actions";

export default function useAction() {
  const dispatch = useDispatch();

  return {
    actions: {
      searchHeroes: (data) => dispatch(searchHeroes(data)),
      getHero: (data) => dispatch(getHero(data)),
      setFilters: (data) => dispatch(setFilters(data)),
      resetFilters: () => dispatch(resetFilters()),
      filterResults: (data) => dispatch(filterResults(data)),
    },
  };
}
