<template>
  <div>
    <autocue></autocue>
    <keyboard></keyboard>
    <text-input></text-input>
  </div>
</template>

<script>
import Autocue from './Autocue'
import Keyboard from './Keyboard'
import TextInput from './TextInput'

export default {
  name: 'game',
  components: {
    Autocue,
    Keyboard,
    TextInput
  }
}
</script>
