<template>
  <div class="textinput">
    <textarea id="realinput"
      v-on:keyup="pressKey"
      v-on:scroll="scrollmaster"
      v-on:focus="focus"
      v-on:blur="blur"
      v-on:paste="paste"
      placeholder="Click here to start writing..."
      :class="{ full: hasContent }"
    ></textarea>
    <textarea id="backinput" class="back" v-model="message"></textarea>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'text-input',
  data () {
    return {
      message: this.$store.state.autocue.message
    }
  },
  computed: {
    hasContent () {
      return this.$store.state.autocue.content.length > 0
    }
  },
  methods: {
    ...mapActions([
      'pressKey'
    ]),

    ...mapMutations({
      'startWritting': types.START_WRITTING,
      'stopWritting': types.STOP_WRITTING,
      'startGame': types.START_GAME
    }),

    scrollmaster (event) {
      this.$el.querySelector('#backinput').scrollTop = event.target.scrollTop
    },

    focus () {
      this.startGame()
      this.startWritting()
    },

    blur () {
      this.stopWritting()
    },

    paste (event) {
      event.preventDefault()

      return false
    }
  }
}
</script>

<style scoped>
.textinput {
  position: relative;
  display: block;
  height: 200px;
  width: 620px;
  margin: auto;
}

textarea {
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 20px;
  font-size: 1.1em;
  border: 2px solid #eee;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background: #fff;
  overflow-y: scroll;
}

textarea.full,
textarea:focus {
  background: transparent;
}

textarea.back {
  z-index: 0;
  color: #ddd;
}

::placeholder {
  color: #bbb;
  text-transform: uppercase;
  text-align: center;
  line-height: 160px;
  height: 100%;
  font-size: 1.8rem;
  background: #fff;
}

:focus::placeholder {
  color: transparent;
  background: transparent;
}

</style>
