import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './store/actions'
import * as getters from './store/getters'
import options from './store/modules/options'
import autocue from './store/modules/autocue'
import game from './store/modules/game'
import notifications from './store/modules/notifications'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let persistedState = createPersistedState({
  key: 'killtypo-options',
  paths: [
    'options'
  ]
})

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    options,
    autocue,
    game,
    notifications
  },
  strict: debug,
  plugins: debug ? [createLogger(), persistedState] : [persistedState]
})
