export default function searchMiddleare (res) {
  const { data, status } = res

  return {
    status,
    success: data.response,
    term: data['results-for'] || '',
    results: format.powerStats(data.results) || []
  }
}

const format = {
  powerStats: (data) => {
    return data.map((hero) => {
      const temp = Object.entries(hero.powerstats).map(([key, value]) => [
        key,
        value === 'null' ? 0 : parseInt(value)
      ])
      return {
        ...hero,
        powerstats: Object.fromEntries(temp)
      }
    })
  }
}
