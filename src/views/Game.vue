<template>
  <div>
    <div v-show="!finished">
      <autocue></autocue>
      <keyboard></keyboard>
      <text-input></text-input>
    </div>
    <div v-show="finished">
      <h2 v-t="{path: 'game.congrats', locale: $route.meta.lang}"></h2>
    </div>
    <panel></panel>
    <div v-show="finished">
      <chart></chart>
      <router-link class="next button" :to="{ name: 'mode-' + $route.meta.lang }" v-t="{path: 'game.tryagain', locale: $route.meta.lang}"></router-link>
    </div>
  </div>
</template>

<script>
import Autocue from '../components/Autocue'
import Keyboard from '../components/Keyboard'
import TextInput from '../components/TextInput'
import Panel from '../components/Panel'
import Chart from '../components/Chart'

export default {
  name: 'game',
  computed: {
    finished () {
      return this.$store.state.game.finished
    }
  },
  components: {
    Autocue,
    Keyboard,
    TextInput,
    Panel,
    Chart
  },
  beforeRouteEnter (to, from, next) {
    if (!from.name || from.name.indexOf('mode-') !== 0) {
      next({ name: 'home-' + to.meta.lang })
    } else {
      next()
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 3rem;
}

.next {
  margin-top: 30px;
  line-height: 70px;
}
</style>
