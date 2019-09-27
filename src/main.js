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

// Vue I18N
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// Ref: https://github.com/kazupon/vue-i18n/issues/474#issuecomment-444817451
import { languages } from './i18n/index.js'
import { defaultLocale } from './i18n/index.js'
const messages = Object.assign(languages)

var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})

// Vue
Vue.config.productionTip = false

// Ref: https://github.com/vuejs/vue-router/issues/1668#issuecomment-437744248
const fixIdScrolling = {
  watch: {
    $route(to, from) {
      const currentRoute = this.$router.currentRoute
      const idToScrollTo = currentRoute.hash
      this.$nextTick(() => {
        if (idToScrollTo && document.querySelector(idToScrollTo)) {
          document.querySelector(idToScrollTo).scrollIntoView()
        }
      })
    }
  }
}

new Vue({
  mixins: [fixIdScrolling],
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
