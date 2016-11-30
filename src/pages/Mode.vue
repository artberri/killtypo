<template>
  <div class="container">
    <h2>{{ $t("mode.select") }}</h2>
    <div class="mode-buttons">
      <a @click="setMode(0)" :class="classActive(0)">{{ $t("mode.random") }}</a>
      <a @click="setMode(1)" :class="classActive(1)">{{ $t("mode.paste") }}</a>
    </div>
    <div>
      <textarea placeholder="Paste your text here" v-model="message" v-show="showPasteTextarea"></textarea>
      <textarea v-model="randomText" v-show="showRandomTextarea"></textarea>
      <div class="reload" :class="reloadClass">
        <button @click="randomQuote()">{{ $t("mode.reload") }} <i class="fa fa-refresh" aria-hidden="true"></i> </button>
      </div>
    </div>
    <div class="error" v-show="showError()">
      {{ $t("mode.minError", { minWordLimit }) }}
    </div>
    <div class="next-container" v-show="showNext()">
      <word-range></word-range>
      <br><br>
      <remove-intros></remove-intros>
    </div>
    <a class="next button" @click="play()" v-show="showNext()">{{ $t("mode.next") }}</a>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import * as types from '../store/mutation-types'
import settings from '../settings'
import quotes from '../quotes/'
import LanguageMixin from '../mixins/LanguageMixin'
import WordRange from '../components/mode/WordRange'
import RemoveIntros from '../components/mode/RemoveIntros'

const MODE_RANDOM = 0
const MODE_PASTE = 1

export default {
  name: 'mode',
  mixins: [LanguageMixin],
  components: {
    WordRange,
    RemoveIntros
  },
  data () {
    return {
      minWordLimit: settings.minWordLimit,
      maxWordLimit: settings.maxWordLimit,
      defaultWordLimit: settings.defaultWordLimit,
      message: '',
      randomText: ''
    }
  },
  computed: {
    ...mapState({
      wordLimit: state => state.options.wordLimit,
      removeLineBreaks: state => state.options.removeLineBreaks,
      mode: state => state.options.mode
    }),
    showRandomTextarea () {
      return this.mode === MODE_RANDOM
    },
    showPasteTextarea () {
      return this.mode === MODE_PASTE
    },
    words () {
      return this.message.split(' ')
    },
    reloadClass () {
      return {
        hide: this.mode === MODE_PASTE
      }
    }
  },
  mounted () {
    this.randomQuote()
  },
  methods: {
    ...mapMutations({
      'setMessage': types.SET_MESSAGE,
      'resetGame': types.RESET_GAME,
      'setLetters': types.SET_LETTERS,
      'setMode': types.OPTION_MODE
    }),

    randomQuote () {
      let texts = quotes[this.language]

      this.randomText = texts[Math.floor(Math.random() * texts.length)]
    },

    classActive (mode) {
      return {
        button: true,
        secondary: true,
        active: this.mode === mode
      }
    },

    showNext () {
      return this.mode === MODE_RANDOM || (this.mode > 0 && this.message.length > 0 && this.words.length >= this.minWordLimit)
    },

    showError () {
      return this.mode > 0 && this.message.length > 0 && this.words.length < this.minWordLimit
    },

    play () {
      let message = this.mode === MODE_RANDOM ? this.randomText : this.message
      let wordLimit = this.wordLimit

      if (this.wordLimit < this.minWordLimit || this.wordLimit > this.maxWordLimit) {
        wordLimit = this.defaultWordLimit
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

.reload {
  text-align: right;
  width: 634px;
  margin: 5px auto;

  button {
    background: transparent;
    border: 0;
  }

  &.hide {
    visibility: hidden;
  }
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
