<template>
  <div class="item">
    <strong>{{ $t("panel.elapsed") }}:</strong> {{ minutes }}:{{ seconds }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    ...mapGetters({
      final: 'finalTime'
    }),
    elapsed () {
      let elapsedTime = null
      let startTime = this.$store.state.game.startTime

      if (startTime > 0) {
        elapsedTime = this.now - startTime
      }

      return elapsedTime
    },
    timeToShow () {
      let response = this.elapsed

      if (this.$store.state.game.finished) {
        response = this.final
      }

      return response
    },
    minutes () {
      let minutes = '00'
      let timeToShow = this.timeToShow

      if (timeToShow !== null) {
        minutes = Math.trunc(timeToShow / 60000) % 60
      }

      return this.format(minutes)
    },
    seconds () {
      let seconds = '00'
      let timeToShow = this.timeToShow

      if (timeToShow !== null) {
        seconds = Math.trunc(timeToShow / 1000) % 60
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
