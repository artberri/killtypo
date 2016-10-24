<template>
  <div>
    <autocue></autocue>
    <keyboard></keyboard>
    <text-input></text-input>
    <clock></clock>
  </div>
</template>

<script>
import Autocue from '../components/Autocue'
import Keyboard from '../components/Keyboard'
import TextInput from '../components/TextInput'
import Clock from '../components/Clock'

export default {
  name: 'game',
  components: {
    Autocue,
    Keyboard,
    TextInput,
    Clock
  }
}
</script>
