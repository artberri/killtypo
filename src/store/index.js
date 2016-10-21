import Vue from 'vue'
import Vuex from 'vuex'
import autocue from './modules/autocue'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    autocue
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
