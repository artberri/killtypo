<template>
  <div>
    <input id="remove-intros" v-on:change="updateRemoveLineBreaks" :checked="removeLineBreaks" type="checkbox" class="switch">
    <label for="remove-intros" class="switch-label"></label>
    <label for="remove-intros" class="real-label" v-t="{path: 'mode.lineBreak', locale: $route.meta.lang}"></label>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types'

export default {
  name: 'remove-intros',
  computed: {
    ...mapState({
      removeLineBreaks: state => state.options.removeLineBreaks
    })
  },
  methods: {
    ...mapMutations({
      'setRemoveLineBreaks': types.OPTION_REMOVELINEBREAKS
    }),

    updateRemoveLineBreaks (e) {
      this.setRemoveLineBreaks(e.target.checked)
    }
  }
}
</script>
