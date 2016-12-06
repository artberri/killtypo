import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

class FirebasePlugin {
  constructor (conf) {
    firebase.initializeApp(conf)

    this.TIMESTAMP = firebase.database.ServerValue.TIMESTAMP
    this.fb = firebase
  }

  getAuthProvider (provider) {
    if (provider === 'google') {
      return new firebase.auth.GoogleAuthProvider()
    }

    return null
  }

  onAuthStateChanged (callback) {
    this.fb.auth().onAuthStateChanged(callback)
  }

  signInAnonymously () {
    return this.fb.auth().signInAnonymously()
  }

  signInWithPopup (provider) {
    return this.fb.auth().signInWithPopup(provider)
  }

  signOut () {
    return this.fb.auth().signOut()
  }

  getUser (user) {
    let firebase = this.fb
    let db = firebase.database()

    return db.ref('users/' + user.uid)
  }
}

const install = function (Vue, conf) {
  if (!Vue.$firebase) {
    Vue.$firebase = new FirebasePlugin(conf)
  }
}

export default { install }
