<template>
  <div class="item">
    <strong>Time elapsed:</strong> {{ minutes }}:{{ seconds }}
  </div>
</template>

<script>
export default {
  name: 'clock',
  created () {
    window.setInterval(() => {
      this.now = Date.now()
    }, 1000)
  },
  data () {
    return {
      now: Date.now()
    }
  },
  computed: {
    minutes () {
      let startTime = this.$store.state.game.startTime
      let minutes = '00'

      if (startTime > 0) {
        minutes = Math.trunc((this.now - startTime) / 60000) % 60
      }

      return this.format(minutes)
    },
    seconds () {
      let startTime = this.$store.state.game.startTime
      let seconds = '00'

      if (startTime > 0) {
        seconds = Math.trunc((this.now - startTime) / 1000) % 60
      }

      return this.format(seconds)
    }
  },
  methods: {
    format (number) {
      number = number + ''
      if (number.length === 1) {
        number = '0' + number
      }

      return number
    }
  }
}
</script>
