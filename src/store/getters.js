export const getWpm = state => {
  let timings = state.game.timings
  let charAmount = timings.length
  let lastTime = timings[charAmount - 1]
  let startTime = state.game.startTime
  let delta = lastTime ? (lastTime - startTime) / (60 * 1000) : 0
  let wpm = delta > 0 ? (charAmount / 5) / delta : 0

  return wpm.toFixed(2)
}

export const getCpm = state => {
  let timings = state.game.timings
  let charAmount = timings.length
  let lastTime = timings[charAmount - 1]
  let startTime = state.game.startTime
  let delta = lastTime ? (lastTime - startTime) / (60 * 1000) : 0
  let cpm = delta > 0 ? charAmount / delta : 0

  return cpm.toFixed(2)
}

export const getAccuracy = state => {
  let timings = state.game.timings
  let charAmount = timings.length
  let wrongAmount = state.game.wrong
  let accuracy = charAmount / (charAmount + wrongAmount) * 100

  if (!accuracy) {
    accuracy = 100
  }

  return accuracy.toFixed(2)
}

export const getFinalTime = state => {
  let timings = state.game.timings
  let charAmount = timings.length
  let lastTime = timings[charAmount - 1]
  let startTime = state.game.startTime

  return lastTime ? lastTime - startTime : 0
}

export const getWpmChartData = state => {
  let timings = state.game.timings
  let charAmount = timings.length
  let startTime = state.game.startTime
  let dataPoints = []

  for (let i = 0; i < charAmount; i++) {
    let time = timings[i]
    let seconds = (time - startTime) / 1000
    let delta = time ? seconds / 60 : 0
    let wpm = delta > 0 ? (charAmount / 5) / delta : 0

    dataPoints.push({
      x: seconds.toFixed(2),
      y: wpm.toFixed(2)
    })
  }

  return dataPoints
}

export const getCpmChartData = state => {
  let timings = state.game.timings
  let charAmount = timings.length
  let startTime = state.game.startTime
  let dataPoints = []

  for (let i = 0; i < charAmount; i++) {
    let time = timings[i]
    let seconds = (time - startTime) / 1000
    let delta = time ? seconds / 60 : 0
    let cpm = delta > 0 ? charAmount / delta : 0

    dataPoints.push({
      x: seconds.toFixed(2),
      y: cpm.toFixed(2)
    })
  }

  return dataPoints
}
