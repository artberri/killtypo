<template>
  <div class="item">
    <strong v-t="{path: 'panel.cpm', locale: $route.meta.lang}"></strong>: {{ cpm }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'vpm-panel',
  computed: {
    ...mapGetters({
      cpm: 'getCpm'
    })
  }
}
</script>
