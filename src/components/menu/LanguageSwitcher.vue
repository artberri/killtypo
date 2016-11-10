<template>
  <ul>
    <li><i class="fa fa-language" aria-hidden="true"></i> &nbsp; {{ selected.name }}</li>
    <li v-for="lang in list" :lang="lang"><a v-on:click="setLanguage(lang)"><i></i> {{ lang.name }}</a></li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import * as types from '../../store/mutation-types'
import LanguageMixin from '../../mixins/LanguageMixin'

export default {
  name: 'language-switcher',
  mixins: [LanguageMixin],
  data () {
    return {
      languages: [
        {
          code: 'en',
          name: 'English',
          keyboard: 'qwertyus'
        },
        {
          code: 'es',
          name: 'Español',
          keyboard: 'qwertyes'
        }
      ]
    }
  },
  computed: {
    selected () {
      let langs = this.languages
      let language = langs[0]

      langs.forEach(lang => {
        if (lang.code === this.language) {
          language = lang
        }
      })

      return language
    },
    list () {
      let response = []

      this.languages.forEach(lang => {
        if (lang.code !== this.language) {
          response.push(lang)
        }
      })

      return response
    }
  },
  methods: {
    ...mapMutations({
      'setKeyboard': types.OPTION_KEYBOARD
    }),
    setLanguage (language) {
      let name = this.$route.name

      name = name.substr(0, name.lastIndexOf('-')) + '-' + language.code
      this.$router.push({ name: name })
      this.setKeyboard(language.keyboard)
    }
  }
}
</script>

<style scoped>
ul {
  position: relative;
  z-index: 50;
  float: right;
  width: 120px;
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