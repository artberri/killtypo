<template>
  <div>
    <h2>Select Mode</h2>
    <div class="mode-buttons">
      <a v-on:click="setMode(1)" :class="classActive(1)">Paste Your Own Text</a>
      <a v-on:click="setMode(2)" :class="classActive(2)">Select Piece of News</a>
    </div>
    <div>
      <textarea placeholder="Paste your text here" v-model="message" v-show="mode == 1"></textarea>
    </div>
    <div class="error" v-show="showError()">
      You must paste 40 words or more.
    </div>
    <div class="next-container" v-show="showNext()">
      <label for="word-range" class="real-label">Trim text to {{ wordLimit }} words</label>
      <input id="word-range" type="range" v-model="wordLimit" min="40" max="1000">
      <br><br>
      <input id="remove-intros" v-model="removeBreakLines" type="checkbox" class="switch">
      <label for="remove-intros" class="switch-label"></label>
      <label for="remove-intros" class="real-label">Remove line breaks</label>
    </div>
    <a class="next button" v-on:click="play()" v-show="showNext()">Next</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'mode',
  data () {
    return {
      mode: 0,
      message: '',
      removeBreakLines: true,
      wordLimit: 100
    }
  },
  computed: {
    words () {
      return this.message.split(' ')
    }
  },
  methods: {
    ...mapMutations({
      'setMessage': types.SET_MESSAGE,
      'resetGame': types.RESET_GAME,
      'setLetters': types.SET_LETTERS
    }),

    setMode (mode) {
      this.mode = mode
    },

    classActive (mode) {
      return {
        button: true,
        secondary: true,
        active: this.mode === mode
      }
    },

    showNext () {
      return this.mode > 0 && this.message.length > 0 && this.words.length >= 40
    },

    showError () {
      return this.mode > 0 && this.message.length > 0 && this.words.length < 40
    },

    play () {
      let message = this.message
      let wordLimit = this.wordLimit

      if (this.wordLimit < 40 || this.wordLimit > 1000) {
        wordLimit = 100
      }

      if (this.removeBreakLines) {
        message = message.replace(/(\r\n|\n|\r)/gm, '')
      }

      message = message.split(' ').splice(0, wordLimit).join(' ')

      this.resetGame()
      this.setMessage(message)
      this.setLetters({
        wrong: '',
        left: message,
        nextLetter: message.slice(0, 1)
      })
      this.$router.push({ path: 'game' })
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 3rem;
}

.mode-buttons {
  margin-bottom: 30px;
}

.button {
  margin: 0 20px;
  line-height: 70px;
}

textarea {
  margin: auto;
  width: 634px;
  height: 300px;
}

.next-container {
  margin: 30px auto 0;
  width: 634px;
}

.real-label {
  font-size: 1.6rem;
}

.next {
  margin-top: 30px;
}

.error {
  color: #D8000C;
  background-color: #FFBABA;
  margin: 10px auto;
  padding:12px;
  width: 634px;
}
</style>