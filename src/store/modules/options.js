import * as types from '../mutation-types'
import settings from '../../settings'

const state = {
  removeLineBreaks: true,
  wordLimit: settings.defaultWordLimit
}

export default {
  state,
  mutations: {
    [types.OPTION_WORDLIMIT] (state, wordLimit) {
      state.wordLimit = parseInt(wordLimit, 10)
    },

    [types.OPTION_REMOVELINEBREAKS] (state, removeLineBreaks) {
      state.removeLineBreaks = !!removeLineBreaks
    }
  }
}
