<template>
  <div class="item">
    <strong>WPM:</strong> {{ wpm }}
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
