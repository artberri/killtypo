/* eslint-disable no-new */

import 'autotrack/lib/plugins/clean-url-tracker'
import 'autotrack/lib/plugins/outbound-link-tracker'
import 'autotrack/lib/plugins/url-change-tracker'
import 'autotrack/lib/plugins/page-visibility-tracker'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import 'offline-js/js/offline'
import AnalyticsPlugin from './plugins/Analytics'
import StoragePlugin from './plugins/Storage'
import Firebase from './plugins/Firebase'
import App from './App'
import store from './store'
import settings from './settings'
import locales from './locales'
import routes from './routes'
import ServiceWorker from './ServiceWorker'
import { mapMutations } from 'vuex'
import * as types from './store/mutation-types'

const DEBUG = process.env.NODE_ENV !== 'production'

Offline.options = {
  checkOnLoad: false
}

Vue.use(Firebase, settings.firebase)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(AnalyticsPlugin)
Vue.use(StoragePlugin, settings.storage)
Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]))

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  Vue.config.lang = to.meta.lang

  next()
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created () {
    if (!DEBUG && navigator && 'serviceWorker' in navigator) {
      new ServiceWorker(this.$store)
    }

    Offline.on('up', () => {
      this.setOnline()
    })
    Offline.on('down', () => {
      this.setOffline()
    })
    Offline.check()
  },
  methods: {
    ...mapMutations({
      setOnline: types.SET_ONLINE,
      setOffline: types.SET_OFFLINE
    })
  }
})
