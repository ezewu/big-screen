import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'assets/stylus/index.styl'
import 'assets/icons'

// 按需引入
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
