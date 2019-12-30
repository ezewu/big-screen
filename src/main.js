import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'assets/stylus/index.styl'
import 'assets/icons'

// 按需引入
import { decoration8, decoration3, decoration6, decoration5, borderBox1, borderBox3, borderBox8, scrollBoard, scrollRankingBoard, activeRingChart, decoration10, digitalFlop } from '@jiaminghi/data-view'

Vue.use(borderBox1)
  .use(borderBox3)
  .use(borderBox8)
  .use(scrollBoard)
  .use(scrollRankingBoard)
  .use(activeRingChart)
  .use(decoration10)
  .use(digitalFlop)
  .use(decoration8)
  .use(decoration5)
  .use(decoration3)
  .use(decoration6)

import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VeFunnel from 'v-charts/lib/funnel.common'
Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VeFunnel.name, VeFunnel)

import vueParticleLine from 'vue-particle-line'
import 'vue-particle-line/dist/vue-particle-line.css'
Vue.use(vueParticleLine)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
