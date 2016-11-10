<template>
  <ul>
    <li><i class="fa fa-keyboard-o" aria-hidden="true"></i></i> &nbsp; {{ selected.name }}</li>
    <li v-for="keyboard in list" :keyboard="keyboard"><a v-on:click="setKeyboard(keyboard.code)"><i></i> {{ keyboard.name }}</a></li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'
import LanguageMixin from '../../mixins/LanguageMixin'

export default {
  name: 'keyboard-switcher',
  mixins: [LanguageMixin],
  data () {
    return {
      keyboards: [
        {
          code: 'qwertyus',
          name: 'QWERTY-US'
        },
        {
          code: 'qwertyes',
          name: 'QWERTY-ES'
        }
      ]
    }
  },
  computed: {
    keyboard () {
      return this.$store.state.options.keyboard
    },
    selected () {
      let keyboards = this.keyboards
      let keyboard = keyboards[0]

      keyboards.forEach(keyb => {
        if (keyb.code === this.keyboard) {
          keyboard = keyb
        }
      })

      return keyboard
    },
    list () {
      let response = []

      this.keyboards.forEach(keyb => {
        if (keyb.code !== this.keyboard) {
          response.push(keyb)
        }
      })

      return response
    }
  },
  methods: {
    ...mapMutations({
      'setKeyboard': types.OPTION_KEYBOARD
    })
  }
}
</script>

<style scoped>
ul {
  position: relative;
  z-index: 50;
  float: right;
  width: 140px;
  margin: 0;
  padding: 0;

  li {
    display: none;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    text-align: left;
    padding-left: 15px;
    height: 40px;
    line-height: 40px;

    &:first-child {
      margin-top: 15px;
      display: block;
    }

    a {
      display: block;
      text-decoration: none;
      color: #425D77;
    }
  }

  &:hover li {
    display: block;
    padding-left: 0;
    background: #417CB7;
    color: #fff;

    &:first-child {
      padding-left: 15px;
      background: #2c3e50;
    }

    a {
      padding-left: 15px;
      color: #fff;
      padding-left: 42px;
    }
  }
}
</style>