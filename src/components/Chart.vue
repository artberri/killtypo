<template>
  <div>
    <canvas id="result-chart" class="chart" width="634" height="400"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from 'chart.js'

const ERROR_INDEX = 0
const WPM_INDEX = 1
const CPM_INDEX = 2

let chart

export default {
  name: 'chart',
  computed: {
    ...mapGetters({
      cpmDataPoints: 'getCpmChartData',
      wpmDataPoints: 'getWpmChartData',
      errorDataPoints: 'getErrorChartData'
    })
  },
  mounted () {
    this.createChart()
  },
  watch: {
    wpmDataPoints: function (newWpmDataPoints) {
      chart.data.datasets[WPM_INDEX].data = newWpmDataPoints
      chart.update()
    },
    cpmDataPoints: function (newCpmDataPoints) {
      chart.data.datasets[CPM_INDEX].data = newCpmDataPoints
      chart.update()
    },
    errorDataPoints: function (newErrorDataPoints) {
      chart.data.datasets[ERROR_INDEX].data = newErrorDataPoints
      chart.update()
    }
  },
  methods: {
    createChart () {
      let ctx = document.getElementById('result-chart')
      chart = new Chart(ctx, {
        type: 'bar',
        labels: ['January'],
        data: {
          labels: [],
          datasets: [
            {
              type: 'bubble',
              label: this.$t('chart.errors', this.$route.meta.lang),
              borderColor: 'rgba(199, 6, 6, 1)',
              pointRadius: 5,
              backgroundColor: 'rgba(199, 6, 6, 1)',
              data: []
            },
            {
              type: 'line',
              label: 'WPM',
              borderColor: 'rgba(44, 62, 80, 1)',
              pointRadius: 0,
              backgroundColor: 'rgba(44, 62, 80, 0.4)',
              data: []
            },
            {
              type: 'line',
              label: 'CPM',
              borderColor: 'rgba(4, 232, 142, 1)',
              pointRadius: 0,
              backgroundColor: 'rgba(4, 232, 142, 0.4)',
              data: []
            }
          ]
        },
        options: {
          barThickness: 20,
          tooltips: {
            callbacks: {
              title (tooltip, data) {
                return this.$t('chart.tooltipWrong', this.$route.meta.lang)
              },
              label (tooltip, data) {
                let datasetIndex = tooltip.datasetIndex
                let dataIndex = tooltip.index
                let dataset = data.datasets[datasetIndex]
                let wrongLetter = dataset.data[dataIndex]

                return wrongLetter.letter
              }
            }
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              scaleLabel: {
                display: true,
                labelString: this.$t('chart.xAxisLabel', this.$route.meta.lang)
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
