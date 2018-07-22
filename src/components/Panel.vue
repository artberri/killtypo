<template>
  <div>
    <clock></clock>
    <wpm-panel></wpm-panel>
    <cpm-panel></cpm-panel>
    <accuracy></accuracy>
  </div>
</template>

<script>
import Clock from './panel/Clock'
import WpmPanel from './panel/WpmPanel'
import Accuracy from './panel/Accuracy'
import CpmPanel from './panel/CpmPanel'

export default {
  name: 'panel',
  components: {
    Clock,
    WpmPanel,
    Accuracy,
    CpmPanel
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
