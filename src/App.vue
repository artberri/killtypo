<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <language-switcher></language-switcher>
        <h1><router-link :to="{ name: 'home-' + language }">KillTypo</router-link></h1>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LanguageMixin from './mixins/LanguageMixin'
import LanguageSwitcher from './components/LanguageSwitcher'

export default {
  name: 'app',
  mixins: [LanguageMixin],
  components: {
    LanguageSwitcher
  }
}
</script>

<style src="./styles/global.css"></style>
