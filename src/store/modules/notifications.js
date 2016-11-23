import * as types from '../mutation-types'

const state = []

export default {
  state,
  mutations: {
    [types.ADD_NOTIFICATION] (state, notification) {
      state.push(notification)
    },

    [types.REMOVE_NOTIFICATION] (state, notification) {
      let index = state.indexOf(notification)

      state.splice(index, 1)
    }
  }
}
