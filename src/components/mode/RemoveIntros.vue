<template>
  <div>
    <input id="remove-intros" v-on:change="updateRemoveLineBreaks" :checked="removeLineBreaks" type="checkbox" class="switch">
    <label for="remove-intros" class="switch-label"></label>
    <label for="remove-intros" class="real-label">{{ $t("mode.lineBreak") }}</label>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import * as types from '../../store/mutation-types'
import LanguageMixin from '../../mixins/LanguageMixin'

export default {
  name: 'remove-intros',
  mixins: [LanguageMixin],
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
