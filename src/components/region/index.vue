<template>
  <div class="region-wrapper">
    <div class="chart-name">
      菜场区域占比
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>

    <dv-active-ring-chart :config="config" style="width:380px;height:380px" />
    <dv-decoration-6 />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: '西陵区',
            value: 55,
          },
          {
            name: '伍家岗区',
            value: 120,
          },
          {
            name: '猇亭区',
            value: 78,
          },
          {
            name: '点军区',
            value: 66,
          },
          {
            name: '夷陵区',
            value: 80,
          },
        ],
        color: ['#ff96ad', '#7ff7d1', '#fcf19f', '#43b3ed', '#22a488'],
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.region-wrapper
  position relative
  width 100%
  height 100%
  text-align center
  // background #aeaeae
  .dv-active-ring-chart
    margin auto
  .chart-name
    position absolute
    top 20px
    right 70px
    margin-bottom 30px
    color rgb(248, 188, 56)
    text-align right
    letter-spacing 4px
    font-size 20px
  .dv-decoration-6
    position absolute
    right 0
    bottom 40px
    left 0
    margin 0 auto
    width 300px
    height 30px
</style>
