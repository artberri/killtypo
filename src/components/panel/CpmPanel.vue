<template>
  <div class="item">
    <strong>CPM:</strong> {{ cpm }}
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
