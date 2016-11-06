import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import * as getters from './getters'
import options from './modules/options'
import autocue from './modules/autocue'
import game from './modules/game'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let persistedState = createPersistedState({
  key: 'killtypo-options',
  path: [
    'options'
  ]
})

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    options,
    autocue,
    game
  },
  strict: debug,
  plugins: debug ? [createLogger(), persistedState] : [persistedState]
})
