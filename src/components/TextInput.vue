<template>
  <div class="textinput">
    <textarea id="realinput"
      v-on:keyup="keypressed"
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
    keypressed (event) {
      this.$store.commit(types.SET_LASTKEY_EVENT, event)
    },

    scrollmaster (event) {
      this.$el.querySelector('#backinput').scrollTop = event.target.scrollTop
    },

    focus () {
      this.$store.commit(types.START_WRITTING)
    },

    blur () {
      this.$store.commit(types.STOP_WRITTING)
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
  outline: none;
  background: transparent;
}

textarea.back {
  z-index: 0;
  color: #ddd;
}

:focus::-webkit-input-placeholder {
   color: transparent;
}

:focus:-moz-placeholder { /* Firefox 18- */
   color: transparent;
}

:focus::-moz-placeholder {  /* Firefox 19+ */
   color: transparent;
}

:focus:-ms-input-placeholder {
   color: transparent;
}
</style>
