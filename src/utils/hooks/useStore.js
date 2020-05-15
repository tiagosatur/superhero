import { useSelector } from 'react-redux'

export default function useStore () {
  const { auth, search } = useSelector((state) => state)

  return {
    state: {
      auth,
      search
    }
  }
}
