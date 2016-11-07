<template>
  <div class="item">
    <strong>{{ $t("panel.cpm") }}:</strong> {{ cpm }}
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
