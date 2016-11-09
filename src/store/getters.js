function getGameData (state) {
  return {
    timings: state.game.timings,
    charAmount: state.game.timings.length,
    lastTime: state.game.timings.length > 0 ? state.game.timings[state.game.timings.length - 1] : 0,
    startTime: state.game.startTime,
    wrongAmount: state.game.wrong.length,
    wrongs: state.game.wrong,
    softs: state.game.softs
  }
}

function getDelta (startTime, endTime, inMinutes) {
  let delta = endTime ? (endTime - startTime) / 1000 : 0

  if (inMinutes) {
    delta = delta / 60
  }

  return delta
}

function calculateWpm (delta, charAmount) {
  let wpm = delta > 0 ? (charAmount / 5) / delta : 0

  return wpm.toFixed(2)
}

function calculateCpm (delta, charAmount) {
  let cpm = delta > 0 ? charAmount / delta : 0

  return cpm.toFixed(2)
}

export const getWpm = state => {
  let data = getGameData(state)
  let delta = getDelta(data.startTime, data.lastTime, true)
  let wpm = calculateWpm(delta, data.charAmount)

  return wpm
}

export const getCpm = state => {
  let data = getGameData(state)
  let delta = getDelta(data.startTime, data.lastTime, true)
  let cpm = calculateCpm(delta, data.charAmount)

  return cpm
}

export const getAccuracy = state => {
  let data = getGameData(state)
  let accuracy = (data.charAmount - data.wrongAmount - data.softs * 0.1) / data.charAmount * 100

  if (!accuracy) {
    accuracy = 100
  }

  return accuracy.toFixed(2)
}

export const getFinalTime = state => {
  let data = getGameData(state)

  return data.lastTime ? data.lastTime - data.startTime : 0
}

export const getWpmChartData = state => {
  let data = getGameData(state)
  let dataPoints = [{
    x: 0,
    y: 0
  }]

  for (let i = 0; i < data.charAmount; i++) {
    let time = data.timings[i]
    let currentCharAmount = i + 1
    let seconds = getDelta(data.startTime, time, false)
    let delta = getDelta(data.startTime, time, true)
    let wpm = calculateWpm(delta, currentCharAmount)

    dataPoints.push({
      x: seconds.toFixed(2),
      y: wpm
    })
  }

  return dataPoints
}

export const getCpmChartData = state => {
  let data = getGameData(state)
  let dataPoints = [{
    x: 0,
    y: 0
  }]

  for (let i = 0; i < data.charAmount; i++) {
    let time = data.timings[i]
    let currentCharAmount = i + 1
    let seconds = getDelta(data.startTime, time, false)
    let delta = getDelta(data.startTime, time, true)
    let cpm = calculateCpm(delta, currentCharAmount)

    dataPoints.push({
      x: seconds.toFixed(2),
      y: cpm
    })
  }

  return dataPoints
}

export const getErrorChartData = state => {
  let data = getGameData(state)
  let dataPoints = []

  for (let i = 0; i < data.wrongAmount; i++) {
    let wrongLetter = data.wrongs[i]
    let seconds = getDelta(data.startTime, wrongLetter.time, false)

    console.log(wrongLetter)

    dataPoints.push({
      x: seconds.toFixed(2),
      y: 0,
      r: 7,
      letter: wrongLetter.letter
    })
  }

  return dataPoints
}
