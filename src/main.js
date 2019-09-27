import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue-ECharts
import VueECharts from 'vue-echarts'

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataset'
import 'echarts/extension/bmap/bmap'

Vue.component('v-chart', VueECharts)

// Vue-Google-Charts
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

// BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
