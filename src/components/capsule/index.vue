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
            formatter: '{a|{b}}\n{c|{c}kg}',
            rich: {
              a: {
                color: 'rgba(222,240,255,1)',
                fontSize: 15,
              },
              b: {
                color: 'rgba(255,255,255,1)',
                fontSize: 14,
              },
            },
            // formatter: (params) => {
            //   const { data: { name, realValue }} = params
            //   return `${name}\n  ${realValue}kg`
            // },
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
        rows: [
          { '菜名': '白菜', '数值': 900 },
          { '菜名': '萝卜', '数值': 600 },
          { '菜名': '四季豆', '数值': 300 },
          { '菜名': '黄瓜', '数值': 1200 },
        ],
      },
    }
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
