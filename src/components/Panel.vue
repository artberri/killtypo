<template>
  <div>
    <clock></clock>
  </div>
</template>

<script>
import Clock from './panel/Clock'

export default {
  name: 'panel',
  components: {
    Clock
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