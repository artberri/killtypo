<template>
  <div>
    <clock></clock>
    <wpm-panel></wpm-panel>
  </div>
</template>

<script>
import Clock from './panel/Clock'
import WpmPanel from './panel/WpmPanel'

export default {
  name: 'panel',
  components: {
    Clock,
    WpmPanel
  }
}
</script>

<style scoped>
.item {
  background: #eee;
  display: inline-block;
  padding: 3px 10px;
  margin: 10px 20px;
  border-radius: 2px;
}
</style>