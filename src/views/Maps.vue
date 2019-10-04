<template>
  <b-container class="py-3">
    <!-- <b-form-select v-model="selected" :options="options"></b-form-select> -->
    <h5 class="mt-3">
      <strong>{{ selected }}</strong>
    </h5>

    <GChart
      v-if="selected == 'gcharts'"
      type="GeoChart"
      :data="gchartsData"
      :options="gchartsOptions"
      :settings="gchartsSettings"
    />
    <EChart
      v-if="selected == 'echarts'"
      :init-options="echartsInitOptions"
      :options="echartsOptions"
      auto-resize
    />
  </b-container>
</template>

<script>
import { GChart } from 'vue-google-charts'
import bmapTW from '@/data/bmap-tw'

export default {
  components: {
    GChart
  },
  data() {
    return {
      mapType: 'gcharts',
      options: [
        { value: 'gcharts', text: 'Google Charts' },
        { value: 'echarts', text: 'ECharts' }
      ],
      gchartsData: [
        ['City', 'Popularity'],
        ['Taipei', 268],
        ['New Taipei', 401],
        ['Taoyuan', 224],
        ['Taichung', 281],
        ['Kaohsiung', 277],
        ['Tainan', 188]
      ],
      gchartsOptions: {
        // sizeAxis: { minValue: 0, maxValue: 100 },
        region: 'TW',
        displayMode: 'markers',
        markerOpacity: 0.7,
        magnifyingGlass: { enable: true, zoomFactor: 10.0 },
        colorAxis: { colors: ['#32CD32', '#006400'] }
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
          min: 180,
          max: 450,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          calculable: true,
          itemHeight: 70,
          inRange: {
            color: ['#32CD32', '#006400']
          }
        },
        bmap: bmapTW,
        series: [
          {
            name: 'Popularity',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              { name: 'Taipei', value: [121.567, 25.016, 268] },
              { name: 'New Taipei', value: [121.45, 25.016, 401] },
              { name: 'Taoyuan', value: [121.3, 24.983, 224] },
              { name: 'Taichung', value: [120.616, 24.183, 281] },
              { name: 'Kaohsiung', value: [120.283, 22.633, 277] },
              { name: 'Tainan', value: [120.15, 23.0, 188] }
            ],
            symbolSize: val => val[2] / 23,
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
  },
  computed: {
    selected: {
      get() {
        if (this.$i18n.locale != 'zh_cn') {
          return 'gcharts'
        } else {
          return 'echarts'
        }
      },
      set(val) {
        this.mapType = val
      }
    }
  }
}
</script>

<style lang="scss">
.echarts {
  height: 70vh;
  width: 100%;
}
</style>
