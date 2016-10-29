<template>
  <div>
    <autocue></autocue>
    <keyboard></keyboard>
    <text-input></text-input>
    <panel></panel>
  </div>
</template>

<script>
import Autocue from '../components/Autocue'
import Keyboard from '../components/Keyboard'
import TextInput from '../components/TextInput'
import Panel from '../components/Panel'

export default {
  name: 'game',
  components: {
    Autocue,
    Keyboard,
    TextInput,
    Panel
  },
  beforeRouteEnter (to, from, next) {
    console.log(from)

    if (from.name !== 'mode') {
      next({ name: 'home' })
    } else {
      next()
    }
  }
}
</script>
