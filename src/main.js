/* eslint-disable no-new */

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import Home from './components/Home'
import Game from './components/Game'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/game',
    component: Game,
    name: 'game'
  }
]

const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
