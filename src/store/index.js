import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as actions from './actions'
import * as getters from './getters'
import firebasePlugin from './plugins/firebasePlugin'
import options from './modules/options'
import autocue from './modules/autocue'
import game from './modules/game'
import notifications from './modules/notifications'
import user from './modules/user'
import online from './modules/online'
import modals from './modules/modals'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
let persistedState = createPersistedState({
  key: 'killtypo-options',
  paths: [
    'options'
  ]
})
let plugins = debug ? [createLogger(), persistedState, firebasePlugin] : [persistedState, firebasePlugin]

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    options,
    autocue,
    game,
    notifications,
    user,
    modals,
    online
  },
  strict: debug,
  plugins: plugins
})
