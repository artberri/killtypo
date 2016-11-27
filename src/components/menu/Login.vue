<template>
  <button class="button">Sign in</button>
</template>

<script>
import Vue from 'vue'
import LanguageMixin from '../../mixins/LanguageMixin'

export default {
  name: 'login',
  mixins: [LanguageMixin],
  beforeMount () {
    this.auth()

    var connectedRef = Vue.$firebase.database().ref('.info/connected')
    connectedRef.on('value', function (snap) {
      if (snap.val() === true) {
        console.log('connected')
      } else {
        console.log('not connected')
      }
    })
  },
  computed: {

  },
  methods: {
    auth () {
      /* let firstTime = true

      Vue.$firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous
          var uid = user.uid
          console.log(isAnonymous)
          console.log(uid)
        } else {
          if (firstTime) {
            firstTime = false
            this.loginAnonymously()
            console.log('first login')
          } else {
            console.log('sign out')
          }
        }
      }) */
    },
    loginAnonymously () {
      Vue.$firebase.auth().signInAnonymously().catch((error) => {
        var errorCode = error.code

        if (errorCode === 'auth/operation-not-allowed') {
          console.error('You must enable Anonymous auth in the Firebase Console.')
        } else {
          console.error(error)
        }
      })
    },
    logout () {
      Vue.$firebase.auth().signOut()
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  z-index: 50;
  float: right;
  width: 140px;
  margin: 15px 0 0 15px;
  padding: 0;
  display: block;
  text-transform: uppercase;
  background: #2c3e50;
  cursor: pointer;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border: 0;
  font-size: 1.1em;
}
</style>