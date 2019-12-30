<template>
  <div class="day-trading">
    <div class="chart-name">
      10日交易走势
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <ve-line
      class="line"
      :data="chartData"
      :extend="chartExtend"
    />
  </div>
</template>

<script>
import { postRequest } from 'common/utils/request'
export default {
  data() {
    this.chartExtend = {
      legend: {
        left: '10',
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
      'series.0.color': '#fd6f61',
      'series.1.color': '#04c3ac',
    }
    return {
      chartData: {
        columns: ['日', '交易额', '交易量'],
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
      postRequest({ cmd: 'loadsalestenday' }).then(res => {
        const dataArr = []
        for (let i = 0; i < res.result.length; i++) {
          const item = res.result[i]
          dataArr.push({ '日': item.DAY, '交易额': item.JE, '交易量': item.WT })
        }
        this.chartData.rows = dataArr
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.day-trading
  position relative
  display inline-block
  box-sizing border-box
  vertical-align top
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
