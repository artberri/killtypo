<template>
  <!-- Keyboard Based on https://codepen.io/attilahajzer/pen/kydqJ -->
  <div class="keyboard">
    <key v-for="keyobj in keys" :keyobj="keyobj"></key>
  </div>
</template>

<script>
import Key from './Key'
import keyboard from '../keyboards/qwerty.json'

export default {
  name: 'keyboard',
  components: {
    Key
  },
  data () {
    return {
      keys: keyboard.keys,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.keyboard {
  box-sizing: content-box;
  width: 620px;
  height: 210px;
  margin: 0px auto;
  padding: 30px;
  color: #444;
}

</style>
