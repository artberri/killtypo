<template>
  <span :class="{ show: isWritting }">|</span>
</template>

<script>
export default {
  name: 'blinking-cursor',
  computed: {
    isWritting () {
      return this.$store.state.autocue.isWritting
    }
  }
}
</script>

<style scoped>
span {
  visibility: hidden;
  animation: 1s blink step-end infinite;
  font-size: 46px;
}

.show {
  visibility: visible;
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
