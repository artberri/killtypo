<template>
  <input class="secretinput" v-on:keyup="keypressed" v-on:blur="focus">
</template>

<script>
export default {
  name: 'secret-input',
  mounted () {
    this.$el.focus()
  },
  methods: {
    focus (event) {
      setTimeout(function () {
        event.target.focus()
      }, 16)
    },
    keypressed (event) {
      this.$store.commit('setSecretContent', event.target.value)
      this.$store.commit('setLastKeyEvent', event, { silent: true })
    }
  }
}
</script>

<style scoped>
.secretinput {
  display: inline-block;
  height: 0;
  width: 0;
  border: 0;
}
</style>
