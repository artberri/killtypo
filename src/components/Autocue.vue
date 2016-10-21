<template>
  <div class="autocue">
    <blinking-cursor></blinking-cursor>
    <letter v-for="letter in letters" :letter="letter"></letter>
  </div>
</template>

<script>
import BlinkingCursor from './BlinkingCursor'
import Letter from './Letter'

export default {
  name: 'autocue',
  components: {
    BlinkingCursor,
    Letter
  },
  data () {
    return {
      message: this.$store.state.autocue.notWritten
    }
  },
  computed: {
    letters () {
      return this.message.split('')
    }
  }
}
</script>

<style scoped>
.autocue {
  margin: 0 auto;
  width: 800px;
  height: 70px;
  line-height: 70px;
  font-size: 40px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-family: "Times New Roman", Times, serif;
}
</style>
