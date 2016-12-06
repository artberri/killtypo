import * as types from '../mutation-types'

const state = {
  login: false,
  register: false
}

export default {
  state,
  mutations: {
    [types.SHOW_MODAL] (state, modal) {
      if (typeof state[modal] !== 'undefined') {
        state[modal] = true
      }
    },

    [types.HIDE_MODAL] (state, modal) {
      if (typeof state[modal] !== 'undefined') {
        state[modal] = false
      }
    },

    [types.TOGGLE_MODAL] (state, modal) {
      if (typeof state[modal] !== 'undefined') {
        if (state[modal]) {
          state[modal] = false
        } else {
          state[modal] = true
        }
      }
    }
  }
}
