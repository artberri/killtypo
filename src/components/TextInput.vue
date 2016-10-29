<template>
  <div class="textinput">
    <textarea id="realinput"
      v-on:keyup="pressKey"
      v-on:scroll="scrollmaster"
      v-on:focus="focus"
      v-on:blur="blur"
      placeholder="Click here to start writing..."
      :class="{ full: hasContent }"
    ></textarea>
    <textarea id="backinput" class="back">{{ message }}</textarea>
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
      'startClock',
      'pressKey'
    ]),

    ...mapMutations({
      'startWritting': types.START_WRITTING,
      'stopWritting': types.STOP_WRITTING
    }),

    scrollmaster (event) {
      this.$el.querySelector('#backinput').scrollTop = event.target.scrollTop
    },

    focus () {
      this.startWritting()
    },

    blur () {
      this.stopWritting()
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
}

:focus::placeholder {
   color: transparent;
}

</style>
