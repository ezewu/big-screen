<template>
  <div id="sales-volume-two">
    <div class="title">TOP5 销售量</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'SalesVolume',
  data() {
    return {
      config: {
        data: [
          {
            name: '葛洲坝菜市场',
            value: 55,
          },
          {
            name: '七里冲菜市场',
            value: 120,
          },
          {
            name: '南苑菜市场',
            value: 78,
          },
          {
            name: '北门菜市场',
            value: 66,
          },
          {
            name: '东门菜市场',
            value: 80,
          },

        ],
        rowNum: 4,
        waitTime: 8000,
        unit: 'kg',
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/common'
#sales-volume-two
  box-sizing border-box
  padding 0 20px
  width 100%
  height 100%
  // background #68697a
  title()
  .dv-scroll-ranking-board
    margin-top 20px
    height 340px
    >>>.ranking-column
      border-bottom 2px solid rgba(200, 200, 200, 0.3)
      .inside-column
        height 6px
        background-color #03a4d8
    >>>.ranking-info .rank
      color rgb(248, 188, 56)
</style>
