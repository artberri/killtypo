import * as types from '../mutation-types'

const state = navigator.onLine

export default {
  state,
  mutations: {
    [types.SET_ONLINE] (state) {
      state = true
    },

    [types.SET_OFFLINE] (state) {
      state = false
    }
  }
}
