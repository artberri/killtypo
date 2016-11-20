<template>
  <div>
    <div class="not-found">
      <h2>{{ $t("notFound.notFound") }}</h2>
      <h3>{{ $t("notFound.pageNotFound") }}</h3>
      <router-link :to="{ name: 'home-' + language }" class="button">
        {{ $t("notFound.goHome") }}
      </router-link>
    </div>
  </div>
</template>

<script>
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'not-found',
  mixins: [LanguageMixin]
}
</script>

<style scoped>
.not-found {
  background: url(/static/404.gif) no-repeat center center fixed;
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
