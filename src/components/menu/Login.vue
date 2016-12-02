<template>
  <div>
    <button class="button" v-if="!this.logged" :class="classObject" v-on:click="showPopup">{{ buttonText }}</button>
    <ul v-if="this.logged">
      <li><img height="25" width="25" :src="user.photoURL"> {{ user.displayName }}</li>
      <li><a v-on:click="logout"><i></i> {{ $t("login.logout") }}</a></li>
    </ul>
  </div>
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
      return this.$store.state.online
    },
    buttonText () {
      return this.online ? Vue.t('login.signIn') : Vue.t('login.offline')
    },
    classObject () {
      return {
        offline: !this.online
      }
    },
    user () {
      return this.$store.state.user
    },
    logged () {
      return this.online && !this.user.isAnonymous
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
      logIn: types.LOG_IN,
      showModal: types.SHOW_MODAL,
      notify: types.ADD_NOTIFICATION,
      logOut: types.LOG_OUT
    }),
    auth () {
      this.initialized = true

      Vue.$firebase.onAuthStateChanged((user) => {
        if (user) {
          this.logIn(user)
        } else {
          this.loginAnonymously()
        }
      })
    },
    loginAnonymously () {
      Vue.$firebase.signInAnonymously().catch((error) => {
        var errorCode = error.code

        if (errorCode === 'auth/operation-not-allowed') {
          console.error('You must enable Anonymous auth in the Firebase Console.')
        } else {
          console.error(error)
        }
      })
    },
    logout () {
      Vue.$firebase.signOut().then((result) => {
        this.notify({
          text: Vue.t('login.logoutSuccess')
        })
      })
    },
    showPopup () {
      this.showModal('login')
    }
  }
}
</script>

<style scoped>
div {
  float: right;
  position: relative;
  z-index: 50;
}

img {
    position: absolute;
    right: 0;
    height: 38px;
    width: 38px;
}

button {
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

ul {
  position: relative;
  z-index: 50;
  float: right;
  margin: 0 0 0 15px;
  padding: 0;

  li {
    display: none;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    text-align: left;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;

    &:first-child {
      margin-top: 15px;
      display: block;
      border: 1px solid #2c3e50;
      padding-right: 53px;
    }

    a {
      display: block;
      text-decoration: none;
      color: #425D77;
    }
  }

  &:hover li {
    display: block;
    padding-left: 0;
    background: #417CB7;
    color: #fff;

    &:first-child {
      padding-left: 15px;
      background: #2c3e50;
    }

    a {
      padding-left: 15px;
      color: #fff;
    }
  }
}
</style>