<template>
  <div :class="classObject">
    <blinking-cursor></blinking-cursor><letter v-for="letter in lettersWrong" :letter="letter" :isWrong="true"></letter><letter v-for="letter in lettersLeft" :letter="letter"></letter>
    <div class="mask"></div>
  </div>
</template>

<script>
import BlinkingCursor from './autoclue/BlinkingCursor'
import Letter from './autoclue/Letter'

let lastErrorCount = 0

export default {
  name: 'autocue',
  data () {
    return {
      isError: false
    }
  },
  components: {
    BlinkingCursor,
    Letter
  },
  computed: {
    letters () {
      return this.$store.state.autocue.letters
    },
    lettersLeft () {
      return this.prepareAutocue(this.letters.left)
    },
    lettersWrong () {
      return this.prepareAutocue(this.letters.wrong)
    },
    classObject () {
      return {
        autocue: true,
        error: this.isError
      }
    }
  },
  watch: {
    lettersWrong: function (val) {
      if (val.length > lastErrorCount) {
        this.isError = true
        setTimeout(() => {
          this.isError = false
        }, 200)
      }

      lastErrorCount = val.length
    }
  },
  methods: {
    prepareAutocue (text) {
      text = text.replace(/(\r\n|\n|\r)/gm, '⏎')

      return text.split('')
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

  &.error {
    animation-name: autocue-error;
    animation-duration: 200ms;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
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

@keyframes "autocue-error" {
    0% {
        background-color: #fff;
        opacity: 1;
    }
    22% {
        background-color: #fff;
    }
    77% {
        background-color: #F59F9F;
    }
    100% {
        background-color: #fff;
    }
}

</style>
