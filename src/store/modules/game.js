import * as types from '../mutation-types'

const state = {
  playing: false,
  startTime: 0,
  wrong: [],
  timings: [],
  finished: false
}

export default {
  state,
  mutations: {
    [types.RESET_GAME] (state) {
      state.playing = false
      state.startTime = 0
      state.timings = []
      state.wrong = []
      state.finished = false
    },

    [types.START_GAME] (state) {
      if (!state.playing) {
        state.playing = true
        state.startTime = Date.now()
        state.timings = []
        state.wrong = []
        state.finished = false
      }
    },

    [types.FINISH_GAME] (state) {
      if (state.playing) {
        state.playing = false
        state.finished = true
      }
    },

    [types.INCREMENT_CHAR] (state) {
      state.timings.push(Date.now())
    },

    [types.INCREMENT_WRONG] (state, letter) {
      state.wrong.push({
        time: Date.now(),
        letter: letter
      })
    }
  }
}
