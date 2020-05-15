import { useDispatch } from 'react-redux'

import { searchHeroes } from '../../store/actions'

export default function useAction () {
  const dispatch = useDispatch()

  return {
    actions: {
      searchHeroes: (data) => dispatch(searchHeroes(data))
    }
  }
}
