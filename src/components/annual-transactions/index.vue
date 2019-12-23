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
import echarts from 'echarts/lib/echarts'
export default {
  data() {
    this.chartExtend = {
      legend: {
        left: '30',
        textStyle: {// 图例文字的样式
          color: '#FFF',
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
      'series.0.barWidth': 15,
      'series.0.itemStyle.normal': {
        // barBorderRadius: [15, 15, 15, 15],
        barBorderRadius: 15,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 1, color: 'rgba(127, 128, 225, 0.7)',
        }, {
          offset: 0.9, color: 'rgba(72, 73, 181, 0.7)',
        }, {
          offset: 0.25, color: 'rgba(226, 99, 74, 0.7)',
        }, {
          offset: 0, color: 'rgba(253, 200, 106, 0.7)',
        }], false),
      },
      'series.1.barWidth': 15,
      'series.1.itemStyle.normal': {
        barBorderRadius: 15,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 1, color: 'rgba(127, 128, 225, 0.7)',
        }, {
          offset: 0.9, color: 'rgba(72, 73, 181, 0.7)',
        }, {
          offset: 0.31, color: 'rgba(0, 208, 208, 0.7)',
        }, {
          offset: 0.15, color: 'rgba(0, 208, 208, 0.7)',
        }, {
          offset: 0, color: 'rgba(104, 253, 255, 0.7)',
        }], false),
      },
    }

    return {
      chartData: {
        columns: ['月', '交易额', '交易量'],
        rows: [
          { '月': '1月', '交易额': 1393, '交易量': 1093 },
          { '月': '2月', '交易额': 3530, '交易量': 3230 },
          { '月': '3月', '交易额': 2923, '交易量': 2623 },
          { '月': '4月', '交易额': 1723, '交易量': 1423 },
          { '月': '5月', '交易额': 3792, '交易量': 3492 },
          { '月': '6月', '交易额': 4593, '交易量': 4293 },
          { '月': '7月', '交易额': 4593, '交易量': 4293 },
          { '月': '8月', '交易额': 4593, '交易量': 4293 },
          { '月': '9月', '交易额': 4593, '交易量': 4293 },
          { '月': '10月', '交易额': 4593, '交易量': 4293 },
          { '月': '11月', '交易额': 4593, '交易量': 4293 },
          { '月': '12月', '交易额': 4593, '交易量': 4293 },
        ],
      },

    }
  },
}
</script>
<style lang="stylus" scoped>
.tannual-transactions-wrapper
  position relative
  display inline-block
  box-sizing border-box
  // background #78797a
  width 70%
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
