// import Vue from 'vue'
import * as types from '../mutation-types'

function clone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

export default function firebasePlugin (store) {
  store.subscribe((mutation, state) => {
    if (mutation.type === types.FINISH_GAME) {
      let user = state.user
      let mark = {
        wpm: store.getters.wpm,
        cpm: store.getters.cpm,
        accuracy: store.getters.accuracy,
        finalTime: store.getters.finalTime
      }
      let result = {
        mark: clone(mark),
        text: state.autocue.message,
        softs: state.game.softs,
        startTime: state.game.startTime,
        wrong: state.game.wrong
      }
      mark.user = user.uid
      mark.userName = user.displayName
      mark.isAnonymous = user.isAnonymous

      if (state.online) {

      } else {

      }
      result = clone(result)
      console.log(result)
      console.log(mark)
    }
  })
}
