<template>
  <b-container class="py-3">
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <h5 class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </h5>

    <GChart
      v-if="selected == 'gcharts'"
      type="GeoChart"
      :data="gchartsData"
      :options="gchartsOptions"
      :settings="gchartsSettings"
    />
    <v-chart
      v-if="selected == 'echarts'"
      :init-options="echartsInitOptions"
      :options="echartsOptions"
      auto-resize
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
      selected: 'gcharts',
      options: [
        { value: 'gcharts', text: 'Google Charts' },
        { value: 'echarts', text: 'ECharts' }
      ],
      gchartsData: [
        ['Country', 'Popularity'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
      ],
      gchartsOptions: {
        // sizeAxis: { minValue: 0, maxValue: 100 },
        region: 'IT',
        displayMode: 'markers',
        magnifyingGlass: { enable: true, zoomFactor: 10.0 }
        // colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
      },
      gchartsSettings: {
        packages: ['geochart'],
        mapsApiKey: 'AIzaSyAnihhL5-ktWH27nA3mQlWNYLtQCKlLomc'
      },
      echartsInitOptions: {
        renderer: 'canvas'
      },
      echartsOptions: {
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return params.data.name + ' : ' + params.value[2]
          }
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['sale'],
          textStyle: {
            color: '#323c48'
          }
        },
        visualMap: {
          min: 0,
          max: 0,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          calculable: true,
          itemHeight: 70,
          inRange: {
            color: ['#005316', '#00CC35']
          }
        },
        bmap: {
          center: [108.95, 34.27],
          zoom: 5,
          roam: true
        },
        series: [
          {
            name: 'sale',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [],
            symbolSize: val => val[2] / 10,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#00CC35'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.echarts {
  height: 60vh;
  width: 100%;
}
</style>
