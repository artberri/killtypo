<template>
  <div>
    <label for="word-range" class="real-label" v-t="{path: 'mode.trim', locale: $route.meta.lang, args: { wordLimit }}"></label>
    <input id="word-range" type="range" :value="wordLimit" @input="updateWordLimit" :min="minWordLimit" :max="maxWordLimit">
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types'
import settings from '../../settings'

export default {
  name: 'word-range',
  data () {
    return {
      minWordLimit: settings.minWordLimit,
      maxWordLimit: settings.maxWordLimit
    }
  },
  computed: {
    ...mapState({
      wordLimit: state => state.options.wordLimit
    })
  },
  methods: {
    ...mapMutations({
      'setWordLimit': types.OPTION_WORDLIMIT
    }),

    updateWordLimit (e) {
      this.setWordLimit(e.target.value)
    }
  }
}
</script>
