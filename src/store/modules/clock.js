import * as types from '../mutation-types'

const state = {
  deadline: 0
}

export default {
  state,
  mutations: {
    [types.SET_DEADLINE] (state, deadline) {
      state.deadline = deadline
    }
  }
}
