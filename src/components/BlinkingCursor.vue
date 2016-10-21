<template>
  <span class="blinking-cursor">|</span>
</template>

<script>
export default {
  name: 'blinking-cursor'
}
</script>

<style scoped>
.blinking-cursor {
  animation: 1s blink step-end infinite;
  font-size: 46px;
}

@keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
