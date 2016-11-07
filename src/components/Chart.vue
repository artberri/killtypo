<template>
  <div>
    <canvas id="result-chart" class="chart" width="634" height="400"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from 'chart.js'

let chart

export default {
  name: 'chart',
  computed: {
    ...mapGetters({
      cpmDataPoints: 'getCpmChartData',
      wpmDataPoints: 'getWpmChartData'
    })
  },
  mounted () {
    this.createChart()
  },
  watch: {
    wpmDataPoints: function (newWpmDataPoints) {
      chart.data.datasets[0].data = newWpmDataPoints
      chart.update()
    },
    cpmDataPoints: function (newCpmDataPoints) {
      chart.data.datasets[1].data = newCpmDataPoints
      chart.update()
    }
  },
  methods: {
    createChart () {
      let ctx = document.getElementById('result-chart')
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'WPM',
              data: []
            },
            {
              label: 'CPM',
              data: []
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }]
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.chart {
  max-width: 634px;
  margin: 40px auto;
}
</style>