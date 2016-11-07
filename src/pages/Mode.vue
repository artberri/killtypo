<template>
  <div class="container">
    <h2>{{ $t("mode.select") }}</h2>
    <div class="mode-buttons">
      <a v-on:click="setMode(2)" :class="classActive(2)">{{ $t("mode.random") }}</a>
      <a v-on:click="setMode(1)" :class="classActive(1)">{{ $t("mode.paste") }}</a>
    </div>
    <div>
      <textarea placeholder="Paste your text here" v-model="message" v-show="mode == 1"></textarea>
      <textarea v-model="randomText" v-show="mode == 2"></textarea>
    </div>
    <div class="error" v-show="showError()">
      {{ $t("mode.minError", { minWordLimit }) }}
    </div>
    <div class="next-container" v-show="showNext()">
      <label for="word-range" class="real-label">{{ $t("mode.trim", { wordLimit }) }}</label>
      <input id="word-range" type="range" :value="wordLimit" @input="updateWordLimit" :min="minWordLimit" :max="maxWordLimit">
      <br><br>
      <input id="remove-intros" v-on:change="updateRemoveLineBreaks" :checked="removeLineBreaks" type="checkbox" class="switch">
      <label for="remove-intros" class="switch-label"></label>
      <label for="remove-intros" class="real-label">{{ $t("mode.lineBreak") }}</label>
    </div>
    <a class="next button" v-on:click="play()" v-show="showNext()">{{ $t("mode.next") }}</a>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import * as types from '../store/mutation-types'
import settings from '../settings'
import quotes from '../quotes/'
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'mode',
  mixins: [LanguageMixin],
  data () {
    return {
      mode: 2,
      message: '',
      minWordLimit: settings.minWordLimit,
      maxWordLimit: settings.maxWordLimit
    }
  },
  computed: {
    ...mapState({
      wordLimit: state => state.options.wordLimit,
      removeLineBreaks: state => state.options.removeLineBreaks
    }),
    words () {
      return this.message.split(' ')
    },
    randomText () {
      return this.randomQuote()
    }
  },
  methods: {
    ...mapMutations({
      'setMessage': types.SET_MESSAGE,
      'resetGame': types.RESET_GAME,
      'setLetters': types.SET_LETTERS,
      'setWordLimit': types.OPTION_WORDLIMIT,
      'setRemoveLineBreaks': types.OPTION_REMOVELINEBREAKS
    }),

    updateWordLimit (e) {
      this.setWordLimit(e.target.value)
    },

    updateRemoveLineBreaks (e) {
      this.setRemoveLineBreaks(e.target.checked)
    },

    randomQuote () {
      let texts = quotes[this.language]

      return texts[Math.floor(Math.random() * texts.length)]
    },

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
      return this.mode === 2 || (this.mode > 0 && this.message.length > 0 && this.words.length >= settings.minWordLimit)
    },

    showError () {
      return this.mode > 0 && this.message.length > 0 && this.words.length < settings.minWordLimit
    },

    play () {
      let message = this.mode === 2 ? this.randomText : this.message
      let wordLimit = this.wordLimit

      if (this.wordLimit < settings.minWordLimit || this.wordLimit > settings.maxWordLimit) {
        wordLimit = settings.defaultWordLimit
      }

      if (this.removeLineBreaks) {
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

      this.$router.push({ name: 'game-' + this.language })
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
  height: 200px;
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
