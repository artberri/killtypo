<template>
  <div>
    <div class="container">
      <div id="logo">
        <router-link :to="{ name: 'home' }"><img src="../assets/logo.png" height="150" width="150"></router-link>
      </div>
      <h2 class="home-claim">Practice Typing And Get Fun</h2>
      <p class="home-text">
        KillTypo is a training tool for typing. You will be able to practice and evaluate your self by writting real news or your own texts.
      </p>
      <router-link class="home-cta button" :to="{ name: 'game' }">Start Writting</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
    /* this.$http.get('http://www.20minutos.es/rss/').then((response) => {
      // success callback
    }, (response) => {
      // error callback
    }) */
  }
}
</script>
