import * as types from '../mutation-types'

const state = {
  status: navigator.onLine
}

export default {
  state,
  mutations: {
    [types.SET_ONLINE] (state) {
      state.status = true
    },

    [types.SET_OFFLINE] (state) {
      state.status = false
    }
  }
}
