<template>
  <div>
    <div v-show="!finished">
      <autocue></autocue>
      <keyboard></keyboard>
      <text-input></text-input>
    </div>
    <div v-show="finished">
      <h2>{{ $t("game.congrats") }}</h2>
    </div>
    <panel></panel>
    <div v-show="finished">
      <chart></chart>
      <router-link class="next button" :to="{ name: 'mode-' + language }">{{ $t("game.tryagain") }}</router-link>
    </div>
  </div>
</template>

<script>
import Autocue from '../components/Autocue'
import Keyboard from '../components/Keyboard'
import TextInput from '../components/TextInput'
import Panel from '../components/Panel'
import Chart from '../components/Chart'
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'user',
  mixins: [LanguageMixin],
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
    /* if (!from.name || from.name.indexOf('mode-') !== 0) {
      next({ name: 'home-' + Vue.config.lang })
    } else {
      next()
    } */

    next()
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
