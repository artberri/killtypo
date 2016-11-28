<template>
  <div>
    <canvas id="result-chart" class="chart" width="634" height="400"></canvas>
  </div>
</template>

<script>
import Vue from 'vue'
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
              label: Vue.t('chart.errors'),
              borderColor: 'rgba(199, 6, 6, 1)',
              pointRadius: 5,
              backgroundColor: 'rgba(199, 6, 6, 1)',
              data: []
            },
            {
              type: 'line',
              label: Vue.t('panel.wpm'),
              borderColor: 'rgba(44, 62, 80, 1)',
              pointRadius: 0,
              backgroundColor: 'rgba(44, 62, 80, 0.4)',
              data: []
            },
            {
              type: 'line',
              label: Vue.t('panel.cpm'),
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
                return Vue.t('chart.tooltipWrong')
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
                labelString: Vue.t('chart.xAxisLabel')
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