<template>
  <ul>
    <li><i class="fa fa-language" aria-hidden="true"></i> &nbsp; {{ selected.name }}</li>
    <li v-for="lang in list" :lang="lang"><a v-on:click="setLanguage(lang.code)"><i></i> {{ lang.name }}</a></li>
  </ul>
</template>

<script>
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'language-switcher',
  mixins: [LanguageMixin],
  data () {
    return {
      languages: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'es',
          name: 'Español'
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
    setLanguage (language) {
      let name = this.$route.name

      name = name.substr(0, name.lastIndexOf('-')) + '-' + language
      this.$router.push({ name: name })
    }
  }
}
</script>

<style scoped>
ul {
  position: relative;
  z-index: 5;
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
    background: #425D77;
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