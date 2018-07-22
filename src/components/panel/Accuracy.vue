<template>
  <div class="item">
    <strong v-t="{path: 'panel.accuracy', locale: $route.meta.lang}"></strong>: {{ accuracy }}%
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'accuracy',
  computed: {
    ...mapGetters({
      accuracy: 'getAccuracy'
    })
  }
}
</script>
