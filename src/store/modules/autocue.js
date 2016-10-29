import * as types from '../mutation-types'

const state = {
  message: '',
  content: '',
  lastKey: null,
  isWritting: false,
  successes: 0,
  errors: 0
}

export default {
  state,
  mutations: {
    [types.SET_MESSAGE] (state, message) {
      state.message = message
    },

    [types.SET_LASTKEY_EVENT] (state, event) {
      state.content = event.target.value
      state.lastKey = event.which || event.keyCode
    },

    [types.START_WRITTING] (state) {
      state.isWritting = true
    },

    [types.STOP_WRITTING] (state) {
      state.isWritting = false
    },

    [types.RESET_GAME] (state) {
      state.successes = 0
      state.errors = 0
    }
  }
}
