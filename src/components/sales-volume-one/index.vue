<template>
  <div id="sales-volume-one">
    <div class="title">TOP5 销售额</div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
import { postRequest } from 'common/utils/request'
export default {
  name: 'SalesVolume',
  data() {
    return {
      config: {},
    }
  },
  created() {
    this.postRequest()
    const { postRequest } = this
    setInterval(postRequest, 300000)
  },
  methods: {
    postRequest() {
      postRequest({ cmd: 'loadsalesdaytopje' }).then(res => {
        const dataArr = []
        for (let i = 0; i < res.result.length; i++) {
          const item = res.result[i]
          dataArr.push({ name: item.NAME, value: item.JE })
        }
        this.config = {
          data: dataArr,
          rowNum: 4,
          waitTime: 5000,
          unit: '元',
        }
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/common'
#sales-volume-one
  box-sizing border-box
  padding 0 20px
  width 100%
  height 100%
  // background #aeaeae
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
