// import Vue from 'vue'
import * as types from '../mutation-types'

export default function firebasePlugin (store) {
  store.subscribe((mutation, state) => {
    if (mutation.type === types.FINISH_GAME) {
      console.log(state)
    }
  })
}
