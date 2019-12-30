<template>
  <div class="capsule-wrapper">
    <div class="chart-name">
      蔬菜销量排行榜
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <ve-funnel class="funnel" :data="chartData" :extend="chartExtend" />
  </div>
</template>

<script>
import { postRequest } from 'common/utils/request'
export default {
  data() {
    this.chartExtend = {
      legend: {
        show: false,
      },
      series: {
        gap: 10,
        minSize: 20,
        maxSize: 300,
        sort: 'ascending',
        label: {
          normal: {
            show: true,
            rich: {
              a: {
                color: 'rgba(222,240,255,1)',
                fontSize: 15,
              },
              b: {
                color: 'rgba(248, 188, 56,1)',
                fontSize: 14,
              },
            },
            formatter: (params) => {
              const { data: { name, realValue }} = params
              return `{a|${name}}\n {b|${realValue.toFixed(1)}kg}`
            },
            position: 'right',
            textStyle: {
              fontSize: '15',
            },
          },
        },
      },
    }
    return {
      chartData: {
        columns: ['菜名', '数值'],
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
      postRequest({ cmd: 'loadsalesdaytopvage' }).then(res => {
        const dataArr = []
        const arr = res.result.slice(0, 6)
        for (let i = 0; i < arr.length; i++) {
          const item = arr[i]
          dataArr.push({ '菜名': item.SP_NM, '数值': Number(item.OUT_WT) })
        }
        this.chartData.rows = dataArr
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.capsule-wrapper
  position relative
  display inline-block
  box-sizing border-box
  width 30%
  height 100%
  vertical-align top
  .chart-name
    position absolute
    top 20px
    right 70px
    margin-bottom 30px
    color rgb(248, 188, 56)
    text-align right
    letter-spacing 4px
    font-size 20px
  .funnel
    padding-top 40px
</style>
