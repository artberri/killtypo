<template>
  <div class="container align-left">
    <div class="pure-g">
      <div class="pure-u-1">
        <div class="tos" v-html="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import LanguageMixin from '../mixins/LanguageMixin'

export default {
  name: 'privacy',
  mixins: [LanguageMixin],
  computed: {
    text () {
      return Vue.t('tos.privacy').join('\n')
    }
  }
}
</script>

<style scoped>

</style>
