import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

class FirebasePlugin {
  constructor (conf) {
    firebase.initializeApp(conf)
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

  updateUser (user, onErrorCallback) {
    let firebase = this.fb
    let db = firebase.database()
    let ref = db.ref('users/' + user.uid)

    ref.once('value', snapshot => {
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
    }, onErrorCallback)
  }
}

const install = function (Vue, conf) {
  if (!Vue.$firebase) {
    Vue.$firebase = new FirebasePlugin(conf)
  }
}

export default { install }
