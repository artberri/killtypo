import * as types from '../mutation-types'

const state = {
  playing: false,
  startTime: 0,
  wrong: [],
  timings: [],
  finished: false,
  softs: 0
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
      state.softs = 0
    },

    [types.START_GAME] (state) {
      if (!state.playing) {
        state.playing = true
        state.startTime = Date.now()
        state.timings = []
        state.wrong = []
        state.finished = false
        state.softs = 0
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
    },

    [types.INCREMENT_SOFT_WRONG] (state) {
      state.softs = state.softs + 1
    }
  }
}
