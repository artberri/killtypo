/* eslint-disable no-new */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './App'
import store from './store'
import locales from './locales'
import routes from './routes'
import ServiceWorker from './ServiceWorker'

const DEBUG = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)
Vue.use(VueI18n)
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
  }
})
