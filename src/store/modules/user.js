import * as types from '../mutation-types'

const state = {
  isAnonymous: false,
  uid: false
}

export default {
  state,
  mutations: {
    [types.LOG_IN] (state, user) {
      state.uid = user.uid
      state.isAnonymous = user.isAnonymous
    },

    [types.LOG_OUT] (state) {
      state.uid = false
      state.isAnonymous = true
    }
  }
}
