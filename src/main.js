/* eslint-disable no-new */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './App'
import store from './store'
import locales from './locales/'
import Home from './pages/Home'
import Game from './pages/Game'
import Mode from './pages/Mode'

const DEBUG = process.env.NODE_ENV !== 'production'

if (!DEBUG && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

Vue.use(VueRouter)
Vue.use(VueI18n)
Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]))

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home-en',
    meta: {
      lang: 'en'
    }
  },
  {
    path: '/game',
    component: Game,
    name: 'game-en',
    meta: {
      lang: 'en'
    }
  },
  {
    path: '/mode',
    component: Mode,
    name: 'mode-en',
    meta: {
      lang: 'en'
    }
  },

  {
    path: '/es',
    component: Home,
    name: 'home-es',
    meta: {
      lang: 'es'
    }
  },
  {
    path: '/es/juego',
    component: Game,
    name: 'game-es',
    meta: {
      lang: 'es'
    }
  },
  {
    path: '/es/modo',
    component: Mode,
    name: 'mode-es',
    meta: {
      lang: 'es'
    }
  }
]

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
  components: { App }
})
