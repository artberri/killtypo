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

      /* if (state.online) {
        let firebase = Vue.$firebase
        let db = firebase.database()
        let ref = db.ref('users/' + user.uid)

        ref.once('value', snapshot => {
          // Login/Register user
          let newUser = snapshot.val()

          if (newUser) {
            newUser.lastLoginAt = firebase.database.ServerValue.TIMESTAMP
            newUser.displayName = user.displayName || newUser.displayName
            newUser.photoURL = user.photoURL || newUser.photoURL
            newUser.email = user.email || newUser.email
          } else {
            newUser = {
              displayName: user.displayName,
              photoURL: user.photoURL,
              email: user.email,
              registeredAt: firebase.database.ServerValue.TIMESTAMP,
              lastLoginAt: firebase.database.ServerValue.TIMESTAMP
            }
          }

          ref.set(newUser)
          this.logIn(newUser)
        })
      } else {

      } */

      result = clone(result)
      console.log(result)
      console.log(mark)
    }
  })
}
