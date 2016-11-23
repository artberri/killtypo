import Vue from 'vue'
import * as types from './store/mutation-types'

export default class {
  constructor (store) {
    this.$store = store
    navigator.serviceWorker.register('/service-worker.js')
    this.addEventListeners()
  }

  addEventListeners () {
    let self = this

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      navigator.serviceWorker.controller.addEventListener('statechange', function () {
        self.stateChange(this.state)
      })
    })
  }

  stateChange (state) {
    if (state === 'activated') {
      this.$store.commit(types.ADD_NOTIFICATION, {
        text: Vue.t('notifications.offlineReady'),
        delay: 5000
      })
    }
  }
}
