<template>
  <div id="app">
    <notifications></notifications>
    <header class="header">
      <div class="container">
        <keyboard-switcher></keyboard-switcher>
        <language-switcher></language-switcher>
        <h1>
          <router-link :to="{ name: 'home-' + $route.meta.lang }">
            <img src="./assets/key.png" height="40" width="40"> K<span class="blue">ill</span>T<span class="blue">ypo</span>
          </router-link>
        </h1>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import LanguageSwitcher from './components/menu/LanguageSwitcher'
import KeyboardSwitcher from './components/menu/KeyboardSwitcher'
import MyFooter from './components/MyFooter'
import Notifications from './components/notifications/Notifications'

export default {
  name: 'app',
  components: {
    LanguageSwitcher,
    KeyboardSwitcher,
    MyFooter,
    Notifications
  }
}
</script>
