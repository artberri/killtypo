export const getWpm = state => {
  let timings = state.game.timings
  let charAmount = timings.length
  let lastTime = timings[charAmount - 1]
  let startTime = state.game.startTime
  let delta = lastTime ? (lastTime - startTime) / (60 * 1000) : 0

  return (charAmount / 5) / delta
}
