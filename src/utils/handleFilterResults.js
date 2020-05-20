export default function handleFilterResults ({
  power = null,
  speed = null,
  results
}) {
  const res = results
    .filter((item) => {
      const greaterThan = item.powerstats.speed >= speed[0]
      const lessThan = item.powerstats.speed <= speed[1]

      return greaterThan && lessThan
    })
    .filter(
      (item) =>
        parseInt(item.powerstats.power) >= power[0] &&
        parseInt(item.powerstats.power) <= power[1]
    )
  return res
}
