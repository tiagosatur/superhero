import { useSelector } from 'react-redux'

export default function useStore () {
  const { auth, search, hero } = useSelector((state) => state)

  return {
    state: {
      auth,
      search,
      hero
    }
  }
}
