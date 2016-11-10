<template>
  <!-- Keyboard Based on https://codepen.io/attilahajzer/pen/kydqJ -->
  <div class="keyboard">
    <key v-for="keyobj in keys" :keyobj="keyobj"></key>
  </div>
</template>

<script>
import Key from './keyboard/Key'
import keyboards from '../keyboards/'

export default {
  name: 'keyboard',
  components: {
    Key
  },
  computed: {
    keys () {
      let keyboard = this.$store.state.options.keyboard

      return keyboards[keyboard].keys
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
