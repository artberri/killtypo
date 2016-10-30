<template>
  <div>
    <div v-show="!finished">
      <autocue></autocue>
      <keyboard></keyboard>
      <text-input></text-input>
    </div>
    <div v-show="finished">
      <h2>Congrats!</h2>
    </div>
    <panel></panel>
    <div v-show="finished">
      <chart></chart>
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
      return !this.$store.state.game.finished
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
    if (from.name !== 'mode') {
      next({ name: 'home' })
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
</style>