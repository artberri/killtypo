<template>
  <div id="app">
    <notifications></notifications>
    <header class="header">
      <div class="container">
        <login></login>
        <keyboard-switcher></keyboard-switcher>
        <language-switcher></language-switcher>
        <h1>
          <router-link :to="{ name: 'home-' + language }">
            <img src="./assets/key.png" height="40" width="40"> K<span class="blue">ill</span>T<span class="blue">ypo</span>
          </router-link>
        </h1>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
    <modal v-if="showLoginModal" @close="closeModal('login')">
      <h3 slot="header">{{ $t("login.loginModalTitle") }}</h3>
      <p>{{ $t("login.loginModalContent") }}</p>
      <div slot="footer">
        <login-button></login-button>
      </div>
    </modal>
  </div>
</template>

<script>
import LanguageMixin from './mixins/LanguageMixin'
import Login from './components/menu/Login'
import LanguageSwitcher from './components/menu/LanguageSwitcher'
import KeyboardSwitcher from './components/menu/KeyboardSwitcher'
import MyFooter from './components/MyFooter'
import Modal from './components/Modal'
import LoginButton from './components/LoginButton'
import Notifications from './components/notifications/Notifications'
import { mapMutations } from 'vuex'
import * as types from './store/mutation-types'

export default {
  name: 'app',
  mixins: [LanguageMixin],
  components: {
    Login,
    LanguageSwitcher,
    KeyboardSwitcher,
    MyFooter,
    Notifications,
    Modal,
    LoginButton
  },
  computed: {
    showLoginModal () {
      return this.$store.state.online && this.$store.state.modals.login
    }
  },
  methods: {
    ...mapMutations({
      'closeModal': types.HIDE_MODAL
    })
  }
}
</script>

<style src="./styles/global.css"></style>
