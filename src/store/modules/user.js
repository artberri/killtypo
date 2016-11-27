import * as types from '../mutation-types'

const state = {
  isAnonymous: true,
  uid: false,
  displayName: false,
  photoURL: false
}

export default {
  state,
  mutations: {
    [types.LOG_IN] (state, user) {
      state.uid = user.uid
      state.isAnonymous = user.isAnonymous
      state.displayName = user.displayName
      state.photoURL = user.photoURL
    },

    [types.LOG_OUT] (state) {
      state.uid = false
      state.isAnonymous = true
      state.displayName = false
      state.photoURL = false
    }
  }
}
