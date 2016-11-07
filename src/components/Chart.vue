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
              borderColor: 'rgba(44, 62, 80, 1)',
              pointRadius: 2,
              backgroundColor: 'rgba(44, 62, 80, 0.4)',
              data: []
            },
            {
              label: 'CPM',
              borderColor: 'rgba(4, 232, 142, 1)',
              pointRadius: 2,
              backgroundColor: 'rgba(4, 232, 142, 0.4)',
              data: []
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: 'Elapsed time (in seconds)'
              }
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