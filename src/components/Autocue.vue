<template>
  <div class="autocue">
    <blinking-cursor></blinking-cursor><letter v-for="letter in lettersWrong" :letter="letter" :isWrong="true"></letter><letter v-for="letter in lettersLeft" :letter="letter"></letter>
    <div class="mask"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlinkingCursor from './autoclue/BlinkingCursor'
import Letter from './autoclue/Letter'

export default {
  name: 'autocue',
  data () {
    return {
      letters: {
        wrong: '',
        left: ''
      }
    }
  },
  components: {
    BlinkingCursor,
    Letter
  },
  computed: {
    ...mapGetters({
      letters: 'autocueLetters'
    }),
    lettersLeft () {
      return this.letters.left.split('')
    },
    lettersWrong () {
      return this.letters.wrong.split('')
    }
  },
  methods: {
    checkKey (input, message) {
      if (message.length > 0 && input.length > 0) {
        if (message[0] === input[input.length - 1]) {
          this.$store.commit('setNotWritten', message.substring(1))
        }
      }
    }
  }
}
</script>

<style scoped>
.autocue {
  position: relative;
  margin: 0 auto;
  text-align: left;
  width: 616px;
  height: 70px;
  line-height: 70px;
  font-size: 40px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-family: "Times New Roman", Times, serif;
  overflow: hidden;
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 70px;
  z-index: 5;
  background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}
</style>
