<template>
  <div class="day-trading">
    <div class="chart-name">
      10日交易走势
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <ve-line class="line" :data="chartData" :extend="chartExtend" />
  </div>
</template>

<script>
export default {
  data() {
    this.chartExtend = {
      legend: {
        left: '10',
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
      'series.0.color': '#fd6f61',
      'series.1.color': '#04c3ac',
    }
    return {
      chartData: {
        columns: ['日', '交易额', '交易量'],
        rows: [
          { '日': '1日', '交易额': 1393, '交易量': 1093 },
          { '日': '2日', '交易额': 3530, '交易量': 3230 },
          { '日': '3日', '交易额': 2923, '交易量': 2623 },
          { '日': '4日', '交易额': 1723, '交易量': 1423 },
          { '日': '5日', '交易额': 3792, '交易量': 3492 },
          { '日': '6日', '交易额': 4593, '交易量': 4293 },
          { '日': '7日', '交易额': 4593, '交易量': 4293 },
          { '日': '8日', '交易额': 4593, '交易量': 4293 },
          { '日': '9日', '交易额': 4593, '交易量': 4293 },
          { '日': '10日', '交易额': 4593, '交易量': 4293 },

        ],
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.day-trading
  position relative
  display inline-block
  box-sizing border-box
  width 30%
  height 100%
  // background #68697a
  .chart-name
    position absolute
    top 20px
    right 40px
    color rgb(248, 188, 56)
    text-align right
    letter-spacing 4px
    font-size 20px
  .line
    padding-top 40px
</style>
