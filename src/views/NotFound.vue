<template>
  <div>
    <div class="not-found">
      <h2 v-t="{path: 'notFound.notFound', locale: $route.meta.lang}"></h2>
      <h3 v-t="{path: 'notFound.pageNotFound', locale: $route.meta.lang}"></h3>
      <router-link :to="{ name: 'home-' + $route.meta.lang }" class="button" v-t="{path: 'notFound.goHome', locale: $route.meta.lang}"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found'
}
</script>

<style scoped>
.not-found {
  background: url(/404.gif) no-repeat center center fixed;
  background-size: cover;
  height: 500px;
  margin-bottom: -70px;
}

h2{
  font-size: 16em;
  margin: 0;
  color: rgba(255,255,255, 0.7);
  margin-bottom:0px;
}

h3{
  font-size: 1.7em;
  margin: .2em .5em;
  color: rgba(255,255,255, 0.6);
}

.button {
  margin: 20px 20px;
  line-height: 70px;
}

</style>
