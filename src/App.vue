<template>
  <div id="app">
    <header class="header">
      <div class="container">
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
  </div>
</template>

<script>
import LanguageMixin from './mixins/LanguageMixin'
import LanguageSwitcher from './components/LanguageSwitcher'
import MyFooter from './components/MyFooter'

export default {
  name: 'app',
  mixins: [LanguageMixin],
  components: {
    LanguageSwitcher,
    MyFooter
  }
}
</script>

<style src="./styles/global.css"></style>
