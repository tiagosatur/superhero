export default function searchMiddleare (res) {
  const { data, status } = res

  return {
    status,
    success: data.response,
    term: data['results-for'] || '',
    results: data.results || []
  }
}
