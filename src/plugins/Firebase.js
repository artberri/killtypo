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
    let db = this.fb.database()

    return db.ref('users/' + user.uid)
  }

  saveUsername (user, username) {
    let db = this.fb.database()

    return db.ref('usernames/' + username).set(user.uid)
  }

  registerUser (user) {
    let db = this.fb.database()

    user.lastLoginAt = this.TIMESTAMP
    user.registeredAt = this.TIMESTAMP

    return db.ref('users/' + user.uid).set(user)
  }
}

const install = function (Vue, conf) {
  if (!Vue.$firebase) {
    Vue.$firebase = new FirebasePlugin(conf)
  }
}

export default { install }
