<template>
  <div class="capsule-wrapper">
    <div class="chart-name">
      蔬菜销量排行榜
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <ve-funnel
      class="funnel"
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
        show: false,
      },
      series: {
        type: 'funnel',
        left: '10%',
        width: '80%',
        gap: 16,
        minSize: 150,
        sort: 'ascending',
        maxSize: 410,
        label: {
          show: true,
          position: 'inside',
          rich: {
            a: {
              color: 'rgba(222,240,255,1)',
              fontSize: 15,
            },
            b: {
              color: 'rgba(255, 255, 255,1)',
              fontSize: 14,
            },
          },
          formatter: (params) => {
            const { data: { realValue }} = params
            const strArr = realValue.split('|')
            return `{a|${strArr[0]}}  {b|${Number(strArr[1]).toFixed(1)} kg}`
          },
        },
      },
      // series: {
      //   gap: 10,
      //   minSize: 20,
      //   maxSize: 300,
      //   sort: 'ascending',
      //   label: {
      //     normal: {
      //       show: true,
      //       rich: {
      //         a: {
      //           color: 'rgba(222,240,255,1)',
      //           fontSize: 15,
      //         },
      //         b: {
      //           color: 'rgba(248, 188, 56,1)',
      //           fontSize: 14,
      //         },
      //       },
      //       formatter: (params) => {
      //         const { data: { name, realValue }} = params
      //         return `{a|${name}}\n {b|${realValue.toFixed(1)}kg}`
      //       },
      //       position: 'right',
      //       textStyle: {
      //         fontSize: '15',
      //       },
      //     },
      //   },
      // },
    }
    return {
      chartData: {
        columns: ['order', '菜名'],
        rows: [
          // { order: 10, '菜名': '白菜|235' },
          // { order: 20, '菜名': '白萝卜|500' },
          // { order: 30, '菜名': '胡萝卜|87' },
          // { order: 40, '菜名': '西红柿|81' },
          // { order: 50, '菜名': '莴笋| 64' },
          // { order: 60, '菜名': '苦瓜|62' },
        ],
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
          dataArr.push({ order: 10 + i, '菜名': `${item.SP_NM}|${item.OUT_WT}` })
        }
        this.chartData.rows = dataArr
        console.log(dataArr)
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
