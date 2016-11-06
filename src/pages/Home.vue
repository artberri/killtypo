<template>
  <div>
    <div class="container">
      <div id="logo">
        <img src="../assets/logo.png" height="150" width="150">
      </div>
      <h2 class="home-claim">{{ $t("home.claim") }}</h2>
      <p class="home-text">
        {{ $t("home.sentence") }}
      </p>
      <router-link class="home-cta button" :to="{ name: 'mode-' + language }">{{ $t("home.cta") }}</router-link>
    </div>
  </div>
</template>

<script>
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'home',
  mixins: [LanguageMixin]
}
</script>
