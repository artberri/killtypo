import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const install = function (Vue, conf) {
  firebase.initializeApp(conf)
  Vue.$firebase = firebase
}

export default { install }
