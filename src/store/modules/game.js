import * as types from '../mutation-types'

const state = {
  playing: false,
  startTime: 0,
  timings: []
}

export default {
  state,
  mutations: {
    [types.START_GAME] (state) {
      if (!state.playing) {
        state.playing = true
        state.startTime = Date.now()
        state.timings = []
      }
    },

    [types.STOP_GAME] (state) {
      if (state.playing) {
        state.playing = false
      }
    },

    [types.INCREMENT_CHAR] (state) {
      state.timings.push(Date.now())
    }
  }
}
