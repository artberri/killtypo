<template>
  <button class="button" :class="classObject">{{ buttonText }}</button>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'
import LanguageMixin from '../../mixins/LanguageMixin'

export default {
  name: 'login',
  mixins: [LanguageMixin],
  data () {
    return {
      initialized: false
    }
  },
  computed: {
    online () {
      return this.$root.online
    },
    buttonText () {
      return this.online ? Vue.t('login.signIn') : Vue.t('login.offline')
    },
    classObject () {
      return {
        offline: !this.online
      }
    }
  },
  beforeMount () {
    if (this.online) {
      this.auth()
    }
  },
  watch: {
    online (value) {
      if (value && !this.initialized) {
        this.auth()
      }
    }
  },
  methods: {
    ...mapMutations({
      'logIn': types.LOG_IN
    }),
    auth () {
      let firstTime = true

      this.initialized = true

      Vue.$firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.logIn(user)
        } else {
          if (firstTime) {
            firstTime = false
            this.loginAnonymously()
          } else {
            console.log('sign out')
          }
        }
      })
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

  &.offline {
    background: transparent;
    color: #888;
    cursor: default;
    font-size: 0.9em;
    transform: none;
    box-shadow: none;
  }
}
</style>