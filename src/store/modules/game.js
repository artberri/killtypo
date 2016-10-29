import * as types from '../mutation-types'

const state = {
  playing: false,
  startTime: 0,
  wrong: 0,
  timings: []
}

export default {
  state,
  mutations: {
    [types.RESET_GAME] (state) {
      state.playing = false
      state.startTime = 0
      state.timings = []
      state.wrong = 0
    },

    [types.START_GAME] (state) {
      if (!state.playing) {
        state.playing = true
        state.startTime = Date.now()
        state.timings = []
        state.wrong = 0
      }
    },

    [types.STOP_GAME] (state) {
      if (state.playing) {
        state.playing = false
      }
    },

    [types.INCREMENT_CHAR] (state) {
      state.timings.push(Date.now())
    },

    [types.INCREMENT_WRONG] (state) {
      state.wrong = state.wrong + 1
    }
  }
}
