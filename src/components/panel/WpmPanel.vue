<template>
  <div class="item">
    <strong v-t="{path: 'panel.wpm', locale: $route.meta.lang}"></strong>: {{ wpm }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'wpm-panel',
  computed: {
    ...mapGetters({
      wpm: 'getWpm'
    })
  }
}
</script>
