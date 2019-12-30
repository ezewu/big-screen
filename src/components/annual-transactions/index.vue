<template>
  <div class="tannual-transactions-wrapper">
    <div class="chart-name">
      年度交易状况
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <ve-histogram
      :data="chartData"
      :extend="chartExtend"
      :tooltip-visible="false"
      class="histogram"
    />
  </div>
</template>

<script>
import { postRequest } from 'common/utils/request'
export default {
  data() {
    this.chartExtend = {
      legend: {
        left: '30',
        textStyle: {// 图例文字的样式
          color: '#EEE',
          fontSize: 16,
        },
      },
      yAxis: {
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
          },
        },
        axisLabel: {
          // formatter: '{value}次',
          textStyle: {
            color: '#FFFFFF',
          },
        },
      },
      xAxis: {
        axisLabel: {
          color: '#FFF',
        },
      },
      'series.0.barWidth': 10,
      // 'series.0.itemStyle.normal.color': '#4ad2ff',
      // 'series.1.itemStyle.normal.color': '#3DE7C9',
      // 'series.0.itemStyle.normal': {
      //   // barBorderRadius: [15, 15, 15, 15],
      //   barBorderRadius: 15,
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //     offset: 1, color: 'rgba(127, 128, 225, 0.7)',
      //   }, {
      //     offset: 0.9, color: 'rgba(72, 73, 181, 0.7)',
      //   }, {
      //     offset: 0.25, color: 'rgba(226, 99, 74, 0.7)',
      //   }, {
      //     offset: 0, color: 'rgba(253, 200, 106, 0.7)',
      //   }], false),
      // },
      'series.1.barWidth': 10,
      // 'series.1.itemStyle.normal': {
      //   barBorderRadius: 15,
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //     offset: 1, color: 'rgba(127, 128, 225, 0.7)',
      //   }, {
      //     offset: 0.9, color: 'rgba(72, 73, 181, 0.7)',
      //   }, {
      //     offset: 0.31, color: 'rgba(0, 208, 208, 0.7)',
      //   }, {
      //     offset: 0.15, color: 'rgba(0, 208, 208, 0.7)',
      //   }, {
      //     offset: 0, color: 'rgba(104, 253, 255, 0.7)',
      //   }], false),
      // },
    }

    return {
      chartData: {
        columns: ['月', '交易额', '交易量'],
        rows: [],
      },
    }
  },
  created() {
    this.postRequest()
    const { postRequest } = this
    setInterval(postRequest, 300000)
  },
  methods: {
    postRequest() {
      postRequest({ cmd: 'loadsalesyear' }).then(res => {
        const dataArr = []
        for (let i = 0; i < res.result.length; i++) {
          const item = res.result[i]
          dataArr.push({ '月': item.MONTH, '交易额': item.JE, '交易量': item.WT })
        }
        this.chartData.rows = dataArr
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.tannual-transactions-wrapper
  position relative
  display inline-block
  box-sizing border-box
  vertical-align top
  // background #78797a
  width 40%
  height 100%
  .chart-name
    position absolute
    top 20px
    right 70px
    margin-bottom 30px
    color rgb(248, 188, 56)
    text-align right
    letter-spacing 4px
    font-size 20px
  .histogram
    padding-top 40px
</style>
