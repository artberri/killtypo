<template>
  <modal v-if="showRegisterModal" @close="closeModal('register')">
    <h3 slot="header">{{ $t("register.hello", { name: user.displayName }) }}</h3>
    <p>{{ $t("register.intro") }}</p>
    <form class="pure-form pure-form-stacked align-left">
        <fieldset>
            <label for="email">{{ $t("register.email") }}</label>
            <input class="pure-input-1" id="email" readonly type="email" :value="user.email">

            <label for="username">{{ $t("register.username") }}</label>
            <input class="pure-input-1" id="username" type="text" v-model="username">
            <small :class="usernameErrorClass">{{ $t("register.usernameExplanation") }}</small>
            <br><br>

            <small v-html="agreeText"></small>

            <button :disabled="disabled" type="submit" @click="register">{{ $t("register.action") }}</button>
        </fieldset>
    </form>
  </modal>
</template>

<script>
import Vue from 'vue'
import LanguageMixin from '../../mixins/LanguageMixin'
import Modal from '../Modal'
import { mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'

export default {
  name: 'register-modal',
  mixins: [LanguageMixin],
  data () {
    return {
      username: ''
    }
  },
  components: {
    Modal
  },
  computed: {
    agreeText () {
      return Vue.t('register.agree', {
        privacy: '<a target="_blank" href="#" onclick="window.open(\'/privacy\',\'_blank\')">' + Vue.t('tos.privacyText') + '</a>',
        cookies: '<a target="_blank" href="#" onclick="window.open(\'/cookies\',\'_blank\')">' + Vue.t('tos.cookiesText') + '</a>'
      })
    },
    user () {
      return this.$store.state.user.newUser
    },
    showRegisterModal () {
      return this.$store.state.online.status && this.$store.state.modals.register
    },
    usernameErrorClass () {
      return {
        error: !this.validateUsername(this.username)
      }
    },
    disabled () {
      return !(this.validateUsername(this.username))
    }
  },
  methods: {
    ...mapMutations({
      logIn: types.LOG_IN,
      closeModal: types.HIDE_MODAL,
      notify: types.ADD_NOTIFICATION
    }),
    register () {
      let username = this.username
      let user = this.user

      if (this.validateUsername(username)) {
        let ref = Vue.$firebase.saveUsername(user, username)

        ref.then(() => {
          user.username = username

          Vue.$firebase.registerUser(user).then(() => {
            this.logIn(user)
            this.closeModal('register')
          }).catch(() => {
            this.notify({
              text: Vue.t('register.usernameError'),
              timeout: 5000,
              type: 'error'
            })
          })
        }).catch(() => {
          this.notify({
            text: Vue.t('register.usernameError'),
            timeout: 5000,
            type: 'error'
          })
        })
      }
    },
    validateUsername (username) {
      return !!(username.length >= 5 && username.length <= 15 && username.match(/^[a-z][a-z0-9]*([._-][a-z0-9]+)*$/))
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
  margin: 15px 0;
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
  color: #fff;

  &[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }
}

.error {
  color: #e30000;
}
</style>
