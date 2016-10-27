<template>
  <div class="clock">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clock {
  background: #eee;
  display: inline-block;
  padding: 3px 10px;
  margin: 10px 20px;
  border-radius: 2px;
}
</style>
