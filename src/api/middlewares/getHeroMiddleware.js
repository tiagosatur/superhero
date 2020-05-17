export default function searchMiddleare (res) {
  const { data, status } = res

  return {
    status,
    data
  }
}
