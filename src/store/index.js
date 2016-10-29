import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import autocue from './modules/autocue'
import game from './modules/game'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    autocue,
    game
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
