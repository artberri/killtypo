<template>
  <div class="item">
    <strong>Time left:</strong> {{ seconds }}"
  </div>
</template>

<script>
export default {
  name: 'clock',
  data () {
    return {
      time: 60,
      deadline: 0
    }
  },
  computed: {
    seconds () {
      return this.time.toFixed(2)
    }
  },
  created () {

  }
}
</script>
