<template>
  <div>
    <router-link :to="{ name: 'game' }">Game</router-link>
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
