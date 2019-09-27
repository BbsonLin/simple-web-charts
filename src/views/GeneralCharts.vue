<template>
  <b-container class="py-3">
    <h3 id="line-charts" class="py-2">Line Charts</h3>
    <GChart
      type="LineChart"
      :data="lineDataset.source"
      :options="gchartsLineOptions"
      :createChart="(el, google) => new google.charts.Line(el)"
      :settings="{ packages: ['corechart', 'line'] }"
    />
    <v-chart
      :init-options="echartsInitOptions"
      :options="echartsLineOptions"
      auto-resize
    />
    <hr>
    <h3 id="bar-charts" class="py-2">Bar Charts</h3>
    <GChart
      type="ColumnChart"
      :data="lineDataset.source"
      :options="gchartsLineOptions"
    />
  </b-container>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  data() {
    return {
      lineDataset: {
        // Provide data.
        source: [
          ['Product', '2015', '2016', '2017'],
          ['Matcha Latte', ...this.randomize()],
          ['Milk Tea', ...this.randomize()],
          ['Cheese Cocoa', ...this.randomize()],
          ['Walnut Brownie', ...this.randomize()]
        ]
      },
      gchartsLineOptions: {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      },
      gchartsLineSettings: {
        packages: ['line']
      },
      echartsInitOptions: {
        renderer: 'canvas'
      },
      echartsLineOptions: {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['Product', '2015', '2016', '2017'],
            ['Matcha Latte', ...this.randomize()],
            ['Milk Tea', ...this.randomize()],
            ['Cheese Cocoa', ...this.randomize()],
            ['Walnut Brownie', ...this.randomize()]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }]
      }
    }
  },
  methods: {
    randomize() {
      // eslint-disable-next-line no-unused-vars
      return [0, 0, 0].map(v => {
        return Math.round(300 + Math.random() * 700) / 10
      })
    }
  }
}
</script>

<style lang="scss">
.echarts {
  height: 50vh;
  width: 100%;
}
</style>
