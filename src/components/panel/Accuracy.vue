<template>
  <div class="item">
    <strong>{{ $t("panel.accuracy") }}:</strong> {{ accuracy }}%
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
