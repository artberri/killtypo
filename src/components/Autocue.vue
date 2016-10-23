<template>
  <div class="autocue">
    <secret-input></secret-input>
    <blinking-cursor></blinking-cursor><letter v-for="letter in lettersWrong" :letter="letter" :isWrong="true"></letter><letter v-for="letter in lettersLeft" :letter="letter"></letter>
  </div>
</template>

<script>
import BlinkingCursor from './BlinkingCursor'
import Letter from './Letter'
import SecretInput from './SecretInput'

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
    Letter,
    SecretInput
  },
  computed: {
    letters () {
      let content = this.$store.state.autocue.content
      let message = this.$store.state.autocue.message
      let response = {
        wrong: '',
        left: message
      }
      let wrongAmount

      // Letters Left
      for (let i = 0; i < content.length; i++) {
        if (content[i] !== message[i]) {
          break
        }

        response.left = response.left.substring(1)
      }

      // Letters Wrong
      wrongAmount = content.length - (message.length - response.left.length)
      if (wrongAmount > 0) {
        response.wrong = response.left.substring(0, wrongAmount)
        response.left = response.left.substring(wrongAmount)
      } else {
        response.wrong = ''
      }

      // Minimize printed text
      response.left = response.left.substring(0, 50)

      return response
    },
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
          console.log(message.substring(1))
          this.$store.commit('setNotWritten', message.substring(1))
        }
      }
    }
  }
}
</script>

<style scoped>
.autocue {
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
</style>
