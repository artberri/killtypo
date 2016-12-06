<template>
  <button @click="authenticate">
    {{ $t("login.loginGoogle") }}
  </button>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import * as types from '../store/mutation-types'
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'login-button',
  mixins: [LanguageMixin],
  methods: {
    ...mapMutations({
      logOut: types.LOG_OUT,
      hideModal: types.HIDE_MODAL,
      notify: types.ADD_NOTIFICATION
    }),
    authenticate () {
      let firebase = Vue.$firebase
      let provider = firebase.getAuthProvider('google')

      firebase.signInWithPopup(provider).then(result => {
        this.hideModal('login')
      }).catch(() => {
        this.logOut()
        this.notify({
          text: Vue.t('notifications.loginError'),
          timeout: false,
          type: 'error'
        })
      })
    }
  }
}
</script>

<style scoped>
button {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
  background: #DD4B39;
}
button:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
button:focus {
  outline: none;
}
button:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}

button:hover,
button:focus {
  background: #E74B37;
}

</style>
