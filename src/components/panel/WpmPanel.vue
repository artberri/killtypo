<template>
  <div class="item">
    <strong>{{ $t("panel.wpm") }}:</strong> {{ wpm }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'wpm-panel',
  computed: {
    ...mapGetters({
      wpm: 'wpm'
    })
  }
}
</script>
