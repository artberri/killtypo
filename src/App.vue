<template>
  <div id="app">
    <autocue></autocue>
    <keyboard></keyboard>
  </div>
</template>

<script>
import Autocue from './components/Autocue'
import Keyboard from './components/Keyboard'

export default {
  name: 'app',
  components: {
    Autocue,
    Keyboard
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
