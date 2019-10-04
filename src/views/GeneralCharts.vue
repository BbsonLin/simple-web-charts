<template>
  <b-container class="py-3" fluid>
    <h3 id="line-charts" class="py-2">Line Charts</h3>
    <b-row>
      <b-col class="d-flex align-items-center justify-content-center">
        <GChart
          type="LineChart"
          :data="dataset.source"
          :options="gchartsLineOptions"
          :createChart="(el, google) => new google.charts.Line(el)"
          :settings="{ packages: ['corechart', 'line'] }"
        />
      </b-col>
      <b-col>
        <EChart
          :init-options="echartsInitOptions"
          :options="echartsLineOptions"
          auto-resize
        />
      </b-col>
    </b-row>

    <hr />

    <h3 id="area-charts" class="py-2">Area Charts</h3>
    <b-row>
      <b-col class="d-flex align-items-center justify-content-center">
        <GChart
          type="AreaChart"
          :data="dataset.source"
          :options="gchartsAreaOptions"
          :settings="{ packages: ['corechart'] }"
        />
      </b-col>
      <b-col>
        <EChart
          :init-options="echartsInitOptions"
          :options="echartsAreaOptions"
          auto-resize
        />
      </b-col>
    </b-row>

    <hr />

    <h3 id="column-charts" class="py-2">Column Charts</h3>
    <b-row>
      <b-col class="d-flex align-items-center justify-content-center">
        <GChart
          type="ColumnChart"
          :data="dataset.source"
          :options="gchartsLineOptions"
        />
      </b-col>
      <b-col>
        <EChart
          :init-options="echartsInitOptions"
          :options="echartsColumnOptions"
          auto-resize
        />
      </b-col>
    </b-row>

    <hr />

    <h3 id="pie-charts" class="py-2">Pie Charts</h3>
    <b-row>
      <b-col class="d-flex align-items-center justify-content-center">
        <GChart
          type="PieChart"
          :data="dataset.source"
          :options="gchartsPieOptions"
          :settings="{ packages: ['corechart'] }"
        />
      </b-col>
      <b-col>
        <EChart
          :init-options="echartsInitOptions"
          :options="echartsPieOptions"
          auto-resize
        />
      </b-col>
    </b-row>
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
      dataset: {
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
        legend: { position: 'bottom' },
        width: 600,
        height: 500
      },
      gchartsLineSettings: {
        packages: ['line']
      },
      gchartsAreaOptions: {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        width: 600,
        height: 500
      },
      gchartsPieOptions: {
        title: 'Company Performance',
        width: 600,
        height: 500
      },
      echartsInitOptions: {
        renderer: 'canvas'
      }
    }
  },
  computed: {
    echartsLineOptions() {
      return {
        legend: {},
        tooltip: {},
        dataset: this.dataset,
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }]
      }
    },
    echartsAreaOptions() {
      return {
        legend: {},
        tooltip: {},
        dataset: this.dataset,
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          { type: 'line', areaStyle: {} },
          { type: 'line', areaStyle: {} },
          { type: 'line', areaStyle: {} }
        ]
      }
    },
    echartsColumnOptions() {
      return {
        legend: {},
        tooltip: {},
        dataset: this.dataset,
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }
    },
    echartsPieOptions() {
      return {
        legend: {},
        tooltip: {},
        dataset: this.dataset,
        series: [{ type: 'pie' }, { type: 'pie' }, { type: 'pie' }]
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
</style>
